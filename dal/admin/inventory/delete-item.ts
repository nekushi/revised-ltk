"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteItem(prevState: unknown, formdata: FormData) {
  const id = String(formdata.get("id") ?? "");

  try {
    await prisma.adminInventory.delete({
      where: { id },
    });

    revalidatePath("/admin/v1/inventory");
    return {
      success: true,
      message: "Item deleted successfully",
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
