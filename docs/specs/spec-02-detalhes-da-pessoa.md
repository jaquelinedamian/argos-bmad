# Spec 02 — Detalhes da Pessoa

## 1. Identificação do módulo

**Nome do módulo:** Detalhes da Pessoa  
**Tipo:** Módulo central de acompanhamento  
**Contexto:** Home Care 4.0 / Argos Saúde  
**Prioridade:** Muito alta  
**Status:** Em definição funcional

---

## 2. Objetivo do módulo

Centralizar, em uma única tela, a visão principal de uma pessoa acompanhada, reunindo identidade, estado geral, alertas, agenda, sinais vitais, documentos e atalhos para as demais áreas do cuidado.

Esta tela deve funcionar como o principal ponto de acesso ao acompanhamento individual do paciente.

---

## 3. Problema que este módulo resolve

Após localizar uma pessoa na lista, o usuário precisa de uma visão clara e rápida da sua situação atual.

Sem uma tela central:
- a navegação fica fragmentada
- o acompanhamento exige muitos cliques
- o entendimento do estado geral demora
- ações importantes podem se perder

A tela de detalhes resolve isso ao consolidar o contexto da pessoa e oferecer acesso direto aos módulos relacionados.

---

## 4. Perfis envolvidos

### Perfis que podem acessar
- familiar/cuidador
- prestador de serviço
- administrador, quando permitido
- o próprio paciente, em contextos permitidos

### Regra principal
O acesso depende de:
- autenticação
- papel ativo
- vínculo válido com a pessoa
- permissão contextual

---

## 5. Objetivos do usuário dentro deste módulo

O usuário entra nesta tela para:

- confirmar rapidamente quem é a pessoa acompanhada
- entender seu estado geral atual
- visualizar sinais de atenção ou alerta
- acessar dados de saúde
- verificar agenda e compromissos
- abrir documentos e exames
- consultar histórico
- acessar rede de apoio relacionada
- tomar decisões com mais segurança

---

## 6. Pré-condições

- usuário autenticado
- papel ativo definido
- acesso concedido ao módulo
- pessoa selecionada na lista ou via navegação válida
- vínculo e permissões disponíveis
- dados principais carregáveis pelo sistema

---

## 7. Pós-condições esperadas

Após usar este módulo, o usuário deve conseguir:

- compreender o contexto geral da pessoa
- identificar se existe algo urgente
- navegar para qualquer subárea importante do acompanhamento
- tomar decisões com base em uma visão mais completa

---

## 8. Estrutura funcional da tela

A tela deve conter, no mínimo, os seguintes blocos:

### 8.1 Cabeçalho da pessoa
Elementos:
- foto ou avatar
- nome completo
- idade
- identificação resumida
- vínculo com o usuário, quando relevante
- status geral
- indicador visual de alerta, se houver

### 8.2 Resumo do estado atual
Informações possíveis:
- estado geral
- existência de alerta ativo
- próxima consulta
- última atualização relevante
- sinais vitais resumidos
- observações rápidas

### 8.3 Atalhos principais
A tela deve oferecer acesso rápido para:
- sinais vitais
- alertas
- agenda
- exames e documentos
- histórico
- rede de apoio

### 8.4 Blocos resumidos de acompanhamento
Cada bloco pode mostrar um preview:
- últimos sinais vitais
- alertas recentes
- próximo compromisso
- últimos documentos
- última observação ou evento

### 8.5 Área de ações rápidas
Ações possíveis:
- ver sinais vitais
- abrir agenda
- abrir documentos
- registrar informação, no futuro
- entrar em contato com rede de apoio, no futuro

---

## 9. Componentes da interface

### Componentes principais
- cabeçalho da pessoa
- badge de status
- badge de alerta
- resumo geral
- cards de atalhos
- cards de preview de módulos
- seção de ações rápidas
- navegação interna por abas ou blocos
- estados de loading, erro e bloqueio

### Componentes reutilizáveis
- `PersonHeaderCard`
- `PersonStatusBadge`
- `PersonAlertBadge`
- `QuickAccessCard`
- `VitalsPreviewCard`
- `AppointmentsPreviewCard`
- `DocumentsPreviewCard`
- `HistoryPreviewCard`
- `SupportNetworkPreviewCard`

---

## 10. Informações mínimas exibidas

A tela deve tentar apresentar:

- nome da pessoa
- foto/avatar
- idade
- sexo, se fizer sentido no contexto
- vínculo com o usuário
- status atual
- alerta ativo, se houver
- próxima consulta
- resumo dos sinais recentes
- acesso aos módulos relacionados

### Exemplos de status
- estável
- atenção
- alerta
- sem atualização recente

---

## 11. Ações disponíveis na tela

### Ações principais
- abrir sinais vitais
- abrir alertas
- abrir agenda
- abrir exames e documentos
- abrir histórico
- abrir rede de apoio

### Ações secundárias
- voltar para a lista
- trocar papel, se necessário
- atualizar visualização
- acessar informações detalhadas de um bloco específico

---

## 12. Regras de negócio do módulo

- a tela deve respeitar papel ativo e permissões contextuais
- apenas usuários autorizados podem visualizar dados da pessoa
- a interface deve mostrar visão resumida antes de aprofundar detalhes
- alertas ativos devem ter destaque superior
- dados sensíveis devem ser exibidos apenas no nível adequado ao perfil
- a ordem visual deve priorizar o que exige atenção imediata
- informações secundárias não devem competir com alertas e estado geral
- diferentes papéis podem ver versões diferentes da mesma tela
- a área pública do marketplace não deve se misturar à área privada do cuidado

