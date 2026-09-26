"use client";

import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext(undefined);

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function isFavorite(userId) {
    return favorites.some((user) => user.id === userId);
  }

  function addFavorite(user) {
    setFavorites((prev) => [...prev, user]);
  }

  function removeFavorite(userId) {
    setFavorites((prev) => prev.filter((user) => user.id !== userId));
  }

  function toggleFavorite(user) {
    if (isFavorite(user.id)) {
      removeFavorite(user.id);
    } else {
      addFavorite(user);
    }
  }

  const value = {
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  const context = useContext(FavoriteContext);

  if (context === undefined) {
    throw new Error("useFavorite harus dipakai di dalam <FavoriteProvider>");
  }

  return context;
}