---
id: sessions
title: Sessões web
---

O servidor web 4D oferece recursos integrados para gerenciar **sessões web**. Creating and maintaining web sessions allows you to control and improve the user experience on your web application. When web sessions are enabled, web clients can reuse the same server context from one request to another.

As sessões Web permitem:

- manipular várias solicitações simultaneamente do mesmo cliente web através de um número ilimitado de processos preventivos (sessões web são **escaláveis**),
- gerenciar a sessão por um objeto `Session` e da [API de session](API/SessionClass.md),
- armazena e compartilha dados entre processos de um cliente web usando o [.storage](../API/SessionClass.md#storage) da sessão,
- associate privileges to the user running the session.

## Usos

As sessões Web são usadas para:

- [Aplicaciones web](gettingStarted.md) que envían peticiones http,
- calls to the [REST API](../REST/authUsers.md), which are used by [remote datastores](../ORDA/remoteDatastores.md) and [Qodly forms](qodly-studio.md).

## Activando sessões web

A funcionalidade de gerenciamento de sessão pode ser ativado e desativado no seu servidor web 4D. Existem diferentes formas de ativar a gestão de sessões:

- Usando a opção **Sessões escalonáveis** na página "Web/Opções (I)" das Propriedades (configuração permanente):
    ![alt-text](../assets/en/WebServer/settingsSession.png)

Esta opção é selecionada por defeito nos novos projetos. Sin embargo, se puede desactivar seleccionando la opción **Sin sesiones**, en cuyo caso las funcionalidades de la sesión web se desactivan (no hay ningún objeto `Session` disponible).

- Using the [`.scalableSession`](API/WebServerClass.md#scalablesession) property of the Web Server object (to pass in the *settings* parameter of the [`.start()`](API/WebServerClass.md#start) function). Neste caso, este parâmetro substitui a opção definida na caixa de diálogo Propriedades para o objeto Web Server (não é armazenado em disco).

> El comando `WEB SET OPTION` también puede establecer el modo de sesión para el servidor web principal.

Em qualquer caso, o parâmetro é local para a máquina; para poder diferir no servidor Web 4D Server e os servidores Web de máquinas 4D remotas.

> **Compatibilidad**: una opción **Sesiones legacy** está disponible en proyectos creados con una versión de 4D anterior a 4D v18 R6 (para más información, consulte el sitio web [doc.4d.com](https://doc.4d.com)).

## Session implementation

Cuando [se habilitan las sesiones](#enabling-sessions), se implementan mecanismos automáticos, basados en una cookie privada establecida por el propio 4D: "4DSID__AppName_", donde *AppName* es el nombre del proyecto de la aplicación. Este cookie faz referência à sessão web atual da aplicação.

:::info

O nome do cookie pode ser obtido usando a propriedade [`.sessionCookieName`](API/WebServerClass.md#sessioncookiename).

:::

1. En cada petición del cliente web, el servidor web comprueba la presencia y el valor de la cookie privada "4DSID__AppName_".

2. Se o cookie tiver um valor, 4D procura pela sessão que criou este cookie entre as sessões existentes; Se esta sessão for encontrada, ela será reutilizada para a chamada.

3. Se a solicitação do cliente não corresponder a uma sessão já aberta:

- se crea una nueva sesión con una cookie privada "4DSID__AppName_" en el servidor web
- se crea un nuevo objeto Guest `Session` dedicado a la sesión web escalable.

:::note

La creación de una sesión web para una petición REST puede requerir que una licencia esté disponible, consulte [esta página](../REST/authUsers.md).

:::

The `Session` object of the current session can then be accessed through the [`Session`](commands/session.md) command in the code of any web processes.

![alt-text](../assets/en/WebServer/schemaSession.png)

:::info

Os processos Web geralmente não terminam, eles são reciclados em um pool para aumentar a eficiência. Quando um processo termina de executar uma solicitação, ele é colocado de novo no pool e disponibilizado para a próxima solicitação. Since a web process can be reused by any session, [process variables](Concepts/variables.md#process-variables) must be cleared by your code at the end of its execution (using [`CLEAR VARIABLE`](https://doc.4d.com/4dv20/help/command/en/page89.html) for example). Esta limpeza é necessária para todas as informações relacionadas ao processo, como uma referência a um arquivo aberto. Esta es la razón por la que **se recomienda** utilizar el objeto [Sesión](API/SessionClass.md) cuando se quiera guardar información relacionada con la sesión.

:::

## Armazenar e compartilhar informações de sessão

Cada objeto `Session` fornece uma propriedade [`.storage`](API/SessionClass.md#storage) que é um [objeto compartilhado](Concepts/shared.md). Essa propriedade permite que você compartilhe informações entre todos os processos manipulados pela sessão.

## Duração da sessão

Uma sessão Web escalável é encerrada quando:

- o servidor web está parado,
- o tempo limite do cookie de sessão foi atingido.

O tempo de vida de um cookie inativo é 60 minutos por padrão, o que significa que o servidor irá automaticamente fechar as sessões inativas após 60 minutos.

This timeout can be set using the [`.idleTimeout`](API/SessionClass.md#idletimeout) property of the `Session` object (the timeout cannot be less than 60 minutes) or the *connectionInfo* parameter of the [`Open datastore`](../commands/open-datastore.md) command.

Quando uma sessão Web é fechada, se o comando [`Session`](commands/session.md) for chamado posteriormente:

- el objeto `Session` no contiene privilegios (es una sesión de invitado)
- a propriedade [`storage`](API/SessionClass.md#storage) está vazia
- um novo cookie de sessão é associado à sessão

:::info

Você pode fechar uma sessão em um formulário Qodly usando o recurso [**logout**](qodly-studio.md#logout).

:::

## Privilégios

Os privilégios podem ser associados a sessões usuário Web. No servidor web, você pode fornecer acesso ou recursos específicos, dependendo dos privilégios da sessão.

Você atribui privilégios usando a função [`.setPrivileges()`](API/SessionClass.md#setprivileges). Em seu código, você pode verificar os privilégios da sessão para permitir ou negar o acesso usando a função [`.hasPrivilege()`](API/SessionClass.md#hasprivilege). By default, new sessions do not have any privilege: they are **Guest** sessions ([`.isGuest()`](API/SessionClass.md#isguest) function returns true).

Exemplo:

```4d
If (Session.hasPrivilege("WebAdmin"))
	//Access is granted, do nothing
Else
	//Display an authentication page
End if
```

:::info

Privileges are implemented at the heart of the ORDA architecture to provide developers with a powerful technology for controlling access to the datastore and dataclas functions. For more information, please refer to the [**Privileges**](../ORDA/privileges.md) page of the ORDA chapter.

:::

## Exemplo

Em uma aplicação CRM, cada vendedor gerencia seu próprio portefólio de clientes. A datastore contém pelo menos dois dataclasses ligados: Customers e SalesPersons (um vendedor tem vários clientes).

![alt-text](../assets/en/WebServer/exampleSession.png)

Queremos que um vendedor autentique, abra uma sessão no servidor web e que os 3 primeiros clientes sejam carregados na sessão.

1. Executamos este URL para abrir uma sessão:

```
http://localhost:8044/authenticate.shtml
```

> En un entorno de producción, es necesario utilizar una conexión [HTTPS](API/WebServerClass.md#httpsenabled) para evitar que cualquier información no cifrada circule por la red.

2. La página `authenticate.shtml` es un formulario que contiene los campos de entrada *userId* y *password* y envía una acción 4DACTION POST:

```html
<!DOCTYPE html>
<html>
<body bgcolor="#ffffff">
<FORM ACTION="/4DACTION/authenticate" METHOD=POST>
	UserId: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/>
	Password: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>
<INPUT TYPE=SUBMIT NAME=OK VALUE="Log In">
</FORM>
</body>
</html>
```

![alt-text](../assets/en/WebServer/authenticate.png)

3. El método authenticate project busca la persona *userID* y valida la contraseña contra el valor hash ya almacenado en la tabla *SalesPersons*:

```4d
var $indexUserId; $indexPassword; $userId : Integer
var $password : Text
var $userTop3; $sales; $info : Object


ARRAY TEXT($anames; 0)
ARRAY TEXT($avalues; 0)

WEB GET VARIABLES($anames; $avalues)

$indexUserId:=Find in array($anames; "userId")
$userId:=Num($avalues{$indexUserId})

$indexPassword:=Find in array($anames; "password")
$password:=$avalues{$indexPassword}

$sales:=ds.SalesPersons.query("userId = :1"; $userId).first()

If ($sales#Null)
    If (Verify password hash($password; $sales.password))
        $info:=New object()
        $info.userName:=$sales.firstname+" "+$sales.lastname
        Session.setPrivileges($info)
        Use (Session.storage)
            If (Session.storage.myTop3=Null)
                $userTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)

                Session.storage.myTop3:=$userTop3
            End if
        End use
        WEB SEND HTTP REDIRECT("/authenticationOK.shtml")
    Else
        WEB SEND TEXT("This password is wrong")
    End if
Else
    WEB SEND TEXT("This userId is unknown")
End if
```

## Ver também (post do blog)

[Scalable sessions for advanced web applications](https://blog.4d.com/scalable-sessions-for-advanced-web-applications/)