import { BiSolidMoviePlay } from "react-icons/bi";

export function MainLogo({ textSize }: { textSize: string }) {
  return (
    <div className="flex items-center gap-1">
      <h1 className={`font-main-name text-white ${textSize}`}>
        MOVIE<span className="text-red-600">FLIX</span>
      </h1>
      <BiSolidMoviePlay className="text-red-600" size={28} />
    </div>
  );
}
