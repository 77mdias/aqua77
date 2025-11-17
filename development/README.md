# Documentação de Desenvolvimento - Aqua77

Bem-vindo à documentação de desenvolvimento do projeto Aqua77. Este diretório contém toda a documentação técnica, planejamento e recursos para desenvolvedores.

## Índice

- [Visão Geral](#visão-geral)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Setup de Desenvolvimento](#setup-de-desenvolvimento)
- [Sistema de Design](#sistema-de-design)
- [Convenções de Código](#convenções-de-código)
- [Documentos](#documentos)

---

## Visão Geral

Aqua77 é uma aplicação full-stack desenvolvida em Next.js para gerenciamento completo de loja de aquarismo, incluindo controle de estoque, vendas, clientes e relatórios.

### Objetivos do Projeto
- Digitalizar e automatizar processos de vendas
- Controle eficiente de estoque
- Gestão de relacionamento com clientes
- Análises e relatórios de desempenho
- Interface moderna e intuitiva

---

## Estrutura do Projeto

```
aqua77/
├── app/                    # Next.js App Router
│   ├── (routes)/
│   │   ├── produtos/      # Página de produtos
│   │   ├── vendas/        # Página de vendas
│   │   ├── clientes/      # Página de clientes
│   │   └── relatorios/    # Página de relatórios
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Dashboard (home)
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── ui/               # Componentes UI (shadcn)
│   ├── sidebar.tsx       # Barra lateral de navegação
│   ├── theme-provider.tsx # Provider de temas
│   └── theme-toggle.tsx  # Toggle dark/light
├── lib/                  # Utilitários
│   └── utils.ts          # Funções auxiliares
├── development/          # Documentação
│   ├── CHANGELOG.md      # Registro de mudanças
│   ├── ROADMAP.md        # Planejamento
│   ├── README.md         # Este arquivo
│   └── task/             # Templates de tasks
├── public/               # Arquivos estáticos
└── package.json          # Dependências
```

---

## Tecnologias Utilizadas

### Core
- **Next.js 16** - Framework React com SSR/SSG
- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Estilização

### UI/UX
- **shadcn/ui** - Componentes UI
- **Radix UI** - Primitivos acessíveis
- **Lucide React** - Ícones
- **next-themes** - Gerenciamento de temas
- **Framer Motion** - Animações

### Utilidades
- **clsx** - Manipulação de classes
- **tailwind-merge** - Merge de classes Tailwind
- **class-variance-authority** - Variantes de componentes
- **date-fns** - Manipulação de datas
- **recharts** - Gráficos (planejado)

---

## Setup de Desenvolvimento

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Git

### Instalação

```bash
# Clone o repositório
git clone <repository-url>
cd aqua77

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:3000`

### Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Build para produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa linter
```

---

## Sistema de Design

### Paleta de Cores

A paleta é baseada em tons de azul e ciano, refletindo o tema aquático:

```css
/* Cores Principais */
--aqua-navy-deep: #020659    /* Azul marinho escuro */
--aqua-navy-dark: #010B40    /* Azul marinho muito escuro */
--aqua-teal: #03738C         /* Azul esverdeado/teal */
--aqua-cyan: #05F2F2         /* Ciano vibrante */
--aqua-yellow: #F2E205       /* Amarelo destaque */
```

### Gradientes Disponíveis

```css
.bg-gradient-aqua     /* Navy deep → Teal */
.bg-gradient-ocean    /* Teal → Cyan */
.bg-gradient-deep     /* Navy dark → Navy deep */
.bg-gradient-vibrant  /* Cyan → Yellow */
.bg-gradient-soft-1   /* Navy deep → Cyan (suave) */
.bg-gradient-soft-2   /* Teal → Yellow (suave) */
```

### Tokens de Design

O projeto usa CSS Variables para temas consistentes:

```css
/* Light Mode */
--background: Branco
--foreground: Azul escuro
--primary: Navy deep
--accent: Cyan

/* Dark Mode */
--background: Navy dark
--foreground: Branco
--primary: Cyan
--accent: Cyan
```

### Componentes UI

Todos os componentes seguem o padrão shadcn/ui e são totalmente customizáveis:

- Button (variantes: default, destructive, outline, secondary, ghost, link)
- Card (com Header, Title, Description, Content, Footer)
- Input (com estados de focus, error, disabled)
- Badge (variantes: default, secondary, destructive, outline, success, warning)
- Table (responsiva e estilizada)
- Tabs (para navegação em seções)

---

## Convenções de Código

### TypeScript
- Use tipos explícitos sempre que possível
- Evite `any`, prefira `unknown` quando necessário
- Interfaces para objetos, Types para unions/intersections

### React
- Componentes funcionais com hooks
- Use `"use client"` apenas quando necessário
- Props tipadas com interfaces

### Nomenclatura
- Componentes: PascalCase (`ProductCard.tsx`)
- Funções: camelCase (`getUserData()`)
- Constantes: UPPER_SNAKE_CASE (`API_URL`)
- Arquivos: kebab-case para utilitários (`format-date.ts`)

### Estrutura de Componentes

```tsx
// Imports externos
import { useState } from "react"
import { Button } from "@/components/ui/button"

// Imports internos
import { formatCurrency } from "@/lib/utils"

// Types
interface ComponentProps {
  title: string
  value: number
}

// Componente
export function Component({ title, value }: ComponentProps) {
  const [state, setState] = useState(false)

  return (
    <div>
      {/* JSX */}
    </div>
  )
}
```

### CSS/Tailwind
- Prefira classes do Tailwind a CSS customizado
- Use `cn()` para combinar classes condicionalmente
- Agrupe classes por tipo: layout → spacing → typography → colors

---

## Documentos

### CHANGELOG.md
Registro cronológico de todas as mudanças no projeto. Atualizar a cada feature/fix implementado.

### ROADMAP.md
Planejamento de funcionalidades futuras organizadas por fases e prioridades.

### task/
Diretório contendo templates para documentação de tarefas e issues.

---

## Fluxo de Desenvolvimento

### Branch Strategy
```
main (produção)
  └── develop (desenvolvimento)
       ├── feature/nome-feature
       ├── fix/nome-fix
       └── docs/nome-doc
```

### Commits
Seguir padrão Conventional Commits:

```
feat: adiciona página de produtos
fix: corrige bug no tema dark
docs: atualiza README
style: formata código com prettier
refactor: reorganiza componentes
test: adiciona testes para API
```

### Pull Requests
1. Criar branch a partir de `develop`
2. Implementar feature/fix
3. Testar localmente
4. Atualizar CHANGELOG.md
5. Criar PR para `develop`
6. Code review
7. Merge após aprovação

---

## Troubleshooting

### Erro de Path Alias
Se `@/` não funcionar, verifique `tsconfig.json`:
```json
"paths": {
  "@/*": ["./*"]
}
```

### Tema não muda
Certifique-se de que:
1. `ThemeProvider` está no layout
2. `suppressHydrationWarning` está no `<html>`
3. CSS variables estão definidas

### Build Errors
```bash
# Limpar cache e reinstalar
rm -rf .next node_modules
npm install
npm run build
```

---

## Recursos Úteis

- [Next.js Docs](https://nextjs.org/docs)
- [shadcn/ui Docs](https://ui.shadcn.com)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Radix UI Docs](https://www.radix-ui.com)

---

## Contato e Suporte

Para dúvidas ou sugestões sobre o desenvolvimento:
- Abra uma issue no repositório
- Consulte a documentação existente
- Entre em contato com a equipe de desenvolvimento

---

**Última atualização:** 17/11/2025
**Versão:** 0.1.0
