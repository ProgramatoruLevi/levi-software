import { useState } from "react";
import { X } from "lucide-react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import Button from "../components/Button";
import SEO from "../components/SEO";
import { siteData } from "../content/siteData";

const PhotoVideo = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div>
      <SEO
        title="Foto/Video"
        description="Servicii foto si video pentru prezentare premium."
        path="/foto-video"
      />

      <section className="pt-28 pb-16">
        <Container>
          <SectionTitle
            eyebrow="Foto/Video"
            title="Continut vizual care ridica standardul"
            subtitle={siteData.photoVideo.hero}
          />
        </Container>
      </section>

      <section className="pb-20">
        <Container className="grid gap-6 md:grid-cols-3">
          {siteData.photoVideo.services.map((service) => (
            <Card key={service.title} className="space-y-3">
              <h3 className="font-display text-lg">{service.title}</h3>
              <p className="text-sm text-muted">{service.description}</p>
            </Card>
          ))}
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <SectionTitle
            eyebrow="Galerie"
            title="Poze facute (placeholder)"
            subtitle="Inlocuieste placeholder-ele cu imaginile tale reale."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siteData.photoVideo.gallery.map((image, index) => (
              <button
                key={`gallery-${index}`}
                onClick={() => setActiveImage(image)}
                className="group relative overflow-hidden rounded-2xl border border-border/40"
              >
                <img
                  src={image}
                  alt={`Galerie ${index + 1}`}
                  className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <SectionTitle
            eyebrow="OLX"
            title="Anunturi OLX realizate de mine"
            subtitle="Structura este pregatita, inlocuieste datele cu informatii reale."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {siteData.photoVideo.olxAds.map((ad) => (
              <Card key={ad.title} className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg">{ad.title}</h3>
                  <span className="text-sm text-accent">{ad.price}</span>
                </div>
                <p className="text-sm text-muted">{ad.description}</p>
                <div className="flex gap-3">
                  {ad.images.map((img, idx) => (
                    <img
                      key={`${ad.title}-${idx}`}
                      src={img}
                      alt={`${ad.title} ${idx + 1}`}
                      className="h-20 w-20 rounded-xl border border-border/40 object-cover"
                      loading="lazy"
                    />
                  ))}
                </div>
                <Button href={ad.link} variant="outline" size="sm">
                  Link anunt
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute right-6 top-6 rounded-full border border-border/60 bg-base/70 p-2"
            onClick={() => setActiveImage(null)}
            aria-label="Inchide"
          >
            <X size={18} />
          </button>
          <img
            src={activeImage}
            alt="Vizual marit"
            className="max-h-[80vh] w-full max-w-4xl rounded-2xl border border-border/40 object-contain"
          />
        </div>
      ) : null}
    </div>
  );
};

export default PhotoVideo;