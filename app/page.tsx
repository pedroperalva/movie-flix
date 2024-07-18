import { MovieCarousel, TvShowCarousel } from "./components/Carousel";
import { SearchInputTab } from "./components/Inputs";
import { MainLogo } from "./components/Logos";

export default async function Home() {
  const movies = await getMovies();
  const series = await getSeries();

  return (
    <main className="p-24 flex flex-col items-center">
      <section className="flex flex-col justify-around w-[860px] bg-black-bg bg-cover bg-no-repeat h-[500px] rounded-xl p-14 mb-10">
        <div>
          <MainLogo textSize="text-4xl" />
          <h2 className="text-3xl font-bold text-white">
            Milhões de Filmes, Séries e Pessoas para Descobrir.
          </h2>
        </div>
        <SearchInputTab />
      </section>
      <section className="flex flex-col w-[860px] justify-center gap-[50px]">
        <h3 className="text-2xl font-bold text-white">Filmes</h3>
        {movies && <MovieCarousel movies={movies.results}></MovieCarousel>}
        <h3 className="text-2xl font-bold text-white">Séries</h3>
        {series && <TvShowCarousel tvShows={series.results}></TvShowCarousel>}
      </section>
    </main>
  );
}

async function getMovies() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/discover/movie?language=pt-BR&region=BR`,
    {
      next: { revalidate: 1000 },
      headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}` },
    }
  );
  return response.json();
}

async function getSeries() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/discover/tv?language=pt-BR&region=BR`,
    {
      next: { revalidate: 300 },
      headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}` },
    }
  );
  return response.json();
}

// export const generateStaticParams = async () => {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/discover/tv?language=pt-BR&region=BR`,
//     {
//       next: { revalidate: 300 },
//       headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}` },
//     }
//   ).then((response) => response.json());
//   const movies = response;
//   return movies.results;
// };
