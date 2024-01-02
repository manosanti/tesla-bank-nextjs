import Link from "next/link";
import Img from "next/image";

// Images
import heroCards from "@/app/imgs/heroCards.svg"; // Imagem dos cartões do hero
import heroLine from "@/app/imgs/heroLine.svg"; // Linha do hero

// Icons
import { FaGooglePlay } from "react-icons/fa"; // Ícone do Google Play
import { FaApple } from "react-icons/fa"; // Ícone da Apple
import { FaArrowRight } from "react-icons/fa6"; // Ícone de seta para direita

const Hero = () => {
  return (
    <main className="bg-heroBG">
      <Img src={heroLine} alt="Hero Line" className="absolute top-44" />
      <Img src={heroLine} alt="Hero Line" className="absolute bottom-20 scale-x-[-1]" />
      <div className="grid grid-cols-2 h-screen">
        <div className="m-auto">
          <div>
            <h1 className="text-brandColor font-semibold text-6xl mb-4">
              TeslaBank <br /> Banco 100% digital
            </h1>
            <p className="mb-10">
              Abrir uma conta digital nunca foi tão simples!
            </p>
          </div>
          <div className="flex items-center">
            <button className="bg-brandColor p-2 rounded mr-4">
              <Link
                href={"/"}
                className="flex items-center px-5 text-white text-xl"
              >
                Abrir uma conta <FaArrowRight className="text-base ml-2" />
              </Link>
            </button>
            <Link href={"/"}>
              <FaApple className="text-brandColor text-3xl mr-4" />
            </Link>
            <Link href={"/"}>
              <FaGooglePlay className="text-brandColor text-2xl mr-4" />
            </Link>
          </div>
        </div>
        <div className="bg-brandColor flex justify-center h-screen">
          <Img src={heroCards} alt="Hero Cards" className="m-auto z-10" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
