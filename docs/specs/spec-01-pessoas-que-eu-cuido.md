# Spec 01 — Pessoas que Eu Cuido

## 1. Identificação do módulo

**Nome do módulo:** Pessoas que Eu Cuido  
**Tipo:** Módulo funcional principal  
**Contexto:** Home Care 4.0 / Argos Saúde  
**Prioridade:** Alta  
**Status:** Em definição funcional

---

## 2. Objetivo do módulo

Permitir que o usuário visualize, organize e acesse rapidamente as pessoas sob sua responsabilidade de cuidado.

Este módulo funciona como ponto central de acompanhamento, facilitando o acesso aos dados, alertas, agenda, sinais vitais, documentos e ações relacionadas a cada paciente vinculado.

Além disso, deve permitir o cadastro de uma nova pessoa cuidada, quando o perfil ativo do usuário possuir permissão para isso.

---

## 3. Problema que este módulo resolve

No contexto do cuidado, é comum que familiares, cuidadores e profissionais precisem acompanhar mais de uma pessoa ao mesmo tempo.

Sem uma área centralizada:
- a navegação fica confusa
- o acesso às informações se torna lento
- o acompanhamento perde eficiência
- eventos importantes podem passar despercebidos

O módulo “Pessoas que Eu Cuido” resolve isso criando uma entrada clara para gestão e acompanhamento das pessoas vinculadas ao usuário.

---

## 4. Perfis envolvidos

### Perfis que podem acessar o módulo
- familiar/cuidador
- prestador de serviço
- administrador, quando aplicável

### Perfil que pode aparecer como item acompanhado
- paciente

### Observação importante
Como o sistema trabalha com usuário único e múltiplos papéis, o acesso ao módulo depende do **papel ativo** no momento da navegação.

---

## 5. Objetivos do usuário dentro deste módulo

O usuário entra neste módulo para:

- visualizar todas as pessoas vinculadas ao seu cuidado
- identificar rapidamente o estado geral de cada pessoa
- acessar dados detalhados de uma pessoa específica
- cadastrar uma nova pessoa sob cuidado
- localizar alguém rapidamente por busca ou filtro
- acompanhar alertas, sinais e compromissos de forma resumida

---

## 6. Pré-condições

Para que o módulo funcione corretamente, algumas condições devem existir:

- o usuário deve estar autenticado
- o sistema deve reconhecer o papel ativo atual
- o usuário deve possuir permissão para visualizar pessoas vinculadas
- devem existir vínculos cadastrados entre o usuário e os pacientes, exceto no caso de primeira utilização
- para cadastrar nova pessoa, o usuário deve possuir permissão de criação

---

## 7. Pós-condições esperadas

Após usar este módulo, o usuário deve conseguir:

- encontrar rapidamente quem acompanha
- entender a situação geral de cada pessoa
- entrar na área detalhada de um paciente
- iniciar o fluxo de cadastro de nova pessoa, quando permitido

---

## 8. Estrutura funcional da tela

A tela deve conter, no mínimo, os seguintes blocos:

### 8.1 Cabeçalho da página
Elementos:
- título da tela: **Pessoas que Eu Cuido**
- subtítulo contextual, quando necessário
- botão principal: **Cadastrar nova pessoa**
- campo de busca
- filtros

### 8.2 Área de resumo
Pode exibir:
- total de pessoas vinculadas
- quantidade com alerta ativo
- quantidade com consulta próxima
- quantidade sem intercorrências recentes

### 8.3 Lista principal de pessoas
Cada item deve exibir, de forma resumida:

- foto ou avatar
- nome da pessoa
- idade
- relação com o usuário, quando relevante
- estado resumido
- indicador de alerta, se houver
- próxima consulta ou compromisso, se houver
- última atualização importante
- botão de acesso aos detalhes

### 8.4 Estado vazio
Quando não houver pessoas vinculadas, a tela deve exibir:
- mensagem clara
- orientação sobre o que fazer
- botão para cadastrar nova pessoa, se permitido

---

## 9. Componentes da interface

