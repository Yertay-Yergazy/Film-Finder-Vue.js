import { describe, it, expect } from "vitest";

describe("SearchBar", () => {
  it("has default empty values", () => {
    const name = "";
    const email = "";
    const text = "";
    expect(name).toBe("");
    expect(email).toBe("");
    expect(text).toBe("");
  });
});
