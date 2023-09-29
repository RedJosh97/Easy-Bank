import React from "react";
import "./section.css";
import ButtonIcon from "../button/button";
import imagePhone from "../image/image-mockups.png";
import backGround from "../image/bg-intro-desktop.svg";
import NavHandler from "./navHandler";

function Section() {
	return (
		<div className='secBack'>
			<NavHandler />
			<div className='secSide1'>
				<h1>Next generation digital banking</h1>
				<p>
					Take your financial life online. Your easyBank account will be a
					one-stop shop for spending, saving, budgeting, investing and much
					more.
				</p>
				<ButtonIcon />
			</div>
			<div className='secSide2'>
				<img className='imagePhone' src={imagePhone} alt='phoneview' />
				<img className='backImage' src={backGround} alt='backstyle' />
			</div>
		</div>
	);
}

export default Section;
