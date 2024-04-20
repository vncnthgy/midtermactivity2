<!-- EditProductForm.vue -->
<template>
    <div>
      <h2>Edit Product</h2>
      <form @submit.prevent="updateProduct">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="editedProduct.name">
        <label for="description">Description:</label>
        <textarea id="description" v-model="editedProduct.description"></textarea>
        <label for="price">Price:</label>
        <input type="number" id="price" v-model.number="editedProduct.price">
        <button type="submit">Update Product</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: Object // The product being edited
    },
    data() {
      return {
        editedProduct: { ...this.product } // Create a copy of the product for editing
      }
    },
    methods: {
      updateProduct() {
        this.$store.dispatch('updateProduct', {
          index: this.$store.state.products.findIndex(p => p.id === this.product.id),
          product: this.editedProduct
        })
        // Apply animation after successful update
      }
    }
  }
  </script>
  