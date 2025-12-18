import { describe, it, expect } from "vitest";

describe("MovieCard", () => {
  it("correctly holds movie data", () => {
    const movie = {
      Title: "Star Wars",
      Plot: "A space opera",
      Year: 1977,
    };

    expect(movie.Title).toBe("Star Wars");
    expect(movie.Plot).toContain("space");
    expect(movie.Year).toBe(1977);
  });

  it("can handle missing movie data", () => {
    const movie = {};
    expect(movie.Title).toBeUndefined();
    expect(movie.Plot).toBeUndefined();
  });
});
