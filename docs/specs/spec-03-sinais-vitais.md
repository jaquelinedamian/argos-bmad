# Spec 03 — Sinais Vitais

## 1. Identificação do módulo

**Nome do módulo:** Sinais Vitais  
**Tipo:** Monitoramento de saúde  
**Contexto:** Home Care 4.0 / Argos Saúde  
**Prioridade:** Muito alta  
**Status:** Em definição funcional

---

## 2. Objetivo do módulo

Permitir a visualização e acompanhamento dos sinais vitais de uma pessoa, apresentando dados atuais, histórico recente e indicadores de estado.

Este módulo deve oferecer uma leitura rápida da condição da pessoa e apoiar a identificação de possíveis riscos ou alterações relevantes.

---

## 3. Problema que este módulo resolve

Sem acompanhamento estruturado:
- alterações passam despercebidas
- decisões são tomadas tarde
- familiares e cuidadores não têm visibilidade
- o histórico não é acessível

Este módulo resolve isso ao organizar e apresentar os sinais vitais de forma clara, acessível e contextualizada.

---

## 4. Perfis envolvidos

### Podem acessar
- familiar/cuidador
- prestador de serviço
- administrador, quando permitido
- o próprio paciente, com visualização simplificada

### Regra principal
O acesso depende de:
- papel ativo
- vínculo com a pessoa
- nível de permissão

---

## 5. Objetivos do usuário

O usuário entra neste módulo para:

- verificar o estado atual da pessoa
- acompanhar tendências recentes
- identificar sinais de alerta
- entender se há necessidade de ação
- consultar histórico de medições

---

## 6. Pré-condições

- usuário autenticado
- papel ativo válido
- vínculo com a pessoa
- acesso ao módulo permitido
- existência de dados ou possibilidade de estado vazio

---

## 7. Pós-condições esperadas

Após usar o módulo, o usuário deve:

- entender rapidamente a situação atual
- identificar possíveis riscos
- navegar pelo histórico
- tomar decisões com base nos dados apresentados

---

## 8. Estrutura funcional da tela

### 8.1 Cabeçalho
- nome da pessoa
- indicador de estado geral
- botão de voltar

### 8.2 Resumo atual
Apresenta os principais sinais vitais:

- frequência cardíaca
- oxigenação (SpO2)
- temperatura
- pressão arterial, quando disponível
- qualidade do sono, quando disponível

Cada item deve exibir:
- valor atual
- unidade
- indicador visual de normalidade

---

### 8.3 Indicador de estado geral

Exemplo:
- normal
- atenção
- alerta

Baseado na combinação dos sinais disponíveis.

---

### 8.4 Histórico recente

- gráfico simples ou lista
- evolução dos sinais ao longo do tempo
- destaque para variações relevantes

---

### 8.5 Destaques e observações

- variações fora do padrão
- tendências de queda ou aumento
- eventos relevantes

---

### 8.6 Ações disponíveis

- visualizar histórico completo
- voltar para detalhes da pessoa
- atualizar dados, quando aplicável

---

## 9. Componentes da interface

### Componentes principais
- card de sinal vital
- indicador de normalidade
- gráfico de histórico
- resumo geral
- alertas visuais
- mensagens de contexto

### Componentes reutilizáveis
- `VitalCard`
- `VitalStatusIndicator`
- `VitalHistoryChart`
- `VitalsSummary`
- `VitalsAlertBadge`

---

## 10. Sinais vitais suportados (versão inicial)

- frequência cardíaca
- oxigenação
- temperatura corporal

### Versão futura
- pressão arterial
- glicemia
- qualidade do sono
- nível de atividade
- padrões respiratórios

---

## 11. Regras de negócio

- dados devem ser apresentados de forma simples e compreensível
- indicadores visuais devem facilitar leitura rápida
- valores fora do padrão devem ser destacados
- ausência de dados deve ser tratada como estado válido
- histórico deve ser acessível sem complexidade
- diferentes papéis podem ver níveis diferentes de detalhe
- o módulo não substitui diagnóstico médico

---

## 12. Fluxo principal

### Fluxo 1 — Acesso ao módulo

1. usuário acessa a tela de detalhes da pessoa
2. clica em “Sinais vitais”
3. sistema valida acesso
4. sistema carrega dados disponíveis
5. sistema monta a tela
6. usuário visualiza resumo e histórico

---

### Fluxo 2 — Análise de dados

1. usuário entra no módulo
2. observa os valores atuais
3. identifica possíveis alterações
4. consulta histórico
5. decide se precisa tomar ação

---

## 13. Fluxos alternativos

### Alternativo A — Sem dados disponíveis

1. usuário acessa o módulo
2. sistema não encontra dados
3. exibe mensagem clara
4. orienta possível ação futura

---

### Alternativo B — Dados incompletos

1. sistema possui apenas alguns sinais
2. exibe os disponíveis
3. informa ausência dos demais

---

## 14. Fluxos de exceção

### Exceção 1 — Sem permissão

- sistema bloqueia acesso
- exibe mensagem
- oferece retorno seguro

### Exceção 2 — Erro de carregamento

- sistema falha ao carregar dados
- exibe erro amigável
- permite tentar novamente

---

## 15. Estados da interface

### Loading
- placeholders
- skeletons

### Com dados
- resumo + histórico

### Sem dados
- mensagem clara

### Erro
- falha de carregamento

### Bloqueado
- acesso não permitido

---

## 16. Requisitos de UX

- leitura rápida e intuitiva
- linguagem simples
- não gerar ansiedade desnecessária
- destacar apenas o que realmente importa
- evitar excesso de termos técnicos
- facilitar interpretação por leigos

---

## 17. Requisitos de UI

- cards claros e bem definidos
- uso de cores para indicar estado
- gráficos simples e legíveis
- boa hierarquia visual
- tipografia acessível

---

## 18. Requisitos técnicos de front-end

- renderização dinâmica dos sinais
- suporte a múltiplos tipos de dados
- componentes reutilizáveis
- tratamento de estados
- possibilidade futura de atualização em tempo real

---

## 19. Estrutura sugerida de componentes

- `VitalsPage`
- `VitalsHeader`
- `VitalsSummary`
- `VitalCard`
- `VitalChart`
- `VitalsEmptyState`
- `VitalsErrorState`

---

## 20. Critérios de aceite

- dados exibidos corretamente
- estados visuais funcionando
- histórico acessível
- ausência de dados tratada corretamente
- navegação funcionando
- leitura clara e rápida

---

## 21. Fora de escopo

- integração com dispositivos reais
- diagnóstico automatizado
- análise avançada por IA
- alertas automáticos complexos

---

## 22. Dependências

- módulo de detalhes da pessoa
- autenticação
- vínculo entre usuário e pessoa
- dados simulados ou mockados

---

## 23. Observações estratégicas

Este módulo é um dos pilares do Argos.

Mesmo em versão simples, ele já deve transmitir:
- controle
- clareza
- utilidade real

Ele será base para evolução futura com IA, sensores e análise preditiva.