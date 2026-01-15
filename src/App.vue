<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
//import products from "@/data/products.json";
import { useProductStore} from '@/stores/useProductStore.js'
import { storeToRefs } from "pinia";
import { useCartStore } from "@/stores/useCartStore";

const ProductStore = useProductStore()
ProductStore.fill();
const CartStore = useCartStore()
//console.log(ProductStore)
const {productRef} = storeToRefs(useProductStore())

</script>
<!-- Vue3 nova manera de fer-->
<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in productRef"
        :key="product.name"
        :product="product"
        @addToCart=""
      />
    </ul>
  </div>
</template>
