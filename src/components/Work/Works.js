import React, { useState, useEffect } from "react";

// import data
import { projectsData } from "./Data";
import { projectsNav } from "./Data";

// import components
import WorkItems from "./WorksItems";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // get projects based on item
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {/* projects nav */}
      <div class="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      {/* projects */}
      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} url={["https://github.com/Na-David/Matrix-Calculator","https://github.com/Na-David/NZ_Tax_Calculator_ICT627","https://dvid-mydiary.web.app/","https://na-david.github.io/Movie-Web/"]} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
