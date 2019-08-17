import React from "react";
import "./App.css";
import Home from "./components/home/home";
import Giphy from "./components/giphy/giphy";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App container">
      <ul className="nav ">
        <li className="nav-item">
          <Link to="/home">Home</Link>
        </li>

        <li className="nav-item">
          <Link to="/giphy">Giphy API Search</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/giphy" component={Giphy} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
