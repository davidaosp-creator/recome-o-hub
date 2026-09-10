import { Link } from "@tanstack/react-router";
import type { Game } from "@/lib/games";

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const Icon = game.icon;

  return (
    <Link
      to={game.path}
      className="group flex flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div
        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${game.colorClasses.background} ${game.colorClasses.text} ring-1 ${game.colorClasses.ring} transition-transform group-hover:scale-105`}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h2 className="font-display text-lg font-semibold text-card-foreground">
        {game.name}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {game.description}
      </p>
    </Link>
  );
}
