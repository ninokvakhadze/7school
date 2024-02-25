import arrow from "../../assets/icon-chevron.svg";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";



const titles = ["მისია, ხედვა, ღირებებულები", "სტრუქტრურა"];
const titles2 = [
  "სტრატეგიული გეგმა",
  "კურიკულუმის შემუშავებისა და განვითარების მეთოდოლოგია",
  "შეფასების სისტემის ვერიფიკაციის მექანიზმი",
  "ბიბლიოთეკით სარგებლობის წესი",
];

function HeaderComponent(props: any) {
    const [titleShow, setTitleShow] = useState(false);
    const mediaQuery = useMediaQuery({ query: "(max-width: 1100px)" });
    const [menu, setMenu] = useState<string[]>([]);
  
    const handleClick = () => {
      setTitleShow((prevIsOpen) => !prevIsOpen);
    };
    const handleMouseOver = () => {
      setTitleShow(true);
    };
    const handelMouseout = () => {
      setTitleShow(false);
    };
  
    useEffect(() => {
      if (props.number) {
        setMenu(titles);
      } else {
        setMenu(titles2);
      }
    }, []);
    return (
      <Li
        onClick={mediaQuery ? handleClick : undefined}
        onMouseOver={!mediaQuery ? handleMouseOver : undefined}
        onMouseOut={!mediaQuery ? handelMouseout : undefined}
      >
        <TitleDiv>
          <P color={props.titleColor}>{props.title}</P>
          <Arrow src={arrow} rotate={true} />
        </TitleDiv>
        <Hoverline></Hoverline>
        <MiniMenu
          style={{ display: props.show }}
          onMouseOver={!mediaQuery ? handleMouseOver : undefined}
          onMouseOut={!mediaQuery ? handelMouseout : undefined}
          show={titleShow}
        >
          {menu.map((title, index) => (
            <SecondTitleDiv>
              <SecondTitle key={index}>{title}</SecondTitle>
              <Arrow2 src={arrow} />
            </SecondTitleDiv>
          ))}
        </MiniMenu>
      </Li>
    );
  }

  export default HeaderComponent

  const Hoverline = styled.div`
  display: none;
  @media only screen and (min-width: 1100px) {
    height: 9px;
    background-color: #8b0909;
    width: 100%;
  }
`;

  const Li = styled.button`
  border: none;
  border-bottom: 1px solid gray;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  background-color: black;
  gap: 20px;
  width: 100%;
  @media only screen and (min-width: 1100px) {
    width: unset;
    position: relative;
    border-bottom: none;
    padding-bottom: 0px;
    height: 60px;
    &:hover ${Hoverline} {
      display: inline;
      margin-top: 11px;
    }
  }
`;
const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const MiniMenu = styled.button<{ show: boolean }>`
  width: 100%;
  flex-direction: column;
  gap: 10px;
  padding: 5px 20px;
  background-color: black;
  display: ${(props) => (props.show ? "flex" : "none")};
  @media only screen and (min-width: 1100px) {
    position: absolute;
    top: 30px;
    left: -20px;
    width: 200px;
    animation: falldown2 0.5s linear forwards;
    z-index: 1;
  }
`;
const P = styled.h2<{color: boolean}>`
  text-align: center;
  font-family: bpg_ghalo;
  color: #ffffff;
  font-size: 19px;
  line-height: 20px;
  font-weight: 600;
  text-align: center;
  opacity: ${(props) => (props.color ? "1" : "0.75")};
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
  width: 100%
`;
const SecondTitle = styled.h3`
  color: White;
  font-size: 14px;
  text-align: left;
`;