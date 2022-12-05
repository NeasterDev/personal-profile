export const ProjectCard = (props: {image: string, imageDesc: string, websiteLink: string, github: string, description: string}) => {

    return (
        <div className="project-card-container">
            {/* half image, with links to project */}
            <div className="project-card-image">
                <img src={props.image} alt={props.imageDesc}/>
                {props.websiteLink}
                {props.github}
            </div>
            {/* half project description/tools used/etc*/}
            <div className="project-card-desc">
                {props.description}
            </div>
        </div>
    )

}