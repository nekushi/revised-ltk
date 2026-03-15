"use server";

import prisma from "@/lib/db";
import { redirect } from "next/navigation";

export async function loginUser(prevState: unknown, formdata: FormData) {
  console.log(`Logging user`);

  const username = String(formdata.get("username") ?? "");
  const password = String(formdata.get("password") ?? "");

  const user = await prisma.user.findFirst({
    where: {
      username,
    },
  });

  if (!user) {
    return {
      message: "No user found",
    };
  }

  if (user.password === password) {
    // console.log(user);

    redirect(`/${user.role}/`); // sessionStorage for layout
  } else {
    return {
      message: "Wrong username or password. Try again",
    };
  }

  return {
    username,
    password,
  };
}
