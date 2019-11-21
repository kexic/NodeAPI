import React, { Component } from 'react';
import Navbar from "./layouts/Navbar";
import ContactUs from "./contact/ContactUs";

class Home extends Component {
	handleSubmit(data) {
		alert('Form Submitted');
	}

	render() {
		return(
			<div className="container">
				<Navbar/>
				<ContactUs handleSubmit={(...props) => this.handleSubmit(props)}/>
			</div>
		);
	}
}

export default Home;