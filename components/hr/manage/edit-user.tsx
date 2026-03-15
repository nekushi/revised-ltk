"use client";

import { editUser } from "@/dal/hr/user/manage/edit-user";
import { TypeSelectedUserKey } from "@/dal/hr/user/manage/get-user";
import { useActionState, useState } from "react";

export default function HrManageEditUser({
  user,
}: {
  user: TypeSelectedUserKey;
}) {
  const [state, editUserAction, isPending] = useActionState(
    editUser,
    undefined,
  );
  const [isEditUserModalOpen, setIsEditUserModalOpen] =
    useState<boolean>(false);
  const [role, setRole] = useState<string>(user.role);

  const handleToggleEditUserModalClick = () => {
    setIsEditUserModalOpen((toggle) => !toggle);
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
    console.log(
      `/hr/v1/[id]/manage/page.tsx. Changing role to "${role} (snapshot)"`,
    );
  };

  return (
    <>
      <button onClick={handleToggleEditUserModalClick} className="border">
        Edit user
      </button>

      {isEditUserModalOpen && (
        <>
          <div>
            <h1>This is edit user form</h1>
            <form action={editUserAction} className="border w-fit">
              <label htmlFor="">
                <span>Id:</span>
                <input
                  type="text"
                  name="id"
                  defaultValue={user.id}
                  placeholder=""
                  className="border"
                />
              </label>
              <br />
              <label htmlFor="">
                <span>First Name:</span>
                <input
                  type="text"
                  name="first-name"
                  defaultValue={user.first_name}
                  placeholder=""
                  className="border"
                />
              </label>
              <br />
              <label htmlFor="">
                <span>Last Name:</span>
                <input
                  type="text"
                  name="last-name"
                  defaultValue={user.last_name}
                  placeholder=""
                  className="border"
                />
              </label>
              <br />
              <label htmlFor="">
                <span>Role:</span>
                <select
                  name="role"
                  id=""
                  onChange={handleRoleChange}
                  defaultValue={role}
                  className="border"
                >
                  <option value="admin">Admin</option>
                  <option value="hr">HR</option>
                  <option value="inventory">Inventory</option>
                  <option value="branch">Branch</option>
                  <option value="delivery">Delivery</option>
                </select>
              </label>
              <br />
              <label htmlFor="">
                <span>Username:</span>
                <input
                  type="text"
                  name="username"
                  defaultValue={user.username}
                  placeholder=""
                  className="border"
                />
              </label>
              <br />
              {/* <label htmlFor="">
                <span>Password:</span>
                <input
                  type="text"
                  name="password"
                  defaultValue={user.password}
                  placeholder=""
                  className="border"
                />
              </label>
              <br /> */}
              <label htmlFor="">
                <span>SSS:</span>
                <input
                  type="text"
                  name="sss"
                  defaultValue={user.sss || "---"}
                  placeholder=""
                  className="border"
                />
              </label>
              <br />
              <label htmlFor="">
                <span>Pag Ibig:</span>
                <input
                  type="text"
                  name="pag-ibig"
                  defaultValue={user.pag_ibig || "---"}
                  placeholder=""
                  className="border"
                />
              </label>
              <br />
              <label htmlFor="">
                <span>PhilHealth:</span>
                <input
                  type="text"
                  name="phil-health"
                  defaultValue={user.phil_health || "---"}
                  placeholder=""
                  className="border"
                />
              </label>
              <br />
              <label htmlFor="">
                <span>Tin Number:</span>
                <input
                  type="text"
                  name="tin-number"
                  defaultValue={user.tin_number || "---"}
                  placeholder=""
                  className="border"
                />
              </label>
              <br />
              <label htmlFor="">
                <span>Contact:</span>
                <input
                  type="text"
                  name="contact-number"
                  defaultValue={user.contact_no || "---"}
                  placeholder=""
                  className="border"
                />
              </label>
              <br />
              <label htmlFor="">
                <span>Email:</span>
                <input
                  type="text"
                  name="email"
                  defaultValue={user.email || "---"}
                  placeholder=""
                  className="border"
                />
              </label>
              <br />
              <label htmlFor="">
                <span>Address:</span>
                <input
                  type="text"
                  name="address"
                  defaultValue={user.address || "---"}
                  placeholder=""
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
    </>
  );
}
