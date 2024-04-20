<template>
  <div class="d-flex flex-column justify-content-center align-items-center vh-100">
    <div class="add-product-container container mt-4 shadow p-3 mb-5 bg-white rounded">
      <div v-if="isAdding" class="add-product-message alert alert-success mt-3 text-center">Product successfully added!</div>
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
          <button type="submit" class="form-control btn btn-success btn-block">Add Product</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAdding: false,
      name: '',
      description: '',
      price: ''
    };
  },
  methods: {
    addProduct() {
      if (!this.name || !this.description || !this.price) {
        return; 
      }
      const product = {
        name: this.name,
        description: this.description,
        price: this.price
      };
      this.$store.dispatch('addProduct', product);
      this.name = '';
      this.description = '';
      this.price = '';
      this.isAdding = true;
      setTimeout(() => {
        this.isAdding = false;
      }, 3000);
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

  .d-flex {
    display: flex;
  }

  .flex-column {
    flex-direction: column;
  }

  .justify-content-center {
    justify-content: center;
  }

  .align-items-center {
    align-items: center;
  }

  .vh-100 {
    height: 100vh;
  }

  .text-center {
    text-align: center;
  }

  .add-product-message {
    max-width: 100%;
  }
</style>
