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

const IconsArray: any[] = [
  [
    <AcademicCapIcon className="pointer-events-none w-14 text-cyan-400 lg:w-[6rem]" key={0} />,
    'Finibus',
    'Duis finibus faucibus venenatis. Phasellus iaculis tempus interdum. Pellentesque habitant morbi tristique senectus et netus.',
  ],
  [
    <ArchiveIcon className="pointer-events-none w-14 text-cyan-400 lg:w-[6rem]" key={1} />,
    'Convallis',
    'Proin nibh urna, convallis nec sodales vitae, rutrum et magna. Suspendisse vulputate at ipsum vel. Suspendisse vulputate at ipsum vel.',
  ],
  [
    <AtSymbolIcon className="pointer-events-none w-14 text-cyan-400 lg:w-[6rem]" key={2} />,
    'Tempor',
    'Proin vitae elit tempor, ornare nisl eu, ultricies magna. Vestibulum ante ipsum primis in faucibus.',
  ],
  [
    <ChartBarIcon className="pointer-events-none w-14 text-cyan-400 lg:w-[6rem]" key={3} />,
    'Laoreet',
    'Duis laoreet nisl sit amet velit dapibus consectetur sed a turpis. Ut pellentesque augue ut. Nam maximus pulvinar cursus. Maecenas euismod. Morbi mattis dictum magna, a. Ut pellentesque augue ut. Nam maximus pulvinar cursus. Maecenas euismod. Morbi mattis dictum magna, a.',
  ],
  [
    <CodeIcon className="pointer-events-none w-14 text-cyan-400 lg:w-[6rem]" key={4} />,
    'Maximus',
    'Nam maximus pulvinar cursus. Maecenas euismod gravida risus quis tincidunt. Morbi mattis dictum magna, a. Nam maximus pulvinar cursus. Maecenas euismod gravida risus quis tincidunt. Morbi mattis dictum magna, a.',
  ],
  [
    <CloudIcon className="pointer-events-none w-14 text-cyan-400 lg:w-[6rem]" key={5} />,
    'Tincidunt',
    'Morbi ante mi, blandit id suscipit imperdiet, tincidunt in quam. Maecenas et est eget lectus.',
  ],
  [
    <DatabaseIcon className="pointer-events-none w-14 text-cyan-400 lg:w-[6rem]" key={6} />,
    'Interdum',
    'Pellentesque quam tortor, interdum ac accumsan a, aliquet vel justo. Donec efficitur lectus ante. Maecenas. Fusce suscipit eleifend tellus in venenatis. Vivamus tincidunt arcu sed purus auctor, at ultricies nisl. Fusce suscipit eleifend tellus in venenatis. Vivamus tincidunt arcu sed purus auctor, at ultricies nisl.',
  ],
];

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
        {IconsArray.map((item, index: number) => (
          <div
            className={`${
              index === 6 ? 'md:col-start-1 md:col-end-3 lg:flex-row lg:gap-8' : ''
            }rounded-sm-white flex flex-col items-center py-8 px-4 shadow-xl shadow-cyan-800 lg:flex-row lg:gap-8`}
            key={index}
          >
            <div>{item[0]}</div>
            <div className="flex flex-col gap-2">
              <p className="pointer-events-none text-center text-[2rem] text-pink-600 lg:text-left">{item[1]}</p>
              <p>{item[2]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
