# Task Management - Aqua77

Este diretório contém templates e documentação para gerenciamento de tasks do projeto Aqua77.

## 📁 Estrutura

```
task/
├── README.md           # Este arquivo
├── TEMPLATE.md         # Template para novas tasks
└── [tasks individuais] # Arquivos de tasks específicas
```

## 🎯 Como Usar

### Criar uma Nova Task

1. Copie o arquivo `TEMPLATE.md`
2. Renomeie para o formato: `TASK-XXX-nome-descritivo.md`
   - XXX = número sequencial da task
   - nome-descritivo = resumo curto (kebab-case)
   - Exemplo: `TASK-001-implementar-autenticacao.md`

3. Preencha todas as seções relevantes do template
4. Atualize os campos de status conforme o progresso

### Categorias de Tasks

#### Feature
Novas funcionalidades ou melhorias significativas.
- Exemplo: Implementar sistema de autenticação
- Label sugerida: `feature`

#### Bug
Correção de problemas ou comportamentos inesperados.
- Exemplo: Corrigir erro no cálculo de estoque
- Label sugerida: `bug`

#### Enhancement
Melhorias em funcionalidades existentes.
- Exemplo: Otimizar performance do dashboard
- Label sugerida: `enhancement`

#### Documentation
Criação ou atualização de documentação.
- Exemplo: Documentar API de produtos
- Label sugerida: `docs`

### Prioridades

- **Crítica**: Bloqueia outras tasks ou afeta sistema em produção
- **Alta**: Importante para o próximo release
- **Média**: Deve ser feito, mas não urgente
- **Baixa**: Nice to have, pode ser adiado

### Status da Task

1. **Todo**: Task criada, aguardando início
2. **In Progress**: Em desenvolvimento
3. **Review**: Aguardando revisão de código
4. **Done**: Concluída e integrada

## 📋 Nomenclatura de Arquivos

```
TASK-[ID]-[categoria]-[descricao-curta].md
```

### Exemplos:

```
TASK-001-feature-autenticacao-usuarios.md
TASK-002-bug-corrigir-tema-dark.md
TASK-003-enhancement-melhorar-performance.md
TASK-004-docs-documentar-api-vendas.md
```

## ✅ Checklist de Task Completa

Antes de marcar uma task como "Done", verifique:

- [ ] Código implementado e funcional
- [ ] Código revisado (self-review ou peer review)
- [ ] Testes passando (quando aplicável)
- [ ] Documentação atualizada
- [ ] CHANGELOG.md atualizado
- [ ] Sem warnings ou erros no console
- [ ] Build de produção funciona
- [ ] Aprovado em code review (se aplicável)

## 🔄 Workflow Sugerido

1. **Planejamento**
   - Criar task a partir do template
   - Definir prioridade e estimativa
   - Adicionar ao backlog

2. **Desenvolvimento**
   - Mover para "In Progress"
   - Criar branch (`feature/TASK-XXX` ou `fix/TASK-XXX`)
   - Implementar solução
   - Atualizar status na task

3. **Revisão**
   - Mover para "Review"
   - Criar Pull Request
   - Code review
   - Ajustes se necessário

4. **Conclusão**
   - Merge do PR
   - Mover para "Done"
   - Atualizar CHANGELOG.md
   - Arquivar task

## 📊 Rastreamento de Progress

Mantenha as tasks organizadas por sprints ou milestones:

### Sprint Atual
- TASK-001: In Progress
- TASK-002: Review
- TASK-003: Done

### Backlog
- TASK-004: Todo
- TASK-005: Todo

## 🏷️ Labels Sugeridas

Ao usar sistema de issues (GitHub, GitLab, etc.), use estas labels:

- `feature` - Nova funcionalidade
- `bug` - Correção de bug
- `enhancement` - Melhoria
- `docs` - Documentação
- `critical` - Prioridade crítica
- `high-priority` - Alta prioridade
- `good-first-issue` - Boa para iniciantes
- `help-wanted` - Precisa de ajuda

## 📝 Dicas

1. **Seja específico**: Tarefas muito genéricas são difíceis de estimar
2. **Divida tarefas grandes**: Se uma task leva mais de 1 semana, considere dividir
3. **Mantenha atualizado**: Atualize o status regularmente
4. **Documente decisões**: Use a seção de notas para registrar decisões importantes
5. **Linke recursos**: Sempre adicione links para PRs, issues, designs relacionados

## 🔗 Integração com Git

### Commits

Referencie a task nos commits:
```bash
git commit -m "feat(auth): implementa login - TASK-001"
git commit -m "fix(theme): corrige toggle dark mode - TASK-002"
```

### Pull Requests

Inclua no PR:
- Link para a task
- Resumo das mudanças
- Screenshots (se UI)
- Como testar

Template de PR:
```markdown
## Task
Closes #TASK-XXX

## Mudanças
- Mudança 1
- Mudança 2

## Como testar
1. Passo 1
2. Passo 2
```

---

**Última atualização:** 17/11/2025
**Versão:** 1.0.0
