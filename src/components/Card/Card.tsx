import React from "react";
import { Project } from '../../type';
import './Card.scss'

interface ProjectCardProps {
    project: Project;

}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="projectCard">

            <div className="imageContainer">

                <img className="image"
                src={project.imageUrl}
                alt={`${project.title} preview`}/>

                <div className="projectOverlay">
                    <p className="description">
                        {project.description}
                    </p>
                </div>

            </div>
            
            
            <div className="content">
                <p className="title">
                    {project.title}
                </p>


                <div className="tagContainer">
                    {project.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}

                </div>

                <div className="links">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="link">{project.githubName}.github</a>
                </div>

            </div>


        </div>
    )
}