import { createRouter, createWebHistory } from 'vue-router'

import AddProduct from '../components/AddProduct.vue'
import ProductList from '../components/ProductList.vue'    
//import { store } from '@/store/store.js'

const routes = [
    {
      path: '/',
      name: 'productlist',
      component: ProductList
    },
    {
      path: '/addProduct',
      name: 'addproduct',
      component: AddProduct
    }
  ];
  

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

