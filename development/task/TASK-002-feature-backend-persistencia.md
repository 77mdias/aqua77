# Task #002 - Implementar Backend e Persistência de Dados

---

## 📋 Informações Básicas

**ID da Task:** #002
**Título:** Implementar Backend e Persistência de Dados (Fase 2)
**Tipo:** [X] Feature | [ ] Bug | [ ] Enhancement | [ ] Documentation
**Prioridade:** [X] Crítica | [ ] Alta | [ ] Média | [ ] Baixa
**Status:** [ ] Todo | [ ] In Progress | [ ] Review | [X] Done

**Criado em:** 17/11/2025
**Atualizado em:** 17/11/2025
**Responsável:** Equipe Backend
**Estimativa:** 40-60 horas (1-2 semanas)

---

## 🎯 Objetivo

Implementar a camada de backend completa da aplicação Aqua77, incluindo:
- Configuração e modelagem do banco de dados com Prisma ORM
- Criação de API Routes para todas as entidades (Produtos, Vendas, Clientes)
- Sistema de validação de dados com Zod
- Tratamento de erros padronizado
- Integração do frontend com as APIs

---

## 📝 Descrição Detalhada

### Contexto
Atualmente a aplicação possui apenas o frontend implementado com dados mockados. Esta task visa criar toda a infraestrutura de backend necessária para persistir e gerenciar os dados da aplicação de forma segura e escalável.

### Motivação
- Permitir que os dados sejam salvos e recuperados do banco de dados
- Garantir validação consistente dos dados
- Criar uma API RESTful bem estruturada
- Preparar a base para futuras features (autenticação, relatórios avançados, etc.)

### Requisitos Específicos
1. **Banco de Dados**: PostgreSQL ou SQLite (para desenvolvimento)
2. **ORM**: Prisma com TypeScript
3. **Validação**: Zod para schemas e validação de entrada
4. **API**: Next.js App Router API Routes
5. **Tratamento de Erros**: Sistema padronizado com códigos HTTP adequados

### Casos de Uso
- Cadastrar um novo produto no sistema
- Registrar uma venda e atualizar estoque automaticamente
- Buscar clientes com filtros e paginação
- Gerar relatórios baseados em dados reais do banco

---

## ✅ Critérios de Aceitação

### Database & Prisma
- [X] Prisma ORM instalado e configurado
- [X] Schema do banco de dados completo (produtos, vendas, clientes, categorias)
- [X] Migrations criadas e funcionando
- [X] Seed com dados de exemplo implementado
- [X] Relações entre tabelas corretamente mapeadas

### API Routes - Produtos
- [X] POST /api/produtos - Criar produto
- [X] GET /api/produtos - Listar produtos (com filtros e paginação)
- [X] GET /api/produtos/[id] - Buscar produto por ID
- [X] PUT /api/produtos/[id] - Atualizar produto
- [X] DELETE /api/produtos/[id] - Deletar produto
- [X] GET /api/produtos/estoque-baixo - Produtos com estoque abaixo do mínimo

### API Routes - Vendas
- [X] POST /api/vendas - Criar venda
- [X] GET /api/vendas - Listar vendas (com filtros por data, cliente, status)
- [X] GET /api/vendas/[id] - Buscar venda por ID
- [X] PUT /api/vendas/[id] - Atualizar venda
- [X] GET /api/vendas/estatisticas - Estatísticas de vendas

### API Routes - Clientes
- [X] POST /api/clientes - Criar cliente
- [X] GET /api/clientes - Listar clientes (com busca e paginação)
- [X] GET /api/clientes/[id] - Buscar cliente por ID
- [X] PUT /api/clientes/[id] - Atualizar cliente
- [X] DELETE /api/clientes/[id] - Deletar cliente
- [X] GET /api/clientes/[id]/historico - Histórico de compras do cliente

### Validação
- [X] Schemas Zod para todas as entidades
- [X] Validação de entrada em todas as rotas
- [X] Mensagens de erro descritivas e em português
- [X] Validação de tipos, formatos e regras de negócio

