# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [0.1.0] - 2025-11-17

### Adicionado

#### Frontend - UI/UX
- Sistema de design completo com paleta de cores personalizada (#020659, #010B40, #03738C, #05F2F2, #F2E205)
- Tema dark/light mode com transição suave
- Layout responsivo com sidebar de navegação
- Gradientes personalizados para backgrounds suaves

#### Componentes UI
- Componentes shadcn/ui configurados:
  - Button, Card, Input, Label
  - Table, Tabs, Separator
  - Badge, Dialog
- ThemeProvider para gerenciamento de temas
- ThemeToggle para alternância entre dark/light mode
- Sidebar com navegação e logo personalizado

#### Páginas
- **Dashboard**: Visão geral com estatísticas, vendas recentes e alertas de estoque baixo
- **Produtos**: Gerenciamento completo de estoque com filtros por categoria e busca
- **Vendas**: Histórico de vendas, estatísticas e filtros por período
- **Clientes**: Cadastro de clientes com histórico de compras e classificação (VIP, Ativo, Novo)
- **Relatórios**: Análises de desempenho com produtos mais vendidos, vendas por categoria e evolução mensal

#### Configurações
- TypeScript configurado com path aliases (@/)
- Tailwind CSS v4 com sistema de design tokens
- Next.js 16 com App Router
- Fontes Geist Sans e Geist Mono

#### Documentação
- Estrutura de documentação em /development
- CHANGELOG.md para registro de mudanças
- ROADMAP.md para planejamento futuro
- README.md para documentação técnica
- Template de tasks em /development/task

### Em Desenvolvimento
- Sistema de autenticação
- Backend com API Routes
- Integração com banco de dados
- Sistema de upload de imagens de produtos

---

## Formato de Versionamento

- **MAJOR** version para mudanças incompatíveis na API
- **MINOR** version para funcionalidades adicionadas de forma retrocompatível
- **PATCH** version para correções de bugs retrocompatíveis

## Tipos de Mudanças

- **Adicionado** para novas funcionalidades
- **Modificado** para mudanças em funcionalidades existentes
- **Depreciado** para funcionalidades que serão removidas em breve
- **Removido** para funcionalidades removidas
- **Corrigido** para correções de bugs
- **Segurança** para correções de vulnerabilidades
