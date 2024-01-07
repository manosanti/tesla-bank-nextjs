import Img from "next/image";
import Link from "next/link";

import creditCard from "@/app/imgs/creditCard.svg"; // Imagem do cartão de crédito
import advatagesBG from "@/app/imgs/advantagesBG.svg"; // Imagem do fundo do componente

const Advantages = () => {
  return (
    <div className="h-screen bg-heroBG flex items-center">
            <Img src={advatagesBG} alt="Hero Line" className="absolute z-10" />
      <div className="max-w-5xl m-auto">
        <div className="my-auto">
          <div className="mb-10">
            <h3 className="uppercase text-brandColor font-semibold">
              #inovação
            </h3>
            <h4 className="font-semibold text-4xl">
              Quais as vantagens <br />
              de usar <span className="text-brandColor">TeslaBank</span>?
            </h4>
          </div>
          <div className="grid grid-cols-4 grid-rows-2 gap-6 relative z-20">
            <div className="bg-white p-4 pb-10">
              <Img src={creditCard} alt="Credit Card Solid Icon" />
              <div className="my-3.5">
                <h2 className="font-semibold text-slate-600 text-lg">
                  Cartão TeslaBank
                </h2>
                <p className="text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean vitae leo lacinia, tempus odio hendrerit, ultricies
                  diam.
                </p>
              </div>
              <Link
                href={"/"}
                className="text-brandColor font-semibold uppercase border-b-2 border-brandColor"
              >
                Veja as opções
              </Link>
            </div>
            <div className="bg-white p-4 pb-10">
              <Img src={creditCard} alt="Credit Card Solid Icon" />
              <div className="my-3.5">
                <h2 className="font-semibold text-slate-600 text-lg">
                  Cartão TeslaBank
                </h2>
                <p className="text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean vitae leo lacinia, tempus odio hendrerit, ultricies
                  diam.
                </p>
              </div>
              <Link
                href={"/"}
                className="text-brandColor font-semibold uppercase border-b-2 border-brandColor"
              >
                Veja as opções
              </Link>
            </div>
            <div className="bg-white p-4 pb-10">
              <Img src={creditCard} alt="Credit Card Solid Icon" />
              <div className="my-3.5">
                <h2 className="font-semibold text-slate-600 text-lg">
                  Cartão TeslaBank
                </h2>
                <p className="text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean vitae leo lacinia, tempus odio hendrerit, ultricies
                  diam.
                </p>
              </div>
              <Link
                href={"/"}
                className="text-brandColor font-semibold uppercase border-b-2 border-brandColor"
              >
                Veja as opções
              </Link>
            </div>
            <div></div>
            <div></div>
            <div className="bg-white p-4 pb-10">
              <Img src={creditCard} alt="Credit Card Solid Icon" />
              <div className="my-3.5">
                <h2 className="font-semibold text-slate-600 text-lg">
                  Cartão TeslaBank
                </h2>
                <p className="text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean vitae leo lacinia, tempus odio hendrerit, ultricies
                  diam.
                </p>
              </div>
              <Link
                href={"/"}
                className="text-brandColor font-semibold uppercase border-b-2 border-brandColor"
              >
                Veja as opções
              </Link>
            </div>
            <div className="bg-white p-4 pb-10">
              <Img src={creditCard} alt="Credit Card Solid Icon" />
              <div className="my-3.5">
                <h2 className="font-semibold text-slate-600 text-lg">
                  Cartão TeslaBank
                </h2>
                <p className="text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean vitae leo lacinia, tempus odio hendrerit, ultricies
                  diam.
                </p>
              </div>
              <Link
                href={"/"}
                className="text-brandColor font-semibold uppercase border-b-2 border-brandColor"
              >
                Veja as opções
              </Link>
            </div>
            <div className="bg-white p-4 pb-10">
              <Img src={creditCard} alt="Credit Card Solid Icon" />
              <div className="my-3.5">
                <h2 className="font-semibold text-slate-600 text-lg">
                  Cartão TeslaBank
                </h2>
                <p className="text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean vitae leo lacinia, tempus odio hendrerit, ultricies
                  diam.
                </p>
              </div>
              <Link
                href={"/"}
                className="text-brandColor font-semibold uppercase border-b-2 border-brandColor"
              >
                Veja as opções
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
