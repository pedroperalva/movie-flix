"use client";

import { Movies } from "@/app/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { MovieCard } from "../Cards";
import { Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";

export function MovieCarousel({ movies }: { movies: Movies[] }) {
  return (
    <Swiper
      scrollbar
      slidesPerView={5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Scrollbar]}
      style={{
        paddingBottom: 15,
      }}
    >
      {movies &&
        movies.map((item: Movies, index: number) => {
          return (
            <SwiperSlide key={index}>
              <MovieCard
                poster={item.poster_path}
                id={item.id}
                title={item.title}
                rating={item.vote_average}
                type={"movie"}
              />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
