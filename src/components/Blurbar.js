import React,{useRef, useState} from 'react'
import styled from 'styled-components'
import { FaGithub } from "react-icons/fa";
import resumePdf from '../assets/Raj_Resume.pdf'

const Blurbar = () => {

  let downloadFileRef=useRef()

  let handleDownload=()=>
  {
    downloadFileRef.current.click()
  }
  return (
    <StyledBlurbar>
      <nav className="flex items-center justify-between px-4 md:px-12">
        <header className="ml-[40px] md:ml-[50px]">
          <a
            href="https://github.com/rajTheWebDeveloper"
            target="_blank"
            className="cursor-pointer"
          >
            <FaGithub size={24} />
          </a>
        </header>
        <footer>
          <button
            className={`text-md md:text-lg px-4 md:px-6 py-2 border border-[#bd5fff] text-[#bd5fff] rounded-md`}
            onClick={handleDownload} // Trigger download on button click
          >
            My resume
          </button>
          <a
            href={resumePdf}
            ref={downloadFileRef}
            download={resumePdf}
            target='_blank'
            style={{ display: "none" }}
          >
            Download
          </a>
        </footer>
      </nav>
    </StyledBlurbar>
  );
}


let StyledBlurbar = styled.section`
  nav {
    height: 70px;
    width: 100vw;
    background-color: #111111;
    opacity: 1;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
  }

  button {
    position: relative;
    overflow: hidden;
    z-index: 40;
  }
  button:hover {
    color: white;
  }

  button:hover::after {
    content: "";
    color: white;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #bd5fff;
    top: 0;
    left: 0;
    animation: animate 0.8s forwards;
    z-index: -20;
  }

  @keyframes animate {
    0% {
      transform: translateX(-100%);
      color: #bd5fff;
    }
    100% {
      transform: translateX(0%);
    }
  }
`;

export default Blurbar