"use client";

import { TVShow } from "@/app/types";
import {
  Button,
  CircularProgress,
  CircularProgressLabel,
  Image,
} from "@chakra-ui/react";
import { Trailer } from "@/app/components/Modals";
import { CastCarousel } from "@/app/components/Carousel";
import { useEffect, useState } from "react";
import { api, api2 } from "@/app/utils/api";

export default function Title({ params }: { params: { title_id: string } }) {
  const [data, setData] = useState<TVShow>();
  const [credits, setCredits] = useState<any>({});
  async function getTitleById() {
    try {
      const response = await api.get(
        `/tv/${params.title_id}?language=pt-BR&region=BR`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCredits() {
    try {
      const response = await api.get(
        `/tv/${params.title_id}/credits?language=pt-BR&region=BR`
      );
      setCredits(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCredits();
    getTitleById();
  }, []);

  const addToFavorites = async () => {
    const user = JSON.parse(localStorage.getItem("userData") || "{}");
    await api2.post(`/favorites/${user?.id}`, {
      type: "tvshow",
      titleId: data?.id.toString(),
      poster_path: data?.poster_path,
      vote_average: data?.vote_average,
      title: data?.name,
    });
  };

  return (
    <main className="w-full relative h-full">
      <div
        className="h-full w-full bg-center absolute top-0"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${data?.backdrop_path}")`,
        }}
      ></div>
      <div className="h-full w-full !bg-black !bg-opacity-70 relative pb-20">
        <div className="z-20 relative flex w-full h-[600px] px-10 pt-10">
          <Image
            src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
            alt="poster"
            className="rounded-xl h-[450px] w-[300px] border-solid border-2"
          />
          <div className="h-[450px] w-full text-white font-semibold px-10">
            <h1 className="text-3xl font-bold">{data?.name}</h1>
            <p className="italic">{data?.tagline}</p>
            <div className="flex my-4">
              <p className="mr-4">{data?.first_air_date}</p>
              {data?.genres.map((genre: any) => {
                return (
                  <li key={genre.id} className="mr-4">
                    {genre.name}
                  </li>
                );
              })}
            </div>
            <div className="flex items-center gap-5">
              <p className="border-solid border-2 w-8 text-center uppercase">
                {data?.original_language}
              </p>
              <Trailer id={params.title_id} />
            </div>
            <p className="my-4">
              Episódios: {data?.number_of_episodes} | Temporadas:{" "}
              {data?.number_of_seasons}
            </p>
            <p className="mb-4">
              {" "}
              {data?.status === "Ended"
                ? "Série Finalizada"
                : data?.next_episode_to_air
                ? "Próximo Episódio: " +
                  data?.next_episode_to_air.name +
                  " - " +
                  data?.next_episode_to_air.air_date
                : "Próximo Episódio: -"}
            </p>
            <p className="">Sinopse:</p>
            <p className="my-4">{data?.overview}</p>
            <div className="bg-black rounded-[50%] w-[65px]">
              {/* <CircularProgress
              value={data?.vote_average}
              max={10}
              color={`${
                data?.vote_average > 7
                  ? "green.400"
                  : data?.vote_average < 5
                  ? "primary"
                  : "yellow.400"
              }`}
              size={16}
            >
              <CircularProgressLabel
                color={"white"}
                fontSize={"18px"}
                fontWeight={"bold"}
              >
                {data?.vote_average.toFixed(1)}
              </CircularProgressLabel>
            </CircularProgress> */}
            </div>
            <div className="flex items-center gap-3 mt-4 ">
              {data?.production_companies.map((company: any, index: number) => {
                return company.logo_path ? (
                  <>
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                      alt="poster"
                      className="w-16"
                    />
                  </>
                ) : (
                  <></>
                );
              })}
            </div>
            <Button
              onClick={() => {
                addToFavorites();
              }}
            >
              Adicionar aos favoritos
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-10 w-full mt-10 z-20 relative">
          <h1 className="text-2xl text-white font-bold px-5">
            Elenco Principal
          </h1>
          <CastCarousel cast={credits.cast} />
        </div>
      </div>
    </main>
  );
}
