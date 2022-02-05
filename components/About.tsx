//! Icons
import {
  AcademicCapIcon,
  ArchiveIcon,
  AtSymbolIcon,
  ChartBarIcon,
  CodeIcon,
  CloudIcon,
  DatabaseIcon,
} from '@heroicons/react/solid';

//! Main Component
const About = () => {
  return (
    <div className="container m-auto flex flex-col items-center gap-12 bg-black py-[4rem]">
      <p className="pointer-events-none max-w-prose bg-gradient-to-r from-teal-300 via-rose-700 to-cyan-600 bg-clip-text px-4 text-[1.5rem] font-semibold uppercase leading-none tracking-tighter text-white text-transparent lg:text-[2rem]">
        Lorem ipsum dolor consectetur adipisicing elit. Laudantium ex iure adipisci sapiente illum velit sed similique.
        A minus impedit vel voluptates recusandae culpa voluptatibus doloribus. voluptatibus doloribus...
      </p>

      {/* 3D Grid */}
      <div className="grid grid-cols-[repeat(1,80vw)] grid-rows-[repeat(7,auto)] gap-8 px-4 text-white md:grid-cols-[repeat(2,auto)] md:grid-rows-[repeat(4,auto)] md:p-8 lg:m-auto lg:w-4/5">
        <div className="flex flex-col items-center rounded-sm py-8 px-4 shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] shadow-cyan-600 lg:flex-row lg:gap-8">
          <div>
            <AcademicCapIcon className="pointer-events-none w-14 text-teal-500 lg:w-[6rem]" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="pointer-events-none text-center text-[2rem] text-pink-600 lg:text-left">Finibus</p>
            <p>
              Duis finibus faucibus venenatis. Phasellus iaculis tempus interdum. Pellentesque habitant morbi tristique
              senectus et netus.
            </p>
          </div>
        </div>

        <div className="rounded-sm-white flex flex-col items-center py-8 px-4 shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] shadow-cyan-600 lg:flex-row lg:gap-8">
          <div>
            <ArchiveIcon className="pointer-events-none w-14 text-teal-500 lg:w-[6rem]" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="pointer-events-none text-center text-[2rem] text-pink-600 lg:text-left">Convallis</p>
            <p>
              Proin nibh urna, convallis nec sodales vitae, rutrum et magna. Suspendisse vulputate at ipsum vel.
              Suspendisse vulputate at ipsum vel.
            </p>
          </div>
        </div>

        <div className="rounded-sm-white flex flex-col items-center py-8 px-4 shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] shadow-cyan-600 lg:flex-row lg:gap-8">
          <div>
            <AtSymbolIcon className="pointer-events-none w-14 text-teal-500 lg:w-[6rem]" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="pointer-events-none text-center text-[2rem] text-pink-600 lg:text-left">Tempor</p>
            <p>Proin vitae elit tempor, ornare nisl eu, ultricies magna. Vestibulum ante ipsum primis in faucibus.</p>
          </div>
        </div>

        <div className="rounded-sm-white flex flex-col items-center py-8 px-4 shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] shadow-cyan-600 lg:flex-row lg:gap-8">
          <div>
            <ChartBarIcon className="pointer-events-none w-14 text-teal-500 lg:w-[6rem]" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="pointer-events-none text-center text-[2rem] text-pink-600 lg:text-left">Laoreet</p>
            <p>
              Duis laoreet nisl sit amet velit dapibus consectetur sed a turpis. Ut pellentesque augue ut. Nam maximus
              pulvinar cursus. Maecenas euismod. Morbi mattis dictum magna, a. Ut pellentesque augue ut. Nam maximus
              pulvinar cursus. Maecenas euismod. Morbi mattis dictum magna, a.
            </p>
          </div>
        </div>

        <div className="rounded-sm-white flex flex-col items-center py-8 px-4 shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] shadow-cyan-600 lg:flex-row lg:gap-8">
          <div>
            <CodeIcon className="pointer-events-none w-14 text-teal-500 lg:w-[6rem]" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="pointer-events-none text-center text-[2rem] text-pink-600 lg:text-left">Maximus</p>
            <p>
              Nam maximus pulvinar cursus. Maecenas euismod gravida risus quis tincidunt. Morbi mattis dictum magna, a.
              Nam maximus pulvinar cursus. Maecenas euismod gravida risus quis tincidunt. Morbi mattis dictum magna, a.
            </p>
          </div>
        </div>

        <div className="rounded-sm-white flex flex-col items-center py-8 px-4 shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] shadow-cyan-600 lg:flex-row lg:gap-8">
          <div>
            <CloudIcon className="pointer-events-none w-14 text-teal-500 lg:w-[6rem]" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="pointer-events-none text-center text-[2rem] text-pink-600 lg:text-left">Tincidunt</p>
            <p>Morbi ante mi, blandit id suscipit imperdiet, tincidunt in quam. Maecenas et est eget lectus.</p>
          </div>
        </div>

        <div className="rounded-sm-white flex flex-col items-center py-8 px-4 shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] shadow-cyan-600 md:col-start-1 md:col-end-3 lg:flex-row lg:gap-8">
          <div>
            <DatabaseIcon className="pointer-events-none w-14 text-teal-500 lg:w-[6rem]" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="pointer-events-none text-center text-[2rem] text-pink-600 lg:text-left">Interdum</p>
            <p>
              Pellentesque quam tortor, interdum ac accumsan a, aliquet vel justo. Donec efficitur lectus ante.
              Maecenas. Fusce suscipit eleifend tellus in venenatis. Vivamus tincidunt arcu sed purus auctor, at
              ultricies nisl. Fusce suscipit eleifend tellus in venenatis. Vivamus tincidunt arcu sed purus auctor, at
              ultricies nisl.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
