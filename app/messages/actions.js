"use server"; // semua fungsi yang diexport dari file ini adalah Server Action

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function deleteMessageAction(id) {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    //Cari posisi (index) pesan yang id-nya cocok sama id yang dikirim. Kalau gak ketemu, hasilnya -1

    if (!name || !email || !message) {
    return { success: false, error: "Semua field wajib diisi." };
    }

    const { error } = await supabase
        .from("messages")
        .insert({ name, email, message });

    if (error) {
        return { success: false, error: error.message };
    }

    revalidatePath("/messages");
    //kasih tau Next.js: "halaman /messages datanya udah berubah, buang cache-nya, render ulang pas ada yang akses lagi". 
    // Inilah yang bikin tampilan auto-update

    return { success: true };
    //Balikin status sukses
}