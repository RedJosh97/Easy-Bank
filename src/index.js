import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<Router>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/home' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='*' element={<h1>Page not found</h1>} />
			</Routes>
		</Router>
	</>
);
