import styled from "styled-components";
import Search from "../assets/magnifying-glass-solid.svg";
import burgerImg from "../assets/bars-solid.svg";
import logo from "../assets/logo-1.png";
import arrow from "../assets/icon-chevron.svg";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <WebPageHeader>
        <HeaderBottom>
          <Logo src={logo} />
          <BurgerBar
            src={burgerImg}
            onClick={() => {
              setOpen((prevIsOpen) => !prevIsOpen);
            }}
          />
          <Nav primary={open.toString()}>
            <SearchBar type="text" />
            <UL>
              <HeaderComponent show="none" title="სიახლეები" />
              <HeaderComponent show="" title="სკოლა" />
              <HeaderComponent show="none" title="თანამშრომლები" />
              <HeaderComponent show="none" title="მოსწავლეები" />
              <HeaderComponent show="none" title="შინაგანაწესი" />
              <HeaderComponent title="საჯარო ინფორმაცია" />
              <HeaderComponent show="none" title="კონტაქტი" />
            </UL>
          </Nav>
        </HeaderBottom>
      </WebPageHeader>
    </>
  );
}

export default Header;

function HeaderComponent(props: any) {
  const [titleShow, setTitleShow] = useState(false);
  return (
    <Li
      onMouseOverCapture={() => {
        setTitleShow(true);
      }}
      onMouseOut={() => {
        setTitleShow(false);
      }}
    >
      <TitleDiv>
        <P>{props.title}</P>
        <Arrow src={arrow} rotate={true} />
      </TitleDiv>
      <Hoverline></Hoverline>
      <MiniMenu
        style={{ display: props.show }}
        onMouseOver={() => {
          setTitleShow(true);
        }}
        onMouseOut={() => {
          setTitleShow(false);
        }}
        show={titleShow}
      >
        <SecondTitleDiv>
          <SecondTitle>მისია, ხედვა, ღირებებულები</SecondTitle>
          <Arrow2 src={arrow} />
        </SecondTitleDiv>
        <SecondTitleDiv>
          <SecondTitle>სტრუქტურა</SecondTitle>
          <Arrow2 src={arrow} />
        </SecondTitleDiv>
      </MiniMenu>
    </Li>
  );
}

const WebPageHeader = styled.header``;
const SearchBar = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding: 7px 20px;
  background-color: #8b0909;
  background-image: url(${Search});
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center right 20px;
  color: #fff;
  @media only screen and (min-width: 1100px) {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
  }
`;
const HeaderBottom = styled.div`
  padding: 15px 20px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
    padding: 30px 20px;
  }
  @media only screen and (min-width: 1100px) {
    padding: 40px 20px;
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
  @media only screen and (min-width: 1100px) {
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
  @media only screen and (min-width: 768px) {
    top: 120px;
  }
  @media only screen and (min-width: 1100px) {
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
  @media only screen and (min-width: 1100px) {
    flex-direction: row;
    gap: 20px;
    justify-content: right;
    padding: 0;
    margin-top: 20px;
  }
`;
const Hoverline = styled.div`
  display: none;
  @media only screen and (min-width: 1100px) {
    height: 6px;
    background-color: #8b0909;
  }
`;
const Li = styled.li`
  border-bottom: 1px solid gray;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media only screen and (min-width: 1100px) {
    position: relative;
    border-bottom: none;
    padding-bottom: 0px;
    height: 60px;
    &:hover ${Hoverline} {
      display: inline;
      margin-top: 15px;
    }
  }
`;
const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MiniMenu = styled.div<{ show: boolean }>`
  flex-direction: column;
  gap: 10px;
  padding: 5px 20px;
  display: ${(props) => (props.show ? "flex" : "none")};
  @media only screen and (min-width: 1100px) {
    position: absolute;
    background-color: black;
    top: 30px;
    left: -40px;
    z-index: 9;
  }
`;
const P = styled.h2`
  text-align: center;
  font-family: bpg_ghalo;
  color: #ffffff;
  font-size: 19px;
  line-height: 20px;
  font-weight: 600;
  text-align: center;
  opacity: ${(props) => (props.color ? "1" : "0.85")};
  @media only screen and (min-width: 1100px) {
    font-size: 15px;
    &:hover + ${MiniMenu} {
      display: inline;
    }
  }
`;
const Arrow = styled.img<{ rotate: boolean }>`
  width: 8px;
  height: 8px;
  margin-top: 8px;
  transform: ${(props) => (props.rotate ? "rotate(90deg)" : "")};
  @media only screen and (min-width: 1100px) {
    display: none;
  }
`;
const Arrow2 = styled.img`
  width: 8px;
  height: 8px;
  margin-top: 8px;
  @media only screen and (min-width: 1100px) {
    display: none;
  }
`;
const SecondTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SecondTitle = styled.h3`
  color: White;
  font-size: 14px;
`;
