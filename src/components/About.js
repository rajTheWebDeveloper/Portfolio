import React, { useContext, useEffect, useRef, useState } from 'react'
import { HostContext } from '../context/HostContext'
import styled from 'styled-components'
import skills from '../helpers/skills'
import tools from '../helpers/tools'
import { BsTools } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";




const About = () => {

  let {setIndex}=useContext(HostContext)
  let [activate,setActivate]=useState(false)
  let [loadedOnce,setLoadedOnce]=useState(false)

  let aboutRef=useRef()
  useEffect(()=>
  {
     let observer=new IntersectionObserver((entries)=>
     {
       entries.forEach((entry)=>
       {
         if(entry.isIntersecting)
         {
           setIndex(1)
           setActivate(true)
           setTimeout(()=>
           {
            setLoadedOnce(true)
           },1000)
         }
         else 
         {
          setActivate(false)
         }
       })
     },{threshold:0.5})

     observer.observe(aboutRef.current)

     return ()=>observer.unobserve(aboutRef.current)
  },[])


  return (
    <StyledAbout>
      <section
        ref={aboutRef}
        id="about"
        className="min-h-screen w-[90vw] max-w-[1170px] mx-auto flex flex-col overflow-hidden mt-10 pt-[70px] px-3"
      >
        <div className="wrap">
          <header className="flex justify-between items-center w-[95%] md:w-[100%] mb-5">
            <h2 className="text-3xl md:text-5xl text-[#ebecf3] py-2 pr-6 font-extrabold">
              About<span className="text-[#bd5fff]">.</span>
            </h2>
            <p className="h-[0.3px] w-[100%] md:w-[100%] bg-[#535355]"></p>
          </header>
          <div className="about">
            <div className="info flex flex-col gap-4 text-base md:text-lg text-[#c7c8ce]">
              <p className="">
                Howdy! I'm Muni Raj, and I'm a MERN Stack Developer.
              </p>
              <p
                className={`special-effect-fast ${
                  !loadedOnce && activate ? "special-effect" : null
                }`}
              >
                As a Full Stack Developer, I have experience working in both
                frontend and backend. I have a strong command over HTML, CSS,
                and JavaScript, which are the foundational technologies for
                building interactive and responsive web pages. I have good
                expertise in React, a front end library used for building
                elegant and functional interfaces. I'm passionate about creating
                beautiful, responsive websites that provide a great user
                experience.
              </p>
              <p
                className={`special-effect-medium ${
                  !loadedOnce && activate ? "special-effect" : null
                }`}
              >
                On the back-end, I am proficient in Node.js, which enables me to
                build server-side applications using JavaScript. I have
                expertise in frameworks like Express.js, which helps me develop
                robust and scalable APIs. Additionally, I have worked with
                MongoDB, a NoSQL database, to efficiently store and retrieve
                data for web applications.
              </p>
              <p
                className={`special-effect-slow ${
                  !loadedOnce && activate ? "special-effect" : null
                }`}
              >
                I'm always looking for new challenges and opportunities to learn
                and grow as a developer. If you're interested in working
                together or have any questions, please don't hesitate to get in
                touch!
              </p>
              <p className='flex items-center gap-3'><span className='text-[#bd5fff]'>My Links</span> <FaArrowRight size={20}/> <a href='https://github.com/rajTheExplorer' target='_blank'><FaGithub size={22}/></a></p>
            </div>
            <div className="skill-info leading-relaxed">
              <h2 className="flex items-center my-2 text-xl">
                <FaReact size={20} color="#bd5fff" />
                <span className="ml-2">Skills</span>
              </h2>
              <div className="skills">
                {skills.map((items) => {
                  return (
                    <button className="text-base px-3 py-1 bg-[#bd5fff] my-2 mr-3 rounded-sm">
                      {items}
                    </button>
                  );
                })}
              </div>
              <h2 className="flex items-center my-2 text-xl">
                <BsTools size={20} color="#bd5fff" />
                <span className="ml-2">Tools</span>
              </h2>
              <div className="tools">
                {tools.map((items) => {
                  return (
                    <button className="text-base px-3 py-1 bg-[#bd5fff] my-2 mr-3 rounded-sm">
                      {items}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </StyledAbout>
  );
}


let StyledAbout = styled.section`
  .about {
    display: grid;
    grid-template-columns: 8fr 4fr;
    gap:1rem;
  }
  @media (max-width: 1024px) {
    .about {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`;

export default About