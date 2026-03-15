"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteUser(
  prevState: unknown,
  formdata: FormData,
): Promise<{
  success: boolean;
  message: string;
}> {
  console.log(`Deleting account...`);

  const id = String(formdata.get("id") ?? "");

  try {
    await prisma.user.delete({ where: { id } });

    revalidatePath(`./${id}`);
    return {
      success: true,
      message: "User deleted successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
