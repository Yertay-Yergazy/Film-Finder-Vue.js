import { describe, it, expect } from "vitest";

describe("MoviesStore", () => {
  it("initializes with empty movies", () => {
    const store = { movies: [], addMovie: (movie) => store.movies.push(movie) };
    expect(store.movies.length).toBe(0);
    store.addMovie({ title: "Star Wars" });
    expect(store.movies.length).toBe(1);
  });
});
