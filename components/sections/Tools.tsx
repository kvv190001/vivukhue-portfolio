import SectionTitle from "@/components/ui/SectionTitle";
import ToolItem from "@/components/ui/ToolItem";
import Reveal from "@/components/ui/Reveal";
import StaggerGroup, { StaggerItem } from "@/components/ui/StaggerGroup";
import { tools } from "@/data/tools";

export default function Tools() {
  return (
    <section className="space-y-8" id="tools">
      <Reveal>
        <SectionTitle lines={["TECH", "STACK"]} />
      </Reveal>
      <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        {tools.map((tool) => (
          <StaggerItem key={tool.name}>
            <ToolItem {...tool} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
