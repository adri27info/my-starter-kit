import { defineStore } from "pinia";

export const useCounter = defineStore("useCounter", {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
  },
});
