---
id: overview
title: Visão Geral
---

If more than one person uses a database, which is usually the case in client-server architecture or Web interfaces, you need to control access or provide different features according to the connected users. It is also essential to provide security for sensitive data. You can provide this security by assigning passwords to users and creating access groups that have different levels of access to information in the database or to database operations.

> Para uma visão geral das funções de segurança de 4D, consulte o [Guia de segurança de 4D](https://blog.4d.com/4d-security-guide/).

## Atribuir grupos de acesso

4D’s password access system is based on users and groups. You create users and assign passwords, put users in groups, and assign each group access rights to appropriate parts of the database.

Groups can then be assigned access privileges to specific parts or features of the database (Design access, HTTP server, SQL server, etc.), or any custom part.

O exemplo abaixo mostra direitos de acesso ao explorador de Execução e ao Design sendo atribuidos ao grupo "Devs":

![](../assets/en/Users/Access1.png)

## Activating access control

You initiate the 4D password access control system in client-server by **assigning a password to the Designer**.

Until you give the Designer a password, all database access are done with the Designer's access rights, even if you have set up users and groups (when the database opens, no ID is required). Any part of the database can be opened.

Quando uma senha for estabelecida para o Designer, todos os privilégios de acesso têm efeito. In order to connect to the database, remote users must enter a password.

Para desativar o sistema de acesso a senhas, precisa remover a senha Designer.

## Users and groups in project architecture

In project databases (.4DProject or .4dz files), 4D users and groups can be configured in both single-user and client-server environments. However, access control is only effective in 4D Server databases. A tabela abaixo lista as principais funcionalidades de usuários e grupos e sua disponibilidade:

|                                                            | 4D Developer (single-user)           | 4D Server |
| ---------------------------------------------------------- | ------------------------------------ | --------- |
| Adicionar/editar usuários e grupos                         | sim                                  | sim       |
| Atribuir acesso de usuário/grupo a servidores              | sim                                  | sim       |
| Identificação de usuário                                   | não (todos os usuários são Designer) | sim       |
| Controle de acesso quando o Designer for atribuído a senha | não (todos os acessos são Designer)  | sim       |

## Editor de toolbox

The editors for users and groups are located in the toolbox of 4D. These editors can be used to create both users and groups, assign passwords to users, place users in groups, etc.

![](../assets/en/Users/editor.png)

> Users and groups editor can be displayed at runtime using the [EDIT ACCESS](https://doc.4d.com/4Dv18/4D/18/EDIT-ACCESS.301-4504687.en.html) command.

## Ficheiro Directory.json

Users, groups, as well as their access rights are stored in a specific database file named **directory.json**.

This file can be stored at the following locations:

- in the user database settings folder, i.e. in the "Settings" folder at the same level as the "Project" folder. These settings are used by default for the database.
- in the data settings folder,  i.e. in the "Settings" folder in the "Data" folder. If a directory.json file is present at this location, it takes priority over the file in the user database settings folder. This feature allows you to define custom/local Users and Groups configurations. The custom configuration will left untouched by a database upgrade.

> If users and groups management is not active, the directory.json is not created.
