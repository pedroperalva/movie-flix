"use client";

import { useSearchParams } from "next/navigation";
import { api } from "../utils/api";
import { useEffect, useState } from "react";
import { MovieCard } from "../components/Cards";
import { Movies } from "../types";

export default function Search() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const query = searchParams.get("query");

  const [data, setData] = useState<Movies[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFind = async () => {
    try {
      setLoading(true);
      const response = await api.get(
        `/search/${type}?query=${query}&language=pt-BR&region=BR`
      );
      setData(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFind();
  }, []);

  console.log(data);

  return (
    <div className="w-full flex flex-wrap h-full gap-5 p-5">
      {loading ? (
        <></>
      ) : (
        data &&
        data.map((item: Movies) => {
          return item.poster_path ? (
            <MovieCard
              poster={item.poster_path}
              id={item.id}
              title={item.title}
              rating={item.vote_average}
              type={type ? type : ""}
            />
          ) : (
            <></>
          );
        })
      )}
    </div>
  );
}
