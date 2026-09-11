export type FaixaEtaria = "crianca" | "adolescente";

export interface OpcaoReacao {
  id: string;
  texto: string;
  reflexao: string;
}

export interface Situacao {
  id: string;
  faixaEtaria: FaixaEtaria;
  titulo: string;
  cenario: string;
  emocoes: string[];
  reacoes: OpcaoReacao[];
}

export const situacoes: Situacao[] = [
  {
    id: "brinquedo-emprestado",
    faixaEtaria: "crianca",
    titulo: "O brinquedo emprestado",
    cenario: "Seu amigo pegou seu brinquedo sem pedir e não quer devolver.",
    emocoes: ["Raiva", "Tristeza", "Frustração"],
    reacoes: [
      {
        id: "gritar-tomar",
        texto: "Gritar e tomar o brinquedo de volta",
        reflexao:
          "Isso pode aliviar na hora, mas costuma virar mais briga. Que tal experimentar outro jeito da próxima vez?",
      },
      {
        id: "pedir-calma",
        texto: "Respirar fundo e pedir o brinquedo de volta com calma",
        reflexao: "Pedir com calma ajuda o outro a te escutar melhor — muitas vezes funciona bem!",
      },
      {
        id: "contar-adulto",
        texto: "Contar para um adulto o que aconteceu",
        reflexao: "Pedir ajuda para um adulto de confiança é uma atitude corajosa e válida.",
      },
    ],
  },
  {
    id: "fila-parquinho",
    faixaEtaria: "crianca",
    titulo: "A fila do parquinho",
    cenario: "Alguém furou a fila do escorregador na sua frente.",
    emocoes: ["Raiva", "Injustiça", "Impaciência"],
    reacoes: [
      {
        id: "empurrar",
        texto: "Empurrar a pessoa para trás",
        reflexao:
          "Empurrar pode machucar alguém e criar um problema maior. Existem formas mais seguras de resolver isso.",
      },
      {
        id: "falar-furou",
        texto: "Falar com calma que ela furou a fila",
        reflexao: "Explicar com tranquilidade o que aconteceu costuma resolver sem gerar briga.",
      },
      {
        id: "chamar-responsavel",
        texto: "Chamar quem está tomando conta do parquinho",
        reflexao: "Pedir apoio a um adulto responsável também é uma boa escolha.",
      },
    ],
  },
  {
    id: "desenho-estragado",
    faixaEtaria: "crianca",
    titulo: "O desenho estragado",
    cenario: "Seu colega derrubou tinta sem querer no seu desenho, que você fez com muito cuidado.",
    emocoes: ["Tristeza", "Raiva", "Frustração"],
    reacoes: [
      {
        id: "gritar-colega",
        texto: "Gritar com o colega na frente de todo mundo",
        reflexao:
          "Foi sem querer — gritar pode magoar quem já está se sentindo mal por ter derrubado a tinta.",
      },
      {
        id: "respirar-explicar",
        texto: "Respirar fundo e dizer como você se sentiu",
        reflexao:
          "Contar como você se sente, sem gritar, ajuda o outro a entender o quanto aquilo era importante pra você.",
      },
      {
        id: "pedir-ajuda-refazer",
        texto: "Pedir ajuda para tentar consertar ou refazer o desenho",
        reflexao: "Buscar uma solução junto com o colega pode até fortalecer a amizade.",
      },
    ],
  },
  {
    id: "comentario-grupo",
    faixaEtaria: "adolescente",
    titulo: "O comentário no grupo",
    cenario: "Alguém fez um comentário sobre você em um grupo de WhatsApp e várias pessoas riram.",
    emocoes: ["Vergonha", "Raiva", "Ansiedade"],
    reacoes: [
      {
        id: "responder-rispido",
        texto: "Responder na hora com algo ríspido no grupo",
        reflexao:
          "Responder no calor do momento pode aumentar a exposição. Às vezes vale dar um tempo antes de reagir.",
      },
      {
        id: "sair-grupo-silencio",
        texto: "Sair do grupo sem falar nada com ninguém",
        reflexao:
          "Se afastar pode aliviar na hora, mas guardar o que sentiu pode pesar depois — conversar com alguém de confiança ajuda.",
      },
      {
        id: "conversar-particular",
        texto: "Chamar a pessoa em particular para conversar sobre isso",
        reflexao:
          "Falar em particular, com calma, costuma abrir espaço para um pedido de desculpas ou um entendimento melhor.",
      },
    ],
  },
  {
    id: "combinado-desmarcado",
    faixaEtaria: "adolescente",
    titulo: "Combinado desmarcado",
    cenario: "Seu amigo cancelou um encontro combinado há dias, de última hora, sem explicação.",
    emocoes: ["Frustração", "Tristeza", "Decepção"],
    reacoes: [
      {
        id: "ignorar-amigo",
        texto: "Parar de responder as mensagens dele por um tempo",
        reflexao:
          "Isso evita o desconforto na hora, mas não resolve o que você sentiu — e o amigo pode nem saber que te magoou.",
      },
      {
        id: "falar-como-sentiu",
        texto: "Dizer com calma que ficou chateado(a) com o cancelamento",
        reflexao:
          "Contar como você se sentiu, sem acusar, costuma abrir espaço para uma conversa honesta.",
      },
      {
        id: "perguntar-motivo",
        texto: "Perguntar se está tudo bem, já que cancelou de repente",
        reflexao:
          "Às vezes um cancelamento de última hora tem um motivo que você não imagina — perguntar com cuidado ajuda a entender.",
      },
    ],
  },
  {
    id: "nota-prova",
    faixaEtaria: "adolescente",
    titulo: "A nota da prova",
    cenario:
      "Você tirou uma nota baixa numa prova que estudou bastante, e um colega comentou de forma debochada.",
    emocoes: ["Vergonha", "Raiva", "Desânimo"],
    reacoes: [
      {
        id: "revidar-debochado",
        texto: "Responder ao colega com um deboche parecido",
        reflexao: "Pode parecer justo na hora, mas costuma só alimentar a provocação.",
      },
      {
        id: "ignorar-seguir",
        texto: "Ignorar o comentário e seguir em frente",
        reflexao:
          "Não dar atenção a provocações costuma tirar a graça delas — mas se incomodar, vale conversar com alguém sobre isso depois.",
      },
      {
        id: "falar-professor-adulto",
        texto: "Conversar com um professor ou adulto sobre como estudar melhor",
        reflexao:
          "Buscar apoio para entender onde melhorar é uma atitude que foca no que você pode controlar.",
      },
    ],
  },
];

export function getSituacoesPorFaixa(filtro: FaixaEtaria | "todas") {
  if (filtro === "todas") return situacoes;
  return situacoes.filter((s) => s.faixaEtaria === filtro);
}

export function getSituacaoPorId(id: string) {
  const situacao = situacoes.find((s) => s.id === id);
  if (!situacao) {
    throw new Error(`Situação não encontrada: ${id}`);
  }
  return situacao;
}
