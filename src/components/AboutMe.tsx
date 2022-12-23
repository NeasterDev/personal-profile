import React from "react";
import selfie from "../assets/profile_pic.png";

export class AboutMe extends React.Component {
	constructor(props: {}) {
		super(props);
		this.state = {};
	}
	
	filler =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam provident suscipit culpa earum delectus maxime deleniti consequuntur laudantium neque voluptates in, labore nemo, ratione ex eum, fugit quisquam dolor ducimus?";

	render() {
		return (
			<section className="about-me-container">
				<div className="img-container">
					<img id="selfie" src={selfie} />
				</div>
				<div>
					<div className="typewriter">
						<h1>Nicholas Easter</h1>
					</div>
					<div className="about-description">
						{this.filler + this.filler + this.filler}
					</div>
				</div>
			</section>
		);
	}
}
