'use client'
import React from "react";
import { motion } from 'framer-motion';
import { Image } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";

// Icons
import { FaSpotify } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { FaBandcamp } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


export default function Home() {
  return (
    <main className="w-full flex-grow mb-3">
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Initial position and opacity
        animate={{ opacity: 1, y: 0 }} // Target position and opacity
        transition={{ duration: 1, ease: "easeIn" }} className="flex w-full items-center justify-center">
        <div className="flex flex-col gap-16 md:gap-24 w-full px-6 mt-12 justify-start max-w-[1024px]">
          <div className="flex flex-col gap-8 ">
            <div className="flex flex-row justify-between md:gap-12 lg:gap-24">
              <div className="flex flex-col gap-1">
                <h1 className="animate-in text-3xl font-bold tracking-tight">deepaak</h1>
                <p className="max-w-lg text-zinc-400">Martin Forsell</p>
                <p className="mt-3">
                  deepaak, also known as Martin Forsell, is a multi-instrumentalist, songwriter, and producer from Sweden.</p>
                <p>Martin crafts a seamless meld of dreamy indie-pop filled with 80s synthesizers and driving rhythms.</p>
                <p>A life filled of shadows and hardships have crystalised into a unique, dark, atmospheric and yet uplifting sound.</p>
                <p>Martin has created a language with few words that is easy to understand, yet open to deep dives.</p>


                <ul className="flex flex-row gap-6 mt-5">
                  <li>
                    <Tooltip showArrow={true} content="Spotify">
                      <a href="" className="text-3xl">
                        <FaSpotify />
                      </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Apple Music">
                      <a href="" className="text-3xl">
                        <SiApplemusic />
                      </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Youtube Music">
                      <a href="" className="text-3xl">
                        <SiYoutubemusic />
                      </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Bandcamp">
                      <a href="" className="text-3xl">
                        <FaBandcamp />
                      </a>
                    </Tooltip>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  width={500}
                  alt="deepaak sings"
                  src="/img/deepaak_front.webp"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 ">
            <div className="flex flex-row justify-between gap-6 md:gap-12 lg:gap-24">
              <div>
                <Image
                  width={500}
                  alt="deepaak sings"
                  src="/img/deepaakv2.jpg"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="animate-in text-3xl font-bold tracking-tight">Get in Touch!</h1>
                <p className="max-w-lg text-zinc-400">Let's connect and create magic together!</p>
                <p className="mt-3">
                  Dive into the world of deepaak, the musical persona of Martin Forsell, a versatile artist hailing from Sweden.</p>
                <p>With a fusion of dreamy indie-pop, nostalgic 80s synthesizers, and pulsating rhythms, deepaak's music promises to captivate your senses.</p>
                <p>Ready to embark on a sonic journey? Reach out and let's make music magic together!</p>

                <ul className="flex flex-row gap-6 mt-5">
                  <li>
                    <Tooltip showArrow={true} content="Instagram">
                      <a href="" className="text-3xl">
                        <AiFillInstagram />
                      </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Facebook">
                      <a href="" className="text-3xl">
                        <FaFacebook />
                      </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="TikTok">
                      <a href="" className="text-3xl">
                        <FaTiktok />
                      </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Email">
                      <a href="" className="text-3xl">
                        <MdEmail />
                      </a>
                    </Tooltip>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div >
      </motion.div >
    </main >
  );
}
