import React from "react";
import "./nav.css";
import ButtonIcon from "../button/button";
import image from "../image/logo.svg";
import NavDisplay from "./navDisplay";

function Nav() {
	return (
		<div className='container'>
			<div className='easylogo'>
				<img src={image} alt='easyLogo' />
			</div>
			{
				<div className='delete'>
					<NavDisplay />
				</div>
			}
			<ButtonIcon />
		</div>
	);
}

export default Nav;
