<!-- AddProductForm.vue -->
<template>
    <div>
      <h2>Add Product</h2>
      <form @submit.prevent="addProduct">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name">
        <label for="description">Description:</label>
        <textarea id="description" v-model="description"></textarea>
        <label for="price">Price:</label>
        <input type="number" id="price" v-model.number="price">
        <button type="submit">Add Product</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        description: '',
        price: null
      }
    },
    methods: {
      addProduct() {
        const product = {
          name: this.name,
          description: this.description,
          price: this.price
        }
        this.$store.dispatch('addProduct', product)
        // Apply animation after successful addition
        // Reset form fields
        this.name = ''
        this.description = ''
        this.price = null
      }
    }
  }
  </script>
  