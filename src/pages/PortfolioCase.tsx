import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import Button from "../components/Button";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import Badge from "../components/Badge";
import SEO from "../components/SEO";
import { siteData } from "../content/siteData";

const PortfolioCase = () => {
  const { slug } = useParams();
  const project = useMemo(
    () => siteData.portfolio.find((item) => item.slug === slug),
    [slug]
  );

  if (!project) {
    return (
      <div className="pt-32 pb-20">
        <Container className="space-y-4">
          <h1 className="font-display text-3xl">Proiect inexistent</h1>
          <p className="text-muted">Selecteaza un proiect valid din portofoliu.</p>
          <Button to="/portofoliu" variant="outline">
            Inapoi la portofoliu
          </Button>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <SEO
        title={project.title}
        description={project.summary}
        path={`/portofoliu/${project.slug}`}
      />

      <section className="pt-28 pb-12">
        <Container className="space-y-6">
          <Link to="/portofoliu" className="text-xs text-muted hover:text-accent">
            {"<- "}Inapoi la portofoliu
          </Link>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <h1 className="font-display text-4xl">{project.title}</h1>
              <p className="text-muted">{project.summary}</p>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Button href={project.url} size="sm">
                  Vezi live <ArrowUpRight size={14} />
                </Button>
                <Button to="/contact" variant="outline" size="sm">
                  Cerere similara
                </Button>
              </div>
            </div>
            <Card className="space-y-4">
              <div className="text-sm text-muted">Detalii proiect</div>
              <div className="space-y-2 text-sm text-muted">
                <div className="flex justify-between">
                  <span>Rol</span>
                  <span className="text-text">{project.role}</span>
                </div>
                <div className="flex justify-between">
                  <span>Durata</span>
                  <span className="text-text">{project.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Stack</span>
                  <span className="text-text">{project.stack.join(", ")}</span>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="space-y-10">
          <div className="grid gap-6 md:grid-cols-3">
            {project.results.map((result) => (
              <Card key={result} className="space-y-2">
                <Check size={16} className="text-accent" />
                <p className="text-sm text-muted">{result}</p>
              </Card>
            ))}
          </div>
          <SectionTitle
            eyebrow="Galerie"
            title="Vizualuri proiect"
            subtitle="Placeholder local. Inlocuieste cu imagini reale cand esti gata."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {project.gallery.map((image, index) => (
              <img
                key={`${project.slug}-gallery-${index}`}
                src={image}
                alt={`${project.title} galerie ${index + 1}`}
                className="h-48 w-full rounded-2xl border border-border/40 object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default PortfolioCase;
