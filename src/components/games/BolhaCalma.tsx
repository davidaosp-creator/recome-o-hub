import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Pause, Play, RotateCcw } from "lucide-react";

type PhaseKey = "inspire" | "segura" | "expire";

interface Phase {
  key: PhaseKey;
  label: string;
  instruction: string;
  durationMs: number;
  scale: number;
}

const PHASES: Phase[] = [
  {
    key: "inspire",
    label: "Inspire",
    instruction: "Inspire lentamente pelo nariz",
    durationMs: 4000,
    scale: 1.35,
  },
  {
    key: "segura",
    label: "Segure",
    instruction: "Segure o ar com suavidade",
    durationMs: 4000,
    scale: 1.35,
  },
  {
    key: "expire",
    label: "Expire",
    instruction: "Solte o ar bem devagar pela boca",
    durationMs: 6000,
    scale: 0.85,
  },
];

const DURATION_OPTIONS = [
  { label: "3 min", minutes: 3 },
  { label: "5 min", minutes: 5 },
  { label: "10 min", minutes: 10 },
];

export function BolhaCalma() {
  const [selectedMinutes, setSelectedMinutes] = useState(3);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [secondsLeftInPhase, setSecondsLeftInPhase] = useState(PHASES[0]!.durationMs / 1000);
  const [cycleCount, setCycleCount] = useState(0);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  const phaseTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const tickIntervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const totalSeconds = selectedMinutes * 60;
  // phaseIndex sempre fica entre 0 e PHASES.length - 1 (ciclo controlado com %),
  // então o acesso ao array nunca é undefined na prática.
  const currentPhase: Phase = PHASES[phaseIndex] ?? PHASES[0]!;

  useEffect(() => {
    if (!isRunning) return;

    // Avança para a próxima fase da respiração (inspire -> segura -> expire -> ...)
    phaseTimeoutRef.current = setTimeout(() => {
      const nextIndex = (phaseIndex + 1) % PHASES.length;
      if (nextIndex === 0) {
        setCycleCount((c) => c + 1);
      }
      setPhaseIndex(nextIndex);
      setSecondsLeftInPhase(PHASES[nextIndex]!.durationMs / 1000);
    }, currentPhase.durationMs);

    return () => clearTimeout(phaseTimeoutRef.current);
  }, [isRunning, phaseIndex, currentPhase.durationMs]);

  useEffect(() => {
    if (!isRunning) return;

    // Contagem geral (tempo decorrido + segundos restantes da fase atual)
    tickIntervalRef.current = setInterval(() => {
      setSecondsLeftInPhase((s) => (s > 0 ? s - 1 : 0));
      setElapsedSeconds((prev) => {
        const next = prev + 1;
        if (next >= totalSeconds) {
          setIsRunning(false);
          setIsFinished(true);
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(tickIntervalRef.current);
  }, [isRunning, totalSeconds]);

  function handleStart() {
    setIsFinished(false);
    setIsRunning(true);
  }

  function handlePause() {
    setIsRunning(false);
  }

  function handleReset() {
    setIsRunning(false);
    setIsFinished(false);
    setPhaseIndex(0);
    setSecondsLeftInPhase(PHASES[0]!.durationMs / 1000);
    setCycleCount(0);
    setElapsedSeconds(0);
  }

  const minutesLeft = Math.floor((totalSeconds - elapsedSeconds) / 60);
  const secondsRemainderLeft = (totalSeconds - elapsedSeconds) % 60;

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-12 text-center">
      <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Bolha Calma</h1>
      <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
        Respiração guiada visual para acalmar a mente no momento presente.
      </p>

      {/* Bolha animada */}
      <div className="relative mt-10 flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72">
        <div
          className="absolute inset-0 rounded-full bg-game-terracotta/20"
          style={{
            transform: `scale(${isRunning || isFinished ? currentPhase.scale : 1})`,
            transitionProperty: "transform",
            transitionDuration: `${currentPhase.durationMs}ms`,
            transitionTimingFunction: "ease-in-out",
          }}
        />
        <div
          className="absolute inset-6 rounded-full bg-game-terracotta/35"
          style={{
            transform: `scale(${isRunning ? currentPhase.scale : 1})`,
            transitionProperty: "transform",
            transitionDuration: `${currentPhase.durationMs}ms`,
            transitionTimingFunction: "ease-in-out",
          }}
        />
        <div className="relative flex h-28 w-28 flex-col items-center justify-center rounded-full bg-card shadow-sm ring-1 ring-game-terracotta/30 sm:h-32 sm:w-32">
          {isRunning ? (
            <>
              <span className="font-display text-lg font-semibold text-foreground">
                {currentPhase.label}
              </span>
              <span className="mt-1 text-2xl font-bold text-game-terracotta">
                {secondsLeftInPhase}
              </span>
            </>
          ) : isFinished ? (
            <span className="px-2 text-sm font-medium text-foreground">Sessão concluída</span>
          ) : (
            <span className="px-2 text-sm font-medium text-muted-foreground">
              Pronto para começar
            </span>
          )}
        </div>
      </div>

      {/* Instrução da fase atual */}
      <p className="mt-8 min-h-6 text-base font-medium text-foreground">
        {isRunning
          ? currentPhase.instruction
          : isFinished
            ? "Muito bem. Perceba como o corpo está agora."
            : "Escolha a duração e toque em começar quando estiver pronta."}
      </p>

      {/* Seleção de duração (só antes de começar) */}
      {!isRunning && !isFinished && (
        <div className="mt-6 flex gap-2">
          {DURATION_OPTIONS.map((option) => (
            <button
              key={option.minutes}
              type="button"
              onClick={() => setSelectedMinutes(option.minutes)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedMinutes === option.minutes
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {/* Progresso da sessão */}
      {(isRunning || (isFinished && elapsedSeconds > 0)) && (
        <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
          <span>Ciclos: {cycleCount}</span>
          <span aria-hidden="true">•</span>
          <span>
            Faltam {minutesLeft}:{secondsRemainderLeft.toString().padStart(2, "0")}
          </span>
        </div>
      )}

      {/* Controles */}
      <div className="mt-8 flex items-center gap-3">
        {!isRunning && !isFinished && (
          <button
            type="button"
            onClick={handleStart}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Play className="h-4 w-4" aria-hidden="true" />
            Começar
          </button>
        )}

        {isRunning && (
          <button
            type="button"
            onClick={handlePause}
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground shadow-sm transition-colors hover:bg-secondary/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Pause className="h-4 w-4" aria-hidden="true" />
            Pausar
          </button>
        )}

        {(isRunning || isFinished || elapsedSeconds > 0) && (
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 rounded-full border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Reiniciar
          </button>
        )}
      </div>

      <Link
        to="/"
        className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Voltar ao hub
      </Link>
    </main>
  );
}
