<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
//import products from "@/data/products.json";
import { useProductStore} from '@/stores/useProductStore.js'
import { storeToRefs } from "pinia";

//const ProductStore = useProductStore()
//console.log(ProductStore)
const {products} = storeToRefs(useProductStore())

</script>
<!-- Vue3 nova manera de fer-->
<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in products"
        :key="product.name"
        :product="product"
      />
    </ul>
  </div>
</template>
