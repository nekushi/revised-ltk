import { TypeInventories } from "@/dal/admin/inventory/get-items";
import { use, useMemo } from "react";
import AdminEditItem from "@/components/admin/inventory/edit-item";
import AdminDeleteItem from "@/components/admin/inventory/delete-item";

type TypeSearchParams = {
  search: string;
  filters: string;
};

export default async function AdminInventoryTable({
  searchAndFilters,
  inventories,
}: {
  searchAndFilters: Promise<TypeSearchParams>;
  inventories: TypeInventories[];
}) {
  //   const allInventories = use(inventories);

  // const { search, filters } = await searchAndFilters;
  const awaitedSearchAndFilters = await searchAndFilters;

  //   const search = searchParams?.search?.toLowerCase() || "";
  // const filter = searchParams?.filters || "all";

  //   const search = searchParams?.search?.toLowerCase() || "";
  // const filter = searchParams?.filters || "product_name";

  // const filteredInventories = inventories.filter(
  //   (inventory: TypeInventories) => {
  //     if (!awaitedSearchAndFilters.search) return true;

  //     const value = String(
  //       inventory[awaitedSearchAndFilters.filters as keyof TypeInventories],
  //     ).toLowerCase();

  //     return value.includes(awaitedSearchAndFilters.search);
  //   },
  // );

  const search = awaitedSearchAndFilters.search?.toLowerCase() || "";
  const filters = awaitedSearchAndFilters.filters || "all";

  const filteredInventories = inventories.filter(
    (inventory: TypeInventories) => {
      const matchesSearch = inventory.product_name
        .toLowerCase()
        .includes(search);

      const matchesFilter =
        filters === "all" || inventory.item_recognition === filters;

      return matchesSearch && matchesFilter;
    },
  );

  // const filteredInventories = inventories.filter(
  //   (inventory: TypeInventories) => {
  //     const matchesSearch = inventory.product_name
  //       .toLowerCase()
  //       .includes(awaitedSearchAndFilters.search);

  //     const matchesFilter =
  //       awaitedSearchAndFilters.filters === "all" ||
  //       inventory.item_recognition === awaitedSearchAndFilters.filters;

  //     return matchesSearch && matchesFilter;
  //   },
  // );

  // const filteredInventories = inventories.filter(
  //   (inventory: TypeInventories) => {
  //     if (awaitedSearchAndFilters.search !== "") {
  //       return inventory.product_name.includes(
  //         awaitedSearchAndFilters.search?.toLowerCase(),
  //       );
  //     }
  //   },
  // );

  return (
    <div>
      <h1>This is admin inventory table</h1>
      {JSON.stringify(awaitedSearchAndFilters)}
      <table>
        <thead>
          <tr>
            <th>Created Date</th>
            <th>Updated Date</th>
            <th>Supplier Name</th>
            <th>TIN Number</th>
            <th>Product Name</th>
            <th>Item Recognition</th>
            <th>Quantity</th>
            <th>Measurement</th>
            <th>Unit Price</th>
            <th>Total Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventories.length === 0 && (
            <tr>
              <td colSpan={11} className="border">
                "No inventory yet."
              </td>
            </tr>
          )}
          {filteredInventories.length > 0 &&
            filteredInventories.map((inventory: TypeInventories) => (
              <tr key={inventory.id}>
                {/* <td>{inventory.updated_at.toLocaleString()}</td> */}
                {/* <td>
                  {new Date(inventory.created_at).toLocaleString("en-PH", {
                    timeZone: "Asia/Manila",
                  })}
                </td>
                <td>
                  {new Date(inventory.updated_at).toLocaleString("en-PH", {
                    timeZone: "Asia/Manila",
                  })}
                </td> */}
                {/* <td>{inventory.id}</td> */}
                <td>
                  {new Date(inventory.created_at).toLocaleDateString("en-PH")}
                </td>
                <td>
                  {new Date(inventory.updated_at).toLocaleDateString("en-PH")}
                </td>
                <td>{inventory.supplier_name}</td>
                <td>{inventory.tin_number}</td>
                <td>{inventory.product_name}</td>
                <td>{inventory.item_recognition}</td>
                <td>{inventory.quantity}</td>
                <td>{inventory.measurement}</td>
                <td>{inventory.unit_price}</td>
                <td>{inventory.quantity * inventory.unit_price}</td>
                <td>
                  <AdminEditItem item={inventory} />
                  <AdminDeleteItem itemId={inventory.id} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
