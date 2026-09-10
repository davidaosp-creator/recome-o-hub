# Recomeço Hub

Crie um aplicativo web chamado "Recomeço" (pode sugerir outro nome se achar melhor), 

um hub de jogos terapêuticos para psicólogas usarem em sessão com seus clientes.

ESTILO VISUAL:

- Acolhedor, calmo e profissional — não infantilizado, precisa funcionar tanto 

  para crianças quanto adultos

- Paleta de cores suaves (tons pastel de azul, verde-água e terracota), 

  bastante espaço em branco

- Tipografia arredondada mas legível, sem parecer "app de jogo comum"

- Ícones simples e ilustrativos, não realistas

TELA INICIAL (Home):

- Grid com 5 cards, um para cada jogo, cada card com: ícone, nome do jogo, 

  descrição curta (uma frase) do objetivo terapêutico

- Cabeçalho simples com o nome do app

OS 5 JOGOS (crie a rota e uma tela de "em breve" para cada um, sem lógica ainda):

1. "Roda da Fala" (/roda-da-fala) — jogo de cartas para crianças expressarem 

   sentimentos e situações através de perguntas lúdicas

2. "Pausa, Respira, Pensa" (/pausa-respira-pensa) — jogo de autocontrole e 

   impulsividade, trabalha reconhecer sentimentos antes de reagir

3. "Bolha Calma" (/bolha-calma) — exercício de respiração guiada visual, 

   uma bolha que cresce e encolhe no ritmo da respiração, para ansiedade

4. "Jardim das Emoções" (/jardim-das-emocoes) — jogo de reconhecer emoções 

   através de situações do cotidiano e expressões faciais

5. "Trilha da Mente" (/trilha-da-mente) — jornada curta estilo aventura, 

   onde o personagem enfrenta "pensamentos difíceis" usando técnicas de TCC

NAVEGAÇÃO:

- Use React Router, cada jogo em sua própria página

- Botão de "voltar ao hub" visível em todas as telas de jogo

DADOS:

- Por enquanto, sem backend/Supabase — apenas localStorage, se precisar 

  guardar progresso

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a591bd4d-f2ad-4254-9eff-f276a41b0bf6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
