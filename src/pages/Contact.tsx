import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import Button from "../components/Button";
import SEO from "../components/SEO";
import { siteData } from "../content/siteData";

const formSchema = z.object({
  name: z.string().min(2, "Introdu numele"),
  email: z.string().email("Email invalid"),
  phone: z.string().min(7, "Telefon invalid"),
  service: z.string().min(1, "Alege un serviciu"),
  budget: z.string().min(1, "Alege un buget"),
  message: z.string().min(10, "Scrie cateva detalii")
});

type ContactForm = z.infer<typeof formSchema>;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactForm>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div>
      <SEO
        title="Contact"
        description="Trimite un mesaj pentru o oferta personalizata."
        path="/contact"
      />

      <section className="pt-28 pb-16">
        <Container>
          <SectionTitle
            eyebrow="Contact"
            title="Hai sa construim ceva premium"
            subtitle="Completeaza formularul si revin cu o oferta personalizata."
          />
        </Container>
      </section>

      <section className="pb-20">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm text-muted">
                  Nume
                </label>
                <input
                  id="name"
                  {...register("name")}
                  className="rounded-xl border border-border/60 bg-base/60 px-4 py-2 text-sm text-text outline-none focus:border-accent"
                />
                {errors.name ? (
                  <span className="text-xs text-danger">{errors.name.message}</span>
                ) : null}
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm text-muted">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="rounded-xl border border-border/60 bg-base/60 px-4 py-2 text-sm text-text outline-none focus:border-accent"
                />
                {errors.email ? (
                  <span className="text-xs text-danger">{errors.email.message}</span>
                ) : null}
              </div>
              <div className="grid gap-2">
                <label htmlFor="phone" className="text-sm text-muted">
                  Telefon
                </label>
                <input
                  id="phone"
                  {...register("phone")}
                  className="rounded-xl border border-border/60 bg-base/60 px-4 py-2 text-sm text-text outline-none focus:border-accent"
                />
                {errors.phone ? (
                  <span className="text-xs text-danger">{errors.phone.message}</span>
                ) : null}
              </div>
              <div className="grid gap-2">
                <label htmlFor="service" className="text-sm text-muted">
                  Serviciu
                </label>
                <select
                  id="service"
                  {...register("service")}
                  className="rounded-xl border border-border/60 bg-base/60 px-4 py-2 text-sm text-text outline-none focus:border-accent"
                >
                  <option value="">Selecteaza</option>
                  {siteData.contact.servicesOptions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                {errors.service ? (
                  <span className="text-xs text-danger">{errors.service.message}</span>
                ) : null}
              </div>
              <div className="grid gap-2">
                <label htmlFor="budget" className="text-sm text-muted">
                  Buget
                </label>
                <select
                  id="budget"
                  {...register("budget")}
                  className="rounded-xl border border-border/60 bg-base/60 px-4 py-2 text-sm text-text outline-none focus:border-accent"
                >
                  <option value="">Selecteaza</option>
                  {siteData.contact.budgets.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                {errors.budget ? (
                  <span className="text-xs text-danger">{errors.budget.message}</span>
                ) : null}
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm text-muted">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  className="rounded-xl border border-border/60 bg-base/60 px-4 py-2 text-sm text-text outline-none focus:border-accent"
                />
                {errors.message ? (
                  <span className="text-xs text-danger">{errors.message.message}</span>
                ) : null}
              </div>
              <Button type="submit" size="lg">
                Trimite cerere
              </Button>
              {submitted ? (
                <div className="text-sm text-success">
                  Formular trimis (placeholder). Integreaza Formspree sau EmailJS cand esti gata.
                </div>
              ) : null}
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="space-y-3">
              <h3 className="font-display text-xl">Date contact</h3>
              <p className="text-sm text-muted">Telefon: {siteData.site.phone}</p>
              <p className="text-sm text-muted">Email: {siteData.site.email}</p>
              <p className="text-sm text-muted">Locatie: {siteData.site.address}</p>
              <div className="flex flex-wrap gap-3 text-sm text-muted">
                <a href={siteData.site.socials.linkedin} className="hover:text-accent">
                  LinkedIn
                </a>
                <a href={siteData.site.socials.instagram} className="hover:text-accent">
                  Instagram
                </a>
                <a href={siteData.site.socials.facebook} className="hover:text-accent">
                  Facebook
                </a>
              </div>
            </Card>
            <Card className="space-y-3">
              <h3 className="font-display text-xl">Nota</h3>
              <p className="text-sm text-muted">{siteData.contact.note}</p>
              <p className="text-xs text-muted">
                Pentru Formspree/EmailJS, vezi `.env.example` si configureaza integratorul preferat.
              </p>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
