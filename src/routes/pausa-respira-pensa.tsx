import { createFileRoute } from "@tanstack/react-router";
import { PausaRespiraPensa } from "@/components/games/PausaRespiraPensa";

export const Route = createFileRoute("/pausa-respira-pensa")({
  component: PausaRespiraPensaPage,
  head: () => ({
    meta: [
      { title: "Recomeço — Pausa, Respira, Pensa" },
      {
        name: "description",
        content: "Jogo de autocontrole e impulsividade: reconhecer sentimentos antes de reagir.",
      },
      { property: "og:title", content: "Recomeço — Pausa, Respira, Pensa" },
      {
        property: "og:description",
        content: "Jogo de autocontrole e impulsividade: reconhecer sentimentos antes de reagir.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/pausa-respira-pensa" }],
  }),
});

function PausaRespiraPensaPage() {
  return <PausaRespiraPensa />;
}
