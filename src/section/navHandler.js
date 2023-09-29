import React from "react";
import "./navHandler.css";
import NavDisplay from "../nav/navDisplay";

import { useState } from "react";

function NavHandler() {
	const [navToggle, setNavToggle] = useState(false);

	const displayHandler = () => {
		setNavToggle(!navToggle);
		console.log("gotta");
	};

	return (
		<div>
			<button className='hamburger' onClick={displayHandler}></button>
			{navToggle && (
				<div className='burger'>
					<NavDisplay />
				</div>
			)}
		</div>
	);
}
export default NavHandler;
