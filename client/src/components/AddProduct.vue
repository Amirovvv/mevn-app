<template>
  <div class="p-d-flex p-jc-center p-m-auto" style="max-width: 1000px">
    <ProgressSpinner v-if="loading" />
    <form class="p-p-5 p-mt-4 p-shadow-20" @submit.prevent="onSubmit" v-else>
      <div>
        <h1>Добавить продукт</h1>
      </div>
      <div class="p-mt-3">
        <InputText
          id="inputtext"
          type="text"
          placeholder="Название"
          style="width: 600px"
          v-model="name"
          @blur="nBlur"
          :class="{ 'p-invalid': nError }"
        />
        <div v-if="nError">
          <small>{{ nError }}</small>
        </div>
      </div>
      <div class="p-mt-4">
        <Textarea
          :autoResize="true"
          rows="5"
          cols="30"
          style="width: 600px"
          placeholder="Описание"
          v-model="desc"
          @blur="dBlur"
          :class="{ 'p-invalid': dError }"
        />
        <div v-if="dError">
          <small>{{ dError }}</small>
        </div>
      </div>
      <div class="p-mt-4">
        <InputNumber
          id="inputnumber"
          style="width: 100px"
          placeholder="Цена"
          v-model.number="price"
          @blur="pBlur"
          :class="{ 'p-invalid': pError }"
        />
        <div v-if="pError">
          <small>{{ pError }}</small>
        </div>
      </div>
      <div class="p-mt-4">
        <Dropdown
          id="dropdown"
          v-model="type"
          @blur="tBlur"
          :options="typeProduct"
          placeholder="Тип продукта"
          style="width: 190px"
        />
        <div v-if="tError">
          <small>{{ tError }}</small>
        </div>
      </div>

      <div class="p-mt-4">
        <label for="name">Изображение</label>
        <input @change="handleImg" type="file" @blur="iBlur" />
        <div v-if="iError">
          <small>{{ iError }}</small>
        </div>
        <div class="p-mt-2"><img :src="image" class="img" /></div>
      </div>

      <Button
        label=" Добавить товар"
        class="p-button-success pi pi-plus-circle p-mt-4"
        type="submit"
        :disabled="isSubmitting"
      />
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useFormAdd } from "../use/form-add";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const loading = ref(false)

    const submit = async (values) => {
      loading.value = true
      await store.dispatch("request/create", values);
      loading.value = false
      router.push("/");
    };
    return {
      ...useFormAdd(submit), loading
    };
  },
};
</script>

<style>
small {
  color: red;
}
img.img {
  width: 200px;
}
</style>