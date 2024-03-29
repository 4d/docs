---
id: SessionClass
title: Session
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Session objects are returned by the [`Session`](#session) command. These objects provide the developer with an interface allowing to manage the current user session and execute actions such as store contextual data, share information between session processes, launch session-related preemptive processes, or (web only) manage [privileges](../ORDA/privileges.md).

### Session types

Three types of sessions are supported by this class:

- [**Web user sessions**](WebServer/sessions.md): Web user sessions are available when [scalable sessions are enabled in your project](WebServer/sessions.md#enabling-sessions). They are used for Web and REST connections, and can be assigned privileges.
- [**Remote client user sessions**](../Desktop/clientServer.md#remote-user-sessions): In client/server applications, remote users have their own sessions managed on the server.
- [**Stored procedures session**](https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html): All stored procedures executed on the server share the same virtual user session.

:::note

The availability of properties and functions in the `Session` object depend on the session type.

:::


### Resumo


|                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.clearPrivileges().Summary -->|
| [<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.expirationDate.Summary -->|
| [<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.hasPrivilege().Summary -->|
| [<!-- INCLUDE #SessionClass.id.Syntax -->](#id)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.id.Summary -->|
| [<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.idleTimeout.Summary -->|
| [<!-- INCLUDE #SessionClass.info.Syntax -->](#info)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.info.Summary -->|
| [<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.isGuest().Summary -->|
| [<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.setPrivileges().Summary -->|
| [<!-- INCLUDE #SessionClass.storage.Syntax -->](#storage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.storage.Summary -->|
| [<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.userName.Summary -->|




## Session

<details><summary>Histórico</summary>

| Versão | Mudanças                                               |
| ------ | ------------------------------------------------------ |
| v20 R5 | Support of remote client and stored procedure sessions |
| v18 R6 | Adicionado                                             |

</details>

<!-- REF #_command_.Session.Syntax -->**Session** : 4D. Session<!-- END REF -->


<!-- REF #_command_.Session.Params -->
| Parâmetro  | Tipo        |    | Descrição       |
| ---------- | ----------- |:--:| --------------- |
| Resultados | 4D. Session | <- | Objecto Session |
<!-- END REF -->


#### Descrição

O comando `Session` <!-- REF #_command_.Session.Summary -->returns the `Session` object corresponding to the current user session<!-- END REF -->.

Depending on the process from which the command is called, the current user session can be:

- a web session (when [scalable sessions are enabled](WebServer/sessions.md#enabling-sessions)),
- a remote client session,
- the stored procedures session.

For more information, see the [Session types](#session-types) paragraph.

If the command is called from a non supported context (single-user application, scalable sessions disabled...), it returns *Null*.

#### Web sessions

The `Session` object of web sessions is available from any web process:

- `On Web Authentication`, `On Web Connection`, e métodos database`On REST Authentication`,
- código processado a través das etiquetas 4D nas páginas semidinâmicas (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)
- os métodos projeto com o atributo "Available through 4D tags and URLs (4DACTION...)" e chamados através de 4DACTION/ urls,
- [`Em Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) e [`Em Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action) métodos de base de dados para pedidos móveis,
- ORDA functions [called with REST requests](../REST/ClassFunctions.md).

For more information on web user sessions, please refer to the [Web Server Sessions](WebServer/sessions.md) section.

#### Remote client sessions

The `Session` object of remote client sessions is available from:

- Project methods that have the [Execute on Server](../Project/code-overview.md#execute-on-server) attribute (they are executed in the "twinned" process of the client process),
- Triggers,
- `On Server Open Connection` and `On Server Shutdown Connection` database methods.

For more information on remote user sessions, please refer to the [**Remote client user sessions**](../Desktop/clientServer.md#remote-user-sessions) paragraph.

#### Stored procedures session

All stored procedure processes share the same virtual user session. The `Session` object of stored procedures is available from:

- methods called with the [`Execute on server`](https://doc.4d.com/4dv20/help/command/en/page373.html) command,
- `On Server Startup`, `On Server Shutdown`, `On Backup Startup`, `On Backup Shutdown`, and `On System event` database methods

For information on stored procedures virtual user session, please refer to the [XXXX](XXX) page.

#### Exemplo

Se definiu o método `action_Session` com o atributo "Available through 4D tags and URLs". Pode chamar ao método introduzindo a URL abaixo no navegador:

```
IP:port/4DACTION/action_Session
```

```4d
  //action_Session method
 Case of
    :(Session#Null)
       If(Session.hasPrivilege("WebAdmin")) //calling the hasPrivilege function
          WEB SEND TEXT("4DACTION --> Session is WebAdmin")
       Else
          WEB SEND TEXT("4DACTION --> Session is not WebAdmin")
       End if
    Else
       WEB SEND TEXT("4DACTION --> Session is null")
 End case
```



<!-- REF SessionClass.clearPrivileges().Desc -->
## .clearPrivileges()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |

</details>

<!-- REF #SessionClass.clearPrivileges().Syntax -->**.clearPrivileges()** : Boolean<!-- END REF -->


<!-- REF #SessionClass.clearPrivileges().Params -->
| Parâmetro  | Tipo       |    | Descrição                           |
| ---------- | ---------- |:--:| ----------------------------------- |
| Resultados | Parâmetros | <- | True if the execution is successful |
<!-- END REF -->


#### Descrição

:::note

Since privileges are only supported in web user sessions, this function does nothing and always returns **False** in other session types.

:::

A função `.clearPrivileges()` <!-- REF #SessionClass.clearPrivileges().Summary -->removes all the privileges associated to the session and returns **True** if the execution was successful<!-- END REF -->. Como resultado, a sessão torna-se automaticamente uma sessão de convidado.


#### Exemplo

```4d
//Invalidate a session
var $isGuest : Boolean
var $isOK : Boolean

$isOK:=Session.clearPrivileges()
$isGuest:=Session.isGuest() //$isGuest is True
```

<!-- END REF -->



<!-- REF SessionClass.expirationDate.Desc -->
## .expirationDate

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |

</details>

<!-- REF #SessionClass.expirationDate.Syntax -->**.expirationDate** : Text<!-- END REF -->

#### Descrição

:::note

This property is only available with web user sessions.

:::

A propriedade `.expirationDate` contém <!-- REF #SessionClass.expirationDate.Summary -->a data e hora de expiração do cookie da sessão<!-- END REF -->. .

Essa propriedade é **apenas leitura**. É recalculada automaticamente se modificar o valor da propriedade [`.idleTimeout`](#idletimeout).

#### Exemplo

```4d
var $expiration : Text
$expiration:=Session.expirationDate //por exemplo "2021-11-05T17:10:42Z"
```

<!-- END REF -->




<!-- REF SessionClass.hasPrivilege().Desc -->
## .hasPrivilege()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |

</details>

<!-- REF #SessionClass.hasPrivilege().Syntax -->**.hasPrivilege**( *privilege* : Text ) : Boolean<!-- END REF -->


<!-- REF #SessionClass.hasPrivilege().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                |
| ---------- | ---------- |:--:| -------------------------------------------------------- |
| privilege  | Text       | <- | Nome do privilegio a verificar                           |
| Resultados | Parâmetros | <- | True se a sessão tiver *privilege*, False caso contrário |
<!-- END REF -->


#### Descrição

:::note

Since privileges are only supported in web user sessions, this function does nothing and always returns **False** in other session types.

:::


A função `.hasPrivilege()` <!-- REF #SessionClass.hasPrivilege().Summary -->retorna Verdadeiro se o privilégio estiver associado à sessão, e Falso de outra forma<!-- END REF -->.


#### Exemplo

Se quiser comprovar se o privilégio "WebAdmin" está associado à sessão:

```4d
If (Session.hasPrivilege("WebAdmin"))
 //Access is granted, do nothing Else
 //Display an authentication page End if
```

<!-- END REF -->


<!-- REF SessionClass.id.Desc -->
## .id

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v20 R5 | Adicionado |

</details>

<!-- REF #SessionClass.id.Syntax -->**.id** : Text<!-- END REF -->

#### Descrição

A propriedade `.id` contém <!-- REF #SessionClass.id.Summary -->the unique identifier (UUID) of the session on the server<!-- END REF -->. This unique string is automatically assigned by the server for each session and allows you to identify its processes. 


<!-- END REF -->



<!-- REF SessionClass.idleTimeout.Desc -->
## .idleTimeout

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |

</details>

<!-- REF #SessionClass.idleTimeout.Syntax -->**.idleTimeout** : Integer<!-- END REF -->

#### Descrição

:::note

This property is only available with web user sessions.

:::

A propriedade `.idleTimeout` contém <!-- REF #SessionClass.idleTimeout.Summary -->o tempo limite da sessão de inatividade (em minutos), após o qual a sessão é automaticamente encerrada por 4D<!-- END REF -->.

Se não se definir esta propriedade, o valor padrão é 60 (1h).

Quando se definir esta propriedade, a propriedade [`.expirationDate`](#expirationdate) é atualizada em consequência.

> O valor não pode ser inferior a 60: se definir um valor inferior, o tempo de espera se eleva até 60.


Essa propriedade é**apenas escrita**.

#### Exemplo

```4d
If (Session.isGuest())
  // A Guest session will close after 60 minutes of inactivity
 Session.idleTimeout:=60 Else
  // Other sessions will close after 120 minutes of inactivity
 Session.idleTimeout:=120 End if

```

<!-- END REF -->


<!-- REF SessionClass.info.Desc -->
## .info

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v20 R5 | Adicionado |

</details>

<!-- REF #SessionClass.info.Syntax -->**.info** : Object<!-- END REF -->

#### Descrição

:::note

This property is only available with remote client and stored procedure sessions.

:::

The `.info` property <!-- REF #SessionClass.info.Summary -->describes the remote client or stored procedure session on the server<!-- END REF -->.

The `.info` object is the same object as the one returned by the [`Get process activity`](https://doc.4d.com/4dv20/help/command/en/page1495.html) command for remote client and stored procedure sessions.

The `.info` object contains the following properties:

| Propriedade      | Tipo          | Descrição                                                                                          |
| ---------------- | ------------- | -------------------------------------------------------------------------------------------------- |
| type             | Text          | Session type: "remote" or "storedProcedure"                                                        |
| userName         | Text          | 4D user name (same value as [`.userName`](#username))                                              |
| machineName      | Text          | Remote sessions: name of the remote machine. Stored procedures session: name of the server machine |
| systemUserName   | Text          | Remote sessions: name of the system session opened on the remote machine.                          |
| IPAddress        | Text          | IP address of the remote machine                                                                   |
| hostType         | Text          | Host type: "windows" or "mac"                                                                      |
| creationDateTime | Date ISO 8601 | Date and time of session creation                                                                  |
| state            | Text          | Session state: "active", "postponed", "sleeping"                                                   |
| ID               | Text          | Session UUID (same value as [`.id`](#id))                                                          |
| persistentID     | Text          | Session's persistent ID                                                                            |

:::note

Since `.info` is a computed property, it is recommended to call it once and then to store it in a local variable if you want to do some processing on its properties.

:::


<!-- END REF -->


<!-- REF SessionClass.isGuest().Desc -->
## .isGuest()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |

</details>

<!-- REF #SessionClass.isGuest().Syntax -->**.isGuest()** : Boolean<!-- END REF -->


<!-- REF #SessionClass.isGuest().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                   |
| ---------- | ---------- |:--:| ----------------------------------------------------------- |
| Resultados | Parâmetros | <- | True se a sessão for uma sessão Guest, False caso contrário |
<!-- END REF -->

#### Descrição

:::note

This function always returns **True** with remote client and stored procedure sessions.

:::

A função `.isGuest()` <!-- REF #SessionClass.isGuest().Summary -->retorna Verdadeiro se a sessão for uma sessão de Convidado (ou seja, não tem privilégios)<!-- END REF -->.


#### Exemplo

No método base `On Web Connection`:

```4d
If (Session.isGuest())
 //Do something for Guest user End if
```


<!-- END REF -->


<!-- REF SessionClass.setPrivileges().Desc -->
## .setPrivileges()

<details><summary>Histórico</summary>

| Versão | Mudanças                                    |
| ------ | ------------------------------------------- |
| v19 R8 | Suporte da propriedade "roles" das Settings |
| v18 R6 | Adicionado                                  |

</details>

<!-- REF #SessionClass.setPrivileges().Syntax -->**.setPrivileges**( *privilege* : Text ) : Boolean<br/>**.setPrivileges**( *privileges* : Collection )<br/>**.setPrivileges**( *settings* : Object ) : Boolean<!-- END REF -->


<!-- REF #SessionClass.setPrivileges().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                        |
| ---------- | ---------- |:--:| ---------------------------------------------------------------- |
| privilege  | Text       | -> | Nome do privilégio                                               |
| privileges | Collection | -> | Collection de nomes de privilégios                               |
| settings   | Object     | -> | Objetos com as propriedades "privilégios" (string ou collection) |
| Resultados | Parâmetros | <- | True if the execution is successful                              |
<!-- END REF -->

#### Descrição

:::note

Since privileges are only supported in web user sessions, this function does nothing and always returns **False** in other session types.

:::

A função `.setPrivileges()` <!-- REF #SessionClass.setPrivileges().Summary -->associates the privilege(s) and/or role(s) defined in the parameter to the session and returns **True** if the execution was successful<!-- END REF -->.

- No parâmetro *privilege*, passe uma string contendo um nome de privilégio (ou vários nomes de privilégio separados por vígulas).

- No parâmetro *privileges*, passe uma coleção de strings contendo nomes de privilégios.

- No parâmetro *settings*, passe um objeto contendo as propriedades abaixo:

| Propriedade | Tipo               | Descrição                                            |
| ----------- | ------------------ | ---------------------------------------------------- |
| privileges  | Text ou Collection | <li>Strings contendo um nome de privilégio ou</li><li>Collection de strings contendo nomes de privilégios</li>  |
| roles       | Text ou Collection | <li>Strings contendo um papel ou</li><li>Coleção de strings contendo papéis</li> |
| userName    | Text               | Nome de usuário associado à sessão (opcional)        |

:::note

Os privilégios e papéis são definidos no arquivo [`roles.json`](../ORDA/privileges.md#rolesjson-file) do projeto. Para mais informações, consulte por favor a secção [**Privileges**](../ORDA/privileges.md).

:::

Se a propriedade `privilegios` ou `roles` conter um nome que não é declarado no arquivo [`roles.json`](../ORDA/privileges.md#rolesjson-file), ele é ignorado.

Como padrão quando não houver um privilégio associado à sessão, a sessão é [Guest session](#isguest).

A propriedade [`userName`](#username) está disponível no nível do objeto da sessão (apenas leitura).

#### Exemplo

Em um método de autenticação personalizado, deve estabecer o privilégio "WebAdmin" ao usuário:

```4d
var $userOK : Boolean

... //Authenticate the user If ($userOK) //The user has been approved
  var $info : Object
  $info:=New object()
  $info.privileges:=New collection("WebAdmin")
  Session.setPrivileges($info)
End if

```


<!-- END REF -->

<!-- REF SessionClass.storage.Desc -->
## .storage

<details><summary>Histórico</summary>

| Versão | Mudanças                                               |
| ------ | ------------------------------------------------------ |
| v20 R5 | Support of remote client and stored procedure sessions |
| v18 R6 | Adicionado                                             |

</details>

<!-- REF #SessionClass.storage.Syntax -->**.storage** : Object<!-- END REF -->

#### Descrição

A propriedade `.storage` contém <!-- REF #SessionClass.storage.Summary -->a shared object that can be used to store information available to all processes of the session<!-- END REF -->.

Quando um objeto `Session` for criado, a propriedade `.storage` é vazia. Já que é um objeto partilhado, essa propriedade estará disponível no objeto `Storage` do servidor.

> Da mesma forma que o objeto `Storage` do servidor, a propriedade `.storage` sempre será "single": adicionar um objeto partilhado ou uma collection partilhada a `.storage` não cria um grupo partilhado.

Esas propriedade é **read only** mas retorna um objeto  read-write.

<Tabs>

<TabItem value="Web session example">

You want to store the client IP in the `.storage` property. You can write in the `On Web Authentication` database method:

```4d
If (Session.storage.clientIP=Null) //first access
    Use (Session.storage)
        Session.storage.clientIP:=New shared object("value"; $clientIP)
    End use
End if

```
</TabItem>

<TabItem value="Remote session example">

You want to share data between processes in the same session:

```4d
Use (Session.storage)
 Session.storage.settings:=New shared object("property"; $value; "property2"; $value2)
End use
```

</TabItem>

</Tabs>

<!-- END REF -->





<!-- REF SessionClass.userName.Desc -->
## .userName

<details><summary>Histórico</summary>

| Versão | Mudanças                                               |
| ------ | ------------------------------------------------------ |
| v20 R5 | Support of remote client and stored procedure sessions |
| v18 R6 | Adicionado                                             |

</details>

<!-- REF #SessionClass.userName.Syntax -->**.userName** : Text<!-- END REF -->

#### Descrição

A propriedade `.userName` contém <!-- REF #SessionClass.userName.Summary -->o nome de usuário associado à sessão<!-- END REF -->. Pode usá-la para identificar o usuário dentro de seu código.

- With web sessions, this property is an empty string by default. Pode ser estabelecida usando a propriedade `privileges` da função [`setPrivileges()`](#setprivileges).
- With remote and stored procedure sessions, this property returns the same user name as the [`Current user`](https://doc.4d.com/4dv20/help/command/en/page182.html) command.

Essa propriedade é**apenas leitura**.



<!-- END REF -->