### Tratamento de Erros
- [X] Middleware de tratamento de erros global
- [X] Códigos HTTP apropriados (200, 201, 400, 404, 500)
- [X] Formato de resposta de erro padronizado
- [X] Logs de erros estruturados

### Integração Frontend
- [X] Substituir dados mockados por chamadas à API
- [X] Loading states durante requisições
- [X] Tratamento de erros no frontend
- [X] Toast notifications para feedback ao usuário
- [X] Atualização otimista (optional)

---

## 🔧 Implementação Técnica

### Arquivos que Serão Criados

```
prisma/
├── schema.prisma              # Schema do banco de dados
├── migrations/                # Migrations do Prisma
└── seed.ts                    # Dados de exemplo

app/api/
├── produtos/
│   ├── route.ts              # GET, POST /api/produtos
│   ├── [id]/route.ts         # GET, PUT, DELETE /api/produtos/[id]
│   └── estoque-baixo/route.ts # GET /api/produtos/estoque-baixo
├── vendas/
│   ├── route.ts              # GET, POST /api/vendas
│   ├── [id]/route.ts         # GET, PUT /api/vendas/[id]
│   └── estatisticas/route.ts # GET /api/vendas/estatisticas
└── clientes/
    ├── route.ts              # GET, POST /api/clientes
    ├── [id]/route.ts         # GET, PUT, DELETE /api/clientes/[id]
    └── [id]/historico/route.ts # GET /api/clientes/[id]/historico

lib/
├── prisma.ts                  # Prisma client singleton
├── validations/
│   ├── produto.schema.ts     # Zod schemas para produtos
│   ├── venda.schema.ts       # Zod schemas para vendas
│   └── cliente.schema.ts     # Zod schemas para clientes
└── errors.ts                  # Tratamento de erros

hooks/
└── use-api.ts                 # Hook para chamadas à API (opcional)
```

### Tecnologias/Bibliotecas

```json
{
  "dependencies": {
    "@prisma/client": "^5.7.0",
    "zod": "^3.22.4"
  },
  "devDependencies": {
    "prisma": "^5.7.0"
  }
}
```

### Estrutura de Dados

#### Schema Prisma

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql" // ou "sqlite" para dev
  url      = env("DATABASE_URL")
}

model Categoria {
  id        String    @id @default(cuid())
  nome      String    @unique
  descricao String?
  produtos  Produto[]
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
}

model Produto {
  id           String        @id @default(cuid())
  nome         String
  descricao    String?
  preco        Float
  estoque      Int
  estoqueMin   Int           @default(5)
  categoriaId  String
  categoria    Categoria     @relation(fields: [categoriaId], references: [id])
  imagens      String[]      @default([])
  ativo        Boolean       @default(true)
  ItemVenda    ItemVenda[]
  createdAt    DateTime      @default(now())
  updatedAt    DateTime      @updatedAt

  @@index([categoriaId])
  @@index([ativo])
}

model Cliente {
  id            String   @id @default(cuid())
  nome          String
  email         String   @unique
  telefone      String
  cpf           String?  @unique
  endereco      String?
  cidade        String?
  estado        String?
  cep           String?
  observacoes   String?
  ativo         Boolean  @default(true)
  vendas        Venda[]
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  @@index([email])
  @@index([ativo])
}

model Venda {
  id              String      @id @default(cuid())
  clienteId       String
  cliente         Cliente     @relation(fields: [clienteId], references: [id])
  itens           ItemVenda[]
  total           Float
  desconto        Float       @default(0)
  formaPagamento  String
  status          String      @default("concluida") // concluida, pendente, cancelada
  observacoes     String?
  createdAt       DateTime    @default(now())
  updatedAt       DateTime    @updatedAt

  @@index([clienteId])
  @@index([status])
  @@index([createdAt])
}

