import styled, { createGlobalStyle } from "styled-components";
import Header from "./header-footer/header";
import GeorgianFont from "./bpg_glaho.ttf";
import MainPage from "./mainpage/mainpage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <MainPage />
    </>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`
 *{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  }
  @font-face {
  src: url(${GeorgianFont});
  font-family: bpg_ghalo;
}

`;
