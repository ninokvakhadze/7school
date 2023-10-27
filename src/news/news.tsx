import styled from "styled-components";
// import vaja from "../assets/vaja.jpeg";
// import example from "../assets/example.png";
// import facebook from "../assets/facebook (1).svg";
// import twitter from "../assets/x-twitter.svg";
// import instagram from "../assets/instagram.svg";
import Singlepost from "./singlepost";
import Singlepostfull from "./singlepostfull"; // Adjust the path as needed

function News() {
  return (
    <div>
      {/* <Container>
        <Singlepost />
        <Singlepost />
        <Singlepost />
      </Container> */}
      <Singlepostfull />
    </div>
  );
}

export default News;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 10px;
  padding: 20px 30px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: auto auto;
  }
  @media only screen and (min-width: 1040px) {
    grid-template-columns: auto auto auto;
  }
`;