model ItemVenda {
  id         String   @id @default(cuid())
  vendaId    String
  venda      Venda    @relation(fields: [vendaId], references: [id], onDelete: Cascade)
  produtoId  String
  produto    Produto  @relation(fields: [produtoId], references: [id])
  quantidade Int
  precoUnit  Float
  subtotal   Float
  createdAt  DateTime @default(now())

  @@index([vendaId])
  @@index([produtoId])
}
```

#### Zod Schemas

```typescript
// lib/validations/produto.schema.ts
import { z } from "zod"

export const createProdutoSchema = z.object({
  nome: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  descricao: z.string().optional(),
  preco: z.number().positive("Preço deve ser positivo"),
  estoque: z.number().int().nonnegative("Estoque não pode ser negativo"),
  estoqueMin: z.number().int().nonnegative().default(5),
  categoriaId: z.string().cuid("ID de categoria inválido"),
  imagens: z.array(z.string().url()).default([]),
  ativo: z.boolean().default(true),
})

export const updateProdutoSchema = createProdutoSchema.partial()

export const produtoQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(10),
  search: z.string().optional(),
  categoriaId: z.string().cuid().optional(),
  ativo: z.coerce.boolean().optional(),
})
```

#### Formato de Resposta da API

```typescript
// Sucesso
{
  "success": true,
  "data": { /* dados */ },
  "message": "Operação realizada com sucesso"
}

// Erro
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Dados inválidos",
    "details": [
      { "field": "nome", "message": "Nome deve ter no mínimo 3 caracteres" }
    ]
  }
}

