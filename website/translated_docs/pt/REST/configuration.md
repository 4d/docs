---
id: configuration
title: Server Configuration
---

Utilizando petições HTTP padrão, o servidor 4D REST permite às aplicações externas acessar diretamente aos dados de seu banco, *ou seja, *recuperar informação sobre as classes de dados de seu projeto, manipular dados, entrar em sua aplicação web, e muito mais.

To start using the REST features, you need to start and configure the 4D REST server.

> - On 4D Server, opening a REST session requires that a free 4D client licence is available.<br>
> - Em 4D monousuário é possível abrir até três sessões REST com objetivo de testes.   
>     É preciso gerenciar  [o cookie de sessão](authUsers.md#session-cookie) para usar a mesma sessão para sua aplicação peticionante.



## Starting the REST Server

For security reasons, by default, 4D does not respond to REST requests. Se quiser iniciar o servidor REST, precisa marcar a opção **Expose as REST server** na página "Web/REST resource"  das configurações de banco de dados para que as petições  REST sejam processadas..

![alt-text](assets/en/REST/Settings.png)

> REST services use the 4D HTTP server, so you need to make sure that the 4D Web server is started.

The warning message "Caution, check the access privileges" is displayed when you check this option to draw your attention to the fact that when REST services are activated, by default access to database objects is free as long as the REST accesses have not been configured.


## Configuring REST access

By default, REST accesses are open to all users which is obviously not recommended for security reasons, and also to control client licenses usage.

You can configuring REST accesses with one of the following means:
- Atribuir um grupo de usuários **Read/Write** para serviços REST na página "Web/REST das Configurações de banco de dados;
- writing an `On REST Authentication` database method to intercept and handle every initial REST request.

> You cannot use both features simultaneously. Quando um método de banco de dados `On REST Authentication` for definido, 4D delega controle de petições REST totalmente para ele: qualquer configuração feita usando o menu "Read/Write" na página Web/REST resource das configurações de banco de dados será ignorada.


### Utilização dos parâmetros de la base

O menu **Read/Write** na página "Web/REST resource" das configurações de banco de dados especifica um grupo de usuários 4D que está autorizado a estabelecer o link com o banco de dados 4D usando pesquisas REST.

Como padrão, o menu mostra **<Anyone>**, o que significa que os acessos REST estão abertos a todos os usuários. Once you have specified a group, only a 4D user account that belongs to this group may be used to [access 4D by means of a REST request](authUsers.md). If an account is used that does not belong to this group, 4D returns an authentication error to the sender of the request.

> In order for this setting to take effect, the `On REST Authentication` database method must not be defined. Se existir, 4D ignora os parâmetros de aceso definidos nas propriedades do banco de dados.

### Using the On REST Authentication database method
The `On REST Authentication` database method provides you with a custom way of controlling the opening of REST sessions on 4D. This database method is automatically called when a new session is opened through a REST request. When a [request to open a REST session](authUsers.md) is received, the connection identifiers are provided in the header of the request. The `On REST Authentication` database method is called so that you can evaluate these identifiers. Pode utilizar a lista de usuários do banco 4D ou pode utilizar sua própria tabela de identificadores. For more information, refer to the `On REST Authentication` database method [documentation](https://doc.4d.com/4Dv18/4D/18/On-REST-Authentication-database-method.301-4505004.en.html).



## Exposing tables and fields

Quando serviços REST estiverem ativados no banco de dados 4D, como padrão uma sessão REST pode acessar todas as tabelas e campos da datastore, e assim usar seus dados. For example, if your database contains an [Employee] table, it is possible to write:

```
http://127.0.0.1:8044/rest/Employee/?$filter="salary>10000"

```
This request will return all employees whose salary field is higher than 10000.

> 4D tables and/or fields that have the "Invisible" attribute are also exposed in REST by default.

If you want to customize the datastore objects accessible through REST, you must disable the exposure of each table and/or field that you want to hide. When a REST request attempts to access an unauthorized resource, 4D returns an error.

### Exposing tables

By default, all tables are exposed in REST.

For security reasons, you may want to only expose certain tables of your datastore to REST calls. For instance, if you created a [Users] table storing user names and passwords, it would be better not to expose it.

To remove the REST exposure for a table:

1. Display the Table Inspector in the Structure editor and select the table you want to modify.

2. Uncheck the **Expose as REST resource** option: ![alt-text](assets/en/REST/table.png) Do this for each table whose exposure needs to be modified.


### Exposing fields

By default, all 4D database fields are exposed in REST.

You may not want to expose certain fields of your tables to REST. For example, you may not want to expose the [Employees]Salary field.

To remove the REST exposure for a field:

1. Display the Field Inspector in the Structure editor and select the field you want to modify.

2. Uncheck the **Expose as REST resource** for the field. ![alt-text](assets/en/REST/field.png) Repeat this for each field whose exposure needs to be modified.

> In order for a field to be accessible through REST, the parent table must be as well. If the parent table is not exposed, none of its fields will be, regardless of their status.
