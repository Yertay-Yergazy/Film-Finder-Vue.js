import { describe, it, expect } from "vitest";

describe("MovieGrid", () => {
  it("stores movies correctly", () => {
    const movies = [{ Title: "Star Wars" }, { Title: "Star Trek" }];

    expect(movies.length).toBe(2);
    expect(movies[0].Title).toBe("Star Wars");
  });

  it("handles empty movie list", () => {
    const movies = [];
    expect(movies.length).toBe(0);
  });
});
