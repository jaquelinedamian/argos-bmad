# Flow 01 — Pessoas que Eu Cuido

## 1. Objetivo do fluxo

Descrever, de forma detalhada, o fluxo de navegação, decisão, resposta do sistema e estados possíveis do módulo “Pessoas que Eu Cuido”.

Este fluxo deve garantir clareza para:
- UX
- UI
- front-end
- documentação funcional

---

## 2. Contexto do fluxo

O módulo “Pessoas que Eu Cuido” é a entrada operacional para usuários que acompanham pacientes.

O fluxo deve permitir:
- visualizar pessoas vinculadas
- localizar rapidamente uma pessoa
- identificar estados importantes
- acessar detalhes
- iniciar cadastro de nova pessoa, quando permitido

---

## 3. Perfis envolvidos

### Podem acessar o fluxo
- familiar/cuidador
- prestador de serviço
- administrador, quando permitido

### Papel exibido como item listado
- paciente

### Regra principal
O fluxo depende do papel ativo do usuário no momento do acesso.

---

## 4. Pré-condições

- usuário autenticado
- papel ativo definido
- permissão válida para acesso ao módulo
- existência ou não de vínculos com pacientes
- disponibilidade dos dados necessários para resumo da listagem

---

## 5. Entrada do fluxo

O usuário pode chegar ao módulo por:

- menu principal
- dashboard
- atalho contextual
- retorno de fluxo de cadastro

---

## 6. Fluxo principal

### Fluxo principal A — Visualização da lista

1. usuário acessa o módulo “Pessoas que Eu Cuido”
2. sistema valida autenticação
3. sistema identifica papel ativo
4. sistema verifica permissão de acesso ao módulo
5. sistema busca pessoas vinculadas ao usuário no contexto atual
6. sistema busca informações resumidas de cada pessoa:
   - nome
   - idade
   - vínculo
   - status geral
   - alertas ativos
   - próxima consulta
7. sistema monta a interface da tela
8. usuário visualiza a listagem
9. usuário pode:
   - buscar uma pessoa
   - aplicar filtros
   - ordenar a lista
   - abrir detalhes
   - cadastrar nova pessoa, se tiver permissão

---

### Fluxo principal B — Acessar detalhes de uma pessoa

1. usuário visualiza a lista
2. usuário identifica a pessoa desejada
3. usuário clica no card ou botão “Ver detalhes”
4. sistema valida se o vínculo permite acesso ao detalhe
5. sistema redireciona para a tela de detalhes da pessoa
6. sistema carrega o perfil detalhado

---

### Fluxo principal C — Cadastrar nova pessoa

1. usuário acessa a tela
2. usuário clica em “Cadastrar nova pessoa”
3. sistema verifica permissão de criação
4. sistema abre o fluxo de cadastro
5. usuário preenche os campos obrigatórios
6. sistema valida os dados
7. sistema cria o cadastro da pessoa
8. sistema cria ou associa o vínculo com o usuário
9. sistema exibe mensagem de sucesso
10. sistema retorna para a lista atualizada

---

## 7. Fluxos alternativos

### Alternativo A — Busca por nome

1. usuário acessa a tela
2. usuário digita no campo de busca
3. sistema filtra os resultados
4. tela exibe apenas pessoas compatíveis com o termo
5. usuário seleciona a pessoa desejada

---

### Alternativo B — Busca sem resultado

1. usuário digita no campo de busca
2. sistema não encontra correspondência
3. sistema exibe estado “nenhum resultado encontrado”
4. usuário pode:
   - limpar busca
   - tentar outro termo
   - cadastrar nova pessoa, se permitido

---

### Alternativo C — Filtrar por alerta

1. usuário acessa a tela
2. usuário seleciona filtro “Com alerta”
3. sistema exibe somente pessoas com alertas ativos

---

### Alternativo D — Filtrar por próxima consulta

1. usuário acessa a tela
2. usuário seleciona filtro “Consulta próxima”
3. sistema exibe somente pessoas com compromisso próximo

---

### Alternativo E — Ordenar lista

1. usuário acessa a tela
2. usuário escolhe critério de ordenação
3. sistema reorganiza a listagem

Critérios possíveis:
- nome
- criticidade
- próxima consulta
- atualização mais recente

---

## 8. Fluxos de exceção

### Exceção A — Usuário sem permissão de acesso

