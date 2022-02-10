import React from "react";
import styled, { keyframes } from "styled-components";
import { Books } from "../data";
// import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
// import Typography from "@mui/material/Typography";

const item = Books[1];

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
  width: 80%;
  margin: 40px auto;
  margin-top: 9rem;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60vh;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Img = styled.img`
  height: 100%;
  animation: ${SlideFromLeft} 0.6s ease-in-out;
  @media only screen and (max-width: 768px) {
    height: 70%;
  }
`;

const InfoContainer = styled.div`
  padding: 10px 30px;
  position: relative;
  height: 100%;
  animation: ${SlideFromRight} 1s ease-in-out;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;
const Title = styled.h1`
  color: #252525;
  font-size: 30px;
  margin-bottom: 10px;
`;
const Author = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  color: #6b6a6a;
`;
const Year = styled.h3`
  font-size: 16px;
  margin: 10px 0;
  color: red;
`;
const Description = styled.h3`
  font-size: 15px;
  margin-bottom: 10px;
  line-height: 25px;
  font-weight: 500;
`;
const Price = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
  color: red;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: fit-content;
  @media only screen and (max-width: 768px) {
    margin: auto;
  }
`;
const RatingNumber = styled.h3`
  font-size: 15px;
  font-weight: normal;
`;

const Book = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Img src={item.img} />
          <InfoContainer>
            <Title>{item.title}</Title>
            <Author>by {item.author}</Author>
            <RatingContainer>
              <Rating value={item.rating} precision={0.1} readOnly />
              <RatingNumber>{item.rating}</RatingNumber>
            </RatingContainer>
            <Year>{item.year}</Year>
            <Description>{item.desc}</Description>
            <Price>{item.price}$</Price>
          </InfoContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default Book;
