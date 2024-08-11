import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh">
      <img
        src="https://images.pexels.com/photos/3250614/pexels-photo-3250614.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="/"
        className="w-full h-full object-cover"
      />

      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[-50] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Find your special trip</h1>
          <h2 className="text-4xl py-2 italic">With weekaway</h2>
          <p>The best place to be on weekends with family.</p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
