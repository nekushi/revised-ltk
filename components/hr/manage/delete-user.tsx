"use client";

import { deleteUser } from "@/dal/hr/user/manage/delete-user";
import { useState, useActionState } from "react";

export default function HrManageDeleteUser({ id }: { id: string }) {
  const [state, deleteUserAction, isPending] = useActionState(
    deleteUser,
    undefined,
  );
  const [isDeleteUserModalOpen, setIsDeleteUserModalOpen] =
    useState<boolean>(false);

  const handleToggleEditUserModalClick = () => {
    setIsDeleteUserModalOpen((toggle) => !toggle);
  };

  return (
    <>
      <button onClick={handleToggleEditUserModalClick} className="border">
        Delete user
      </button>

      {isDeleteUserModalOpen && (
        <div>
          <h1>This is delete user</h1>
          <form action={deleteUserAction} className="border w-fit">
            <label htmlFor="">
              <span>Id: </span>
              <input
                type="text"
                name="id"
                defaultValue={id}
                className="border"
              />
            </label>
            <br />
            <h1>Are you sure you want to delete this item??</h1>
            <button type="submit" disabled={isPending} className="border">
              Delete
            </button>
            <button onClick={handleToggleEditUserModalClick} className="border">
              Cancel
            </button>
          </form>
        </div>
      )}
    </>
  );
}
