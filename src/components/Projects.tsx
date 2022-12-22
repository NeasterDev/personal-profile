import React from "react";
import { ProjectCard } from "./ProjectCard";

export class Projects extends React.Component {
	render() {
		return <section id="projects-container">
            {/* projects section */}
            <ProjectCard image={"image"} imageDesc={"image-of-project"} websiteLink={"www.linktowebsite.com"} github={"www.githublink.com"} description={"I made this website with this and this and for this reaspon"}  />
            <hr style={{width: "100%"}}/>
            <ProjectCard image={"image"} imageDesc={"image-of-project"} websiteLink={"www.linktowebsite.com"} github={"www.githublink.com"} description={"I made this website with this and this and for this reaspon"}  />
        </section>;
	}

}
