import React, { useContext, useEffect, useRef, useState } from 'react'
import { HostContext } from '../context/HostContext';
import { CiMail } from "react-icons/ci";


const Contact = () => {

   let { setIndex } = useContext(HostContext);
    let [activate, setActivate] = useState(false);
    let [loadedOnce, setLoadedOnce] = useState(false);

   let contactRef = useRef();
   useEffect(() => {
     let observer = new IntersectionObserver(
       (entries) => {
         entries.forEach((entry) => {
           if (entry.isIntersecting) {
             setIndex(4);
             setActivate(true);
             setTimeout(() => {
               setLoadedOnce(true);
             }, 1000);
           } else {
             setActivate(false);
           }
         });
       },
       { threshold: 0.5}
     )

     observer.observe(contactRef.current);

     return () => observer.unobserve(contactRef.current);
   }, []);
  return (
    <section
      ref={contactRef}
      className="h-screen w-full flex justify-center items-center"
      id="contact"
    >
      <div className="contact-info w-[90vw] max-w-[1000px] text-center flex flex-col px-3">
        <h2
          className={`font-extrabold text-4xl md:text-6xl mb-4 special-effect-medium tracking-wide ${
            !loadedOnce && activate ? "special-effect" : null
          }`}
          style={{ animationDuration: "2s" }}
        >
          Contact<span className="text-[#bd5fff]">.</span>
        </h2>
        <p
          className={`mb-4 tracking-wide special-effect-slow ${
            !loadedOnce && activate ? "special-effect" : null
          }`}
        >
          I am actively seeking a dynamic team where I may immerse myself in
          pioneering technologies, offering my expertise to make meaningful
          contributions. If you find my qualifications align with your needs, I
          eagerly anticipate the opportunity to connect.
        </p>
        <a
          href="mailto:rajmuni.v@gmail.com"
          target="_blank"
          className="py-2 md:py-3 px-6 md:px-8 bg-[#232323] hover:bg-[#191919] rounded-md text-md md:text-lg font-semibold tracking-wide mx-auto flex justify-center items-center transition-all"
        >
          <CiMail size={22} />
          <span className="ml-2 ">Send Email</span>
        </a>
      </div>
    </section>
  );
}


export default Contact