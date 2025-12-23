import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import Button from "../components/Button";
import StatusPill from "../components/StatusPill";
import SEO from "../components/SEO";
import { siteData } from "../content/siteData";
import { formatNumber } from "../utils/format";
import { getProgramStatus } from "../utils/programStatus";

const Funds = () => {
  const [query, setQuery] = useState("");
  const [sector, setSector] = useState("Toate");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const sectors = useMemo(() => {
    const unique = new Set<string>();
    siteData.funds.programs.forEach((program) => {
      program.sectors.forEach((tag) => unique.add(tag));
    });
    return ["Toate", ...Array.from(unique)];
  }, []);

  const programs = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const filtered = siteData.funds.programs.filter((program) => {
      const matchesQuery = normalized
        ? program.title.toLowerCase().includes(normalized) ||
          program.code.toLowerCase().includes(normalized)
        : true;
      const matchesSector = sector === "Toate" ? true : program.sectors.includes(sector);
      return matchesQuery && matchesSector;
    });

    return filtered.sort((a, b) => {
      const dateA = new Date(a.deadline).getTime();
      const dateB = new Date(b.deadline).getTime();
      if (sortDir === "asc") return dateA - dateB;
      return dateB - dateA;
    });
  }, [query, sector, sortDir]);

  return (
    <div>
      <SEO
        title="Fonduri Europene"
        description="Consultanta completa pentru programe UE si AFM."
        path="/fonduri-europene"
      />

      <section className="pt-28 pb-16">
        <Container>
          <SectionTitle
            eyebrow="Fonduri Europene"
            title="Consultanta care maximizeaza sansele de aprobare"
            subtitle="Strategie, documentatie si suport complet pentru programe UE si AFM."
          />
        </Container>
      </section>

      <section className="pb-20">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="space-y-6">
            <h3 className="font-display text-xl">Cum te ajut</h3>
            <p className="text-sm text-muted">{siteData.funds.intro}</p>
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-[0.3em] text-muted">
                Proiecte asigurate
              </h4>
              <ul className="grid gap-2 text-sm text-muted">
                {siteData.funds.assuredProjects.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
            <Button to="/contact" size="sm" className="w-fit">
              Cere consultanta
            </Button>
          </Card>
          <Card className="space-y-6">
            <h3 className="font-display text-xl">Eligibilitate si documente</h3>
            <div className="space-y-2 text-sm text-muted">
              {siteData.funds.eligibility.map((item) => (
                <p key={item}>- {item}</p>
              ))}
            </div>
            <div className="space-y-2 text-sm text-muted">
              {siteData.funds.documents.map((item) => (
                <p key={item}>- {item}</p>
              ))}
            </div>
            <div className="space-y-2 text-sm text-muted">
              {siteData.funds.timeline.map((item) => (
                <p key={item}>- {item}</p>
              ))}
            </div>
          </Card>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <SectionTitle
            eyebrow="Programe"
            title="Lista programe active si viitoare"
            subtitle="Filtreaza dupa sector, cauta dupa cod sau sorteaza dupa deadline."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-[1.4fr_0.8fr_0.6fr]">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-3 text-muted" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Cauta program sau cod"
                className="w-full rounded-xl border border-border/60 bg-base/60 px-9 py-2 text-sm text-text outline-none focus:border-accent"
              />
            </div>
            <select
              value={sector}
              onChange={(event) => setSector(event.target.value)}
              className="w-full rounded-xl border border-border/60 bg-base/60 px-4 py-2 text-sm text-text outline-none focus:border-accent"
            >
              {sectors.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <button
              onClick={() => setSortDir(sortDir === "asc" ? "desc" : "asc")}
              className="rounded-xl border border-border/60 px-4 py-2 text-sm text-muted hover:text-text"
            >
              Sorteaza: {sortDir === "asc" ? "deadline crescator" : "deadline descrescator"}
            </button>
          </div>

          <div className="mt-8 hidden overflow-hidden rounded-2xl border border-border/40 md:block">
            <table className="w-full text-sm">
              <thead className="bg-surface/70 text-muted">
                <tr>
                  <th className="px-4 py-3 text-left">Program</th>
                  <th className="px-4 py-3 text-left">Deadline</th>
                  <th className="px-4 py-3 text-left">Buget</th>
                  <th className="px-4 py-3 text-left">Cod</th>
                  <th className="px-4 py-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((program) => {
                  const status = getProgramStatus(program.deadline);
                  return (
                    <tr key={program.code} className="border-t border-border/40">
                      <td className="px-4 py-4 text-text">{program.title}</td>
                      <td className="px-4 py-4 text-muted">{program.deadlineLabel}</td>
                      <td className="px-4 py-4 text-muted">
                        {formatNumber(program.budget)} EUR
                      </td>
                      <td className="px-4 py-4 text-muted">{program.code}</td>
                      <td className="px-4 py-4">
                        <StatusPill tone={status.tone}>{status.label}</StatusPill>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-4 md:hidden">
            {programs.map((program) => {
              const status = getProgramStatus(program.deadline);
              return (
                <Card key={program.code} className="space-y-3">
                  <h3 className="font-display text-base">{program.title}</h3>
                  <div className="text-xs text-muted">Deadline: {program.deadlineLabel}</div>
                  <div className="text-xs text-muted">Buget: {formatNumber(program.budget)} EUR</div>
                  <div className="text-xs text-muted">Cod: {program.code}</div>
                  <StatusPill tone={status.tone}>{status.label}</StatusPill>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <SectionTitle
            eyebrow="AFM"
            title="Fonduri Nationale AFM - reusite"
            subtitle="Multe reusite: Casa Verde, Rabla Auto, Rabla Tractoare."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {siteData.funds.afm.map((item) => (
              <Card key={item.title} className="space-y-4">
                <h3 className="font-display text-lg">{item.title}</h3>
                <div className="text-sm text-muted">
                  {item.bullets.map((bullet) => (
                    <p key={bullet}>- {bullet}</p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <Button to="/contact" size="sm">
              Cere consultanta <ArrowUpRight size={14} />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Funds;
