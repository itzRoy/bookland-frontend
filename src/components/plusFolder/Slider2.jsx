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

import s1 from "../images/slides/bgpictures/bg1.jpeg";
import s2 from "../images/slides/bgpictures/bg2.jpeg";
import s3 from "../images/slides/bgpictures/bg3.jpeg";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Container = styled.div`
`;

const Text = styled.h1`
  font-size: 40px;
  width: fit-content;
  margin: 20px auto;
  font-weight: bold;
`;

const Wrapper = styled.div`
  padding: 30px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Img = styled.img`
  height: 200px;
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    transition: all 0.3s ease-in-out;
  }
`;

const Swiper1 = styled(Swiper)`
  height: 80vh;
  width: 300px;
  justify-self: flex-start;
  &:hover {
    cursor: pointer;
  }
`;
const Swiper2 = styled(Swiper)`
margin-right: 40px;
`;
const Img11 = styled.img`
  height: 100%;
`;
const Slider = () => {
  return (
    <Container>
      <Wrapper>
        <Swiper1
          autoplay={{
            delay: 3000,
          }}
          loop="true"
          direction="vertical"
        >
          <SwiperSlide>
            <Img11 src={s1} />
          </SwiperSlide>
          <SwiperSlide>
            <Img11 src={s2} />
          </SwiperSlide>
          <SwiperSlide>
            <Img11 src={s3} />
          </SwiperSlide>
        </Swiper1>
        <div >
          <Text>Latest Books</Text>
          <Swiper2
            navigation
            spaceBetween={0}
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
                slidesPerView: 5,
              },
            }}
            style={{ paddingBottom: "30px" }}
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
          </Swiper2>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Slider;
