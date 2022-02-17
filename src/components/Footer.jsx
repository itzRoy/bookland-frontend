import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  background: #090808;
`;

const Wrapper = styled.div`
  display: flex;
  width: 75%;
  margin: auto;
  padding: 8px 0;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Left = styled.div`
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Logo = styled.h2``;

const Desc = styled.p`
  font-size: 14px;
  margin: 10px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Title = styled.h2``;

const Right = styled.div`
  padding: 12px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const ContanctContainer = styled.div`
  margin: 10px 0;
`;

const ContactItem = styled.div`
  margin-bottom: 4px;
  display: flex;
  align-items: center;
`;

const Details = styled.p`
  font-size: 14px;
`;

const Payment = styled.img``;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            Book<span style={{ color: "red" }}>Land</span>
          </Logo>
          <Desc>
            BookLand is the best book store in the Middle east, we have the
            biggest collection of books from all categories. <br />
            Our social media accounts :
          </Desc>
          <SocialContainer>
            <SocialIcon color="#01236f">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="#c01717">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="#1289e4">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="#d00221">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Right>
          <Title>Contact</Title>
          <ContanctContainer>
            <ContactItem>
              <Room style={{ marginRight: "10px", color: "red" }} />
              <Details> Lebanon - Mina Mar Elias Street </Details>
            </ContactItem>
            <ContactItem>
              <Phone style={{ marginRight: "10px", color: "red" }} />
              <Details> +961 76 593464</Details>
            </ContactItem>
            <ContactItem>
              <MailOutline style={{ marginRight: "10px", color: "red" }} />
              <Details> bookland@business.com</Details>
            </ContactItem>
          </ContanctContainer>
          <Payment src="https://i.ibb.co/y04DS30/payment.png" />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
