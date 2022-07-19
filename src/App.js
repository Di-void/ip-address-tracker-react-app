import React from "react";
import { Background, Hero } from "./components";
import { useGlobalContext } from "./context";

// # MAIN COMP..
const App = () => {
	// # STATE VALUES
	const { isLoading } = useGlobalContext();
	// # FUNCTIONS AND SIDE EFFECTS
	// # RETs
	if (isLoading) {
		return <div className="loading"></div>;
	}
	return (
		<main>
			<Background />
			<Hero />
		</main>
	);
};

export default App;
