<template>


<v-btn color='primary' @click="router.push({ name: 'cataluge' })">Back to catalog</v-btn>



<div class="product">

<div class="product-image">
    <img :src="selectedproduct.thumbnail" alt="">
</div>
<div class="product-D">
    <p>Brand: {{ selectedproduct.brand }}</p>
    <p>description: {{ selectedproduct.description }}</p>
    <h2>Price: ${{ selectedproduct.price }}</h2>

  <v-btn color='primary'
          
          @click="addToCart">
      Add to cart</v-btn>
</div>

</div>

</template>


<script>
import { defineComponent } from "vue";
export default defineComponent({   
name:'productView'    
})
</script>

<script setup>
import { computed } from "vue";
import { productsStore } from "@/stores/products";
import { useRouter,useRoute } from 'vue-router';

const store = productsStore()
const router = useRouter()
const route = useRoute()


const selectedproduct = computed (() =>
{  return  store.products.find((item) => item.id === Number(route.params.id))})


const addToCart = () => {
    store.addToCart(selectedproduct.value)
    router.push({ name: 'CartView' })
  }

</script>



<style scoped>
.product {
  display: flex;
  margin-top: 50px;
}

.product-image {
  margin-right: 24px;
}
</style>
