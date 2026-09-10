# Recomeço — Hub de Jogos Terapêuticos

## O que será construído

Um aplicativo web em português chamado **Recomeço**: um hub com 5 jogos terapêuticos para psicólogas usarem em sessão. Nesta primeira versão, o hub funciona completo e cada jogo tem sua própria página com tela de "em breve" — sem lógica de jogo ainda.

## Estilo visual

- **Clima:** acolhedor, calmo e profissional — funciona para crianças e adultos, sem infantilizar
- **Paleta:** pastéis de azul, verde-água e terracota sobre fundo claro quente, com bastante espaço em branco
- **Tipografia:** arredondada e legível (família estilo Nunito/Quicksand para títulos, sans limpa para texto)
- **Ícones:** simples e ilustrativos (Lucide), cada jogo com ícone e cor de destaque próprios dentro da paleta
- Cards suaves com cantos arredondados generosos e sombras discretas

## Estrutura

### Tela inicial (/)
- Cabeçalho simples com o nome "Recomeço" e subtítulo curto
- Grid com 5 cards (responsivo: 1 coluna no celular, 2-3 no desktop), cada card com:
  - Ícone ilustrativo
  - Nome do jogo
  - Uma frase descrevendo o objetivo terapêutico
- Clique no card navega para a página do jogo

### Páginas dos jogos (tela "em breve")
Cada uma com: ícone e nome do jogo, descrição do objetivo terapêutico, aviso "Em breve" com texto gentil, e botão "Voltar ao hub".

| Jogo | Rota | Foco |
|---|---|---|
| Roda da Fala | /roda-da-fala | Expressar sentimentos por perguntas lúdicas |
| Pausa, Respira, Pensa | /pausa-respira-pensa | Autocontrole e impulsividade |
| Bolha Calma | /bolha-calma | Respiração guiada para ansiedade |
| Jardim das Emoções | /jardim-das-emocoes | Reconhecer emoções no cotidiano |
| Trilha da Mente | /trilha-da-mente | Pensamentos difíceis com técnicas de TCC |

## Melhorias adicionais

### 1. Rodapé ético
- Rodapé simples e discreto, visível na Home e em todas as páginas de jogo
- Texto: "Recomeço é uma ferramenta de apoio à sessão terapêutica e não substitui avaliação, diagnóstico ou acompanhamento profissional."
- Estilo: texto pequeno, cor suave acinzentada dentro da paleta, centralizado, sem competir com o conteúdo principal

### 2. Identidade mínima
- Favicon simples e abstrato (folha, espiral ou brotinho) nas cores da paleta
- `<title>` da Home: "Recomeço"
- `<title>` das páginas de jogo: "Recomeço — [Nome do Jogo]", via `head()` de cada rota

### 3. Página "Sobre" (/sobre)
- Nova rota `/sobre`, acessível por link no cabeçalho
- Título "Sobre o Recomeço"
- 3-4 frases explicando o propósito do hub: reunir jogos com base em técnicas terapêuticas reconhecidas (TCC, autocontrole, regulação emocional) para apoiar psicólogas em sessão
- Botão "Voltar ao hub"
- Mesmo estilo visual do resto do app

## Detalhes técnicos

- TanStack Router (o roteador do projeto): um arquivo de rota por jogo em `src/routes/`, com `head()` próprio (título e descrição únicos por página, em português)
- Paleta e fontes definidas como tokens em `src/styles.css` (oklch); fontes carregadas via `<link>` no `__root.tsx`
- Dados dos jogos (nome, ícone, descrição, rota, cor) centralizados em um arquivo único, para home e páginas de jogo consumirem a mesma fonte
- Sem backend: nada de Supabase nesta fase; localStorage será usado no futuro quando os jogos ganharem lógica
- Cada página de jogo terá um layout compartilhado com o botão "Voltar ao hub" sempre visível
