import React from "react";
import styled, { keyframes } from "styled-components";
// import Img1 from "../images/bgpictures/bgEdited.jpg";
import Img1 from "../images/slides/background.jpg";
// import Img2 from "../images/slides/bg2edited.png";
import { useNavigate } from "react-router-dom";

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

const SlideFromBottom = keyframes`
 0%{
        transform: translateY(100%);
        opacity: 0;
    }

    100%{
        transform: translateY(0);
        opacity: 1;

    }

`;
const SlideFromTop = keyframes`
 0%{
        transform: translateY(-100%);
        opacity: 0;
    }

    100%{
        transform: translateY(0);
        opacity: 1;

    }

`;

const Container = styled.div`
  position: relative;
  height: 80vh;
  margin-top: 6.7rem;
  display: flex;
  background-image: url(${Img1});
  background-size: cover;
  background-position-x: left;
  @media only screen and (max-width: 768px) {
    height: 60vh;
  }
`;
const Wrapper = styled.div`
  width: 500px;
  margin: 90px 100px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 30px;
  }
`;

const Title = styled.h1`
  animation: ${SlideFromTop} 1.5s ease-in-out;
  font-size: 50px;
  color: black;
  font-family: Helvetica;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin: 20px 0;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

const Paragraph = styled.p`
  animation: ${SlideFromLeft} 1.5s ease-in-out;
  color: #000000;
  font-weight: 500;
  margin: 20px 0 30px;
  font-size: 18px;
  @media only screen and (max-width: 768px) {
    line-height: 30px;
    font-size: 15px;
  }
`;

const Button = styled.button`
  animation: ${SlideFromBottom} 1.5s ease-in-out;
  position: absolute;
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

const MainSlide = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Title>
          The Largest Collection Of
          <span style={{ color: "red", fontFamily: "inherit" }}> Books</span>
        </Title>
        <Paragraph>
          Find your place at bookalnd bookstore, the largest collection of books
          from all categories, find out our latest books and the best sellers
          and order your list of books now
        </Paragraph>
        <Button onClick={() => navigate("books/all")}>Explore Now</Button>
      </Wrapper>
    </Container>
  );
};

export default MainSlide;
