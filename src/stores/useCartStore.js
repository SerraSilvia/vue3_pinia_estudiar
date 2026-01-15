import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

// Important defineStore + return
// Mai res fora del defineStore
export const useCartStore = defineStore('CartStore', () => {  
    const items = ref([]);
    return {items} 
});