import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Hand, RotateCcw, Wind } from "lucide-react";
import {
  getSituacaoPorId,
  getSituacoesPorFaixa,
  type FaixaEtaria,
} from "@/lib/pausaRespiraPensaData";

type Fase = "selecao" | "sentir" | "parar" | "relaxar" | "pensar";
type FiltroFaixa = FaixaEtaria | "todas";

const FILTROS: { key: FiltroFaixa; label: string }[] = [
  { key: "todas", label: "Todas" },
  { key: "crianca", label: "Crianças" },
  { key: "adolescente", label: "Adolescentes" },
];

const DURACAO_PARAR_MS = 3000;
const DURACAO_INSPIRA_MS = 4000;
const DURACAO_EXPIRA_MS = 4000;

export function PausaRespiraPensa() {
  const [filtro, setFiltro] = useState<FiltroFaixa>("todas");
  const [fase, setFase] = useState<Fase>("selecao");
  const [situacaoId, setSituacaoId] = useState<string | null>(null);
  const [emocaoEscolhida, setEmocaoEscolhida] = useState<string | null>(null);
  const [reacaoEscolhidaId, setReacaoEscolhidaId] = useState<string | null>(null);
  const [podeContinuarParar, setPodeContinuarParar] = useState(false);
  const [faseRespiracao, setFaseRespiracao] = useState<"inspira" | "expira">("inspira");

  const situacao = situacaoId ? getSituacaoPorId(situacaoId) : null;

  // Etapa "Parar": libera o botão de continuar só depois de alguns segundos,
  // pra realmente incentivar a pausa em vez de deixar clicar direto.
  useEffect(() => {
    if (fase !== "parar") return;
    setPodeContinuarParar(false);
    const timeout = setTimeout(() => setPodeContinuarParar(true), DURACAO_PARAR_MS);
    return () => clearTimeout(timeout);
  }, [fase]);

  // Etapa "Relaxar": um ciclo único de respiração (inspira -> expira),
  // depois avança sozinho para a etapa "Pensar".
  useEffect(() => {
    if (fase !== "relaxar") return;
    setFaseRespiracao("inspira");

    const timeoutExpira = setTimeout(() => {
      setFaseRespiracao("expira");
    }, DURACAO_INSPIRA_MS);

    const timeoutProximo = setTimeout(() => {
      setFase("pensar");
    }, DURACAO_INSPIRA_MS + DURACAO_EXPIRA_MS);

    return () => {
      clearTimeout(timeoutExpira);
      clearTimeout(timeoutProximo);
    };
  }, [fase]);

  function iniciarSituacao(id: string) {
    setSituacaoId(id);
    setEmocaoEscolhida(null);
    setReacaoEscolhidaId(null);
    setFase("sentir");
  }

  function voltarParaSelecao() {
    setFase("selecao");
    setSituacaoId(null);
    setEmocaoEscolhida(null);
    setReacaoEscolhidaId(null);
  }

  function repetirSituacao() {
    if (!situacaoId) return;
    iniciarSituacao(situacaoId);
  }

  const reacaoEscolhida =
    situacao && reacaoEscolhidaId
      ? (situacao.reacoes.find((r) => r.id === reacaoEscolhidaId) ?? null)
      : null;

  return (
    <main className="flex flex-1 flex-col items-center px-4 py-12">
      <div className="mx-auto w-full max-w-2xl text-center">
        <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Pausa, Respira, Pensa
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Reconhecer sentimentos antes de reagir para escolher melhor.
        </p>
      </div>

      {/* ETAPA: seleção da situação */}
      {fase === "selecao" && (
        <div className="mx-auto mt-10 w-full max-w-2xl">
          <div className="flex justify-center gap-2">
            {FILTROS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFiltro(f.key)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filtro === f.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {getSituacoesPorFaixa(filtro).map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => iniciarSituacao(s.id)}
                className="rounded-2xl border border-border/60 bg-card p-5 text-left shadow-sm transition-colors hover:border-game-teal/50 hover:bg-game-teal/5"
              >
                <span className="text-xs font-medium uppercase tracking-wide text-game-teal">
                  {s.faixaEtaria === "crianca" ? "Crianças" : "Adolescentes"}
                </span>
                <h2 className="mt-1 font-display text-lg font-semibold text-foreground">
                  {s.titulo}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">{s.cenario}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ETAPA: Sentir */}
      {fase === "sentir" && situacao && (
        <div className="mx-auto mt-10 w-full max-w-lg text-center">
          <span className="inline-flex rounded-full bg-game-teal/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-game-teal">
            Sentir
          </span>
          <p className="mt-4 text-lg leading-relaxed text-foreground">{situacao.cenario}</p>
          <p className="mt-6 text-sm font-medium text-muted-foreground">
            O que você acha que essa pessoa está sentindo?
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {situacao.emocoes.map((emocao) => (
              <button
                key={emocao}
                type="button"
                onClick={() => setEmocaoEscolhida(emocao)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  emocaoEscolhida === emocao
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
                }`}
              >
                {emocao}
              </button>
            ))}
          </div>

          <button
            type="button"
            disabled={!emocaoEscolhida}
            onClick={() => setFase("parar")}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Continuar
          </button>
        </div>
      )}

      {/* ETAPA: Parar */}
      {fase === "parar" && (
        <div className="mx-auto mt-10 flex w-full max-w-md flex-col items-center text-center">
          <span className="inline-flex rounded-full bg-game-teal/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-game-teal">
            Parar
          </span>
          <div className="mt-6 flex h-32 w-32 items-center justify-center rounded-full bg-game-teal/15 ring-4 ring-game-teal/25">
            <Hand className="h-14 w-14 text-game-teal" aria-hidden="true" />
          </div>
          <p className="mt-6 text-base leading-relaxed text-foreground">
            Vamos parar um instante antes de decidir o que fazer.
          </p>
          <button
            type="button"
            disabled={!podeContinuarParar}
            onClick={() => setFase("relaxar")}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {podeContinuarParar ? "Continuar" : "Aguarde um instante…"}
          </button>
        </div>
      )}

      {/* ETAPA: Relaxar */}
      {fase === "relaxar" && (
        <div className="mx-auto mt-10 flex w-full max-w-md flex-col items-center text-center">
          <span className="inline-flex rounded-full bg-game-teal/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-game-teal">
            Relaxar
          </span>

          <div className="relative mt-6 flex h-40 w-40 items-center justify-center">
            <div
              className="absolute inset-0 rounded-full bg-game-teal/25"
              style={{
                transform: `scale(${faseRespiracao === "inspira" ? 1.3 : 0.85})`,
                transitionProperty: "transform",
                transitionDuration: `${
                  faseRespiracao === "inspira" ? DURACAO_INSPIRA_MS : DURACAO_EXPIRA_MS
                }ms`,
                transitionTimingFunction: "ease-in-out",
              }}
            />
            <Wind className="relative h-10 w-10 text-game-teal" aria-hidden="true" />
          </div>

          <p className="mt-6 text-base font-medium text-foreground">
            {faseRespiracao === "inspira" ? "Inspire devagar…" : "Solte o ar devagar…"}
          </p>
        </div>
      )}

      {/* ETAPA: Pensar (+ reflexão) */}
      {fase === "pensar" && situacao && (
        <div className="mx-auto mt-10 w-full max-w-lg text-center">
          <span className="inline-flex rounded-full bg-game-teal/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-game-teal">
            Pensar
          </span>

          {!reacaoEscolhida ? (
            <>
              <p className="mt-4 text-base leading-relaxed text-foreground">
                Agora que você parou e respirou, o que faria nessa situação?
              </p>
              <div className="mt-5 flex flex-col gap-2">
                {situacao.reacoes.map((reacao) => (
                  <button
                    key={reacao.id}
                    type="button"
                    onClick={() => setReacaoEscolhidaId(reacao.id)}
                    className="rounded-xl border border-border/60 bg-card px-5 py-3 text-left text-sm font-medium text-foreground shadow-sm transition-colors hover:border-game-teal/50 hover:bg-game-teal/5"
                  >
                    {reacao.texto}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="mt-4 rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
              <p className="text-base leading-relaxed text-foreground">
                {reacaoEscolhida.reflexao}
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={repetirSituacao}
                  className="inline-flex items-center gap-2 rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden="true" />
                  Tentar outra reação
                </button>
                <button
                  type="button"
                  onClick={voltarParaSelecao}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  Nova situação
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <Link
        to="/"
        className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Voltar ao hub
      </Link>
    </main>
  );
}
