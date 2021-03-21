<template>
  <main-layout></main-layout>
  <router-view/>
</template>

<script>
import MainLayout from './layout/MainLayout.vue'

export default {
  components: { MainLayout },
  setup() {
    
  },
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

body {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
}
</style>
