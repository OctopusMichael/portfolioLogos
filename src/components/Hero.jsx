import blur from "../assets/Vector 8.png";
import { MoveRight } from "lucide-react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="mb-[150px]">
      
      <div className=" container  h-auto  flex justify-center items-center ">
        <div className="flex flex-col gap-[50px] justify-center items-center relative">
          <h1 className="text-[38px] md:text-[48px] text-white text-center font-bold">
            Adaptive Logo Design <br /> for Your Brand
          </h1>
          <button className="hover:bg-blueAquaHover font-bold h-[50px] rounded-xl bg-blueAqua  text-white  w-[200px] flex justify-center items-center gap-2 p-5 z-10">
            Explore Works <MoveRight />
          </button>
          <motion.img
            className="absolute -top-[100px] -right-[150px] z-0"
            src={blur}
            alt="blur"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
