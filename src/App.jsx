import React, { useEffect } from "react";
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
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import { AuthProvider, ThemeProvider, useThemeDispatch } from "./context";
import SideBar from "./Components/SideBar";
import Main from "./Components/Main";

import DateFnUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

function App() {
	const location = useLocation();
	const transitions = useTransition(location, (location) => location.pathname, {
		from: { opacity: 0, transform: "scale(50%)" },
		enter: { opacity: 1, transform: "scale(100%)" },
		leave: { opacity: 0, transform: "scale(50%)" },
	});

	console.log({ location });
	return (
		<div className="app">
			<MuiPickersUtilsProvider utils={DateFnUtils}>
				<ThemeProvider>
					<AuthProvider>
						<NavTop className="nav nav--top nav--super" />
						<SideBar />
						{transitions.map(({ item: location, props, key }) => (
							<animated.div style={props} key={key}>
								<Switch location={location}>
									<Main>
										<Route path="/login" component={Login} />
										<Route path="/register" component={Register} />
										<Route path="/nearby" component={Nearby} />
										<Route path="/reserved" component={Reserved} />
										<Route path="/saved" component={Saved} />
										<Route path="/details" component={RestaurantDetails} />
										<Route path="/booking" component={Booking} />
										<Route path="/" exact component={Home} />
									</Main>
								</Switch>
							</animated.div>
						))}
						<NavBottom />
					</AuthProvider>
				</ThemeProvider>
			</MuiPickersUtilsProvider>
		</div>
	);
}

export default App;
