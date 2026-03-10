"use client";

import { deleteItem } from "@/dal/admin/inventory/delete-item";
import { useState, useActionState } from "react";

export default function AdminDeleteItem({ itemId }: { itemId: string }) {
  const [isdeleteItemModalOpen, setIsdeleteItemModalOpen] = useState(false);
  const [state, deleteItemAction, isPending] = useActionState(
    deleteItem,
    undefined,
  );

  const handleToggleDeleteItemModal = () => {
    setIsdeleteItemModalOpen((toggle) => !toggle);
  };

  return (
    <div>
      <button onClick={handleToggleDeleteItemModal} className="border">
        Delete
      </button>

      {isdeleteItemModalOpen && (
        <>
          <div className="border">
            This is add item modal
            <form action={deleteItemAction}>
              <label htmlFor="">
                <span>Id:</span>
                <input
                  type="text"
                  name="id"
                  defaultValue={itemId}
                  className="border"
                />
              </label>
              <div>Are you sure you want to delete this item??</div>
              <button type="submit" disabled={isPending} className="border">
                Delete
              </button>
              <button
                onClick={handleToggleDeleteItemModal}
                disabled={isPending}
                className="border"
              >
                Cancel
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
