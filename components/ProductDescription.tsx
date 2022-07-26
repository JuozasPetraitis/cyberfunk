//! Icons
import { AtSymbolIcon, ChartBarIcon, CodeIcon, CloudIcon, DatabaseIcon } from "@heroicons/react/solid";

const IconsArray: any[] = [
  <AtSymbolIcon
    className="transform-all pointer-events-none w-16 text-black text-opacity-100 duration-500 ease-in group-hover:text-white group-hover:text-opacity-100 lg:w-20"
    key={2}
  />,
  <ChartBarIcon
    className="transform-all pointer-events-none w-16 text-black text-opacity-100 duration-500 ease-in group-hover:text-white group-hover:text-opacity-100 lg:w-20"
    key={3}
  />,
  <CodeIcon
    className="transform-all pointer-events-none w-16 text-black text-opacity-100 duration-500 ease-in group-hover:text-white group-hover:text-opacity-100 lg:w-20"
    key={4}
  />,
  <CloudIcon
    className="transform-all pointer-events-none w-16 text-black text-opacity-100 duration-500 ease-in group-hover:text-white group-hover:text-opacity-100 lg:w-20"
    key={5}
  />,
  <DatabaseIcon
    className="transform-all pointer-events-none w-16 text-black text-opacity-100 duration-500 ease-in group-hover:cursor-none group-hover:text-white group-hover:text-opacity-100 lg:w-20"
    key={6}
  />,
];

//! Main Component
const AnimationLayout = () => {
  return (
    <div className="bg-black py-20 font-Supreme">
      <div className="mx-auto grid w-11/12 auto-rows-auto grid-cols-1 gap-16 self-center lg:grid-cols-[2fr,1fr]">
        {/* Visual text */}
        <div className="flex flex-col items-center justify-center gap-6 text-white">
          <p className="bg-gradient-to-r from-[#ff00bf] via-fuchsia-300/50 to-[#6f1cc8] bg-clip-text font-Audiowide text-4xl font-bold uppercase leading-8 text-transparent">
            Integer eutu congue urus.
          </p>
          <p className="mx-auto max-w-2xl text-lg leading-6 text-gray-200">
            Sed ultrices ante et metus gravida dignissim ac.. Morbi sollicitudin velit id sapien scelerisque, nec imperdiet. Sed ultrices ante et metus gravida
            dignissim ac.. Morbi sollicitudin velit id sapien scelerisque, nec imperdiet. Sed ultrices ante et metus gravida dignissim ac.. Morbi sollicitudin
            velit id sapien scelerisque, nec imperdiet.
          </p>

          <a
            href="#about"
            className="rounded bg-gradient-to-r from-[#6f1cc8] via-fuchsia-300/50 to-[#ff00bf] px-12 py-3 font-Audiowide text-xl uppercase transition-all duration-300 ease-in hover:tracking-widest hover:shadow-lg hover:shadow-fuchsia-600"
          >
            More here
          </a>
        </div>

        {/* 3D Grid */}
        <div className="grid auto-rows-auto grid-cols-[repeat(2,1fr)] justify-center gap-6 rounded border-gray-400 bg-black py-6 px-4 text-white [transform-style:_preserve-3d] lg:border lg:[transform:_perspective(1000px)_rotateY(330deg)_rotateX(24deg)_rotateZ(0)_translateZ(100px)_translateX(0px)]">
          {IconsArray.map((item, index: number) => (
            <div
              className={`${
                index === 2 ? "col-start-1 col-end-3 row-start-2 row-end-3" : ""
              } group flex cursor-pointer justify-center overflow-hidden rounded-sm border bg-gradient-to-r from-pink-800/20 to-pink-500/40 shadow-md shadow-white/60 transition-transform duration-1000 hover:scale-110 hover:cursor-none hover:from-[#0d0c0c] hover:to-[#8b0049] hover:shadow-sm lg:hover:[transform:scale(1.5)_translate(-60px,-10px)_skew(20deg,0deg)]`}
              key={index}
            >
              <a href="#about" className="hover:cursor-none">
                {item}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimationLayout;
