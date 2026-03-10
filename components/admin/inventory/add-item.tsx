"use client";

import { addItem } from "@/dal/admin/inventory/post-item";
import { useState, useActionState } from "react";

export default function AdminAddItem() {
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [state, addItemAction, isPending] = useActionState(addItem, undefined);

  const handleToggleAddItemModal = () => {
    setIsAddItemModalOpen((toggle) => !toggle);
  };

  return (
    <div>
      <h1>This is admin add item</h1>
      <button onClick={handleToggleAddItemModal} className="border">
        Add Item
      </button>

      {isAddItemModalOpen && (
        <>
          <div className="border">
            This is add item modal
            <form action={addItemAction}>
              <label htmlFor="">
                <span>Supplier Name:</span>
                <input type="text" name="supplier-name" className="border" />
              </label>
              <br />
              <label htmlFor="">
                <span>TIN Number:</span>
                <input type="text" name="tin-number" className="border" />
              </label>
              <br />
              <label htmlFor="">
                <span>Product Name:</span>
                <input type="text" name="product-name" className="border" />
              </label>
              <br />
              <label htmlFor="">
                <span>Item Recognition:</span>
                <input type="text" name="item-recognition" className="border" />
              </label>
              <br />
              <label htmlFor="">
                <span>Quantity:</span>
                <input type="text" name="quantity" className="border" />
              </label>
              <br />
              <label htmlFor="">
                <span>Measurement:</span>
                <input type="text" name="measurement" className="border" />
              </label>
              <br />
              <label htmlFor="">
                <span>Unit Price:</span>
                <input type="text" name="unit-price" className="border" />
              </label>
              <br />
              <button type="submit" disabled={isPending} className="border">
                Add
              </button>
            </form>
          </div>
          {/* <div>
            {state?.success?.toString() ? "true" : "false"}
            <br />
            {state?.message?.toString()}
            <br />
            {state?.item?.type_of_stocks.toString()}
            <br />
            {state?.item?.supplier_name.toString()}
            <br />
            {state?.item?.tin_number.toString()}
            <br />
            {state?.item?.product_name.toString()}
            <br />
            {state?.item?.item_recognition.toString()}
            <br />
            {state?.item?.quantity?.toString()}
            <br />
            {state?.item?.measurement?.toString()}
            <br />
            {state?.item?.unit_price.toString()}
          </div> */}
        </>
      )}
    </div>
  );
}
