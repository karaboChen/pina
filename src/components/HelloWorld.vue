<script setup>
import { useCounterStore } from "../stores/counter"
const countStore = useCounterStore() 

function add (){
  countStore.increment()
  countStore.increment2("我")
}
function add5 (){
  countStore.increment2("之")
}

</script>

<template>
  <div>
    Hello World
  </div>
  <h1>數量:{{ countStore.count }}</h1> 
  <h1>名字:{{ countStore.count2 }}</h1> 
  <button @click="add">++</button>
  <button @click="add5">++</button>
</template>


