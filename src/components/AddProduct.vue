<template>
  <div class="p-d-flex p-jc-center p-m-auto" style="max-width: 1000px">
    <form class="p-p-5 p-mt-4 p-shadow-20" @submit.prevent="onSubmit">
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
        <Dropdown id="dropdown" v-model="type" :options="typeProduct"
        placeholder="Тип продукта" style="width: 190px" />
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
import { useFormAdd } from "../use/form-add";
export default {
  setup() {
    const submit = async values => {
      console.log(values);
    }
    return {
      

      ...useFormAdd(submit),
    };
  },
};
</script>

<style>
small {
  color: red;
}
</style>