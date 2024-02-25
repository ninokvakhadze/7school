import styled from "styled-components";
import { useState, useEffect } from "react";
// // import Slider  from 'react-slick';
import image1 from "../assets/skola1 (1).jpg";
import image2 from "../assets/skola2.jpg";
import image3 from "../assets/skola1 (3).jpg";
import image4 from "../assets/skola1 (4).jpg";
import image5 from "../assets/skola1 (5).jpg";

// import Post from "../posts/post";
// import News from "../news/news";
import Singlepost from "../news/singlepost";
import Weblinks from "./weblinks";
const images = [image1, image2, image3, image4, image5];

const MainPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <MainImg src={images[currentImageIndex]} />
      <HomePage>
        <Title>სიახლეები</Title>
        <Singlepost />
        {/* <Weblinks /> */}
      </HomePage>
    </>
  );
};

export default MainPage;

const HomePage = styled.div`
  padding: 4.5%;
`;
const MainImg = styled.img`
  width: 100%;
  height: 300px;
  @media only screen and (min-width: 768px) {
    height: 45vw;
  }
`;

const Title = styled.h2`
  font-size: 200%;
  color: #8b0909;
`;
