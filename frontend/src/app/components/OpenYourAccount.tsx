// import Link from 'next/link';
import Img from "next/image";

// Images
import mobile from "@/app/imgs/mobile.svg"; // Imagem do celular
import checkCircle from "@/app/imgs/checkCircle.svg"; // Imagem do círculo com check
import heart from "@/app/imgs/heart.svg"; // Imagem do coração
import mousePointer from "@/app/imgs/mousePointer.svg"; // Imagem do mouse pointer
import dolarSign from '@/app/imgs/dollarSign.svg' // Imagem do cifrão
import smartphone from '@/app/imgs/smartphone.svg' // Imagem do smartphone
import smile from '@/app/imgs/smile.svg' // Imagem do smile

const OpenYourAccount = () => {
  return (
    <div className="bg-openYourAccount">
      <div className="grid grid-cols-2">
        <div className="m-auto flex h-screen items-center justify-center relative">
          <Img
            src={checkCircle}
            alt="Check Circle"
            className="left-[-3.25rem] top-32 bg-white w-24 rounded-xl p-7 z-10 absolute"
          />
            <Img
              src={mousePointer}
              alt="Check Circle"
              className="right-[-3.25rem] bg-white w-24 rounded-xl p-7 z-10 absolute"
            />
          <Img
            src={heart}
            alt="Check Circle"
            className="left-[-3.25rem] bottom-48 bg-white w-24 rounded-xl p-7 z-10 absolute"
          />
          <Img src={mobile} alt="mobile" className="relative" />
        </div>
        <div className="text-start my-auto">
            <div className="mb-7">
                <h2 className="text-4xl font-semibold mb-4">Abra sua conta <span className="text-brandColor">gratuita</span>!</h2>
                <p className="text-slate-500 w-2/4">Envie e receba dinheiro de forma mais prática e rápida. Faça Pix, TEDs e transferências com agendamento para todos os bancos sem pagar nada.</p>
            </div>

            <div>
                <div className="flex items-center mb-7">
                    <Img src={dolarSign} alt="Check Circle" className="bg-white w-14 rounded p-2 mr-4" />
                    <div>
                        <h3 className="font-semibold text-slate-600">Seu dinheiro rendendo mais</h3>
                        <p className="text-slate-500">Rendem mais que a poupança e você resgata quando quiser</p>
                    </div>
                </div>
                <div className="flex items-center mb-7">
                    <Img src={smartphone} alt="Check Circle" className="bg-white w-14 rounded p-2 mr-4" />
                    <div>
                        <h3 className="font-semibold text-slate-600">Seu dinheiro rendendo mais</h3>
                        <p className="text-slate-500">Rendem mais que a poupança e você resgata quando quiser</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <Img src={smile} alt="Check Circle" className="bg-white w-14 rounded p-2 mr-4" />
                    <div>
                        <h3 className="font-semibold text-slate-600">Seu dinheiro rendendo mais</h3>
                        <p className="text-slate-500">Rendem mais que a poupança e você resgata quando quiser</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OpenYourAccount;
