import { Button } from "@material-ui/core";
import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import Img2 from "../images/bg.jpg";

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
  margin-top: 6.7rem;
  width: 100%;
  height: 150vh;
  display: flex;
  /* height: 150vh; */
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${Img2});
  background-size: cover;
  background-position-x: center;
`;

const Wrapper = styled.div`
  position: relative;
  width: 70vw;
  margin: 40px auto;
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  animation: ${SlideFromBottom} 1.7s ease-in-out;
  @media only screen and (max-width: 768px) {
    width: 80vw;
  }
`;

const Title = styled.h1`
  font-size: 4vw;
  font-weight: bold;
  color: #f70814;
`;

const Text = styled.p`
  font-size: 20px;
  line-height: 35px;
  margin-bottom: 10px;
  text-align: center;
  color: white;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
    line-height: 25px;
  }
`;

const ButtonWrapper = styled.div`
  width: fit-content;
`;

const About = () => {
  const navigate = useNavigate();
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
            <ul style={{ textAlign: "center", listStyle: "inside" }}>
              <li>More than 2 million licensed books in 7 languages</li>
              <li>A vast catalog and many categories,</li>
              <li>Simple and intuitive interface and easy search</li>
              <li>A wide selection of payment systems.</li>
            </ul>
          </Text>
          <ButtonWrapper>
            <Button
              variant="contained"
              style={{ background: "red", color: "white" }}
              onClick={() => navigate("/contact")}
            >
              Contact us
            </Button>
          </ButtonWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default About;
