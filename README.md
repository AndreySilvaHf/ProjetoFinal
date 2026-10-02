AVA-EDUCA+

Plataforma web para centralizar o acompanhamento acadêmico (cursos e alunos) de uma empresa de educação profissional. Projeto avaliativo do módulo Front-End.

Sobre o projeto

Uma empresa especializada em educação profissional tinha seus dados acadêmicos (cursos e alunos) espalhados em diferentes sistemas e planilhas, dificultando o acompanhamento pela equipe pedagógica. O AVA-EDUCA+ resolve esse problema centralizando essas informações em uma única plataforma, acessível tanto em desktop quanto em dispositivos móveis.

O projeto é 100% front-end, feito com HTML, CSS e JavaScript puro (sem frameworks, sem servidor e sem banco de dados). Os dados são simulados através de arrays em arquivos JavaScript, e a sessão do usuário é controlada pelo `sessionStorage` do navegador.

Tecnologias utilizadas

- HTML5
- CSS3 (Flexbox, Media Queries para responsividade)
- JavaScript (ES6+)
- Módulos ES (`import`/`export`)
- [Moment.js](https://momentjs.com/) — validação de datas (via CDN)
- [API ViaCEP](https://viacep.com.br/) — busca automática de endereço pelo CEP

Funcionalidades

- Login com autenticação simulada, validação de dados e feedback visual
- Dashboard com listagem dos cursos do usuário logado, em formato de cards
- Cadastro de Aluno com formulário validado, preenchimento automático de endereço via CEP e feedback de sucesso/erro
- Navegação por cabeçalho e menu lateral, presentes em todas as telas (exceto login)
- Logout, com limpeza da sessão
- Layout responsivo, testado para mobile (até 768px) e desktop (acima de 768px)

Estrutura do projeto

ava-educa/
│
├── login/
│   ├── login.html
│   ├── login.js
│   └── login.css
│
├── dashboard/
│   ├── dashboard.html
│   ├── dashboard.js
│   └── dashboard.css
│
├── cadastro-aluno/
│   ├── cadastro-aluno.html
│   ├── cadastro-aluno.js
│   └── cadastro-aluno.css
│
├── js/
│   ├── app.js
│   ├── auth.js
│   ├── cursos.js
│   ├── Aluno.js
│   └── alunos.js
│
├── dados/
│   ├── listagem-usuarios.js
│   ├── listagem-cursos.js
│   └── listagem-alunos.js
│
├── assets/
│   ├── images/
│   └── icons/
│
├── index.html
├── README.md
└── package.json


Como executar

Como o projeto usa módulos ES (`import`/`export`), ele não pode ser aberto diretamente clicando duas vezes no arquivo HTML (`file://`) — é necessário rodar através de um servidor local.

Live Server (VS Code)
1. Instale a extensão Live Server
2. Clique com o botão direito em `index.html`
3. Selecione "Open with Live Server"

Usuários de teste

| Nome | Email | Senha |
|---|---|---|
| Ana Carolina Silva | ana.silva@edutech.com | 123456 |
| Carlos Eduardo Santos | carlos.santos@edutech.com | 654321 |
| Mariana Oliveira Costa | mariana.costa@edutech.com | edu2026 |

Fluxo de desenvolvimento (Git)

O projeto seguiu o fluxo de branches:
- `main` — recebe apenas o código final, via Pull Request vindo da `develop`
- `develop` — concentra o desenvolvimento das funcionalidades
- `feature/` — uma branch por funcionalidade, partindo da `develop`, integrada de volta via Pull Request

O acompanhamento das tarefas foi feito através de um quadro Kanban (Trello), com as colunas To Do, Doing e Done.
