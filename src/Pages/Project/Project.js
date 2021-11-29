import React, { useEffect, useState } from "react";
import projectData from "../../fakeData/projectData.json";
import ProjectsDataDetails from "../ProjectsDataDetails/ProjectsDataDetails";
import "./ProjectsData.css";

const Project = () => {
    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {
        console.log(projectData);
        setProjectsData(projectData);
    }, []);
    return (
        <div className="project-data-div">
            <h2 className="pt-5 mt-5 container-fluid text-center heading">
                Some of <span>My Projects</span>
            </h2>
            {projectsData.map((project) => (
                <ProjectsDataDetails project={project}></ProjectsDataDetails>
            ))}
        </div>
    );
};

export default Project;
