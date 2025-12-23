import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Container from "./Container";
import Button from "./Button";
import { siteData } from "../content/siteData";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-base/80">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <h3 className="font-display text-xl">{siteData.site.legalName}</h3>
          <p className="text-muted text-sm">{siteData.site.description}</p>
          <div className="flex items-center gap-3">
            <a
              href={siteData.site.socials.linkedin}
              className="rounded-full border border-border/50 p-2 text-muted hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={siteData.site.socials.instagram}
              className="rounded-full border border-border/50 p-2 text-muted hover:text-accent"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href={siteData.site.socials.facebook}
              className="rounded-full border border-border/50 p-2 text-muted hover:text-accent"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm uppercase tracking-[0.3em] text-muted">Pagini</h4>
          <div className="flex flex-col gap-2 text-sm text-muted">
            {siteData.navigation.map((item) => (
              <Link key={item.href} to={item.href} className="hover:text-text">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm uppercase tracking-[0.3em] text-muted">
            Ai un proiect?
          </h4>
          <p className="text-sm text-muted">
            Hai sa discutam despre obiectivele tale si sa construim un plan clar.
          </p>
          <Button to="/contact" size="sm" className="w-fit">
            Cere oferta
          </Button>
          <div className="text-xs text-muted">{siteData.site.address}</div>
        </div>
      </Container>
      <div className="border-t border-border/40">
        <Container className="flex flex-col gap-2 py-4 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <span>(c) {new Date().getFullYear()} {siteData.site.legalName}</span>
          <div className="flex items-center gap-4">
            <Link to="/politica-de-confidentialitate" className="hover:text-text">
              Politica de confidentialitate
            </Link>
            <Link to="/cookies" className="hover:text-text">
              Cookies
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
