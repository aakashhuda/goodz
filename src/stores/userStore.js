import { defineStore } from "pinia";

export const useUserStore = defineStore('UserStore', {
    state() {
        return {
            users: [],
            user: "Aakash"
        }
    },
    
    getters: {
       lowerUser() {
        return this.user.toLowerCase()
       } 
    }
})