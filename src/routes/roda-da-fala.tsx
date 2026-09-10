import { createFileRoute } from "@tanstack/react-router";
import { GamePlaceholder } from "@/components/GamePlaceholder";
import { getGameBySlug } from "@/lib/games";

export const Route = createFileRoute("/roda-da-fala")({
  component: RodaDaFalaPage,
  head: () => ({
    meta: [
      { title: "Recomeço — Roda da Fala" },
      {
        name: "description",
        content:
          "Jogo de cartas para crianças expressarem sentimentos e situações através de perguntas lúdicas.",
      },
      { property: "og:title", content: "Recomeço — Roda da Fala" },
      {
        property: "og:description",
        content:
          "Jogo de cartas para crianças expressarem sentimentos e situações através de perguntas lúdicas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/roda-da-fala" }],
  }),
});

function RodaDaFalaPage() {
  return <GamePlaceholder game={getGameBySlug("roda-da-fala")} />;
}
