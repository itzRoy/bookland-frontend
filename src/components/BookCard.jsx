import styled from "styled-components";
import VisibilityIcon from "@material-ui/icons/Visibility";

const Container = styled.div`
  width: 150px;
  height: 220px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Card = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent ;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const InfoContainer = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
`;

const BookInfo = styled.div`
  margin: 15px 5px;
`;

const Title = styled.h1`
  color: black;
  font-size: 15px;
  margin-bottom: 6px;
`;
const Author = styled.h2`
  font-size: 14px;
  color: #666262;
  margin-bottom: 6px;
`;

const Price = styled.h2`
  font-size: 14px;
  color: red;
`;

const BookCard = ({ item }) => {
  return (
    <>
      <Container>
        <Image src={item.img} alt={item.title} />
        <Card>
          <Icon>
            <VisibilityIcon style={{ color: "#ff0000fa", fontSize: "30px" }} />
          </Icon>
        </Card>
      </Container>
      <InfoContainer>
        <BookInfo>
          <Title>{item.title}</Title>
          <Author>by {item.author}</Author>
          <Price>${item.price}</Price>
        </BookInfo>
      </InfoContainer>
    </>
  );
};

export default BookCard;
