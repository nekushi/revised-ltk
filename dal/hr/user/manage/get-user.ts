"use server";

import prisma from "@/lib/db";
import { TypeUser } from "../get-users";

const selectedUserKey = {
  id: true,
  first_name: true,
  last_name: true,
  role: true,
  username: true,
  sss: true,
  pag_ibig: true,
  phil_health: true,
  tin_number: true,
  contact_no: true,
  email: true,
  address: true,
  created_at: true,
};

export async function getUser(id: string): Promise<TypeSelectedUserKey | null> {
  //   return "Get User dal/user/manage";
  const user = await prisma.user.findFirst({
    where: {
      id,
    },
    select: selectedUserKey,
  });

  if (!user) return null;
  //   return {
  //     first_name: user.first_name,
  //   }

  //   if (!user) {
  //     return user
  //     //   success: false,
  //     //   message: "User not found",
  //     //   user

  //   }

  return user;
}
// ExtendedUser extends TypeUser {
//     updated_at: Date
//     db_updated_at: Date
// }

export type TypeSelectedUserKey = Omit<TypeUser, "password" | "db_created_at">;
// interface Type
