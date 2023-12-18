import { MoveRight } from "lucide-react";
import data from "../json/projects.json";
import blur from "../assets/Vector 8.png";

const Projects = () => {
  return (
    <section className=  "mt-[100px] md:mt-[200px]">
      <div className="container flex flex-col gap-[50px]">
        <div className="flex flex-col justify-center items-center gap-[50px] relative ">
          <img
            className="  absolute  -top-[140px] md:-top-[250px] md:right-0  z-0 "
            src={blur}
            alt="blur"
          />
          <h1 className="text-[48px] text-white text-center font-bold">
            My Projects Higlight
          </h1>
          <button className="font-bold h-[50px] rounded-xl bg-transparent border border-solid border-blueAqua hover:bg-blueAquaHover text-white  w-[200px] flex justify-center items-center gap-2 p-5 z-10">
            Explore Works <MoveRight />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 cursor-pointer   place-items-center      md:gap-x-5 gap-y-[100px]">
          {data.map((e) => (
            <div
              className="flex flex-col px-[40px] md:px-[0px]   gap-5"
              key={e.id}
            >
              <img
                className=" md:w-[560px] md:h-[620px]"
                src={e.image}
                alt={e.name}
              />
              <div className="flex flex-col gap-2 px-5 md:p-0  ">
                <h1 className="text-[30px] font-bold text-white">{e.name} </h1>
                <h2 className="text-[#9EA3AE] flex gap-5">
                  Client: <span className="text-white">{e.client} </span>
                </h2>
                <h2 className="text-[#9EA3AE] flex   gap-5">
                  work:
                  {e.work.map((element) => (
                    <span key={element} className="text-white">
                      {element}
                    </span>
                  ))}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