### Componentes principais
- cabeçalho da página
- botão de ação principal
- campo de busca
- filtros
- cards ou linhas de listagem
- indicadores de status
- badges de alerta
- botão “Ver detalhes”
- estado vazio
- feedback de carregamento
- feedback de erro

### Componentes reutilizáveis
- card de pessoa acompanhada
- badge de criticidade
- indicador de próxima consulta
- resumo rápido de saúde
- caixa de busca
- filtro por categoria

---

## 10. Informações exibidas por pessoa

Cada pessoa listada pode apresentar:

- nome completo
- foto ou avatar
- idade
- sexo, opcional conforme contexto
- vínculo com o usuário
- status geral
- alerta ativo ou não
- data e hora da próxima consulta
- resumo visual do estado atual
- ação principal de acesso

### Exemplos de status possíveis
- estável
- atenção
- alerta
- sem atualização recente

---

## 11. Ações disponíveis na tela

### Ações principais
- buscar pessoa
- filtrar lista
- abrir perfil detalhado da pessoa
- cadastrar nova pessoa

### Ações secundárias possíveis
- ordenar por nome
- ordenar por criticidade
- ordenar por próxima consulta
- visualizar apenas pessoas com alertas
- visualizar apenas pessoas com compromissos próximos

---

## 12. Regras de negócio do módulo

- o conteúdo exibido depende do papel ativo do usuário
- apenas usuários com vínculo válido podem visualizar uma pessoa na lista
- apenas usuários com permissão adequada podem cadastrar nova pessoa
- dados sensíveis detalhados não devem aparecer integralmente na listagem
- alertas devem ter prioridade visual superior a informações comuns
- compromissos próximos devem ser destacados de forma secundária, mas visível
- a ausência de pessoas vinculadas deve acionar o estado vazio
- a listagem deve considerar ordenação útil para o contexto de cuidado
- o administrador pode ter visão ampliada, conforme política do sistema

---

## 13. Fluxo principal

### Fluxo principal 1 — Visualizar pessoas cuidadas
1. usuário acessa o sistema
2. usuário está em um papel com permissão para cuidado ou acompanhamento
3. usuário entra em “Pessoas que Eu Cuido”
4. sistema identifica vínculos disponíveis
5. sistema carrega lista de pessoas vinculadas
6. usuário visualiza os cards/lista
7. usuário seleciona uma pessoa
8. sistema redireciona para a tela de detalhes da pessoa

### Fluxo principal 2 — Cadastrar nova pessoa
1. usuário acessa “Pessoas que Eu Cuido”
2. usuário clica em “Cadastrar nova pessoa”
3. sistema verifica permissão
4. sistema abre fluxo de cadastro
5. usuário preenche os dados
6. sistema registra a nova pessoa e o vínculo
7. sistema confirma o cadastro
8. sistema retorna para a lista atualizada

---

## 14. Fluxos alternativos

### Fluxo alternativo 1 — Busca por nome
1. usuário acessa a tela
2. digita o nome no campo de busca
3. sistema filtra os resultados em tempo real ou sob confirmação
4. usuário seleciona a pessoa desejada

### Fluxo alternativo 2 — Filtro por alerta
1. usuário acessa a tela
2. seleciona o filtro “Com alerta”
3. sistema exibe apenas pessoas com eventos ativos

### Fluxo alternativo 3 — Filtro por próxima consulta
1. usuário acessa a tela
2. seleciona filtro de consulta próxima
3. sistema exibe apenas pessoas com compromissos próximos

---

## 15. Fluxos de exceção

### Exceção 1 — Usuário sem vínculo
- sistema não encontra pacientes vinculados
- exibe estado vazio
- orienta cadastro, convite ou solicitação de vínculo, conforme regra futura

### Exceção 2 — Usuário sem permissão
- sistema identifica que o papel ativo não permite acesso ao módulo
- exibe mensagem de acesso indisponível
- oferece retorno ao dashboard ou troca de papel

### Exceção 3 — Falha de carregamento
- sistema não consegue recuperar a lista
- exibe mensagem de erro amigável
- oferece opção de tentar novamente

### Exceção 4 — Cadastro sem permissão
- usuário tenta cadastrar nova pessoa
- sistema bloqueia a ação
- exibe mensagem de permissão insuficiente

