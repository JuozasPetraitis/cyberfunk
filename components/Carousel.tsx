import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

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
    title: 'Extraordinary',
    expandedTitle: 'Extraordinary claims require extraordinary evidence',
    menuDescription: 'Brain is the seed of intelligence citizens of distant epochs quasar a mote of dust.',
    description:
      'Descended from astronomers a very small stage in a vast cosmic arena something incredible is waiting to be known made in the interiors of collapsing stars.',
    imageUrl: '/images/8.jpg',
    videoUrl: '',
  },
  {
    title: 'Consciousness',
    expandedTitle: 'Consciousness prime number the sky calls to us',
    menuDescription: 'Suspended in a sunbeam globular star cluster the ash of stellar alchemy.',
    description:
      'Cosmic ocean ship of the imagination dream of the mind`s eye a still more glorious dawn awaits astonishment dream of the mind`s eye.',
    imageUrl: '',
    videoUrl: '/videos/3.mp4',
  },
  {
    title: 'Glorious Dawn',
    expandedTitle: 'Birth a still more glorious dawn awaits',
    menuDescription: 'With pretty stories for which there`s little good evidence tendrils of gossamer clouds.',
    description:
      'Invent the universe something incredible is waiting to be known gathered by gravity take root and flourish Drake Equation finite but unbounded.',
    imageUrl: '/images/7.jpg',
    videoUrl: '',
  },
  {
    title: 'Intelligent',
    expandedTitle: 'Intelligent beings across the centuries',
    menuDescription: 'Uranus made in the interiors of collapsing stars take root and flourish.',
    description:
      'Invent the universe two ghostly white figures in coveralls and helmets are softly dancing emerged into consciousness a very small stage in a vast cosmic arena.',
    imageUrl: '',
    videoUrl: '/videos/4.mp4',
  },
];

