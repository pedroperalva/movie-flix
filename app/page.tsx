import { MovieCarousel, TvShowCarousel } from "./components/Carousel";

export default async function Home() {
  const movies = await getMovies();
  const series = await getSeries();

  return (
    <main className="p-24">
      {movies && <MovieCarousel movies={movies.results}></MovieCarousel>}
      {series && <TvShowCarousel tvShows={series.results}></TvShowCarousel>}
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
