import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import { useLocation } from "react-router-dom";
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
  width: 80%;
  margin: 9rem auto 6rem;
`;

const Wrapper = styled.div`
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
  height: 60vh;
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
  font-size: 30px;
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
  width: 70%;
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
  width: 40px;
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
    font-size: 13px;
    margin: 15px auto;
  }
`;

const UploadButton = styled(Button)`
  background: #d00303;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: #ee0202;
  }
`;

const BookEdit = () => {
  const location = useLocation();
  toast.configure();
  const id = location.pathname.split("/")[3];
  const [book, setBook] = useState({});
  const [updates, setUpdates] = useState();
  const [image, setImage] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:8000/book/" + id);
        setBook(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBook();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        "http://localhost:8000/book/edit/" + id,
        null,
        {
          params: {
            ...updates,
          },
        }
      );
      toast.success("the book has been updated successfully");
      console.log(res);
    } catch (err) {
      console.log(err);
      toast.warning("there was a problem when updating the book");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setUpdates({
      ...updates,
      [e.target.name]: value,
    });
  };
  useEffect(() => {
    console.log(updates);
  });
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
          setUpdates({
            ...updates,
            ["img"]: img,
          });
        });
    }
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Img src={imageUrl ? imageUrl : book.img} />
          <InfoContainer onSubmit={handleSubmit}>
            <Label>Book title :</Label>
            <Title
              defaultValue={book.title}
              onBlur={handleChange}
              name="title"
            />
            <Label>Book author :</Label>
            <Author
              defaultValue={book.author}
              onBlur={(e) => handleChange(e)}
              name="author"
            />
            <RatingContainer>
              <Label>Rating :</Label>
              <RatingNumber
                defaultValue={book.rating}
                onBlur={(e) => handleChange(e)}
                name="rating"
              />
            </RatingContainer>
            <Label>Book year :</Label>
            <Year
              defaultValue={book.year}
              onBlur={(e) => handleChange(e)}
              name="year"
            />
            <Label>Book description :</Label>
            <Description
              defaultValue={book.desc}
              onBlur={(e) => handleChange(e)}
              name="desc"
            />
            <Label>Book category :</Label>
            <Category
              defaultValue={book.category}
              onBlur={(e) => handleChange(e)}
              name="category"
            />
            <Label>Book price :</Label>
            <Price
              defaultValue={book.price}
              onBlur={(e) => handleChange(e)}
              name="price"
            />
            <Input type={"file"} onChange={handleImage} />
            <UploadButton onClick={UploadImage} type="button">
              Upload Image
            </UploadButton>
            <Button type="submit">Update Book</Button>
          </InfoContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default BookEdit;
