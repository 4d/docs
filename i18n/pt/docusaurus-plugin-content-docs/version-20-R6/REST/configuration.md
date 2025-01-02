---
id: configuration
title: Configuração do servidor
---

Using standard HTTP requests, the 4D REST Server allows external applications to access the data of your application directly, *i.e.* to retrieve information about the dataclasses in your project, manipulate data, log into your web application, and much more.

Para iniciar usando as funcionalidades REST, precisa iniciar e configurar o servidor 4D REST.

## Iniciar o servidor REST

Por razões de segurança, o padrão de 4D é não responder a petições REST. Si desea iniciar el servidor REST, debe marcar la opción **Exponer como servidor REST** en la página **Web** > **Web Features** de la configuración de la estructura para que se procesen las peticiones REST.

![alt-text](../assets/en/REST/Settings.png)

> Serviços REST usam o servidor 4D HTTP, por isso precisa ter certeza que o servidor 4D Web Server foi iniciado.

A mensagem de aviso "Atenção, verifique os privilégios de acesso" é exibida quando checar essa opção para chamar atenção para o fato que os serviços REST foram ativados, como padrão acessar os objetos de banco de dados é grátis desde que os acessos REST não tenham sido configurados.

> Deve reiniciar a aplicação 4D para que as suas alterações tenham efeito.

## Controle do acesso REST

Como padrão, acessos REST são abertos a todos os usuários que são obviamente não configurados para razões de segurança e também para controlar uso de licenças de cliente.

As of 4D 20 R6, you configure REST accesses by enabling the [**force login** mode](authUsers.md#force-login-mode) and create an [`authentify()`](authUsers.md#authentify) datastore class function to authenticate users and assign privileges to their web session.

:::note Compatibidade

The **Access** area in the Settings dialog box is only available in converted projects for compatibility. Consulte [Access](../settings/web.md#access) para obter mais informações.

:::

## Expor tabelas e campos

Una vez activados los servicios REST en la aplicación 4D, por defecto una sesión REST puede acceder a todas las tablas y campos de la base de datos 4D a través de la [interfaz del datastore](ORDA/dsMapping.md#datastore). Assim, pode utilizar os seus dados. Por exemplo, se seu banco de dados conter uma tabela [Employee], é possível escrever:

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

2. Uncheck the **Expose as REST resource** option:
   ![alt-text](../assets/en/REST/table.png)
   Do this for each table whose exposure needs to be modified.

### Expor campos

Como padrão, todos os campos 4D database são expostos em REST.

Pode querer expor certos campos de suas tabelas para REST. Por exemplo, é possível que não queira expor o campo [Employees]Salary.

Para eliminar a exposição REST de um campo:

1. Exibar o inspetor de Campo no editor de Estruturas e selecione o campo a modificar.

2. Desmarque la opción **Exponer como recurso REST** para el campo.
   ![alt-text](../assets/en/REST/field.png)
   Repeat this for each field whose exposure needs to be modified.

> Para que um campo seja accessível a través de REST, a tabela pai também deve ser. Se a tabela pai não estiver exposta, nenhum dos campos estará, independente de seu estado.

## Modo preventivo

En 4D Server, las peticiones REST se gestionan automáticamente a través de procesos apropiativos, **incluso en modo interpretado**. Debe asegurarse de que su código es [compatible con una ejecución apropiativa](../WebServer/preemptiveWeb.md#writing-thread-safe-web-server-code).

> Para depurar el código web interpretado en la máquina del servidor, asegúrese de que el depurador está [adjuntado al servidor](../Debugging/debugging-remote.md) o [a una máquina remota](../Debugging/debugging-remote.md#attaching-the-debugger-to-a-remote-4 With this configuration, all processes switch to cooperative mode and the web server code can be debugged.

With 4D single-user, interpreted code is always run in cooperative mode.
