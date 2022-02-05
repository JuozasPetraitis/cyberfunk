import Image from 'next/image';
import { useState, useLayoutEffect, useRef, LegacyRef, useEffect } from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline';

interface Content {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  thumbnail: string;
}

const informationToDisplay: Content[] = [
  {
    id: '01',
    title: 'CyberFunk',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis optio quod aut eligendi natus asperiores.',
    imageUrl: '/images/1.jpg',
    videoUrl: '',
    thumbnail: '/images/1.jpg',
  },
  {
    id: '02',
    title: 'Meet the future',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis optio quod aut eligendi natus asperiores.',
    imageUrl: '',
    videoUrl: '/videos/1.mp4',
    thumbnail: '/images/2.jpg',
  },
  {
    id: '03',
    title: 'Next level GFX',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis optio quod aut eligendi natus asperiores.',
    imageUrl: '/images/3.jpg',
    videoUrl: '',
    thumbnail: '/images/3.jpg',
  },
  {
    id: '04',
    title: 'Team of teams',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis optio quod aut eligendi natus asperiores.',
    imageUrl: '',
    videoUrl: '/videos/2.mp4',
    thumbnail: '/images/4.jpg',
  },
  {
    id: '05',
    title: 'Be prepared',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis optio quod aut eligendi natus asperiores.',
    imageUrl: '/images/5.jpg',
    videoUrl: '',
    thumbnail: '/images/5.jpg',
  },
];

