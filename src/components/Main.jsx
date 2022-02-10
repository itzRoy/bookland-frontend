import React from "react";
import styled, { keyframes } from "styled-components";
import Img1 from "../images/bgpictures/bgEdited.jpg";
import s1 from "../images/slides/bg1.jpg";
import s2 from "../images/slides/bg2.jpg";
import s3 from "../images/slides/bg3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper

SwiperCore.use(Autoplay);

const SlideFromLeft = keyframes`
  0%{
        transform: translateX(-100%);
        opacity : 0;
    }

    100%{
        transform: translateX(0);
        opacity : 1;

    }
`;
const SlideFromRight = keyframes`
  0%{
        transform: translateX(100%);
         opacity : 0;
    }

    100%{
        transform: translateX(0);
        opacity : 1;
    }
`;

const Container = styled.div`
  width: 100%;
  height: 90vh;
  margin-top: 6.8rem;
  display: flex;
  /* background-image: url(${Img1}); */
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(4, 9, 30, 0.5)),
    url(${Img1}); */
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${Img1});
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
`;
const Wrapper = styled.div`
  position: relative;
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

const TitleWrapper = styled.div`
  animation: ${SlideFromLeft} 1s ease-in-out;
  @media only screen and (max-width: 1100px) {
    text-align: center;
    width: 70%;
  }
`;
const Title = styled.h1`
  font-size: 3.4vw;
  font-weight: bold;
  line-height: 100px;
  color: white;
  text-shadow: 1px 1px 1px #000000;
  @media only screen and (max-width: 1100px) {
    font-size: 35px;
    line-height: 60px;
    margin-bottom: 25px;
    span {
      margin: 0 !important;
    }
    br {
      display: none;
    }
  }
`;

const SwiperContainer = styled(Swiper)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  /* width: 30vw;
  height: 45vw; */
  margin: 0;
  border-radius: 50px;
  animation: ${SlideFromRight} 1s ease-in-out;

  @media only screen and (max-width: 1100px) {
    /* height: 35vw; */
    width: 75vw;
  }
`;
const Button = styled.button`
  position: absolute;
  z-index: 3;
  padding: 8px 18px;
  border: none;
  color: white;
  background: #e50914;
  cursor: pointer;
  font-size: 16px;
  border-radius: 20px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background: #b50303;
  }
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const Img = styled.img`
  width: 100%;
`;
const MainSlide = () => {
  return (
    <Container>
      <Wrapper>
        <TitleWrapper>
          <Title>
            The Largest <br />
            <span style={{ marginLeft: "100px" }}>Collection</span> <br />
            <span style={{ marginLeft: "170px" }}>
              Of <span style={{ color: "red" }}> Books</span>
            </span>
          </Title>
        </TitleWrapper>

        <SwiperContainer
          autoplay={{
            delay: 3000,
          }}
          loop="true"
        >
          <SwiperSlide>
            <Img src={s1} />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={s2} />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={s3} />
          </SwiperSlide>
          <Button>Explore Now</Button>
        </SwiperContainer>
      </Wrapper>
    </Container>
  );
};

export default MainSlide;
