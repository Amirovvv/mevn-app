import axios from 'axios'
const url = "https://nodejs-mongo-db.herokuapp.com"

export default {
  namespaced: true,
  state() {
    return {
      products: []
    }
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    addProduct(state, product) {
      state.products.push(product)
    }
  },
  actions: {
    async create({ commit }, payload) {
      try {
        const {data} = await axios.post(`${url}/products`, payload)
        commit('addProduct', {...payload, id: data.name})
      } catch (e) {
        console.log(e);
      }
    },
    async load({ commit }) {
      try {
        const {data} = await axios.get(`${url}/products`)
        const products = Object.keys(data).map(id => ({...data[id], id}))
        commit('setProducts', products)
      } catch (e) {
        console.log(e);
      }
    },
    async loadOne(_, id) {
      try {
        const {data} = await axios.get(`${url}/products/${id}`)
        return data
      } catch (e) {
        console.log(e);
      }
    },
    async remove(_, id) {
      try {
        const {data} = await axios.delete(`${url}/products/${id}`)
        return data
      } catch (e) {
        console.log(e);
      }
    },
},
  getters: {
    products(state) {
      return state.products
    }
  }

}