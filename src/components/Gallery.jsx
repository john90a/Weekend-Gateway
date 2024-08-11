import React from "react";
const Gallery = () => {
  return (
    <div id="gallery" className="max-w[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-gray-700 p-4 3xl font-bold">Gallery</h2>
      <div className="grid sm:grid-cols-5  gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src=" https://images.pexels.com/photos/2476645/pexels-photo-2476645.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/4577182/pexels-photo-4577182.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/996328/pexels-photo-996328.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};
export default Gallery;
