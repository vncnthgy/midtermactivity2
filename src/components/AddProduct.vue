<template>
  <div class="add-product-container container mt-4 shadow p-3 mb-5 bg-white rounded">
    <p v-if="successMessage" class="add-product-message alert alert-success mt-3 text-center">{{ successMessage }}</p>
    <form @submit.prevent="addProduct" class="add-product-form">
      <div class="form-group mb-3">
        <label for="name">Product Name:</label>
        <input type="text" id="name" v-model="name" class="form-control" placeholder="Enter Product Name" required>
      </div>
      <div class="form-group mb-3">
        <label for="description">Description:</label>
        <input type="text" id="description" v-model="description" class="form-control" placeholder="Enter Product Description" required>
      </div>
      <div class="form-group mb-3">
        <label for="price">Price:</label>
        <input type="number" id="price" v-model.number="price" class="form-control" placeholder="Enter Product Price" min="0" required>
      </div>
      <div class="form-group mb-3">
        <button type="submit" class="btn btn-success btn-block">
          <span v-if="isAdding" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          Submit</button>
      </div>
    </form>
    <router-link to="/">
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
      isAdding: false,
      name: '',
      description: '',
      price: '',
      successMessage: '',
      text: '<'
    };
  },
  methods: {
    addProduct() {
      if (!confirm("Are you sure you want to add this product?")) {
        return;
      }
      this.isAdding = true;
      setTimeout(() => {
        this.isAdding = false;
        const product = {
          name: this.name,
          description: this.description,
          price: this.price
        };
        this.$store.dispatch('addProduct', product);
        this.name = '';
        this.description = '';
        this.price = '';
        this.successMessage = 'Product successfully added!';
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      }, 1500);
    }
  }
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

  .add-product-message {
    max-width: 100%;
  }

  .text-center {
    text-align: center;
  }
</style>
