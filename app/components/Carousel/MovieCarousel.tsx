"use client";

import { Movies } from "@/app/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { MovieCard } from "../Cards";
import { Autoplay } from "swiper/modules";

export function MovieCarousel({ movies }: { movies: Movies[] }) {
  return (
    <Swiper
      slidesPerView={5}
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay]}
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
