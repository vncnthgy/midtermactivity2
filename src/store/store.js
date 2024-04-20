import Vuex from 'vuex'

export const store = new Vuex.Store({
  name: 'store',
  state: {
    products: [
      { id: 1, name: 'Samsung Galaxy S21', description: '128GB, Phantom Gray, 5G', price: 799, },
      { id: 2, name: 'Instant Pot Duo 7-in-1', description: 'Electric Pressure Cooker, 6 Quart', price: 89, },
      { id: 3, name: 'Apple MacBook Pro', description: '13-inch, 8GB RAM, 256GB SSD, Space Gray', price: 1299, },                                        
      { id: 4, name: 'Sony WH-1000XM4', description: 'Wireless Noise-Canceling Over-Ear Headphones, Black', price: 348, },
      { id: 5, name: 'Fitbit Charge 4', description: 'Fitness and Activity Tracker with Built-in GPS, Black', price: 129, },
      { id: 6, name: 'Nintendo Switch', description: 'Hybrid Gaming Console, Neon Blue and Neon Red Joy-Con', price: 299, },
      { id: 7, name: 'Bose QuietComfort 35 II', description: 'Wireless Bluetooth Headphones, Noise-Cancelling, Silver', price: 299, },
    ], 
    nextProductId: 8
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
