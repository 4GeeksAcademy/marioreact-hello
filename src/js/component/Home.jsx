import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
//create your first component
const Home = () => {
	return (
		<div className="container text-center">
			<Navbar />
			<Jumbotron />
			<Card />
			<Footer />
		</div>
	);
};

export default Home;