<template>
    <div class="product-list">
        
        <v-row no-gutters>
      <v-col
      v-for="products in store.products"
      :key="products.id"
        cols="12"
        sm="4"
        


@click="goToProductPage(products.id)"
      >

        <v-sheet class="ma-2 pa-2">

<v-card
class="products"
>
<v-img 
:src='products.thumbnail'
height='100px'

 cover
    />

    <v-card-title>
{{ products.brand }}
    </v-card-title>

<v-card-subtitle>
      $  {{ products.price }}
    </v-card-subtitle>

    <v-card-text>
        {{ products.description }}
    </v-card-text>

  <v-card-actions>
    <v-btn  @click="goToProductPage(products.id)"
    variant="elevated" color="#BA68C8
"
    >Add to cart</v-btn>
  </v-card-actions>
</v-card>        </v-sheet>
      </v-col>
    </v-row>



</div>

 </template>



<script>
import {defineComponent} from "vue";
import router from '@/router';


export default defineComponent({
   
        name:'CatalogView'
    
})
</script>

<script setup>
import {computed, onMounted} from 'vue';
import { productsStore } from "@/stores/products";
import { useRouter,useRoute } from 'vue-router';

const store = productsStore()
const router = useRouter()
const route = useRoute()

const goToProductPage = (id) => {
    router.push({ name: 'productView', params: { id } })
  }



onMounted(async () => {
  await  store.fetchProductsFromDB()  

})
</script>

<style scoped>/*
.product-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    cursor: pointer;
} 
.products {
    flex-basis: 20%;
    margin:8px;
    padding: 16px;
    box-shadow: 0px 0px 14px 1px #e6e6e6;

}

.products img{
    width: 70%;
}
.topnav{
    position: relative;
    background-color: rebeccapurple;
    overflow: hidden;
}
.topnav a {
    float: left;
    color:palegoldenrod;
    text-align: center;
    padding:14px 16px;
    text-decoration: none;
    font-size:17px;
} */

</style>