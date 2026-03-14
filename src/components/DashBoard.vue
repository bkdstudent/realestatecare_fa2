<script setup>
//import DashBoard from './components/DashBoard.vue'
import { useRouter } from 'vue-router'
import { mdiSquare, mdiCircle, mdiTriangleDown,
  mdiBellOutline, mdiCogOutline,
  mdiBookmarkOutline, mdiCheckCircle, mdiViewComfy, mdiCog,
  mdiWrenchOutline, mdiMagnify, mdiInformationVariantCircleOutline } from '@mdi/js'
</script>

<template>

  <v-app>
        <v-container fluid class="fill-height py-4">
          <v-row class="fill-height">

            <v-col cols="6">
              <v-card class="tile-card" hover :to="{ name: 'scheduled'}" style="cursor: pointer;">
                <v-icon :icon="mdiBookmarkOutline" size="72" />
                <div class="tile-label">Scheduled</div>
              </v-card>
            </v-col>

            <v-col cols="6">
              <v-card class="tile-card" hover :to="{ name: 'completed'}" style="cursor: pointer;">
                <v-icon :icon="mdiCheckCircle" size="72"/>
                <div class="tile-label">Completed</div>
              </v-card>
            </v-col>

            <v-col cols="6">
              <v-card class="tile-card" hover :to="{ name: 'knowledgebase'}" style="cursor: pointer;">
                <v-icon :icon="mdiViewComfy" size="72"/>
                <div class="tile-label">Knowledge base</div>
              </v-card>
            </v-col>

            <v-col cols="6">
              <v-card class="tile-card" hover :to="{ name: 'settings'}" style="cursor: pointer;">
                <v-icon :icon="mdiCog" size="72"/>
                <div class="tile-label">Settings</div>
              </v-card>
            </v-col>

          </v-row>
        </v-container>

  </v-app>
</template>

<style scoped>
.tile-card {
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
