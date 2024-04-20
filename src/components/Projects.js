import React, { useContext, useEffect, useRef, useState } from 'react'
import { HostContext } from '../context/HostContext';
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import BirthdayBuddyImage from "../images/Birthday-Buddy.png";
import EuropeToursImage from "../images/Europe-Tours.png";
import ReviewsImage from "../images/Reviews.png";
import Accordian from "../images/Accordian.png";
import Menu from "../images/Menu.png";
import Tabs from "../images/Tabs.png";
import LoremGenerator from "../images/Lorem-Generator.png";
import TodoList from "../images/Todo.png";
import ColorPicker from "../images/Color-Picker.png";
import SidebarModal from "../images/Sidebar-Modal.png";
import StripeLanding from "../images/Stripe-Landing.png";
import Cart from "../images/Cart.png";
import Comfurniture from "../images/Comfurniture.png";
import projectData from '../helpers/projectData';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import SolarQuiz from '../images/SolarQuiz.png'
import WorldGDPExplorer from '../images/WorldGDPExplorer.png'

const Projects = () => {
   let { setIndex } = useContext(HostContext);
   let [activate, setActivate] = useState(false);
   let [loadedOnce, setLoadedOnce] = useState(false);



   let projectsRef = useRef();
   useEffect(() => {
     let observer = new IntersectionObserver(
       (entries) => {
         entries.forEach((entry) => {
           if (entry.isIntersecting) {
             setIndex(2);
             setActivate(true);
             setTimeout(() => {
               setLoadedOnce(true);
             }, 1000);
           } else {
             setActivate(false);
           }
         });
       },
       { threshold: 0.1}
     );

     observer.observe(projectsRef.current);

     return () => observer.unobserve(projectsRef.current);
   }, []);

  return (
    <StyledProjects>
      <section
        ref={projectsRef}
        id="projects"
        className="main-section h-screen w-[90vw] max-w-[1170px] mx-auto flex flex-col overflow-hidden mt-20 pt-[70px] px-3"
      >
        <div className="wrap">
          <header className="flex justify-between items-center w-[95%] md:w-[100%] mb-5">
            <p className="h-[0.3px] w-[100%] md:w-[100%] bg-[#535355]"></p>
            <h2 className="text-3xl md:text-5xl text-[#ebecf3] py-2 pl-6 font-extrabold">
              Projects<span className="text-[#bd5fff]">.</span>
            </h2>
          </header>
          <section className="project-layout">
            {projectData.map((item, idx) => {
              let { projectName, url, description } = item;
              let imagePath;
              if (projectName === "Birthday Mate") {
                imagePath = BirthdayBuddyImage;
              }
              if (projectName === "Tours") {
                imagePath = EuropeToursImage;
              }
              if (projectName === "Reviews") {
                imagePath = ReviewsImage;
              }
              if (projectName === "Accordian") {
                imagePath = Accordian;
              }
              if (projectName === "Menu") {
                imagePath = Menu;
              }
              if (projectName === "Tabs") {
                imagePath = Tabs;
              }
              if (projectName === "Lorem Generator") {
                imagePath = LoremGenerator;
              }
              if (projectName === "Todo List") {
                imagePath = TodoList;
              }
              if (projectName === "Color Generator") {
                imagePath = ColorPicker;
              }
              if (projectName === "Sidebar Modal") {
                imagePath = SidebarModal;
              }
              if (projectName === "Stripe Landing") {
                imagePath = StripeLanding;
              }
              if (projectName === "Solar Quiz") {
                imagePath = SolarQuiz;
              }
              if (projectName === "Cart") {
                imagePath = Cart;
              }
              if (projectName === "Comfurniture") {
                imagePath = Comfurniture;
              }
              if (projectName === "World GDP Explorer") {
                imagePath = WorldGDPExplorer;
              }
              return (
                <ProjectCard imagePath={imagePath} idx={idx} item={item}/>
              );
            })}
          </section>
        </div>
      </section>
    </StyledProjects>
  );
}


let StyledProjects = styled.section`
  .main-section 
  {
    min-height: 100vh;
    /* height: 100vh; */
    height: auto;
  }
  .project-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    row-gap: 2rem;
  }
  @media (max-width: 1024px) {
    .project-layout {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 2rem;
      row-gap: 2rem;
    }
  }

  .card-effect 
  {
    animation: card-entry 0.5s forwards;
    transition: all 0.5s ease;
  }

  @keyframes card-entry {
    0% 
    {
      transform: translateY(35%);
    }
    100% 
    {
      transform: translateY(0%);
    }
  }


  .project-layout .image-card:hover .project-image {
    transform: rotate(2deg) scale(1.08);
    transition: transform 0.2s ease;
  }
  
  .info header {
    display: grid;
    grid-template-columns: auto 1fr auto;
  }
`;

export default Projects