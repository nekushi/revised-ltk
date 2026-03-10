"use client";

import { editItem } from "@/dal/admin/inventory/edit-item";
import { TypeInventories } from "@/dal/admin/inventory/get-items";
import { useState, useActionState } from "react";

export default function AdminEditItem({ item }: { item: TypeInventories }) {
  const [isEditItemModalOpen, setIsEditItemModalOpen] = useState(false);
  const [state, editItemAction, isPending] = useActionState(
    editItem,
    undefined,
  );

  const handleToggleEditItemModal = () => {
    setIsEditItemModalOpen((toggle) => !toggle);
  };

  return (
    <div>
      <button onClick={handleToggleEditItemModal} className="border">
        Edit
      </button>

      {isEditItemModalOpen && (
        <>
          <div className="border">
            This is add item modal
            <form action={editItemAction}>
              <label htmlFor="">
                <span>Id:</span>
                <input
                  type="text"
                  name="id"
                  defaultValue={item.id}
                  className="border"
                />
              </label>
              <br />
              <label htmlFor="">
                <span>Supplier Name:</span>
                <input
                  type="text"
                  name="supplier-name"
                  defaultValue={item.supplier_name}
                  className="border"
                />
              </label>
              <br />
              <label htmlFor="">
                <span>TIN Number:</span>
                <input
                  type="text"
                  name="tin-number"
                  defaultValue={item.tin_number}
                  className="border"
                />
              </label>
              <br />
              <label htmlFor="">
                <span>Product Name:</span>
                <input
                  type="text"
                  name="product-name"
                  defaultValue={item.product_name}
                  className="border"
                />
              </label>
              <br />
              <label htmlFor="">
                <span>Item Recognition:</span>
                <input
                  type="text"
                  name="item-recognition"
                  defaultValue={item.item_recognition}
                  className="border"
                />
              </label>
              <br />
              <label htmlFor="">
                <span>Quantity:</span>
                <input
                  type="text"
                  name="quantity"
                  defaultValue={item.quantity}
                  className="border"
                />
              </label>
              <br />
              <label htmlFor="">
                <span>Measurement:</span>
                <input
                  type="text"
                  name="measurement"
                  defaultValue={item.measurement}
                  className="border"
                />
              </label>
              <br />
              <label htmlFor="">
                <span>Unit Price:</span>
                <input
                  type="text"
                  name="unit-price"
                  defaultValue={item.unit_price}
                  className="border"
                />
              </label>
              <br />
              <button type="submit" disabled={isPending} className="border">
                Modify change
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
