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


export default function Home() {
  return (
    <main className="w-full mb-3">
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Initial position and opacity
        animate={{ opacity: 1, y: 0 }} // Target position and opacity
        transition={{ duration: 1, ease: "easeIn" }} className="flex w-full items-center justify-center">
        <div className="flex flex-col gap-6 md:gap-12 w-full px-6 mt-12 justify-start max-w-[1024px]">
          <div className="flex flex-col gap-2">
            <h1 className="animate-in text-3xl font-bold tracking-tight">My Music</h1>
            <p className="max-w-lg text-zinc-400">Discover some of my latest songs</p>
          </div>
          <ul className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <li className="flex flex-row gap-3">
              <Image
                width={100}
                alt="NextUI hero Image"
                src="/img/music/CutMeOut.png"
              />
              <div className="flex flex-col gap-1">
                <h3 className="animate-in text-2xl font-bold tracking-tight">Cut me out - Single</h3>
                <p className="max-w-lg text-zinc-400">2024</p>
                <ul className="flex flex-row gap-6 mt-2">
                  <li>
                    <Tooltip showArrow={true} content="Spotify">
                      <a href="" className="text-2xl"> <FaSpotify /> </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Apple Music">
                      <a href="" className="text-2xl"> <SiApplemusic />
                      </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Youtube Music">
                      <a href="" className="text-2xl">
                        <SiYoutubemusic />
                      </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Bandcamp">
                      <a href="" className="text-2xl">
                        <FaBandcamp />
                      </a>
                    </Tooltip>
                  </li>
                </ul>
              </div>
            </li>

            <li className="flex flex-row gap-3">
              <Image
                width={100}
                alt="NextUI hero Image"
                src="/img/music/Dopamine.png"
              />
              <div className="flex flex-col gap-1">
                <h3 className="animate-in text-2xl font-bold tracking-tight">Dopamine - Single</h3>
                <p className="max-w-lg text-zinc-400">2023</p>
                <ul className="flex flex-row gap-6 mt-2">
                  <li>
                    <Tooltip showArrow={true} content="Spotify">
                      <a href="" className="text-2xl"> <FaSpotify /> </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Apple Music">
                      <a href="" className="text-2xl"> <SiApplemusic />
                      </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Youtube Music">
                      <a href="" className="text-2xl">
                        <SiYoutubemusic />
                      </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Bandcamp">
                      <a href="" className="text-2xl">
                        <FaBandcamp />
                      </a>
                    </Tooltip>
                  </li>
                </ul>
              </div>
            </li>

            <li className="flex flex-row gap-3">
              <Image
                width={100}
                alt="NextUI hero Image"
                src="/img/music/Empire.png"
              />
              <div className="flex flex-col gap-1">
                <h3 className="animate-in text-2xl font-bold tracking-tight">Empire - Single</h3>
                <p className="max-w-lg text-zinc-400">2023</p>
                <ul className="flex flex-row gap-6 mt-2">
                  <li>
                    <Tooltip showArrow={true} content="Spotify">
                      <a href="" className="text-2xl"> <FaSpotify /> </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Apple Music">
                      <a href="" className="text-2xl"> <SiApplemusic />
                      </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Youtube Music">
                      <a href="" className="text-2xl">
                        <SiYoutubemusic />
                      </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Bandcamp">
                      <a href="" className="text-2xl">
                        <FaBandcamp />
                      </a>
                    </Tooltip>
                  </li>
                </ul>
              </div>
            </li>

            <li className="flex flex-row gap-3">
              <Image
                width={100}
                alt="NextUI hero Image"
                src="/img/music/River.png"
              />
              <div className="flex flex-col gap-1">
                <h3 className="animate-in text-2xl font-bold tracking-tight">River - Single</h3>
                <p className="max-w-lg text-zinc-400">2022</p>
                <ul className="flex flex-row gap-6 mt-2">
                  <li>
                    <Tooltip showArrow={true} content="Spotify">
                      <a href="" className="text-2xl"> <FaSpotify /> </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Apple Music">
                      <a href="" className="text-2xl"> <SiApplemusic />
                      </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Youtube Music">
                      <a href="" className="text-2xl">
                        <SiYoutubemusic />
                      </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Bandcamp">
                      <a href="" className="text-2xl">
                        <FaBandcamp />
                      </a>
                    </Tooltip>
                  </li>
                </ul>
              </div>
            </li>

            <li className="flex flex-row gap-3">
              <Image
                width={100}
                alt="NextUI hero Image"
                src="/img/music/BabyI.png"
              />
              <div className="flex flex-col gap-1">
                <h3 className="animate-in text-2xl font-bold tracking-tight">Baby I - Single</h3>
                <p className="max-w-lg text-zinc-400">2022</p>
                <ul className="flex flex-row gap-6 mt-2">
                  <li>
                    <Tooltip showArrow={true} content="Spotify">
                      <a href="" className="text-2xl"> <FaSpotify /> </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Apple Music">
                      <a href="" className="text-2xl"> <SiApplemusic />
                      </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Youtube Music">
                      <a href="" className="text-2xl">
                        <SiYoutubemusic />
                      </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Bandcamp">
                      <a href="" className="text-2xl">
                        <FaBandcamp />
                      </a>
                    </Tooltip>
                  </li>
                </ul>
              </div>
            </li>

            <li className="flex flex-row gap-3">
              <Image
                width={100}
                alt="NextUI hero Image"
                src="/img/music/caim.png"
              />
              <div className="flex flex-col gap-1">
                <h3 className="animate-in text-2xl font-bold tracking-tight">CAIM - Single</h3>
                <p className="max-w-lg text-zinc-400">2021</p>
                <ul className="flex flex-row gap-6 mt-2">
                  <li>
                    <Tooltip showArrow={true} content="Spotify">
                      <a href="" className="text-2xl"> <FaSpotify /> </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Apple Music">
                      <a href="" className="text-2xl"> <SiApplemusic />
                      </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Youtube Music">
                      <a href="" className="text-2xl">
                        <SiYoutubemusic />
                      </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Bandcamp">
                      <a href="" className="text-2xl">
                        <FaBandcamp />
                      </a>
                    </Tooltip>
                  </li>
                </ul>
              </div>
            </li>

            <li className="flex flex-row gap-3">
              <Image
                width={100}
                alt="NextUI hero Image"
                src="/img/music/her.png"
              />
              <div className="flex flex-col gap-1">
                <h3 className="animate-in text-2xl font-bold tracking-tight">Her - Single</h3>
                <p className="max-w-lg text-zinc-400">2021</p>
                <ul className="flex flex-row gap-6 mt-2">
                  <li>
                    <Tooltip showArrow={true} content="Spotify">
                      <a href="" className="text-2xl"> <FaSpotify /> </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Apple Music">
                      <a href="" className="text-2xl"> <SiApplemusic />
                      </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Youtube Music">
                      <a href="" className="text-2xl">
                        <SiYoutubemusic />
                      </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Bandcamp">
                      <a href="" className="text-2xl">
                        <FaBandcamp />
                      </a>
                    </Tooltip>
                  </li>
                </ul>
              </div>
            </li>

            <li className="flex flex-row gap-3">
              <Image
                width={100}
                alt="NextUI hero Image"
                src="/img/music/holygod.png"
              />
              <div className="flex flex-col gap-1">
                <h3 className="animate-in text-2xl font-bold tracking-tight">HOLY &quot;GOD&quot; - Single</h3>
                <p className="max-w-lg text-zinc-400">2020</p>
                <ul className="flex flex-row gap-6 mt-2">
                  <li>
                    <Tooltip showArrow={true} content="Spotify">
                      <a href="" className="text-2xl"> <FaSpotify /> </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Apple Music">
                      <a href="" className="text-2xl"> <SiApplemusic />
                      </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Youtube Music">
                      <a href="" className="text-2xl">
                        <SiYoutubemusic />
                      </a>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip showArrow={true} content="Bandcamp">
                      <a href="" className="text-2xl">
                        <FaBandcamp />
                      </a>
                    </Tooltip>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

        </div>
      </motion.div>
    </main >
  );
}
