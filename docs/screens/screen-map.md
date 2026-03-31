# Screen Map — Home Care 4.0 (Argos Saúde)

## 1. Objetivo do documento

Mapear as telas principais do sistema Home Care 4.0, organizando a navegação por contexto, papel e domínio funcional.

Este documento serve como base para:
- arquitetura de informação
- definição de fluxos
- organização do front-end
- criação de wireframes
- construção do protótipo no Figma

---

## 2. Princípio estrutural do sistema

O sistema adota um modelo de usuário único com múltiplos papéis.

Isso significa que:
- existe uma única conta por usuário
- um mesmo usuário pode possuir múltiplos papéis
- a navegação muda conforme o papel ativo
- algumas telas são compartilhadas
- algumas telas são contextuais
- algumas telas só existem para papéis específicos

---

## 3. Macrogrupos de telas

As telas do sistema estão organizadas em 6 grandes grupos:

1. telas de acesso e identidade
2. telas gerais e navegação principal
3. telas de cuidado e acompanhamento
4. telas de marketplace de profissionais
5. telas administrativas
6. telas de suporte, configuração e sistema

---

## 4. Telas de acesso e identidade

### 4.1 Tela de entrada
**Função:** apresentar o sistema e permitir acesso  
**Ações principais:**
- entrar
- criar conta
- recuperar acesso

### 4.2 Tela de login
**Função:** autenticação do usuário  
**Ações principais:**
- informar credenciais
- entrar
- recuperar senha

### 4.3 Tela de cadastro
**Função:** criar conta no sistema  
**Ações principais:**
- preencher dados básicos
- criar conta
- confirmar dados iniciais

### 4.4 Tela de seleção de papel ativo
**Função:** permitir que o usuário escolha em qual contexto deseja entrar  
**Ações principais:**
- selecionar papel
- confirmar entrada
- acessar contexto correspondente

### 4.5 Tela de recuperação de acesso
**Função:** recuperar conta  
**Ações principais:**
- informar e-mail ou contato
- receber instruções
- redefinir acesso

---

## 5. Telas gerais e navegação principal

### 5.1 Dashboard principal
**Função:** ponto de entrada do usuário após login  
**Conteúdo esperado:**
- resumo do contexto atual
- atalhos principais
- alertas
- próximos compromissos
- informações rápidas conforme papel ativo

### 5.2 Tela de notificações
**Função:** centralizar notificações do sistema  
**Conteúdo esperado:**
- alertas
- lembretes
- atualizações
- eventos importantes

### 5.3 Tela de perfil do usuário
**Função:** exibir dados do usuário logado  
**Conteúdo esperado:**
- dados pessoais
- papéis vinculados
- preferências
- configurações básicas

### 5.4 Tela de troca de papel
**Função:** mudar o contexto ativo do usuário  
**Conteúdo esperado:**
- papéis disponíveis
- descrição resumida de cada papel
- confirmação da troca

---

## 6. Telas de cuidado e acompanhamento

### 6.1 Tela Pessoas que Eu Cuido
**Função:** listar pacientes vinculados ao usuário  
**Conteúdo esperado:**
- busca
- filtros
- resumo
- cards/lista de pessoas
- ação de cadastrar nova pessoa

### 6.2 Tela de cadastro de nova pessoa
**Função:** cadastrar paciente ou pessoa acompanhada  
**Conteúdo esperado:**
- formulário inicial
- dados pessoais
- vínculo com o usuário
- observações iniciais

### 6.3 Tela de detalhes da pessoa
**Função:** centralizar os dados de uma pessoa específica  
**Conteúdo esperado:**
- identificação
- estado geral
- atalhos para sinais vitais, agenda, exames, alertas e histórico

### 6.4 Tela de sinais vitais
**Função:** exibir sinais atuais e histórico resumido  
**Conteúdo esperado:**
- indicadores principais
- evolução recente
- estados de atenção

### 6.5 Tela de alertas da pessoa
**Função:** exibir alertas ativos e histórico de alertas  
**Conteúdo esperado:**
- criticidade
- data e hora
- ação recomendada
- status do alerta

### 6.6 Tela de agenda da pessoa
**Função:** exibir compromissos e rotinas  
**Conteúdo esperado:**
- consultas
- lembretes
- visitas
- eventos futuros

### 6.7 Tela de exames e documentos
**Função:** visualizar e organizar documentos relacionados à pessoa  
**Conteúdo esperado:**
- lista de arquivos
- categorias
- visualização
- upload futuro

### 6.8 Tela de histórico geral da pessoa
**Função:** consolidar eventos importantes do acompanhamento  
**Conteúdo esperado:**
- eventos recentes
- alterações
- observações
- registros cronológicos

### 6.9 Tela de contatos e rede de apoio
**Função:** exibir pessoas relacionadas ao cuidado  
**Conteúdo esperado:**
- familiares
- cuidadores
- profissionais vinculados
- formas de contato

