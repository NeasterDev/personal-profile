import React from "react";

export class AboutMe extends React.Component {
    constructor(props: any){
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <section className="about-me">
                <div className="selfie"></div>
                <section id="about-me-description"></section>
            </section>
        )
    }
}
