<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link btn btn-primary" active-class="active" aria-current="page">Product List</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/addproduct" class="nav-link btn btn-primary" active-class="active">Add Product</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view/>
</template>
