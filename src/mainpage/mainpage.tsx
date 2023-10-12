// import styled from "styled-components";
import  { useState, useEffect } from 'react';
// // import Slider  from 'react-slick';
import image1 from "../assets/024ub5e.jpg";
import image2 from "../assets/2iTeLsR.jpg";
import image3 from "../assets/RmuR3Dn.jpg";
import Post from "../posts/post";

const images = [
   image1,
   image2,
   image3,
];


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
      <img style={{width: "100%", height: "500px"}} src={images[currentImageIndex]}/>
      <Post/>
    </>
  );
};

export default MainPage;
