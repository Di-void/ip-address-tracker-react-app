import React from "react";
import { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import mockData from "./mockData";

const AppContext = React.createContext();
let rootUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IP_API_KEY}`;

// # MAIN COMP..
const AppProvider = ({ children }) => {
	// # STATE VALUES
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState({
		show: false,
		msg: "",
	});
	const { ip, location, isp } = mockData;
	const [mapData, setMapData] = useState({
		ip,
		isp,
		location,
	});
	const [coOrds, setCoOrds] = useState({ lat: 6.4225, lng: 3.41806 });
	const inputContainer = useRef(null);
	// # FUNCTIONS AND SIDE EFFECTS
	const fetchIpData = async url => {
		setIsLoading(true);
		const response = await axios(url).catch(err => console.log(err));
		if (response) {
			const data = response.data;
			// console.log(data);
			setMapData(data);
			const {
				location: { lat, lng },
			} = data;
			setCoOrds({ ...coOrds, lat: lat, lng: lng });
			setError({ ...error, show: false, msg: "" });
			setIsLoading(false);
		} else {
			setIsLoading(false);
			setError({
				...error,
				show: true,
				msg: "An error occured, Try checking input",
			});
			// console.log("something went wrong");
		}
		// console.log(response);
	};

	useEffect(() => {
		console.log("This app has started");
		fetchIpData(rootUrl);
		// eslint-disable-next-line
	}, []);
	// # RETs
	return (
		<AppContext.Provider
			value={{
				...mapData,
				isLoading,
				error,
				coOrds,
				inputContainer,
				fetchIpData,
				rootUrl,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

// # CUSTOM HOOK

const useGlobalContext = () => {
	return useContext(AppContext);
};
export { useGlobalContext, AppProvider };