const Hero = () => {
  //! UseState for slide index
  const [whichSlideToShow, setWhichSlideToShow] = useState<number>(0);
  const [clientWidth, setClientWidth] = useState<number>(0);

  useEffect(() => {
    setClientWidth(window.innerWidth);
  }, []);

  //! UseRef for slides
  const firstSlide = useRef<HTMLDivElement>(null);
  const secondSlide = useRef<HTMLDivElement>(null);
  const thirdSlide = useRef<HTMLDivElement>(null);
  const fourthSlide = useRef<HTMLDivElement>(null);
  const fifthSlide = useRef<HTMLDivElement>(null);
  //! UseRef for videos
  const firstVideo = useRef<HTMLVideoElement>(null);
  const secondVideo = useRef<HTMLVideoElement>(null);

  const scrollMeX = useRef<HTMLDivElement>(null);

  const scrollXNavigation = (e: WheelEvent) => {
    scrollMeX.current?.scrollBy({
      left: e.deltaY < 0 ? -150 : 150,
    });
  };

  //! Switch for slides
  switch (whichSlideToShow) {
    case 0:
      thirdSlide.current?.children[0].children[0].classList.remove('animate-[pictureZoomInX_8000ms_ease-out_forwards]');
      fifthSlide.current?.children[0].children[0].classList.remove(
        'animate-[pictureZoomInX_10000ms_ease-out_forwards]'
      );
      //! Initiates scrolls inside div
      scrollMeX.current?.scroll({
        left: -400,
        behavior: 'smooth',
      });
      //! Scrolls into view
      firstSlide.current?.scrollIntoView();
      firstSlide.current?.children[0].children[0].classList.add('animate-[pictureZoomIn_10000ms_ease-out_forwards]');
      break;
    case 1:
      thirdSlide.current?.children[0].children[0].classList.remove('animate-[pictureZoomInX_8000ms_ease-out_forwards]');
      firstSlide.current?.children[0].children[0].classList.remove('animate-[pictureZoomIn_10000ms_ease-out_forwards]');
      fifthSlide.current?.children[0].children[0].classList.remove(
        'animate-[pictureZoomInX_10000ms_ease-out_forwards]'
      );
      //! Initiates scrolls inside div
      scrollMeX.current?.scrollTo({
        left: 220,
        behavior: 'smooth',
      });
      //! Scrolls into view

      secondSlide.current?.scrollIntoView();
      firstVideo.current?.load();
      firstVideo.current?.play();
      break;
    case 2:
      firstSlide.current?.children[0].children[0].classList.remove('animate-[pictureZoomIn_10000ms_ease-out_forwards]');
      fifthSlide.current?.children[0].children[0].classList.remove(
        'animate-[pictureZoomInX_10000ms_ease-out_forwards]'
      );
      scrollMeX.current?.scrollTo({
        left: 440,
        behavior: 'smooth',
      });
      //! Removes(resets) classList
      thirdSlide.current?.children[0].children[0].classList.add('animate-[pictureZoomInX_8000ms_ease-out_forwards]');
      //! Scrolls into view
      thirdSlide.current?.scrollIntoView();
      break;
    case 3:
      thirdSlide.current?.children[0].children[0].classList.remove('animate-[pictureZoomInX_8000ms_ease-out_forwards]');
      firstSlide.current?.children[0].children[0].classList.remove('animate-[pictureZoomIn_10000ms_ease-out_forwards]');
      fifthSlide.current?.children[0].children[0].classList.remove(
        'animate-[pictureZoomInX_10000ms_ease-out_forwards]'
      );
      scrollMeX.current?.scroll({
        left: 700,
        behavior: 'smooth',
      });
      //! Removes(resets) classList
      firstSlide.current?.children[0].children[0].classList.remove('animate-[pictureZoomIn_10000ms_ease-out_forwards]');
      thirdSlide.current?.children[0].children[0].classList.remove('animate-[pictureZoomIn_8000ms_ease-out_forwards]');
      //! Scrolls into view and play video
      fourthSlide.current?.scrollIntoView();
      secondVideo.current?.load();
      secondVideo.current?.play();
      break;
    case 4:
      fifthSlide.current?.children[0].children[0].classList.remove(
        'animate-[pictureZoomInX_10000ms_ease-out_forwards]'
      );
      thirdSlide.current?.children[0].children[0].classList.remove('animate-[pictureZoomInX_8000ms_ease-out_forwards]');
      firstSlide.current?.children[0].children[0].classList.remove('animate-[pictureZoomIn_10000ms_ease-out_forwards]');
      scrollMeX.current?.scroll({
        left: 1000,
        behavior: 'smooth',
      });
      //! Scrolls into view and play video
      fifthSlide.current?.children[0].children[0].classList.add('animate-[pictureZoomInX_10000ms_ease-out_forwards]');
      fifthSlide.current?.scrollIntoView();
      secondVideo.current?.load();
      secondVideo.current?.play();
      break;
    default:
  }

  //! Functions
  const changeSlide = (e: React.MouseEvent, index: number) => {
    //   console.log('index', index);
    //   const myTarget = e.target as HTMLDivElement;
    //   console.dir(myTarget);
  };

  return (
    <div className="relative">
      {/* Carousel */}
      <div className=" relative grid snap-x snap-mandatory grid-cols-[repeat(5,100vw)] grid-rows-[repeat(1,85vh)] overflow-y-hidden overflow-x-scroll scroll-smooth">
        {/*  First Slide */}
        <div className="relative h-full w-full snap-start snap-always" ref={firstSlide} aria-label="firstSlide">
          <Image
            src={informationToDisplay[0].imageUrl}
            alt="Picture of the author"
            objectFit="cover"
            className="pointer-events-none object-[60%_center] md:object-center"
            layout="fill"
          />

          {/* Content */}
          <div className="container absolute left-0 right-0 m-auto flex h-full w-full flex-col items-center justify-center md:items-end">
            <div className="absolute top-[160px] left-0 flex flex-col gap-6">
              {/* Main Title */}
              <p className="font-cyberwayriders text-[3rem] leading-none text-[#f8f62c] md:text-[5rem] lg:text-[7rem] lg:leading-[150px] lg:tracking-[-2px]  lg:text-[#ffe60a] lg:text-opacity-60 lg:[text-shadow:_-1px_1px_2px_#ffff,0px_6px_10px_#bfe94c]">
                {informationToDisplay[0].title}
              </p>

              {/* Blurred box with button */}
              <div className=" relative w-[80%] -skew-x-6 animate-[slideBoxContainer_800ms_ease-in] bg-[#1c0950] bg-opacity-40 p-6 shadow-[0_0_20px_-2px_#fff] backdrop-blur-md md:w-[60%] md:p-8">
                <p className="skew-x-6 animate-[textShowsUp_2000ms_1000ms_ease-in_forwards] font-thin leading-4 text-transparent md:text-lg">
                  {informationToDisplay[0].description}
                  <span className="animate-[blinkOnTheEndOfText_900ms_infinite] border-b-4 border-white"></span>
                </p>
                <button className="absolute bottom-0 right-6 translate-y-3 bg-[#f8f62c] px-5 py-1 text-sm font-bold uppercase">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*  Second Slide */}
        <div className="relative h-full w-full snap-start snap-always" ref={secondSlide} aria-label="secondSlide">
          <video
            autoPlay
            muted
            className="absolute top-0 left-0 right-0 bottom-0 h-full w-full object-cover"
            ref={firstVideo}
          >
            <source src={informationToDisplay[1].videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Content */}
          <div className="container absolute left-0 right-0 m-auto flex h-full w-full flex-col items-center justify-center md:items-end">
            <div className="absolute top-[160px] left-0 flex flex-col gap-6">
              <p className="font-cyberwayriders text-[3rem] leading-none text-[#f8f62c] md:text-[5rem] lg:text-[7rem] lg:leading-[150px] lg:tracking-[-2px]  lg:text-[#ffe60a] lg:text-opacity-60 lg:[text-shadow:_-1px_1px_2px_#ffff,0px_6px_10px_#bfe94c]">
                {informationToDisplay[1].title}
              </p>

              {/* Blurred box with button */}
              <div className=" relative w-[80%] -skew-x-6 animate-[slideBoxContainer_800ms_ease-in] bg-[#1c0950] bg-opacity-40 p-6 shadow-[0_0_20px_-2px_#fff] backdrop-blur-md md:w-[60%] md:p-8">
                <p className="skew-x-6 animate-[textShowsUp_2000ms_1000ms_ease-in_forwards] font-thin leading-4 text-transparent md:text-lg">
                  {informationToDisplay[1].description}
                  <span className="animate-[blinkOnTheEndOfText_900ms_infinite] border-b-4 border-white"></span>
                </p>
                <button className="absolute bottom-0 right-6 translate-y-3 bg-[#f8f62c] px-5 py-1 text-sm font-bold uppercase">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*  Third Slide */}
        <div className="relative h-full w-full snap-start snap-always" ref={thirdSlide} aria-label="thirdSlide">
          <Image
            src={informationToDisplay[2].imageUrl}
            alt="Picture of the author"
            objectFit="cover"
            className="pointer-events-none object-[60%_center] md:object-center"
            layout="fill"
          />

          {/* Content */}
          <div className="container absolute left-0 right-0 m-auto flex h-full w-full flex-col items-center justify-center md:items-end">
            <div className="absolute top-[160px] left-0 flex flex-col gap-6">
              <p className="font-cyberwayriders text-[3rem] leading-none text-[#f8f62c] md:text-[5rem] lg:text-[7rem] lg:leading-[150px] lg:tracking-[-2px]  lg:text-[#ffe60a] lg:text-opacity-60 lg:[text-shadow:_-1px_1px_2px_#ffff,0px_6px_10px_#bfe94c]">
                {informationToDisplay[2].title}
              </p>

              {/* Blurred box with button */}
              <div className=" relative w-[80%] -skew-x-6 animate-[slideBoxContainer_800ms_ease-in] bg-[#1c0950] bg-opacity-40 p-6 shadow-[0_0_20px_-2px_#fff] backdrop-blur-md md:w-[60%] md:p-8">
                <p className="skew-x-6 animate-[textShowsUp_2000ms_1000ms_ease-in_forwards] font-thin leading-4 text-transparent md:text-lg">
                  {informationToDisplay[2].description}
                  <span className="animate-[blinkOnTheEndOfText_900ms_infinite] border-b-4 border-white"></span>
                </p>
                <button className="absolute bottom-0 right-6 translate-y-3 bg-[#f8f62c] px-5 py-1 text-sm font-bold uppercase">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*  Fourth Slide */}
        <div className="relative h-full w-full snap-start snap-always" ref={fourthSlide}>
          <video
            autoPlay
            muted
            className="absolute top-0 left-0 right-0 bottom-0 h-full w-full object-cover"
            ref={secondVideo}
          >
            <source src={informationToDisplay[3].videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Content */}
          <div className="container absolute left-0 right-0 m-auto flex h-full w-full flex-col items-center justify-center md:items-end">
            <div className="absolute top-[160px] left-0 flex flex-col gap-6">
              <p className="font-cyberwayriders text-[3rem] leading-none text-[#f8f62c] md:text-[5rem] lg:text-[7rem] lg:leading-[150px] lg:tracking-[-2px]  lg:text-[#ffe60a] lg:text-opacity-60 lg:[text-shadow:_-1px_1px_2px_#ffff,0px_6px_10px_#bfe94c]">
                {informationToDisplay[3].title}
              </p>

              {/* Blurred box with button */}
              <div className=" relative w-[80%] -skew-x-6 animate-[slideBoxContainer_800ms_ease-in] bg-[#1c0950] bg-opacity-40 p-6 shadow-[0_0_20px_-2px_#fff] backdrop-blur-md md:w-[60%] md:p-8">
                <p className="skew-x-6 animate-[textShowsUp_2000ms_1000ms_ease-in_forwards] font-thin leading-4 text-transparent md:text-lg">
                  {informationToDisplay[3].description}
                  <span className="animate-[blinkOnTheEndOfText_900ms_infinite] border-b-4 border-white"></span>
                </p>
                <button className="absolute bottom-0 right-6 translate-y-3 bg-[#f8f62c] px-5 py-1 text-sm font-bold uppercase">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*  Fifth Slide */}
        <div className="relative h-full w-full snap-start snap-always" ref={fifthSlide} aria-label="fifthSlide">
          <Image
            src={informationToDisplay[4].imageUrl}
            alt="Picture of the author"
            objectFit="cover"
            className="pointer-events-none object-[60%_center] md:object-center"
            layout="fill"
          />

          {/* Content */}
          <div className="container absolute left-0 right-0 m-auto flex h-full w-full flex-col items-center justify-center md:items-end">
            <div className="absolute top-[160px] left-0 flex flex-col gap-6">
              <p className="font-cyberwayriders text-[3rem] leading-none text-[#f8f62c] md:text-[5rem] lg:text-[7rem] lg:leading-[150px] lg:tracking-[-2px]  lg:text-[#ffe60a] lg:text-opacity-60 lg:[text-shadow:_-1px_1px_2px_#ffff,0px_6px_10px_#bfe94c]">
                {informationToDisplay[4].title}
              </p>

              {/* Blurred box with button */}
              <div className=" relative w-[80%] -skew-x-6 animate-[slideBoxContainer_800ms_ease-in] bg-[#1c0950] bg-opacity-40 p-6 shadow-[0_0_20px_-2px_#fff] backdrop-blur-md md:w-[60%] md:p-8">
                <p className="skew-x-6 animate-[textShowsUp_2000ms_1000ms_ease-in_forwards] font-thin leading-4 text-transparent md:text-lg">
                  {informationToDisplay[4].description}
                  <span className="animate-[blinkOnTheEndOfText_900ms_infinite] border-b-4 border-white"></span>
                </p>
                <button className="absolute bottom-0 right-6 translate-y-3 bg-[#f8f62c] px-5 py-1 text-sm font-bold uppercase">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div
        className="absolute left-0 right-0 bottom-0 backdrop-blur-lg"
        onMouseEnter={() => (window.innerWidth < 1024 ? '' : (window.document.body.style.overflow = 'hidden'))}
        onMouseLeave={() => (window.innerWidth < 1024 ? '' : (window.document.body.style.overflow = 'auto'))}
      >
        <div
          className="lg:hideScroll lg:hideScrollChrome container m-auto grid grid-cols-[repeat(5,70vw)] grid-rows-[repeat(1,120px)] gap-x-4 overflow-x-scroll px-6 py-8 md:grid-cols-[repeat(5,35vw)] lg:grid-cols-[repeat(5,30vw)] 2xl:grid-cols-[repeat(5,1fr)]"
          ref={scrollMeX}
          onWheel={(e) => scrollXNavigation(e)}
        >
          {informationToDisplay.map((item, index: number) => (
            <div
              className={` grid cursor-pointer grid-cols-[40%,2fr] grid-rows-[auto] gap-x-4 bg-transparent bg-white ${
                whichSlideToShow === index ? 'bg-yellow-400 text-black' : 'bg-opacity-20 text-white'
              } `}
              onClick={(e) => {
                changeSlide(e, index), setWhichSlideToShow(index);
              }}
              key={index}
            >
              <div className="pointer-events-none relative h-full w-full">
                <Image
                  src={item.thumbnail}
                  alt="Picture of the author"
                  objectFit="cover"
                  className="pointer-events-none"
                  layout="fill"
                />
              </div>

              {/* Content */}
              <div className="pointer-events-none flex flex-col justify-center gap-4 text-xl">
                <p className="font-cyberfreight text-[2.5rem] font-bold tracking-[5px]">{item.id}</p>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
