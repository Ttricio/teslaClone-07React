import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
	return (
		<Container>
			<Section
				title='Model S'
				description='Order Online fot Touchless Delivery'
				backgroundImg='model-s.jpg'
				leftBtnText='Custom Order'
				rightBtnText='Existing inventory'
                id='modelS'
			/>
			<Section
				title='Model Y '
				description='Order Online fot Touchless Delivery'
				backgroundImg='model-y.jpg'
				leftBtnText='Custom Order'
				rightBtnText='Existing inventory'
                
			/>
			<Section
				title='Model 3 '
				description='Order Online fot Touchless Delivery'
				backgroundImg='model-3.jpg'
				leftBtnText='Custom Order'
				rightBtnText='Existing inventory'
			/>
			<Section
				title='Model X '
				description='Order Online fot Touchless Delivery'
				backgroundImg='model-x.jpg'
				leftBtnText='Custom Order'
				rightBtnText='Existing inventory'
			/>

			<Section
				title='Lowest Cost Solar Panels in America '
				description='Money-back guarantee'
				backgroundImg='solar-panel.jpg'
				leftBtnText='Order Now'
				rightBtnText='Learn More '
			/>
			<Section
				title='Solar Roof'
				description='Produce Clean Energy From Your Roof'
				backgroundImg='solar-roof.jpg'
				leftBtnText='Order Now'
				rightBtnText='Learn More '
			/>
			<Section
				title='Accessories '
				description=''
				backgroundImg='accessories.jpg'
				leftBtnText='Shop Now'
			/>
		</Container>
	);
};

export default Home;

const Container = styled.div`
	
	height: 100vh;
	background-color: aquamarine;
`;
