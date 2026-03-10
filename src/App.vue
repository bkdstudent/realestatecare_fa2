<script setup>
import DashBoard from './components/DashBoard.vue'
</script>

<template>
  <header>
    <img alt="REC logo" class="logo" src="./assets/logo_white_black.svg" width="202" height="46" />
    <div class="wrapper">
      <DashBoard msg="RealEstateCare Project!" />
    </div>
  </header>
  <h1>Tekst uit App.vue</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
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
