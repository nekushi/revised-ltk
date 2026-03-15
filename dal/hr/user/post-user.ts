"use server";

import { Role } from "@/app/generated/prisma/enums";
import { currentNow } from "@/lib/current-now";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addUser(prevState: unknown, formdata: FormData) {
  console.log(`Creating user...`);

  const firstName = String(formdata.get("first-name") ?? "---");
  const lastName = String(formdata.get("last-name") ?? "---");
  const role = String(formdata.get("role") ?? "") as Role;
  const username = String(formdata.get("username") ?? "---");
  const password = String(formdata.get("password") ?? "---");
  const sss = String(formdata.get("sss") ?? "---");
  const pagIbig = String(formdata.get("pag-ibig") ?? "---");
  const philHealth = String(formdata.get("phil-health") ?? "---");
  const tinNumber = String(formdata.get("tin-number") ?? "---");
  const contact = String(formdata.get("contact-number") ?? "---");
  const email = String(formdata.get("email") ?? "---");
  const address = String(formdata.get("address") ?? "---");

  try {
    const user = await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        role: role,
        username: username,
        password: password,
        sss,
        pag_ibig: pagIbig,
        phil_health: philHealth,
        tin_number: tinNumber,
        contact_no: contact,
        email,
        address,
        created_at: new Date(),
        updated_at: new Date(),
        db_created_at: currentNow(),
        db_updated_at: currentNow(),
      },
    });

    revalidatePath("./user-management");
    return {
      success: true,
      message: "User added successfully",
    };
  } catch (error) {
    console.log(`Error: ${error}`);

    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