// Lista com paginação
{
  "success": true,
  "data": [ /* itens */ ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50,
    "totalPages": 5
  }
}
```

---

## 🧪 Testes

### Testes de API (Manual)

#### Produtos
- [ ] Criar produto com dados válidos → Retorna 201
- [ ] Criar produto com dados inválidos → Retorna 400 com erros
- [ ] Listar produtos → Retorna 200 com array
- [ ] Listar produtos com paginação → Retorna dados paginados
- [ ] Buscar produto existente → Retorna 200 com produto
- [ ] Buscar produto inexistente → Retorna 404
- [ ] Atualizar produto → Retorna 200 com produto atualizado
- [ ] Deletar produto → Retorna 204
- [ ] Listar produtos com estoque baixo → Retorna apenas produtos abaixo do mínimo

#### Vendas
- [ ] Criar venda → Atualiza estoque dos produtos
- [ ] Criar venda com quantidade maior que estoque → Retorna 400
- [ ] Listar vendas com filtro de data → Retorna vendas filtradas
- [ ] Buscar estatísticas → Retorna métricas corretas

#### Clientes
- [ ] Criar cliente com email duplicado → Retorna 400
- [ ] Buscar histórico de cliente → Retorna vendas do cliente
- [ ] Atualizar dados do cliente → Retorna cliente atualizado

### Testes de Integração
1. **Fluxo de Venda Completa**
   - Criar cliente
   - Criar produtos
   - Realizar venda
   - Verificar atualização de estoque
   - Verificar histórico do cliente

2. **Validação de Estoque**
   - Tentar vender mais que o disponível
   - Verificar alerta de estoque baixo
   - Repor estoque

### Performance
- [ ] Listar 1000 produtos → Responde em < 500ms
- [ ] Criar venda com 10 itens → Responde em < 300ms
- [ ] Queries complexas com joins → Otimizadas com índices

---

## 📚 Dependências

### Pré-requisitos
- [ ] Frontend MVP completo (Task #001) ✅
- [ ] PostgreSQL instalado ou Docker configurado
- [ ] Node.js 18+ e npm

### Configuração de Ambiente
```env
# .env.local
DATABASE_URL="postgresql://user:password@localhost:5432/aqua77?schema=public"
# ou para desenvolvimento
# DATABASE_URL="file:./dev.db"
```

### Tasks Relacionadas
- Task #001 - Frontend MVP ✅ (Concluída)
- Task #003 - Autenticação (Bloqueada por esta task)
- Task #004 - Upload de Imagens (Bloqueada por esta task)

---

## 🔗 Referências

### Documentação
- [Prisma Docs](https://www.prisma.io/docs)
- [Zod Docs](https://zod.dev/)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [PostgreSQL Best Practices](https://wiki.postgresql.org/wiki/Don%27t_Do_This)

### Tutoriais
- [Prisma + Next.js Setup](https://www.prisma.io/nextjs)
- [API Routes Best Practices](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)
- [Zod Validation Examples](https://github.com/colinhacks/zod#usage)

### Arquitetura de Referência
- RESTful API Design Guidelines
- Database Normalization (3NF)
- Error Handling Patterns

---

## 📝 Notas Adicionais

### Decisões Técnicas

1. **PostgreSQL vs SQLite**
   - Desenvolvimento: SQLite (mais simples, sem dependências)
   - Produção: PostgreSQL (mais robusto, melhor performance)
   - Prisma facilita migração entre os dois

2. **Validação com Zod**
   - Tipo-seguro com TypeScript
   - Schemas reutilizáveis
   - Mensagens de erro customizáveis
   - Inferência de tipos automática

3. **Estrutura de API**
   - RESTful seguindo convenções HTTP
   - Versionamento futuro: /api/v1/...
   - Respostas consistentes com success/error

4. **Transações**
   - Vendas usam transações Prisma para garantir consistência
   - Rollback automático em caso de erro
   - Atualização de estoque atômica

### Considerações de Segurança

- [ ] Sanitização de inputs (Zod já previne injection)
- [ ] Rate limiting (implementar na Fase 3 com auth)
- [ ] CORS configurado corretamente
- [ ] Logs não expõem dados sensíveis
- [ ] Queries parametrizadas (Prisma já faz)

### Melhorias Futuras (Fora do Escopo)

- Soft deletes em vez de hard deletes
- Audit log de mudanças
- Cache com Redis
- Background jobs para operações pesadas
- Webhooks para eventos importantes

### Riscos e Mitigações

| Risco | Impacto | Mitigação |
|-------|---------|-----------|
| Mudança de schema quebrando frontend | Alto | Versionamento de API, testes |
| Performance com muitos dados | Médio | Índices, paginação obrigatória |
| Dados inconsistentes | Alto | Transações, validação rigorosa |
| Dependência de biblioteca externa | Baixo | Prisma e Zod são amplamente adotados |

---

## 📸 Diagramas

### Diagrama de Entidades (ER)

```
┌─────────────┐         ┌─────────────┐
│  Categoria  │────────<│   Produto   │
└─────────────┘         └─────────────┘
                              │
                              │
                              ▼
                        ┌─────────────┐
                        │  ItemVenda  │
                        └─────────────┘
                              │
                              │
                              ▼
┌─────────────┐         ┌─────────────┐
│   Cliente   │────────<│    Venda    │
└─────────────┘         └─────────────┘
```

### Fluxo de uma Venda

```
1. POST /api/vendas
   ├─ Validar dados (Zod)
   ├─ Verificar estoque dos produtos
   ├─ Iniciar transação Prisma
   │  ├─ Criar Venda
   │  ├─ Criar ItemVenda (para cada produto)
   │  └─ Atualizar estoque dos produtos
   └─ Commit ou Rollback
```

---

## ✏️ Changelog da Task

| Data | Responsável | Alteração |
|------|-------------|-----------|
| 17/11/2025 | Sistema | Task criada baseada no Roadmap Fase 2 |
| 17/11/2025 | Sistema | Schema Prisma completo adicionado |
| 17/11/2025 | Sistema | Critérios de aceitação detalhados |

---

## 🔄 Revisão

**Revisado por:** Pendente
**Data da revisão:** -
**Status:** [ ] Aprovado | [ ] Mudanças necessárias

**Comentários:**
- Aguardando aprovação para iniciar implementação
- Confirmar escolha PostgreSQL vs SQLite para desenvolvimento
- Definir prioridade de implementação das APIs

---

**Última atualização:** 17/11/2025
**Versão da Task:** 1.0.0
**Status:** Pronta para implementação
