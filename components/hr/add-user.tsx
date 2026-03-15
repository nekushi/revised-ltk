"use client";

import { addUser } from "@/dal/hr/user/post-user";
import { useState, useActionState } from "react";

export default function HrAddUser() {
  const [state, addUserAction, isPending] = useActionState(addUser, undefined);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState<boolean>(false);
  const [role, setRole] = useState<string>("admin");

  const handleToggleAddUserModalClick = () => {
    setIsAddUserModalOpen((toggle) => !toggle);
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
    console.log(`Changing role to "${role} (snapshot)"`);
  };

  return (
    <div>
      <h2>This is hr add user</h2>
      <button onClick={handleToggleAddUserModalClick} className="border">
        Create user
      </button>
      {isAddUserModalOpen && (
        <>
          <div className="border">
            <h1>This is create user form</h1>
            <form action={addUserAction}>
              <label htmlFor="">
                <span>First Name:</span>
                <input
                  type="text"
                  name="first-name"
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
                  placeholder=""
                  className="border"
                />
              </label>
              <br />
              <label htmlFor="">
                <span>Password:</span>
                <input
                  type="text"
                  name="password"
                  placeholder=""
                  className="border"
                />
              </label>
              <br />
              <label htmlFor="">
                <span>SSS:</span>
                <input
                  type="text"
                  name="sss"
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
                  placeholder=""
                  className="border"
                />
              </label>
              <br />
              <button type="submit" className="border">
                Add user
              </button>
            </form>
          </div>

          <div>
            {state?.success.toString()}
            <br />
            {state?.message.toString()}
          </div>
        </>
      )}
    </div>
  );
}
