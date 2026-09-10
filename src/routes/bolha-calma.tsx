import { createFileRoute } from "@tanstack/react-router";
import { BolhaCalma } from "@/components/games/BolhaCalma";

export const Route = createFileRoute("/bolha-calma")({
  component: BolhaCalmaPage,
  head: () => ({
    meta: [
      { title: "Recomeço — Bolha Calma" },
      {
        name: "description",
        content:
          "Exercício de respiração guiada visual para ansiedade: uma bolha que cresce e encolhe no ritmo da respiração.",
      },
      { property: "og:title", content: "Recomeço — Bolha Calma" },
      {
        property: "og:description",
        content:
          "Exercício de respiração guiada visual para ansiedade: uma bolha que cresce e encolhe no ritmo da respiração.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/bolha-calma" }],
  }),
});

function BolhaCalmaPage() {
  return <BolhaCalma />;
}
