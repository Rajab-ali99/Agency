
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import HeroImg from '@/public/assets/hero.webp'
import icon from '@/public/assets/icon.jpeg'
import { IoStarSharp } from "react-icons/io5";
import Button from "@/components/Button";
import { FaInstagram } from "react-icons/fa6";
import Button1 from "@/components/Button1";
import group from '@/public/assets/grp.jpg'
import { BsFillRocketFill } from "react-icons/bs";
import { DiRaphael } from "react-icons/di";
import { SiHiveBlockchain } from "react-icons/si";
import { PiUserFocus } from "react-icons/pi";

export default function Home() {
  return (
    <div >
      <HeroSection />
      {/* HeroSection image */}
      <div className="flex overflow-hidden relative justify-center ">
        <div className="absolute inset-0 bg-gradient-to-t  from-emerald-500/10 via-emerald-500/60 to-transparent blur-3xl" />
        <div className="absolute z-20 inset-0 bg-gradient-to-t bottom-0  from-black/90 via-black/10 to-transparent" />

        <div className="absolute flex w-[100vw] gap-25 items-center   mx-auto top-[300px] text-9xl font-black whitespace-nowrap animate-marquee">


          <div className="w-full ps-25">Best Markiting Agency</div>
          <div className="w-full ">Best Markiting Agency</div>
        </div>

        <Image className="w-[80vw] z-10" quality={100} src={HeroImg.src} height={HeroImg.height} width={HeroImg.width} alt="Hero Image" />
      </div>

      <div className=" relative left-[170px] -mt-[110px] bg-transparent z-50  rounded-4xl w-sm py-4 px-5 border border-slate-600">
        <div className="text-4xl pb-2   border-gray-500"><span className="font-black text-5xl text-emerald-400">#1</span> Marketing Agency in Pakistan</div>
        <div className="w-full h-[0.5px] bg-gray-700"></div>
        <div className="pt-3 flex items-center gap-5">
          <div className="h-[40px] w-[40px] rounded-full">
            <Image className="h-full w-full rounded-full" src={icon.src} height={icon.height} width={icon.width} alt="icon" />
          </div>
          <div>
            <div className="flex items-center ">
              <IoStarSharp className="text-emerald-400" />
              <IoStarSharp className="text-emerald-400" />
              <IoStarSharp className="text-emerald-400" />
              <IoStarSharp className="text-emerald-400" />
              <IoStarSharp className="text-emerald-400" />

            </div>
            <div className="text-xl">200+ 5 star Reviews</div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="pt-20 px-10">
        <div className="flex items-center gap-10">
          <span className="text-emerald-500 text-xl font-black px-3 py-0.5 rounded-full bg-gray-800">Services</span>
          <h2 className="font-black text-6xl">What we are offering</h2>
        </div>
        <div className="pt-5 flex justify-end">
          <Button text='VIEW ALL SERVICES' type='button' />
        </div>
        <div className="grid gap-5 py-25 grid-cols-2">
          <div className="bg-[#1f1d1d] rounded-4xl h-[370px] p-6">
            <div className="bg-[#2a2828] inline-block p-1.5 rounded-xl">
              <FaInstagram className="text-5xl text-emerald-500" />
            </div>
            <h2 className="font-bold text-2xl py-1">Social Media Marketing</h2>
            <p className="text-lg mt-15">Boost your brand visibility and engagement with our Social Media Marketing services. We craft tailored strategies, create captivating content, and manage campaigns that drive traffic, grow followers, and turn audiences into loyal customers.</p>
            <div className="my-2">

              <Button1 text="Explore more" type="button" />
            </div>
          </div>

          <div className="bg-[#1f1d1d] rounded-4xl h-[370px] p-6">
            <div className="bg-[#2a2828] inline-block p-1.5 rounded-xl">
              <FaInstagram className="text-5xl text-emerald-500" />
            </div>
            <h2 className="font-bold text-2xl py-1">Social Media Marketing</h2>
            <p className="text-lg mt-15">Boost your brand visibility and engagement with our Social Media Marketing services. We craft tailored strategies, create captivating content, and manage campaigns that drive traffic, grow followers, and turn audiences into loyal customers.</p>
            <div className="my-2">

              <Button1 text="Explore more" type="button" />
            </div>
          </div>

          <div className="bg-[#1f1d1d] rounded-4xl h-[370px] p-6">
            <div className="bg-[#2a2828] inline-block p-1.5 rounded-xl">
              <FaInstagram className="text-5xl text-emerald-500" />
            </div>
            <h2 className="font-bold text-2xl py-1">Social Media Marketing</h2>
            <p className="text-lg mt-15">Boost your brand visibility and engagement with our Social Media Marketing services. We craft tailored strategies, create captivating content, and manage campaigns that drive traffic, grow followers, and turn audiences into loyal customers.</p>
            <div className="my-2">

              <Button1 text="Explore more" type="button" />
            </div>
          </div>

          <div className="bg-[#1f1d1d] rounded-4xl h-[370px] p-6">
            <div className="bg-[#2a2828] inline-block p-1.5 rounded-xl">
              <FaInstagram className="text-5xl text-emerald-500" />
            </div>
            <h2 className="font-bold text-2xl py-1">Social Media Marketing</h2>
            <p className="text-lg mt-15">Boost your brand visibility and engagement with our Social Media Marketing services. We craft tailored strategies, create captivating content, and manage campaigns that drive traffic, grow followers, and turn audiences into loyal customers.</p>
            <div className="my-2">

              <Button1 text="Explore more" type="button" />
            </div>
          </div>

          <div className="bg-[#1f1d1d] rounded-4xl h-[370px] p-6">
            <div className="bg-[#2a2828] inline-block p-1.5 rounded-xl">
              <FaInstagram className="text-5xl text-emerald-500" />
            </div>
            <h2 className="font-bold text-2xl py-1">Social Media Marketing</h2>
            <p className="text-lg mt-15">Boost your brand visibility and engagement with our Social Media Marketing services. We craft tailored strategies, create captivating content, and manage campaigns that drive traffic, grow followers, and turn audiences into loyal customers.</p>
            <div className="my-2">

              <Button1 text="Explore more" type="button" />
            </div>
          </div>

          <div className="bg-[#1f1d1d] rounded-4xl h-[370px] p-6">
            <div className="bg-[#2a2828] inline-block p-1.5 rounded-xl">
              <FaInstagram className="text-5xl text-emerald-500" />
            </div>
            <h2 className="font-bold text-2xl py-1">Social Media Marketing</h2>
            <p className="text-lg mt-15">Boost your brand visibility and engagement with our Social Media Marketing services. We craft tailored strategies, create captivating content, and manage campaigns that drive traffic, grow followers, and turn audiences into loyal customers.</p>
            <div className="my-2">

              <Button1 text="Explore more" type="button" />
            </div>
          </div>

        </div>
      </section>

      {/* Our Expertise Section */}
      <section>
        <div className="flex px-10 pb-8 items-center gap-10">
          <span className="text-emerald-500 text-xl font-black px-3 py-0.5 rounded-full bg-gray-800">Why us</span>
          <h2 className="font-black text-5xl">Our Specialities</h2>
        </div>
        <div className="flex overflow-hidden relative justify-center ">
          <div className="absolute  inset-0 bg-gradient-to-b   from-black/90 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t  from-emerald-500/10 via-emerald-500/90 to-transparent blur-3xl" />
          <div className="absolute z-20 inset-0 bg-gradient-to-t   from-black/90 via-black/10 to-transparent" />
          <div className="z-10 absolute  pt-10 flex justify-center">


            <div className="bg-slate-50/25  h-[180px] gap-2 flex flex-col items-center justify-center w-[180px] rounded-full  ">
              <div className="text-5xl font-black ">15+</div>
              <div className="font-bold text-gray-100 text-xl">Years of Experience</div>
            </div>

            <div className="bg-slate-50/25 relative right-5 bottom-5 h-[180px] gap-2 flex flex-col items-center justify-center w-[180px] rounded-full  ">
              <div className="text-5xl font-black ">200+</div>
              <div className="font-bold text-gray-100 text-xl">Successfull Projects</div>
            </div>

            <div className="bg-slate-50/25 relative right-10   h-[180px] gap-2 flex flex-col items-center justify-center w-[180px] rounded-full  ">
              <div className="text-5xl font-black ">150+</div>
              <div className="font-bold text-gray-100 text-xl">Happy Clients</div>
            </div>

            <div className="bg-slate-50/25 relative right-15 bottom-5  h-[180px] gap-2 flex flex-col items-center justify-center w-[180px] rounded-full  ">
              <div className="text-5xl font-black ">200+</div>
              <div className="font-bold text-gray-100 text-xl">5 Star Reviews</div>
            </div>


          </div>
          <div className="absolute z-20 bottom-0 w-full ">
            <div className="flex gap-3 px-8  items-center">
              <div className="p-5 flex  rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/40 justify-center ">
                <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-emerald-500 border">
                  < BsFillRocketFill className="text-emerald-500 text-4xl" />
                </div>
                <h3 className="text-3xl font-black">Proven Track Record</h3>
                <p className="text-lg">We have built a reputation as a trusted and reliable partner in achieving business success.</p>
              </div>
               <div className="p-5 flex rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/40 justify-center ">
                <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-emerald-500 border">
                  < SiHiveBlockchain className="text-emerald-500 text-4xl" />
                </div>
                <h3 className="text-3xl font-black">Proven Track Record</h3>
                <p className="text-lg">We have built a reputation as a trusted and reliable partner in achieving business success.</p>
              </div>
               <div className="p-5 flex rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/40 justify-center ">
                <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-emerald-500 border">
                  < PiUserFocus className="text-emerald-500 text-4xl" />
                </div>
                <h3 className="text-3xl font-black">Proven Track Record</h3>
                <p className="text-lg">We have built a reputation as a trusted and reliable partner in achieving business success.</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="flex items-center px-3 py-1 rounded-full my-10 gap-1 bg-[#1f1d1d]/60">
                <DiRaphael className="text-emerald-500 text-3xl"/>
                <div className="text-xl font-bold">Continuous Innovation</div>

              </div>
              <div className="flex items-center px-3 py-1 rounded-full my-10 gap-1 bg-[#1f1d1d]/60">
                <DiRaphael className="text-emerald-500 text-3xl"/>
                <div className="text-xl font-bold">Dedicated Support</div>

              </div>
              <div className="flex items-center px-3 py-1 rounded-full my-10 gap-1 bg-[#1f1d1d]/60">
                <DiRaphael className="text-emerald-500 text-3xl"/>
                <div className="text-xl font-bold">Positive Client Experiences</div>

              </div>
              <div className="flex items-center px-3 py-1 rounded-full my-10 gap-1 bg-[#1f1d1d]/60">
                <DiRaphael className="text-emerald-500 text-3xl"/>
                <div className="text-xl font-bold">Commitment to Excellence</div>

              </div>
            </div>
          </div>

          <Image className="w-[100vw] " quality={100} src={group.src} height={group.height} width={group.width} alt="Hero Image" />
        </div>
      </section>

    </div>
  );
}
