"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SearchAndFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    const searchText = e.target.value;
    params.set("search", searchText);
    router.push(`?${params.toString()}`);
  };

  const handleFilterRecognitionChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const params = new URLSearchParams(searchParams.toString());
    const filterText = e.target.value;
    params.set("filters", filterText);
    router.push(`?${params.toString()}`);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleTextChange}
        placeholder="search item"
        className="border"
      />
      <label htmlFor="recognition">Item recognition:</label>
      <select
        name="recognition"
        id="recognition"
        onChange={handleFilterRecognitionChange}
        className="border"
      >
        <option value="all">All</option>
        <option value="Dry Items">Dry Items</option>
        <option value="Raw Materials">Raw Materials</option>
      </select>
    </div>
  );
}
