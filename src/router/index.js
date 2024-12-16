import { createRouter, createWebHistory } from 'vue-router';
import cataluge from "../views/cataluge.vue";
import productD from '@/views/productD.vue';
import contact from '@/views/contact.vue';
import about from '@/views/about.vue';
import Cart from '@/views/Cart.vue';




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/cataluge',
      name: 'cataluge',
      component: cataluge
      // component:  
    }, 
    {
      path: '/',
      name: 'home',
      component: cataluge
      // component: 
    },
    {
      path:'/product/:id',
      name:'productView',
      component:productD
    },
    {
      path: '/cart',
      name: 'CartView',
      component: Cart
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
 
  ]
})

export default router
