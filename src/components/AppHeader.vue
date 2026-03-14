<script setup>

import { mdiSquare, mdiCircle, mdiTriangleDown,
  mdiBellOutline, mdiCogOutline,
  mdiBookmarkOutline, mdiCheckCircle, mdiViewComfy, mdiCog,
  mdiWrenchOutline, mdiMagnify, mdiInformationVariantCircleOutline } from '@mdi/js'
</script>

<template>
<div>
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
    <img src="./../assets/logo_white_black.svg" alt="logo" height="30">

    <v-spacer />

    <v-btn icon variant="text">
      <v-icon :icon="mdiBellOutline"/>
    </v-btn>
    <v-btn icon variant="text">
      <v-icon :icon="mdiCogOutline"/>
    </v-btn>

  </v-app-bar>
</div>
</template>

<style scoped>

</style>