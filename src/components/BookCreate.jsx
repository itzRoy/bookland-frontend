import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SlideFromLeft = keyframes`
  0%{
        transform: translateX(-100%);
        opacity : 0;
    }

    100%{
        transform: translateX(0);
        opacity : 1;

    }
`;
const SlideFromRight = keyframes`
  0%{
        transform: translateX(100%);
         opacity : 0;
    }

    100%{
        transform: translateX(0);
        opacity : 1;
    }
`;

const Container = styled.div`
  width: 60%;
  margin: auto;
`;

const Wrapper = styled.div`
  margin: 20px auto;
  position: relative;
  display: flex;
  align-items: flex-start;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Label = styled.label`
  font-size: 14px;
`;

const Img = styled.img`
  min-height: 300px;
  width: 250px;
  min-width: 250px;
  border: 1px solid black;
  animation: ${SlideFromLeft} 1.5s ease-in-out;
  @media only screen and (max-width: 768px) {
    height: 40vh;
  }
`;

const InfoContainer = styled.form`
  padding: 10px 30px;
  position: relative;
  flex: 1;
  animation: ${SlideFromRight} 1.5s ease-in-out;
  @media only screen and (max-width: 768px) {
    text-align: center;
    * {
      margin: auto;
    }
  }
`;
const Title = styled.input`
  color: #252525;
  font-size: 27px;
  margin-bottom: 10px;
  display: block;
  padding: 3px;
`;
const Author = styled.input`
  font-size: 18px;
  margin-bottom: 10px;
  color: #6b6a6a;
  display: block;
  padding: 3px;
`;
const Year = styled.input`
  font-size: 16px;
  margin-bottom: 10px;
  color: red;
  display: block;
  padding: 3px;
`;

const Category = styled(Year)`
  color: black;
`;

const Description = styled.textarea`
  font-size: 16px;
  margin-bottom: 10px;
  line-height: 25px;
  font-weight: 500;
  display: block;
  width: 100%;
  height: 400px;
  padding: 20px;
  @media only screen and (max-width) {
    font-size: 12px;
  }
`;
const Price = styled.input`
  font-size: 22px;
  margin-bottom: 10px;
  color: red;
  display: block;
  padding: 3px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: fit-content;
  margin-bottom: 10px;
`;

const RatingNumber = styled.input`
  font-size: 15px;
  font-weight: normal;
  padding: 5px;
  width: 60px;
  border: none;
  border-bottom: 1px solid black;
`;

const Input = styled.input``;

const Button = styled.button`
  padding: 6px 12px;
  margin: 15px 0;
  border: none;
  color: white;
  display: block;
  font-weight: 500;
  background: #000701;
  cursor: pointer;
  font-size: 15px;
  border-radius: 20px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background: #141514;
  }
  @media only screen and (max-width: 768px) {
    margin: 15px auto;
  }
`;

const UploadButton = styled(Button)`
  background: #d00303;
  font-size: 13px;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: #ee0202;
  }
`;

const BookCreate = () => {
  toast.configure();
  const [book, setBook] = useState({});
  const [image, setImage] = useState();
  const [imageUrl, setImageUrl] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/book/create", null, {
        params: {
          ...book,
        },
      });
      toast.success("the book has been added successfully");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setBook({
      ...book,
      [e.target.name]: value,
    });
  };

  const handleImage = (e) => {
    e.preventDefault();
    let img = e.target.files[0];
    setImage(img);
  };

  const UploadImage = async () => {
    if (image) {
      const fd = new FormData();
      fd.append("image", image, image.name);
      await axios
        .post(
          "https://api.imgbb.com/1/upload?key=887019bd46903b997b64a8c12524104f",
          fd
        )
        .then((res) => {
          let img = res.data.data.url;
          setImageUrl(img);
          setBook({
            ...book,
            ["img"]: img,
          });
        });
    } else {
      toast.warn("Please choose an image before upload");
    }
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Img src={imageUrl} alt="Upload book image" />
          <InfoContainer onSubmit={handleSubmit}>
            <Label>Book title :</Label>
            <Title onBlur={handleChange} name="title" required />
            <Label>Book author :</Label>
            <Author onBlur={(e) => handleChange(e)} name="author" required />
            <RatingContainer>
              <Label>Rating :</Label>
              <RatingNumber
                onBlur={(e) => handleChange(e)}
                name="rating"
                type="number"
                min={0}
                max={5}
                step={0.01}
                required
              />
            </RatingContainer>
            <Label>Book year :</Label>
            <Year
              onBlur={(e) => handleChange(e)}
              name="year"
              required
              type="number"
              min={1900}
              max={2300}
            />
            <Label>Book description :</Label>
            <Description onBlur={(e) => handleChange(e)} name="desc" required />
            <Label>Book category :</Label>
            <Category
              onBlur={(e) => handleChange(e)}
              name="category"
              required
            />
            <Label>Book price :</Label>
            <Price
              onBlur={(e) => handleChange(e)}
              name="price"
              required
              type="number"
              min={0}
              step={0.01}
            />
            <Input type="file" onChange={handleImage} required />
            <UploadButton onClick={UploadImage} type="button">
              Upload Image
            </UploadButton>
            <Button type="submit">Create Book</Button>
          </InfoContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default BookCreate;
