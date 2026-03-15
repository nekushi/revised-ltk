"use server";

import prisma from "@/lib/db";
import { Role } from "@/app/generated/prisma/enums";
import { currentNow } from "@/lib/current-now";
import { revalidatePath } from "next/cache";

export async function editUser(
  prevState: unknown,
  formdata: FormData,
): Promise<{
  success: boolean;
  message: string;
}> {
  console.log(`Updating user...`);

  const id = String(formdata.get("id") ?? "");
  const firstName = String(formdata.get("first-name") ?? "");
  const lastName = String(formdata.get("last-name") ?? "");
  const role = String(formdata.get("role") ?? "") as Role;
  const username = String(formdata.get("username") ?? "");
  const sss = String(formdata.get("sss") ?? "---");
  const pagIbig = String(formdata.get("pag-ibig") ?? "");
  const philHealth = String(formdata.get("phil-health") ?? "");
  const tinNumber = String(formdata.get("tin-number") ?? "");
  const contact = String(formdata.get("contact-number") ?? "");
  const email = String(formdata.get("email") ?? "");
  const address = String(formdata.get("address") ?? "");

  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        id,
        first_name: firstName,
        last_name: lastName,
        role,
        username,
        sss,
        pag_ibig: pagIbig,
        phil_health: philHealth,
        tin_number: tinNumber,
        contact_no: contact,
        email,
        address,
        updated_at: new Date(),
        db_updated_at: currentNow(),
      },
    });

    revalidatePath(`./${id}`);
    return {
      success: true,
      message: "User updated successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
