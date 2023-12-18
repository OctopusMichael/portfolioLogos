import avatar from "../assets/michael-perfil.jpg";
import blur from "../assets/Vector 8.png";

const About = () => {
  return (
    <section className="md:mb-[150px] ">
      <div className="container flex flex-col gap-[50px] md-gap-0 md:flex-row justify-between md:px-[80px]  ">
        <div className="order-2 md:order-1 flex flex-col  items-center md:items-start  px-[40px] justify-center gap-[50px]  md:px-[0px]  text-white md:w-2/4 md:p-[80px]  relative  ">
          <img
            className=" hidden  md:block  absolute top-[0px] -left-[200px] z-0 "
            src={blur}
            alt="blur"
          />
          <h1 className="text-[38px] text-center md:text-start md:text-[48px] font-bold">
            Let’s get know <br /> about me closer
          </h1>
          <p className="text-center md:text-start">
            Octopus is a New York-based visual designer focusing on branding and
            visual identity. Her portfolio showcases her wide range of work,
            spanning books, posters and web design.
          </p>
          <button className="h-[50px] rounded-xl bg-blueAqua hover:bg-blueAquaHover text-white w-[250px] p-2 font-bold z-10">
            Discover More About Me
          </button>
        </div>
        <div className="order-1 md:order-2 md:w-2/4 flex   justify-center items-center  ">
          <img
            className="w-[270px] md:w-[450px] md:h-[650px] rounded-3xl"
            src={avatar}
            alt="avatar"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
