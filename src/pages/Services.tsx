import { ArrowUpRight, Check } from "lucide-react";
import Button from "../components/Button";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import Badge from "../components/Badge";
import SEO from "../components/SEO";
import { siteData } from "../content/siteData";

const Services = () => {
  return (
    <div>
      <SEO
        title="Servicii"
        description="Servicii web, mobile, consultanta fonduri si productie foto/video."
        path="/servicii"
      />

      <section className="pt-28 pb-16">
        <Container>
          <SectionTitle
            eyebrow="Servicii"
            title="Tot ce ai nevoie pentru crestere"
            subtitle="Solutii complete, de la strategie si UX pana la lansare si promovare vizuala."
          />
        </Container>
      </section>

      <section className="pb-20">
        <Container className="space-y-8">
          {siteData.services.map((service) => (
            <Card key={service.id} className="space-y-6" id={service.id}>
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="font-display text-2xl">{service.title}</h2>
                  <p className="text-sm text-muted">{service.description}</p>
                </div>
                <Button to={service.link} variant="outline" size="sm">
                  Vezi pagina dedicata <ArrowUpRight size={14} />
                </Button>
              </div>
              <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-4">
                  <h3 className="text-sm uppercase tracking-[0.3em] text-muted">
                    Ce include
                  </h3>
                  <div className="grid gap-2">
                    {service.includes.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-muted">
                        <Check size={14} className="text-accent" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm uppercase tracking-[0.3em] text-muted">Stack</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {service.stack.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted">
                    <span>Timeline: {service.timeline}</span>
                    <span>Pret: {service.priceFrom}</span>
                  </div>
                  <Button to="/contact" size="sm" className="w-fit">
                    Cere oferta
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </Container>
      </section>
    </div>
  );
};

export default Services;