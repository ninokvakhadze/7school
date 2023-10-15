import React from "react";
import styled from "styled-components";
import tenisi from "../assets/tenisi.jpg";
import kalatburti from "../assets/kalatburti.jpg";
const videoURL = "https://vimeo.com/8a68007e-ddca-4631-9cd4-940ab01fce45";

function Post() {
  return (
    <Maindiv>
      <Video controls>
        <source src={videoURL} type="video/webm" />
      </Video>
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
      </Newscontainer>
    </Maindiv>
  );
}

export default Post;

const Video = styled.video`
  display: flex; /* Center horizontally and vertically */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  margin-top: 50px;
  width: 350px;
  @media only screen and (min-width: 768px) {
    width: 730px;
  }
  @media only screen and (min-width: 1040px) {
  }
`;

const Maindiv = styled.div`
  display: flex; /* Center horizontally and vertically */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  flex-direction: column;
`;

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
  grid-template-columns: auto;
  @media only screen and (min-width: 768px) {
    grid-template-columns: auto auto;
    gap: 10px;
  }

  @media only screen and (min-width: 1040px) {
    grid-template-columns: auto auto auto;
    gap: 20px;
  }

  @media only screen and (min-width: 1440px) {
    gap: 50px;
  }
`;

const Container = styled.div`
  background-color: ${(props) => props.color || "gray"};
  width: 350px;
  height: 500px;
  margin: 10px;

  @media only screen and (min-width: 768px) {
    width: 350px;
    height: 450px;
  }

  @media only screen and (min-width: 1040px) {
    width: 350px;
    height: 450px;
  }

  @media only screen and (min-width: 1440px) {
    width: 400px;
    height: 500px;
  }
`;
const Newscontainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 70px;
  @media only screen and (min-width: 768px) {
    grid-template-columns: auto auto;
  }
  @media only screen and (min-width: 1040px) {
    grid-template-columns: auto auto auto;
  }
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
