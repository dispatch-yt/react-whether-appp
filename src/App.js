import { Routes, Route, BrowserRouter } from "react-router-dom";
import { db } from "./backend/app_backend";
import "./autoload";
import WeatherMain from "./pages/WeatherMain";
import NotFound from "./pages/404";
import ForecastWeather from "./pages/ForecastWeather";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import Support from "./pages/Support";
import WeatherApp from "./pages/Weather";

function App() {
	let homePageSeen = db.get("HOME_PAGE_SEEN");
	let DEFAULT_ROUTE_PAGE;
	homePageSeen
		? (DEFAULT_ROUTE_PAGE = <WeatherApp />)
		: (DEFAULT_ROUTE_PAGE = <Home />);

	return (
		<BrowserRouter>
			<Routes>
				<Route index element={DEFAULT_ROUTE_PAGE} />
				<Route path="support" exact element={<Support />} />
				<Route path="weather" exact element={<WeatherApp />} />
				<Route path="weathermain" exact element={<WeatherMain />} />
				<Route path="forecast" element={<ForecastWeather />} />
				<Route path="forecast" element={<ForecastWeather />} />
				<Route path="settings" element={<Settings />} />
				<Route path="support" element={<Support />} />
				<Route path="weather" element={<WeatherApp />} />
				<Route path="weathermain" element={<WeatherMain />} />
				<Route path="forecast" element={<ForecastWeather />} />
				<Route path="settings" element={<Settings />} />
				<Route path="settings" element={<Settings />} />
				<Route path="support" element={<Support />} />
				<Route path="weather" element={<WeatherApp />} />
				<Route path="weathermain" element={<WeatherMain />} />
				<Route path="forecast" element={<ForecastWeather />} />
				<Route path="settings" element={<Settings />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

const config = {
	scope: "/",
	registerOptions: {
		updateViaCache: "none",
	},
	onSuccess: (registration) => {
		console.log("Service worker registration successful:", registration);
	},
	onUpdate: (registration) => {
		console.log("Service worker update available:", registration);
	},
};

export default App;
