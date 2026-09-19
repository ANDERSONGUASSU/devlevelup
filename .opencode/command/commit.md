---
description: Workflow de commit do DevLevelUp — analisa as alterações, roda lint/format:check/typecheck e sugere Conventional Commit em português. Só executa o commit com autorização explícita.
---
# Commit Workflow

Fluxo definido na spec (§17 de `.opencode/spec/spec.md`):

1. **Análise das alterações**: `git status`, `git diff` (incluindo staged) — resuma o que mudou.
2. **Checagens** (bloqueiam se falharem):

   - `npm run lint`
   - `npm run format:check`
   - `npm run typecheck`

3. **Sugestão de Conventional Commit**: use a skill `commit`; formato `<tipo>(<escopo>): <descrição>` em português, curto e coeso.
4. **Autorização do usuário**: proponha o commit e aguarde confirmação explícita — nunca commite sem isso.
5. **Commit**: execute `git commit` conforme combinado (nunca em `main`).