---

## 16. Estados da interface

### Estado de carregamento
- skeleton loading ou mensagem de carregamento
- cards placeholders

### Estado com dados
- lista normal com pessoas vinculadas

### Estado vazio
- nenhuma pessoa vinculada
- mensagem clara e ação sugerida

### Estado de busca sem resultado
- nenhum resultado encontrado para o termo pesquisado
- opção de limpar busca

### Estado de erro
- falha ao carregar dados
- botão de tentar novamente

### Estado bloqueado
- usuário sem acesso ao módulo no papel ativo

---

## 17. Requisitos de UX

- a tela deve permitir leitura rápida
- o usuário deve identificar a situação geral de cada pessoa em poucos segundos
- a ação principal deve estar visível sem esforço
- a busca deve ser simples e previsível
- filtros devem ser objetivos
- alertas devem se destacar sem gerar excesso visual
- o módulo deve reduzir ansiedade e aumentar sensação de controle
- a navegação deve ser fácil para pessoas com baixa familiaridade digital

---

## 18. Requisitos de UI

- usar hierarquia clara entre título, resumo e listagem
- priorizar fontes grandes e boa legibilidade
- destacar botão principal de cadastro
- usar cards ou linhas com boa separação visual
- usar badges consistentes para status e alertas
- evitar excesso de informação em cada item
- permitir boa leitura em mobile e desktop
- o card deve mostrar contexto suficiente sem virar mini prontuário

---

## 19. Requisitos técnicos de front-end

- componente de listagem reutilizável
- componente de card de pessoa
- suporte a filtros e busca
- estados de loading, empty, error e blocked
- suporte a ordenação
- navegação para detalhe via botão ou clique no card
- possibilidade futura de paginação ou carregamento incremental
- compatibilidade com diferentes papéis ativos

---

## 20. Estrutura sugerida de componentes

### Página
- `PeopleICarePage`

### Componentes internos
- `PeopleICareHeader`
- `PeopleICareSummary`
- `PeopleSearchBar`
- `PeopleFilterBar`
- `CarePersonCard`
- `CarePersonStatusBadge`
- `CarePersonAlertBadge`
- `CarePersonNextAppointment`
- `EmptyStatePeopleICare`
- `ErrorStatePeopleICare`

---

## 21. Campos mínimos para cadastro de nova pessoa

Versão inicial sugerida:
- nome completo
- data de nascimento
- sexo
- telefone, opcional
- contato de emergência
- observações iniciais
- tipo de vínculo com o usuário
- permissões básicas de acesso

### Campos futuros
- endereço
- documentos
- dados clínicos estruturados
- preferências de cuidado
- informações de dispositivos conectados

---

## 22. Critérios de aceite

Este módulo será considerado funcional quando:

- usuários autorizados conseguirem acessar a tela
- a tela exibir corretamente a lista de pessoas vinculadas
- a busca funcionar corretamente
- os filtros funcionarem corretamente
- o botão de cadastro estiver visível para quem tem permissão
- o fluxo de abrir detalhes funcionar
- o estado vazio estiver previsto
- o estado de erro estiver previsto
- o estado sem permissão estiver previsto
- a experiência estiver coerente com o modelo de papel ativo

---

## 23. Fora de escopo neste momento

Não fazem parte deste spec, por enquanto:

- contratação de profissionais
- pagamentos
- integrações reais com dispositivos
- recomendação automática por IA
- chat avançado dentro da listagem
- relatórios clínicos completos nessa tela
- edição avançada de vínculo

---

## 24. Dependências deste módulo

Este módulo depende de:
- autenticação e papel ativo
- cadastro de usuários
- cadastro de pacientes
- vínculo entre usuário e paciente
- navegação para tela de detalhes
- modelo de alertas
- modelo de agenda

---

## 25. Observações estratégicas

Este módulo é um dos centros operacionais do Home Care 4.0.

Ele não deve ser tratado como uma simples listagem. Ele funciona como ponto de entrada para o acompanhamento cotidiano e precisa transmitir:
- clareza
- controle
- rapidez
- segurança

Sua qualidade impacta diretamente a percepção geral de utilidade da plataforma.