import React from "react";
const Contact = () => {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700 font-bold">Send us a message</h2>
      <p className="text-center text-gray-700 py-2">we are standing by!</p>
      <div className="grid md:grid-cols-2">
        <img
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
          src="https://images.pexels.com/photos/88212/pexels-photo-88212.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="/"
        />
        <form>
          <div className="grid grid-cols-2">
            <input className="border m-2 p-2" type="text" placeholder="first" />
            <input className="border m-2 p-2" type="text" placeholder="last" />
            <input
              className="border m-2 p-2"
              type="email"
              placeholder="email"
            />
            <input className="border m-2 p-2" type="tel" placeholder="phone" />
            <input
              className="border col-span-2 p-2 m-2"
              type="text"
              placeholder="address"
            />
            <textarea
              className="border col-span-2 m-2 p-2"
              cols="30"
              rows="10"
            ></textarea>
            <button className="col-span-2 m-2 bg-blue-500">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
