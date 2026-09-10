import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { Game } from "@/lib/games";

interface GamePlaceholderProps {
  game: Game;
}

export function GamePlaceholder({ game }: GamePlaceholderProps) {
  const Icon = game.icon;

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-12 text-center">
      <div
        className={`mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl ${game.colorClasses.background} ${game.colorClasses.text} ring-1 ${game.colorClasses.ring}`}
      >
        <Icon className="h-10 w-10" aria-hidden="true" />
      </div>

      <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
        {game.name}
      </h1>

      <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
        {game.objective}
      </p>

      <div className="mt-8 inline-flex items-center rounded-full bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground">
        Em breve
      </div>

      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Voltar ao hub
      </Link>
    </main>
  );
}
