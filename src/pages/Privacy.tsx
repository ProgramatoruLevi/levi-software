import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import SEO from "../components/SEO";

const Privacy = () => {
  return (
    <div>
      <SEO
        title="Politica de confidentialitate"
        description="Informatii despre colectarea datelor si confidentialitate."
        path="/politica-de-confidentialitate"
      />
      <section className="pt-28 pb-20">
        <Container className="space-y-6">
          <SectionTitle
            eyebrow="Legal"
            title="Politica de confidentialitate"
            subtitle="Text minimal, actualizeaza cu informatiile legale complete."
          />
          <div className="space-y-4 text-sm text-muted">
            <p>
              Colectam doar datele necesare pentru comunicare si oferta personalizata.
            </p>
            <p>
              Datele sunt folosite strict pentru contact si nu sunt distribuite catre terti.
            </p>
            <p>
              Pentru solicitari, scrie la adresa de contact afisata pe site.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Privacy;