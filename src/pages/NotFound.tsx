import Container from "../components/Container";
import Button from "../components/Button";
import SEO from "../components/SEO";

const NotFound = () => {
  return (
    <div className="pt-28 pb-20">
      <SEO title="404" description="Pagina nu exista." path="/404" />
      <Container className="space-y-4">
        <h1 className="font-display text-4xl">Pagina nu exista</h1>
        <p className="text-muted">Verifica URL-ul sau revino la pagina principala.</p>
        <Button to="/" variant="outline">
          Inapoi acasa
        </Button>
      </Container>
    </div>
  );
};

export default NotFound;