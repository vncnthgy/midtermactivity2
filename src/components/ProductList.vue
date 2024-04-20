<!-- ProductList.vue -->
<template>
  <div>
    <h2>Product List</h2>
    <div v-for="(product, index) in products" :key="index">
      <ProductItem :product="product" @edit="editProduct(index)" @delete="deleteProduct(index)" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductItem from './ProductItem.vue'

export default {
  components: {
    ProductItem
  },
  computed: {
    ...mapState(['products'])
  },
  methods: {
    editProduct(index) {
      // Navigate to edit product page or implement in-place editing
    },
    deleteProduct(index) {
      this.$store.dispatch('deleteProduct', index)
    }
  }
}
</script>
