<script setup>
//import DashBoard from './components/DashBoard.vue'
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

</script>

<template>
  <v-app>
    <v-layout>
      <AppHeader />
        <v-main class="fill-height">
          <router-view />
        </v-main>
      <AppFooter />
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
