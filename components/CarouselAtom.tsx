import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

interface Content {
  title: string;
  expandedTitle: string;
  menuDescription: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
}

const informationToDisplay: Content[] = [
  {
    title: "Extraordinary",
    expandedTitle: "Extraordinary claims require extraordinary evidence",
    menuDescription: "Brain is the seed of intelligence citizens of distant epochs quasar a mote of dust.",
    description:
      "Descended from astronomers a very small stage in a vast cosmic arena something incredible is waiting to be known made in the interiors of collapsing stars.",
    imageUrl: "/images/8.jpg",
    videoUrl: "",
  },
  {
    title: "Consciousness",
    expandedTitle: "Consciousness prime number the sky calls to us",
    menuDescription: "Suspended in a sunbeam globular star cluster the ash of stellar alchemy.",
    description: "Cosmic ocean ship of the imagination dream of the mind`s eye a still more glorious dawn awaits astonishment dream of the mind`s eye.",
    imageUrl: "",
    videoUrl: "/videos/3.mp4",
  },
  {
    title: "Glorious Dawn",
    expandedTitle: "Birth a still more glorious dawn awaits",
    menuDescription: "With pretty stories for which there`s little good evidence tendrils of gossamer clouds.",
    description:
      "Invent the universe something incredible is waiting to be known gathered by gravity take root and flourish Drake Equation finite but unbounded.",
    imageUrl: "/images/7.jpg",
    videoUrl: "",
  },
  {
    title: "Intelligent",
    expandedTitle: "Intelligent beings across the centuries",
    menuDescription: "Uranus made in the interiors of collapsing stars take root and flourish.",
    description:
      "Invent the universe two ghostly white figures in coveralls and helmets are softly dancing emerged into consciousness a very small stage in a vast cosmic arena.",
    imageUrl: "",
    videoUrl: "/videos/4.mp4",
  },
];

const CarouselAtom = () => {
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

  const scrollYNavigation = (e: React.MouseEvent, index: number) => {
    const myTarget = e.target as HTMLDivElement;
    NavigationRef.current?.scrollBy({
      top: index,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative font-Supreme" ref={innerWidthRef}>
      {/* Slides */}
      <div className="overflow-x-scroll lg:overflow-hidden">
        <div className="grid grid-cols-[repeat(4,100%)] grid-rows-[60rem] transition-transform duration-1000" ref={HeroSlider}>
          {informationToDisplay.map((item, index: number) => (
            <div key={index} className="relative">
              {index === 0 || index === 2 ? (
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className={`${
                    whichToShow === 0
                      ? "animate-[pictureZoomIn_5000ms_ease-out_forwards]"
                      : whichToShow === 2
                      ? "animate-[pictureZoomInX_5000ms_ease-out_forwards]"
                      : ""
                  }`}
                />
              ) : (
                <video autoPlay loop muted className="h-full w-full object-cover">
                  <source src={item.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <div className="mx-auto w-11/12">
                <div className="absolute top-[30%] right-0 left-0 mx-auto flex w-4/5 flex-col justify-center gap-8 lg:right-[5%] lg:top-[25%] lg:mr-0 lg:w-2/5">
                  <p className={`text-center font-Audiowide text-3xl font-semibold uppercase text-white lg:text-left`}>{item.expandedTitle}</p>
                  <div className="text-center text-xl font-medium text-gray-300 lg:text-left">{item.description}</div>
                  <button className="bg-[#f06] px-6 py-2 text-sm font-semibold uppercase tracking-widest text-white shadow-[rgb(255_0_102)_0px_0px_60px_0px] hover:grayscale-[30%] md:self-center lg:self-start">
                    Read story
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}

      <div className="absolute left-0 top-[15%] hidden flex-col items-center justify-center lg:flex">
        <div className="hideScroll hideMe flex h-[30rem] w-2/5 flex-col gap-6 overflow-y-scroll" ref={NavigationRef}>
          {informationToDisplay.map((item, index: number) => (
            <div
              className={`flex cursor-pointer flex-col gap-2 bg-transparent bg-white px-8 py-8 ${whichToShow === index ? "bg-opacity-60" : "bg-opacity-20"} `}
              onClick={(e) => {
                setwhichToShow(index);
                changeSlide(index);
                index === 0
                  ? scrollYNavigation(e, -400)
                  : index === 1
                  ? scrollYNavigation(e, -200)
                  : index === 2
                  ? scrollYNavigation(e, 350)
                  : scrollYNavigation(e, 200);
              }}
              key={index}
            >
              <p className="pointer-events-none font-Audiowide text-lg font-semibold tracking-wider text-white">{item.title}</p>
              <p className="pointer-events-none text-sm text-white">{item.menuDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselAtom;
