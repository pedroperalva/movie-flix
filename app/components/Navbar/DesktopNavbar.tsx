import Link from "next/link";
import { MainLogo } from "../Logos";

export function DesktopNavbar() {
  return (
    <nav className="h-14 w-full bg-black flex items-center px-3">
      <Link href={"/"}>
        <MainLogo />
      </Link>
    </nav>
  );
}
