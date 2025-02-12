import { useState, useMemo } from "react";

export const useSearch = (items) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredItems = useMemo(
    () =>
      items.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [items, searchTerm]
  );

  return {
    searchTerm,
    setSearchTerm,
    filteredItems,
  };
};
