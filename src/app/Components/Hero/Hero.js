import Nav from "../Nav/Nav";
import React from 'react';

function Hero() {
  return (
    <div className="">
      <div className="bg-[#fff5f1] min-h-screen">
        <Nav />
        <div className="container mx-auto flex flex-col justify-center h-full px-2 sm:px-4 lg:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mt-4">
            <div className="flex flex-col gap-4 md:w-1/2">
              <p className="text-4xl font-medium">
                An Exceptional approach <br /> for academic and career <br /> excellence online
              </p>
              <p className="text-lg text-gray-500">
                Learn at your own pace with endless access <br/> to mobile and desktop device anytime
              </p>
              <button className="btn bg-[#524fd5] text-white rounded-full capitalize border-none w-44 h-10">Get started</button>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <img src="./Images/student.jpg" alt="our student" className="w-full h-auto max-h-[450px] object-top rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
