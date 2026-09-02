import SectionTitle from "@/components/ui/SectionTitle";
import ProjectRow from "@/components/ui/ProjectRow";
import Reveal from "@/components/ui/Reveal";
import StaggerGroup, { StaggerItem } from "@/components/ui/StaggerGroup";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="space-y-8" id="projects">
      <Reveal>
        <SectionTitle lines={["RECENT", "PROJECTS"]} />
      </Reveal>
      <StaggerGroup className="space-y-6">
        {projects.map((project) => (
          <StaggerItem key={project.name}>
            <ProjectRow {...project} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
