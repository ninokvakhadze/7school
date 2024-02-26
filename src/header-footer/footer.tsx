import styled from "styled-components";
import facebook from "../assets/facebook.svg";
import linkdin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  
  return location.pathname !== "/login" ? (
    <div>
      <Maincontainer>
        <Container>
          <Schoolname>ტყიბულის მე-7 საჯარო სკოლა</Schoolname>
          <Schooladress>მისამართი: ქ.ტყიბული ბრეგვაძის ქ N</Schooladress>
          <Schoolphone>ტელეფონი:</Schoolphone>
          <Contact>
            <span>კარიერა</span>|<span>კონტაქტი</span>|
            <span>მიმართულებები</span>
          </Contact>
          <Icons>
            <Icon>
              <Img src={facebook} />
            </Icon>
            <Icon>
              <Img src={linkdin} />
            </Icon>
            <Icon>
              <Img src={twitter} />
            </Icon>
          </Icons>
        </Container>
        <Container1>
          <Hours>სამუშაო საათები</Hours>
          <Time>09:00 - 15:00 </Time>
        </Container1>
      </Maincontainer>
      <Container2>
        <Create>
          <span>© 2023</span>{" "}
          <div>
            <Span>Powered by: </Span>
            <span> Nino kvakhadze</span>
          </div>
        </Create>
      </Container2>
    </div>
  ) : null;
}

export default Footer;

const Maincontainer = styled.div`
  width: 100%;
  height: 500px;
  background-color: black;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media only screen and (min-width: 1040px) {
    height: 400px;
    flex-direction: row;
    gap: 200px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Schoolname = styled.p`
  color: white;
  font-weight: 700;
  font-size: 25px;
  font-family: bpg_ghalo;
`;

const Schooladress = styled.p`
  color: white;
  margin-top: 30px;
  font-family: bpg_ghalo;
`;

const Schoolphone = styled.p`
  color: white;
  font-family: bpg_ghalo;
`;

const Contact = styled.p`
  color: #e2b41a;
  cursor: pointer;
  display: flex;
  gap: 10px;
  font-family: bpg_ghalo;
`;
const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  cursor: pointer;
  &:hover {
    background-color: #8b0909;
    border: none;
  }
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
`;

const Icons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Hours = styled.p`
  font-size: 20px;
  color: white;
  font-family: bpg_ghalo;
`;

const Time = styled.p`
  color: white;
  font-family: bpg_ghalo;
`;

const Container2 = styled.div`
  width: 100%;
  height: 30px;
  background-color: black;
  border-top: 1px solid #575656;
`;

const Create = styled.p`
  color: white;
  opacity: 50%;
  display: flex;
  justify-content: space-between;
  padding: 4px 20px;
`;

const Span = styled.span`
  font-weight: 900;
  font-size: 18px;
`;
