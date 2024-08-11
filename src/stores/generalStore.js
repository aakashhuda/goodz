import { defineStore } from "pinia";
import { TopbarService } from "../services/general/GeneralService.js";

export const useGeneralStore = defineStore("generalStore", {
  state() {
    return {
      categories: [],
      initialActiveIndex: "",
    };
  },

  getters: {},

  actions: {
    getCategories() {
      return new TopbarService("categories")
        .getCategories()
        .then((querySnapshot) => {
          this.categories = [];
          querySnapshot.forEach((doc) => {
            this.categories.push({ id: doc.id, category: doc.data().category });
          });
          return querySnapshot;
        })
        .then((querySnapshot) => {
          if (querySnapshot.size >= 1) {
            this.initialActiveIndex = querySnapshot.docs[0].id;
          }
        });
    },
  },
});
