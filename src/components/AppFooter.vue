<script setup>

import {mdiInformationVariantCircleOutline, mdiMagnify, mdiWrenchOutline} from "@mdi/js";
</script>

<template>
  <v-bottom-navigation color="primary" density="comfortable" grow height="64">
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
</template>

<style scoped>

</style>