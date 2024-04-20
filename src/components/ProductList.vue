<template>
  <div class="container mt-4">
    <p v-if="successMessage" class="alert alert-success">{{ successMessage }}</p>
    <table class="table table-striped" v-if="products.length">
      <thead class="thead-dark">
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td :class="{ 'editing': product.editing, 'saving': product.isSaving, 'deleting': product.isDeleting }">
            <span v-if="!product.editing" @click="editProduct(product)">{{ product.name }}</span>
            <input v-else v-model="product.editedName" type="text" id="name" class="form-control" required>
          </td>
          <td :class="{ 'editing': product.editing, 'saving': product.isSaving, 'deleting': product.isDeleting }">
            <span v-if="!product.editing" @click="editProduct(product)">{{ product.description }}</span>
            <input v-else v-model="product.editedDescription" type="text" class="form-control" required>
          </td>
          <td :class="{ 'editing': product.editing, 'saving': product.isSaving, 'deleting': product.isDeleting }">
            <span v-if="!product.editing" @click="editProduct(product)">₱{{ product.price }}</span>
            <input v-else v-model="product.editedPrice" type="number" class="form-control" required>
          </td>
          <td :class="{ 'editing': product.editing, 'saving': product.isSaving, 'deleting': product.isDeleting, 'fade-out': product.isSaving }">
            <button @click="product.editing ? saveProduct(product) : toggleEditMode(product)" class="btn btn-primary mr-2">
              <span v-if="product.isSaving" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              {{ product.editing ? 'Save' : 'Edit' }}
            </button>
            <button @click="deleteProduct(product)" class="btn btn-danger">
              <span v-if="product.isDeleting" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Delete
            </button>
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
      if (!confirm("Are you sure you want to edit this product?")) {
        this.toggleEditMode(product);
        return;
      }
      product.isSaving = true;
      setTimeout(() => {
        product.name = product.editedName;
        product.description = product.editedDescription;
        product.price = product.editedPrice;
        product.editing = false;
        this.successMessage = 'Product edited successfully!';
        product.isSaving = false; 
        setTimeout(() => {
          this.successMessage = '';
        }, 3000); 
      }, 1500);
    },
    deleteProduct(product) {
      if (!confirm("Are you sure you want to delete this product?")) {
        return;
      }
      product.isDeleting = true;
      setTimeout(() => {
        const index = this.products.findIndex(p => p.id === product.id);
        if (index !== -1) {
          this.products.splice(index, 1);
        }
        this.successMessage = 'Product deleted successfully!';
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      }, 1500);
    },
  },
};
</script>

<style scoped>
  .editing {
    transition: background-color 0.3s ease;
  }

  .saving {
    background-color: #99ff99;
    transition: background-color 0.3s ease;
  }

  .deleting {
    background-color: #ff9999;
    transition: background-color 0.3s ease;
  }
</style>
