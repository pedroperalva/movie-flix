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
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      modules={[Scrollbar]}
      style={{
        paddingBottom: 15,
      }}
      breakpoints={{
        1280: {
          slidesPerView: 7,
        },
        768: {
          slidesPerView: 4,
        },
        600: {
          slidesPerView: 3,
        },
        500: {
          slidesPerView: 2.5,
        },
        440: {
          slidesPerView: 2.2,
        },
        410: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1.5,
        },
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
