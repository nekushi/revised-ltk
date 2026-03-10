"use server";

import prisma from "@/lib/db";

export async function fetchInventories(): Promise<TypeInventories[]> {
  const items = await prisma.adminInventory.findMany();

  // console.log(items);

  return items;
  // return [
  //   {
  //     id: "123",
  //     type_of_stocks: "Beginning Stocks",
  //     supplier_name: "Faber Castel",
  //     tin_number: "123-456-789",
  //     product_name: "Ballpen",
  //     item_recognition: "Dry Items",
  //     quantity: 7,
  //     measurement: "pc",
  //     unit_price: 14.99,
  //     updated_at: "March 9",
  //   },
  //   {
  //     id: "456",
  //     type_of_stocks: "Beginning Stocks",
  //     supplier_name: "Manok Inc.",
  //     tin_number: "321-654-987",
  //     product_name: "Chicken",
  //     item_recognition: "Raw Materials",
  //     quantity: 100,
  //     measurement: "pc",
  //     unit_price: 180,
  //     updated_at: "March 10",
  //   },
  // ];
  // return [];
}

export type TypeInventories = {
  id: string;
  supplier_name: string;
  tin_number: string;
  product_name: string;
  item_recognition: string;
  quantity: number;
  measurement: string;
  unit_price: number;
  created_at: Date;
  updated_at: Date;
};
