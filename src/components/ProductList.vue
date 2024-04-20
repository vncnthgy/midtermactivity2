<template>
  <div class="container mt-4">
    <p v-if="successMessage" class="alert alert-success">{{ successMessage }}</p>
    <table class="table table-striped" v-if="products.length">
      <thead class="thead-dark">
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        
        <tr v-for="product in products" :key="product.id" :class="{ 'fade-out': product.isSaving, 'bounce-animation': product.isDeleting }">
          <td>
            <span v-if="!product.editing" @click="editProduct(product)">{{ product.name }}</span>
            <input v-else v-model="product.editedName" type="text" id="name" class="form-control" required>
          </td>
          <td>
            <span v-if="!product.editing" @click="editProduct(product)">{{ product.description }}</span>
            <input v-else v-model="product.editedDescription" type="text" class="form-control" required>
          </td>
          <td>
            <span v-if="!product.editing" @click="editProduct(product)">₱{{ product.price }}</span>
            <input v-else v-model="product.editedPrice" type="number" class="form-control" required>
          </td>
          <td :class="{ 'fade-out': product.isSaving }">
            <button @click="product.editing ? saveProduct(product) : toggleEditMode(product)" class="btn btn-primary mr-2">
              {{ product.editing ? 'Save' : 'Edit' }}</button>
            <button @click="deleteProduct(product)" class="btn btn-danger">Delete</button>
          </td>
        </tr>

      </tbody>
    </table>
    <div v-else>
      <p class="alert alert-warning">No product available!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productList',
  components: {
  },
  data() {
  return {
    productMessage: '',
    editingProduct: null,
    successMessage: ''
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
      if (confirm("Are you sure you want to edit this product?")) {
        product.name = product.editedName;
        product.description = product.editedDescription;
        product.price = product.editedPrice;
        product.editing = false;
        product.isSaving = true;
        this.successMessage = 'Product edited successfully!';
        setTimeout(() => {
          product.isSaving = false; 
          this.successMessage = '';
        }, 3000); 
      }
    },
      deleteProduct(product) {
      if (confirm("Are you sure you want to delete this product?")) {
        product.isDeleting = true;
        const index = this.products.findIndex(p => p.id === product.id);
          if (index !== -1) {
            this.products.splice(index, 1);
          }
        this.successMessage = 'Product deleted successfully!';
        setTimeout(() => {
          this.successMessage = '';
        }, 3000); 
      }
    },
    editProductFromButton(product) {
      this.editProduct(product);
    }
  },
};
</script>

<style>
.product-enter-active, .product-leave-active {
  transition: opacity 0.5s;
}

.product-enter, .product-leave-to {
  opacity: 0;
}

/* Animation and Transition Styles */
.fade-out {
  opacity: 1;
  transition: opacity 0.5s ease;
}

.fade-out:hover {
  opacity: 0.5;
}

@keyframes saveAnimation {
  0% { opacity: 1; }
  100% { opacity: 0; }
}

.save-animation {
  animation: saveAnimation 0.5s ease;
}

@keyframes bounceAnimation {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

.bounce-animation {
  animation: bounceAnimation 0.5s ease;
}

/* Table Styles */
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

/* Button Styles */
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
