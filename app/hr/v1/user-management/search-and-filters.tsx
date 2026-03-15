"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SearchAndFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleUserFirstNameSearchChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const params = new URLSearchParams(searchParams.toString());
    const searchText = e.target.value;
    params.set("searchFirstName", searchText);
    router.push(`?${params.toString()}`);
  };

  const handleUserLastNameSearchChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const params = new URLSearchParams(searchParams.toString());
    const searchText = e.target.value;
    params.set("searchLastName", searchText);
    router.push(`?${params.toString()}`);
  };

  const handleUserFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    const filterText = e.target.value;
    params.set("filters", filterText);
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <label htmlFor="">
        <span>Search last name: </span>
        <input
          type="text"
          onChange={handleUserLastNameSearchChange}
          placeholder="enter last name"
          className="border"
        />
      </label>
      <label htmlFor="">
        <span>Search first name: </span>
        <input
          type="text"
          onChange={handleUserFirstNameSearchChange}
          placeholder="enter first name"
          className="border"
        />
      </label>
      <label htmlFor="">
        <span>Role:</span>
        <select
          name="role"
          id=""
          onChange={handleUserFilterChange}
          className="border"
        >
          <option value="all">All</option>
          <option value="admin">Admin</option>
          <option value="hr">HR</option>
          <option value="inventory">Inventory</option>
          <option value="branch">Branch</option>
          <option value="delivery">Delivery</option>
        </select>
      </label>
    </>
  );
}
