<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Management App</title>
  <style>
    /* Add your CSS styles here */
    .fade-enter-active, .fade-leave-active {
      transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
      opacity: 0;
    }
  </style>
</head>
<body>
  <div id="app">
    <div>
      <h1>Product List</h1>
      <ul>
        <li v-for="(product, index) in products" :key="index">
          <div>{{ product.name }}</div>
          <div>{{ product.description }}</div>
          <div>{{ product.price }}</div>
          <button @click="editProduct(index)">Edit</button>
          <button @click="deleteProduct(index)">Delete</button>
        </li>
      </ul>
    </div>
    <div>
      <h2>Add Product</h2>
      <transition name="fade">
        <form v-if="!editingIndex" @submit.prevent="addProduct">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="newProduct.name" required>
          <label for="description">Description:</label>
          <input type="text" id="description" v-model="newProduct.description" required>
          <label for="price">Price:</label>
          <input type="number" id="price" v-model.number="newProduct.price" required>
          <button type="submit">Add</button>
        </form>
      </transition>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
  <script>
    new Vue({
      el: '#app',
      data: {
        products: [
          { name: 'Product 1', description: 'Description 1', price: 10 },
          { name: 'Product 2', description: 'Description 2', price: 20 },
          { name: 'Product 3', description: 'Description 3', price: 30 }
        ],
        newProduct: { name: '', description: '', price: '' },
        editingIndex: null
      },
      methods: {
        addProduct() {
          this.products.push({...this.newProduct});
          this.newProduct = { name: '', description: '', price: '' };
        },
        editProduct(index) {
          this.editingIndex = index;
          this.newProduct = {...this.products[index]};
        },
        updateProduct() {
          this.products.splice(this.editingIndex, 1, {...this.newProduct});
          this.editingIndex = null;
          this.newProduct = { name: '', description: '', price: '' };
        },
        deleteProduct(index) {
          if (confirm("Are you sure you want to delete this product?")) {
            this.products.splice(index, 1);
          }
        }
      }
    });
  </script>
</body>
</html>