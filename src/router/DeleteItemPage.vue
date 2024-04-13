<!-- DeleteItemPage.vue -->
<template>
    <div>
      <h2>Delete Product</h2>
      <DeleteProduct :product="productToDelete" @delete="deleteProduct" @cancel="cancelDelete" />
    </div>
  </template>
  
  <script>
  import DeleteProduct from '@/components/DeleteItem.vue'; 
  
  export default {
    name: 'DeleteItemPage',
    components: {
      DeleteProduct,
    },
    data() {
      return {
        productToDelete: null,
      };
    },
    methods: {

      deleteProduct(product) {
       
        console.log('Deleting product:', product);
      
        this.$router.push('/product-list'); 
      },

      cancelDelete() {

        console.log('Delete action canceled');
      
        this.$router.push('/product-list'); 
      },
    },
    created() {
   
      const productId = this.$route.params.productId; 

      this.productToDelete = {
        id: productId,
        name: 'Sample Product', 
        description: 'Sample Description', 
        price: 10.99, 
      };
    },
  }
  </script>
  
  <style>
 
  </style>
  