1. usuário tenta acessar o módulo
2. sistema identifica que o papel ativo não possui permissão
3. sistema bloqueia a entrada
4. sistema exibe mensagem de acesso indisponível
5. sistema oferece:
   - voltar ao dashboard
   - trocar papel ativo

---

### Exceção B — Usuário sem pacientes vinculados

1. usuário acessa o módulo
2. sistema valida permissão
3. sistema não encontra vínculos ativos
4. sistema exibe estado vazio
5. sistema oferece ação de cadastro ou instrução de próximo passo

---

### Exceção C — Falha ao carregar lista

1. usuário acessa o módulo
2. sistema tenta carregar dados
3. ocorre falha na recuperação
4. sistema exibe estado de erro
5. sistema oferece botão “Tentar novamente”

---

### Exceção D — Tentativa de cadastro sem permissão

1. usuário clica em “Cadastrar nova pessoa”
2. sistema valida permissão
3. sistema identifica que o usuário não pode cadastrar
4. sistema bloqueia a ação
5. sistema exibe mensagem adequada

---

### Exceção E — Tentativa de acessar detalhe sem vínculo válido

1. usuário clica em uma pessoa listada ou tenta acessar diretamente
2. sistema valida o vínculo e o contexto
3. sistema identifica acesso inválido
4. sistema impede entrada
5. sistema exibe mensagem de restrição de acesso

---

## 9. Estados da tela

### Estado 1 — Loading
A tela mostra:
- placeholders
- skeletons
- ou feedback visual de carregamento

### Estado 2 — Lista carregada
A tela mostra:
- cabeçalho
- resumo
- busca
- filtros
- cards/lista de pessoas

### Estado 3 — Lista vazia
A tela mostra:
- mensagem clara
- explicação breve
- CTA para cadastrar nova pessoa, quando permitido

### Estado 4 — Busca sem resultado
A tela mostra:
- mensagem de nenhum resultado
- botão de limpar busca

### Estado 5 — Erro
A tela mostra:
- mensagem amigável
- botão de tentar novamente

### Estado 6 — Bloqueado por permissão
A tela mostra:
- acesso não disponível
- retorno ao dashboard
- opção de trocar papel

---

## 10. Regras de decisão do sistema

O sistema deve decidir com base em:

- usuário está autenticado?
- qual é o papel ativo?
- esse papel pode acessar o módulo?
- existem vínculos com pacientes?
- existem alertas ativos?
- existem compromissos próximos?
- o usuário pode cadastrar nova pessoa?
- o vínculo permite abrir o detalhe?

---

## 11. Informações mínimas carregadas na listagem

Para cada pessoa vinculada, o sistema deve tentar carregar:

- identificador
- nome
- foto/avatar
- idade
- vínculo
- status geral
- alerta ativo
- próxima consulta
- última atualização relevante

---

## 12. Gatilhos de navegação

### Entradas
- menu
- dashboard
- retorno do cadastro

### Saídas
- tela de detalhes da pessoa
- fluxo de cadastro
- dashboard
- troca de papel

---

## 13. Requisitos de UX do fluxo

- entrada rápida no módulo
- leitura fácil da situação de cada pessoa
- decisão rápida entre abrir detalhe ou continuar navegando
- experiência previsível em caso de erro
- clareza em estados vazios
- confiança no tratamento de acesso e privacidade

---

## 14. Requisitos de UI do fluxo

- botão principal claramente visível
- busca acessível
- filtros simples
- cards escaneáveis
- alertas com destaque adequado
- diferenciação clara entre estado normal, atenção e alerta

---

## 15. Impacto no front-end

Este fluxo exige:
- carregamento inicial da página
- renderização condicional por estado
- filtros locais ou remotos
- mecanismo de busca
- navegação para detalhes
- controle de permissões
- exibição condicional do botão de cadastro

---

## 16. Critérios de integridade do fluxo

O fluxo é considerado consistente quando:
- todas as entradas possíveis estão previstas
- todos os estados principais estão previstos
- erros e bloqueios possuem resposta clara
- o acesso ao detalhe respeita vínculo e permissão
- a experiência não depende de interpretação implícita

---

## 17. Observação estratégica

Este fluxo é um dos fluxos centrais do TCC, porque conecta:
- gestão de pessoas
- acompanhamento cotidiano
- acesso rápido à informação
- ponto de partida para demais módulos do cuidado

Ele deve ser tratado como um fluxo-base da plataforma.