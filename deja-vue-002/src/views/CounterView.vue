<script setup lang="ts">
import useCounterStore from "@/stores/counter";
const store = useCounterStore();
</script>

<template>
  <main>
    <h1>Compteur: {{ store.counter }}</h1>
    <h2>Double: {{ store.doubleCount }}</h2>
    <div>
      <button @click="store.increment()">Increment</button>
    </div>
  </main>
</template>
