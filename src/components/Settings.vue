<script setup>
import { mdiSquare, mdiCircle, mdiTriangleDown,
  mdiBellOutline, mdiCogOutline,
  mdiBookmarkOutline, mdiCheckCircle, mdiViewComfy, mdiCog,
  mdiWrenchOutline, mdiMagnify, mdiInformationVariantCircleOutline } from '@mdi/js'

</script>

<template>
    <v-container fluid class="fill-height py-4">
      <v-row class="fill-height">

        <v-col cols="12">
          <v-card class="tile-card" hover :to="{ name: 'settings'}" style="cursor: pointer;">
            <v-icon :icon="mdiCog" size="72"/>
            <div class="tile-label">Settings</div>
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