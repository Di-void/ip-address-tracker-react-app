import React from "react";
import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa";
import { useRef } from "react";

// # MAIN COMP..
const SearchForm = () => {
	// # STATE VALUES
	const inputContainer = useRef(null);
	// # FUNCTIONS AND SIDE EFFECTS
	const handleSubmit = e => {
		e.preventDefault();
	};
	// # RETs
	return (
		<Wrapper>
			<div className="section-center">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						ref={inputContainer}
						placeholder="Search for any IP address"
					/>
					<button type="submit" className="search-btn">
						<FaAngleRight className="icon" />
					</button>
				</form>
			</div>
		</Wrapper>
	);
};

// # STYLED COMPONENTS
const Wrapper = styled.section`
	/* background: var(--clr-primary-3); */

	.section-center {
		form {
			display: flex;
			width: 320px;
			height: 50px;
			border: transparent;
			/* border: 1px solid black; */
			overflow: hidden;
			border-radius: 0.7rem;

			input {
				font-size: 18px;
				border: none;
				outline: none;
				padding: 1rem;
				height: 100%;
				width: 80%;
			}
			.search-btn {
				background-color: black;
				color: white;
				width: 20%;
				border: transparent;
				text-align: center;
				cursor: pointer;
				transition: all 0.2s ease;
			}
			.search-btn:hover {
				background-color: rgb(65, 65, 65);
			}
		}
	}
	.icon {
		font-size: 2rem;
	}
	@media screen and (min-width: 600px) {
		.section-center {
			form {
				width: 550px;
				input {
					width: 90%;
				}
				.search-btn {
					width: 10%;
				}
			}
		}
	}
`;
export default SearchForm;
