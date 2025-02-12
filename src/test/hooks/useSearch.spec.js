import { expect, it, describe } from "vitest";
import { renderHook } from '@testing-library/react';
import { useSearch } from "../../hooks/useSearch";
import { act } from "react";

describe("useSearch", () => {
  it("should return a default search term and original items", () => {
    const items = [{ title: "Star Wars" }];

    const { result } = renderHook(() => useSearch(items));

    expect(result.current.searchTerm).toBe("");
    expect(result.current.filteredItems).toEqual(items);
  });

  it.skip("should filter items based on search term", () => {
    const items = [
      { title: "Star Wars" },
      { title: "Star Trek" },
      { title: "Lord of the Rings" },
    ];

    const { result } = renderHook(() => useSearch(items));

    expect(result.current.searchTerm).toBe("");
    expect(result.current.filteredItems).toEqual(items);

    act(() => {
      result.current.setSearchTerm("star");
  
    });
    expect(result.current.searchTerm).toBe("star");
    expect(result.current.filteredItems).toEqual([
      { title: "Star Wars" },
      { title: "Star Trek" },
    ]);
  });
});
