import React, { Component } from 'react';
import Navbar from "./layouts/Navbar";
import ContactUs from "./contact/ContactUs";

class Home extends Component {

	render() {
		return(
			<div className="container">
				<Navbar/>
				<ContactUs/>
			</div>
		);
	}
}

export default Home;