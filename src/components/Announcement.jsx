import styled from "styled-components";

const Container = styled.div`
  height: 20px;
  background-color: #e50914;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>BUY 2 GET 1 FREE - FREE SHIPPING</Container>;
};

export default Announcement;
