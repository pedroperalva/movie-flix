"use client";

import { Movies } from "@/app/types";
import {
  Card,
  CardBody,
  CircularProgress,
  CircularProgressLabel,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
export function MovieCard({ movie }: { movie: Movies }) {
  const router = useRouter();
  return (
    <Card
      className="w-40 h-[300px] cursor-pointer"
      rounded={"xl"}
      onClick={() => router.push(`/title/${movie.id}`)}
    >
      <CardBody
        padding={0}
        className="relative"
        position={"relative"}
        backgroundColor={"black"}
        rounded={"xl"}
      >
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="poster"
          className="w-40 rounded-t-xl h-[240px]"
        />
        <h2 className="font-bold text-sm text-white mt-4 px-2 text-center">
          {movie.title}
        </h2>
        <div className="absolute top-[220px] right-2 bg-black rounded-[50%]">
          <CircularProgress
            value={movie.vote_average}
            max={10}
            color={`${
              movie.vote_average > 7
                ? "green.400"
                : movie.vote_average < 5
                ? "red.400"
                : "yellow.400"
            }`}
            capIsRound
            size={9}
          >
            <CircularProgressLabel
              color={"white"}
              fontSize={"13px"}
              fontWeight={"bold"}
            >
              {movie.vote_average.toFixed(1)}
            </CircularProgressLabel>
          </CircularProgress>
        </div>
      </CardBody>
    </Card>
  );
}
