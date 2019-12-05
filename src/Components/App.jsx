import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./AppRoute";
import Aside from "./Aside";
import Footer from "./Footer";
function App() {
  return (
    <Router>
      <div className="App">
        <Aside />
        <section className="App-body">
          <div className="App-workbox"></div>
          <Routes />
        </section>
      </div>
      <Footer />
    </Router>
  );
}
export default App;