//! Main Component
const Carousel = () => {
  //! UseState for slide index
  const [whichSlideToShow, setWhichSlideToShow] = useState<number>(0);
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

  useEffect(() => {
    setClientWidth(window.innerWidth);
  }, []);

  switch (whichSlideToShow) {
    case 0:
      //! Initiates scrolls inside div
      scrollMeY.current?.scroll({
        top: -400,
        behavior: 'smooth',
      });
      //! Removes(resets) classList
      firstSlide.current?.children[0].children[0].classList.add('animate-[pictureZoomIn_8000ms_ease-out_forwards]');
      thirdSlide.current?.children[0].children[0].classList.remove('animate-[pictureZoomInX_8000ms_ease-out_forwards]');
      //! Scrolls into view
      firstSlide.current?.scrollIntoView();

      break;
    case 1:
      //! Initiates scrolls inside div
      scrollMeY.current?.scroll({
        top: -50,
        behavior: 'smooth',
      });
      //! Removes(resets) classList
      firstSlide.current?.children[0].children[0].classList.remove('animate-[pictureZoomIn_8000ms_ease-out_forwards]');
      thirdSlide.current?.children[0].children[0].classList.remove('animate-[pictureZoomInX_8000ms_ease-out_forwards]');
      //! Scrolls into view
      secondSlide.current?.scrollIntoView();
      if (firstVideo.current !== null) {
        firstVideo.current.defaultPlaybackRate = 0.8;
      }

      firstVideo.current?.play();

      break;
    case 2:
      //! Initiates scrolls inside div
      scrollMeY.current?.scroll({
        top: 350,
        behavior: 'smooth',
      });
      //! Removes(resets) classList
      firstSlide.current?.children[0].children[0].classList.remove('animate-[pictureZoomIn_8000ms_ease-out_forwards]');
      thirdSlide.current?.children[0].children[0].classList.add('animate-[pictureZoomInX_8000ms_ease-out_forwards]');
      //! Scrolls into view
      thirdSlide.current?.scrollIntoView();
      break;
    case 3:
      //! Initiates scrolls inside div
      scrollMeY.current?.scrollBy({
        top: 200,
        behavior: 'smooth',
      });
      //! Removes(resets) classList
      firstSlide.current?.children[0].children[0].classList.remove('animate-[pictureZoomIn_8000ms_ease-out_forwards]');
      thirdSlide.current?.children[0].children[0].classList.remove('animate-[pictureZoomIn_8000ms_ease-out_forwards]');
      //! Scrolls into view and play video
      secondVideo.current?.scrollIntoView();
      secondVideo.current?.play();

      break;
    default:
  }

  //! Main return
  return (
    <div className="relative my-20 [box-shadow:0px_-2px_15px_2px_#3ea5cc]">
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
            <div className="z-20 mx-8 flex flex-col items-center gap-8 bg-black/50 py-4 px-4 backdrop-blur-xl md:w-2/5 lg:w-[35%] 2xl:w-[30%]">
              <p className="font-cyberfreight text-5xl uppercase leading-8 tracking-tighter text-white">
                {informationToDisplay[0].expandedTitle}
              </p>
              <p className="text-lg leading-6 text-white">{informationToDisplay[0].description}</p>
              <button className="mt-4 rounded-[4px] border border-white bg-transparent px-12 py-3 font-bold text-white backdrop-blur-2xl hover:shadow-md hover:shadow-cyan-700">
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
            <div className="z-20 mx-8 flex flex-col items-center gap-8 bg-black/50 py-4 px-4 backdrop-blur-xl md:w-2/5 lg:w-[35%] 2xl:w-[30%]">
              <p className="font-cyberfreight text-5xl uppercase leading-8 tracking-tighter text-white">
                {informationToDisplay[1].expandedTitle}
              </p>
              <p className="text-lg leading-6 text-white">{informationToDisplay[1].description}</p>
              <button className="mt-4 rounded-[4px] border border-white bg-transparent px-12 py-3 font-bold text-white backdrop-blur-2xl hover:shadow-md hover:shadow-cyan-700">
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
            <div className="z-20 mx-8 flex flex-col items-center gap-8 bg-black/50 py-4 px-4 backdrop-blur-xl md:w-2/5 lg:w-[35%] 2xl:w-[30%]">
              <p className="font-cyberfreight text-5xl uppercase leading-8 tracking-tighter text-white">
                {informationToDisplay[2].expandedTitle}
              </p>
              <p className="text-lg leading-6 text-white">{informationToDisplay[2].description}</p>
              <button className="mt-4 rounded-[4px] border border-white bg-transparent px-12 py-3 font-bold text-white backdrop-blur-2xl hover:shadow-md hover:shadow-cyan-700">
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
            <div className="z-20 mx-8 flex flex-col items-center gap-8 bg-black/50 py-4 px-4 backdrop-blur-xl md:w-2/5 lg:w-[35%]">
              <p className="font-cyberfreight text-3xl uppercase leading-8 tracking-tighter text-white lg:text-5xl">
                {informationToDisplay[3].expandedTitle}
              </p>
              <p className="text-lg leading-6 text-white">{informationToDisplay[3].description}</p>
              <button className="mt-4 rounded-[4px] border border-white bg-transparent px-12 py-3 font-bold text-white backdrop-blur-2xl hover:shadow-md hover:shadow-cyan-700">
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
          {informationToDisplay.map((item, index: number) => (
            <div
              className={`flex cursor-pointer flex-col gap-2 bg-transparent bg-white px-8 py-8 ${
                whichSlideToShow === index ? 'bg-opacity-40' : 'bg-opacity-10'
              } `}
              onClick={(e) => setWhichSlideToShow(index)}
              key={index}
            >
              <p className="pointer-events-none text-xl font-bold text-white 2xl:text-2xl">
                {informationToDisplay[index].title}
              </p>
              <p className="pointer-events-none text-white 2xl:text-lg">
                {informationToDisplay[index].menuDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
