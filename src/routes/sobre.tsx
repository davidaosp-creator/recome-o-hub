import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, HeartHandshake, Sparkles, Users } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  component: SobrePage,
  head: () => ({
    meta: [
      { title: "Sobre o Recomeço" },
      {
        name: "description",
        content:
          "Conheça o propósito do Recomeço: um hub de jogos terapêuticos baseados em técnicas reconhecidas para apoiar psicólogas em sessão.",
      },
      { property: "og:title", content: "Sobre o Recomeço" },
      {
        property: "og:description",
        content:
          "Conheça o propósito do Recomeço: um hub de jogos terapêuticos baseados em técnicas reconhecidas para apoiar psicólogas em sessão.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
});

function SobrePage() {
  return (
    <main className="flex-1 px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm sm:p-10">
          <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Sobre o Recomeço
          </h1>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            O Recomeço nasceu da vontade de reunir, em um só lugar, jogos e
            exercícios que apoiam psicólogas no trabalho clínico com seus
            clientes. Cada atividade é construída com base em princípios
            reconhecidos da psicologia, como a Terapia Cognitivo-Comportamental
            (TCC), estratégias de autocontrole e técnicas de regulação
            emocional.
          </p>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A proposta é oferecer ferramentas simples, acolhedoras e
            profissionais — sem infantilizar a experiência — para que crianças,
            adolescentes e adultos possam explorar emoções, pensamentos e
            comportamentos de forma lúdica durante a sessão.
          </p>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            O hub não substitui o cuidado clínico, mas funciona como um
            complemento prático para tornar os encontros terapêuticos mais
            engajantes e significativos.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="flex flex-col items-center rounded-xl bg-secondary p-4 text-center">
              <HeartHandshake className="h-6 w-6 text-primary" aria-hidden="true" />
              <span className="mt-2 text-sm font-medium text-secondary-foreground">
                Acolhimento
              </span>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-secondary p-4 text-center">
              <Sparkles className="h-6 w-6 text-primary" aria-hidden="true" />
              <span className="mt-2 text-sm font-medium text-secondary-foreground">
                Técnicas validadas
              </span>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-secondary p-4 text-center">
              <Users className="h-6 w-6 text-primary" aria-hidden="true" />
              <span className="mt-2 text-sm font-medium text-secondary-foreground">
                Para todas as idades
              </span>
            </div>
          </div>

          <div className="mt-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Voltar ao hub
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
