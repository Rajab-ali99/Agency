"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Button1 from "@/components/Button1";

const services = [
  {
    id: 1,
    title: "Social Media Marketing",
    icon: <FaInstagram className="text-5xl text-emerald-500" />,
    description:
      "Boost your brand visibility and engagement with our Social Media Marketing services. We craft tailored strategies, create captivating content, and manage campaigns that drive traffic, grow followers, and turn audiences into loyal customers.",
    details:
      "Our Social Media Marketing service includes deep analytics, post-scheduling, influencer collaborations, ad campaigns, and creative storytelling to position your brand as a market leader across platforms like Instagram, Facebook, and TikTok.",
  },
  {
    id: 2,
    title: "Social Media Marketing",
    icon: <FaInstagram className="text-5xl text-emerald-500" />,
    description:
      "Boost your brand visibility and engagement with our Social Media Marketing services. We craft tailored strategies, create captivating content, and manage campaigns that drive traffic, grow followers, and turn audiences into loyal customers.",
    details:
      "Our Social Media Marketing service includes deep analytics, post-scheduling, influencer collaborations, ad campaigns, and creative storytelling to position your brand as a market leader across platforms like Instagram, Facebook, and TikTok.",
  },
  {
    id: 3,
    title: "Social Media Marketing",
    icon: <FaInstagram className="text-5xl text-emerald-500" />,
    description:
      "Boost your brand visibility and engagement with our Social Media Marketing services. We craft tailored strategies, create captivating content, and manage campaigns that drive traffic, grow followers, and turn audiences into loyal customers.",
    details:
      "Our Social Media Marketing service includes deep analytics, post-scheduling, influencer collaborations, ad campaigns, and creative storytelling to position your brand as a market leader across platforms like Instagram, Facebook, and TikTok.",
  },
  {
    id: 4,
    title: "Social Media Marketing",
    icon: <FaInstagram className="text-5xl text-emerald-500" />,
    description:
      "Boost your brand visibility and engagement with our Social Media Marketing services. We craft tailored strategies, create captivating content, and manage campaigns that drive traffic, grow followers, and turn audiences into loyal customers.",
    details:
      "Our Social Media Marketing service includes deep analytics, post-scheduling, influencer collaborations, ad campaigns, and creative storytelling to position your brand as a market leader across platforms like Instagram, Facebook, and TikTok.",
  },
  {
    id: 5,
    title: "Social Media Marketing",
    icon: <FaInstagram className="text-5xl text-emerald-500" />,
    description:
      "Boost your brand visibility and engagement with our Social Media Marketing services. We craft tailored strategies, create captivating content, and manage campaigns that drive traffic, grow followers, and turn audiences into loyal customers.",
    details:
      "Our Social Media Marketing service includes deep analytics, post-scheduling, influencer collaborations, ad campaigns, and creative storytelling to position your brand as a market leader across platforms like Instagram, Facebook, and TikTok.",
  },
  {
    id: 6,
    title: "Social Media Marketing",
    icon: <FaInstagram className="text-5xl text-emerald-500" />,
    description:
      "Boost your brand visibility and engagement with our Social Media Marketing services. We craft tailored strategies, create captivating content, and manage campaigns that drive traffic, grow followers, and turn audiences into loyal customers.",
    details:
      "Our Social Media Marketing service includes deep analytics, post-scheduling, influencer collaborations, ad campaigns, and creative storytelling to position your brand as a market leader across platforms like Instagram, Facebook, and TikTok.",
  },
  
];

const Servces = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      {/* === Services Grid === */}
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-[#1f1d1d] rounded-4xl md:h-[370px] p-4 md:p-6 hover:scale-[1.02] transition-all duration-300"
          >
            <div>
              <div className="bg-[#2a2828] inline-block p-1.5 rounded-xl">
                {service.icon}
              </div>
              <h2 className="font-bold text-2xl py-1">{service.title}</h2>
            </div>

            <p className="text-lg h-26 overflow-hidden mt-15 ">
              {service.description}
            </p>
            <div className="mt-3">
              <Button1
                onClick={() => setSelectedService(service)}
                text="Explore more"
                type="button"
              />
            </div>
          </div>
        ))}
      </div>

      {/* === Popup Modal with Animation === */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50"
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="bg-[#1f1d1d] w-[80vw] h-[80vh] rounded-3xl p-5 md:p-8 relative shadow-xl overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-[#2a2828] hover:bg-emerald-600 transition-all p-2 rounded-full text-white"
              >
                <IoClose className="text-2xl" />
              </button>

              {/* Popup Content */}
              <div className="flex flex-col items-start mt-6">
                <div className="bg-[#2a2828] inline-block p-2 rounded-xl mb-3 md:mb-4">
                  {selectedService.icon}
                </div>
                <h2 className="md:text-3xl text-2xl font-bold mb-2 text-emerald-400">
                  {selectedService.title}
                </h2>
                <p className="md:text-lg text-sm leading-relaxed text-gray-300">
                  {selectedService.details}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Servces;
