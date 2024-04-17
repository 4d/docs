---
id: overview
title: Visão Geral
---

If more than one person uses an application, which is usually the case in client-server architecture or Web interfaces, you need to control access or provide different features according to the connected users. É igualmente essencial garantir a segurança dos dados sensíveis. You can provide this security by assigning passwords to users and creating access groups that have different levels of access to information in the application or to application operations.

> Para uma visão geral das funções de segurança de 4D, consulte o [Guia de segurança de 4D](https://blog.4d.com/4d-security-guide/).

## Atribuir grupos de acesso

O sistema de acesso por senha de 4D é baseado em usuários e grupos. You create users and assign passwords, put users in groups, and assign each group access rights to appropriate parts of the application.

Os grupos podem então receber privilégios de acesso a partes ou funcionalidades específicas da aplicação (acesso ao modo Desenho, servidor HTTP, servidor SQL, etc.) ou a qualquer parte personalizada.

O exemplo abaixo mostra direitos de acesso ao explorador de Execução e ao Design sendo atribuidos ao grupo "Devs":

![](../assets/en/Users/Access1.png)

## Ativar o controlo de acesso

You initiate the 4D password access control system in client-server by **assigning a password to the Designer**.

Until you give the Designer a password, all application access are done with the Designer's access rights, even if you have set up users and groups (when the application opens, no ID is required). Qualquer parte da aplicação pode ser aberta.

Quando uma senha for estabelecida para o Designer, todos os privilégios de acesso têm efeito. In order to connect to the application, remote users must enter a password.

Para desativar o sistema de acesso a senhas, precisa remover a senha Designer.

## Usuários e grupos na arquitetura projeto

In project applications (.4DProject or .4dz files), 4D users and groups can be configured in both single-user and client-server environments. No entanto, controlo de acesso só é eficaz com 4D Server. A tabela abaixo lista as principais funcionalidades de usuários e grupos e sua disponibilidade:

|                                                            | 4D (usuário único)                   | 4D Server |
| ---------------------------------------------------------- | ------------------------------------ | --------- |
| Adicionar/editar usuários e grupos                         | sim                                  | sim       |
| Atribuir acesso de usuário/grupo a servidores              | sim                                  | sim       |
| Identificação de usuário                                   | não (todos os usuários são Designer) | sim       |
| Controle de acesso quando o Designer for atribuído a senha | não (todos os acessos são Designer)  | sim       |

## Editor de toolbox

Os editores dos usuários e grupos estão localizados na caixa de ferramentas de 4D. These editors can be used to create both users and groups, assign passwords to users, place users in groups, etc.

![](../assets/en/Users/editor.png)

> O editor de usuários e grupos pode ser exibido em execução com ajuda do comando [EDIT ACCESS](https://doc.4d.com/4Dv18/4D/18/EDIT-ACCESS.301-4504687.en.html). Toda a configuração de usuários e grupos pode também ser editada durante a execução da aplicação utilizando comandos de linguagem 4D do tema [Usuários e grupos](https://doc.4d.com/4Dv18R3/4D/18-R3/Users-and-Groups.201-4900438.en.html).

## Ficheiro Directory.json

Users, groups, as well as their access rights are stored in a specific project file named **directory.json**.

Esse arquivo pode ser armazenado nos seguintes locais:

- in the user settings folder, i.e. in the "Settings" folder at the same level as the "Project" folder. Essas propriedades são usadas por padrão para a aplicação.
- in the data settings folder,  i.e. in the "Settings" folder in the "Data" folder. If a **directory.json** file is present at this location, it takes priority over the file in the user settings folder. This feature allows you to define custom/local Users and Groups configurations. A configuração personalizada não será afetada por uma atualização da aplicação.

> If 4D password access control is not enabled, the **directory.json** is not created.
