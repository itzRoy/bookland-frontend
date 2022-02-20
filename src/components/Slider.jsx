import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";

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
  max-width: 160px;
  margin-top: 10px;
  position: relative;
  border-bottom: 5px solid #ff0707;
  border-top: 5px solid #ff0707;
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 20px 0;
  }
`;

const Slider = () => {
  const [latestBooks, setLatestBooks] = useState([]);
  useEffect(() => {
    let res;
    const getLatestBooks = async () => {
      try {
        res = await axios.get(`http://localhost:8000/latestbooks/`);
        setLatestBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getLatestBooks();
  }, []);

  return (
    <Container>
      <Text>Latest Books</Text>
      <Wrapper>
        <Swiper
          initialSlide={4}
          autoplay={{ delay: 500, disableOnInteraction: false }}
          loop={true}
          speed={2000}
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
            padding: "30px 30px 40px 30px",
            width: "100%",
            borderRight: "6px solid red",
            borderLeft: "6px solid red",
          }}
        >
          {latestBooks.map((book) => (
            <SwiperSlide>
              <Link to={`/book/${book._id}`} key={book._id}>
                <Img src={book.img} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </Container>
  );
};

export default Slider;
