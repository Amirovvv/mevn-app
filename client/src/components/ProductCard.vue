<template>
  <div
    class="p-d-flex p-flex-wrap p-jc-around p-m-auto"
    style="max-width: 1000px"
  >
    <Card
      class="p-mt-6 p-shadow-20"
      style="width: 16em"
      v-for="prod in products"
      :key="prod._id"
    >
      <template #header>
        <img alt="user header" style="height: 17em; width: 9em; margin-top: 1em;" :src="prod.image" />
      </template>

      <template #title
        ><router-link :to="{ name: 'Product', params: { id: prod._id } }">
          {{ subs(prod.name) }}
        </router-link>
      </template>

      <template #footer>
        <router-link
          class="btn"
          :to="{ name: 'Product', params: { id: prod._id } }"
        >
          <Button icon="pi pi-list" label="More details" style="width: 100%"
        /></router-link>
      </template>
    </Card>
  </div>
</template>

<script>
import { subs } from "../utils/subs";

export default {
  props: ["products"],
  setup() {
    return { subs };
  },
};
</script>

<style>
.p-card-title {
  word-wrap: break-word;
  font-size: 1.2em !important;
  margin-bottom: 0 !important;
  font-weight: 500 !important;
}
.p-card-header {
  text-align: center
}
.p-card-content {
  display: none;
}

a {
  color: rgb(0, 0, 0);
}

.btn {
  text-decoration: none;
}
</style>