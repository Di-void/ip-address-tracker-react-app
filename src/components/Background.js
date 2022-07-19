import React from "react";
import styled from "styled-components";
import Location from "./Location";
import backgroundImage from "../images/pattern-bg.png";

// # MAIN COMP..
const Background = () => {
	// # STATE VALUES
	// # FUNCTIONS AND SIDE EFFECTS
	// # RETs
	return (
		<Wrapper>
			<section>
				<img src={backgroundImage} alt="background" className="hero-img" />
				<Location />
			</section>
		</Wrapper>
	);
};

// # STYLED COMPONENTS
const Wrapper = styled.section`
	overflow: hidden;
	/* border: 1px solid black; */
`;
export default Background;
