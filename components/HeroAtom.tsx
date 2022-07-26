import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

interface contentToShow {
  id: string;
  title: string;
  description: string;
  mediaSource: string;
}

const contentToShow: contentToShow[] = [
  {
    id: "01",
    title: "Cyberfunk",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis optio quod aut eligendi natus asperiores. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis optio quod aut eligendi natus asperiores.",
    mediaSource: "/images/1.jpg",
  },
  {
    id: "02",
    title: "Meet the future",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis optio quod aut eligendi natus asperiores. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis optio quod aut eligendi natus asperiores.",
    mediaSource: "/videos/1.mp4",
  },
  {
    id: "03",
    title: "Next level GFX",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis optio quod aut eligendi natus asperiores. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis optio quod aut eligendi natus asperiores.",
    mediaSource: "/images/2.jpg",
  },
  {
    id: "04",
    title: "Team of teams",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis optio quod aut eligendi natus asperiores. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis optio quod aut eligendi natus asperiores.",
    mediaSource: "/videos/2.mp4",
  },
  {
    id: "05",
    title: "Be prepared",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis optio quod aut eligendi natus asperiores. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis optio quod aut eligendi natus asperiores.",
    mediaSource: "/images/5.jpg",
  },
];

const HeroAtom = () => {
  const [whichToShow, setwhichToShow] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const HeroSlider = useRef<HTMLDivElement>(null);
  const NavigationRef = useRef<HTMLDivElement>(null);
  const innerWidthRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWindowWidth(innerWidthRef.current!.clientWidth);
  }, []);

  const changeSlide = (index: number) => {
    HeroSlider.current!.style.transform = `translateX(-${index}00%)`;
  };

  const scrollXNavigation = (e: React.MouseEvent, index: number) => {
    const myTarget = e.target as HTMLDivElement;
    if (windowWidth >= 1024) {
      return;
    }
    NavigationRef.current!.style.transform = `translateX(-${index}%)`;
  };

  return (
    <div className="relative font-Supreme" ref={innerWidthRef}>
      {/* Slides */}
      <div className="overflow-hidden">
        <div className="grid grid-cols-[repeat(5,100%)] grid-rows-[50rem] transition-transform duration-1000" ref={HeroSlider}>
          {/* Slides */}
          {contentToShow.map((item, index: number) => (
            <div key={index} className="relative">
              {index === 0 || index === 2 || index === 4 ? (
                <Image
                  src={item.mediaSource}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className={`${
                    whichToShow === 0
                      ? "animate-[pictureZoomIn_5000ms_ease-out_forwards]"
                      : whichToShow === 2 || 4
                      ? "animate-[pictureZoomInX_5000ms_ease-out_forwards]"
                      : ""
                  }`}
                />
              ) : (
                <video autoPlay loop muted className="h-full w-full object-cover">
                  <source src={item.mediaSource} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              <div className="absolute top-[15%] left-[5%] flex flex-col gap-12">
                <p
                  className={`whitespace-nowrap bg-gradient-to-r from-yellow-200 to-yellow-600/60 bg-clip-text text-center font-Audiowide text-3xl font-black uppercase tracking-[0.2em] text-transparent md:text-left md:text-6xl`}
                >
                  {item.title}
                </p>
                <div className="mx-auto w-11/12 max-w-lg bg-black/60 p-8 text-lg font-medium leading-6 tracking-tighter text-gray-200">
                  {item.description}
                  {/* <button>Continue</button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute left-0 right-0 bottom-0 overflow-x-hidden bg-transparent backdrop-blur-[40px]">
        <div className="grid grid-cols-[repeat(5,50%)] grid-rows-[140px] gap-4 p-8 transition-transform duration-1000 lg:grid-cols-5" ref={NavigationRef}>
          {contentToShow.map((item, index: number) => (
            <div
              className={` grid cursor-pointer grid-cols-[40%,2fr] grid-rows-[auto] gap-x-4 bg-transparent bg-white ${
                whichToShow === index ? "bg-amber-300/80 text-black" : "bg-opacity-20 text-white"
              } `}
              onClick={(e) => {
                setwhichToShow(index);
                changeSlide(index);
                index === 0
                  ? scrollXNavigation(e, 0)
                  : index === 1
                  ? scrollXNavigation(e, 35)
                  : index === 2
                  ? scrollXNavigation(e, 80)
                  : index === 3
                  ? scrollXNavigation(e, 125)
                  : index === 4
                  ? scrollXNavigation(e, 150)
                  : null;
              }}
              key={index}
            >
              <div className="pointer-events-none relative h-full w-full">
                <Image
                  src={`${index === 1 ? "/images/2.jpg" : index === 3 ? "/images/3.jpg" : item.mediaSource}`}
                  alt="Picture of the author"
                  objectFit="cover"
                  className="pointer-events-none"
                  layout="fill"
                />
              </div>

              {/* Content */}
              <div className="pointer-events-none flex flex-col justify-center gap-4">
                <p className="text-2xl font-bold">{item.id}</p>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroAtom;
