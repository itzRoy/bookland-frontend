import React, { useState } from "react";
import styled from "styled-components";
import { /*Info,*/ Search } from "@material-ui/icons";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/MenuOpenTwoTone";
import Img from "../images/Logo.png";
import { Link } from "react-router-dom";
import Announcement from "./Announcement";

const Container = styled.div`
  position: fixed;
  z-index: 99;
  width: 100%;
  top: 0;
  background: #ffffff;
  @media only screen and (max-width: 768px) {
    backdrop-filter: blur(7px);
    background: #ffffffbc;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  padding: 4px;
  display: flex;
  gap: 100px;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    display: block;
    border-bottom: 2px solid #cac8c9;
    > div {
      margin-bottom: 5px;
    }
    > div:first-child {
      position: relative;
    }
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 40px;
  margin-right: 20px;
  pointer-events: none;
`;

const LogoName = styled.h1`
  font-size: 28px;
  font-weight: bold;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  height: 28px;
`;

const Select = styled.select`
  padding-left: 15px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  color: white;
  background: #000000c7;
  border-radius: 10px 0 0 10px;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: #000000;
  }
`;
const Option = styled.option`
  padding: 20px;
  background: white;
  color: black;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;
const Input = styled.input`
  position: absolute;
  background: #a9a9ac;
  background: transparent;
  color: white;
  font-size: 16px;
  height: 100%;
  width: 100%;
  padding: 5px 35px 5px 10px;
  border: none;
  border-radius: 0 50px 50px 0;
  border: 2px solid #282828;
  color: black;
  &:focus {
    transition: all 0.3s ease-in-out;
    border-color: #dc1515;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 5px;
  border: none;
  cursor: pointer;
  color: #000000c7;
  background-color: transparent;
  &:hover {
    transition: all 0.3s ease-in-out;
    color: #000000;
  }
`;
const Nav = styled.div`
  position: relative;
  background: #282828;
  @media only screen and (max-width: 1100px) {
    margin-top: 3px;
  }
  @media only screen and (max-width: 768px) {
    position: fixed;
    background: #602656;
    height: 100vh;
    width: 220px;
    top: 0;
    right: ${(props) => (props.Show ? "0px" : "-220px")};
    opacity: ${(props) => (props.Show ? "1" : "0.5")};
    z-index: 3;
    transition: 1s;
  }
`;

const List = styled.ul`
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 768px) {
    margin-top: 60px;
    display: block;
  }
`;

const ListItem = styled(Link)`
  text-decoration: none;
  list-style: none;
  margin-top: 2px;
  padding: 8px 12px;
  color: white;
  font-size: 16px;
  &::after {
    content: "";
    width: 0%;
    height: 2px;
    background: white;
    display: block;
    margin: 2px auto;
  }
  &:hover::after {
    transition: all 0.3s ease-in-out;
    width: 100%;
  }
  &:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    display: block;
    width: fit-content;
    margin: 40px auto;
    color: #ffffff;
  }
`;

const MenuToggle = styled(Button)`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  margin: 10px;
  top: 0;
  left: 0;
  border: none;
  cursor: pointer;
  color: white;
  background-color: transparent;
  &:hover {
    transition: all 0.3s ease-in-out;
    color: black;
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
const Navbar = () => {
  const [showSidebar, setSowSidebar] = useState(false);
  const [search, setSearch] = useState("title, author");
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  return (
    <>
      <Container>
        <Announcement />
        <Wrapper>
          <Left>
            <Logo src={Img} />
            <LogoName>
              <span style={{ color: "#F21B3F" }}>BOOK</span>
              <span style={{ color: "#0BB5CC" }}>LAND</span>
            </LogoName>
            <MenuToggle onClick={() => setSowSidebar(!showSidebar)}>
              <MenuIcon
                style={{
                  fontSize: 35,
                }}
              />
            </MenuToggle>
          </Left>
          <Right>
            <Select onChange={(e) => handleChange(e)}>
              <Option selected hidden>
                Search by
              </Option>
              <Option value="title, author">title, author</Option>
              <Option value="title">title</Option>
              <Option value="author">author</Option>
            </Select>
            <SearchContainer>
              <Input placeholder={`search by ${search} `} />
              <Button>
                <Search style={{ color: "inherit", fontSize: 28 }} />
              </Button>
            </SearchContainer>
          </Right>
        </Wrapper>
        <Nav Show={showSidebar}>
          <CloseButton onClick={() => setSowSidebar(!showSidebar)}>
            <CloseIcon style={{ fontSize: 26 }} />
          </CloseButton>
          <List>
            <ListItem to="/">HOME</ListItem>
            <ListItem to="/books">BOOKS</ListItem>
            <ListItem to="/about">ABOUT</ListItem>
            <ListItem to="/contact">CONTACT</ListItem>
          </List>
        </Nav>
      </Container>
    </>
  );
};
export default Navbar;
