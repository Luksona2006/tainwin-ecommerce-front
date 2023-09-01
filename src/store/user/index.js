import { defineStore } from 'pinia'

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        id: null,
        email: null,
        number: null,
        name: null
    }),
    actions: {
        setUserDetails(res) {
            this.$state.id = res.data.user.id
            this.$state.name = res.data.user.name
            this.$state.email = res.data.user.email
            this.$state.number = res.data.user.number
        },

        clearUser() {
            this.$state.id = null
            this.$state.name = null
            this.$state.email = null
            this.$state.number = null
        }
    },

    persist: true
})
