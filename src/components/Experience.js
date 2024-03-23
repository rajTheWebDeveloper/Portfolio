import React, { useContext, useEffect, useRef, useState } from "react";
import { HostContext } from "../context/HostContext";
import styled from "styled-components";
import skills from "../helpers/skills";
import tools from "../helpers/tools";
import { BsTools } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import projectSkills from "../helpers/projectSkills";

const Experience = () => {
  let { setIndex } = useContext(HostContext);
  let [activate, setActivate] = useState(false);
  let [loadedOnce, setLoadedOnce] = useState(false);

  let experienceRef = useRef();
  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIndex(3);
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
    );

    observer.observe(experienceRef.current);

    return () => observer.unobserve(experienceRef.current);
  }, []);

  return (
    <StyledExperience>
      <section
        ref={experienceRef}
        id="exp"
        className="min-h-screen w-[90vw] max-w-[1170px] mx-auto flex flex-col overflow-hidden mt-20 pt-[70px] px-3"
      >
        <div className="wrap">
          <header className="flex justify-between items-center w-[95%] md:w-[100%] mb-5">
            <h2 className="text-3xl md:text-5xl text-[#ebecf3] py-2 pr-6 font-extrabold">
              Experience<span className="text-[#bd5fff]">.</span>
            </h2>
            <p className="h-[0.3px] w-[100%] md:w-[100%] bg-[#535355]"></p>
          </header>
          <section className="companies flex flex-col">
            <div className="company-name-from-to flex justify-between">
              <h2 className={`text-xl font-bold text-[#ebecf3] mb-2 ${!loadedOnce && activate?'special-effect':null}`}>Wipro Technologies</h2>
              <p className="font-semibold text-sm md:text-md tracking-wider">Jan 2022 - Present</p>
            </div>
            <h3 className={"font-semibold text-md text-[#bd5fff] mb-2"}>MERN Stack Developer</h3>
              <p className="font-bold mb-2 text-[#ebecf3]">Project</p>
              <p className={`mb-3 leading-relaxed ${!loadedOnce && activate?'special-effect':null}`}>
                Worked on a Citi Bank associate security company Gemalto MFA
                devices website which processes the MFA devices in coordination
                with DHL for logistics to the newly recruited. On the basis of
                the request from the requestor after validating the details and
                approval, MFA token will be shipped to the requestor which are
                futher used for their authentication process of their daily
                login activities. The following site handles all the operations
                from receiving request to validation, rejection, shipment and
                replacement of lost/broken token requests.
              </p>
              <p className="mb-2 font-semibold">Technologies Utilized</p>
              <div className="mt-3 md:mt-4">
                {projectSkills.map((items) => {
                  return (
                    <button className="mx-1 my-1 md:mx-2 md:my-2 bg-[#232323] py-1 px-3 md:py-2 md:px-4 font-medium rounded-3xl">
                      {items}
                    </button>
                  );
                })}
              </div>
          </section>
        </div>
      </section>
    </StyledExperience>
  );
};

let StyledExperience = styled.section`
  .Experience {
    display: grid;
    grid-template-columns: 8fr 4fr;
    gap: 1rem;
  }
  @media (max-width: 1024px) {
    .Experience {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`;

export default Experience;
