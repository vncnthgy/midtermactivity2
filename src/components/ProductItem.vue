<!-- ProductItem.vue -->
<template>
  <div>
    <h3>{{ product.name }}</h3>
    <p>Description: {{ product.description }}</p>
    <p>Price: {{ product.price }}</p>
    <button @click="edit">Edit</button>
    <button @click="remove">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  },
  methods: {
    edit() {
      this.$emit('edit')
    },
    remove() {
      if (confirm('Are you sure you want to delete this product?')) {
        this.$emit('delete')
      }
    }
  }
}
</script>
