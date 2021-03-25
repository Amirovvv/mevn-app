import axios from 'axios'

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
        const {data} = await axios.post('http://localhost:5000/products', payload)
        commit('addProduct', {...payload, id: data.name})
      } catch (e) {
        console.log(e);
      }
    },
    async load({ commit }) {
      try {
        const {data} = await axios.get('http://localhost:5000/products')
        const products = Object.keys(data).map(id => ({...data[id], id}))
        commit('setProducts', products)
      } catch (e) {
        console.log(e);
      }
    },
    async loadOne(_, id) {
      try {
        const {data} = await axios.get(`http://localhost:5000/products/${id}`)
        return data
      } catch (e) {
        console.log(e);
      }
    },
    async remove(_, id) {
      try {
        const {data} = await axios.delete(`http://localhost:5000/products/${id}`)
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