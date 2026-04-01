# Spec 04 — Alertas

## 1. Identificação do módulo

**Nome do módulo:** Alertas  
**Tipo:** Monitoramento e notificação  
**Contexto:** Home Care 4.0 / Argos Saúde  
**Prioridade:** Muito alta  
**Status:** Em definição funcional

---

## 2. Objetivo do módulo

Permitir a identificação, visualização e acompanhamento de eventos que exigem atenção no cuidado de uma pessoa.

O módulo de alertas deve destacar situações relevantes, facilitar a tomada de decisão e garantir que informações críticas não passem despercebidas.

---

## 3. Problema que este módulo resolve

No contexto de cuidado:
- sinais importantes podem ser ignorados
- eventos críticos podem passar despercebidos
- cuidadores não são informados no momento certo
- não existe priorização do que é mais urgente

O módulo resolve isso ao:
- centralizar eventos relevantes
- classificar por criticidade
- destacar o que exige ação imediata

---

## 4. Perfis envolvidos

### Podem acessar
- familiar/cuidador
- prestador de serviço
- administrador, quando permitido

### Pode visualizar seus próprios alertas
- paciente, com versão simplificada

---

## 5. Objetivos do usuário

O usuário entra neste módulo para:

- identificar situações críticas
- entender o que aconteceu
- saber o nível de urgência
- decidir se precisa agir
- acompanhar eventos recentes

---

## 6. Pré-condições

- usuário autenticado
- papel ativo definido
- vínculo com a pessoa
- existência de alertas ou possibilidade de ausência

---

## 7. Pós-condições esperadas

Após usar o módulo, o usuário deve:

- saber se existe algo urgente
- entender o contexto do alerta
- acessar rapidamente a origem do evento
- tomar decisão com segurança

---

## 8. Estrutura funcional da tela

### 8.1 Cabeçalho
- nome da pessoa
- título da página: Alertas
- botão de voltar

---

### 8.2 Resumo de alertas

- total de alertas ativos
- quantidade por nível de criticidade:
  - críticos
  - atenção
  - informativos

---

### 8.3 Lista de alertas

Cada alerta deve apresentar:

- tipo de alerta
- nível de criticidade
- data e hora
- descrição resumida
- origem do alerta (ex: sinal vital, evento manual)
- status (ativo, resolvido)

---

### 8.4 Ações no alerta

- visualizar detalhes
- marcar como resolvido, quando permitido
- navegar para origem do alerta

---

## 9. Níveis de criticidade

### Crítico
- exige ação imediata
- deve ter destaque máximo

### Atenção
- requer acompanhamento
- não é urgente imediato

### Informativo
- registro de evento
- sem necessidade de ação

---

## 10. Componentes da interface

### Componentes principais
- lista de alertas
- card de alerta
- badge de criticidade
- resumo de alertas

### Componentes reutilizáveis
- `AlertCard`
- `AlertSeverityBadge`
- `AlertSummary`
- `AlertList`
- `AlertEmptyState`

---

## 11. Tipos de alertas (versão inicial)

- alteração de sinal vital
- ausência de atualização
- evento manual registrado
- alerta de rotina ou compromisso

---

## 12. Regras de negócio

- alertas devem ser classificados por criticidade
- alertas críticos devem aparecer primeiro
- alertas ativos devem ser destacados
- alertas resolvidos devem ser mantidos no histórico
- diferentes papéis podem ter diferentes níveis de acesso
- o sistema deve evitar excesso de alertas irrelevantes
- alertas não substituem diagnóstico médico

---

## 13. Fluxo principal

### Fluxo 1 — Visualizar alertas

1. usuário acessa a tela de detalhes da pessoa
2. clica em “Alertas”
3. sistema valida acesso
4. sistema carrega lista de alertas
5. sistema organiza por criticidade
6. usuário visualiza os alertas

---

### Fluxo 2 — Analisar alerta

1. usuário identifica alerta relevante
2. clica no alerta
3. sistema mostra detalhes
4. usuário decide ação

---

### Fluxo 3 — Marcar como resolvido

1. usuário acessa alerta
2. seleciona opção de resolver
3. sistema atualiza status
4. alerta sai da lista ativa

---

## 14. Fluxos alternativos

### Alternativo A — Sem alertas

- sistema exibe estado vazio
- mensagem: nenhuma ocorrência relevante

---

### Alternativo B — Apenas alertas informativos

- sistema exibe lista com menor destaque visual

---

## 15. Fluxos de exceção

### Exceção 1 — Sem permissão
- acesso bloqueado
- mensagem exibida

### Exceção 2 — Erro de carregamento
- falha ao buscar dados
- opção de tentar novamente

---

## 16. Estados da interface

- loading
- lista com dados
- sem alertas
- erro
- acesso bloqueado

---

## 17. Requisitos de UX

- priorizar clareza
- destacar urgência
- evitar sobrecarga emocional
- facilitar decisão rápida
- diferenciar bem níveis de criticidade

---

## 18. Requisitos de UI

- uso de cores para criticidade
- hierarquia visual clara
- cards organizados
- leitura rápida

---

## 19. Requisitos técnicos de front-end

- ordenação por criticidade
- atualização de estado
- navegação para origem do alerta
- componentes reutilizáveis

---

## 20. Estrutura sugerida de componentes

- `AlertsPage`
- `AlertsHeader`
- `AlertSummary`
- `AlertCard`
- `AlertList`
- `AlertEmptyState`

---

## 21. Critérios de aceite

- alertas exibidos corretamente
- criticidade visível
- ordenação correta
- navegação funcionando
- estados tratados

---

## 22. Fora de escopo

- alertas automáticos complexos por IA
- integração com dispositivos reais
- automação de ações

---

## 23. Dependências

- módulo de sinais vitais
- módulo de detalhes da pessoa
- autenticação
- vínculo entre usuário e pessoa

---

## 24. Observações estratégicas

Este módulo é essencial para o valor do sistema.

Ele transforma dados em ação.

Mesmo simples, ele já deve transmitir:
- segurança
- prioridade
- clareza