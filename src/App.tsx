import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header-footer/header-components/Header"
import GeorgianFont from "./bpg_glaho.ttf";
import MainPage from "./mainpage/mainpage";
import News from "./news/news";
import Footer from "./header-footer/footer";
import Employees from "./employees/employees";
import Contacts from "./contacts/contacts";
import Singlepostfull from "./news/singlepostfull";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/news/:id" element={<Singlepostfull />}/>
        </Routes>
        <Footer />
      </Router>
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
body{
  background-color: #f2f2f2;
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
