import styled from "styled-components";
import Singlepost from "./singlepost";
import Search from "./../assets/magnifying-glass-solid.svg";

function News() {
  return (
    <>
     <SearchBar type="text" />
      <MainDiv>
       
        <Singlepost />
      </MainDiv>
    </>

  );
}

export default News;

const MainDiv = styled.div`
  padding: 4.5%;
`;
const SearchBar = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding: 7px 20px;
  background-color: #8b0909;
  background-image: url(${Search});
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center right 4.5%;
  color: #fff;
  @media only screen and (min-width: 1200px) {
    /* position: absolute;
    top: 0;
    right: 0; */
    width: 100%;
  }
`;
