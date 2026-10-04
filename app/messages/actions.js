"use server"; // semua fungsi yang diexport dari file ini adalah Server Action

import { messages } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteMessageAction(id) {
    const index = messages.findIndex((msg) => msg.id === id);
    //Cari posisi (index) pesan yang id-nya cocok sama id yang dikirim. Kalau gak ketemu, hasilnya -1

    if (index === -1) {
        return{success:false, error: "Pesan tidak ditemukan"};
    }
    //Kalau gak ketemu, langsung berhenti, balikin status gagal.

    messages.splice(index, 1);
    //dari posisi index, hapus 1 elemen. 
    // Ini langsung ngubah isi array messages yang di-import dari lib/db.js (soalnya array itu "nempel" di memory, bukan di-copy pas di-import).

    revalidatePath("/messages");
    //kasih tau Next.js: "halaman /messages datanya udah berubah, buang cache-nya, render ulang pas ada yang akses lagi". 
    // Inilah yang bikin tampilan auto-update

    return { success: true };
    //Balikin status sukses
}