---

## 13. Fluxo principal

### Fluxo principal 1 — Abertura da tela
1. usuário acessa a lista “Pessoas que Eu Cuido”
2. usuário seleciona uma pessoa
3. sistema valida autenticação
4. sistema valida papel ativo
5. sistema valida vínculo e permissão
6. sistema busca dados principais da pessoa
7. sistema monta a tela de detalhes
8. usuário visualiza a visão central da pessoa

### Fluxo principal 2 — Navegação para submódulo
1. usuário entra na tela de detalhes
2. identifica o bloco desejado
3. clica em um atalho ou card de preview
4. sistema redireciona para o submódulo correspondente
5. sistema carrega o conteúdo detalhado

---

## 14. Fluxos alternativos

### Alternativo A — Acesso via alerta
1. usuário recebe ou abre uma notificação
2. sistema direciona para a pessoa relacionada ao alerta
3. tela abre já com destaque no bloco do evento relevante

### Alternativo B — Acesso via agenda
1. usuário acessa compromisso futuro
2. sistema direciona para a tela da pessoa associada
3. usuário consulta detalhes e contexto geral

### Alternativo C — Acesso pelo próprio paciente
1. usuário entra com papel ativo de paciente
2. sistema abre seus próprios detalhes
3. interface respeita restrições e simplificações adequadas

---

## 15. Fluxos de exceção

### Exceção 1 — Sem permissão
- sistema identifica acesso não autorizado
- bloqueia a visualização
- exibe mensagem clara
- oferece retorno seguro

### Exceção 2 — Pessoa não encontrada
- sistema não localiza o registro solicitado
- exibe mensagem de indisponibilidade
- oferece retorno à listagem

### Exceção 3 — Falha ao carregar dados
- sistema falha na obtenção das informações
- exibe estado de erro
- oferece opção de tentar novamente

### Exceção 4 — Vínculo inválido
- sistema identifica que o vínculo não existe ou não permite acesso
- impede a exibição dos dados
- registra evento, se necessário

---

## 16. Estados da interface

### Estado de carregamento
- placeholders
- skeletons
- feedback visual de carregamento

### Estado com dados
- tela completa com resumo e atalhos

### Estado de erro
- mensagem amigável
- botão de tentar novamente

### Estado bloqueado
- usuário sem permissão
- retorno seguro

### Estado sem conteúdo secundário
Exemplo:
- sem documentos
- sem compromissos próximos
- sem alertas ativos

Nestes casos, os blocos devem exibir mensagens claras e calmas, sem parecer falha.

---

## 17. Requisitos de UX

- a pessoa precisa ser identificada imediatamente
- o estado geral deve ser entendido em poucos segundos
- alertas devem saltar aos olhos sem gerar caos visual
- os atalhos precisam ser óbvios
- a navegação para submódulos deve ser natural
- a tela deve transmitir controle, confiança e continuidade do cuidado
- a experiência deve variar conforme contexto e papel ativo

---

## 18. Requisitos de UI

- cabeçalho forte e claro
- boa separação entre resumo e módulos
- cards de preview com escaneabilidade alta
- tipografia grande e legível
- status e alertas com hierarquia visual clara
- layout responsivo
- organização visual que favoreça leitura rápida em mobile e desktop

---

## 19. Requisitos técnicos de front-end

- rota de detalhe com identificação da pessoa
- controle de acesso por contexto
- composição modular da página
- componentes independentes por bloco
- suporte a carregamento parcial de áreas
- tratamento de estados vazios e erros por seção
- possibilidade futura de atualização em tempo real

---

## 20. Estrutura sugerida de componentes

### Página
- `PersonDetailsPage`

### Componentes internos
- `PersonDetailsHeader`
- `PersonGeneralStatusCard`
- `PersonQuickActions`
- `PersonVitalsPreview`
- `PersonAlertsPreview`
- `PersonAgendaPreview`
- `PersonDocumentsPreview`
- `PersonHistoryPreview`
- `PersonSupportNetworkPreview`
- `PersonDetailsErrorState`
- `PersonDetailsBlockedState`

---

## 21. Critérios de aceite

Este módulo será considerado funcional quando:

- usuários autorizados conseguirem acessar a tela
- a identificação principal da pessoa estiver clara
- o status geral estiver visível
- alertas ativos estiverem destacados
- atalhos para submódulos estiverem funcionando
- estados de erro, bloqueio e ausência de conteúdo estiverem previstos
- a experiência for coerente com o papel ativo

---

## 22. Fora de escopo neste momento

Não fazem parte deste spec, por enquanto:

- edição clínica avançada
- chat em tempo real dentro da tela
- teleatendimento
- automações por IA
- integração em tempo real com dispositivos reais
- edição avançada de permissões diretamente nesta tela

---

## 23. Dependências deste módulo

Este módulo depende de:
- autenticação
- papel ativo
- listagem de pessoas cuidadas
- modelo de vínculo
- submódulos de sinais vitais, alertas, agenda, documentos e histórico
- regras de acesso a dados sensíveis

---

## 24. Observações estratégicas

Esta é uma das telas mais importantes do sistema.

Ela funciona como o hub do acompanhamento individual e influencia diretamente:
- a utilidade percebida da plataforma
- a velocidade de navegação
- a sensação de controle do usuário
- a eficiência do cuidado

Por isso, deve ser tratada como uma tela de alta prioridade no protótipo e no refinamento de UX/UI.