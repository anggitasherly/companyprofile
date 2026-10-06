"use client";

import { HeartOff } from "lucide-react";

import UserCard from "@/components/UserCard";
import { useFavorite } from "@/context/FavoriteContext";

export default function FavoritesPage() {
  const { favorites } = useFavorite();

  return (
    <section className="relative">
      <div className="bg-grid bg-radial-fade absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary">Favorites</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            Your Favorite Users
          </h1>
          <p className="mt-4 text-muted-foreground">
            Users you&apos;ve marked as favorite.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {favorites.length > 0 ? (
            favorites.map((fav) => (
              <UserCard
                key={fav.id}
                user={{
                  id: fav.id,
                  name: fav.name,
                  email: fav.email,
                  company: { name: fav.company_name },
                }}
              />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center gap-3 py-16 text-center text-muted-foreground">
              <HeartOff className="size-8" />
              <p>Belum ada user yang difavoritkan.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}