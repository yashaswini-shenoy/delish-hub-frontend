import hero from "../assets/burger.jpg";

const Hero = () => {
  return (
    <div className="flex align-center justify-center">
      <img
        style={{ width: "100%" }}
        src={hero}
        className="w-full max-h-[600px] object-cover"
      />
    </div>
  );
};

export default Hero;
