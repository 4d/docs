---
id: SessionClass
title: Session
---

Os objetos de sessão são retornados pelo comando [`Session`](../commands/session.md). These objects provide the developer with an interface allowing to manage the current user session and execute actions such as store contextual data, share information between session processes, launch session-related preemptive processes, or (web only) manage [privileges](../ORDA/privileges.md).

### Tipos de sessão

The following types of sessions are supported by this class:

- [**Sessões de usuário web**](WebServer/sessions.md): sessões de usuário web estão disponíveis quando [sessões escaláveis estão habilitadas em seu projeto](WebServer/sessions.md#enabling-web-sessions). Eles são usados para conexões Web e REST e podem receber privilégios.
- [**Remote client user sessions**](../Desktop/clientServer.md#remote-user-sessions): In client/server applications, remote users have their own sessions managed on the server.
- [**Stored procedures session**](https://doc.4d.com/4Dv20/4D/20/4D-Server-and-the-4D-Language.300-6330554.en.html): All stored procedures executed on the server share the same virtual user session.
- [**Standalone session**](../Project/overview.md#development): Local session object returned in single-user application (useful in development and test phases of client/server applications).

:::note

The availability of properties and functions in the `Session` object depends on the session type.

:::

### Resumo

|                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)<br/><!-- INCLUDE #SessionClass.clearPrivileges().Summary --> |
| [<!-- INCLUDE #SessionClass.createOTP().Syntax -->](#createotp)<br/><!-- INCLUDE #SessionClass.createOTP().Summary -->                   |
| [<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)<br/><!-- INCLUDE #SessionClass.expirationDate.Summary -->        |
| [<!-- INCLUDE #SessionClass.getPrivileges().Syntax -->](#getprivileges)<br/><!-- INCLUDE #SessionClass.getPrivileges().Summary -->       |
| [<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)<br/><!-- INCLUDE #SessionClass.hasPrivilege().Summary -->          |
| [<!-- INCLUDE #SessionClass.id.Syntax -->](#id)<br/><!-- INCLUDE #SessionClass.id.Summary -->                                            |
| [<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)<br/><!-- INCLUDE #SessionClass.idleTimeout.Summary -->                 |
| [<!-- INCLUDE #SessionClass.info.Syntax -->](#info)<br/><!-- INCLUDE #SessionClass.info.Summary -->                                      |
| [<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)<br/><!-- INCLUDE #SessionClass.isGuest().Summary -->                         |
| [<!-- INCLUDE #SessionClass.restore().Syntax -->](#restore)<br/><!-- INCLUDE #SessionClass.restore().Summary -->                         |
| [<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)<br/><!-- INCLUDE #SessionClass.setPrivileges().Summary -->       |
| [<!-- INCLUDE #SessionClass.storage.Syntax -->](#storage)<br/><!-- INCLUDE #SessionClass.storage.Summary -->                             |
| [<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)<br/><!-- INCLUDE #SessionClass.userName.Summary -->                          |

<!-- REF SessionClass.clearPrivileges().Desc -->

## .clearPrivileges()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #SessionClass.clearPrivileges().Syntax -->**.clearPrivileges()** : Boolean<!-- END REF -->

<!-- REF #SessionClass.clearPrivileges().Params -->

| Parâmetro  | Tipo       |                             | Descrição                           |
| ---------- | ---------- | :-------------------------: | ----------------------------------- |
| Resultados | Parâmetros | <- | True se a execução for bem-sucedida |

<!-- END REF -->

#### Descrição

:::note

This function does nothing and always returns **True** with remote client, stored procedure, and standalone sessions.

:::

The `.clearPrivileges()` function <!-- REF #SessionClass.clearPrivileges().Summary -->removes all the privileges associated to the session and returns **True** if the execution was successful<!-- END REF -->. Unless in ["forceLogin" mode](../REST/authUsers.md#force-login-mode), the session automatically becomes a Guest session.

:::note

In "forceLogin" mode, `.clearPrivileges()` does not transform the session to a Guest session, it only clears the session's privileges.

:::

#### Exemplo

```4d
//Invalidate a web user session
var $isGuest : Boolean
var $isOK : Boolean

$isOK:=Session.clearPrivileges()
$isGuest:=Session.isGuest() //$isGuest is True
```

<!-- END REF -->

<!-- REF SessionClass.createOTP().Desc -->

## .createOTP()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20 R9   | Adicionado |

</details>

<!-- REF #SessionClass.createOTP().Syntax -->**.createOTP** ( { *lifespan* : Integer } ) : Text <!-- END REF -->

<!-- REF #SessionClass.createOTP().Params -->

| Parâmetro  | Tipo    |                             | Descrição                         |
| ---------- | ------- | :-------------------------: | --------------------------------- |
| lifespan   | Integer |              ->             | Session token lifespan in seconds |
| Resultados | Text    | <- | UUID of the session               |

<!-- END REF -->

#### Descrição

:::note

This function is only available with web user sessions. It returns an empty string in other contexts.

:::

The `.createOTP()` function <!-- REF #SessionClass.createOTP().Summary -->creates a new OTP (One Time Passcode) for the session and returns its token UUID<!-- END REF -->. This token is unique to the session in which it was generated.

Para mais informações sobre os tokens OTP, consulte [esta seção](../WebServer/sessions.md#session-token-otp).

By default, if the *lifespan* parameter is omitted, the token is created with the same lifespan as the [`.idleTimeOut`](#idletimeout) of the session. You can set a custom timeout by passing a value in seconds in *lifespan* (the minimum value is 10 seconds, *lifespan* is reset to 10 if a smaller value is passed). If an expired token is used to restore a web user session, it is ignored.

The returned token can then be used in exchanges with third-party applications or websites to securely identify the session. For example, the session OTP token can be used with a payment application.

#### Exemplo

```4d
var $token : Text
$token := Session.createOTP( 60 ) //o token é válido por 1 mn
```

<!-- END REF -->

<!-- REF SessionClass.expirationDate.Desc -->

## .expirationDate

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #SessionClass.expirationDate.Syntax -->**.expirationDate** : Text<!-- END REF -->

#### Descrição

:::note

Essa propriedade só está disponível com sessões de usuário da Web.

:::

The `.expirationDate` property contains <!-- REF #SessionClass.expirationDate.Summary -->the expiration date and time of the session cookie<!-- END REF -->. The value is expressed as text in the ISO 8601 format: `YYYY-MM-DDTHH:MM:SS.mmmZ`.

Essa propriedade é **somente leitura**. Ele será automaticamente recalculado se o valor da propriedade [`.idleTimeout`](#idletimeout) for modificado.

#### Exemplo

```4d
var $expiration : Text
$expiration:=Session.expirationDate //por exemplo "2021-11-05T17:10:42Z"
```

<!-- END REF -->

<!-- REF SessionClass.getPrivileges().Desc -->

## .getPrivileges()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20 R6   | Adicionado |

</details>

<!-- REF #SessionClass.getPrivileges().Syntax -->**.getPrivileges**() : Collection<!-- END REF -->

<!-- REF #SessionClass.getPrivileges().Params -->

| Parâmetro  | Tipo       |                             | Descrição                                                    |
| ---------- | ---------- | :-------------------------: | ------------------------------------------------------------ |
| Resultados | Collection | <- | Coleção de nomes de privilégios (strings) |

<!-- END REF -->

#### Descrição

The `.getPrivileges()` function <!-- REF #SessionClass.getPrivileges().Summary -->returns a collection of all the privilege names associated to the session<!-- END REF -->.

With remote client, stored procedure and standalone sessions, this function returns a collection only containing "WebAdmin".

:::info

Os privilégios são atribuídos a uma sessão usando a função [`setPrivileges()`](#setprivileges).

:::

#### Exemplo

O seguinte arquivo [`roles.json`](../ORDA/privileges.md#rolesjson-file) foi definido:

```json
{
   "privileges":[
      {
         "privilege":"simple",
         "includes":[

         ]
      },
      {
         "privilege":"medium",
         "includes":[
            "simple"
         ]
      }
   ],
   "roles":[
      {
         "role":"Medium",
         "privileges":[
            "medium"
         ]
      }
   ],
   "permissions":{
      "allowed":[

      ]
   }
}
```

O papel de sessão é atribuído em uma função de datastore `authentify()`:

```4d
  //Datastore Class

exposed Function authentify($role : Text) : Text
	Session.clearPrivileges()
	Session.setPrivileges({roles: $role})
```

Assuming the `authentify()` function is called with the "Medium" role:

```4d
var $privileges : Collection
$privileges := Session.getPrivileges()
//$privileges: ["simple","medium"]
```

#### Veja também

[.setPrivileges()](#setprivileges)<br/>
[Permissions – Inspect the privileges in the session for an easy debugging (blog post)](https://blog.4d.com/permissions-inspect-the-privileges-in-the-session-for-an-easy-debugging)

<!-- END REF -->

<!-- REF SessionClass.hasPrivilege().Desc -->

## .hasPrivilege()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #SessionClass.hasPrivilege().Syntax -->**.hasPrivilege**( *privilege* : Text ) : Boolean<!-- END REF -->

<!-- REF #SessionClass.hasPrivilege().Params -->

| Parâmetro  | Tipo       |                             | Descrição                                                |
| ---------- | ---------- | :-------------------------: | -------------------------------------------------------- |
| privilege  | Text       |              ->             | Nome do privilegio a verificar                           |
| Resultados | Parâmetros | <- | True se a sessão tiver *privilege*, False caso contrário |

<!-- END REF -->

#### Descrição

The `.hasPrivilege()` function <!-- REF #SessionClass.hasPrivilege().Summary -->returns True if the *privilege* is associated to the session, and False otherwise<!-- END REF -->.

With remote client, stored procedure and standalone sessions, this function always returns True, whatever the *privilege*.

#### Exemplo

You want to check if the "WebAdmin" privilege is associated to the web user session:

```4d
If (Session.hasPrivilege("WebAdmin"))
	//Access is granted, do nothing
Else
	//Display an authentication page

End if
```

<!-- END REF -->

<!-- REF SessionClass.id.Desc -->

## .id

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20 R5   | Adicionado |

</details>

<!-- REF #SessionClass.id.Syntax -->**.id** : Text<!-- END REF -->

#### Descrição

A propriedade `.id` contém <!-- REF #SessionClass.id.Summary --> o identificador único (UUID) da sessão do usuário<!-- END REF -->. With 4D Server, this unique string is automatically assigned by the server for each session and allows you to identify its processes.

:::tip

Você pode usar essa propriedade para obter o objeto [`.storage`](#storage) de uma sessão graças ao comando [`storage`](../commands/session-storage.md).

:::

<!-- END REF -->

<!-- REF SessionClass.idleTimeout.Desc -->

## .idleTimeout

<details><summary>História</summary>

| Release | Mudanças |
| ------- | -------- |

|v18 R6|Adicionado|

</details>

<!-- REF #SessionClass.idleTimeout.Syntax -->**.idleTimeout** : Integer<!-- END REF -->

#### Descrição

:::note

Essa propriedade só está disponível com sessões de usuário da Web.

:::

The `.idleTimeout` property contains <!-- REF #SessionClass.idleTimeout.Summary -->the inactivity session timeout (in minutes), after which the session is automatically closed by 4D<!-- END REF -->.

Se não se definir esta propriedade, o valor padrão é 60 (1h).

Quando essa propriedade é definida, a propriedade [`.expirationDate`](#expirationdate) é atualizada de acordo.

> O valor não pode ser inferior a 60: se definir um valor inferior, o tempo de espera se eleva até 60.

Essa propriedade é **leitura escrita**.

#### Exemplo

```4d
If (Session.isGuest())
		// A Guest session will close after 60 minutes of inactivity
	Session.idleTimeout:=60
Else
		// Other sessions will close after 120 minutes of inactivity
	Session.idleTimeout:=120
End if

```

<!-- END REF -->

<!-- REF SessionClass.info.Desc -->

## .info

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20 R5   | Adicionado |

</details>

<!-- REF #SessionClass.info.Syntax -->**.info** : Object<!-- END REF -->

#### Descrição

:::note

This property is only available with remote client, stored procedure, and standalone sessions.

:::

The `.info` property <!-- REF #SessionClass.info.Summary -->describes the remote client or stored procedure session on the server, or the standalone session<!-- END REF -->.

:::note

- The `.info` object is the same object as the one returned in the "session" property by the [`Process activity`](../commands/process-activity.md) command for remote client and stored procedure sessions.
- O objeto `.info` é o mesmo objeto retornado pelo comando [`Session info`](../commands/session-info.md) para uma sessão autônoma.

:::

The `.info` object contains the following properties:

| Propriedade      | Tipo          | Descrição                                                                                                                                                                                                                          |
| ---------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type             | Text          | Session type: "remote", "storedProcedure", "standalone"                                                                                                                                                            |
| userName         | Text          | Nome de usuário 4D (o mesmo valor que [`.userName`](#username))                                                                                                                                                 |
| machineName      | Text          | Sessões remotas: nome da máquina remota. Sessão de procedimentos armazenados: nome da máquina do servidor. Standalone session: name of the machine |
| systemUserName   | Text          | Sessões remotas: nome da sessão do sistema aberta na máquina remota.                                                                                                                               |
| IPAddress        | Text          | Endereço IP da máquina remota                                                                                                                                                                                                      |
| hostType         | Text          | Tipo de host: "windows" ou "mac"                                                                                                                                                                                   |
| creationDateTime | Date ISO 8601 | Data e hora de criação da sessão. Standalone session: date and time of application startup                                                                                                         |
| state            | Text          | Estado da sessão: "ativa", "adiada", "em espera"                                                                                                                                                                   |
| ID               | Text          | UUID da sessão (mesmo valor que [`.id`](#id))                                                                                                                                                                   |
| persistentID     | Text          | Remote sessions: Session's persistent ID                                                                                                                                                                           |

:::note

Since `.info` is a computed property, it is recommended to call it once and then to store it in a local variable if you want to do some processing on its properties.

:::

<!-- END REF -->

<!-- REF SessionClass.isGuest().Desc -->

## .isGuest()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #SessionClass.isGuest().Syntax -->**.isGuest()** : Boolean<!-- END REF -->

<!-- REF #SessionClass.isGuest().Params -->

| Parâmetro  | Tipo       |                             | Descrição                                                   |
| ---------- | ---------- | :-------------------------: | ----------------------------------------------------------- |
| Resultados | Parâmetros | <- | True se a sessão for uma sessão Guest, False caso contrário |

<!-- END REF -->

#### Descrição

:::note

This function always returns **False** with remote client, stored procedure, and standalone sessions.

:::

The `.isGuest()` function <!-- REF #SessionClass.isGuest().Summary -->returns True if the session is a Guest session (i.e. it has no privileges)<!-- END REF -->.

#### Exemplo

No método base `On Web Connection`:

```4d
If (Session.isGuest())
	//Do something for Guest user
End if
```

<!-- END REF -->

<!-- REF SessionClass.restore().Desc -->

## .restore()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20 R9   | Adicionado |

</details>

<!-- REF #SessionClass.restore().Syntax -->**.restore** ( *token* : Text ) : Boolean <!-- END REF -->

<!-- REF #SessionClass.restore().Params -->

| Parâmetro  | Tipo       |                             | Descrição                                                                          |
| ---------- | ---------- | :-------------------------: | ---------------------------------------------------------------------------------- |
| token      | Text       |              ->             | Session token UUID                                                                 |
| Resultados | Parâmetros | <- | True if the current session has been successfully replaced by the session in token |

<!-- END REF -->

#### Descrição

:::note

This function is only available with web user sessions. It returns False in other contexts.

:::

A função `.restore()` <!-- REF #SessionClass.restore().Summary -->substitui a sessão do usuário da web pela sua sessão original correspondente ao *token* UUID<!-- END REF -->. Session's storage and privileges are restored.

If the original user session has been correctly restored, the function returns `true`.

The function returns `false` if:

- the session token has already been used,
- the session token has expired,
- the session token does not exist,
- the original session itself has expired.

In this case, the current web user session is left untouched (no session is restored).

#### Exemplo

In a singleton called by a custom HTTP Request handler:

```4d
shared singleton Class constructor()

Function callback($request : 4D.IncomingMessage) : 4D.OutgoingMessage
   Session.restore($request.urlQuery.state) 
```

#### Veja também

[`.createOTP()`](#createotp)

<!-- END REF -->

<!-- REF SessionClass.setPrivileges().Desc -->

## .setPrivileges()

<details><summary>História</summary>

| Release | Mudanças                                    |
| ------- | ------------------------------------------- |
| 19 R8   | Suporte da propriedade "roles" das Settings |
| 18 R6   | Adicionado                                  |

</details>

<!-- REF #SessionClass.setPrivileges().Syntax -->**.setPrivileges**( *privilege* : Text ) : Boolean<br/>**.setPrivileges**( *privileges* : Collection )<br/>**.setPrivileges**( *settings* : Object ) : Boolean<!-- END REF -->

<!-- REF #SessionClass.setPrivileges().Params -->

| Parâmetro  | Tipo       |                             | Descrição                                                                           |
| ---------- | ---------- | :-------------------------: | ----------------------------------------------------------------------------------- |
| privilege  | Text       |              ->             | Nome do privilégio                                                                  |
| privileges | Collection |              ->             | Collection de nomes de privilégios                                                  |
| settings   | Object     |              ->             | Objetos com as propriedades "privilégios" (string ou collection) |
| Resultados | Parâmetros | <- | True se a execução for bem-sucedida                                                 |

<!-- END REF -->

#### Descrição

:::note

This function does nothing and always returns **False** with remote client, stored procedure, and standalone sessions.

:::

A função `.setPrivileges()` <!-- REF #SessionClass.setPrivileges().Summary -->associa os privilégios e/ou papéis definidos no parâmetro para a sessão e retorna **True** se a execução foi bem sucedida <!-- END REF -->.

- In the *privilege* parameter, pass a string containing a privilege name (or several comma-separated privilege names).

- In the *privileges* parameter, pass a collection of strings containing privilege names.

- In the *settings* parameter, pass an object containing the following properties:

| Propriedade | Tipo               | Descrição                                                                                                |
| ----------- | ------------------ | -------------------------------------------------------------------------------------------------------- |
| privileges  | Text ou Collection | <li>String containing a privilege name, or</li><li>Collection of strings containing privilege names</li> |
| roles       | Text ou Collection | <li>String containing a role, or</li><li>Collection of strings containing roles</li>                     |
| userName    | Text               | Nome de usuário associado à sessão (opcional)                                         |

:::note

Os privilégios e as funções são definidos no arquivo [`roles.json`](../ORDA/privileges.md#rolesjson-file) do projeto. Para obter mais informações, consulte a seção [**Privilégios**](../ORDA/privileges.md).

:::

Se a propriedade `privileges` ou `roles` tiverem um nome que não seja declarado no arquivo [`roles.json`](../ORDA/privileges.md#rolesjson-file), ele será ignorado.

Como padrão quando não houver um privilégio associado à sessão, a sessão é uma [Sessão de convidados](#isguest).

A propriedade [`userName`](#username) está disponível no nível do objeto de sessão (somente leitura).

#### Exemplo

Em um método de autenticação personalizado, deve estabecer o privilégio "WebAdmin" ao usuário:

```4d
var $userOK : Boolean

... //Authenticate the user

If ($userOK) //The user has been approved
  var $info : Object
  $info:=New object()
  $info.privileges:=New collection("WebAdmin")
  Session.setPrivileges($info)
End if

```

#### Veja também

[.getPrivileges()](#getprivileges)

<!-- END REF -->

<!-- REF SessionClass.storage.Desc -->

## .storage

<details><summary>História</summary>

| Release | Mudanças                                               |
| ------- | ------------------------------------------------------ |
| 20 R5   | Support of remote client and stored procedure sessions |
| 18 R6   | Adicionado                                             |

</details>

<!-- REF #SessionClass.storage.Syntax -->**.storage** : Object<!-- END REF -->

#### Descrição

A propriedade `.storage` contém <!-- REF #SessionClass.storage.Summary --> um objeto compartilhado que pode ser usado para armazenar informações disponíveis para todos os processos da sessão<!-- END REF -->.

Quando um objeto `Session` é criado, a propriedade `.storage` está vazia. Since it is a shared object, this property will be available in the `Storage` object of the server.

> Like the `Storage` object of the server, the `.storage` property is always "single": adding a shared object or a shared collection to `.storage` does not create a shared group.

Essa propriedade é **apenas de leitura**, mas retorna um objeto de leitura e gravação.

:::tip

You can get the `.storage` property of a session using the [`Session storage`](../commands/session-storage.md) command.

:::

#### Exemplo de sessão na web

Você deseja armazenar o IP do cliente na propriedade `.storage`. Você pode escrever no método de banco de dados `On Web Authentication`:

```4d
If (Session.storage.clientIP=Null) //first access
    Use (Session.storage)
        Session.storage.clientIP:=New shared object("value"; $clientIP)
    End use End if
```

#### Exemplo de sessão remota

Você deseja compartilhar dados entre processos na mesma sessão:

```4d
Use (Session.storage)
 Session.storage.settings:=New shared object("property"; $value; "property2"; $value2)
End use
```

<!-- END REF -->

<!-- REF SessionClass.userName.Desc -->

## .userName

<details><summary>História</summary>

| Release | Mudanças                                               |
| ------- | ------------------------------------------------------ |
| 20 R5   | Support of remote client and stored procedure sessions |
| 18 R6   | Adicionado                                             |

</details>

<!-- REF #SessionClass.userName.Syntax -->**.userName** : Text<!-- END REF -->

#### Descrição

A propriedade `.userName` contém <!-- REF #SessionClass.userName.Summary -->o nome de usuário associado à sessão<!-- END REF -->. Pode usá-la para identificar o usuário dentro de seu código.

- Com sessões da Web, essa propriedade é uma cadeia de caracteres vazia por padrão. Ele pode ser definido usando a propriedade `privileges` da função [`setPrivileges()`](#setprivileges).
- With remote and stored procedure sessions, this property returns the same user name as the [`Current user`](../commands-legacy/current-user.md) command.
- With standalone sessions, this property contains "designer" or the name set with the [`SET USER ALIAS`](../commands-legacy/set-user-alias.md) command.

Essa propriedade é **somente leitura**.

<!-- END REF -->
