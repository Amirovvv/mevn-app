import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  name: String,
  desc: String,
  price: String,
  type: String,
})

const Product = mongoose.model("Product", productSchema)

export default Product