<template>
  <div class="p-mt-6">
    <ProgressSpinner v-if="loading" class="p-d-flex p-jc-center p-m-auto" />
    <div
      class="p-d-flex p-jc-between p-m-auto p-shadow-20 p-p-4"
      style="max-width: 1000px"
      v-else
    >
      <img :src="product.image" style="width: 300px; height: 350px" />
      <div style="width: 620px;  word-wrap:break-word;">
        <h1>{{ product.name }}</h1>

        <h3>{{ currency(product.price) }}</h3>

        {{ product.desc }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { currency } from "../utils/currency";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const product = ref({});
    const loading = ref(false);

    onMounted(async () => {
      loading.value = true;
      product.value = await store.dispatch("request/loadOne", route.params.id);
      loading.value = false;
    });

    return {
      product,
      currency,
      loading,
    };
  },
};
</script>

<style>
.aa {
  background-color: red;
}

h1 {
  margin: 0;
}
</style>