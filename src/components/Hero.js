import React from "react";
import SearchForm from "./SearchForm";
import styled from "styled-components";
import { useRef } from "react";

// # MAIN COMP..
const Hero = () => {
	// # STATE VALUES
	// # FUNCTIONS AND SIDE EFFECTS
	// # RETs
	return (
		<Wrapper>
			<div className="section-center">
				<h2 className="section-title">IP Address tracker</h2>
				<SearchForm />
				<article className="dipslay-block">
					{/* &nbsp; */}
					<div className="sub">
						<h4 className="sub-title">IP ADDRESS</h4>
						<h2>Some Value</h2>
					</div>
					<div className="demac"></div>
					<div className="sub">
						<h4 className="sub-title">location</h4>
						<h2>Some Value</h2>
					</div>
					<div className="demac"></div>
					<div className="sub">
						<h4 className="sub-title">timezone</h4>
						<h2>Some Value</h2>
					</div>
					<div className="demac"></div>
					<div className="sub">
						<h4 className="sub-title">isp</h4>
						<h2>Some Value</h2>
					</div>
				</article>
			</div>
		</Wrapper>
	);
};

// # STYLED COMPONENTS
const Wrapper = styled.section`
	width: 100vw;
	position: absolute;
	top: 0;
	/* border: 1px solid black; */
	padding: 1.5rem 0;

	.section-center {
		/* border: 1px solid black; */
		display: flex;
		flex-direction: column;
		align-items: center;
		.section-title {
			font-size: 2rem;
			margin-bottom: 20px;
		}
		article {
			margin-top: 20px;
			border: 1px solid black;
			border-radius: 1rem;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			background-color: white;
			height: fit-content;
			width: 70%;

			h2 {
				text-align: center;
				letter-spacing: 1px;
				text-transform: capitalize;
				color: var(--clr-primary-1);
				font-size: 2rem;
			}
			h4 {
				text-align: center;
				letter-spacing: 2px;
				text-transform: uppercase;
				color: var(--clr-primary-2);
			}
			div {
				/* width: 100%; */
				/* border: 1px solid black; */
				padding: 0.75rem;
			}
			.demac {
				display: none;
			}
		}
	}

	@media screen and (min-width: 600px) {
		.section-center {
			article {
				height: fit-content;
				width: fit-content;
				flex-direction: initial;
				padding: 3rem 1.5rem;

				h2 {
					text-align: left;
				}
				h4 {
					text-align: left;
				}
				.demac {
					display: block;
					width: 0px;
					/* height: 70px; */
					border-left: 1px solid var(--clr-primary-2);
				}
				div {
					.sub-title {
						margin-bottom: 10px;
					}
				}
			}
		}
	}
`;
export default Hero;
