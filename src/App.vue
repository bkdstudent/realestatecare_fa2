<script setup>
//import DashBoard from './components/DashBoard.vue'
</script>

<template>
  <v-app>
    <v-layout>

      <v-app-bar color="primary" density="comfortable">
        <img src="./assets/logo_white_black.svg" alt="logo" heigth="24">
<!--        <div class="font-weight-medium">Real Estate Care</div>-->
      </v-app-bar>

      <v-main>
        <v-container>
          Content onder de app-bar
        </v-container>
      </v-main>

    </v-layout>

  </v-app>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  border-radius: 8px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;

  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
