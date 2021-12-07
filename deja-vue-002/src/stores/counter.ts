import { defineStore } from "pinia";

export default defineStore("counter", {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment(value = 1) {
      this.counter = this.counter + value;
    },
  },
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
});
