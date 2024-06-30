import { Movies } from "@/app/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { MovieCard } from "../Cards";
import { Autoplay } from "swiper/modules";

export function MainCarousel({ movies }: { movies: Movies[] }) {
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
      {movies.map((movie: Movies, index: number) => {
        return (
          <SwiperSlide>
            <MovieCard movie={movie} key={index} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
