// import React from "react";
import styled from "styled-components";
import tenisi from "../assets/tenisi.jpg";
import kalatburti from "../assets/kalatburti.jpg";

function Post() {
  return (
    <Maindiv>
      <Iframe
        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fesida.gov.ge%2Fvideos%2F505864951503032%2F&show_text=false&width=560&t=0"
        width="560"
        height="314"
        scrolling="no"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></Iframe>
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

const Iframe = styled.iframe`
  display: flex;
  justify-content: center;
  width: 350px;
  height: 300px;
  border: none;
  margin-top: 30px;
  @media only screen and (min-width: 768px) {
    width: 700px;
  }

  @media only screen and (min-width: 1040px) {
    width: 1000px;
    height: 600px;
  }
`;
const Maindiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 80%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Text = styled.p`
  height: 20%;
`;

const Title = styled.p`
  display: flex;
  justify-content: center;
  font-size: 25px;
  font-weight: 800;
  color: red;
  margin-bottom: 50px;
  @media only screen and (min-width: 768px) {
  }
  margin-top: 50px;
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
    grid-template-columns: auto auto;
    gap: 150px;
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
