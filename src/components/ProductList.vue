<!-- ProductList.vue -->
<template>
    <div>
      <div v-for="product in products" :key="product.id">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}</p>
        <button @click="editProduct(product)">Edit</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['products'],
    methods: {
      editProduct(product) {
        this.$emit('edit-product', product);
      },
      }
    }
  </script>
  
  <style scoped>
  /* Add your scoped styles here */
  </style>