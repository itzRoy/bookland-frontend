import React, { useState } from "react";
import styled from "styled-components";
import { Search } from "@material-ui/icons";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/MenuOpenTwoTone";
import Img from "../images/Logo.png";
import { Link } from "react-router-dom";
import Announcement from "./Announcement";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  z-index: 99;
  width: 100%;
  top: 0;
  background: #ffffffb9;
  backdrop-filter: blur(7px);

  @media only screen and (max-width: 768px) {
    backdrop-filter: blur(7px);
    background: #ffffffbc;
    border-bottom: 2px solid #cac8c9;
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
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 20px;
  pointer-events: none;
  cursor: pointer;
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

const SearchContainer = styled.form`
  position: relative;
  width: 60%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
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
  background: #161616;
  /* background: #0d0c22; */

  @media only screen and (max-width: 1100px) {
    margin-top: 3px;
  }
  @media only screen and (max-width: 768px) {
    position: fixed;
    background: #602656;
    background-color: #e50914;
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
  padding: 7px 12px;
  color: white;
  font-size: 15px;
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
    font-weight: 500;
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
    transition: all 0.6s ease-in-out;
    color: black;
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
const Navbar = ({ admin }) => {
  const navigate = useNavigate();
  const [showSidebar, setSowSidebar] = useState(false);
  const [searchType, setSearchType] = useState("any");
  const [search, setSearch] = useState();
  const handleChange = (e) => {
    e.preventDefault();
    setSearchType(e.target.value);
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) navigate(`books/search/${searchType}/${search}`);
  };

  return (
    <>
      <Container>
        <Announcement />
        <Wrapper>
          <Left>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Logo src={Img} />
            </Link>
            <LogoName>
              <span style={{ color: "#161616" }}>BOOK</span>
              <span style={{ color: "#e50914" }}>LAND</span>
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
              <Option value="any">title, author</Option>
              <Option value="title">title</Option>
              <Option value="author">author</Option>
            </Select>
            <SearchContainer onSubmit={handleSubmit}>
              <Input
                placeholder={
                  searchType === "any" ? "title, author" : searchType
                }
                onChange={handleSearchChange}
              />
              <Button type="submit">
                <Search style={{ color: "inherit", fontSize: 28 }} />
              </Button>
            </SearchContainer>
          </Right>
        </Wrapper>
        <Nav Show={showSidebar}>
          <CloseButton onClick={() => setSowSidebar(!showSidebar)}>
            <CloseIcon style={{ fontSize: 32 }} />
          </CloseButton>
          <List>
            <ListItem to="/">HOME</ListItem>
            <ListItem to="/books/all">BOOKS</ListItem>
            <ListItem to="/about">ABOUT</ListItem>
            <ListItem to="/contact">CONTACT</ListItem>
            {admin && <ListItem to="/admin">ADMIN</ListItem>}
          </List>
        </Nav>
      </Container>
    </>
  );
};
export default Navbar;
