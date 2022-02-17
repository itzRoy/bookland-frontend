import styled, { keyframes } from "styled-components";
// import { Books } from "../data";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Fade = keyframes`
 0%{
        opacity: 0;
    }

    100%{
       opacity: 1;
    }

`;
const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 30px;
  animation: ${Fade} 0.8s ease-in-out;
  @media only screen and (max-width: 568px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BookList = (filters) => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const { category, sort, direction } = filters;

  useEffect(() => {
    let res;

    const getBooks = async () => {
      try {
        if (category) {
          // res = await axios.get("http://localhost:8000/books", {
          //   params: {
          //     category: `${category}`,
          //   },
          res = await axios.get(`http://localhost:8000/books/${id}`);
        } else {
          res = await axios.get("http://localhost:8000/books");
        }
        setBooks(res.data);
        setFilteredBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBooks();

    const filterBooks = () => {
      if (sort === "rating") {
        if (direction === "asc")
          setFilteredBooks(books.sort((a, b) => a.rating - b.rating));
        else setFilteredBooks(books.sort((a, b) => b.rating - a.rating));
      }
      if (sort === "price") {
        if (direction === "asc")
          setFilteredBooks(books.sort((a, b) => a.price - b.price));
        else setFilteredBooks(books.sort((a, b) => b.price - a.price));
      }
      console.log(`Second useEffect finished : + ${filters}`);
      console.log(filters);
      console.log(books);
    };

    filterBooks();

    // console.log(`first useEffect finished : + ${filters}`);
    // console.log(filters);
  }, [category, sort, direction, books]);

  // useEffect(() => {
  //   if (sort === "rating") {
  //     if (direction === "asc")
  //       setFilteredBooks(books.sort((a, b) => a.rating - b.rating));
  //     else setFilteredBooks(books.sort((a, b) => b.rating - a.rating));
  //   }
  //   if (sort === "price") {
  //     if (direction === "asc")
  //       setFilteredBooks(books.sort((a, b) => a.price - b.price));
  //     else setFilteredBooks(books.sort((a, b) => b.price - a.price));
  //   }
  //   console.log(`Second useEffect finished : + ${filters}`);
  //   console.log(filters);
  //   console.log(books);
  // }, [sort, direction, category]);

  // if (sort === "rating") {
  //   if (direction === "asc")
  //     setFilteredBooks(books.sort((a, b) => a.rating - b.rating));
  //   else setFilteredBooks(books.sort((a, b) => b.rating - a.rating));
  // }
  // if (sort === "price") {
  //   if (direction === "asc")
  //     setFilteredBooks(books.sort((a, b) => a.price - b.price));
  //   else setFilteredBooks(books.sort((a, b) => b.price - a.price));
  // }
  // console.log(`Second useEffect finished : + ${filters}`);
  // console.log(filters);
  // console.log(books);

  return (
    <Container>
      {filteredBooks.map((item) => (
        <Link
          to={`/book/${item._id}`}
          style={{ textDecoration: "none" }}
          key={item._id}
        >
          <BookCard item={item} />
        </Link>
      ))}
    </Container>
  );
};

export default BookList;
