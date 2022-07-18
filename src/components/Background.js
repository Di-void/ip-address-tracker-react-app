import React from "react";
import Map from "./Map";
import backgroundImage from "../images/pattern-bg.png";

// # MAIN COMP..
const Background = () => {
	return (
		<section>
			<img src={backgroundImage} alt="background" />
			<Map />
		</section>
	);
};

export default Background;
