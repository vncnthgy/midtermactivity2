<template>
  <div class="container">
    <h2>List of Products</h2>
    <p class="message">{{ productMessage }}</p>

    <table class="table" v-if="products.length">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id" :class="{ 'fade-out': product.isSaving, 'bounce-animation': product.isDeleting }">
          <td>
            <span v-if="!product.editing" @click="editProduct(product)">{{ product.name }}</span>
            <input v-else v-model="product.editedName" type="text" required>
          </td>
          <td>
            <span v-if="!product.editing" @click="editProduct(product)">{{ product.description }}</span>
            <input v-else v-model="product.editedDescription" type="text" required>
          </td>
          <td>
            <span v-if="!product.editing" @click="editProduct(product)">₱{{ product.price }}</span>
            <input v-else v-model="product.editedPrice" type="number" required>
          </td>
          <td :class="{ 'fade-out': product.isSaving }">
            <button @click="product.editing ? saveProduct(product) : toggleEditMode(product)" class="btn btn-primary">
              {{ product.editing ? 'Save' : 'Edit' }}</button>
            <button @click="deleteProduct(product)" class="btn btn-info">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-else>
      <p>No product available!</p>
    </div>

    <div>
      <AddProduct/>
    </div>
  </div>
</template>

<script>
import AddProduct from './AddProduct.vue'

export default {
  name: 'productList',
  components: {
    AddProduct
  },
  data() {
    return {
      productMessage: '',
      editingProduct: null,
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    toggleEditMode(product) {
      product.editing = !product.editing;
      if (product.editing) {
        product.editedName = product.name;
        product.editedDescription = product.description;
        product.editedPrice = product.price;
      } else {
        delete product.editedName;
        delete product.editedDescription;
        delete product.editedPrice;
      }
    },
    saveProduct(product) {
      product.name = product.editedName;
      product.description = product.editedDescription;
      product.price = product.editedPrice;
      product.editing = false;
      product.isSaving = true;
      setTimeout(() => {
        product.isSaving = false; 
      }, 300); 
    },
    deleteProduct(product) {
      if (confirm("Are you sure you want to delete this product?")) {
        product.isDeleting = true;
        setTimeout(() => {
          const index = this.products.findIndex(p => p.id === product.id);
          if (index !== -1) {
            this.products.splice(index, 1);
          }
        }, 300); 
      }
    },
    editProductFromButton(product) {
      this.editProduct(product);
    }
  },
};
</script>

<style>
.fade-out {
  opacity: 1;
  transition: opacity 0.5s ease;
}

.fade-out:hover {
  opacity: 0.5;
}

.save-animation {
  animation: saveAnimation 0.5s ease;
}

@keyframes saveAnimation {
  0% { opacity: 1; }
  100% { opacity: 0; }
}

.bounce-animation {
  animation: bounceAnimation 0.5s ease;
}

@keyframes bounceAnimation {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
  text-align: left;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}


button {
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

button:hover {
  background-color: #c82333;
}
</style>
