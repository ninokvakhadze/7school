import React from "react";
import styled from "styled-components";
import tenisi from "../assets/tenisi.jpg";
import kalatburti from "../assets/kalatburti.jpg";

function Post() {
  return (
    <Maindiv>
      <Title>INFO & EVENTS</Title>
      <Containers>
        <Container color="#ded7d7">
          <ImageWrapper>
            <img src={tenisi} alt="Maisi" />
          </ImageWrapper>
          <Text>
            27 სექტემბერს, სასკოლო სპორტის კვირეულის ფარგლებში შეჯიბრი გაიმართა
            მაგიდის ტენისში. 🏓
          </Text>
        </Container>
        <Container color="#ded7d7">
          <ImageWrapper>
            <img src={kalatburti} alt="Tenisi" />
          </ImageWrapper>
          <Text>
            შიდა სასკოლო სპორტის კვირეული გრძელდება. 26 სექტემბერს მოსწავლეთა
            შორის შეჯიბრი კალათბურთში გაიმართა. 🏀
          </Text>
        </Container>
        <Container color="green">
          <ImageWrapper>
            <img src={kalatburti} alt="Tenisi" />
          </ImageWrapper>
          <Text></Text>
        </Container>
        <Container color="purple">Container 4</Container>
        <Container color="orange">Container 5</Container>
        <Container color="pink">Container 6</Container>
      </Containers>
      <Newstitle>NEWS</Newstitle>
      <Newscontainer>
        <News></News>
        <News></News>
        <News></News>
      </Newscontainer>
    </Maindiv>
  );
}

export default Post;

const Maindiv = styled.div``;

const ImageWrapper = styled.div`
  width: 100%;
  height: 80%;
  overflow: hidden; // Hide overflowing parts of the image

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; // Maintain aspect ratio and cover the container
  }
`;

const Text = styled.p`
  height: 20%;

  /* position: absolute; */
`;

const Title = styled.p`
  display: flex;
  justify-content: center;
  font-size: 25px;
  font-weight: 800;
  color: red;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Containers = styled.div`
  display: grid;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-content: center;
    justify-items: center; // Center horizontally
    align-items: center;
  }

  @media only screen and (min-width: 1040px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-content: center;
    justify-items: center; // Center horizontally
    align-items: center;
  }
`;

const Container = styled.div`
  background-color: ${(props) => props.color || "gray"};
  width: 300px;
  height: 200px;
  margin: 10px;

  /* position: relative; */

  @media only screen and (min-width: 768px) {
    width: 300px;
    height: 200px;
  }

  @media only screen and (min-width: 1040px) {
    width: 330px;
    height: 400px;
  }
`;
const Newscontainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 70px;
`;

const Newstitle = styled.p`
  display: flex;
  justify-content: center;
  font-size: 25px;
  font-weight: 800;
  color: red;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const News = styled.div`
  width: 300px;
  height: 200px;
  margin: 10px;
  background-color: gray;
  @media only screen and (min-width: 1040px) {
    width: 330px;
    height: 400px;
  }
`;
