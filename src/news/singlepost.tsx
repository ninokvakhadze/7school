import styled from "styled-components";
// import vaja from "../assets/vaja.jpeg";
// import example from "../assets/example.png";
import facebook from "../assets/facebook (1).svg";
import twitter from "../assets/x-twitter.svg";
import instagram from "../assets/instagram.svg";
import games from "../assets/kalatburti.jpg";

function Singlepost() {
  return (
    <div>
      <Container>
        <ImageWrapper>
          <img src={games} alt="Tenisi" />
        </ImageWrapper>
        <Info>
          <Title>საქართველოს ულამაზესი კუთხე კახეთი</Title>
          <Icons>
            <Img1 src={facebook} />
            <Img1 src={twitter} />
            <Img1 src={instagram} />
          </Icons>
        </Info>
      </Container>
    </div>
  );
}

export default Singlepost;

const Container = styled.div`
  background-color: ${(props) => props.color || "gray"};
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

const Icons = styled.div`
  display: flex;
  gap: 10px;
`;

const Img1 = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

const Title = styled.p``;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
`;
