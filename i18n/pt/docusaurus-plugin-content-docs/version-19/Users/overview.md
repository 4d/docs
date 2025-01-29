---
id: overview
title: Visão Geral
---

Se mais de uma pessoa usar uma aplicação, que geralmente é o caso em arquitetura cliente-servidor ou interfaces Web, você precisa controlar o acesso ou fornecer diferentes recursos, conforme os usuários conectados. É igualmente essencial garantir a segurança dos dados sensíveis. Você pode fornecer essa segurança atribuindo senhas aos usuários e criando grupos de acesso com diferentes níveis de acesso às informações da aplicação ou às operações da aplicação.

> Para uma visão geral das funções de segurança de 4D, consulte o [Guia de segurança de 4D](https://blog.4d.com/4d-security-guide/).

## Atribuir grupos de acesso

O sistema de acesso por senha de 4D é baseado em usuários e grupos. Você cria usuários e atribui senhas, colocar usuários em grupos e atribuir direitos de acesso a cada grupo para as partes apropriadas da aplicação.

Os grupos podem então receber privilégios de acesso a partes ou funcionalidades específicas da aplicação (acesso ao modo Desenho, servidor HTTP, servidor SQL, etc.) ou a qualquer parte personalizada.

O exemplo abaixo mostra direitos de acesso ao explorador de Execução e ao Design sendo atribuidos ao grupo "Devs":

![](../assets/en/Users/Access1.png)

## Ativar o controlo de acesso

Você iniciou o sistema de controle de senha 4D no servidor-cliente por **atribuir uma senha ao Designer**.

Até você dar uma senha ao Designer, todo o acesso da aplicação será feito com os direitos de acesso do Designer mesmo que você tenha configurado usuários e grupos (quando o aplicativo abrir, nenhum ID é necessária). Qualquer parte da aplicação pode ser aberta.

Quando uma senha for estabelecida para o Designer, todos os privilégios de acesso têm efeito. Para se conectar a aplicação, usuários remotos devem digitar uma senha.

Para desativar o sistema de acesso a senhas, precisa remover a senha Designer.

## Usuários e grupos na arquitetura projeto

Em aplicações projecto (ficheiros .4DProject ou .4dz), os usuários e grupos 4D podem ser configurados tanto em monoposto e em cliente-servidor. No entanto, controlo de acesso só é eficaz com 4D Server. A tabela abaixo lista as principais funcionalidades de usuários e grupos e sua disponibilidade:

|                                                            | 4D (usuário único)                   | 4D Server |
| ---------------------------------------------------------- | ------------------------------------ | --------- |
| Adicionar/editar usuários e grupos                         | sim                                  | sim       |
| Atribuir acesso de usuário/grupo a servidores              | sim                                  | sim       |
| Identificação de usuário                                   | não (todos os usuários são Designer) | sim       |
| Controle de acesso quando o Designer for atribuído a senha | não (todos os acessos são Designer)  | sim       |

## Editor de toolbox

Os editores dos usuários e grupos estão localizados na caixa de ferramentas de 4D. Estes editores podem ser usados para criar usuários e grupos, atribuir senhas a usuários, colocar usuários em grupos, etc.

![](../assets/en/Users/editor.png)

> O editor de usuários e grupos pode ser exibido em execução com ajuda do comando [EDIT ACCESS](https://doc.4d.com/4Dv18/4D/18/EDIT-ACCESS.301-4504687.en.html). Toda a configuração de usuários e grupos pode também ser editada durante a execução da aplicação utilizando comandos de linguagem 4D do tema [Usuários e grupos](https://doc.4d.com/4Dv18R3/4D/18-R3/Users-and-Groups.201-4900438.en.html).

## Ficheiro Directory.json

Os usuários, grupos, bem como seus direitos de acesso são armazenados em um arquivo específico do projeto chamado **directory.json**.

Esse arquivo pode ser armazenado nos seguintes locais:

- na pasta de configurações do usuário, ou seja, na pasta "Settings" no mesmo nível que a pasta "Project". Essas propriedades são usadas por padrão para a aplicação.
- na pasta de configurações de dados, ou seja, na pasta "Settings" na pasta "Data". Se um arquivo **directory.json** estiver presente neste local, ele terá prioridade sobre o arquivo na pasta Settings usuário. Esta funcionalidade permite definir configurações personalizadas/locais de usuários e grupos. A configuração personalizada não será afetada por uma atualização da aplicação.

> Se o controle de acesso por senha 4D estiver inativo, o **directory.json** não será criado.
