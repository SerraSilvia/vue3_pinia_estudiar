import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

// Important defineStore + return
// Mai res fora del defineStore
export const useCartStore = defineStore('CartStore', () => {  
    const items = ref([]);
    
    function addToCart(contador, item) {
        contador = parseInt(contador);
        for (let i = 0; i < contador; i++) {
        items.value.push(item); 
  }
}
    return {items, addToCart} 
});