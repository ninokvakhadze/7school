// import React from "react";
import styled from "styled-components";

// import tenisi from "../assets/tenisi.jpg";
// import kalatburti from "../assets/kalatburti.jpg";



function Post() {
  // const [posts, setPosts] = useState([]);
 

  return (
    <Maindiv>
      <Title>INFO & EVENTS</Title>
      <Containers>
       
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

// const Iframe = styled.iframe`
//   display: flex;
//   justify-content: center;
//   width: 350px;
//   height: 300px;
//   border: none;
//   margin-top: 30px;
//   @media only screen and (min-width: 768px) {
//     width: 700px;
//   }

//   @media only screen and (min-width: 1040px) {
//     width: 1000px;
//     height: 600px;
//   }
// `;
const Maindiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

// const Container = styled.div`
//   background-color: ${(props) => props.color || "gray"};
//   width: 350px;
//   height: 500px;
//   margin: 10px;

//   @media only screen and (min-width: 768px) {
//     width: 350px;
//     height: 450px;
//   }

//   @media only screen and (min-width: 1040px) {
//     width: 350px;
//     height: 450px;
//   }

//   @media only screen and (min-width: 1440px) {
//     width: 400px;
//     height: 500px;
//   }
// `;
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
