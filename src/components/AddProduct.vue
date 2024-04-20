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
          <button type="submit" class="btn btn-success">Add Product</button>
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
      this.isAdding = true;
      setTimeout(() => {
        this.isAdding = false;
      }, 3000);
    }
  }
};
</script>

<style scoped>

</style>
