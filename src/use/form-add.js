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
  )
  const {value: desc, errorMessage: dError, handleBlur: dBlur} = useField(
    'desc',
    yup.string()
     .trim()
     .required('Пожалуйста, напишите описание продукта')
     .min(30, 'Описание не должно быть меньше 30 символов')
  )
  const {value: price, errorMessage: pError, handleBlur: pBlur} = useField(
    'price',
    yup.number()
     .required('Введите сумму продукта')
     .transform(value => (isNaN(value) ? undefined : value))
     .min(0, 'Сумма не должна быть меньше нуля')
  )
  const {value: type} = useField(
    'type',
    yup.string()
    .required('Пожалуйста, выберите тип продукта')
  )

  const typeProduct = ref([
    "Телефон", "Планшет"
  ]);
  
  const onSubmit = handleSubmit(fn)

  return {
    isSubmitting,
    onSubmit,
    name,
    nError,
    nBlur,
    desc,
    dError,
    dBlur,
    price,
    pError,
    pBlur,
    type,
    typeProduct
  }
}