<template>
  <div class="list-product-container container mt-4 shadow p-3 mb-5 bg-white rounded">
    <p v-if="successMessage" class="list-product-message alert alert-success mt-3 text-center">{{ successMessage }}</p>
    <table class="table table-striped" v-if="products.length">
      <thead>
        <tr class="table-primary">
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td :class="{ 'editing': product.editing, 'saving': product.isSaving, 'deleting': product.isDeleting }">
            <span v-if="!product.editing">{{ product.name }}</span>
            <input v-else v-model="product.editedName" type="text" id="name" class="form-control" required>
          </td>
          <td :class="{ 'editing': product.editing, 'saving': product.isSaving, 'deleting': product.isDeleting }">
            <span v-if="!product.editing">{{ product.description }}</span>
            <input v-else v-model="product.editedDescription" type="text" class="form-control" required>
          </td>
          <td :class="{ 'editing': product.editing, 'saving': product.isSaving, 'deleting': product.isDeleting }">
            <span v-if="!product.editing" >${{ product.price }}</span>
            <input v-else v-model="product.editedPrice" type="number" class="form-control" required>
          </td>
          <td :class="{ 'editing': product.editing, 'saving': product.isSaving, 'deleting': product.isDeleting, 'fade-out': product.isSaving }">
            <div class="btn-group-vertical" role="group">
              <button @click="product.editing ? saveProduct(product) : editProduct(product)" class="btn btn-primary btn-block">
                <span v-if="product.isSaving" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                {{ product.editing ? 'Save' : 'Edit' }}
              </button>
              <button @click="deleteProduct(product)" class="btn btn-danger btn-block">
                <span v-if="product.isDeleting" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      <p class="alert alert-warning mt-3 text-center">No product available!</p>
    </div>
    <router-link to="/addproduct">
      <button class="btn btn-primary rounded-circle position-fixed d-flex align-items-center justify-content-center y-" style="bottom: 20px; right: 20px; width: 60px; height: 60px; font-size: 2rem; padding-top: 1px;">
        {{ text }}
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productMessage: '',
      editingProduct: null,
      successMessage: '',
      text: '>'
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    editProduct(product) {
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
      if (!product.editedName || !product.editedDescription || !product.editedPrice) {
        alert('All fields are required!');
        return;
      }
      if (!confirm("Are you sure you want to edit this product?")) {
        this.editProduct(product);
        return;
      }
      product.isSaving = true;
      setTimeout(() => {
        product.editing = false;
        product.isSaving = false; 
        product.name = product.editedName;
        product.description = product.editedDescription;
        product.price = product.editedPrice;
        this.successMessage = 'Product successfully edited!';
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
        this.successMessage = 'Product successfully deleted!';
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      }, 1500);
    },
  },
};
</script>

<style scoped>
  .container {
  max-width: 70%;
  }

  .shadow {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }

  .rounded {
    border-radius: 5px;
  }

  .list-product-message {
    max-width: 100%;
  }

  .editing {
    background-color: #fefbd8;
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
