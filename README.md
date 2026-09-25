# Mãos que Transformam

Projeto acadêmico de desenvolvimento web para uma ONG fictícia chamada
**Mãos que Transformam**.

A proposta do projeto é apresentar a organização, seus projetos sociais
e disponibilizar um formulário para pessoas interessadas em atuar como
voluntárias.

## 📌 Sobre o projeto

A **Mãos que Transformam** é uma organização do terceiro setor criada
para fins acadêmicos. O site apresenta ações relacionadas a:

-   Alimentação;
-   Educação;
-   Voluntariado;
-   Campanhas de doação;
-   Participação da comunidade.

O projeto foi desenvolvido utilizando **HTML5, CSS3 e JavaScript**.

## 📁 Estrutura do projeto

``` text
maos_que_transformam/
│
├── index.html
├── projetos.html
├── cadastro.html
├── style.css
├── script.js
│
└── assets/
    ├── hero.png
    ├── projeto_alimentacao.png
    ├── projeto_educacao.png
    └── projeto_voluntariado.png
```

## 🌐 Páginas

### Início --- `index.html`

Página principal do site.

Apresenta:

-   Nome e proposta da ONG;
-   Imagem principal;
-   Informações sobre a organização;
-   Botão para se tornar voluntário;
-   Informações de contato.

### Projetos --- `projetos.html`

Apresenta os principais projetos sociais da ONG:

-   **Alimentação** --- ações de apoio alimentar e arrecadação de
    alimentos;
-   **Educação** --- oficinas e atividades educativas;
-   **Voluntariado** --- participação de voluntários nas ações da
    organização.

Também apresenta informações sobre campanhas de doação e um botão para
acessar o cadastro de voluntários.

### Cadastro --- `cadastro.html`

Página destinada ao cadastro de pessoas interessadas em participar como
voluntárias.

O formulário possui campos para:

-   Nome completo;
-   E-mail;
-   Data de nascimento;
-   CPF;
-   Telefone;
-   Endereço;
-   Cidade;
-   Estado;
-   CEP;
-   Área de interesse;
-   Mensagem sobre como deseja ajudar.

## 🎨 Estilização

O arquivo `style.css` é compartilhado pelas três páginas.

A identidade visual utiliza principalmente:

-   Azul `#0D3B66`;
-   Azul-claro `#EAF4FB`;
-   Branco `#FFFFFF`;
-   Laranja `#F4A261`.

O CSS também possui regras de responsividade para adaptar o site a telas
menores.

## ⚙️ JavaScript

O arquivo `script.js` é compartilhado pelas páginas.

Na página inicial, o JavaScript exibe uma mensagem quando o usuário
clica no botão **"Quero ser voluntário"**.

Na página de cadastro, o JavaScript:

1.  Intercepta o envio do formulário;
2.  Exibe uma mensagem de confirmação;
3.  Limpa os campos do formulário.

Como o projeto é acadêmico e não possui um servidor ou banco de dados
conectado, o cadastro **não é enviado para um sistema externo**.

## 🚀 Como executar

Não é necessário instalar dependências.

Basta abrir o arquivo:

``` text
index.html
```

em um navegador.

Para uma melhor experiência durante o desenvolvimento, o projeto também
pode ser aberto utilizando uma extensão como **Live Server** no Visual
Studio Code.

## 🛠️ Tecnologias utilizadas

-   **HTML5** --- estrutura das páginas;
-   **CSS3** --- estilização, layout e responsividade;
-   **JavaScript** --- interatividade e comportamento do formulário.

## 🎓 Finalidade

Este projeto foi desenvolvido para fins **acadêmicos**, com foco na
prática de desenvolvimento de páginas web utilizando HTML5, CSS3 e
JavaScript.

------------------------------------------------------------------------

**Mãos que Transformam --- Solidariedade que vira oportunidade.**
