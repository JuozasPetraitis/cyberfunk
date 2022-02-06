import Image from 'next/image';
import { useState } from 'react';

//! Social Icons
import Netflix from '../public/images/IconsSocial/1.jpg';
import Facebook from '../public/images/IconsSocial/2.jpg';
import Youtube from '../public/images/IconsSocial/3.jpg';
import Snapchat from '../public/images/IconsSocial/4.jpg';
import Tiktok from '../public/images/IconsSocial/5.jpg';
import Instagram from '../public/images/IconsSocial/6.jpg';
import Twitter from '../public/images/IconsSocial/7.jpg';

//! Array With Social Icons
const Icons: StaticImageData[] = [Netflix, Facebook, Youtube, Snapchat, Tiktok, Instagram, Twitter];

const SocialMedia = () => {
  const [changeIndex, setChangeIndex] = useState(50);
  return (
    <div className="container m-auto py-20">
      <div className="flex flex-col gap-8">
        <p className="font-cyberfreight bg-gradient-to-r from-[#00fffb] to-[#e5e5185c] bg-clip-text text-center text-5xl font-bold capitalize text-transparent">
          Check us out on
        </p>

        {/*  Grid With Social Icons */}
        <div className=" container m-auto grid w-[80vw] grid-cols-[repeat(1,100%)] grid-rows-[repeat(7,120px)] gap-y-8 md:grid-cols-[repeat(3,1fr)] md:grid-rows-[repeat(3,140px)] md:gap-x-6 lg:grid-cols-[repeat(4,1fr)] lg:grid-rows-[repeat(2,120px)] 2xl:grid-rows-[repeat(2,200px)]">
          {Icons.map((item, index: number) => (
            <div
              key={index}
              className="group relative h-full shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] shadow-cyan-400 transition-all duration-500 hover:shadow-cyan-800"
              onMouseEnter={(e) => setChangeIndex(index)}
              onMouseLeave={(e) => setChangeIndex(50)}
            >
              <Image
                src={item}
                alt={item.toString()}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className={`${changeIndex === index ? 'z-0 opacity-80' : 'z-10 '}`}
                priority
              />
              <div className="absolute flex h-full w-full items-center justify-center [background-image:linear-gradient(to_right,_rgb(0,4,40)_30%,_rgb(0,78,146)_90%)] group-hover:animate-[boxShowsUp_800ms_ease-out]">
                <p className="font-cyberfreight pointer-events-none whitespace-nowrap bg-gradient-to-r from-sky-400 via-white to-black bg-clip-text text-center text-[2rem] leading-none text-transparent md:whitespace-normal">
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
