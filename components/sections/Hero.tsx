import HeroTitle from "@/components/ui/HeroTitle";
import StatCard from "@/components/ui/StatCard";
import SkillCard from "@/components/ui/SkillCard";
import Reveal from "@/components/ui/Reveal";
import StaggerGroup, { StaggerItem } from "@/components/ui/StaggerGroup";
import { profile } from "@/data/profile";
import { skillCards } from "@/data/skills";

export default function Hero() {
  return (
    <section className="space-y-12 mt-12 lg:mt-12" id="hero">
      <Reveal>
        <HeroTitle lines={["SOFTWARE", "ENGINEER"]} />
        <p className="text-gray-400 light:text-gray-600 max-w-md text-sm sm:text-base leading-relaxed">
          Passionate about building production AI systems and full-stack
          applications. Specialize in turning ideas into reliable, scalable
          products.
        </p>
      </Reveal>

      {/* Stats */}
      <StaggerGroup className="flex flex-wrap gap-8 sm:gap-16">
        {profile.stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <StatCard value={stat.value} label={stat.label} />
          </StaggerItem>
        ))}
      </StaggerGroup>

      {/* Featured Skill Cards */}
      <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skillCards.map((card) => (
          <StaggerItem key={card.title}>
            <SkillCard {...card} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
