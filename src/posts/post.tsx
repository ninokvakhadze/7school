import React from "react";
import styled from "styled-components";

function Post() {
  return (
    <Maindiv>
      <Title>INFO & EVENTS</Title>
      <Containers>
        <Container color="red">Container 1</Container>
        <Container color="blue">Container 2</Container>
        <Container color="green">Container 3</Container>
        <Container color="purple">Container 4</Container>
        <Container color="orange">Container 5</Container>
        <Container color="pink">Container 6</Container>
      </Containers>
    </Maindiv>
  );
}

export default Post;

const Maindiv = styled.div``;

const Title = styled.p`
  display: flex;
  justify-content: center;
  font-size: 25px;
  font-weight: 800;
  color: red;
`;

const Containers = styled.div`
  display: grid;
  justify-content: center;

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
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;

  @media only screen and (min-width: 768px) {
    width: 700px;
    height: 400px;
  }

  @media only screen and (min-width: 1040px) {
    width: 330px;
    height: 250px;
  }
`;
