import { defineStore } from "pinia";

export const useAppStore = defineStore("App", {
    state: () => ({
        showLoader: false,
    }),
});
