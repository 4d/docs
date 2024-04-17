---
id: configuration
title: Configuração do servidor
---

Utilizando petições HTTP padrão, o servidor 4D REST permite às aplicações externas acessar diretamente aos dados de seu banco, *ou seja, *recuperar informação sobre as classes de dados de seu projeto, manipular dados, entrar em sua aplicação web, e muito mais.

Para iniciar usando as funcionalidades REST, precisa iniciar e configurar o servidor 4D REST.




## Iniciar o servidor REST

Por razões de segurança, o padrão de 4D é não responder a petições REST. If you want to start the REST Server, you must check the **Expose as REST server** option in the "Web/REST resource" page of the structure settings in order for REST requests to be processed.

![alt-text](../assets/en/REST/Settings.png)

> Serviços REST usam o servidor 4D HTTP, por isso precisa ter certeza que o servidor 4D Web Server foi iniciado.

A mensagem de aviso "Atenção, verifique os privilégios de acesso" é exibida quando checar essa opção para chamar atenção para o fato que os serviços REST foram ativados, como padrão acessar os objetos de banco de dados é grátis desde que os acessos REST não tenham sido configurados.

> Deve reiniciar a aplicação 4D para que as suas alterações tenham efeito.


## Controlling REST access

Como padrão, acessos REST são abertos a todos os usuários que são obviamente não configurados para razões de segurança e também para controlar uso de licenças de cliente.

You can configure REST accesses with one of the following means:
- (recommended) enable the **force login** mode and create an [`authentify()`](authUsers.md#authentify) datastore class function to authenticate users and assign privileges to their web session (see [User login modes](authUsers.md#user-login-modes)).
- assign a **Read/Write** user group to REST services in the "**Web** > **Web Features**" page of the Structure Settings;
- write an `On REST Authentication` database method to intercept and handle every initial REST request.


:::info Important

- It is recommended not to enable different REST access control features simultaneously to avoid conflicts.
- If an `On REST Authentication` database method has been defined, any setting made using the "Read/Write" menu on the **Web** > **Web Features** page of the Structure Settings is ignored.

:::

### Utilização dos parâmetros da estrutura

The **Read/Write** menu in the "**Web** > **Web Features**" page of the structure settings specifies a group of 4D users that is authorized to establish the link to the 4D application using REST queries.

Como padrão, o menu mostra `<Anyone>`, o que significa que os acessos REST estão abertos a todos os usuários. Quando tiver especificado um grupo, só contas de usuários 4D que pertençam ao grupo podem ser usadas [acesso a 4D através de petições REST](authUsers.md). Se uma conta for usada que não pertença a esse grupo, 4D retorna um erro de autenticação para o emissor da petição.

> Para essa configuração funcionar, o método de database `On REST Authentication` não deve ser definido. Se existir, 4D ignora os parâmetros de aceso definidos nas propriedades do banco de dados.

### Método base On REST Authentication
O método database `On REST Authentication` lhe oferece uma forma personalizada de controlar a abertura de sessões REST em 4D. Esse método de banco de dados é chamado automaticamente quando uma nova sessão for aberta através da petição REST. Quando receber uma [solicitação para abrir uma sessão REST](authUsers.md), os identificadores de conexão são oferecidos no cabeçalho da solicitação. O método database `On REST Authentication` é chamado para poder avaliar estes identificadores. Pode utilizar a lista de usuários do banco 4D ou pode utilizar sua própria tabela de identificadores. For more information, refer to the `On REST Authentication` database method [documentation](https://doc.4d.com/4Dv18/4D/18/On-REST-Authentication-database-method.301-4505004.en.html).



## Expor tabelas e campos

Quando serviços REST estiverem ativados no banco de dados 4D, como padrão uma sessão REST pode acessar todas as tabelas e campos da datastore, e assim usar seus dados. Assim, pode utilizar os seus dados. Por exemplo, se seu banco de dados conter uma tabela [Employee], é possível escrever:

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


## Modo preventivo

On 4D Server, REST requests are automatically handled through preemptive processes, **even in interpreted mode**. You need to make sure that your code is [compliant with a preemptive execution](../WebServer/preemptiveWeb.md#writing-thread-safe-web-server-code).

> To debug interpreted web code on the server machine, make sure the debugger is [attached to the server](../Debugging/debugging-remote.md) or [to a remote machine](../Debugging/debugging-remote.md#attaching-the-debugger-to-a-remote-4d-client). With this configuration, all processes switch to cooperative mode and the web server code can be debugged.

With 4D single-user, interpreted code is always run in cooperative mode.
