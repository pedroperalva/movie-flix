"use client";
import { useEffect, useState } from "react";
import { api } from "./utils/api";
import { Movie } from "./types";
import { MainCarousel } from "./components/Carousel";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>();
  useEffect(() => {
    async function getPages() {
      const { data } = await api.get(
        "/discover/movie?language=pt-BR&region=BR"
      );
      setMovies(data.results);
    }

    getPages();
  }, []);
  return (
    <main className="min-h-screen p-24">
      {movies && <MainCarousel movies={movies}></MainCarousel>}
    </main>
  );
}
