import React from "react";
import "./App.css";
import {
  NavLink,
  Switch,
  useLocation,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./Pages/Home";
import Nearby from "./Pages/Nearby";
import Reserved from "./Pages/Reserved";
import Saved from "./Pages/Saved";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/nearby" component={Nearby} />
          <Route path="/reserved" component={Reserved} />
          <Route path="/saved" component={Saved} />
        </Switch>
        <nav className="nav nav--bottom">
          <ul>
            <li>
              <NavLink activeClassName="nav__link--active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav__link--active" to="/nearby">
                Nearby
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav__link--active" to="/reserved">
                Reserved
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav__link--active" to="/saved">
                Saved
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;
