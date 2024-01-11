import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore(
  "counter",
  () => {
    const count = ref(0);
    const count2 = ref({});
    const caww = ref('將來');
    function increment() {
   
      count.value++
      count2.value={
        cc:'不知道',
        aa:[1,9,5,6,9,3,0],
        dd:false,
        ff:"0005",
      }
  
      caww.value="0009"
 
    }
    function increment2(e) { 
      caww.value="0009"+e
 
    }
    
    //要return出去 才有辦法儲存 ref的值 才可以連動到
    return { count, increment,count2,caww,increment2 };
  },
  {
   //設定   key:自行設定  path:只能存ref，reactive storage: localStorage sessionStorage  
    persist: [
      {
        key:'aaaa',
        paths: ['count'],
        storage: localStorage,
      },
      {
        key:'bbb',
        paths: ['count2'],
        storage: localStorage,
      },
      { 
        key:'cat',
        paths: ['caww'],
        storage: sessionStorage,
      },
    ],
  }
);
