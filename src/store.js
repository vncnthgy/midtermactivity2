// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    ADD_PRODUCT(state, product) {
      state.products.push(product)
    },
    UPDATE_PRODUCT(state, { index, product }) {
      Vue.set(state.products, index, product)
    },
    DELETE_PRODUCT(state, index) {
      state.products.splice(index, 1)
    }
  },
  actions: {
    addProduct({ commit }, product) {
      commit('ADD_PRODUCT', product)
    },
    updateProduct({ commit }, { index, product }) {
      commit('UPDATE_PRODUCT', { index, product })
    },
    deleteProduct({ commit }, index) {
      commit('DELETE_PRODUCT', index)
    }
  },
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id)
    }
  }
})
