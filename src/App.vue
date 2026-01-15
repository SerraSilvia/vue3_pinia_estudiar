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

function addToCart(contador, item) {
  for (let i = 0; i < contador; i++) {
    CartStore.items.value.push(item); // Recordar que és reactiu i es posa .value
  }
}

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
        @addToCart="addToCart($event, product)"
      />
    </ul>
  </div>
</template>
