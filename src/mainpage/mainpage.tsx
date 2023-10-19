// import styled from "styled-components";
import { useState, useEffect } from "react";
// // import Slider  from 'react-slick';
import image1 from "../assets/skola1 (1).jpg";
import image2 from "../assets/skola2.jpg";
import image3 from "../assets/skola1 (3).jpg";
import image4 from "../assets/skola1 (4).jpg";
import image5 from "../assets/skola1 (5).jpg";

import Post from "../posts/post";
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
      <img
        style={{ width: "100%", height: "500px" }}
        src={images[currentImageIndex]}
      />
      <Post />
      <Weblinks />
    </>
  );
};

export default MainPage;
