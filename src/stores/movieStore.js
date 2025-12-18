import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    favorites: [],
  }),

  getters: {
    favoritesCount: (state) => state.favorites.length,
  },

  actions: {
    addToFavorites(movie) {
      this.favorites.push(movie)
    },
  },
})
