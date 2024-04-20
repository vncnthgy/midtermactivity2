<!-- App.vue -->
<template>
  <div id="app">
    <header>
      <nav>
        <!-- Navigation links -->
        <router-link to="/">Product List</router-link>
        <router-link to="/add">Add Product</router-link>
        <!-- Edit link with dynamic route -->
        <router-link :to="'/edit/' + productId">Edit Product</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import Router from '../src/router/index'
import Vuex from 'vuex'
import store from './store'

Vue.use(Vuex)

export default {
  name: 'App',
  router: Router,
  components: {
    // Components remain the same
  },
  computed: {
    // Compute the product ID for the edit link
    productId() {
      // You can obtain the product ID from Vuex store or any other source
      // For demonstration purpose, let's assume we have a computed property in the store
      return this.$store.state.selectedProductId
    }
  }
}
</script>
