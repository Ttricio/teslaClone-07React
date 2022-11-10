import React, { useState, useSelector } from "react";

import styled from "styled-components";
// import MenuIcon from '@mui/icons-material/Menu';
import Hamburger from "../hamburger/Hamburger_icon.svg.png";
import xbutton from "../hamburger/x-button.png";

const Header = () => {
	const [burgerStatus, setBurgerStatus] = useState(false);

	return (
		<Container>
			<a>
				<img src='/images/logo.svg' alt='Tesla logo' />
			</a>
			<Menu>
				<a href='#'>Model S</a>
				<a href='#modelS'>Model Y</a>
				<a href='#'>Model 3</a>
				<a href='#'>Model X</a>
				<a href='#'>Solar Roof</a>
				<a href='#'>Solar Panels</a>
			</Menu>
			<RightMenu>
				<a href='#'>Shop</a>
				<a href='#'>Tesla Account</a>
			</RightMenu>
			<CustomMenu onClick={() => setBurgerStatus(true)}>
				<img src={Hamburger} />
			</CustomMenu>
			<BurgerNav show={burgerStatus}>
				<CustomClose onClick={() => setBurgerStatus(false)}>
					<img src={xbutton} />
				</CustomClose>
				<li>
					<a href='#'>Existing inventory</a>
				</li>
				<li>
					<a href='#'>Used inventory</a>
				</li>
				<li>
					<a href='#'>Trade-in</a>
				</li>
				<li>
					<a href='#'>Cybertruck</a>
				</li>
				<li>
					<a href='#'>Roadaster</a>
				</li>
				<li>
					<a href='#'>Existing inventory</a>
				</li>
				<li>
					<a href='#'>Existing inventory</a>
				</li>
				<li>
					<a href='#'>Existing inventory</a>
				</li>
				<li>
					<a href='#'>Existing inventory</a>
				</li>
				<li>
					<a href='#'>Existing inventory</a>
				</li>
			</BurgerNav>
		</Container>
	);
};

export default Header;
const Container = styled.div`
	z-index: 1;
	min-height: 60px;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	top: 0;
	left: 0;
	right: 0;
`;
const Menu = styled.div`
	display: flex;
	align-items: center;
	flex: 1;
	justify-content: center;

	a {
		font-weight: 600;
		text-transform: uppercase;
		padding: 10px;
		flex-wrap: nowrap;
		margin-right: 10px;

		&:hover {
			background-color: white;
			opacity: 0.4;
			border-radius: 3px;
		}
	}

	@media (max-width: 950px) {
		display: none;
	}
`;

const RightMenu = styled.div`
	display: flex;
	align-items: center;

	a {
		font-weight: 600;
		text-transform: uppercase;
		margin-right: 20px;
		flex-wrap: nowrap;
	}
`;
const CustomMenu = styled.div`
	cursor: pointer;
	img {
		height: 30px;
	}
`;

const BurgerNav = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	background-color: white;
	width: 300px;
	z-index: 16;
	list-style: none;
	padding: 20px;
	display: flex;
	flex-direction: column;
	text-align: start;
	transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
	transition: transform 0.2s;
	li {
		padding: 15px;
		
		&:hover {
			background-color: #F4F6F6;
      border-radius: 3px;
		}

		a {
			font-weight: 600;
		}
	}
`;

const CustomClose = styled.div`
	display: flex;
	justify-content: flex-end;
	img {
		width: 30px;
		cursor: pointer;

		&:hover {
			opacity: 0.7;
		}
	}
`;
