<template>
  <product-card :products='products'></product-card>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import ProductCard from '../components/ProductCard.vue'
export default {
  components: {
    ProductCard
  },
  setup() {
    const store = useStore()

    onMounted(async ()=> {
      await store.dispatch('request/load')
    })

    const products = computed( () => store.getters['request/products'])
    console.log(products);
    return {
      products
    }
  }
}
</script>

<style>

</style>