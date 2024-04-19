<template>
    <div class="product-item">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p>Price: ₱{{ product.price }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>

    .product-item {
      border: 5px solid #312a2a;
      padding: 15px;
      margin-bottom: 15px;
      background-color: aquamarine;
      width: 250px;
      height: 150px;
      margin: 10px;
    }
  </style>