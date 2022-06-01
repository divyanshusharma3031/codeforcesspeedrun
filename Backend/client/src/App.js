import Header from "./Header";
import "../src/Header.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Searchbox from "./Searchbox";
import Questions from "./Questions";
import Footer from "./Footer";
import About from "./About";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Questions />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
