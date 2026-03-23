<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  mdiArrowLeft, mdiMapMarker, mdiCalendar, mdiAlertCircle,
    mdiRefresh, mdiWrench, mdiHomeAlert, mdiCheckCircle,
    mdiCloseCircle, mdiTagOutline, mdiAccountHardHat
} from '@mdi/js'
import api from '@/services/api.js'

const route = useRoute()
const router = useRouter()

const reportId = route.params.id
const report = ref(null)
const damage = ref([])
const modifications = ref([])
const loading = ref(false)
const error = ref(null)

const schadeTypes = {
  moedwillig: { label: 'Moedwillig', color: 'error' },
  slijtage: { label: 'Slijtage', color: 'warning' },
  geweld: { label: 'Geweld', color: 'error' },
  'normaal gebruik': { label: 'Normaal gebruik', color: 'success' },
  calamiteit: { label: 'Calamiteit', color: 'error' },
  anders: { label: 'Anders', color: 'secondary' }
}
const actieTypes = {
  accepteren: { label: 'Accepteren', color: 'success' },
  'laten keuren': { label: 'Laten keuren', color: 'warning' },
  'laten verwijderen': { label: 'Laten verwijderen', color: 'error' },
  'laten aanpassen en keuren': { label: 'Laten aanpassen en keuren', color: 'warning' }
}
const fetchData = async () => {
  loading.value = true
  error.value = null
  try {
    const [reportRes, damageRes, modificationsRes] = await Promise.all([
      api.getReport(reportId),
      api.getDamageByReport(reportId),
      api.getModificationsByReport(reportId)
    ])
    report.value = reportRes.data
    damage.value = damageRes.data
    modifications.value = modificationsRes.data
  } catch (err) {
    error.value = 'Kon de rapportagegegevens niet ophalen. Probeer het opnieuw.'
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await fetchData()
})
</script>

