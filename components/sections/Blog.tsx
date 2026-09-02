import SectionTitle from "@/components/ui/SectionTitle";
import ArticleItem from "@/components/ui/ArticleItem";
import Reveal from "@/components/ui/Reveal";
import StaggerGroup, { StaggerItem } from "@/components/ui/StaggerGroup";
import { articles } from "@/data/articles";

export default function Blog() {
  return (
    <section className="space-y-8" id="blog">
      <Reveal>
        <SectionTitle lines={["DESIGN", "THOUGHTS"]} />
      </Reveal>
      <StaggerGroup className="space-y-8">
        {articles.map((article) => (
          <StaggerItem key={article.title}>
            <ArticleItem {...article} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
