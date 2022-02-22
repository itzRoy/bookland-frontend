import styled, { keyframes } from "styled-components";
// import { Books } from "../data";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

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
  animation: ${Fade} 1.2s ease-in-out;
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
  const [getBooks, setGetBooks] = useState(false);

  useEffect(() => {
    let res;
    setGetBooks(false);
    const getBooks = async () => {
      if (id === "search") {
        let searchType = location.pathname.split("/")[3];
        let search = location.pathname.split("/")[4];
        try {
          res = await axios.get(
            `http://localhost:8000/books/search/${searchType}/${search}`
          );
          setBooks(res.data);
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          res = await axios.get(`http://localhost:8000/books/${id}`);
          setBooks(res.data);
        } catch (err) {
          console.log(err);
        }
      }
      setGetBooks(true);
    };
    getBooks();
  }, [category, location.pathname]);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  useEffect(() => {
    if (sort === "rating") {
      if (direction === "asc")
        setFilteredBooks((prev) =>
          [...prev].sort((a, b) => a.rating - b.rating)
        );
      else
        setFilteredBooks((prev) =>
          [...prev].sort((a, b) => b.rating - a.rating)
        );
    }
    if (sort === "price") {
      if (direction === "asc")
        setFilteredBooks((prev) => [...prev].sort((a, b) => a.price - b.price));
      else
        setFilteredBooks((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
    if (sort === "date") {
      if (direction === "asc")
        setFilteredBooks((prev) => [...prev].sort((a, b) => a.year - b.year));
      else
        setFilteredBooks((prev) => [...prev].sort((a, b) => b.year - a.year));
    }
  }, [books, sort, direction, category]);

  return (
    <>
      {!getBooks ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", margin: "100px" }}
        >
          <CircularProgress style={{ width: "80px" }} />
        </Box>
      ) : (
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
      )}
    </>
  );
};

export default BookList;
