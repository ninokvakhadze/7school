import styled from "styled-components";
import Search from "../assets/magnifying-glass-solid.svg";
import burgerImg from "../assets/bars-solid.svg";
import logo from "../assets/logo-1.png";
import arrow from "../assets/icon-chevron.svg";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const [titleShow, setTitleShow] = useState(0);

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
              <Li
                onClick={() => {
                  setTitleShow(titleShow === 1 ? 0 : 1);
                }}
              >
                <TitleDiv>
                  <P color={titleShow === 1}>სიახლეები</P>
                  <Arrow rotate={titleShow === null} src={arrow} />
                </TitleDiv>
                <Hoverline></Hoverline>
              </Li>
              <Li
                onClick={() => {
                  setTitleShow(titleShow === 2 ? 0 : 2);
                }}
              >
                <TitleDiv>
                  <P color={titleShow === 2}>სკოლა</P>
                  <Arrow src={arrow} rotate={titleShow === 2} />
                </TitleDiv>
                <Hoverline></Hoverline>
                <MiniMenu show={titleShow === 2}>
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
              <Li
                onClick={() => {
                  setTitleShow(titleShow === 3 ? 0 : 3);
                }}
              >
                <TitleDiv>
                  <P color={titleShow === 3}>თანამშრომლები</P>
                  <Arrow src={arrow} rotate={titleShow === null} />
                </TitleDiv>
                <Hoverline></Hoverline>
              </Li>
              <Li
                onClick={() => {
                  setTitleShow(titleShow === 4 ? 0 : 4);
                }}
              >
                <TitleDiv>
                  <P color={titleShow === 4}>მოსწავლეები</P>
                  <Arrow src={arrow} rotate={titleShow === null} />
                </TitleDiv>
                <Hoverline></Hoverline>
              </Li>
              <Li
                onClick={() => {
                  setTitleShow(titleShow === 5 ? 0 : 5);
                }}
              >
                <TitleDiv>
                  <P color={titleShow === 5}>შინაგანაწესი</P>
                  <Arrow src={arrow} rotate={titleShow === null} />
                </TitleDiv>
                <Hoverline></Hoverline>
              </Li>
              <Li
                onClick={() => {
                  setTitleShow(titleShow === 6 ? 0 : 6);
                }}
              >
                <TitleDiv>
                  <P color={titleShow === 6}>საჯარო ინფორმაცია</P>
                  <Arrow src={arrow} rotate={titleShow === null} />
                </TitleDiv>
                <Hoverline></Hoverline>
              </Li>
              <Li
                onClick={() => {
                  setTitleShow(7);
                }}
              >
                <TitleDiv>
                  <P color={titleShow === 7}>კონტაქტი</P>
                  <Arrow src={arrow} rotate={titleShow === 8} />
                </TitleDiv>
                <Hoverline></Hoverline>
              </Li>
            </UL>
          </Nav>
        </HeaderBottom>
      </WebPageHeader>
    </>
  );
}

export default Header;

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
  `
;

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
`
;
const MiniMenu = styled.div<{ show: boolean }>`
  flex-direction: column;
  gap: 10px;
  padding: 5px 20px;
  display: ${(props) => (props.show? "flex" : "none")};
  @media only screen and (min-width: 1100px) {
    position: absolute;
    background-color: black;
    top: 60px;
    left: -40px;
  }
  `
;
const P = styled.h2<{color: boolean}>`
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
    &:hover + ${MiniMenu}{
      display: inline;
  }
}
`
;
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
