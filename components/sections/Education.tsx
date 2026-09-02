import SectionTitle from "@/components/ui/SectionTitle";
import EducationItem from "@/components/ui/EducationItem";
import CertificationBadge from "@/components/ui/CertificationBadge";
import Reveal from "@/components/ui/Reveal";
import StaggerGroup, { StaggerItem } from "@/components/ui/StaggerGroup";
import { education, certifications } from "@/data/education";

export default function Education() {
  return (
    <section className="space-y-8" id="education">
      <Reveal>
        <SectionTitle lines={["EDUCATION &", "CERTIFICATIONS"]} />
      </Reveal>
      <StaggerGroup className="space-y-8 pl-4 border-l border-gray-800 light:border-gray-300">
        {education.map((item) => (
          <StaggerItem key={item.school}>
            <EducationItem {...item} />
          </StaggerItem>
        ))}
      </StaggerGroup>
      <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <StaggerItem key={cert.name}>
            <CertificationBadge {...cert} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
