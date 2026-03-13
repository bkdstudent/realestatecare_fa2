<script>
//import DashBoard from './components/DashBoard.vue'
export default {
  name: 'app',
  components:{}
}
</script>

<template>
  <div class="container">
    <router-view />
  </div>
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
