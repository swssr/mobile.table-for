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
import NavBottom from "./Components/NavBottom";
import NavTop from "./Components/NavTop";
import RestaurantDetails from "./Pages/RestaurantDetails";
import Booking from "./Pages/Booking";

function App() {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, width: "0%" },
    enter: { opacity: 1, width: "100%" },
    leave: { opacity: 0, width: "0%" },
  });

  console.log({ location });
  return (
    <div className="app">
      <NavTop />
      {transitions.map(({ item: location, props, key }) => (
        <animated.div style={props} key={key}>
          <Switch location={location}>
            <Route path="/nearby" component={Nearby} />
            <Route path="/reserved" component={Reserved} />
            <Route path="/saved" component={Saved} />
            <Route path="/details" component={RestaurantDetails} />
            <Route path="/booking" component={Booking} />
            <Route path="/" exact component={Home} />
          </Switch>
        </animated.div>
      ))}
      <NavBottom />
    </div>
  );
}

export default App;