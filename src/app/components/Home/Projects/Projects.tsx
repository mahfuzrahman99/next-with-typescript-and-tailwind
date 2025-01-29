import { projectData } from "../../../../../Data/data"
import ProjectsCard from "../../Helper/ProjectsCard"
import SectionHeading from "../../Helper/SectionHeading"

function Projects() {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
        <SectionHeading>Projects</SectionHeading>

        {/* Project section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 lg:gap-7 md:max-w-[1440px] mx-2 md:mx-auto mt-7 md:mt-9 lg:mt-12">
            {
                projectData.map((project)=> 
                    <ProjectsCard key={project.id} src={project.image} url={project.url} />
                )
            }
        </div>
    </div>
  )
}

export default Projects