<!-- EditProductFormView.vue -->
<template>
    <div>
      <h2>Edit Product</h2>
      <EditProductForm :product="product" />
    </div>
  </template>
  
  <script>
  import EditProductForm from '../components/EditProductForm.vue'
  
  export default {
    components: {
      EditProductForm
    },
    computed: {
      product() {
        // Fetch the product data from Vuex store or API based on route params
        // For demonstration purposes, let's assume we have a Vuex store with selectedProductId
        return this.$store.getters.getProductById(this.$route.params.id)
      }
    }
  }
  </script>
  