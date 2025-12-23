import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Button from "../components/Button";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import Badge from "../components/Badge";
import SEO from "../components/SEO";
import { siteData } from "../content/siteData";

const Portfolio = () => {
  const categories = useMemo(
    () => ["Toate", "Web", "Magazin online", "Mobile", "Consultanta", "Foto-Video"],
    []
  );

  const [activeCategory, setActiveCategory] = useState("Toate");

  const filtered = useMemo(() => {
    if (activeCategory === "Toate") return siteData.portfolio;
    return siteData.portfolio.filter(
      (item) => item.category === activeCategory || item.tags.includes(activeCategory)
    );
  }, [activeCategory]);

  return (
    <div>
      <SEO
        title="Portofoliu"
        description="Selectie de proiecte web, mobile, consultanta si foto/video."
        path="/portofoliu"
      />

      <section className="pt-28 pb-16">
        <Container>
          <SectionTitle
            eyebrow="Portofoliu"
            title="Cazuri reale, rezultate clare"
            subtitle="Proiecte livrate pentru clienti care vor crestere si impact vizual."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-wider transition ${
                  activeCategory === category
                    ? "border-accent text-accent"
                    : "border-border/60 text-muted hover:text-text"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {filtered.map((project) => (
              <Card key={project.slug} className="flex h-full flex-col gap-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-44 w-full rounded-xl border border-border/40 object-cover"
                  loading="lazy"
                />
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <h3 className="font-display text-lg">{project.title}</h3>
                <p className="text-sm text-muted">{project.summary}</p>
                <div className="mt-auto flex items-center justify-between">
                  <Button to={`/portofoliu/${project.slug}`} variant="ghost" size="sm">
                    Vezi cazul <ArrowUpRight size={14} />
                  </Button>
                  <a
                    href={project.url}
                    className="text-xs text-muted hover:text-accent"
                    target={project.url.startsWith("http") ? "_blank" : undefined}
                    rel={project.url.startsWith("http") ? "noreferrer" : undefined}
                  >
                    Live link
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Portfolio;
