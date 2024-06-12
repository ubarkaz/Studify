import React from "react";

function About() {
  return (
    <div className="container mx-auto md:h-screen">
      <p className="text-xl font-medium text-gray-500 text-center">
        WHY CHOOSE US
      </p>
      <p className="text-5xl font-semibold text-gray-500 text-center mt-3">
        Our Values
      </p>
      <div className="grid grid-cols-3 gap-16 mt-7">

        <div className="flex flex-col gap-5 items-center">
          <img src="./Images/flexible.jpg" alt="certification" />
          <p className="text-2xl font-semibold">Certificaton</p>
          <p className="text-gray-500 text-center">
            Earn a certificate for every learning <br/>program that you complete <br/> at
            no extra cost
          </p>
        </div>

        <div className="flex flex-col gap-5 items-center">
          <img src="./Images/flexible.jpg" alt="certification" />
          <p className="text-2xl font-semibold">Industry inclusive</p>
          <p className="text-gray-500 text-center">
            Supports different courses across <br/>  industries that suits the students <br/>
            career or individual goals
          </p>
        </div>

        <div className="flex flex-col gap-5 items-center">
          <img src="./Images/flexible.jpg" alt="certification" />
          <p className="text-2xl font-semibold">Cost effective</p>
          <p className="text-gray-500 text-center">
            Our courses are affordable to every <br/>individual or organisations with <br/> flexible payment 
            options
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;
