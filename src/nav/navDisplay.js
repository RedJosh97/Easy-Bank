import React from "react";
// import { Link } from "react-router-dom";
import "./nav.css";

function NavDisplay() {
	return (
		<div className='navBar'>
			<ul className='navList'>
				{/* <Link to='/Home'>
					<li>Home</li>
				</Link>
				<Link to='/About'>
					<li>About</li>
				</Link> */}
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
				<li>Blog</li>
				<li>Career</li>
				{/* <Link to='/Contact'></Link>
				<Link to='/Blog'>
					<li>Blog</li>
				</Link>
				<Link to='/Career'>
					<li>Career</li>
				</Link> */}
			</ul>
		</div>
	);
}
export default NavDisplay;
