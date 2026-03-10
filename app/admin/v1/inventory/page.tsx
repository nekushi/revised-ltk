// "use client";

import {
  fetchInventories,
  TypeInventories,
} from "@/dal/admin/inventory/get-items";
import AdminInventoryTable from "./table";
import { Suspense } from "react";
import SearchAndFilters from "./search-and-filters";
import AdminAddItem from "@/components/admin/inventory/add-item";

export default async function AdminInventory({
  searchParams,
}: {
  searchParams: Promise<{ search: string; filters: string }>;
}) {
  const inventories: TypeInventories[] = await fetchInventories();
  return (
    <div className="p-2">
      <h1>This is admin inventory</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <SearchAndFilters />
      </Suspense>

      <AdminAddItem />

      <AdminInventoryTable
        searchAndFilters={searchParams}
        inventories={inventories}
      />
      {/* <Suspense fallback={<div>Loading...</div>}>
      </Suspense> */}
    </div>
  );
}
