"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { ProfileCard } from "./ProfileCard";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { useWindowResize } from "@/app/hooks/windowResize";

export function CastCarousel({ cast }: { cast: any }) {
  const windowSize = useWindowResize();
  return (
    <Swiper
      spaceBetween={5}
      scrollbar
      breakpoints={{
        0: {
          slidesPerView: 3,
        },
        500: {
          slidesPerView: 4,
        },
        650: {
          slidesPerView: 5,
        },
        750: {
          slidesPerView: 6,
        },
        1024: {
          slidesPerView: 8,
        },
        1400: {
          slidesPerView: 11,
          spaceBetween: 10,
        },
      }}
      modules={[Scrollbar]}
      style={{
        width: `${windowSize > 1024 ? "90%" : "98%"}`,
        paddingBottom: 15,
      }}
    >
      {cast.slice(0, 15).map((item: any, index: number) => {
        return item.profile_path ? (
          <SwiperSlide>
            <ProfileCard
              imgUrl={item.profile_path}
              name={item.name}
              characterName={item.character}
              key={index}
            />
          </SwiperSlide>
        ) : (
          <></>
        );
      })}
    </Swiper>
  );
}
