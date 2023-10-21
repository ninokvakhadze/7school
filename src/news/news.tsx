import styled from "styled-components";
import vaja from "../assets/vaja.jpeg";
import example from "../assets/example.png";

function News() {
  return (
    <div>
      <Container>
        <Card color="red" width="250px" show={false}>
          <Iframe
            width="230"
            height="230"
            src="https://www.youtube.com/embed/XDkH9efla7E?si=P5vHubdX9hG5kxCX"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></Iframe>
        </Card>
        <Card color="blue" width="700px" show={true}>
          <div>
            <Img2 src={example} />
            <Infodiv>
              <Title>დირექტორობის მსურველი კანდიდატის პრეზენტაცია</Title>
              <Date1>13/10/2023 </Date1>
              <Info>
                13 ოქტომბერს 16:00 საათზე ქუთაისის #14 საჯარო სკოლის #108
                აუდიტორიაში გაიმართება დირექტორობის მსურველი კანდიდატის
                პრეზენტაცია. 17:00 საათზე კი სსიპ ქალაქ ქუთაისის სკოლის
                დირექტორის არჩევნები. პრეზენტაციას შეუძლია დაესწროს ნებისმიერი
                დაინტერესებული პირი. დირექტორის არჩევნების პროცესს შესაძლებელია
                დააკვირდეს […]
              </Info>
            </Infodiv>
          </div>
        </Card>
        <Card color="green" width="250px" show={false}>
          <Img src={vaja} />
        </Card>
      </Container>
    </div>
  );
}

export default News;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Card = styled.div<{ width: string; show: boolean }>`
  height: 600px;
  background-color: ${(props) => props.color || "gray"};
  width: ${(props) => props.width || "200px"};
  display: flex;
  flex-direction: ${(props) => (props.show ? "row" : "column")};
  align-items: ${(props) => (props.show ? "" : "center")};
`;

const Iframe = styled.iframe`
  border: none;
  margin-top: 20px;
`;

const Img = styled.img`
  margin-top: 20px;
  width: 200px;
  height: 200px;
  border: none;
`;

const Infodiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 15px;
`;
const Title = styled.p`
  font-size: 19px;
  font-weight: 800;
  margin-top: 10px;
`;

const Date1 = styled.p``;

const Info = styled.p``;

const Img2 = styled.img`
  width: 150px;
  height: 100px;
  margin-top: 20px;
  margin-left: 10px;
`;
