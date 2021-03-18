<template>
  <div class="p-d-flex p-jc-center p-m-auto" style="max-width: 1000px">
    <form class="p-p-5 p-mt-4 p-shadow-20">
      <div>
        <h1>Добавить продукт</h1>
      </div>
      <div class="p-mt-3">
        <InputText
          id="inputtext"
          type="text"
          placeholder="Название"
          class="p-invalid"
          style="width: 600px"
        />
      </div>
      <div class="p-mt-4">
        <Textarea
          :autoResize="true"
          rows="5"
          cols="30"
          style="width: 600px"
          placeholder="Описание"
        />
      </div>
      <div class="p-mt-4">
        <InputNumber id="inputnumber" style="width: 100px" placeholder="Цена" />
      </div>
      <div class="p-mt-4">
        <Dropdown
          id="dropdown"
          :options="cities"
          optionLabel="name"
          placeholder="Тип продукта"
          class="p-invalid"
          style="width: 190px"
        />
      </div>

       <Button label=" Добавить товар" class="p-button-success pi pi-plus-circle p-mt-4" />
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>