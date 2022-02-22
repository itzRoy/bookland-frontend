import React, { useState } from "react";
import styled from "styled-components";
import BooksList from "../components/BooksList";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AdminButton from "../components/Button/AdminButton";

const Container = styled.div`
  margin: 9rem auto 0;
  margin-top: 9rem;
  width: 85%;
  min-height: 60vh;
`;

const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Select = styled.select`
  padding: 7px;
  font-size: 14px;
  background: #e9e9ed;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-in-out;
    background: #b1b1b1;
  }
`;

const Option = styled.option`
  padding: 7px;
  background: white;
`;

const Books = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let category = location.pathname.split("/")[2];

  const [filter, setFilter] = useState({
    category: category,
    sort: "date",
    direction: "desc",
  });

  useEffect(() => {
    setFilter({
      ...filter,
      ["category"]: category,
    });
  }, [category]);

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    });
  };
  const navigation = (e) => {
    navigate(`/books/${e.target.value}`);
  };
  return (
    <>
      <Container>
        <SelectWrapper>
          <Select
            name="category"
            onChange={(e) => {
              handleFilter(e);
              navigation(e);
            }}
          >
            <Option value="all" selected={category === "all"}>
              All Categories
            </Option>
            <Option value="adventure" selected={category === "adventure"}>
              Adventure
            </Option>
            <Option value="thriller" selected={category === "thriller"}>
              Thriller
            </Option>
            <Option value="horror" selected={category === "horror"}>
              Horror
            </Option>
            <Option value="romance" selected={category === "romance"}>
              Romance
            </Option>
            <Option value="mystery" selected={category === "mystery"}>
              Mystery
            </Option>
            <Option value="fiction" selected={category === "fiction"}>
              Fiction
            </Option>
            <Option value="history" selected={category === "history"}>
              History
            </Option>
          </Select>
          <div>
            <Select name="sort" onChange={handleFilter}>
              <Option value="date">Sort by date</Option>
              <Option value="price">Sort by price</Option>
              <Option value="rating">Sort by rating</Option>
            </Select>
            <Select name="direction" onChange={handleFilter}>
              <Option value="desc">Dsc</Option>
              <Option value="asc">Asc</Option>
            </Select>
          </div>
        </SelectWrapper>
        <BooksList {...filter} />
      </Container>
      <a href="/login">
        <AdminButton />
      </a>
    </>
  );
};

export default Books;
