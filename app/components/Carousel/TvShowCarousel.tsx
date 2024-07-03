"use client";

import { TVShows } from "@/app/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { MovieCard } from "../Cards";
import { Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";

export function TvShowCarousel({ tvShows }: { tvShows: TVShows[] }) {
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
