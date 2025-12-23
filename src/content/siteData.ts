import heroVisual from "../assets/ImagineHero.png";
import portfolioOne from "../assets/AFMCONSULTING.png";
import portfolioTwo from "../assets/MAGAZINELELUNCA.png";
import portfolioThree from "../assets/placeholder-portfolio-3.svg";
import galleryOne from "../assets/placeholder-gallery-1.svg";
import galleryTwo from "../assets/placeholder-gallery-2.svg";
import galleryThree from "../assets/placeholder-gallery-3.svg";
import galleryFour from "../assets/placeholder-gallery-4.svg";
import galleryFive from "../assets/placeholder-gallery-5.svg";
import gallerySix from "../assets/placeholder-gallery-6.svg";
import olxOne from "../assets/placeholder-olx-1.svg";
import olxTwo from "../assets/placeholder-olx-2.svg";
import olxThree from "../assets/placeholder-olx-3.svg";

export const siteData = {
  site: {
    name: "LEVI SOFTWARE",
    legalName: "LEVI SOFTWARE & CONSULTING SRL",
    description:
      "Web developer, consultanta fonduri si foto/video. Solutii digitale clare pentru branduri care vor conversie.",
    baseUrl: "https://levi-software.ro",
    domainSuggestion: "levi-software.ro",
    email: "contact@levi-software.ro",
    phone: "+40 700 000 000",
    address: "Romania - locatie placeholder",
    socials: {
      linkedin: "https://www.linkedin.com/",
      instagram: "https://www.instagram.com/",
      facebook: "https://www.facebook.com/"
    }
  },
  navigation: [
    { label: "Acasa", href: "/" },
    { label: "Servicii", href: "/servicii" },
    { label: "Portofoliu", href: "/portofoliu" },
    { label: "Fonduri Europene", href: "/fonduri-europene" },
    { label: "Foto/Video", href: "/foto-video" },
    { label: "Contact", href: "/contact" }
  ],
  hero: {
    headline: "Construiesc site-uri & aplicatii care vand.",
    subheadline:
      "Web Developer + Mobile Apps + Consultanta Fonduri (UE/AFM) + Foto/Video.",
    ctaPrimary: "Cere oferta",
    ctaSecondary: "Vezi portofoliu",
    highlightLine:
      "Agentie moderna pentru branduri care vor conversie.",
    visuals: [heroVisual]
  },
  about: {
    title: "Despre mine",
    body:
      "Developer si consultant orientat pe rezultate: site-uri rapide, UX clar, suport complet."
  },
  skills: [
    "React",
    "Vite",
    "TypeScript",
    "TailwindCSS",
    "Node.js",
    "React Native",
    "PostgreSQL",
    "Prisma",
    "Figma",
    "Framer Motion",
    "SEO",
    "Consultanta UE"
  ],
  services: [
    {
      id: "web",
      title: "Realizare site-uri & magazine online",
      short:
        "Site-uri rapide si elegante, optimizate SEO.",
      description:
        "Prezenta online moderna, cu focus pe lead-uri si claritate.",
      includes: [
        "Audit UX si obiective clare",
        "Design UI + prototip",
        "Implementare React + Vite",
        "Optimizare viteza si SEO",
        "Automatizari lead-uri"
      ],
      stack: ["React", "Vite", "TypeScript", "TailwindCSS"],
      timeline: "2-6 saptamani",
      priceFrom: "de la 1200 EUR",
      link: "/servicii#web"
    },
    {
      id: "mobile",
      title: "Aplicatii mobile",
      short:
        "Aplicatii mobile curate si usor de folosit.",
      description:
        "Aplicatii scalabile cu UX simplu si integrare API.",
      includes: [
        "Workshops de produs",
        "Wireframes + UI kit",
        "React Native development",
        "Publicare in store",
        "Monitorizare performanta"
      ],
      stack: ["React Native", "TypeScript", "Firebase"],
      timeline: "4-10 saptamani",
      priceFrom: "de la 2500 EUR",
      link: "/servicii#mobile"
    },
    {
      id: "funds",
      title: "Consultanta fonduri europene",
      short:
        "Eligibilitate, documentatie si strategie.",
      description:
        "Dosare solide si suport pe tot parcursul finantarii.",
      includes: [
        "Analiza eligibilitate",
        "Scriere proiect",
        "Bugetare si planificare",
        "Suport pe perioada implementarii"
      ],
      stack: ["Consultanta", "Management proiect"],
      timeline: "2-8 saptamani",
      priceFrom: "de la 900 EUR",
      link: "/fonduri-europene"
    },
    {
      id: "photo",
      title: "Foto/Video",
      short:
        "Sedinte foto si video pentru prezentare curata.",
      description:
        "Continut vizual coerent pentru site, social si anunturi.",
      includes: [
        "Sedinte foto produse",
        "Filmari scurte social",
        "Editare si livrare rapida",
        "Template-uri pentru anunturi"
      ],
      stack: ["Premiere", "Lightroom", "DaVinci"],
      timeline: "1-3 saptamani",
      priceFrom: "de la 400 EUR",
      link: "/foto-video"
    }
  ],
  achievements: [
    { label: "Proiecte livrate", value: 48, suffix: "+" },
    { label: "Clienti activi", value: 20, suffix: "+" },
    { label: "Finantari pregatite", value: 16, suffix: "+" }
  ],
  portfolio: [
    {
      slug: "afm-consulting",
      title: "AFM Consulting",
      category: "Consultanta",
      tags: ["Consultanta", "Web"],
      summary:
        "Website de prezentare pentru servicii AFM si consultanta, cu focus pe claritate si conversii.",
      url: "https://afmconsulting.ro/",
      image: portfolioOne,
      role: "UX + UI + Development",
      stack: ["React", "TypeScript", "TailwindCSS"],
      duration: "4 saptamani",
      results: [
        "Structura simplificata pentru lead-uri",
        "Landing-uri dedicate pentru programe AFM",
        "Design curat, credibil"
      ],
      gallery: [portfolioOne, galleryOne, galleryTwo]
    },
    {
      slug: "magazinele-luncailvei",
      title: "Magazinele Luncailvei",
      category: "Magazin online",
      tags: ["Magazin online", "Web"],
      summary:
        "Magazin online cu produse locale, optimizat pentru navigare rapida si comenzi clare.",
      url: "https://magazinele-luncailvei.ro/",
      image: portfolioTwo,
      role: "UX + UI + Development",
      stack: ["React", "TypeScript", "Payments"],
      duration: "6 saptamani",
      results: [
        "Checkout simplificat",
        "Structura clara pe categorii",
        "UX orientat pe conversii"
      ],
      gallery: [portfolioTwo, galleryThree, galleryFour]
    },
    {
      slug: "proiect-placeholder",
      title: "Loc pentru proiect nou",
      category: "Mobile",
      tags: ["Mobile", "UI"],
      summary:
        "Spatiu rezervat pentru urmatorul tau proiect premium.",
      url: "#",
      image: portfolioThree,
      role: "Product + UI",
      stack: ["React Native", "TypeScript"],
      duration: "TBA",
      results: [
        "Fluxuri UX definite",
        "UI premium pentru conversie",
        "Integrari API rapide"
      ],
      gallery: [portfolioThree, galleryFive, gallerySix]
    },
    {
      slug: "foto-video-placeholder",
      title: "Loc pentru mai multe (placeholder)",
      category: "Foto-Video",
      tags: ["Foto-Video"],
      summary: "Exemplu pentru servicii foto/video si prezentari vizuale.",
      url: "#",
      image: portfolioThree,
      role: "Directie creativa + Productie",
      stack: ["Foto", "Video", "Editare"],
      duration: "TBA",
      results: [
        "Storyboard clar si livrare rapida",
        "Look premium pentru brand",
        "Structura optimizata pentru social"
      ],
      gallery: [portfolioThree, galleryOne, galleryTwo]
    }
  ],
  process: [
    {
      step: "01",
      title: "Strategie",
      description: "Definim obiectivele, KPI-urile si mesajele cheie."
    },
    {
      step: "02",
      title: "Audit & Research",
      description: "Analizam piata, competitorii si publicul tinta."
    },
    {
      step: "03",
      title: "Design",
      description: "Prototipam UX si rafinam UI pentru impact."
    },
    {
      step: "04",
      title: "Development",
      description: "Construim rapid cu stack modern si componente reusable."
    },
    {
      step: "05",
      title: "Testare",
      description: "Validam performanta, accesibilitatea si conversiile."
    },
    {
      step: "06",
      title: "Launch",
      description: "Lansare controlata + suport post-lansare."
    }
  ],
  testimonials: [
    {
      name: "Client Premium",
      role: "CEO, Brand local",
      quote: "Rezultate rapide, comunicare clara si un site care vinde."
    },
    {
      name: "Antreprenor",
      role: "Founder, Magazin online",
      quote: "UX excelent, am simtit diferenta imediat dupa lansare."
    }
  ],
  funds: {
    intro:
      "Te ajut sa obtii finantare cu documentatie clara. Am proiecte asigurate si un proces predictibil.",
    assuredProjects: [
      "Planuri de investitii clare",
      "Bugete realist aliniate cu ghidul",
      "Documentatie completa si coerenta"
    ],
    eligibility: [
      "Analiza eligibilitatii pe fiecare program",
      "Identificare puncte tari",
      "Strategie pentru scor maxim"
    ],
    documents: [
      "Plan de afaceri",
      "Cereri de finantare",
      "Anexe si declaratii",
      "Bugete si cashflow"
    ],
    timeline: [
      "Saptamana 1: audit si eligibilitate",
      "Saptamana 2: structura proiect",
      "Saptamana 3-4: scriere + ajustari",
      "Depunere si follow-up"
    ],
    programs: [
      {
        title:
          "Investitii pentru procesarea si marketingul produselor agricole in vederea obtinerii unor produse alimentare si produse transformate, altele decat cele prevazute in Anexa 1 a Tratatului de Functionare a Uniunii Europene",
        deadline: "2025-12-15",
        deadlineLabel: "15 decembrie 2025",
        budget: 164929100,
        code: "DR-16",
        sectors: ["agricultura", "procesare"]
      },
      {
        title: "Investitii in sectorul legume si/sau cartofi",
        deadline: "2026-01-19",
        deadlineLabel: "19 ianuarie 2026",
        budget: 151383529,
        code: "DR-12",
        sectors: ["agricultura", "legume"]
      },
      {
        title:
          "Investitii in consolidarea exploatatiilor tinerilor fermieri instalati si a fermierilor recent instalati",
        deadline: "2026-01-30",
        deadlineLabel: "30 ianuarie 2026",
        budget: 169589647,
        code: "DR-17",
        sectors: ["agricultura", "tineri"]
      },
      {
        title: "Investitii in sectoarele hamei si/sau struguri de masa",
        deadline: "2026-02-02",
        deadlineLabel: "2 februarie 2026",
        budget: 45000000,
        code: "DR-19",
        sectors: ["agricultura", "viticultura"]
      },
      {
        title: "Investitii neproductive la nivel de ferma",
        deadline: "2026-02-09",
        deadlineLabel: "9 februarie 2026",
        budget: 11764706,
        code: "DR-21",
        sectors: ["agricultura", "dezvoltare"]
      },
      {
        title:
          "Investitii pentru prevenirea raspandirii pestei porcine africane (PPA)",
        deadline: "2026-02-13",
        deadlineLabel: "13 februarie 2026",
        budget: 10000000,
        code: "DR-18",
        sectors: ["agricultura", "zootehnie"]
      },
      {
        title: "Investitii in floricultura, plante medicinale si aromatice",
        deadline: "2026-02-23",
        deadlineLabel: "23 februarie 2026",
        budget: 5000000,
        code: "DR-14",
        sectors: ["agricultura", "floricultura"]
      },
      {
        title: "Investitii in fermele de mici dimensiuni",
        deadline: "2026-02-27",
        deadlineLabel: "27 februarie 2026",
        budget: 108000000,
        code: "TBA",
        sectors: ["agricultura", "ferme mici"]
      }
    ],
    afm: [
      {
        title: "Casa Verde",
        bullets: [
          "Dosare complete",
          "Coordonare documentatie",
          "Optimizare eligibilitate"
        ]
      },
      {
        title: "Rabla Auto",
        bullets: [
          "Eligibilitate si selectie",
          "Pregatire acte",
          "Suport depunere"
        ]
      },
      {
        title: "Rabla Tractoare",
        bullets: [
          "Strategie si planificare",
          "Bugete si timpi de raspuns",
          "Comunicare rapida"
        ]
      }
    ]
  },
  photoVideo: {
    hero:
      "Servicii foto/video curate pentru branduri care vor imagine profesionala.",
    services: [
      {
        title: "Sedinte foto",
        description:
          "Fotografii curate, lumina controlata, livrare rapida pentru site, social si marketplace."
      },
      {
        title: "Filmari reels",
        description:
          "Reels scurte cu impact, optimizate pentru social media."
      },
      {
        title: "Fotografiere masini + publicare anunt",
        description:
          "Pachet complet de fotografie auto si publicare anunt."
      }
    ],
    gallery: [galleryOne, galleryTwo, galleryThree, galleryFour, galleryFive, gallerySix],
    olxAds: [
      {
        title: "Anunt auto premium",
        price: "de la 9.500 EUR",
        description:
          "Structura anunt clara, fotografii profesioniste si copy orientat pe vanzare.",
        link: "#",
        images: [olxOne, olxTwo, olxThree]
      },
      {
        title: "Anunt utilitar",
        price: "de la 4.200 EUR",
        description:
          "Prezentare completa a produsului, detalii tehnice si accent pe beneficii.",
        link: "#",
        images: [olxTwo, olxThree]
      }
    ]
  },
  contact: {
    servicesOptions: [
      "Site / Magazin online",
      "Aplicatie mobila",
      "Consultanta fonduri",
      "Foto/Video"
    ],
    budgets: ["< 1.000 EUR", "1.000 - 3.000 EUR", "3.000 - 6.000 EUR", "6.000+ EUR"],
    note: "Formular demo. Integreaza Formspree sau EmailJS cand esti gata."
  }
};
