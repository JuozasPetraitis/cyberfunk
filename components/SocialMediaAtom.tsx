import Image, { StaticImageData } from "next/image";
import { useState } from "react";

//! Social Icons
import Netflix from "../public/images/IconsSocial/1.jpg";
import Facebook from "../public/images/IconsSocial/2.jpg";
import Youtube from "../public/images/IconsSocial/3.jpg";
import Snapchat from "../public/images/IconsSocial/4.jpg";
import Tiktok from "../public/images/IconsSocial/5.jpg";
import Instagram from "../public/images/IconsSocial/6.jpg";
import Twitter from "../public/images/IconsSocial/7.jpg";
import Spotify from "../public/images/IconsSocial/8.jpg";

//! Array With Social Icons
const Icons: StaticImageData[] = [Netflix, Facebook, Youtube, Snapchat, Tiktok, Instagram, Twitter, Spotify];

const SocialMedia = () => {
  const [changeIndex, setChangeIndex] = useState(50);
  return (
    <div className="bg-black py-20">
      <div className="mx-auto flex w-11/12 flex-col gap-12">
        <p className="self-center bg-gradient-to-r from-[#ff00bf] via-fuchsia-300/50 to-[#6f1cc8] bg-clip-text text-center font-Audiowide text-4xl font-bold uppercase text-transparent">
          Check us out on
        </p>

        {/*  Grid With Social Icons */}
        <div className="grid auto-rows-[140px] grid-cols-[80%] justify-center gap-6 md:auto-rows-[160px] md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(4,1fr)] 2xl:auto-rows-[200px]">
          {Icons.map((item, index: number) => (
            <div
              key={index}
              className="group relative h-full shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] shadow-yellow-200/50 transition-all duration-500 hover:shadow-yellow-400/50"
              onMouseEnter={(e) => setChangeIndex(index)}
              onMouseLeave={(e) => setChangeIndex(50)}
            >
              <Image src={item} alt={item.toString()} layout="fill" objectFit="cover" className={`${changeIndex === index ? "z-0 opacity-80" : "z-10 "}`} />
              <div className="absolute flex h-full w-full items-center justify-center [background-image:linear-gradient(to_right,_rgb(0,4,40)_30%,_rgb(0,78,146)_90%)] group-hover:animate-[boxShowsUp_800ms_ease-out]">
                <p className="font-cyberfreight pointer-events-none whitespace-nowrap bg-gradient-to-r from-sky-400 via-white to-black bg-clip-text text-center text-[2rem] font-medium leading-none text-transparent md:whitespace-normal">
                  Coming Soon!
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
