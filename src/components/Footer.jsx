import logo from "../assets/logoOctopus.png";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
/* import blur from "../assets/Vector 8.png" */
const Footer = () => {
  return (
    <footer className="bg-[#131313]">
      <div className="container   p-[50px] text-white ">
        <div className="flex flex-col gap-2 mb-[100px] justify-center items-center">
          <h3 className="text-[20px] md:text-[28px] text-blueAqua">Get in Touch With Us</h3>
          <h1 className="text-[24px] md:text-[48px] underline">Michaeldiazcampo@gmail.com</h1>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center">
          <a  href="#">
            <img className="w-[200px] " src={logo} alt="logo Octopus" />
          
          </a>
          <div className="flex flex-col text-center md:text-start gap-2 text-[24px] md:text-[30px]">
            <h1>Santa marta, Colombia</h1>
            <h1>0-8-00-888-000</h1>
          </div>

          <div className="flex flex-col gap-2 text-[24px] md:text-[30px]">
            <h1>321 6948469</h1>
            <div className="flex  justify-center md:justify-start gap-2">
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
            </div>
          </div>
        </div>
        <hr className="h-px bg-[#F4F4F6] my-[10px] " />
        <h1 className="text-center mt-[20px] text-[24px] md:text-[30px]">
          © 2023. <a href=""></a> OctopusDev. All rights reserved.{" "}
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
