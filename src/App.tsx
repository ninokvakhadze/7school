import styled, { createGlobalStyle } from "styled-components";
import Header from "./header-footer/header";
import GeorgianFont from "./bpg_glaho.ttf";
import MainPage from "./mainpage/mainpage";
import News from "./news/news";
import Footer from "./header-footer/footer";
import Employees from "./employees/employees";
import Contacts from "./contacts/contacts";
function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      {/* <MainPage /> */}
      {/* <News /> */}
      {/* <Employees/> */}
      <Contacts/>
      <Footer />
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
  @keyframes falldown{
   0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
  @keyframes falldown2{
     0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(3vh);
  }
}
`;
