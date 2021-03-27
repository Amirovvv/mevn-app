import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'
import { ref } from "vue";

export function useFormAdd(fn) {
  const {isSubmitting, handleSubmit} = useForm()

  const {value: name, errorMessage: nError, handleBlur: nBlur} = useField(
    'name',
    yup.string()
       .trim()
       .required('Please enter a product name') 
       .min(3, 'The name must be at least 3 characters')
       .max(36, 'Name should not exceed 36 characters')
  )
  const {value: desc, errorMessage: dError, handleBlur: dBlur} = useField(
    'desc',
    yup.string()
     .trim()
     .required('Please add a product description')
     .min(30, 'Description must be at least 30 characters')
     .max(1000, 'Description should not exceed 1000 characters')
  )
  const {value: price, errorMessage: pError, handleBlur: pBlur} = useField(
    'price',
    yup.number()
     .required('Enter the amount of the product')
     .transform(value => (isNaN(value) ? undefined : value))
     .min(1, 'The amount must not be less than one')
     .max(1000000, 'The amount should not be more than a million')
  )

 let {value: image, errorMessage: iError, handleBlur: iBlur} = useField(
    'image',
    yup.string()
    .required('Please select a picture')
  )
  
  const {value: type, errorMessage: tError, handleBlur: tBlur} = useField(
    'type',
    yup.string()
    .required('Please select a product type')
  )

  const typeProduct = ref([
    "Smartphone", "Watch"
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