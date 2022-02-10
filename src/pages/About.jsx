import { Button } from "@material-ui/core";
import React from "react";
import styled, { keyframes } from "styled-components";
import Img1 from "../images/bgpictures/about.jpg";

const SlideFromBottom = keyframes`
 0%{
        transform: translateY(20%);
        opacity: 0;
    }

    100%{
        transform: translateY(0);
        opacity: 1;

    }

`;

const Container = styled.div`
  margin-top: 6.8rem;
  width: 100%;
  height: 150vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${Img1});
  background-size: cover;
  background-position-x: center;
`;

const Wrapper = styled.div`
  position: relative;
  top: 50px;
  width: 45vw;
  margin: auto;
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  animation: ${SlideFromBottom} 1s ease-in-out;
  @media only screen and (max-width: 768px) {
    width: 80vw;
  }
`;

const Title = styled.h1`
  font-size: 4vw;
  font-weight: bold;
  color: white;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 35px;
  margin-bottom: 10px;
  text-align: center;
  color: white;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 30px;
  }
`;

const ButtonWrapper = styled.div`
  width: fit-content;
`;

const About = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>ABOUT US</Title>
          <Text>
            BOOKLAND is the largest online bookstore based in Lebanon. <br /> We
            have a broad collection of books, different categories, free
            shipping and no additional fees included. <br /> Our team is ready
            to ship your order wherever you are as fast as possible. <br />
            Choose your favorite book and take advantage of our monthly sales.
            <br /> If you have any questions feel free to contact us.
            <br /> One of Bookland’s main goals is to make the purchase process
            as quick and easy as possible. Due to an extensive category list and
            an intuitive interface, you can pick up content in minutes. And in a
            couple of moments, after using the convenient payment and content
            downloading system, you can start a fascinating reading. <br />
            Bookland provides users a bunch of opportunities:
            <ul style={{ textAlign: "left", marginLeft: "25%" }}>
              <li>More than 2 million licensed books in 7 languages</li>
              <li>A vast catalog and many categories,</li>
              <li>Simple and intuitive interface and easy search</li>
              <li>A wide selection of payment systems.</li>
            </ul>
          </Text>
          <ButtonWrapper>
            <Button variant="contained" color="secondary">
              Contact us
            </Button>
          </ButtonWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default About;
