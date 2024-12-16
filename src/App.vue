<template>
  <header>
    <v-toolbar title="NS">
     
    <v-btn
      @click="router.push({ name: 'CartView' })"
      
      color="primary">

  Items in Cart: {{ store.cart.length }}
   </v-btn>
    </v-toolbar> 
    <greet/>
  </header>

<main>
  <RouterView/>
</main>

 

</template>


<script>
import greet from './components/navbar.vue';

export default {
  name:'app',
components:{
 greet,
 },
 };
 



</script>

<script setup>
  import { useRouter } from "vue-router";
  import { productsStore } from "@/stores/products";
  const router = useRouter()
  const store = productsStore()
</script>



<style scoped>
/* .cart-items {
  text-align: end;
  padding: 16px;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
} */
</style>
