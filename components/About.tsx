//! Icons
import { AcademicCapIcon, ArchiveIcon, AtSymbolIcon, ChartBarIcon, CodeIcon, CloudIcon, DatabaseIcon } from "@heroicons/react/solid";

const IconsArray: any[] = [
  [
    <AcademicCapIcon className="pointer-events-none w-14 text-cyan-500/80 lg:w-[6rem]" key={0} />,
    "Finibus",
    "Duis finibus faucibus venenatis. Phasellus iaculis tempus interdum. Pellentesque habitant morbi tristique senectus et netus.",
  ],
  [
    <ArchiveIcon className="pointer-events-none w-14 text-cyan-500/80 lg:w-[6rem]" key={1} />,
    "Convallis",
    "Proin nibh urna, convallis nec sodales vitae, rutrum et magna. Suspendisse vulputate at ipsum vel. Suspendisse vulputate at ipsum vel.",
  ],
  [
    <AtSymbolIcon className="pointer-events-none w-14 text-cyan-500/80 lg:w-[6rem]" key={2} />,
    "Tempor",
    "Proin vitae elit tempor, ornare nisl eu, ultricies magna. Vestibulum ante ipsum primis in faucibus.",
  ],
  [
    <ChartBarIcon className="pointer-events-none w-14 text-cyan-500/80 lg:w-[6rem]" key={3} />,
    "Laoreet",
    "Duis laoreet nisl sit amet velit dapibus consectetur sed a turpis. Ut pellentesque augue ut. Nam maximus pulvinar cursus. Ut pellentesque augue ut. Nam maximus pulvinar cursus.",
  ],
  [
    <CodeIcon className="pointer-events-none w-14 text-cyan-500/80 lg:w-[6rem]" key={4} />,
    "Maximus",
    "Nam maximus pulvinar cursus. Maecenas euismod gravida risus quis tincidunt. Morbi mattis dictum magna, a. Nam maximus pulvinar cursus.",
  ],
  [
    <CloudIcon className="pointer-events-none w-14 text-cyan-500/80 lg:w-[6rem]" key={5} />,
    "Tincidunt",
    "Morbi ante mi, blandit id suscipit imperdiet, tincidunt in quam. Maecenas et est eget lectus.",
  ],
  [
    <DatabaseIcon className="pointer-events-none w-14 text-cyan-500/80 lg:w-[6rem]" key={6} />,
    "Interdum",
    "Pellentesque quam tortor, interdum ac accumsan a, aliquet vel justo. Donec efficitur lectus ante. Maecenas. Fusce suscipit eleifend tellus in venenatis. Vivamus tincidunt arcu sed purus auctor, at ultricies nisl. Fusce suscipit eleifend tellus in venenatis. Vivamus tincidunt arcu sed purus auctor, at ultricies nisl.",
  ],
];

//! Main Component
const About = () => {
  return (
    <div className="flex max-w-screen-3xl flex-col items-center gap-12 bg-black py-20" id="about">
      <p className="pointer-events-none max-w-prose bg-gradient-to-r from-[#ff00bf] via-fuchsia-300/50 to-[#6f1cc8] bg-clip-text px-4 text-[1.5rem] font-semibold uppercase leading-none tracking-tighter text-white text-transparent lg:text-[2rem]">
        Lorem ipsum dolor consectetur adipisicing elit. Laudantium ex iure adipisci sapiente illum velit sed similique. A minus impedit vel voluptates
        recusandae culpa voluptatibus doloribus. voluptatibus doloribus...
      </p>

      <div className="grid grid-cols-[repeat(1,80vw)] grid-rows-[repeat(7,auto)] gap-12 px-4 text-white md:grid-cols-[repeat(2,auto)] md:grid-rows-[repeat(4,auto)] md:p-8 lg:mx-auto 2xl:w-4/5">
        {IconsArray.map((item, index: number) => (
          <div
            className={`${
              index === 6 ? "md:col-start-1 md:col-end-3 lg:flex-row lg:gap-8" : ""
            } flex flex-col rounded border border-gray-200/40 py-8 px-4 shadow-lg shadow-fuchsia-400/80 lg:flex-row lg:gap-8`}
            key={index}
          >
            <div className="self-center">{item[0]}</div>
            <div className="flex flex-col">
              <p className="pointer-events-none text-center font-Audiowide text-[2rem] text-amber-400 lg:text-left">{item[1]}</p>
              <p className="font-Supreme leading-6 text-gray-200">{item[2]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
