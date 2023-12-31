import blur from "../assets/Vector 8.webp";
import { MoveRight } from "lucide-react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="mb-[150px]">
      <Navbar />
      <div className=" container  h-auto  flex justify-center items-center md:mt-[50px]">
        <div className="flex flex-col gap-[50px] justify-center items-center relative ">
          <h1 className="text-[38px] md:text-[48px] text-white text-center font-bold">
            Adaptive Logo Design <br /> for Your Brand
          </h1>
          <button className="hover:bg-blueAquaHover font-bold h-[50px] rounded-xl bg-blueAqua  text-white  w-[200px] flex justify-center items-center gap-2 p-5 z-10">
            Explore Works <MoveRight />
          </button>
          <img
            className="  w-auto h-auto absolute -top-[100px]  md:-right-[150px] z-0"
            src={blur}
            alt="blur"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
