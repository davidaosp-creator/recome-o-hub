import {
  MessagesSquare,
  Hand,
  Circle,
  Flower2,
  Brain,
  type LucideIcon,
} from "lucide-react";

export interface Game {
  id: string;
  name: string;
  slug: string;
  path: "/roda-da-fala" | "/pausa-respira-pensa" | "/bolha-calma" | "/jardim-das-emocoes" | "/trilha-da-mente";
  description: string;
  objective: string;
  icon: LucideIcon;
  color: "blue" | "teal" | "terracotta" | "green" | "lavender";
  colorClasses: {
    text: string;
    background: string;
    ring: string;
  };
}

export const games: Game[] = [
  {
    id: "roda-da-fala",
    name: "Roda da Fala",
    slug: "roda-da-fala",
    path: "/roda-da-fala",
    description: "Cartas lúdicas para expressar sentimentos e situações do dia a dia.",
    objective: "Ajuda crianças a nomearem emoções e compartilharem experiências de forma leve e segura.",
    icon: MessagesSquare,
    color: "blue",
    colorClasses: {
      text: "text-game-blue",
      background: "bg-game-blue/10",
      ring: "ring-game-blue/30",
    },
  },
  {
    id: "pausa-respira-pensa",
    name: "Pausa, Respira, Pensa",
    slug: "pausa-respira-pensa",
    path: "/pausa-respira-pensa",
    description: "Reconhecer sentimentos antes de reagir para escolher melhor.",
    objective: "Trabalha autocontrole e impulsividade com pausas conscientes entre estímulo e resposta.",
    icon: Hand,
    color: "teal",
    colorClasses: {
      text: "text-game-teal",
      background: "bg-game-teal/10",
      ring: "ring-game-teal/30",
    },
  },
  {
    id: "bolha-calma",
    name: "Bolha Calma",
    slug: "bolha-calma",
    path: "/bolha-calma",
    description: "Respiração guiada visual para acalmar a mente no momento presente.",
    objective: "Oferece um exercício de respiração sincronizada com uma bolha que cresce e encolhe, aliviando a ansiedade.",
    icon: Circle,
    color: "terracotta",
    colorClasses: {
      text: "text-game-terracotta",
      background: "bg-game-terracotta/10",
      ring: "ring-game-terracotta/30",
    },
  },
  {
    id: "jardim-das-emocoes",
    name: "Jardim das Emoções",
    slug: "jardim-das-emocoes",
    path: "/jardim-das-emocoes",
    description: "Reconhecer emoções em situações cotidianas e expressões faciais.",
    objective: "Fortalece o vocabulário emocional ao conectar cenários do dia a dia com sentimentos e reações.",
    icon: Flower2,
    color: "green",
    colorClasses: {
      text: "text-game-green",
      background: "bg-game-green/10",
      ring: "ring-game-green/30",
    },
  },
  {
    id: "trilha-da-mente",
    name: "Trilha da Mente",
    slug: "trilha-da-mente",
    path: "/trilha-da-mente",
    description: "Uma pequena jornada para enfrentar pensamentos difíceis com estratégias de TCC.",
    objective: "Apresenta técnicas de Terapia Cognitivo-Comportamental de forma lúdica, ajudando a reestruturar pensamentos.",
    icon: Brain,
    color: "lavender",
    colorClasses: {
      text: "text-game-lavender",
      background: "bg-game-lavender/10",
      ring: "ring-game-lavender/30",
    },
  },
];

export function getGameBySlug(slug: Game["slug"]) {
  const game = games.find((g) => g.slug === slug);
  if (!game) {
    throw new Error(`Jogo não encontrado: ${slug}`);
  }
  return game;
}
