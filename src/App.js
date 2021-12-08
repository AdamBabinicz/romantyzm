import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop.jsx";
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
        <Footer />
      </Router>
      <CookieConsent
        debug={true}
        location="bottom"
        style={{
          background: "#333",
          textAlign: "left",
          paddingBottom: "1rem",
          fontSize: "16px",
          fontFamily: "Gideon Roman",
        }}
        buttonStyle={{
          color: "#333",
          background: "#fff",
          fontSize: "18px",
          fontFamily: "BaroqueScript",
          marginRight: "1rem",
        }}
        buttonText="OK, rozumiem"
        expires={365}
      >
        "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
        Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
        indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
        dotyczących cookies oznacza, że będą one zamieszczane w Państwa
        urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
        ustawień dotyczących cookies."
      </CookieConsent>
    </>
  );
}

export default App;
