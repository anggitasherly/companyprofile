import { createClient } from "@/lib/supabase/server";

export async function findAllFavorites() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("favorites")
    .select("*, app_users(id, name, email, company_name)");
  if (error) throw new Error(error.message);
  return data;
}

export async function findFavoriteById(id) {
  const { data, error } = await supabase
    .from("favorites")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return data;
}

export async function insertFavorite(payload) {
  const { data, error } = await supabase
    .from("favorites")
    .insert(payload)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function deleteFavoriteById(id) {
  const { error } = await supabase.from("favorites").delete().eq("user_id", id);
  if (error) throw new Error(error.message);
  return true;
}