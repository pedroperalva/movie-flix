"use client";

import { TVShows } from "@/app/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { MovieCard } from "../Cards";
import { Autoplay } from "swiper/modules";

export function TvShowCarousel({ tvShows }: { tvShows: TVShows[] }) {
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
      {tvShows &&
        tvShows.map((item: TVShows, index: number) => {
          return (
            <SwiperSlide key={index}>
              <MovieCard
                poster={item.poster_path}
                id={item.id}
                title={item.name}
                rating={item.vote_average}
                type={"tv"}
              />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
