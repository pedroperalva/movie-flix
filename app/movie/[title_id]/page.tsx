import { Movie } from "@/app/types";
import {
  CircularProgress,
  CircularProgressLabel,
  Image,
} from "@chakra-ui/react";
import { Trailer } from "@/app/components/Modals";
import { CastCarousel } from "@/app/components/Carousel";

export default async function Title({
  params,
}: {
  params: { title_id: string };
}) {
  const data: Movie = await getTitleById(params.title_id);
  const credits: any = await getCredits(params.title_id);

  return (
    <main className="w-full relative pb-20">
      <div
        className="h-[600px] w-full bg-center absolute top-0 opacity-50"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${data.backdrop_path}")`,
        }}
      ></div>
      <div className="z-20 relative flex w-full h-[600px] px-10 pt-10">
        <Image
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          alt="poster"
          className="rounded-xl h-[450px] w-[300px] border-solid border-2"
        />
        <div className="h-[450px] w-full text-white font-semibold px-10">
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <p className="italic">{data.tagline}</p>
          <div className="flex my-4">
            <p className="mr-4">{data.release_date}</p>
            {data.genres.map((genre) => {
              return (
                <li key={genre.id} className="mr-4">
                  {genre.name}
                </li>
              );
            })}
          </div>
          <div className="flex items-center gap-5">
            <p className="border-solid border-2 w-8 text-center uppercase">
              {data.original_language}
            </p>
            <Trailer id={params.title_id} />
          </div>
          <p className="my-4">{data.runtime} min</p>
          <p className="">Sinopse:</p>
          <p className="my-4">{data.overview}</p>
          <div className="bg-black rounded-[50%] w-[65px]">
            <CircularProgress
              value={data.vote_average}
              max={10}
              color={`${
                data.vote_average > 7
                  ? "green.400"
                  : data.vote_average < 5
                  ? "red.400"
                  : "yellow.400"
              }`}
              size={16}
            >
              <CircularProgressLabel
                color={"white"}
                fontSize={"18px"}
                fontWeight={"bold"}
              >
                {data.vote_average.toFixed(1)}
              </CircularProgressLabel>
            </CircularProgress>
          </div>
          <div className="flex w-full items-center gap-3 mt-4">
            {data.production_companies.map((company: any, index: number) => {
              return company.logo_path ? (
                <div key={index}>
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                    alt="poster"
                    className="w-16"
                  />
                </div>
              ) : (
                <></>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 w-full mt-10">
        <h1 className="text-2xl text-white font-bold px-5">Elenco Principal</h1>
        <CastCarousel cast={credits.cast} />
      </div>
    </main>
  );
}

async function getTitleById(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/${id}?language=pt-BR&region=BR`,
    {
      next: { revalidate: 300 },
      headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}` },
    }
  );
  return response.json();
}

async function getCredits(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/${id}/credits?language=pt-BR&region=BR`,
    {
      next: { revalidate: 300 },
      headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}` },
    }
  );
  return response.json();
}
