import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import Button from "../components/Button";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import Badge from "../components/Badge";
import MotionInView, { fadeUp, stagger } from "../components/Motion";
import Counter from "../components/Counter";
import SEO from "../components/SEO";
import { siteData } from "../content/siteData";

const Home = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 300], [0, -40]);

  return (
    <div className="overflow-hidden">
      <SEO
        title="Acasa"
        description={siteData.site.description}
        path="/"
      />

      <section className="relative overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-surface/80 via-base to-base" />
        <div className="absolute inset-0 mesh-bg opacity-40" />
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent/15 blur-[120px]" />

        <Container className="relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div style={{ y: heroY }} className="space-y-8">
              <div className="flex items-center gap-2 text-sm text-accent/80">
                <Sparkles size={16} />
                <span>{siteData.hero.highlightLine}</span>
              </div>
              <h1 className="font-display text-4xl leading-tight text-text md:text-6xl">
                {siteData.hero.headline}
              </h1>
              <p className="max-w-2xl text-lg text-muted">
                {siteData.hero.subheadline}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/contact" size="lg">
                  {siteData.hero.ctaPrimary}
                </Button>
                <Button to="/portofoliu" variant="outline" size="lg">
                  {siteData.hero.ctaSecondary}
                </Button>
              </div>
              <div className="flex flex-wrap gap-3">
                {siteData.skills.slice(0, 6).map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </motion.div>

            <motion.div style={{ y: heroY }} className="relative">
              <div className="glass rounded-3xl p-6">
                <img
                  src={siteData.hero.visuals[0]}
                  alt="Hero visual"
                  className="w-full rounded-2xl border border-border/40"
                  loading="lazy"
                />
                <div className="mt-4 flex items-center justify-between text-sm text-muted">
                  <span>Design modern + implementare rapida</span>
                  <span className="flex items-center gap-1 text-accent">
                    Vezi live <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <MotionInView>
              <SectionTitle
                eyebrow="Despre mine"
                title={siteData.about.title}
                subtitle={siteData.about.body}
              />
            </MotionInView>
            <MotionInView>
              <div className="grid gap-4">
                {siteData.services.slice(0, 2).map((service) => (
                  <Card key={service.id} className="space-y-3">
                    <h3 className="font-display text-xl">{service.title}</h3>
                    <p className="text-sm text-muted">{service.short}</p>
                    <Button to={service.link} variant="ghost" size="sm">
                      Vezi detalii <ArrowUpRight size={14} />
                    </Button>
                  </Card>
                ))}
              </div>
            </MotionInView>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-surface/40">
        <Container>
          <SectionTitle
            eyebrow="Skill-uri"
            title="Tech Stack premium"
            subtitle="Tooling modern pentru performanta, scalare si experienta impecabila."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {siteData.skills.map((skill) => (
              <Badge key={skill} className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionTitle
            eyebrow="Servicii"
            title="Servicii care cresc conversia"
            subtitle="De la web si mobile pana la consultanta si productie vizuala."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid gap-6 md:grid-cols-2"
          >
            {siteData.services.map((service) => (
              <motion.div key={service.id} variants={fadeUp}>
                <Card className="flex h-full flex-col gap-4">
                  <div>
                    <h3 className="font-display text-xl">{service.title}</h3>
                    <p className="mt-2 text-sm text-muted">{service.short}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xs text-muted">{service.priceFrom}</span>
                    <Button to={service.link} variant="ghost" size="sm">
                      Detalii <ArrowUpRight size={14} />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="py-20 bg-surface/40">
        <Container>
          <SectionTitle
            eyebrow="Impact"
            title="Rezultate masurabile"
            subtitle="Parteneriate cu focus pe viteza, conversie si claritate."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {siteData.achievements.map((item) => (
              <Card key={item.label} className="space-y-2 text-center">
                <Counter value={item.value} suffix={item.suffix} />
                <p className="text-sm text-muted">{item.label}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionTitle
            eyebrow="Portofoliu"
            title="Proiecte recente"
            subtitle="Cazuri reale, cu rezultate clare si impact vizibil."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {siteData.portfolio.slice(0, 3).map((project) => (
              <Card key={project.slug} className="flex flex-col gap-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-40 w-full rounded-xl border border-border/40 object-cover"
                  loading="lazy"
                />
                <div className="flex items-center justify-between text-xs text-muted">
                  <span>{project.category}</span>
                  <span>{project.duration}</span>
                </div>
                <h3 className="font-display text-lg">{project.title}</h3>
                <p className="text-sm text-muted">{project.summary}</p>
                <div className="mt-auto flex items-center justify-between">
                  <Button to={`/portofoliu/${project.slug}`} variant="ghost" size="sm">
                    Vezi cazul <ArrowUpRight size={14} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-surface/40">
        <Container>
          <SectionTitle
            eyebrow="Proces"
            title="Workflow clar, fara surprize"
            subtitle="De la strategie la launch, fiecare pas este transparent."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {siteData.process.map((step) => (
              <Card key={step.step} className="space-y-3">
                <div className="text-sm text-accent">Pasul {step.step}</div>
                <h3 className="font-display text-xl">{step.title}</h3>
                <p className="text-sm text-muted">{step.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionTitle
            eyebrow="Testimoniale"
            title="Feedback real"
            subtitle="Experiente care confirma executia premium."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {siteData.testimonials.map((item) => (
              <Card key={item.name} className="space-y-4">
                <p className="text-sm text-muted">"{item.quote}"</p>
                <div>
                  <p className="font-display text-base">{item.name}</p>
                  <p className="text-xs text-muted">{item.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Card className="relative overflow-hidden p-10">
            <div className="absolute -right-16 top-0 h-40 w-40 rounded-full bg-accent/30 blur-[80px]" />
            <div className="space-y-4">
              <h2 className="font-display text-3xl">Vrei un proiect WOW?</h2>
              <p className="text-sm text-muted">
                Spune-mi obiectivele tale si iti construiesc o solutie personalizata.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button to="/contact" size="lg">
                  Cere oferta
                </Button>
                <Button to="/servicii" variant="outline" size="lg">
                  Vezi servicii
                </Button>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      <section className="py-12 border-t border-border/40">
        <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h3 className="font-display text-xl">Contact rapid</h3>
            <p className="text-sm text-muted">
              {siteData.site.phone} - {siteData.site.email}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {siteData.services.map((service) => (
              <div key={service.id} className="flex items-center gap-2 text-xs text-muted">
                <Check size={14} className="text-accent" />
                <span>{service.title}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
