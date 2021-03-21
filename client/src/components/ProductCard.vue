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
        <img
          alt="user header"
          style="height: 15em"
          src="https://u.kanobu.ru/editor/images/52/d9b4f706-1b19-4cd1-bad7-e733370a46dc.png"
        />
      </template>

      <template #title
        ><router-link :to="{ name: 'Product', params: { id: prod._id } }">
          {{ currency(prod.price) }}</router-link
        >
      </template>

      <template #footer>
        <Button
          icon="pi pi-check"
          label="Добавить в корзину"
          style="width: 100%"
        />
      </template>
    </Card>
  </div>
</template>

<script>
import { currency } from "../utils/currency";

export default {
  props: ["products"],
  setup() {
    return { currency };
  },
};
</script>

<style>
.p-card-content {
  display: none;
}
</style>