---

## 7. Telas de marketplace de profissionais

### 7.1 Tela de listagem de profissionais
**Função:** permitir busca e descoberta de profissionais  
**Conteúdo esperado:**
- campo de busca
- filtros
- cards de profissionais
- ranking
- avaliações resumidas

### 7.2 Tela de perfil profissional público
**Função:** apresentar o profissional no marketplace  
**Conteúdo esperado:**
- foto
- nome
- especialidades
- descrição
- reputação
- avaliações
- disponibilidade resumida
- ação de contato

### 7.3 Tela de avaliações do profissional
**Função:** detalhar reputação do prestador  
**Conteúdo esperado:**
- nota média
- comentários
- critérios avaliados
- volume de avaliações

### 7.4 Tela de cadastro/edição de perfil profissional
**Função:** permitir que o prestador configure seu perfil público  
**Conteúdo esperado:**
- foto
- descrição
- especialidades
- localização
- modalidades de atendimento
- informações públicas

### 7.5 Tela de busca avançada de profissionais
**Função:** refinar a descoberta de profissionais  
**Conteúdo esperado:**
- especialidade
- localização
- avaliação
- tipo de atendimento
- disponibilidade

---

## 8. Telas administrativas

### 8.1 Dashboard administrativo
**Função:** visão geral operacional do sistema  
**Conteúdo esperado:**
- números gerais
- usuários
- perfis
- alertas
- status do sistema

### 8.2 Tela de gestão de usuários
**Função:** visualizar e gerenciar contas  
**Conteúdo esperado:**
- lista de usuários
- filtros
- papéis
- status

### 8.3 Tela de gestão de vínculos
**Função:** administrar relações entre usuários e pacientes  
**Conteúdo esperado:**
- vínculos ativos
- permissões
- histórico de vínculo

### 8.4 Tela de moderação do marketplace
**Função:** moderar perfis, avaliações e denúncias  
**Conteúdo esperado:**
- perfis pendentes
- avaliações sinalizadas
- ações administrativas

### 8.5 Tela de auditoria e registros
**Função:** acompanhar ações relevantes no sistema  
**Conteúdo esperado:**
- logs
- ações por usuário
- papel ativo no momento da ação
- data e contexto

---

## 9. Telas de suporte, configuração e sistema

### 9.1 Tela de configurações
**Função:** personalizar preferências do sistema  
**Conteúdo esperado:**
- preferências gerais
- notificações
- acessibilidade
- idioma, no futuro

### 9.2 Tela de privacidade e permissões
**Função:** gerenciar consentimentos e acessos  
**Conteúdo esperado:**
- permissões concedidas
- consentimentos ativos
- informações sensíveis

### 9.3 Tela de ajuda e suporte
**Função:** orientar o usuário  
**Conteúdo esperado:**
- perguntas frequentes
- contato
- orientações básicas

### 9.4 Tela de erro ou acesso indisponível
**Função:** tratar exceções de navegação  
**Conteúdo esperado:**
- mensagem clara
- retorno seguro
- ação sugerida

---

## 10. Relações entre telas principais

### Fluxo base de entrada
Tela de entrada  
→ login  
→ seleção de papel  
→ dashboard principal

### Fluxo base de cuidado
Dashboard  
→ Pessoas que Eu Cuido  
→ detalhes da pessoa  
→ sinais vitais / alertas / agenda / exames / histórico

### Fluxo base de marketplace
Dashboard ou menu  
→ listagem de profissionais  
→ perfil profissional  
→ avaliações ou contato

### Fluxo base administrativo
Dashboard administrativo  
→ gestão de usuários / vínculos / marketplace / auditoria

---

## 11. Telas prioritárias para o TCC

As telas mais prioritárias neste momento são:

1. tela de login
2. tela de seleção de papel
3. dashboard principal
4. tela Pessoas que Eu Cuido
5. tela de cadastro de nova pessoa
6. tela de detalhes da pessoa
7. tela de sinais vitais
8. tela de alertas
9. tela de agenda
10. tela de listagem de profissionais
11. tela de perfil profissional público

---

## 12. Telas secundárias para evolução posterior

Estas telas podem ser especificadas depois:

- avaliações detalhadas
- moderação administrativa completa
- auditoria aprofundada
- privacidade e consentimento detalhados
- suporte avançado
- busca avançada de profissionais

---

## 13. Observações estratégicas

- o mapa de telas deve respeitar o papel ativo
- a experiência deve deixar claro em qual contexto o usuário está
- áreas privadas do cuidado e áreas públicas do marketplace devem ser bem separadas
- as telas prioritárias devem ser detalhadas primeiro
- a navegação deve ser simples, previsível e acessível

---

## 14. Próximo uso deste documento

Este mapa servirá de base para:
- definição da ordem dos próximos Specs
- criação dos wireframes
- modelagem da navegação no Figma
- organização de componentes no front-end