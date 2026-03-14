<script setup>
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

</style>