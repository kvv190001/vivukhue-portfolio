import SectionTitle from "@/components/ui/SectionTitle";
import JobItem from "@/components/ui/JobItem";
import Reveal from "@/components/ui/Reveal";
import StaggerGroup, { StaggerItem } from "@/components/ui/StaggerGroup";
import { experience } from "@/data/experience";

export default function Experience({ limit }: { limit?: number }) {
  const items = limit ? experience.slice(0, limit) : experience;

  return (
    <section className="space-y-8" id="experience">
      <Reveal>
        <SectionTitle lines={["WORK", "EXPERIENCE"]} />
      </Reveal>
      <StaggerGroup className="space-y-8 pl-4 border-l border-gray-800 light:border-gray-300">
        {items.map((job) => (
          <StaggerItem key={job.company}>
            <JobItem {...job} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
