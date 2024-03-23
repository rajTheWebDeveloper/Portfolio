import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";

const TypeAnim = () => {
  return (
    <StyledTypeAnim>
      <TypeAnimation
        sequence={[
          500,
          // Same substring at the start will only be typed out once, initially
          "Hi, I'm Raj",
          5000, // wait 1s before replacing "Mice" with "Hamsters"
        ]}
        wrapper="span"
        cursor={false}
        speed={1}
        //   style={{ fontSize: "2em", display: "inline-block", fontSize:"1.5rem"}}
        className="main-text text-6xl lg:text-8xl font-extrabold text-[#ebecf3] mb-3 cursor"
        repeat={Infinity}
      />
    </StyledTypeAnim>
  );
};


let StyledTypeAnim=styled.section` 




`

export default TypeAnim;
