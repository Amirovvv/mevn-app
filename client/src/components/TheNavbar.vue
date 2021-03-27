<template>
  <div class="p-d-flex p-justify-center p-p-4 p-ai-center menu">
    <router-link to="/"><div class="p-mr-4">All Products</div></router-link>
    <router-link to="/smartphones"
      ><div class="p-mr-4 menu-list">Smartphones</div></router-link
    >
    <router-link to="/notebooks">
      <div class="p-mr-4">Watch</div></router-link
    >

    <router-link to="/add">
      <Button label=" Add" class="p-button-success pi pi-plus-circle" />
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.menu {
  color: whitesmoke;
  background: rgb(48, 48, 48);
  font-size: 20px;
}
a {
  color: rgb(255, 255, 255);
  text-decoration: none;
}

a:hover,
a.active {
  text-decoration-color: #3eaf7c;
  text-decoration-line: underline;
}
</style>