"use server";

import { Role } from "@/app/generated/prisma/enums";
import prisma from "@/lib/db";

export async function fetchUsers(): Promise<TypeUser[]> {
  const users = await prisma.user.findMany();

  return users;
}

export type TypeUser = {
  id: string;
  first_name: string;
  last_name: string;
  role: Role;
  username: string;
  password: string;
  sss: string | null;
  pag_ibig: string | null;
  phil_health: string | null;
  tin_number: string | null;
  contact_no: string | null;
  email: string | null;
  address: string | null;
  created_at: Date;
  db_created_at: Date;
};
