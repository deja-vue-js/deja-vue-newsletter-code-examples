import { defineStore } from "pinia";
import { ref, computed, toRefs } from "vue";

export default defineStore("counterCompositionApi", () => {
  const counter = ref(0);

  function increment(value = 1) {
    counter.value = counter.value + value;
  }

  const doubleCount = computed(() => {
    return counter.value * 2;
  });

  return { counter, increment, doubleCount };
});