<template>
  <v-container fluid class="py-4">

    <!-- Terug knop -->
    <v-row class="mb-2">
      <v-col cols="12">
        <v-btn
            variant="text"
            color="primary"
            :prepend-icon="mdiArrowLeft"
            @click="router.back()"
        >
          Terug naar overzicht
        </v-btn>
      </v-col>
    </v-row>

    <!-- Laden -->
    <v-row v-if="loading">
      <v-col cols="12" class="d-flex justify-center py-10">
        <v-progress-circular indeterminate color="primary" size="48" />
      </v-col>
    </v-row>

    <!-- Foutmelding -->
    <v-row v-else-if="error">
      <v-col cols="12">
        <v-alert type="error" :icon="mdiAlertCircle" variant="tonal" :text="error">
          <template #append>
            <v-btn variant="text" color="error" :prepend-icon="mdiRefresh" @click="fetchData">
              Opnieuw
            </v-btn>
          </template>
        </v-alert>
      </v-col>
    </v-row>

    <template v-else-if="report">

      <!-- Rapportage info -->
      <v-row class="mb-2">
        <v-col cols="12">
          <v-card rounded="lg" variant="elevated">
            <v-card-item>
              <template #prepend>
                <v-avatar color="success" variant="tonal" size="42">
                  <v-icon :icon="mdiCheckCircle" />
                </v-avatar>
              </template>
              <v-card-title>Rapportage #{{ report.id }}</v-card-title>
              <v-card-subtitle>
                <v-chip size="small" color="success" variant="tonal" class="mt-1">
                  Uitgevoerd
                </v-chip>
              </v-card-subtitle>
            </v-card-item>
            <v-card-text>
              <div class="d-flex align-center gap-2 mb-2">
                <v-icon :icon="mdiMapMarker" size="18" color="secondary" />
                <span class="text-body-2">{{ report.address }}</span>
              </div>
              <div class="d-flex align-center gap-2">
                <v-icon :icon="mdiCalendar" size="18" color="secondary" />
                <span class="text-body-2">{{ report.date }}</span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Schade -->
      <v-row class="mb-2">
        <v-col cols="12">
          <div class="d-flex align-center gap-2 mb-3">
            <v-icon :icon="mdiHomeAlert" color="primary" size="24" />
            <span class="text-h6 font-weight-bold">Schade</span>
            <v-chip size="small" color="primary" variant="tonal">{{ damage.length }}</v-chip>
          </div>

          <!-- Geen schade -->
          <v-alert
              v-if="damage.length === 0"
              type="info"
              variant="tonal"
              text="Geen schade geregistreerd voor deze rapportage."
          />

          <!-- Schade kaarten -->
          <v-row v-else>
            <v-col
                v-for="item in damage"
                :key="item.id"
                cols="12"
                sm="6"
                lg="4"
            >
              <v-card rounded="lg" variant="outlined">
                <v-card-item>
                  <template #prepend>
                    <v-avatar
                        :color="item.urgent ? 'error' : 'warning'"
                        variant="tonal"
                        size="36"
                    >
                      <v-icon :icon="mdiHomeAlert" size="18" />
                    </v-avatar>
                  </template>
                  <v-card-title class="text-body-1">{{ item.location }}</v-card-title>
                  <v-card-subtitle>
                    <v-chip
                        v-if="schadeTypes[item.type]"
                        size="x-small"
                        :color="schadeTypes[item.type].color"
                        variant="tonal"
                        class="mt-1"
                    >
                      {{ schadeTypes[item.type].label }}
                    </v-chip>
                  </v-card-subtitle>
                </v-card-item>
                <v-card-text class="pt-0">
                  <div class="d-flex align-center gap-1 mb-1">
                    <v-icon
                        :icon="item.newDamage ? mdiAlertCircle : mdiCheckCircle"
                        size="16"
                        :color="item.newDamage ? 'error' : 'success'"
                    />
                    <span class="text-caption">
                      {{ item.newDamage ? 'Nieuwe schade' : 'Bekende schade' }}
                    </span>
                  </div>
                  <div class="d-flex align-center gap-1">
                    <v-icon
                        :icon="item.urgent ? mdiAlertCircle : mdiCheckCircle"
                        size="16"
                        :color="item.urgent ? 'error' : 'success'"
                    />
                    <span class="text-caption">
                      {{ item.urgent ? 'Acute actie vereist' : 'Geen acute actie vereist' }}
                    </span>
                  </div>
                  <p v-if="item.description" class="text-caption text-medium-emphasis mt-2 mb-0">
                    {{ item.description }}
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- Modificaties -->
      <v-row>
        <v-col cols="12">
          <div class="d-flex align-center gap-2 mb-3">
            <v-icon :icon="mdiWrench" color="primary" size="24" />
            <span class="text-h6 font-weight-bold">Modificaties</span>
            <v-chip size="small" color="primary" variant="tonal">{{ modifications.length }}</v-chip>
          </div>

          <!-- Geen modificaties -->
          <v-alert
              v-if="modifications.length === 0"
              type="info"
              variant="tonal"
              text="Geen modificaties geregistreerd voor deze rapportage."
          />

          <!-- Modificatie kaarten -->
          <v-row v-else>
            <v-col
                v-for="item in modifications"
                :key="item.id"
                cols="12"
                sm="6"
                lg="4"
            >
              <v-card rounded="lg" variant="outlined">
                <v-card-item>
                  <template #prepend>
                    <v-avatar color="secondary" variant="tonal" size="36">
                      <v-icon :icon="mdiAccountHardHat" size="18" />
                    </v-avatar>
                  </template>
                  <v-card-title class="text-body-1">{{ item.location }}</v-card-title>
                  <v-card-subtitle>
                    <v-chip size="x-small" color="secondary" variant="tonal" class="mt-1">
                      {{ item.executedBy }}
                    </v-chip>
                  </v-card-subtitle>
                </v-card-item>
                <v-card-text class="pt-0">
                  <div class="d-flex align-center gap-1 mb-2">
                    <v-icon :icon="mdiTagOutline" size="16" color="secondary" />
                    <span class="text-caption font-weight-medium">Te ondernemen actie:</span>
                  </div>
                  <v-chip
                      v-if="actieTypes[item.action]"
                      size="small"
                      :color="actieTypes[item.action].color"
                      variant="tonal"
                  >
                    {{ actieTypes[item.action].label }}
                  </v-chip>
                  <p v-if="item.description" class="text-caption text-medium-emphasis mt-2 mb-0">
                    {{ item.description }}
                  </p>
                  <p v-if="item.comments" class="text-caption text-medium-emphasis mt-1 mb-0">
                    <em>{{ item.comments }}</em>
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

    </template>
  </v-container>
</template>

<style scoped>
.gap-1 { gap: 4px; }
.gap-2 { gap: 8px; }
</style>


