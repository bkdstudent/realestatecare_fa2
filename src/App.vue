<script setup>
//import DashBoard from './components/DashBoard.vue'
import { mdiSquare, mdiCircle, mdiTriangleDown,
          mdiBellOutline, mdiCogOutline,
          mdiBookmarkOutline, mdiCheckCircle, mdiViewComfy, mdiCog,
          mdiWrenchOutline, mdiMagnify, mdiInformationVariantCircleOutline } from '@mdi/js'
</script>

<template>
  <v-app>

    <v-layout>

      <v-app-bar color="primary" density="comfortable" height="30" class="px-3">

        <v-spacer />

        <v-btn icon size="small" variant="text">
          <v-icon :icon="mdiSquare" size="18"/>
        </v-btn>
        <v-btn icon size="small" variant="text">
          <v-icon :icon="mdiCircle" size="18"/>
        </v-btn>
        <v-btn icon size="small" variant="text">
          <v-icon :icon="mdiTriangleDown" size="18"/>
        </v-btn>

      </v-app-bar>
      <!-- Hoofdheader + logo -->
      <v-app-bar color="secondary" density="comfortable" height="72" class="px-3">
        <img src="./assets/logo_white_black.svg" alt="logo" height="30">

        <v-spacer />

        <v-btn icon variant="text">
          <v-icon :icon="mdiBellOutline"/>
        </v-btn>
        <v-btn icon variant="text">
          <v-icon :icon="mdiCogOutline"/>
        </v-btn>

      </v-app-bar>

      <v-main class="fill-height">
        <v-container fluid class="fill-height py-4">
          <v-row class="fill-height">

            <v-col cols="6">
              <v-card class="tile-card">
                <v-icon :icon="mdiBookmarkOutline" size="72" />
                <div class="tile-label">Scheduled</div>
              </v-card>
            </v-col>

            <v-col cols="6">
              <v-card class="tile-card">
                <v-icon :icon="mdiCheckCircle" size="72"/>
                <div class="tile-label">Completed</div>
              </v-card>
            </v-col>

            <v-col cols="6">
              <v-card class="tile-card">
                <v-icon :icon="mdiViewComfy" size="72"/>
                <div class="tile-label">Knowledge base</div>
              </v-card>
            </v-col>

            <v-col cols="6">
              <v-card class="tile-card">
                <v-icon :icon="mdiCog" size="72"/>
                <div class="tile-label">Settings</div>
              </v-card>
            </v-col>

          </v-row>
        </v-container>
      </v-main>
      <v-bottom-navigation
          color="primary"
          density="comfortable"
          grow
          height="64"
      >
        <v-btn>
          <v-icon :icon="mdiWrenchOutline"/>
          <span>Active task</span>
        </v-btn>

        <v-btn>
          <v-icon :icon="mdiMagnify"/>
          <span>Search</span>
        </v-btn>

        <v-btn>
          <v-icon :icon="mdiInformationVariantCircleOutline"/>
          <span>Information</span>
        </v-btn>
      </v-bottom-navigation>

    </v-layout>

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
