import styled, { keyframes } from "styled-components";
import { Books } from "../data";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";
// import Book from "../pages/Book";

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

const BookList = () => {
  return (
    <Container>
      {Books.map((item) => (
        <Link to={`/books/${item.id}`} style={{ textDecoration: "none" }}>
          <BookCard item={item} key={item.id} />
        </Link>
      ))}
    </Container>
  );
};

export default BookList;
