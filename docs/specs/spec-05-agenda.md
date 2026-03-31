# Spec 05 — Agenda

## 1. Identificação do módulo

**Nome do módulo:** Agenda  
**Tipo:** Organização de rotina e compromissos  
**Contexto:** Home Care 4.0 / Argos Saúde  
**Prioridade:** Alta  
**Status:** Em definição funcional

---

## 2. Objetivo do módulo

Permitir a criação, visualização e acompanhamento de compromissos relacionados ao cuidado de uma pessoa, como consultas, visitas, medicações e lembretes.

A agenda deve ajudar o usuário a:
- organizar a rotina de cuidado
- antecipar eventos importantes
- reduzir esquecimentos
- manter consistência no acompanhamento

---

## 3. Problema que este módulo resolve

Sem uma agenda estruturada:
- compromissos são esquecidos
- o cuidado perde consistência
- há desorganização entre cuidadores
- eventos importantes não são priorizados

A agenda resolve isso ao centralizar e organizar os compromissos de forma clara e acessível.

---

## 4. Perfis envolvidos

### Podem acessar
- familiar/cuidador
- prestador de serviço
- administrador, quando permitido
- paciente, com visualização simplificada

---

## 5. Objetivos do usuário

O usuário entra neste módulo para:

- visualizar compromissos futuros
- verificar horários e datas
- entender o que precisa ser feito
- registrar novos eventos
- acompanhar rotina da pessoa

---

## 6. Pré-condições

- usuário autenticado
- papel ativo definido
- vínculo com a pessoa
- permissão para visualizar ou criar eventos

---

## 7. Pós-condições esperadas

Após usar o módulo, o usuário deve:

- entender a agenda da pessoa
- saber o que vem a seguir
- conseguir registrar novos compromissos
- acompanhar o histórico de eventos

---

## 8. Estrutura funcional da tela

### 8.1 Cabeçalho
- nome da pessoa
- título: Agenda
- botão de voltar
- botão de adicionar evento

---

### 8.2 Visualização principal

Modos possíveis (versão inicial simplificada):
- lista cronológica
- agrupamento por data

---

### 8.3 Lista de eventos

Cada evento deve conter:

- título
- tipo (consulta, medicação, visita, lembrete)
- data
- horário
- status (pendente, realizado, atrasado)
- descrição opcional

---

### 8.4 Destaques

- próximos eventos
- eventos do dia
- eventos atrasados

---

### 8.5 Ações disponíveis

- criar evento
- visualizar detalhes
- marcar como realizado
- editar evento, quando permitido

---

## 9. Tipos de eventos (versão inicial)

- consulta médica
- visita de profissional
- medicação
- lembrete geral

---

## 10. Componentes da interface

### Componentes principais
- lista de eventos
- card de evento
- botão de criação
- filtros simples

### Componentes reutilizáveis
- `EventCard`
- `EventStatusBadge`
- `EventList`
- `EventEmptyState`

---

## 11. Regras de negócio

- eventos devem ser organizados por data
- eventos próximos devem ter destaque
- eventos atrasados devem ser sinalizados
- diferentes papéis podem ter permissões diferentes
- eventos devem permitir atualização de status
- dados devem ser simples e claros

---

## 12. Fluxo principal

### Fluxo 1 — Visualizar agenda

1. usuário acessa tela de detalhes da pessoa
2. clica em “Agenda”
3. sistema valida acesso
4. sistema carrega eventos
5. usuário visualiza lista

---

### Fluxo 2 — Criar evento

1. usuário clica em “Adicionar evento”
2. sistema abre formulário
3. usuário preenche dados
4. sistema valida
5. sistema salva evento
6. agenda é atualizada

---

### Fluxo 3 — Marcar evento como realizado

1. usuário acessa evento
2. marca como concluído
3. sistema atualiza status

---

## 13. Fluxos alternativos

### Alternativo A — Sem eventos

- sistema exibe estado vazio
- mensagem clara
- botão de criar evento

---

### Alternativo B — Apenas eventos futuros

- lista organizada por data

---

## 14. Fluxos de exceção

### Exceção 1 — Sem permissão
- acesso bloqueado

### Exceção 2 — Erro de carregamento
- falha ao buscar eventos
- opção de tentar novamente

---

## 15. Estados da interface

- loading
- lista com dados
- sem eventos
- erro
- bloqueado

---

## 16. Requisitos de UX

- leitura rápida da agenda
- foco em próximos eventos
- facilidade de criação
- evitar complexidade
- clareza de status

---

## 17. Requisitos de UI

- cards organizados
- uso de cores para status
- tipografia clara
- separação por data

---

## 18. Requisitos técnicos de front-end

- listagem dinâmica
- criação de eventos
- atualização de status
- estados de carregamento e erro

---

## 19. Estrutura sugerida de componentes

- `AgendaPage`
- `AgendaHeader`
- `EventCard`
- `EventList`
- `EventForm`
- `AgendaEmptyState`

---

## 20. Critérios de aceite

- eventos exibidos corretamente
- criação funcionando
- atualização de status funcionando
- estados tratados
- navegação correta

---

## 21. Fora de escopo

- integração com calendários externos
- notificações automáticas avançadas
- recorrência complexa
- sincronização em tempo real

---

## 22. Dependências

- módulo de detalhes da pessoa
- autenticação
- vínculo entre usuário e pessoa

---

## 23. Observações estratégicas

A agenda é responsável por transformar o cuidado em rotina.

Mesmo simples, ela deve transmitir:
- organização
- previsibilidade
- confiança