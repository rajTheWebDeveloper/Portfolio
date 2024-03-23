import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import heroImg from '../assets/undraw_startup_life_re_8ow9.svg'
import { HostContext } from '../context/HostContext';
import { TypeAnimation } from "react-type-animation";
import TypeAnim from './TypeAnim';

const Hero = () => {

   let { setIndex } = useContext(HostContext);
   let [visible,setVisible]=useState(false)

   useEffect(()=>
   {
     let timeout=setTimeout(()=>
     {
       setVisible(true)
     },500)
     return ()=>clearTimeout(timeout)
   },[])

   let heroRef = useRef();
   useEffect(() => {
     let observer = new IntersectionObserver(
       (entries) => {
         entries.forEach((entry) => {
           if (entry.isIntersecting) {
             setIndex(null);
           }
         });
       },
       { threshold: 0.75 }
     );

     observer.observe(heroRef.current);

     return () => observer.unobserve(heroRef.current);
   }, []);
  return (
    <StyledHero>
      <section
        ref={heroRef}
        className="h-[100vh] w-[90vw] mx-auto mt-2 sm:mt-2 lg:mt-0 px-3"
        id="hero"
      >
        <div className="container w-full max-w-[1170px] h-[100vh] flex flex-start items-center flex-col mx-auto">
          <div className="port-side mt-4 md:mt-0">
            <h1 className="text-xl lg:text-8xl font-extrabold text-[#ebecf3] mb-3">
              <TypeAnim />
              {/* <span className="text-[#bd5fff]">.</span> */}
            </h1>
            {visible && (
              <div>
                <h3 className="special-effect text-[1.6rem] text-pretty font-extralight mb-0 md:mb-0">
                  I'm a{" "}
                  <span className="block md:inline-block text-[#bd5fff] font-semibold">
                    MERN Stack Developer
                  </span>
                </h3>
                <p className="special-effect font-normal text-base md:text-lg mb-6 leading-relaxed text-[#e9eaf1]">
                  Embark on a journey through the realms of MERN-stack voyager,
                  where innovation merges seamlessly with functionality.
                </p>
                <a
                  href="#contact"
                  className="px-5 md:px-6 py-3 bg-[#bd5fff] text-lg rounded-md hover:bg-[#8443b3] transition-all"
                >
                  Contact Me
                </a>
              </div>
            )}
          </div>
          <div className="starboard">
            <img
              src={heroImg}
              className="bg-red w-[100%] max-w-[400px]"
              alt=""
            />
          </div>
        </div>
      </section>
    </StyledHero>
  );
}



let StyledHero = styled.section`
  .container {
    display: grid;
    grid-template-columns: 6fr 4fr;
  }
  @media (max-width: 768px) {
    .container 
    {
      width: 100%;
      display: flex;
      flex-direction: column-reverse;
    }
    .container .starboard 
    {
      width: 70%;
      object-fit: cover;
      text-align: center;
      margin: 0 auto;
      margin-bottom: 2rem;
      height: 45%;
      display: flex;
      align-items: flex-end;
    }
    .container .port-side 
    {
      width: 100%;
      height: 55%;
    }
  }
`;
export default Hero