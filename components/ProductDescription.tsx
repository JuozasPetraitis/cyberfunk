import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';

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
const AnimationLayout = () => {
  const ScrollDown = () => {
    window.scrollTo({
      top: 2900,
      behavior: 'smooth',
    });
  };

  return (
    <div className="container m-auto py-20">
      <div className="grid grid-cols-1 grid-rows-[repeat(2,auto)] gap-16 self-center md:grid-cols-[1fr,40vw]">
        {/* Visual text */}
        <div className="flex flex-col items-center justify-center gap-8 text-white">
          <p className="font-cyberfreight break-all bg-gradient-to-r from-[#00fffb] via-lime-500 to-[#e5e5185c] bg-clip-text text-[2.5rem] font-bold uppercase leading-8 text-transparent">
            Integer eutu congue urus. Maecenas id laoreet odio.
          </p>
          <p>
            Sed ultrices ante et metus gravida dignissim ac.. Morbi sollicitudin velit id sapien scelerisque, nec
            imperdiet. Sed ultrices ante et metus gravida dignissim ac.. Morbi sollicitudin velit id sapien scelerisque,
            nec imperdiet. Sed ultrices ante et metus gravida dignissim ac.. Morbi sollicitudin velit id sapien
            scelerisque, nec imperdiet.
          </p>
          <button className="rounded-md bg-pink-800 px-12 py-3 font-semibold text-black" onClick={ScrollDown}>
            More here
          </button>
        </div>

        {/* 3D Grid */}
        <div className="grid grid-cols-[repeat(4,1fr)] grid-rows-[repeat(3,1fr)] justify-center gap-y-4 gap-x-4 border-white bg-black py-6 px-4 text-white shadow-[0_6px_20px_2px_rgba(0,0,0,0.3)] shadow-cyan-400 [transform-style:_preserve-3d] lg:border-2 lg:[transform:_perspective(800px)_rotateY(-30deg)_rotateX(10deg)_rotateZ(0)_translateZ(30px)_translateX(-50px)]">
          <div
            className="group flex cursor-pointer justify-center rounded-sm border border-white bg-gradient-to-r  from-[#321450] via-sky-600 to-[#860029] shadow-[-1px_1px_12px_-2px_rgba(0,0,0,0.3)] shadow-white hover:scale-110 hover:shadow-[0px_2px_10px_4px_rgba(0,0,0,0.3)] hover:shadow-cyan-600"
            onClick={ScrollDown}
          >
            <AcademicCapIcon className="transform-all pointer-events-none w-12 text-black text-opacity-100 duration-500 ease-in group-hover:text-white group-hover:text-opacity-100 lg:w-20" />
          </div>

          <div
            className="group flex cursor-pointer justify-center rounded-sm border border-white bg-gradient-to-r  from-[#321450] via-sky-600 to-[#860029] shadow-[-1px_1px_12px_-2px_rgba(0,0,0,0.3)] shadow-white hover:scale-110 hover:shadow-[0px_2px_10px_4px_rgba(0,0,0,0.3)] hover:shadow-cyan-600"
            onClick={ScrollDown}
          >
            <ArchiveIcon className="transform-all pointer-events-none w-12 text-black text-opacity-100 duration-500 ease-in group-hover:text-white group-hover:text-opacity-100" />
          </div>

          <div
            className="group flex cursor-pointer justify-center rounded-sm border border-white bg-gradient-to-r  from-[#321450] via-sky-600 to-[#860029] shadow-[-1px_1px_12px_-2px_rgba(0,0,0,0.3)] shadow-white hover:scale-110 hover:shadow-[0px_2px_10px_4px_rgba(0,0,0,0.3)] hover:shadow-cyan-600"
            onClick={ScrollDown}
          >
            <AtSymbolIcon className="transform-all pointer-events-none w-12 text-black text-opacity-100 duration-500 ease-in group-hover:text-white group-hover:text-opacity-100" />
          </div>

          <div
            className=" group flex cursor-pointer justify-center rounded-sm border border-white bg-gradient-to-r  from-[#321450] via-sky-600 to-[#860029] shadow-[-1px_1px_12px_-2px_rgba(0,0,0,0.3)] shadow-white hover:scale-110 hover:shadow-[0px_2px_10px_4px_rgba(0,0,0,0.3)] hover:shadow-cyan-600"
            onClick={ScrollDown}
          >
            <ChartBarIcon className="transform-all pointer-events-none w-12 text-black text-opacity-100 duration-500 ease-in group-hover:text-white group-hover:text-opacity-100" />
          </div>

          <div
            className="group col-start-1 col-end-5 flex cursor-pointer justify-center rounded-sm border  border-white bg-gradient-to-r from-[#321450] via-sky-600 to-[#860029] shadow-[-1px_1px_12px_-2px_rgba(0,0,0,0.3)] shadow-white hover:scale-110 hover:shadow-[0px_2px_10px_4px_rgba(0,0,0,0.3)] hover:shadow-cyan-600"
            onClick={ScrollDown}
          >
            <CodeIcon className="transform-all pointer-events-none w-12 text-black text-opacity-100 duration-500 ease-in group-hover:text-white group-hover:text-opacity-100" />
          </div>

          <div
            className="group col-start-1 col-end-3 flex cursor-pointer justify-center rounded-sm border  border-white bg-gradient-to-r from-[#321450] via-sky-600 to-[#860029] shadow-[-1px_1px_12px_-2px_rgba(0,0,0,0.3)] shadow-white hover:scale-110 hover:shadow-[0px_2px_10px_4px_rgba(0,0,0,0.3)] hover:shadow-cyan-600"
            onClick={ScrollDown}
          >
            <CloudIcon className="transform-all pointer-events-none w-12 text-black text-opacity-100 duration-500 ease-in group-hover:text-white group-hover:text-opacity-100" />
          </div>

          <div
            className="group col-start-3 col-end-5 flex cursor-pointer justify-center rounded-sm border  border-white bg-gradient-to-r from-[#321450] via-sky-600 to-[#860029] shadow-[-1px_1px_12px_-2px_rgba(0,0,0,0.3)] shadow-white hover:scale-110 hover:shadow-[0px_2px_10px_4px_rgba(0,0,0,0.3)] hover:shadow-cyan-600"
            onClick={ScrollDown}
          >
            <DatabaseIcon className="transform-all pointer-events-none w-12 text-black text-opacity-100 duration-500 ease-in group-hover:text-white group-hover:text-opacity-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationLayout;
