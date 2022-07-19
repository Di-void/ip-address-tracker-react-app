import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

// # MAIN COMP..
const Location = () => {
	// # STATE VALUES
	const {
		coOrds: { lat, lng },
	} = useGlobalContext();
	// # FUNCTIONS AND SIDE EFFECTS
	// # RETs
	return (
		<Wrapper>
			<MapContainer
				center={[lat, lng]}
				zoom={11}
				scrollWheelZoom={true}
				className="map-container"
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[lat, lng]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</Wrapper>
	);
};

const Wrapper = styled.article`
	width: 100vw;
	overflow: hidden;
	/* z-index: -1; */
	/* border: 1px solid black; */
`;
export default Location;
