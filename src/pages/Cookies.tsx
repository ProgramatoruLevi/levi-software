import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import SEO from "../components/SEO";

const Cookies = () => {
  return (
    <div>
      <SEO
        title="Cookies"
        description="Informatii despre cookie-uri si preferinte."
        path="/cookies"
      />
      <section className="pt-28 pb-20">
        <Container className="space-y-6">
          <SectionTitle
            eyebrow="Legal"
            title="Politica cookies"
            subtitle="Text minimal, actualizeaza cu informatiile legale complete."
          />
          <div className="space-y-4 text-sm text-muted">
            <p>
              Folosim cookie-uri pentru a imbunatati experienta si pentru analiza de baza.
            </p>
            <p>
              Poti modifica preferintele in setarile browserului tau oricand.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Cookies;