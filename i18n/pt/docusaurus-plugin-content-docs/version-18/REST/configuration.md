---
id: configuration
title: Configuração do servidor
---

Using standard HTTP requests, the 4D REST Server allows external applications to access the data of your database directly, *i.e.* to retrieve information about the dataclasses in your project, manipulate data, log into your web application, and much more.

Para iniciar usando as funcionalidades REST, precisa iniciar e configurar o servidor 4D REST.

> - Em 4D Server, abrir uma sessão REST exige que uma licença cliente 4D free esteja disponível.<br/>
> - Em 4D single-user, pode abrir até três sessões REST para fins de teste. You need to manage the [session cookie](authUsers.md#session-cookie) to use the same session for your requesting application.

## Iniciar o servidor REST

Por razões de segurança, o padrão de 4D é não responder a petições REST. If you want to start the REST Server, you must check the **Expose as REST server** option in the "Web/REST resource" page of the database settings in order for REST requests to be processed.

![alt-text](../assets/en/REST/Settings.png)

> REST services use the 4D HTTP server, so you need to make sure that the 4D Web server is started.

A mensagem de aviso "Atenção, verifique os privilégios de acesso" é exibida quando checar essa opção para chamar atenção para o fato que os serviços REST foram ativados, como padrão acessar os objetos de banco de dados é grátis desde que os acessos REST não tenham sido configurados.

## Configuração de acesso REST

Como padrão, acessos REST são abertos a todos os usuários que são obviamente não configurados para razões de segurança e também para controlar uso de licenças de cliente.

Pode configurar os acessos REST de uma das maneiras abaixo:

- assigning a **Read/Write** user group to REST services in the "Web/REST resource" page of the Database Settings;
- escrever um método de database `On REST Authentication` para interceptar e manejar qualquer petição inicial REST.

> Não pode usar as duas funcionalidades ao mesmo tempo. Once an `On REST Authentication` database method has been defined, 4D fully delegates control of REST requests to it: any setting made using the "Read/Write" menu on the Web/REST resource page of the Database Settings is ignored.

### Using the Database settings

The **Read/Write** menu in the "Web/REST resource" page of the database settings specifies a group of 4D users that is authorized to establish the link to the 4D database using REST queries.

By default, the menu displays `<Anyone>`, which means that REST accesses are open to all users. Quando tiver especificado um grupo, só contas de usuários 4D que pertençam ao grupo podem ser usadas [acesso a 4D através de petições REST](authUsers.md). Se uma conta for usada que não pertença a esse grupo, 4D retorna um erro de autenticação para o emissor da petição.

> Para essa configuração funcionar, o método de database `On REST Authentication` não deve ser definido. If it exists, 4D ignores access settings defined in the Database Settings.

### Método base On REST Authentication

O método database `On REST Authentication` lhe oferece uma forma personalizada de controlar a abertura de sessões REST em 4D. Esse método de banco de dados é chamado automaticamente quando uma nova sessão for aberta através da petição REST. Quando receber uma [solicitação para abrir uma sessão REST](authUsers.md), os identificadores de conexão são oferecidos no cabeçalho da solicitação. O método database `On REST Authentication` é chamado para poder avaliar estes identificadores. You can use the list of users for the 4D database or you can use your own table of identifiers. Para obter mais informação, consulte a [documentación](https://doc.4d.com/4Dv18/4D/18/On-REST-Authentication-database-method.301-4505004.en.html) do método database`On REST Authentication`.

## Expor tabelas e campos

Once REST services are enabled in the 4D database, by default a REST session can access all tables and fields of the datastore, and thus use their data. Por exemplo, se seu banco de dados conter uma tabela [Employee], é possível escrever:

```
http://127.0.0.1:8044/rest/Employee/?$filter="salary>10000"

```

Esta petição devolverá todos os empregados cujo campo de salario seja superior a 10000.

> As tabelas ou campos 4D que tenham o atributo "Invisível" também são expostas em REST por padrão.

Se quiser personalizar os objetos de datastore acessíveis através de REST, deve desativar a exposição para cada tabela ou campo que queira esconder. Quando uma petição REST tentar acessar um recurso não autorizado, 4D devolve um erro.

### Expor as tabelas

Como padrão, todas as tabelas são expostas em REST.

Por razões de segurança, pode querer expor apenas algumas tabelas em sua datastore para as chamadas REST. Por exemplo, se criar uma tabela [Users] que armazene os nomes de usuário e as senhas, seria melhor não deixá-la exposta.

Para remover a exposição REST para uma tabela:

1. Visualizar o inspetor de Tabelas no editor de Estrutura e selecionar a tabela que quiser modfiicar.

2. Uncheck the **Expose as REST resource** option: ![alt-text](../assets/en/REST/table.png) Do this for each table whose exposure needs to be modified.

### Expor campos

Como padrão, todos os campos 4D database são expostos em REST.

Pode querer expor certos campos de suas tabelas para REST. Por exemplo, é possível que não queira expor o campo [Employees]Salary.

Para eliminar a exposição REST de um campo:

1. Exibar o inspetor de Campo no editor de Estruturas e selecione o campo a modificar.

2. Desmarque a opção **Expor como recurso REST** para o campo. ![alt-text](../assets/en/REST/field.png) Repeat this for each field whose exposure needs to be modified.

> Para que um campo seja accessível a través de REST, a tabela pai também deve ser. Se a tabela pai não estiver exposta, nenhum dos campos estará, independente de seu estado.
