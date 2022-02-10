import React from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";

import Img1 from "../images/bsbooks/bs1.jpg";
import Img2 from "../images/bsbooks/bs2.jpg";
import Img3 from "../images/bsbooks/bs3.jpg";
import Img4 from "../images/bsbooks/bs4.jpg";
import Img5 from "../images/bsbooks/bs5.jpg";
import Img6 from "../images/bsbooks/bs6.jpg";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Container = styled.div``;

const Text = styled.h1`
  font-size: 40px;
  width: fit-content;
  margin: 50px auto;
  font-weight: bold;
  padding-bottom: 10px;
  color: #242424;
  border-bottom: 5px solid red;
  @media only screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  text-align: center;
`;

const Img = styled.img`
  height: 240px;
  margin-top: 10px;
  border-bottom: 5px solid #ff0707;
  border-top: 5px solid #550476;
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 20px 0;
  }
`;

const Slider = () => {
  return (
    <Container>
      <Text>Latest Books</Text>
      <Wrapper>
        <Swiper
          navigation
          spaceBetween={100}
          slidesPerView={1}
          pagination={{ clickable: false, dynamicBullets: false }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 3,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 4,
            },
          }}
          style={{
            paddingBottom: "30px",
            paddingLeft: "50px",
            paddingRight: "50px",
            width: "100%",
          }}
        >
          <SwiperSlide>
            <Img src={Img1} />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={Img2} />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={Img3} />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={Img4} />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={Img5} />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={Img6} />
          </SwiperSlide>
        </Swiper>
      </Wrapper>
    </Container>
  );
};

export default Slider;
