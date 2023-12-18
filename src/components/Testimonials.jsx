import blur from "../assets/Vector 8.png";

const Testimonials = () => {
  return (
    <section className="mt-[100px]">
      <div className="container  flex-col flex gap-5 text-white p-[40px] md:p-[80px] md:pe-[300px] relative">
        <img
          className=" absolute -top-[50px] left-0 md:-top-[150px] md:-left-[200px] z-0"
          src={blur}
          alt="blur"
        />
        <h1 className="text-[38px] md:text-[48px] font-bold">Testimonial</h1>
        <p className="text-[#949494]   md:text-[20px]">
          “Octopus was fantastic to work with from start to finish. We were
          looking for a simple, stand-out logo and he delivered. I tried
          designing the logo myself thinking I wouldn’t need to pay the money
          for a professional graphic designer but I was very wrong. Working with
          Octopus was worth every penny and was surprisingly affordable! I
          remember him saying simplicity is key to a successful logo and boy he
          was right. I can’t thank Octopus enough for his effort and
          professionalism. I would recommend him to anyone looking for a
          design!”
        </p>
        <h2 className="text-[28px] md:text-[38px] font-bold">-Martin lee</h2>
      </div>
    </section>
  );
};

export default Testimonials;
