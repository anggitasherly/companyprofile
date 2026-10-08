"use server"; // semua fungsi yang diexport dari file ini adalah Server Action

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function deleteMessageAction(formData) {
  // ambil id dari hidden input di form (name="id")
  const id = Number(formData.get("id"));

  // bikin koneksi Supabase di sisi server
  const supabase = await createClient();

  // hapus baris di tabel messages yang id-nya cocok
  const { error } = await supabase.from("messages").delete().eq("id", id);

  if (error) {
    return { success: false, error: error.message };
  }

  // kasih tau Next.js: data /messages udah berubah, render ulang
  revalidatePath("/messages");

  return { success: true };
}