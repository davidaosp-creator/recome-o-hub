import { createFileRoute } from "@tanstack/react-router";
import { GameCard } from "@/components/GameCard";
import { games } from "@/lib/games";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Recomeço" },
      {
        name: "description",
        content:
          "Hub de jogos terapêuticos para apoiar psicólogas em sessão com crianças e adultos.",
      },
      {
        property: "og:title",
        content: "Recomeço",
      },
      {
        property: "og:description",
        content:
          "Hub de jogos terapêuticos para apoiar psicólogas em sessão com crianças e adultos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <main className="flex-1 px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-14">
          <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Bem-vindo ao Recomeço
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Jogos terapêuticos pensados para apoiar psicólogas durante as
            sessões, com calma e intenção.
          </p>
        </div>

        <section aria-label="Jogos disponíveis">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
