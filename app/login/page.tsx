"use client";

import { loginUser } from "@/dal/login/get-user";
import { useActionState } from "react";

export default function BranchDashboard() {
  const [state, loginAction, isPending] = useActionState(loginUser, undefined);

  return (
    <div className="p-2">
      <h1>This is login page</h1>
      <form action={loginAction}>
        <label htmlFor="">
          <span>Username:</span>
          <input type="text" name="username" className="border" />
        </label>
        <br />
        <label htmlFor="">
          <span>Password:</span>
          <input type="password" name="password" className="border" />
        </label>
        <br />
        <button type="submit" disabled={isPending} className="border">
          Login
        </button>
      </form>
      Message: {!isPending && <>{state?.message?.toString()}</>}
      <br />
      Username: {state?.username?.toString()}
      <br />
      Password: {state?.password?.toString()}
    </div>
  );
}
