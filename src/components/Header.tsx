import { Link } from "@tanstack/react-router";
import { Leaf } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-foreground transition-opacity hover:opacity-80"
        >
          <Leaf className="h-6 w-6 text-primary" aria-hidden="true" />
          <span className="font-display text-xl font-bold tracking-tight">
            Recomeço
          </span>
        </Link>

        <nav className="flex items-center gap-6" aria-label="Navegação principal">
          <Link
            to="/"
            activeProps={{ className: "font-semibold text-foreground" }}
            inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
            className="text-sm transition-colors"
          >
            Home
          </Link>
          <Link
            to="/sobre"
            activeProps={{ className: "font-semibold text-foreground" }}
            inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
            className="text-sm transition-colors"
          >
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}
