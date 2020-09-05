import React from "react";
import "./App.css";
import {
  NavLink,
  Switch,
  useLocation,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import { animated, useTransition } from "react-spring";
import Home from "./Pages/Home";
import Nearby from "./Pages/Nearby";
import Reserved from "./Pages/Reserved";
import Saved from "./Pages/Saved";

function App() {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, width: "0%" },
    enter: { opacity: 1, width: "100%" },
    leave: { opacity: 0, width: "0%" },
  });

  console.log({ location });
  return (
    <div className="App">
      {transitions.map(({ item: location, props, key }) => (
        <animated.div style={props} key={key}>
          <Switch location={location}>
            <Route path="/" exact component={Home} />
            <Route path="/nearby" component={Nearby} />
            <Route path="/reserved" component={Reserved} />
            <Route path="/saved" component={Saved} />
          </Switch>
        </animated.div>
      ))}
      <nav className="nav nav--bottom">
        <ul>
          <li>
            <NavLink
              className="nav__link"
              activeClassName="nav__link--active"
              to="/"
            >
              <img
                src="https://image.flaticon.com/icons/svg/3427/3427743.svg"
                alt="fork icon"
                className="icon"
              />
              <span className="text">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav__link"
              activeClassName="nav__link--active"
              to="/nearby"
            >
              <img
                src="https://image.flaticon.com/icons/svg/684/684809.svg"
                alt="fork icon"
                className="icon"
              />
              <span className="text">Nearby</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeCla
              className="nav__link"
              ssName="nav__link--active"
              to="/reserved"
            >
              <img
                src="https://image.flaticon.com/icons/svg/1171/1171977.svg"
                alt="fork icon"
                className="icon"
              />
              <span className="text">Reserved</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav__link"
              activeClassName="nav__link--active"
              to="/saved"
            >
              <img
                src="https://img.icons8.com/ios/50/000000/bookmark-ribbon.png"
                alt="fork icon"
                className="icon"
              />
              <span className="text">Saved</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
