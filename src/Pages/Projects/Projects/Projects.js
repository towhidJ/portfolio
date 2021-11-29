import React, { useEffect, useState } from "react";
import dataProject from "../../../fakeData/projectData.json";
import Project from "../Project/Project";
import "./Projects.css";
const Projects = () => {
    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {
        console.log(dataProject);
        setProjectsData(dataProject);
    }, []);
    return (
        <div className="project-bg container-fluid">
            <div className="project-data-div">
                <h2 className="pt-5 mt-5 container-fluid text-center heading">
                    Recent <span> Projects</span>
                </h2>
                {projectsData.map((project) => (
                    <Project project={project}></Project>
                ))}
            </div>
        </div>
    );
};

export default Projects;
