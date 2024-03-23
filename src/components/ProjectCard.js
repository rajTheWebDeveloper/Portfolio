import React, { useEffect, useRef, useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectCard = ({imagePath,idx,item}) => {
    const { projectName, url, description,githubUrl } = item;
    const [activate, setActivate] = useState(false);
    const cardRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActivate(true);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(cardRef.current);

      return () => observer.unobserve(cardRef.current);
    }, []);
  return (
    <article
      key={idx}
      href={url}
      ref={cardRef}
      id="projects"
      className={`card h-auto w-[85vw] max-w-[360px] md:max-w-[420px] mx-auto rounded-md overflow-hidden cursor-pointer ${
        activate ? "card-effect" : null
      }`}
    >
      <a
        target="_blank"
        href={url}
        className="image-card h-[250px] bg-[#232323] flex flex-col items-end rounded-md overflow-hidden"
      >
        <div className="back mx-auto h-[50px]"></div>
        <img
          src={imagePath}
          alt=""
          className="project-image h-[200px] w-[85%] sm:w-[90%] max-w-[320px] object-cover mx-auto rounded-t-md"
        />
      </a>
      <div className="info">
        <header className="w-[100%] flex justify-between items-center py-2">
          <h2 className="text-xl font-bold w-[100%] pr-4 [#ebecf3]">
            {projectName}
          </h2>
          <p className="bg-[#535355] h-[0.5px] w-[100%]"></p>
          <div className="links pr-2 flex mx-auto pl-4">
            <a href={githubUrl} target="_blank">
              <FaGithub size={18} className="mr-4" />
            </a>
            <a href={url} target="_blank">
              <FaArrowUpRightFromSquare size={18} />
            </a>
          </div>
        </header>
        <p className="text-md capitalize font-light text-white">
          {description}
        </p>
        <button className="text-[#bd5fff] mt-2 flex items-center">
          <span className='mr-1'>Learn More</span> <MdOutlineKeyboardDoubleArrowRight size={20}/>
        </button>
      </div>
    </article>
  );
}

export default ProjectCard