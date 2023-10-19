import styled from "styled-components";
import sertificireba from "../assets/direqtorebis_registracia.png";
import catalog from "../assets/ecatalog.jpg";
import maswavlebeli from "../assets/mascavlebeli.png";
import school from "../assets/skoool-1 (1).jpg";
import collage from "../assets/bannerprof.jpg";
import buki from "../assets/buki.jpg";

function Weblinks() {
  return (
    <div>
      <Container>
        <Card href="https://directors.mes.gov.ge/">
          <img src={sertificireba} />
        </Card>
        <Card href="https://catalog.emis.ge/main">
          <img src={catalog} />
        </Card>
        <Card href="http://www.mascavlebeli.ge/">
          <img src={maswavlebeli} />
        </Card>
        <Card href="http://skoool.emis.ge/main.php">
          <img src={school} />
        </Card>
        <Card href="https://fix.ge/ka">
          <img src={collage} />
        </Card>
        <Card href="http://www.buki.ge/">
          <img src={buki} />
        </Card>
      </Container>
    </div>
  );
}

export default Weblinks;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin-top: 40px;
  margin-bottom: 30px;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    gap: 50px;
    column-gap: 150px;
  }

  @media only screen and (min-width: 1040px) {
    grid-template-columns: auto auto auto;
    column-gap: 250px;
    row-gap: 20px;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 30px;
  }
`;

const Card = styled.a``;
