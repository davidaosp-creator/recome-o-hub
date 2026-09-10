import { createFileRoute } from "@tanstack/react-router";
import { GamePlaceholder } from "@/components/GamePlaceholder";
import { getGameBySlug } from "@/lib/games";

export const Route = createFileRoute("/jardim-das-emocoes")({
  component: JardimDasEmocoesPage,
  head: () => ({
    meta: [
      { title: "Recomeço — Jardim das Emoções" },
      {
        name: "description",
        content:
          "Jogo de reconhecer emoções através de situações do cotidiano e expressões faciais.",
      },
      { property: "og:title", content: "Recomeço — Jardim das Emoções" },
      {
        property: "og:description",
        content:
          "Jogo de reconhecer emoções através de situações do cotidiano e expressões faciais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/jardim-das-emocoes" }],
  }),
});

function JardimDasEmocoesPage() {
  return <GamePlaceholder game={getGameBySlug("jardim-das-emocoes")} />;
}
