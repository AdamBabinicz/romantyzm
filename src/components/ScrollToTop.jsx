import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";
export default function ScrollToTop() {
  const [scrollState, setScrollState] = useState(false);
  const toTop = () => {
    window.scrollTo({ top: 0 });
  };
  window.addEventListener("scroll", () => {
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
  });
  return (
    <ToTop onClick={toTop} scrollState={scrollState}>
      <AiOutlineArrowUp />
    </ToTop>
  );
}

const ToTop = styled.div`
  display: ${({ scrollState }) => (scrollState ? "block" : "none")};
  position: fixed;
  cursor: pointer;
  z-index: 100;
  bottom: 1rem;
  left: 2rem;
  border-radius: 2rem;
  background: linear-gradient(to right, #4979fc, #041be8);
  padding: 1rem 1.15rem;

  @media only screen and (max-width: 768px) {
    left: 1rem;
  }
  svg {
    transition: 0.6s ease-in-out;
    color: white;
    font-size: 1.5rem;
  }
  &:hover {
    svg {
      transform: scale(1.8);
    }
  }
`;
