import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'
import { ref } from "vue";

export function useFormAdd(fn) {
  const {isSubmitting, handleSubmit} = useForm()

  const {value: name, errorMessage: nError, handleBlur: nBlur} = useField(
    'name',
    yup.string()
       .trim()
       .required('Пожалуйста, введите название продукта') 
       .min(3, 'Название не должно быть меньше 3 символов')
       .max(36, 'Название не должно быть больше 36 символов')
  )
  const {value: desc, errorMessage: dError, handleBlur: dBlur} = useField(
    'desc',
    yup.string()
     .trim()
     .required('Пожалуйста, добавьте описание продукта')
     .min(30, 'Описание не должно быть меньше 30 символов')
     .max(1000, 'Описание не должно быть больше 1000 символов')
  )
  const {value: price, errorMessage: pError, handleBlur: pBlur} = useField(
    'price',
    yup.number()
     .required('Введите сумму продукта')
     .transform(value => (isNaN(value) ? undefined : value))
     .min(1, 'Сумма не должна быть меньше единицы')
     .max(1000000, 'Сумма не должна быть больше миллиона')
  )

 let {value: image, errorMessage: iError, handleBlur: iBlur} = useField(
    'image',
    yup.string()
    .required('Пожалуйста, выберите картинку')
  )
  
  const {value: type, errorMessage: tError, handleBlur: tBlur} = useField(
    'type',
    yup.string()
    .required('Пожалуйста, выберите тип продукта')
  )

  const typeProduct = ref([
    "Телефон", "Планшет"
  ]);


  const handleImg = function handleImage(e) {
    const selectedImage = e.target.files[0];
    createBase64Image(selectedImage);
  }

  function createBase64Image(fileObject) {
    const reader = new FileReader();

    reader.onloadend = (e) => {
      image.value = e.target.result;
      console.log(image);
    };
    reader.readAsDataURL(fileObject);
  }

  
  const onSubmit = handleSubmit(fn)

  return {
    isSubmitting,
    onSubmit,
    handleImg,
    name,
    nError,
    nBlur,
    desc,
    dError,
    dBlur,
    price,
    pError,
    pBlur,
    image,
    iError,
    iBlur,
    type,
    tError,
    tBlur,
    typeProduct
  }
}