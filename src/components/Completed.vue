<script setup>
import { ref, onMounted } from 'vue'
import { mdiCheckCircle, mdiMapMarker, mdiCalendar, mdiChevronRight, mdiAlertCircle, mdiRefresh } from '@mdi/js'
import api from '@/services/api.js'

const reports = ref([])
const loading = ref(false)
const error = ref(null)

const fetchCompletedReports = async() => {
  loading.value = true
  error.value = null
  try {
    const response = await api.getCompletedReports()
    reports.value = response.data
  } catch(err) {
    error.value = 'Rapportages niet opgehaald, probeer het opnieuw!'
  } finally {
    loading.value = false
  }
}
onMounted(async() => {
  await fetchCompletedReports()
})
</script>

<template>
    <v-container fluid class="fill-height py-4">
      <!-- HEADER -->
      <v-row class="mb-2">
        <v-col cols="12">
          <div class="d-flex align-center gap-2">
            <v-icon :icon="mdiCheckCircle" color="primary" size="28"/>
            <span class="text-h6 font-weight-bold">Uitgevoerde rapportages</span>
          </div>
        </v-col>
      </v-row>
      <!-- LOAD -->
      <v-row v-if="loading">
        <v-col cols="12" class="d-flex justify-center py-10">
          <v-progress-circular indeterminate color="primary" size="48" />
        </v-col>
      </v-row>
        <!-- ERROR -->
      <v-row v-else-if="error">
        <v-col cols="12">
          <v-alert type="error" :icon="mdiAlertCircle" variant="tonal" :text="error">
            <template #append>
              <v-btn variant="text" color="error" :prepend-icon="mdiRefresh"
                     @click="fetchComletedReports">
                Opnieuw
              </v-btn>
            </template>
          </v-alert>
        </v-col>
      </v-row>
        <!-- No Result -->
      <v-row v-else-if="reports.length === 0">
        <v-col cols="12">
          <v-alert type="info" variant="tonal" text="Geen uitgevoerde rapportages gevonden." />
        </v-col>
      </v-row>
        <!-- List with Result -->
        <v-row v-else>
          <v-col
            v-for="report in reports"
            :key="report.id"
            cols="12"
            sm="6"
            lg="4">
            <v-card variant="elevated" rounded="lg" hover>
              <!-- Green at the top -->
              <v-card-item>
                <v-card-title class="text-body-1 font-weight-bold">
                  Rapportage #{{ report.id }}
                </v-card-title>
                <v-card-subtitle>
                  <v-chip size="small" color="success" variant="tonal" class="mt-1">
                    Uitgevoerd
                  </v-chip>
                </v-card-subtitle>
              </v-card-item>

              <v-divider />

              <v-card-text>
                <!-- Address -->
                <div class="d-flex align-center gap-2 mb-2">
                  <v-icon :icon="mdiMapMarker"  size="18" color="secondary" />
                  <span class="text-body-2">{{ report.address}}</span>
                  <!-- Date -->
                  <div class="d-flex align-center gap-2">
                    <v-icon :icon="mdiCalendar" size="18" color="secondary" />
                    <span class="text-body-2">{{ report.date }}</span>
                  </div>
                </div>
              </v-card-text>

              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" variant="text" :append-icon="mdiChevronRight"
                       size="small" :to="{ name: 'report-detail', params: { id: report.id}}" >
                  Bekijken
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

    </v-container>

</template>

<style scoped>
.gap-2 {
  gap: 8px;
}
.tile-card {
  cursor: pointer;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  text-align: center;
}

.tile-label {
  font-size: 1rem;
  font-weight: 500;
}

</style>