"use client"
import VideoThumb from '@/public/images/list.png'
import ModalVideo from '@/components/modal-video'
import React, { useRef } from "react";

export default function Hero() {

  const emailInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    const emailValue = emailInputRef?.current?.value; // Use optional chaining
    if (emailValue) {
      console.log("Here's my input:", emailValue);
      const pdfUrl = "/pdf/directories.pdf"; // Specify the path to your PDF file in the public directory
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "250+Directories.pdf"; // Specify the desired download file name
      link.click();
    } else {
      console.log("Input value is null or undefined.");
    }
  };
  
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Free List of <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"> <br />250+ Directories</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-2xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">we know as a busy founder you don't have time thats why we provide a service of <a className="underline decoration-sky-500 hover:decoration-sky-900 font-bold" href="https://www.reachactory.online">sharing your product with 100+ cherry picked directories</a></p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
              <form action="https://submit-form.com/Xk2gIRvb">
                <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0">          
                  <input type="email" placeholder="Enter your email here" className="text hover:bg-teal-100 w-full" name="email" ref={emailInputRef} required />
                  <button className="btn text-white bg-gray-900 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 sm:ml-3" onClick={handleClick}>Submit</button>          
                  {/* <p className="text-md text-gray-600 mb-8 w-full mt-2" data-aos-delay="150">click submit to start downloading </p> */}
                 
                  {/* <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:mlx-2" href="#0"> ↓ </a>            */}
                </div>
                <div>
                <p className="text-md text-gray-600 mb-8 w-full mt-2" data-aos-delay="150">click submit to start downloading </p>
                {/* <button className="btn text-white bg-gray-900 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 sm:ml-3" onClick={handleClick}>Submit</button>                 */}
                </div>
                </form>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:mlx-2 lg:ml-2 lg:mt-24" href="#0"> video ↓ </a>           
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/demo.mp4"
            videoWidth={1920}
            videoHeight={1080} />

        </div>

      </div>
    </section>
  )
}