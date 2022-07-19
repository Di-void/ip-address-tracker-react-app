import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import mockData from "./mockData";

const AppContext = React.createContext();
let rootUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IP_API_KEY}`;

// # MAIN COMP..
const AppProvider = ({ children }) => {
	// # STATE VALUES
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState({ show: false, msg: "" });
	const {
		ip,
		location: { country, region, timezone },
		isp,
	} = mockData;
	const [mapData, setMapData] = useState({
		ip: ip,
		isp: isp,
		location: `${country}, ${region}`,
		timezone: timezone,
	});
	const [coOrds, setCoOrds] = useState({ lat: 6.4225, lng: 3.41806 });

	// # FUNCTIONS AND SIDE EFFECTS
	const fetchIpData = async url => {
		setIsLoading(true);
		const response = await axios(url).catch(err => console.log(err));
		if (response) {
			const data = response.data;
			const {
				location: { lat, lng },
			} = data;
			setCoOrds({ ...coOrds, lat: lat, lng: lng });
			setIsLoading(false);
		} else {
			setIsLoading(false);
			setError({
				...error,
				show: true,
				msg: "There was an error fetching the data",
			});
			console.log("something went wrong");
		}
		console.log(response);
	};

	useEffect(() => {
		// fetchIpData(rootUrl);
	}, []);
	// # RETs
	return (
		<AppContext.Provider
			value={{
				...mapData,
				isLoading,
				error,
				coOrds,
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
