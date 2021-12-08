import React, { useEffect, useState } from "react";
import { BiDoorOpen } from "react-icons/bi";
import {
  HeroSection,
  Heading,
  HeroText,
  ButtonContainer,
  HeroButton,
  ImageCharacter,
  HeroImage,
  HeroContent,
  ButtonWrapper,
  CharacterContainer,
} from "./HeroStyles";
import { useInView } from "react-intersection-observer";
import Modal from "../Modal/Modal";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const dragConstraints = { top: 0, bottom: 0, right: 0, left: 0 };

  const toggleModal = () => {
    if (!showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    setShowModal(!showModal);
  };

  const variants = {
    hover: {
      y: 15,
      transition: {
        yoyo: Infinity,
        duration: 0.6,
      },
    },
  };
  const { ref, inView } = useInView({
    rootMargin: "-100px",
  });

  useEffect(() => {
    console.log(inView);
  }, [inView]);

  return (
    <>
      <HeroSection id="hero">
        <HeroImage className="pattern" src="./images/7.jpg" />
        <HeroImage className="guy" src="./images/6.png" />
        <CharacterContainer>
          <ImageCharacter
            dragConstraints={dragConstraints}
            className="one"
            src="./images/2.png"
          />
          <ImageCharacter
            dragConstraints={dragConstraints}
            className="two"
            src="./images/8.png"
          />
          <ImageCharacter
            variants={variants}
            whileHover="hover"
            drag
            dragConstraints={dragConstraints}
            className="three"
            src="./images/9.png"
          />
          <ImageCharacter
            dragConstraints={dragConstraints}
            className="four"
            src="./images/12.png"
          />
        </CharacterContainer>
        <HeroContent>
          <Heading>Romantyzm</Heading>
          <HeroText>
            szeroki nurt w kulturze, który dał nazwę epoce w historii sztuki i
            historii literatury trwającej od lat 90. XVIII wieku do lat 40. XIX
            wieku.
          </HeroText>
          <ButtonContainer ref={ref}>
            <ButtonWrapper>
              <HeroButton
                onClick={toggleModal}
                className={inView ? "" : "corner"}
              >
                {inView ? (
                  <>Więcej</>
                ) : (
                  <BiDoorOpen color="white" size="2.3rem" />
                )}
              </HeroButton>
            </ButtonWrapper>
          </ButtonContainer>
        </HeroContent>
      </HeroSection>
      <Modal showModal={showModal} toggleModal={toggleModal} />
    </>
  );
};

export default Hero;
