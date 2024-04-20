import Vuex from 'vuex'

export const store = new Vuex.Store({
  name: 'store',
  state: {
    products: [
      { id: 1, name: 'SparkleGlo LED String Lights', description: ' Illuminate your space with these enchanting LED string lights. Perfect for adding a warm and cozy ambiance to any room, these lights feature 100 energy-efficient LEDs on a flexible copper wire that can be easily shaped around furniture, mirrors, or any other decorative element. Whether youre hosting a party or simply want to create a magical atmosphere, SparkleGlo LED String Lights are the perfect choice.', price: 1500.00, },                                                                                         
      { id: 2, name: 'ZenZone Aromatherapy Diffuser', description: 'Transform your home into a calming oasis with the ZenZone Aromatherapy Diffuser. This sleek and stylish diffuser uses ultrasonic technology to create a fine mist of your favorite essential oils, filling your space with soothing scents and promoting relaxation. With its adjustable mist settings and soft LED lighting, the ZenZone Diffuser is perfect for creating a tranquil atmosphere in any room.', price: 1800.00, },
      { id: 3, name: 'StellarSound Bluetooth Speaker', description: 'Take your music anywhere with the StellarSound Bluetooth Speaker. This portable speaker delivers crisp, clear sound quality and powerful bass, making it perfect for parties, outdoor gatherings, or simply enjoying your favorite tunes at home. With its sleek design and long-lasting battery life, the StellarSound Speaker is the ultimate companion for music lovers on the go.', price: 2200.00, },
      { id: 4, name: 'FreshBrew Coffee Maker', description: 'Start your day off right with the FreshBrew Coffee Maker. This stylish and compact coffee maker brews delicious, flavorful coffee in minutes, allowing you to enjoy a perfect cup every morning. With its programmable timer and automatic shut-off feature, the FreshBrew Coffee Maker makes brewing your favorite blend effortless and convenient.', price: 1600.00, },                                                                                         
      { id: 5, name: 'CozyCloud Memory Foam Pillow', description: 'Drift off to dreamland in ultimate comfort with the CozyCloud Memory Foam Pillow. This plush pillow is designed to provide optimal support and alignment for your head and neck, helping to reduce pressure points and alleviate discomfort while you sleep. With its breathable cover and hypoallergenic materials, the CozyCloud Pillow ensures a restful nights sleep every time.', price: 900.00, },
      { id: 6, name: 'Apple MacBook Pro', description: '13-inch, 8GB RAM, 256GB SSD, Space Gray', price: 1299.99, },
      { id: 7, name: 'Samsung Galaxy S21', description: '128GB, Phantom Gray, 5G', price: 799.99, },
      { id: 8, name: 'Sony WH-1000XM4', description: 'Wireless Noise-Canceling Over-Ear Headphones', price: 348.00, },
      { id: 9, name: 'Instant Pot Duo 7-in-1', description: 'Electric Pressure Cooker, 6 Quart', price: 89.00, },
      { id: 10, name: 'Fitbit Charge 4', description: 'Fitness and Activity Tracker with Built-in GPS', price: 129.95, },
    ], 
    nextProductId: 11
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
