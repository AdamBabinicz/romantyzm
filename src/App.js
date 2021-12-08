import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop.jsx";
// import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
