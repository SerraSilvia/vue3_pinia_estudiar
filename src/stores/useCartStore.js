import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

const items = []

// Important defineStore + return
export const useCartStore = defineStore('CartStore', () => { return {items} })