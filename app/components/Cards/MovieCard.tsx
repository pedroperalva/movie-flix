"use client";

import {
  Card,
  CardBody,
  CircularProgress,
  CircularProgressLabel,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
export function MovieCard({
  poster,
  title,
  rating,
  id,
  type,
}: {
  poster: string;
  title: string;
  rating: number;
  id: number;
  type: string;
}) {
  const router = useRouter();
  return (
    <Card
      className="w-40 h-[300px] cursor-pointer"
      rounded={"xl"}
      onClick={() =>
        type === "movie"
          ? router.push(`/movie/${id}`)
          : router.push(`/tvshow/${id}`)
      }
    >
      <CardBody
        padding={0}
        className="relative"
        position={"relative"}
        backgroundColor={"black"}
        rounded={"xl"}
      >
        <Image
          src={`https://image.tmdb.org/t/p/original/${poster}`}
          alt="poster"
          className="w-40 rounded-t-xl h-[240px]"
        />
        <h2 className="font-bold text-sm !text-white mt-4 px-2 text-center">
          {title}
        </h2>
        <div className="absolute top-[220px] right-2 bg-black rounded-[50%]">
          <CircularProgress
            value={rating}
            max={10}
            color={`${
              rating > 7 ? "green.400" : rating < 5 ? "red.400" : "yellow.400"
            }`}
            capIsRound
            size={9}
          >
            <CircularProgressLabel
              color={"white"}
              fontSize={"13px"}
              fontWeight={"bold"}
            >
              {rating.toFixed(1)}
            </CircularProgressLabel>
          </CircularProgress>
        </div>
      </CardBody>
    </Card>
  );
}
