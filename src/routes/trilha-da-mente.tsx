import { createFileRoute } from "@tanstack/react-router";
import { GamePlaceholder } from "@/components/GamePlaceholder";
import { getGameBySlug } from "@/lib/games";

export const Route = createFileRoute("/trilha-da-mente")({
  component: TrilhaDaMentePage,
  head: () => ({
    meta: [
      { title: "Recomeço — Trilha da Mente" },
      {
        name: "description",
        content:
          "Jornada curta estilo aventura para enfrentar pensamentos difíceis usando técnicas de TCC.",
      },
      { property: "og:title", content: "Recomeço — Trilha da Mente" },
      {
        property: "og:description",
        content:
          "Jornada curta estilo aventura para enfrentar pensamentos difíceis usando técnicas de TCC.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/trilha-da-mente" }],
  }),
});

function TrilhaDaMentePage() {
  return <GamePlaceholder game={getGameBySlug("trilha-da-mente")} />;
}
