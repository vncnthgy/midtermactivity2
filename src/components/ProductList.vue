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
          </td>
          <td :class="{ 'fade-out': product.isSaving }">
            <button @click="deleteProduct(product)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-else>
      <p>Sorry, No product available at the moment!</p>
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
    // Retrieve products from the store
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    toggleEditMode(product) {
      // Toggle editing mode for the clicked product
      product.editing = !product.editing;

      // If switching to edit mode, create a copy of the original data for editing
      if (product.editing) {
        product.editedName = product.name;
        product.editedDescription = product.description;
        product.editedPrice = product.price;
      } else {
        // If switching back from edit mode, reset edited values
        delete product.editedName;
        delete product.editedDescription;
        delete product.editedPrice;
      }
    },
    saveProduct(product) {
      // Update the original product data with the edited values
      product.name = product.editedName;
      product.description = product.editedDescription;
      product.price = product.editedPrice;
      product.editing = false;

      // Apply animation on to the edited product's row when edited
      product.isSaving = true;
      setTimeout(() => {
        product.isSaving = false; 
      }, 500); 

      // Optionally, you can add a message or toast here to indicate success
      console.log('Product edited successfully!');
    },
    deleteProduct(product) {
      if (confirm("Are you sure you want to delete this product?")) {
        // Apply bounce animation to the deleted product's row
        product.isDeleting = true;
        setTimeout(() => {
          const index = this.products.findIndex(p => p.id === product.id);
          if (index !== -1) {
            this.products.splice(index, 1);
          }
        }, 500); // Adjust timing based on your animation duration
      }
    },
    editProductFromButton(product) {
      // Triggered when the edit button is clicked
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

/* Style for the table */
table {
  width: 100%; /* Make the table full width */
  border-collapse: collapse; /* Collapse borders for a seamless look */
}

/* Style for table header */
th, td {
  padding: 10px; /* Add padding */
  border: 1px solid #ddd; /* Add a 1px solid border around each cell */
}

/* Style for table header */
th {
  background-color: #f2f2f2; /* Light gray background color */
  text-align: left; /* Align text to the left */
}

/* Style for alternating row colors */
tbody tr:nth-child(even) {
  background-color: #f9f9f9; /* Light gray background color for even rows */
}

/* Style for delete button */
button {
  background-color: #dc3545; /* Red background color */
  color: #fff; /* White text color */
  border: none; /* Remove border */
  padding: 5px 10px; /* Add padding */
  cursor: pointer; /* Change cursor to pointer */
}

/* Hover effect for delete button */
button:hover {
  background-color: #c82333; /* Darker red color on hover */
}

</style>
