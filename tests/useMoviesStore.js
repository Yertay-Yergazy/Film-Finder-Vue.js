import { defineStore } from "pinia";

export const useMoviesStore = defineStore("movies", {
  state: () => ({ movies: [] }),
  actions: {
    addMovie(movie) {
      this.movies.push(movie);
    },
  },
});
