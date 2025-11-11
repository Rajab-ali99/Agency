import React from 'react'
import { IoStarSharp } from 'react-icons/io5'
import icon from '@/public/assets/icon.jpeg'
import Image from 'next/image'
import ContactSection from '@/components/ContactForm'

const ReviewsPage = () => {
    return (
        <div className='p-3 md:p-10 relative'>
            <div style={{ zIndex: 0 }} className="fixed inset-0 bg-gradient-to-b from-emerald-500/40 via-transparent to-transparent blur-2xl" />
            <section className='z-10 relative'>

                <h1 className='md:text-6xl text-3xl font-black pt-20 text-center py-10'>
                    Check Our Works With <br /> Real Results
                </h1>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                    

                    <div className='bg-[#1f1d1d]/60 p-5 flex flex-col justify-between  rounded-4xl'>
                        <div className="flex items-center md:py-3 ">
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                        </div>
                        <div className='md:text-xl text-md md:pt-6 pt-3 '>
                            "Bullish Pixel took our social media from an afterthought to our top lead source. Their strategic ads and engaging content have generated a 260% ROI for our e-commerce store. They are true experts."
                        </div>
                        <div className="pt-3 flex items-center gap-5">
                            <div className="h-[50px] w-[50px] rounded-full">
                                <Image className="h-full w-full rounded-full" src={icon.src} height={icon.height} width={icon.width} alt="icon" />
                            </div>
                            <div>
                                <div className="font-bold text-emerald-500 text-xl">
                                    —David L

                                </div>
                                <div className="text-lg font-bold text-slate-500">E-Commerce Owner</div>
                            </div>
                        </div>
                    </div>

                     <div className='bg-[#1f1d1d]/60 p-5 flex flex-col justify-between  rounded-4xl'>
                        <div className="flex items-center md:py-3 ">
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                        </div>
                        <div className='md:text-xl text-md md:pt-6 pt-3 '>
                           "The team's ability to understand our brand voice and connect with our niche audience is incredible. Our engagement has skyrocketed, and we're building a real community, not just a follower count."
                        </div>
                        <div className="pt-3 flex items-center gap-5">
                            <div className="h-[50px] w-[50px] rounded-full">
                                <Image className="h-full w-full rounded-full" src={icon.src} height={icon.height} width={icon.width} alt="icon" />
                            </div>
                            <div>
                                <div className="font-bold text-emerald-500 text-xl">
                                    —Priya S.

                                </div>
                                <div className="text-lg font-bold text-slate-500">Boutique Fitness Studio Owner</div>
                            </div>
                        </div>
                    </div>

                     <div className='bg-[#1f1d1d]/60 p-5 flex flex-col justify-between  rounded-4xl'>
                        <div className="flex items-center md:py-3 ">
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                        </div>
                        <div className='md:text-xl text-md md:pt-6 pt-3 '>
                          "Transparent reporting and a clear focus on results—that's what sets Bullish Pixel apart. They've consistently exceeded our targets for lead generation, and their proactive communication is a breath of fresh air."
                        </div>
                        <div className="pt-3 flex items-center gap-5">
                            <div className="h-[50px] w-[50px] rounded-full">
                                <Image className="h-full w-full rounded-full" src={icon.src} height={icon.height} width={icon.width} alt="icon" />
                            </div>
                            <div>
                                <div className="font-bold text-emerald-500 text-xl">
                                    —James R.

                                </div>
                                <div className="text-lg font-bold text-slate-500">B2B Service Provider</div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#1f1d1d]/60 p-5 flex flex-col justify-between  rounded-4xl'>
                        <div className="flex items-center md:py-3 ">
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                        </div>
                        <div className='md:text-xl text-md md:pt-6 pt-3 '>
                         "The AI automation training was a game-changer. I went from emotional, inconsistent trading to having a disciplined, automated system. For the first time, my trading feels like a real business."
                        </div>
                        <div className="pt-3 flex items-center gap-5">
                            <div className="h-[50px] w-[50px] rounded-full">
                                <Image className="h-full w-full rounded-full" src={icon.src} height={icon.height} width={icon.width} alt="icon" />
                            </div>
                            <div>
                                <div className="font-bold text-emerald-500 text-xl">
                                   —Mark T.

                                </div>
                                <div className="text-lg font-bold text-slate-500">Former Retail Trader</div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#1f1d1d]/60 p-5 flex flex-col justify-between  rounded-4xl'>
                        <div className="flex items-center md:py-3 ">
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                        </div>
                        <div className='md:text-xl text-md md:pt-6 pt-3 '>
                          "The crypto analysis and curated news saved me so much time. I'm no longer overwhelmed by information and can actually spot high-probability setups. The community support is incredible."
                        </div>
                        <div className="pt-3 flex items-center gap-5">
                            <div className="h-[50px] w-[50px] rounded-full">
                                <Image className="h-full w-full rounded-full" src={icon.src} height={icon.height} width={icon.width} alt="icon" />
                            </div>
                            <div>
                                <div className="font-bold text-emerald-500 text-xl">
                                   —Chloe L.

                                </div>
                                <div className="text-lg font-bold text-slate-500">Crypto Investor</div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#1f1d1d]/60 p-5 flex flex-col justify-between  rounded-4xl'>
                        <div className="flex items-center md:py-3 ">
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                        </div>
                        <div className='md:text-xl text-md md:pt-6 pt-3 '>
                        "Bullish Pixel's structured approach finally helped me understand the 'why' behind my trades. Their emphasis on risk management alone was worth the investment. This is real education, not a hype service."
                        </div>
                        <div className="pt-3 flex items-center gap-5">
                            <div className="h-[50px] w-[50px] rounded-full">
                                <Image className="h-full w-full rounded-full" src={icon.src} height={icon.height} width={icon.width} alt="icon" />
                            </div>
                            <div>
                                <div className="font-bold text-emerald-500 text-xl">
                                   —David R.

                                </div>
                                <div className="text-lg font-bold text-slate-500">Part-Time Trader</div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#1f1d1d]/60 p-5 flex flex-col justify-between  rounded-4xl'>
                        <div className="flex items-center md:py-3 ">
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                        </div>
                        <div className='md:text-xl text-md md:pt-6 pt-3 '>
                          "Bullish Pixel transformed our Shopify store from 'just okay' to our primary revenue driver. Our conversion rate doubled, and the custom features they built have set us miles apart from our competitors."
                        </div>
                        <div className="pt-3 flex items-center gap-5">
                            <div className="h-[50px] w-[50px] rounded-full">
                                <Image className="h-full w-full rounded-full" src={icon.src} height={icon.height} width={icon.width} alt="icon" />
                            </div>
                            <div>
                                <div className="font-bold text-emerald-500 text-xl">
                                   —Jennifer K.

                                </div>
                                <div className="text-lg font-bold text-slate-500">Fashion Brand Owner</div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#1f1d1d]/60 p-5 flex flex-col justify-between  rounded-4xl'>
                        <div className="flex items-center md:py-3 ">
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                        </div>
                        <div className='md:text-xl text-md md:pt-6 pt-3 '>
                         "Their understanding of the Shopify platform is incredible. They migrated our entire business from WooCommerce without a hitch. The new store is faster, easier to manage, and sales have increased by 40%."
                        </div>
                        <div className="pt-3 flex items-center gap-5">
                            <div className="h-[50px] w-[50px] rounded-full">
                                <Image className="h-full w-full rounded-full" src={icon.src} height={icon.height} width={icon.width} alt="icon" />
                            </div>
                            <div>
                                <div className="font-bold text-emerald-500 text-xl">
                                   —David R.

                                </div>
                                <div className="text-lg font-bold text-slate-500">Home Goods Founder</div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#1f1d1d]/60 p-5 flex flex-col justify-between  rounded-4xl'>
                        <div className="flex items-center md:py-3 ">
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                        </div>
                        <div className='md:text-xl text-md md:pt-6 pt-3 '>
                         "From day one, it felt like a true partnership. They listened to our vision and executed perfectly. The store is beautiful, intuitive, and built to scale. I wouldn't trust anyone else with our e-commerce."
                        </div>
                        <div className="pt-3 flex items-center gap-5">
                            <div className="h-[50px] w-[50px] rounded-full">
                                <Image className="h-full w-full rounded-full" src={icon.src} height={icon.height} width={icon.width} alt="icon" />
                            </div>
                            <div>
                                <div className="font-bold text-emerald-500 text-xl">
                                  —Maria S.

                                </div>
                                <div className="text-lg font-bold text-slate-500">Beauty Product Entrepreneur</div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#1f1d1d]/60 p-5 flex flex-col justify-between  rounded-4xl'>
                        <div className="flex items-center md:py-3 ">
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                        </div>
                        <div className='md:text-xl text-md md:pt-6 pt-3 '>
                        "Working with Bullish Pixel was a game-changer. Our new website is not only stunning but has increased our qualified leads by over 40% in just three months. They truly understand business growth."
                        </div>
                        <div className="pt-3 flex items-center gap-5">
                            <div className="h-[50px] w-[50px] rounded-full">
                                <Image className="h-full w-full rounded-full" src={icon.src} height={icon.height} width={icon.width} alt="icon" />
                            </div>
                            <div>
                                <div className="font-bold text-emerald-500 text-xl">
                                  —Sarah K.

                                </div>
                                <div className="text-lg font-bold text-slate-500">Tech Startup Founder</div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#1f1d1d]/60 p-5 flex flex-col justify-between  rounded-4xl'>
                        <div className="flex items-center md:py-3 ">
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                        </div>
                        <div className='md:text-xl text-md md:pt-6 pt-3 '>
                         "The entire process was seamless and professional. They delivered a custom web application that has automated a huge part of our workflow, saving us countless hours. A brilliant team to partner with."
                        </div>
                        <div className="pt-3 flex items-center gap-5">
                            <div className="h-[50px] w-[50px] rounded-full">
                                <Image className="h-full w-full rounded-full" src={icon.src} height={icon.height} width={icon.width} alt="icon" />
                            </div>
                            <div>
                                <div className="font-bold text-emerald-500 text-xl">
                                   —Michael T.

                                </div>
                                <div className="text-lg font-bold text-slate-500">Operations Director</div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#1f1d1d]/60 p-5 flex flex-col justify-between  rounded-4xl'>
                        <div className="flex items-center md:py-3 ">
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                        </div>
                        <div className='md:text-xl text-md md:pt-6 pt-3 '>
                         "Finally, a development agency that speaks plain English and delivers on their promises. Our site is incredibly fast, and the support has been exceptional. An absolute five-star experience."
                        </div>
                        <div className="pt-3 flex items-center gap-5">
                            <div className="h-[50px] w-[50px] rounded-full">
                                <Image className="h-full w-full rounded-full" src={icon.src} height={icon.height} width={icon.width} alt="icon" />
                            </div>
                            <div>
                                <div className="font-bold text-emerald-500 text-xl">
                                   —Jessica L.

                                </div>
                                <div className="text-lg font-bold text-slate-500">E-Commerce Brand Owner</div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#1f1d1d]/60 p-5 flex flex-col justify-between  rounded-4xl'>
                        <div className="flex items-center md:py-3 ">
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                        </div>
                        <div className='md:text-xl text-md md:pt-6 pt-3 '>
                          "As a freelancer wanting to work with US clients, Bullish Pixel made forming my Delaware LLC incredibly simple. The entire process was remote, transparent, and their advisor was patient with all my questions. Highly recommended!"
                        </div>
                        <div className="pt-3 flex items-center gap-5">
                            <div className="h-[50px] w-[50px] rounded-full">
                                <Image className="h-full w-full rounded-full" src={icon.src} height={icon.height} width={icon.width} alt="icon" />
                            </div>
                            <div>
                                <div className="font-bold text-emerald-500 text-xl">
                                   —Aisha R.

                                </div>
                                <div className="text-lg font-bold text-slate-500">Freelance Software Developer</div>
                            </div>
                        </div>
                    </div>

                     <div className='bg-[#1f1d1d]/60 p-5 flex flex-col justify-between  rounded-4xl'>
                        <div className="flex items-center md:py-3 ">
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                        </div>
                        <div className='md:text-xl text-md md:pt-6 pt-3 '>
                          "I was overwhelmed by FBR requirements for my new startup. Bullish Pixel not only got our company registered but also handled our NTN and secured our Filer status seamlessly. They saved us from major compliance headaches."
                        </div>
                        <div className="pt-3 flex items-center gap-5">
                            <div className="h-[50px] w-[50px] rounded-full">
                                <Image className="h-full w-full rounded-full" src={icon.src} height={icon.height} width={icon.width} alt="icon" />
                            </div>
                            <div>
                                <div className="font-bold text-emerald-500 text-xl">
                                  —Omar F.

                                </div>
                                <div className="text-lg font-bold text-slate-500">E-Commerce Entrepreneur</div>
                            </div>
                        </div>
                    </div>

                     <div className='bg-[#1f1d1d]/60 p-5 flex flex-col justify-between  rounded-4xl'>
                        <div className="flex items-center md:py-3 ">
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                        </div>
                        <div className='md:text-xl text-md md:pt-6 pt-3 '>
                          "Their multi-country expertise is their superpower. They helped me structure my business with a UK Ltd for international operations and a Pakistan (Pvt) Ltd for local presence. A truly professional and strategic partner."
                        </div>
                        <div className="pt-3 flex items-center gap-5">
                            <div className="h-[50px] w-[50px] rounded-full">
                                <Image className="h-full w-full rounded-full" src={icon.src} height={icon.height} width={icon.width} alt="icon" />
                            </div>
                            <div>
                                <div className="font-bold text-emerald-500 text-xl">
                                   —Sarah B.
                                </div>
                                <div className="text-lg font-bold text-slate-500"> Digital Marketing Agency Owner</div>
                            </div>
                        </div>
                    </div>

                     <div className='bg-[#1f1d1d]/60 p-5 flex flex-col justify-between  rounded-4xl'>
                        <div className="flex items-center md:py-3 ">
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                        </div>
                        <div className='md:text-xl text-md md:pt-6 pt-3 '>
                         "Bullish Pixel took our complex vision and turned it into a stunning, easy-to-use WordPress site. The backend is so intuitive, and our bounce rate has dropped significantly thanks to the incredible speed and design."
                        </div>
                        <div className="pt-3 flex items-center gap-5">
                            <div className="h-[50px] w-[50px] rounded-full">
                                <Image className="h-full w-full rounded-full" src={icon.src} height={icon.height} width={icon.width} alt="icon" />
                            </div>
                            <div>
                                <div className="font-bold text-emerald-500 text-xl">
                                  —Michael T.

                                </div>
                                <div className="text-lg font-bold text-slate-500">Educational Non-Profit Director</div>
                            </div>
                        </div>
                    </div>

                     <div className='bg-[#1f1d1d]/60 p-5 flex flex-col justify-between  rounded-4xl'>
                        <div className="flex items-center md:py-3 ">
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                        </div>
                        <div className='md:text-xl text-md md:pt-6 pt-3 '>
                          "After struggling with a slow, clunky theme, working with Bullish Pixel was a revelation. Our new custom site loads in under two seconds and has become our most reliable lead generation tool. They are true WordPress artisans."
                        </div>
                        <div className="pt-3 flex items-center gap-5">
                            <div className="h-[50px] w-[50px] rounded-full">
                                <Image className="h-full w-full rounded-full" src={icon.src} height={icon.height} width={icon.width} alt="icon" />
                            </div>
                            <div>
                                <div className="font-bold text-emerald-500 text-xl">
                                   —Sarah L.

                                </div>
                                <div className="text-lg font-bold text-slate-500">B2B Marketing Agency Owner</div>
                            </div>
                        </div>
                    </div>

                     <div className='bg-[#1f1d1d]/60 p-5 flex flex-col justify-between  rounded-4xl'>
                        <div className="flex items-center md:py-3 ">
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                            <IoStarSharp className="text-emerald-400" />
                        </div>
                        <div className='md:text-xl text-md md:pt-6 pt-3 '>
                         "The entire process was seamless and professional. They not only built a beautiful website but also future-proofed it. Their attention to detail in security and performance gives us complete peace of mind."
                        </div>
                        <div className="pt-3 flex items-center gap-5">
                            <div className="h-[50px] w-[50px] rounded-full">
                                <Image className="h-full w-full rounded-full" src={icon.src} height={icon.height} width={icon.width} alt="icon" />
                            </div>
                            <div>
                                <div className="font-bold text-emerald-500 text-xl">
                                   —James K.

                                </div>
                                <div className="text-lg font-bold text-slate-500">Professional Services Founder</div>
                            </div>
                        </div>
                    </div>

                 
                </div>
            </section>
            <ContactSection/>

        </div>
    )
}

export default ReviewsPage