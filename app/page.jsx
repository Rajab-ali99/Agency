
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import HeroImg from '@/public/assets/hero.webp'
import icon from '@/public/assets/icon.jpeg'
import { IoStarSharp } from "react-icons/io5";

export default function Home() {
  return (
    <div >
      <HeroSection />
      {/* HeroSection image */}
      <div className="flex  relative justify-center ">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 via-emerald-500/60 to-transparent blur-3xl" />
        <div className="absolute z-20 inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

        <div className="absolute flex w-[100vw] gap-25 items-center   mx-auto top-[300px] text-9xl font-black whitespace-nowrap animate-marquee">


          <div className="w-full ps-25">Best Markiting Agency</div>
          <div className="w-full ">Best Markiting Agency</div>
        </div>

        <Image className="w-[80vw] z-10" quality={100} src={HeroImg.src} height={HeroImg.height} width={HeroImg.width} alt="Hero Image" />
      </div>

      <div className=" relative left-[190px] bottom-[110px] bg-transparent z-50  rounded-4xl w-sm py-4 px-5 border border-slate-600">
        <div className="text-4xl pb-2   border-gray-500"><span className="font-black text-5xl text-emerald-400">#1</span> Marketing Agency in Pakistan</div>
        <div className="w-full h-[0.5px] bg-gray-700"></div>
        <div className="pt-3 flex items-center gap-5">
          <div className="h-[40px] w-[40px] rounded-full">
            <Image className="h-full w-full rounded-full" src={icon.src} height={icon.height} width={icon.width} alt="icon" />
          </div>
          <div>
            <div className="flex items-center ">
              <IoStarSharp className="text-emerald-400"/>
              <IoStarSharp className="text-emerald-400"/>
              <IoStarSharp className="text-emerald-400"/>
              <IoStarSharp className="text-emerald-400"/>
              <IoStarSharp className="text-emerald-400"/>
            
              </div>
            <div className="text-xl">200+ 5 star Reviews</div>
          </div>
        </div>
      </div>
      <div className="w-[100wv] h-[120vh]">

      </div>

    </div>
  );
}
