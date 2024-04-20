import { createRouter, createWebHistory } from 'vue-router'
import ProductListView from '../views/ProductListView.vue'
import AddProductFormView from '../views/AddProductFormView.vue'
import EditProductFormView from '../views/EditProductFormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'ProductList',
        component: ProductListView
      },
      {
        path: '/add',
        name: 'AddProductForm',
        component: AddProductFormView
      },
      {
        path: '/edit/:id',
        name: 'EditProductForm',
        component: EditProductFormView
      },
  ]
})

export default router