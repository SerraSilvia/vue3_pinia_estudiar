import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import products from '@/data/products.json'

// Manera nova de fer Vue3
export const useProductStore = defineStore('ProductStore', () => {
  return {products}
})
