import React from "react";
import selfie from "../assets/profile_pic.png";

export class AboutMe extends React.Component {
	constructor(props: {}) {
		super(props);
		this.state = {};
	}

<<<<<<< HEAD
    render() {
        return (
            <section className="about-me-container">
                <div className="img-container">
                    <img id="selfie" src={selfie} />
                </div>
                <div className="about-description">{this.filler + this.filler + this.filler}</div>
            </section>
        )
    }
=======
	filler =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam provident suscipit culpa earum delectus maxime deleniti consequuntur laudantium neque voluptates in, labore nemo, ratione ex eum, fugit quisquam dolor ducimus?";

	render() {
		return (
			<section className="about-me-container">
				<div className="img-container">
					<img id="selfie" src={selfie} />
				</div>
				<div className="about-description">
					{this.filler + this.filler + this.filler}
				</div>
			</section>
		);
	}
>>>>>>> 2ed6890edde58392d6b9adad9fd2b616a9091b59
}
