import React from "react";

export class AboutMe extends React.Component {
    constructor(props: {}) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className="about-me-container">
                <div className="img-container">img</div>
                <div className="about-description">description</div>
            </section>
        )
    }
}