<template>
  <div v-if="products.length == 0" class="p-d-flex p-jc-center p-m-auto">
    <div>Empty</div>
  </div>
  <div v-else>
    <ProgressSpinner v-if="loading" class="p-d-flex p-jc-center p-m-auto" />
    <product-card :products="products" v-else></product-card>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import ProductCard from "../components/ProductCard.vue";
export default {
  components: {
    ProductCard,
  },
  setup() {
    const store = useStore();
    const loading = ref(false);

    onMounted(async () => {
      loading.value = true;
      await store.dispatch("request/load");
      loading.value = false;
    });

    const products = computed(() =>
      store.getters["request/products"].filter((product) => {
        return product.type.includes("Watch");
      })
    );

    return {
      products,
      loading,
    };
  },
};
</script>

<style>
</style>