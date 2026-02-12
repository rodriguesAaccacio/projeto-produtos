# 📦 StockHub - Gerenciador de Produtos

O **StockHub** é uma solução de gerenciamento de inventário leve e intuitiva. Desenvolvido para facilitar o cadastro, edição e exclusão de itens, o projeto conta com uma interface moderna, responsiva e focada na experiência do usuário (UX), conectada a um banco de dados relacional.

![Status do Projeto](https://img.shields.io/badge/Status-Conclu%C3%ADdo-success?style=for-the-badge)
![Tecnologias](https://img.shields.io/badge/Stack-HTML5%20|%20CSS3%20|%20JS%20|%20Node.js%20|%20MySQL-blue?style=for-the-badge)

## 🚀 Funcionalidades

* **Painel Administrativo:** Interface limpa para navegação rápida.
* **Gestão de Produtos (CRUD):**
    * **Cadastro:** Inclusão de novos itens com validação de campos.
    * **Listagem:** Visualização em cards dinâmicos com formatação de moeda (BRL).
    * **Edição:** Alteração de dados existentes com preenchimento automático.
    * **Exclusão:** Remoção de itens com confirmação de segurança.
* **UX Inteligente:**
    * **Botões de navegação dinâmicos:** Detectam se o usuário veio da Home ou do Catálogo para retornar ao local correto.
    * **Estados Vazios:** Mensagem estilizada quando não há produtos cadastrados.
    * **Limitadores de interface:** Tratamento de textos longos com efeito *ellipsis* (...).

## 🛠️ Tecnologias Utilizadas

* **Front-end:**
    * HTML5 Semântico.
    * CSS3 (Flexbox, Grid, Backdrop-filter).
    * JavaScript Vanilla (Fetch API, LocalStorage).
* **Back-end:**
    * Node.js.
    * Express framework.
    * `mysql2` driver para conexão segura.
* **Banco de Dados:**
    * MySQL (Tabela dedicada: `produtos_andressa`).

## 📂 Estrutura do Projeto

```text
├── api/
│   ├── src/
│   │   └── server.js     # Servidor Node.js e rotas da API
│   ├── node_modules/     # Dependências locais (não versionadas)
│   ├── .gitignore        # Arquivos ignorados pelo Git
│   ├── package-lock.json # Trava de versões das dependências
│   ├── package.json      # Scripts e dependências (express, cors, mysql2)
│   └── schema.sql        # Script SQL de criação da tabela
├── web/
│   ├── cadastro/         # Módulo de criação e edição
│   │   ├── cadastro.html
│   │   ├── script-cadastro.js
│   │   └── style-cadastro.css
│   ├── produtos/         # Módulo de visualização e catálogo
│   │   ├── produtos.html
│   │   ├── script-produtos.js
│   │   └── style-produtos.css
│   ├── index.html        # Página de entrada (Home)
│   └── style-home.css    # Estilo global da página inicial
└── README.md             # Documentação do projeto

```

## 🔧 Como Executar o Projeto

### Pré-requisitos

* Node.js instalado.
* Acesso ao servidor MySQL especificado no `server.js`.

### Passos

1. **Clone o repositório:**
```bash
git clone [https://github.com/rodriguesAaccacio/projeto-produtos.git](https://github.com/rodriguesAaccacio/projeto-produtos.git)
cd projeto-produtos

```


2. **Configurar o Banco de Dados (Na Escola/Servidor):**
* Utilize o script `api/schema.sql` para criar a tabela `produtos_andressa` no banco de dados configurado.


3. **Instalar Dependências da API:**
```bash
cd api
npm install

```


4. **Iniciar o Servidor:**
```bash
npm run dev

```


5. **Acessar o Projeto:**
Abra seu navegador e acesse: `http://localhost:3000`

---

Desenvolvido como projeto prático de banco de dados e desenvolvimento web.