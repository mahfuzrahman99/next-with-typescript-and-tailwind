import Image from "next/image";
import { BaseInfo } from "../../../../../Data/data";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full pt-[6vh] md:pt-[12vh] h-screen bg-[#0f0715]">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-3xl mb-5 text-gray-300 font-semibold">
              I am {BaseInfo.name}
            </h1>
            <h1 className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold md:leading-[56px] xl:leading-[64px] text-white">
              {BaseInfo.position}
            </h1>
            <p className="mt-6 text-sm md:text-base text-white text-opacity-60">
              {BaseInfo.description}
            </p>
            <button className="mt-6 flex justify-center items-center gap-2 px-6 md:px-8 py-3 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg bg-blue-700 hover:bg-blue-900 ">
              <span className=" text-sm md:text-base text-white">
                Download CV
              </span>
              <FaDownload />
            </button>
          </div>
          {/* Image Content */}
          <div className="mx-auto hidden lg:block rounded-[3rem] borde-[3.5px] border-blue-950 overflow-x-hidden">
            <Image src={BaseInfo.profilePic} alt="" height={500} width={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
