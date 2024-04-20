<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="nav-link">Product List</router-link>
      <!-- <router-link to="/addProduct" class="nav-link">Add Product</router-link>  -->
    </div>
  </nav>
  <router-view/>
</template>

<style>
.navbar {
  background-color: #333;
  color: #fff;
  padding: 10px;
}

.nav-container {
  display: flex;
  justify-content: center; /* Center-align the contents horizontally */
}

.nav-link {
  color: #fff;
  text-decoration: none;
  margin: 0 10px; /* Adjust margin for spacing */
}

.nav-link:hover {
  text-decoration: underline;
}
</style>
