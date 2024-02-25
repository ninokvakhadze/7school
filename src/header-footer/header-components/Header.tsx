import styled from "styled-components";
import { useState } from "react";
import burgerImg from "../../assets/bars-solid.svg";
import logo from "../../assets/logo-1.png";
import { Link } from "react-router-dom";
import HeaderComponent from "./header-nav";


function Header() {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState<Number>(0);

  const line = {
    textDecoration: "none",
  };

  return (
    <>
      <WebPageHeader>
        <HeaderBottom>
          <Link onClick={() => setColor(0)} style={line} to="/">
            <Logo src={logo} />
          </Link>
          <BurgerBar
            src={burgerImg}
            onClick={() => {
              setOpen((prevIsOpen) => !prevIsOpen);
            }}
          />
          <Nav primary={open.toString()}>
    
            <UL>
              <Link onClick={() => setColor(1)} style={line} to="/news">
                <HeaderComponent
                  titleColor={color === 1}
                  show="none"
                  title="სიახლეები"
                />
              </Link>
              <Link onClick={() => setColor(2)} style={line} to="/school">
                <HeaderComponent
                  titleColor={color === 2}
                  show=""
                  title="სკოლა"
                  number={true}
                />
              </Link>
              <Link onClick={() => setColor(3)} style={line} to="/employees">
                <HeaderComponent
                  onClick={() => setColor(3)}
                  titleColor={color === 3}
                  show="none"
                  title="თანამშრომლები"
                />
              </Link>
              <Link onClick={() => setColor(4)} style={line} to="/school">
                <HeaderComponent
                  onClick={() => setColor(4)}
                  titleColor={color === 4}
                  show="none"
                  title="მოსწავლეები"
                />
              </Link>
              <HeaderComponent
                onClick={() => setColor(5)}
                titleColor={color === 5}
                show="none"
                title="შინაგანაწესი"
              />
              <HeaderComponent
                onClick={() => setColor(6)}
                titleColor={color === 6}
                title="საჯარო ინფორმაცია"
                number={false}
              />
              <Link onClick={() => setColor(7)} style={line} to="/contact">
                <HeaderComponent
                  onClick={() => setColor(7)}
                  titleColor={color === 7}
                  show="none"
                  title="კონტაქტი"
                />
              </Link>
            </UL>
          </Nav>
        </HeaderBottom>
      </WebPageHeader>
    </>
  );
}

export default Header;


const WebPageHeader = styled.header``;

const HeaderBottom = styled.div`
  padding: 15px 10px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
    padding: 15px 4.5%;
  }
  @media only screen and (min-width: 1200px) {
    padding: 20px 4.5%;
    padding-bottom: 0px;
  }
`;
const BurgerBar = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 10px;
  @media only screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
    margin-top: 15px;
  }
  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;
const Logo = styled.img`
  height: 40px;
  width: 120px;
  @media only screen and (min-width: 768px) {
    width: 160px;
    height: 60px;
  }
`;
const Nav = styled.nav<{ primary: string }>`
  background-color: black;
  position: absolute;
  left: 0;
  top: 70px;
  width: 100%;
  display: ${(props) => (props.primary === "true" ? "inLine" : "none")};
  animation: falldown 2s ease-in-out;
  @media only screen and (min-width: 768px) {
    top: 120px;
    animation: none;
  }
  @media only screen and (min-width: 1200px) {
    position: unset;
    padding: 0;
    background-color: unset;
    display: inline;
  }
`;
const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 20px;
  @media only screen and (min-width: 1200px) {
    flex-direction: row;
    gap: 20px;
    justify-content: right;
    padding: 0;
    margin-top: 20px;
  }
`;
