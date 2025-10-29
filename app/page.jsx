
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import HeroImg from '@/public/assets/hero.webp'
export default function Home() {
  return (
    <div >
      <HeroSection />
      {/* HeroSection image */}
      <div className="flex shadow-gray-950/100 shadow-inner shadow-2xl  relative justify-center ">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/60 via-emerald-500/70 to-transparent blur-3xl" />
         <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/10 to-transparent" />

        <div className="absolute flex w-[100vw] gap-25 items-center   mx-auto top-[300px] text-9xl font-black whitespace-nowrap animate-marquee">
           
          
          <div className="w-full ps-25">Best Markiting Agency</div>
          <div className="w-full ">Best Markiting Agency</div>
        </div>

        <Image className="w-[80vw] z-10" quality={100} src={HeroImg.src} height={HeroImg.height} width={HeroImg.width} alt="Hero Image" />
      </div>



    </div>
  );
}
