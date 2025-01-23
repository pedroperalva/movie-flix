"use client";

import { useEffect, useState } from "react";
import { api2 } from "../utils/api";
import { MovieCard } from "../components/Cards";
import { MovieDetails } from "../types";

export default function Favorites() {
  const [favorites, setFavorites] = useState<MovieDetails[]>([]);

  async function getFavorites() {
    try {
      const user = JSON.parse(localStorage.getItem("userData") || "{}");
      const response = await api2.get(`/favorites/${user?.id}`);
      setFavorites([...response.data]);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(favorites);

  useEffect(() => {
    getFavorites();
  }, []);
  return (
    <div className="p-24">
      <div className="flex flex-wrap gap-4">
        {favorites.map((item: MovieDetails) => {
          return (
            <MovieCard
              key={item.titleId}
              poster={item.poster_path}
              id={parseInt(item.titleId)}
              title={item.title}
              rating={item.vote_average}
              type={item.type}
            />
          );
        })}
      </div>
    </div>
  );
}
