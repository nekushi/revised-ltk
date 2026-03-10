"use server";

import { currentNow } from "@/lib/current-now";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function editItem(prevState: unknown, formdata: FormData) {
  const id = String(formdata.get("id") ?? "");
  const supplierName = String(formdata.get("supplier-name") ?? "");
  const tinNumber = String(formdata.get("tin-number") ?? "");
  const productName = String(formdata.get("product-name") ?? "");
  const itemRecognition = String(formdata.get("item-recognition") ?? "");
  const quantity = Number(formdata.get("quantity"));
  const measurement = String(formdata.get("measurement")?.toString() ?? "");
  const unitPrice = Number(formdata.get("unit-price"));

  try {
    const item = await prisma.adminInventory.update({
      where: { id },
      data: {
        supplier_name: supplierName,
        tin_number: tinNumber,
        product_name: productName,
        item_recognition: itemRecognition,
        quantity,
        measurement,
        unit_price: unitPrice,
        updated_at: new Date(),
        db_updated_at: currentNow(),
      },
    });

    revalidatePath("/admin/v1/inventory");
    return {
      success: true,
      message: "Item edited successfully",
      item,
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Something went wrong",
    };
  }

  //   return {
  //     typeOfStocks,
  //     supplierName,
  //     tinNumber,
  //     productName,
  //     itemRecognition,
  //     quantity,
  //     measurement,
  //     unitPrice,
  //   };
}
