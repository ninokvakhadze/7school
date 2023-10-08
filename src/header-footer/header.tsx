import styled from "styled-components";
import Search from "../assets/magnifying-glass-solid.svg";
import burgerImg from "../assets/bars-solid.svg";
import logo from "../assets/logo-1.png";
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
          <Nav  primary={open.toString()} >
            <SearchBar type="text" />
            <UL>
              <Li>
                <P>სიახლეები</P>
              </Li>
              <Li>
                <P>სკოლა</P>
              </Li>
              <Li>
                <P>თანამშრომლები</P>
              </Li>
              <Li>
                <P>მოსწავლეები</P>
              </Li>
              <Li>
                <P>შინაგანაწესი</P>
              </Li>
              <Li>
                <P>საჯარო ინფორმაცია</P>
              </Li>
              <Li>
                <P>კონტაქტი</P>
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
  /* position: fixed; */
  width: 100%;
  outline: none;
  border: none;
  padding: 7px 10px;
  background-color: red;
  background-image: url(${Search});
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center right 12px;
  color: #fff;
  @media only screen and (min-width: 1100px) {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
  }
`;
const HeaderBottom = styled.div`
  padding: 15px 10px;
  background-color: blue;
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
    padding: 30px 20px;
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
  background-color: green;
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
  padding: 40px;
  @media only screen and (min-width: 1100px) {
    flex-direction: row;
    gap: 20px;
    justify-content: right;
    padding: 0;
    margin-top: 20px;
  }
`;
const Li = styled.li``;
const P = styled.p`
  text-align: center;
  font-family: bpg_ghalo;
  color: #ffffff;
  font-size: 19px;
  line-height: 20px;
  font-weight: 600;
  text-align: center;
  @media only screen and (min-width: 1100px){
    font-size: 15px;
  }
`;
