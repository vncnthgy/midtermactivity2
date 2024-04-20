import Vuex from 'vuex'

export const store = new Vuex.Store({
  name: 'store',
  state: {
    products: [
      { id: 1, name: 'RAKK DASIG WIRELESS Gaming Mouse', description: 'RGB Rechargeable | 3325 Sensor | Huano Blue Switch|Black White Pink', price: 850.00, },                                                                                         
      { id: 2, name: 'RAKK DIWA Mechanical Keyboard', description: 'DIWA V2 68 Keys Mechanical Gaming Keyboard | Outemu Blue or Red Hotswap|', price: 995.00, },
      { id: 3, name: 'AKK PRIYO Trimode ', description: '1000 mAh Folding Design Gaming Headset Black', price: 2025.00, }
    ], 
    nextProductId: 4
  },
  mutations: {
    addProduct(state, product) {
      state.products.push({
        id: state.nextProductId,
        ...product
      });
      state.nextProductId++;
    },
    removeProduct(state, productId) {
      state.products = state.products.filter(product => product.id !== productId);
    }
  },
  
  actions: {
    addProduct({ commit }, product) {
      commit('addProduct', product);
    }
  }
});
