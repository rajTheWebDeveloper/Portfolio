import React,{useContext, useState} from 'react'
import navLinks from '../helpers/navLinks'
import styled from 'styled-components'
import { HostContext } from '../context/HostContext'

const Navbar = () => {
    let {index,setIndex}=useContext(HostContext)

    let handleNavClick=(idx)=>
    {
        setIndex(idx)
    }
  return (
    <StyledNavbar>
      <nav className="h-screen">
          <div className="logo min-h-[70px] flex justify-center items-center">
            <h2 className="text-white text-center text-2xl font-extrabold">
              <a href="#hero">
                R<span className="text-[#bd5fff] text-3xl dont-flip">.</span>
              </a>
            </h2>
          </div>
          <ul>
            {navLinks.map((items) => {
              let { id, name, url } = items;
              return (
                <a
                  href={url}
                  className={`tracking-wider cursor-pointer text-[0.95rem] md:text-base ${
                    id === index ? "special" : null
                  }`}
                  key={id}
                  onClick={() => handleNavClick(id)}
                >
                  {name}
                </a>
              );
            })}
          </ul>
      </nav>
    </StyledNavbar>
  );
}

let StyledNavbar = styled.section`
  nav {
    height: 100vh;
    background-color: #080808;
    width: 50px;
    display: grid;
    justify-content: center;
    overflow: hidden;
    grid-template-rows: 70px 11fr;
    position: fixed;
    top:0;
    left: 0;
    z-index: 50;
  }
  ul {
    height: 450px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
  ul a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    transform-origin: center;
    transform: rotate(90deg);
    position: relative;
  }
  ul a:hover {
    background-color: #bd5fff;
  }
  .special {
    background-color: #bd5fff;
  }
  /* .special:hover::after {
    content: "";
    width: 100%;
    height: 33px;
    background-color: #bd5fff;
    position: absolute;
    top:0;
    left: 0;
  } */

  @media (max-width: 768px) {
    nav {
      width: 40px;
    }
    ul 
    {
        height: 380px;
    }
    ul a 
    {
        padding: 0 1rem;
    }
  }
`;

export default Navbar