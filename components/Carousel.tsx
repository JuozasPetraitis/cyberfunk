import Image from 'next/image';
import { useState, useRef, useLayoutEffect } from 'react';

interface Content {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
}

const informationToDisplay: Content[] = [
  {
    title: 'CyberFunk',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis optio quod aut.',
    imageUrl: '/images/8.jpg',
    videoUrl: '',
  },
  {
    title: 'Meet the future',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis optio quod aut.',
    imageUrl: '',
    videoUrl: '/videos/3.mp4',
  },
  {
    title: 'Next level GFX',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis optio quod aut.',
    imageUrl: '/images/7.jpg',
    videoUrl: '',
  },
  {
    title: 'Team of teams',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis optio quod aut.',
    imageUrl: '',
    videoUrl: '/videos/4.mp4',
  },
];

//! Main Component
const Carousel = () => {
  //! UseState for slide index
  const [whichSlideIsShowing, setWhichSlideIsShowing] = useState<string>('firstSlide');
  const [clientWidth, setClientWidth] = useState<number>(0);

  //! UseRef for slides
  const firstSlide = useRef<HTMLDivElement>(null);
  const secondSlide = useRef<HTMLDivElement>(null);
  const thirdSlide = useRef<HTMLDivElement>(null);
  const fourthSlide = useRef<HTMLDivElement>(null);
  //! UseRef for videos
  const firstVideo = useRef<HTMLVideoElement>(null);
  const secondVideo = useRef<HTMLVideoElement>(null);
  const scrollMeY = useRef<HTMLDivElement>(null);

  //! Functions
  const changeSlide = (e: React.MouseEvent, index: number) => {
    const myTarget = e.target as HTMLDivElement;
    console.dir(myTarget.ariaLabel);

    switch (myTarget.ariaLabel) {
      case 'firstSlide':
        //! Initiates scrolls inside div
        scrollMeY.current?.scroll({
          top: -400,
          behavior: 'smooth',
        });
        //! Removes(resets) classList
        firstSlide.current?.children[0].children[0].classList.add('animate-[pictureZoomIn_8000ms_ease-out_forwards]');
        thirdSlide.current?.children[0].children[0].classList.remove(
          'animate-[pictureZoomInX_8000ms_ease-out_forwards]'
        );
        //! Scrolls into view
        firstSlide.current?.scrollIntoView();
        setWhichSlideIsShowing('firstSlide');
        break;
      case 'secondSlide':
        //! Initiates scrolls inside div
        scrollMeY.current?.scroll({
          top: -50,
          behavior: 'smooth',
        });
        //! Removes(resets) classList
        firstSlide.current?.children[0].children[0].classList.remove(
          'animate-[pictureZoomIn_8000ms_ease-out_forwards]'
        );
        thirdSlide.current?.children[0].children[0].classList.remove(
          'animate-[pictureZoomInX_8000ms_ease-out_forwards]'
        );
        //! Scrolls into view
        secondSlide.current?.scrollIntoView();
        // firstVideo.current?.defaultPlaybackRate = 0.8;
        firstVideo.current?.load();
        firstVideo.current?.play();
        setWhichSlideIsShowing('secondSlide');
        break;
      case 'thirdSlide':
        //! Initiates scrolls inside div
        scrollMeY.current?.scroll({
          top: 350,
          behavior: 'smooth',
        });
        //! Removes(resets) classList
        firstSlide.current?.children[0].children[0].classList.remove(
          'animate-[pictureZoomIn_8000ms_ease-out_forwards]'
        );
        thirdSlide.current?.children[0].children[0].classList.add('animate-[pictureZoomInX_8000ms_ease-out_forwards]');
        //! Scrolls into view
        thirdSlide.current?.scrollIntoView();
        setWhichSlideIsShowing('thirdSlide');
        break;
      case 'fourthSlide':
        //! Initiates scrolls inside div
        scrollMeY.current?.scrollBy({
          top: 200,
          behavior: 'smooth',
        });
        //! Removes(resets) classList
        firstSlide.current?.children[0].children[0].classList.remove(
          'animate-[pictureZoomIn_8000ms_ease-out_forwards]'
        );
        thirdSlide.current?.children[0].children[0].classList.remove(
          'animate-[pictureZoomIn_8000ms_ease-out_forwards]'
        );
        //! Scrolls into view and play video
        secondVideo.current?.scrollIntoView();
        secondVideo.current?.load();
        secondVideo.current?.play();
        setWhichSlideIsShowing('fourthSlide');
        break;
      default:
    }
  };

  //! Main return
  return (
    <div className="relative">
      <div className="relative grid snap-x snap-mandatory grid-cols-[repeat(4,100vw)] grid-rows-[repeat(1,100vh)] overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
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
            <div className="z-20 mx-8 flex flex-col items-center gap-4 md:w-2/5 lg:w-[35%] 2xl:w-[30%]">
              <p className="font-cyberfreight text-[2rem] uppercase leading-5 tracking-tighter text-white">
                {informationToDisplay[0].description}
              </p>
              <p className="text-[1.2rem] leading-6 text-white">{informationToDisplay[0].description}</p>
              <button className="mt-6 bg-pink-600 px-12 py-3 text-[1rem] font-medium uppercase text-white">
                Read the story
              </button>
            </div>
          </div>
        </div>

        {/*  Second Slide */}
        <div className="relative h-full w-full snap-start snap-always" ref={secondSlide} aria-label="secondSlide">
          <video
            autoPlay={clientWidth < 768}
            muted
            className="absolute top-0 left-0 right-0 bottom-0 h-full w-full object-cover"
            ref={firstVideo}
          >
            <source src={informationToDisplay[1].videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Content */}
          <div className="container absolute left-0 right-0 m-auto flex h-full w-full flex-col items-center justify-center md:items-end">
            <div className="z-20 mx-8 flex flex-col items-center gap-4 md:w-2/5 lg:w-[35%] 2xl:w-[30%]">
              <p className="font-cyberfreight text-[2rem] uppercase leading-5 tracking-tighter text-white">
                {informationToDisplay[3].description}
              </p>
              <p className="text-[1.2rem] leading-6 text-white">{informationToDisplay[3].description}</p>
              <button className="mt-6 bg-pink-600 px-12 py-3 text-[1rem] font-medium uppercase text-white">
                Read the story
              </button>
            </div>
          </div>
        </div>

        {/*  Third Slide */}
        <div className="relative h-full w-full snap-start snap-always" ref={thirdSlide} aria-label="thirdSlide">
          <Image
            src={informationToDisplay[2].imageUrl}
            alt="Picture of the author"
            objectFit="cover"
            className="pointer-events-none object-[60%_center]"
            layout="fill"
          />

          {/* Content */}
          <div className="container absolute left-0 right-0 m-auto flex h-full w-full flex-col items-center justify-center md:items-end">
            <div className="z-20 mx-8 flex flex-col items-center gap-4 md:w-2/5 lg:w-[35%] 2xl:w-[30%]">
              <p className="font-cyberfreight text-[2rem] uppercase leading-5 tracking-tighter text-white">
                {informationToDisplay[2].description}
              </p>
              <p className="text-[1.2rem] leading-6 text-white">{informationToDisplay[0].description}</p>
              <button className="mt-6 bg-pink-600 px-12 py-3 text-[1rem] font-medium uppercase text-white">
                Read the story
              </button>
            </div>
          </div>
        </div>

        {/*  Fourth Slide */}
        <div className="relative h-full w-full snap-start snap-always" ref={fourthSlide} aria-label="fourthSlide">
          <video muted className="absolute top-0 left-0 right-0 bottom-0 h-full w-full object-cover" ref={secondVideo}>
            <source src={informationToDisplay[3].videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Content */}
          <div className="container absolute left-0 right-0 m-auto flex h-full w-full flex-col items-center justify-center md:items-end">
            <div className="z-20 mx-8 flex flex-col items-center gap-4 md:w-2/5 lg:w-[35%] 2xl:w-[30%]">
              <p className="font-cyberfreight text-[2rem] uppercase leading-5 tracking-tighter text-white">
                {informationToDisplay[3].description}
              </p>
              <p className="text-[1.2rem] leading-6 text-white">{informationToDisplay[3].description}</p>
              <button className="mt-6 bg-pink-600 px-8 py-2 text-[1rem] font-medium uppercase text-white">
                Read the story
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute left-[5%] bottom-[25%] hidden flex-col items-center justify-center md:flex md:items-start 2xl:bottom-[30%]">
        <div
          className="hideScroll hideScrollChrome flex h-[30rem] w-2/5 flex-col gap-6 overflow-y-scroll"
          ref={scrollMeY}
        >
          <div
            className={`flex cursor-pointer flex-col gap-2 bg-transparent bg-white px-8 py-6 ${
              whichSlideIsShowing === 'firstSlide' ? 'bg-opacity-40' : 'bg-opacity-10'
            } `}
            onClick={(e) => {
              changeSlide(e, 1);
            }}
            aria-label="firstSlide"
          >
            <p className="pointer-events-none text-lg font-bold text-white">{informationToDisplay[0].title}</p>
            <p className="pointer-events-none text-slate-300">{informationToDisplay[0].description}</p>
          </div>

          <div
            className={`flex cursor-pointer flex-col gap-2 bg-transparent bg-white px-8 py-6 ${
              whichSlideIsShowing === 'secondSlide' ? 'bg-opacity-40' : 'bg-opacity-10'
            } `}
            onClick={(e) => {
              changeSlide(e, 2);
            }}
            aria-label="secondSlide"
          >
            <p className="pointer-events-none text-lg font-bold text-white">{informationToDisplay[0].title}</p>
            <p className="pointer-events-none text-slate-300">{informationToDisplay[0].description}</p>
          </div>

          <div
            className={`flex cursor-pointer flex-col gap-2 bg-transparent bg-white px-8 py-6 ${
              whichSlideIsShowing === 'thirdSlide' ? 'bg-opacity-40' : 'bg-opacity-10'
            } `}
            onClick={(e) => changeSlide(e, 3)}
            aria-label="thirdSlide"
          >
            <p className="pointer-events-none text-lg font-bold text-white">{informationToDisplay[0].title}</p>
            <p className="pointer-events-none text-slate-300">{informationToDisplay[0].description}</p>
          </div>

          <div
            className={`flex cursor-pointer flex-col gap-2 bg-transparent bg-white px-8 py-6 ${
              whichSlideIsShowing === 'fourthSlide' ? 'bg-opacity-40' : 'bg-opacity-10'
            } `}
            onClick={(e) => changeSlide(e, 4)}
            aria-label="fourthSlide"
          >
            <p className="pointer-events-none text-lg font-bold text-white">{informationToDisplay[0].title}</p>
            <p className="pointer-events-none text-slate-300">{informationToDisplay[0].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
