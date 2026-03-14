<script setup>

import {mdiBookmarkOutline, mdiCheckCircle, mdiCog, mdiViewComfy} from "@mdi/js";
</script>

<template>
     <v-container fluid class="fill-height py-4">
      <v-row class="fill-height">

        <v-col cols="12">
          <v-card class="tile-card" hover :to="{ name: 'scheduled'}" style="cursor: pointer;">
            <v-icon :icon="mdiBookmarkOutline" size="72" />
            <div class="tile-label">Scheduled</div>
          </v-card>
        </v-col>

      </v-row>
    </v-container>

</template>

<style scoped>
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