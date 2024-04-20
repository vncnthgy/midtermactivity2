import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../components/ProductList.vue'
import AddProduct from '../components/AddProduct.vue'

const routes = [
    {
      path: '/',
      name: 'productlist',
      component: ProductList
    },
    {
      path: '/addproduct',
      name: 'addproduct',
      component: AddProduct
    }
  ];
  
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
