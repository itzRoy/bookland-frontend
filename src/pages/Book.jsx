import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Rating from "@mui/material/Rating";
import axios from "axios";
import { useLocation } from "react-router-dom";

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
  margin-top: 6.9rem;
  min-height: 80vh;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  padding: 50px 0;
  position: relative;
  display: flex;
  align-items: flex-start;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Img = styled.img`
  height: 60vh;
  animation: ${SlideFromLeft} 1.7s ease-in-out;
  @media only screen and (max-width: 768px) {
    height: 40vh;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 10px 30px;
  position: relative;
  animation: ${SlideFromRight} 1.7s ease-in-out;
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
  font-size: 16px;
  margin-bottom: 10px;
  line-height: 25px;
  font-weight: 500;
  @media only screen and (max-width) {
    font-size: 12px;
  }
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
  padding: 5px;
`;

const Book = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [book, setBook] = useState({});

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:8000/book/" + id);
        setBook(res.data);
      } catch {}
    };
    getBook();
  }, []);

  return (
    <>
      <Container>
        <Wrapper>
          <Img src={book.img} />
          <InfoContainer>
            <Title>{book.title}</Title>
            <Author>by {book.author}</Author>
            <RatingContainer>
              <Rating value={`${book.rating}`} precision={0.01} readOnly />
              <RatingNumber>{book.rating}</RatingNumber>
            </RatingContainer>
            <Year>{book.year}</Year>
            <Description>{book.desc}</Description>
            <Price>{book.price}$</Price>
          </InfoContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default Book;
