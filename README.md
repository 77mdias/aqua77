# 🐠 Aqua77 - Sistema de Gestão para Aquarismo

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)

Sistema completo de controle de estoque e divulgação de vendas para lojas de aquários e peixes.

[Demo](#) | [Documentação](./development/README.md) | [Roadmap](./development/ROADMAP.md)

</div>

---

## 📋 Sobre o Projeto

Aqua77 é uma aplicação full-stack desenvolvida em Next.js que oferece uma solução completa para gestão de lojas de aquarismo. Com uma interface moderna e minimalista, o sistema permite controlar estoque, gerenciar vendas, cadastrar clientes e gerar relatórios detalhados.

### ✨ Características Principais

- 🎨 **Design Moderno**: Interface limpa e minimalista com tema dark/light
- 📊 **Dashboard Intuitivo**: Visão geral do negócio com métricas em tempo real
- 📦 **Gestão de Estoque**: Controle completo de produtos com alertas de estoque baixo
- 💰 **Controle de Vendas**: Histórico detalhado e análise de vendas
- 👥 **Cadastro de Clientes**: Gestão de clientes com histórico de compras
- 📈 **Relatórios Avançados**: Análises de desempenho e insights de negócio
- 🌓 **Tema Claro/Escuro**: Alternância suave entre modos
- 📱 **Design Responsivo**: Funciona perfeitamente em mobile, tablet e desktop

---

## 🎨 Preview

### Dashboard
Visão geral com estatísticas de vendas, estoque e alertas importantes.

### Produtos
Gerenciamento completo de produtos com filtros por categoria e busca avançada.

### Vendas
Histórico de vendas com filtros por período e detalhes de cada transação.

### Clientes
Cadastro de clientes com classificação VIP e histórico de compras.

### Relatórios
Análises detalhadas com produtos mais vendidos, vendas por categoria e evolução mensal.

---

## 🚀 Tecnologias

### Core
- **[Next.js 16](https://nextjs.org/)** - Framework React com Server-Side Rendering
- **[React 19](https://react.dev/)** - Biblioteca para interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript com tipagem estática

### UI/UX
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Framework CSS utilitário
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes UI reutilizáveis
- **[Radix UI](https://www.radix-ui.com/)** - Primitivos de UI acessíveis
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones
- **[Framer Motion](https://www.framer.com/motion/)** - Animações fluidas

### Ferramentas
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Gerenciamento de temas
- **[clsx](https://github.com/lukeed/clsx)** - Utilitário para classes CSS
- **[date-fns](https://date-fns.org/)** - Manipulação de datas

---

## 🎨 Sistema de Cores

O design utiliza uma paleta inspirada no tema aquático:

```css
#020659 - Azul Marinho Profundo (Primary)
#010B40 - Azul Marinho Escuro (Background Dark)
#03738C - Azul Esverdeado/Teal (Secondary)
#05F2F2 - Ciano Vibrante (Accent)
#F2E205 - Amarelo Destaque (Warning/Highlight)
```

Gradientes suaves disponíveis para backgrounds e destaques visuais.

---

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 18+ instalado
- npm, yarn ou pnpm

### Instalação

1. Clone o repositório
```bash
git clone <repository-url>
cd aqua77
```

2. Instale as dependências
```bash
npm install
```

3. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador

### Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa linter
```

---

## 📁 Estrutura do Projeto

```
aqua77/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Dashboard (página inicial)
│   ├── produtos/          # Gestão de produtos
│   ├── vendas/            # Gestão de vendas
│   ├── clientes/          # Gestão de clientes
│   ├── relatorios/        # Relatórios e análises
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── ui/               # Componentes UI (shadcn)
│   ├── sidebar.tsx       # Navegação lateral
│   ├── theme-provider.tsx # Provider de temas
│   └── theme-toggle.tsx  # Toggle dark/light
├── lib/                  # Utilitários e helpers
├── development/          # Documentação técnica
│   ├── CHANGELOG.md      # Histórico de mudanças
│   ├── ROADMAP.md        # Planejamento futuro
│   ├── README.md         # Documentação dev
│   └── task/             # Templates de tasks
└── public/               # Arquivos estáticos
```

---

## 🗺️ Roadmap

### ✅ Fase 1: MVP (Concluído)
- [x] Frontend completo com todas as páginas
- [x] Sistema de design e temas
- [x] Componentes UI base
- [x] Layout responsivo

### 🚧 Fase 2: Backend (Em Planejamento)
- [ ] Configuração do banco de dados (Prisma + PostgreSQL)
- [ ] API Routes para todas as entidades
- [ ] Validação de dados
- [ ] Tratamento de erros

### 🔜 Fase 3: Autenticação
- [ ] Sistema de login/registro
- [ ] Controle de permissões (Admin, Gerente, Vendedor)
- [ ] Proteção de rotas

### 🔮 Fases Futuras
- Upload de imagens de produtos
- Sistema de PDV (Ponto de Venda)
- Impressão de recibos
- E-commerce integrado
- App mobile (PWA)

[Ver roadmap completo](./development/ROADMAP.md)

---

## 📚 Documentação

- **[Guia de Desenvolvimento](./development/README.md)** - Setup, convenções e boas práticas
- **[Changelog](./development/CHANGELOG.md)** - Histórico de mudanças
- **[Roadmap](./development/ROADMAP.md)** - Planejamento de funcionalidades

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, siga estas diretrizes:

1. Faça fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Padrão de Commits

Seguimos o [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação
- `refactor:` Refatoração de código
- `test:` Testes
- `chore:` Tarefas de manutenção

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

Desenvolvido com 💙 para a comunidade de aquarismo.

---

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Vercel](https://vercel.com/)
- Comunidade open-source

---

<div align="center">

**[⬆ Voltar ao topo](#-aqua77---sistema-de-gestão-para-aquarismo)**

</div>
