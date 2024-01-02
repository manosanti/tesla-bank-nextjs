import Img from "next/image";
import Link from "next/link";

// Images
import teslaLogo from "@/app/imgs/teslaLogo.svg";
// Icons
import { LuUser2 } from "react-icons/lu"; // Ícone de Login
import { FaChevronDown } from "react-icons/fa6"; // Ícone de seta para baixo
import { FaArrowRight } from "react-icons/fa6"; // Ícone de seta para direita

const Header = () => {
  return (
    <nav className="flex fixed left-0 right-0 w-full pt-5 max-w-5xl mx-auto items-center justify-between">
      <div className="flex">
        <Img src={teslaLogo} alt="Tesla Logo" className="mr-8" />
        <ul className="flex">
          <li className="flex items-center">
            <Link href="/">TeslaBank</Link>
            <FaChevronDown className="text-brandColor mx-2" />
          </li>
          <li className="flex items-center">
            <Link href="/">Conta digital</Link>
            <FaChevronDown className="text-brandColor mx-2" />
          </li>
          <li className="flex items-center">
            <Link href="/">Pra você</Link>
            <FaChevronDown className="text-brandColor mx-2" />
          </li>
        </ul>
      </div>
      <div>
        <Link href={"/login"} className="flex items-center text-white">
          Login
          <LuUser2 className="ml-2" />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
