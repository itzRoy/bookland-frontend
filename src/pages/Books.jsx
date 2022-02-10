import React from "react";
import styled from "styled-components";
import BooksList from "../components/BooksList";

const Container = styled.div`
  margin: 40px auto;
  margin-top: 9rem;
  width: 85%;
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
  return (
    <>
      <Container>
        <SelectWrapper>
          <Select>
            <Option hidden selected>
              All Categories
            </Option>
            <Option>Action</Option>
            <Option>Comedy</Option>
            <Option>Drama</Option>
            <Option>Horror</Option>
            <Option>Mystery</Option>
            <Option>Thriller</Option>
          </Select>
          <Select>
            <Option selected>Sort by date</Option>
            <Option>Sort by price</Option>
            <Option>Sort by rating</Option>
          </Select>
        </SelectWrapper>
        <BooksList />
      </Container>
    </>
  );
};

export default Books;
