<template>
  <div
    class="p-d-flex p-jc-between p-m-auto p-shadow-20 p-p-5"
    style="max-width: 1000px"
  >
  <div class="aa" style="width: 250px; height: 350px"><h1>aaaa</h1></div>
  <div>
    <div>{{product.name}}</div>
    <div>{{ product.desc }}</div>
  </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const route = useRoute()
    const product = ref({})

     onMounted(async ()=> {
      product.value = await store.dispatch('request/loadOne', route.params.id)
    })

    return {
      product
    }

  },
};
</script>

<style>
.aa {
  background-color: red;
}
</style>