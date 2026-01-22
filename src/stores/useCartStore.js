import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import { groupBy } from "lodash";

// Important defineStore + return
// Mai res fora del defineStore
export const useCartStore = defineStore('CartStore', () => {  
    //estat
    const items = ref([]);
    //getters (sempre son computed)
    const count = computed(()=> items.value.length)
    const isEmpty = computed(()=> count.value ==0 )
    const grouped = computed(()=> 
        groupBy(items.value , (item)=> item.name)
    )//falta endreçar alfabeticament

    // actions
    function addToCart(contador, item) {
        contador = parseInt(contador);
        for (let i = 0; i < contador; i++) {
        items.value.push(item); 
  }
   }
  const clearItem =( itemName)=>(items.value = items.value.filter((item)=> item.name != itemName))
  const setItemCount = (item, count)=>{
    clearItem(item.name)
    addToCart(count, item)
  }

    return {items, count, isEmpty, grouped, clearItem, setItemCount, addToCart} 
});