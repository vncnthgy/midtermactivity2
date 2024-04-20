<template>
  <div class="add-product-container">
    <h2>Add Product</h2>
    <transition name="fade">
      <form v-if="!isAdding" @submit.prevent="addProduct" class="add-product-form">
        <div class="form-group">
          <label for="name">Product Name</label>
          <input type="text" id="name" v-model="name" class="form-control" placeholder="Enter Product Name" required>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input type="text" id="description" v-model="description" class="form-control" placeholder="Enter Product Description" required>
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input type="number" id="price" v-model.number="price" class="form-control" placeholder="Enter Product Price" min="0" required>
        </div>
        <div class="form-group">
          <button type="submit" class="btn-submit">Add Product</button>
        </div>
      </form>
    </transition>
      <div v-if="isAdding" class="add-product-message">Product added successfully!</div>
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

      this.isAdding = true; // Show success message
      setTimeout(() => {
        this.isAdding = false; // Reset after 3 seconds
      }, 3000);
    }
  }
};
</script>

<style scoped>
.add-product-container {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  background-color: #333;
}

.add-product-container h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
}

.add-product-form .form-group {
  margin-bottom: 20px;
}

.add-product-form label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #fff;
}

.add-product-form .form-control {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #555;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #444;
  color: #fff;
}

.add-product-form .form-control:focus {
  border-color: #4caf50;
}

.add-product-form .btn-submit {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease-in-out;
}

.add-product-form .btn-submit:hover {
  background-color: #45a049;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.add-product-message {
  margin-top: 20px;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border-radius: 5px;
  text-align: center;
}
</style>
