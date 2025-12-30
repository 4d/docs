---
id: SessionClass
title: Session
---

Os objetos de sessão são retornados pelo comando [`Session`](../commands/session.md). These objects provide the developer with an interface allowing to manage the current session and execute actions such as store contextual data, share information between session processes, launch session-related preemptive processes, or (web context only) manage [privileges](../ORDA/privileges.md).

:::tip Related blog posts

- [Scalable sessions for advanced web applications](https://blog.4d.com/scalable-sessions-for-advanced-web-applications/)
- [Permissions: Inspect Session Privileges for Easy Debugging](https://blog.4d.com/permissions-inspect-session-privileges-for-easy-debugging/)
- [Generate, share and use web sessions One-Time Passcodes (OTP)](https://blog.4d.com/connect-your-web-apps-to-third-party-systems/)

:::

### Tipos de sessão

Os seguintes tipos de sessões são suportados por essa classe:

- [**Sessões de usuário web**](WebServer/sessions.md): sessões de usuário web estão disponíveis quando [sessões escaláveis estão habilitadas em seu projeto](WebServer/sessions.md#enabling-web-sessions). They are used for Web connections (including and REST access), and are controlled by assigned [privileges](../ORDA/privileges.md).
- [**Desktop sessions**](../Desktop/sessions.md), which include:
  - [**Remote user sessions**](../Desktop/sessions.md#remote-user-sessions): In client/server applications, remote users have their own sessions managed on the server.
  - [**Stored procedures sessions**](../Desktop/sessions.md#stored-procedure-sessions): Virtual user session for all stored procedures executed on the server.
  - [**Standalone sessions**](../Desktop/sessions.md#standalone-sessions): Local session object returned in single-user application (useful in development and test phases of client/server applications).

:::warning About session privileges

All session types can handle privileges, but only the code executed in [web user sessions](WebServer/sessions.md) is actually controlled by session's privileges.

:::

### Resumo

|                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)<br/><!-- INCLUDE #SessionClass.clearPrivileges().Summary --> |
| [<!-- INCLUDE #SessionClass.createOTP().Syntax -->](#createotp)<br/><!-- INCLUDE #SessionClass.createOTP().Summary -->                   |
| [<!-- INCLUDE #SessionClass.demote().Syntax -->](#demote)<br/><!-- INCLUDE #SessionClass.demote().Summary -->                            |
| [<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)<br/><!-- INCLUDE #SessionClass.expirationDate.Summary -->        |
| [<!-- INCLUDE #SessionClass.getPrivileges().Syntax -->](#getprivileges)<br/><!-- INCLUDE #SessionClass.getPrivileges().Summary -->       |
| [<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)<br/><!-- INCLUDE #SessionClass.hasPrivilege().Summary -->          |
| [<!-- INCLUDE #SessionClass.id.Syntax -->](#id)<br/><!-- INCLUDE #SessionClass.id.Summary -->                                            |
| [<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)<br/><!-- INCLUDE #SessionClass.idleTimeout.Summary -->                 |
| [<!-- INCLUDE #SessionClass.info.Syntax -->](#info)<br/><!-- INCLUDE #SessionClass.info.Summary -->                                      |
| [<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)<br/><!-- INCLUDE #SessionClass.isGuest().Summary -->                         |
| [<!-- INCLUDE #SessionClass.promote().Syntax -->](#promote)<br/><!-- INCLUDE #SessionClass.promote().Summary -->                         |
| [<!-- INCLUDE #SessionClass.restore().Syntax -->](#restore)<br/><!-- INCLUDE #SessionClass.restore().Summary -->                         |
| [<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)<br/><!-- INCLUDE #SessionClass.setPrivileges().Summary -->       |
| [<!-- INCLUDE #SessionClass.storage.Syntax -->](#storage)<br/><!-- INCLUDE #SessionClass.storage.Summary -->                             |
| [<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)<br/><!-- INCLUDE #SessionClass.userName.Summary -->                          |

<!-- REF SessionClass.clearPrivileges().Desc -->

## .clearPrivileges()

<details><summary>História</summary>

| Release | Mudanças                                  |
| ------- | ----------------------------------------- |
| 21      | Support of remote and standalone sessions |
| 18 R6   | Adicionado                                |

</details>

<!-- REF #SessionClass.clearPrivileges().Syntax -->**.clearPrivileges()** : Boolean<!-- END REF -->

<!-- REF #SessionClass.clearPrivileges().Params -->

| Parâmetro  | Tipo       |                             | Descrição                           |
| ---------- | ---------- | :-------------------------: | ----------------------------------- |
| Resultados | Parâmetros | <- | True se a execução for bem-sucedida |

<!-- END REF -->

#### Descrição

The `.clearPrivileges()` function <!-- REF #SessionClass.clearPrivileges().Summary -->removes all the privileges associated to the session (excluding promoted privileges) and returns **True** if the execution was successful<!-- END REF -->.

:::note

This function does not remove **promoted privileges** from the web process, whether they are added through the [roles.json](../ORDA/privileges.md#rolesjson-file) file or the [`promote()`](#promote) function.

:::

:::note

Keep in mind that privileges only apply to the code executed through web accesses, whatever the [session type](#session-types) on which this function is executed.
:::

#### Exemplo

```4d
//Invalidate a web user session
var $isGuest : Boolean
var $isOK : Boolean

$isOK:=Session.clearPrivileges()
```

<!-- END REF -->

<!-- REF SessionClass.createOTP().Desc -->

## .createOTP()

<details><summary>História</summary>

| Release | Mudanças                                  |
| ------- | ----------------------------------------- |
| 21      | Support of remote and standalone sessions |
| 20 R9   | Adicionado                                |

</details>

<!-- REF #SessionClass.createOTP().Syntax -->**.createOTP** ( { *lifespan* : Integer } ) : Text <!-- END REF -->

<!-- REF #SessionClass.createOTP().Params -->

| Parâmetro  | Tipo    |                             | Descrição                                                                |
| ---------- | ------- | :-------------------------: | ------------------------------------------------------------------------ |
| lifespan   | Integer |              ->             | Session token lifespan in seconds (web sessions only) |
| Resultados | Text    | <- | UUID of the token                                                        |

<!-- END REF -->

#### Descrição

A função `.createOTP()` <!-- REF #SessionClass.createOTP().Summary -->cria um novo OTP (uma senha única) para a sessão e retorna seu UUID<!-- END REF -->. Esse token é exclusivo da sessão em que foi gerado.

Para mais informações sobre os tokens OTP, consulte [esta seção](../WebServer/sessions.md#session-token-otp).

If an expired token is used to restore a session, it is ignored.

For web sessions, you can set a custom timeout by passing a value in seconds in *lifespan*. Por padrão, se o parâmetro *lifespan* for omitido, o token será criado com o mesmo tempo de vida que o [`.idleTimeOut`](#idletimeout) da sessão.

For desktop sessions, the token is created with a 10 seconds lifespan.

The returned token can be used in exchanges with third-party applications or websites to securely identify the session. Por exemplo, o token de sessão OTP pode ser usado com um aplicativo de pagamento.

The returned token can be used by 4D Server or 4D single-user application to identify requests coming from the web that [share the session](../Desktop/sessions.md#sharing-a-desktop-session-for-web-accesses).

#### Exemplo

```4d
var $token : Text
$token := Session.createOTP( 60 ) //o token é válido por 1 mn
```

<!-- END REF -->

<!-- REF SessionClass.demote().Desc -->

## .demote()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20 R10  | Adicionado |

</details>

<!-- REF #SessionClass.demote().Syntax -->**.demote**( *promoteId* : Integer )<!-- END REF -->

<!-- REF #SessionClass.demote().Params -->

| Parâmetro | Tipo    |     | Descrição                               |
| --------- | ------- | :-: | --------------------------------------- |
| promoteId | Integer |  -> | Id returned by the `promote()` function |

<!-- END REF -->

#### Descrição

The `.demote()` function <!-- REF #SessionClass.demote().Summary -->removes the promoted privilege whose id you passed in *promoteId* from the web process, if it was previously added by the [`.promote()`](#promote) function<!-- END REF -->.

If no privilege with *promoteId* was promoted using [`.promote()`](#promote) in the web process, the function does nothing.

If several privileges have been added to the web process, the `demote()` function must be called for each one with the appropriate *promoteId*. Privileges are stacked in the order they have been added to the process, it is recommended to unstack privileges in a LIFO (*Last In, First Out*) order.

#### Exemplo

```4d
exposed Function search($search : Text) : Collection
	
	var $employees : Collection
	var $promoteId1; $promoteId2 : Integer
	
	$promoteId1:=Session.promote("admin")
	$promoteId2:=Session.promote("superAdmin")
	
	$search:="@"+$search+"@"
	
	$employees:=This.query("type = :1 and lastname = :2"; "Intern"; $search).toCollection()
	
	Session.demote($promoteId2)
	Session.demote($promoteId1)
	
	return $employees
```

#### Veja também

[`.promote()`](#promote)

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

A propriedade `.expirationDate` contém <!-- REF #SessionClass.expirationDate.Summary -->a data e a hora de expiração do cookie de sessão<!-- END REF -->. O valor é expresso como texto no formato ISO 8601: `YYYY-MM-DDTHH:MM:SS.mmmZ`.

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

| Release | Mudanças                                  |
| ------- | ----------------------------------------- |
| 21      | Support of remote and standalone sessions |
| 20 R6   | Adicionado                                |

</details>

<!-- REF #SessionClass.getPrivileges().Syntax -->**.getPrivileges**() : Collection<!-- END REF -->

<!-- REF #SessionClass.getPrivileges().Params -->

| Parâmetro  | Tipo       |                             | Descrição                                                    |
| ---------- | ---------- | :-------------------------: | ------------------------------------------------------------ |
| Resultados | Collection | <- | Coleção de nomes de privilégios (strings) |

<!-- END REF -->

#### Descrição

A função `.getPrivileges()` <!-- REF #SessionClass.getPrivileges().Summary -->retorna uma coleção de todos os nomes de privilégios associados à sessão<!-- END REF -->.

:::note

This function returns privileges assigned to a Session using the [`setPrivileges()`](#setprivileges) function only. Promoted privileges are NOT returned by the function, whether they are added through the [roles.json](../ORDA/privileges.md#rolesjson-file) file or the [`promote()`](#promote) function.

:::

:::note

Keep in mind that privileges only apply to the code executed through web accesses, whatever the [session type](#session-types) on which this function is executed.
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

Assumindo que a função `authentify()` seja chamada com o papel "Medium":

```4d
var $privileges : Collection
$privileges := Session.getPrivileges()
//$privileges: ["simple","medium"]
```

#### Veja também

[.setPrivileges()](#setprivileges)<br/>
[*Permissions – Inspect the privileges in the session for an easy debugging* (blog post)](https://blog.4d.com/permissions-inspect-the-privileges-in-the-session-for-an-easy-debugging)

<!-- END REF -->

<!-- REF SessionClass.hasPrivilege().Desc -->

## .hasPrivilege()

<details><summary>História</summary>

| Release | Mudanças                                                                        |
| ------- | ------------------------------------------------------------------------------- |
| 21      | Returns True for promoted privileges, Support of remote and standalone sessions |
| 18 R6   | Adicionado                                                                      |

</details>

<!-- REF #SessionClass.hasPrivilege().Syntax -->**.hasPrivilege**( *privilege* : Text ) : Boolean<!-- END REF -->

<!-- REF #SessionClass.hasPrivilege().Params -->

| Parâmetro  | Tipo       |                             | Descrição                                                |
| ---------- | ---------- | :-------------------------: | -------------------------------------------------------- |
| privilege  | Text       |              ->             | Nome do privilegio a verificar                           |
| Resultados | Parâmetros | <- | True se a sessão tiver *privilege*, False caso contrário |

<!-- END REF -->

#### Descrição

A função `.hasPrivilege()` <!-- REF #SessionClass.hasPrivilege().Summary -->retorna True se o *privilege* estiver associado à sessão e False caso contrário<!-- END REF -->.

:::note

This function returns True for the *privilege* if called from a function that was promoted for this privilege (either through the [roles.json](../ORDA/privileges.md#rolesjson-file) file or the [`promote()`](#promote) function).

:::

:::note

Keep in mind that privileges only apply to the code executed through web accesses, whatever the [session type](#session-types) on which this function is executed.
:::

#### Exemplo

You want to check if the "CreateInvoices" privilege is associated to the web user session:

```4d
If (Session.hasPrivilege("CreateInvoices"))
	//Access to Invoice creation features
Else
	//No access to Invoice creation features 

End if
```

#### Veja também

[*Restrict data according to privileges or information saved in session storage* (blog post)](https://blog.4d.com/?s=hasPrivilege)

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

A propriedade `.id` contém <!-- REF #SessionClass.id.Summary --> o identificador único (UUID) da sessão do usuário<!-- END REF -->. Com o 4D Server, essa string exclusiva é atribuída automaticamente pelo servidor para cada sessão e permite que você identifique seus processos.

:::tip

Você pode usar essa propriedade para obter o objeto [`.storage`](#storage) de uma sessão graças ao comando [`storage`](../commands/session-storage.md).

:::

<!-- END REF -->

<!-- REF SessionClass.idleTimeout.Desc -->

## .idleTimeout

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #SessionClass.idleTimeout.Syntax -->**.idleTimeout** : Integer<!-- END REF -->

#### Descrição

:::note

Essa propriedade só está disponível com sessões de usuário da Web.

:::

A propriedade `.idleTimeout` contém <!-- REF #SessionClass.idleTimeout.Summary -->o tempo limite da sessão de inatividade (em minutos), após o qual a sessão é automaticamente encerrada pelo 4D<!-- END REF -->.

Se não se definir esta propriedade, o valor padrão é 60 (1h).

Quando essa propriedade é definida, a propriedade [`.expirationDate`](#expirationdate) é atualizada de acordo.

> O valor não pode ser inferior a 60: se definir um valor inferior, o tempo de espera se eleva até 60.

Essa propriedade é **leitura escrita**.

#### Exemplo

```4d
If (Session.isGuest())
		// Uma sessão de convidado será fechada após 60 minutos de inatividade
	Session.idleTimeout:=60
Else
		// Outras sessões serão fechadas após 120 minutos de inatividade
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

The `.info` property <!-- REF #SessionClass.info.Summary -->describes the desktop or web session<!-- END REF -->.

- **Remote sessions** and **Stored procedure sessions**: The `.info` object is the same object as the one returned in the "session" property by the [`Process activity`](../commands/process-activity.md) command.
- **Standalone sessions**: The `.info` object is the same object as the one returned by the [`Session info`](../commands/session-info.md) command.

O objeto `.info` contém as seguintes propriedades:

| Propriedade      | Tipo          | Descrição                                                                                                                                                                                                                   |
| ---------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type             | Text          | Session type: "remote", "storedProcedure", "standalone", "rest", "web"                                                                                                                                      |
| userName         | Text          | Nome de usuário 4D (o mesmo valor que [`.userName`](#username))                                                                                                                                          |
| machineName      | Text          | Sessões remotas: nome da máquina remota. Sessão de procedimentos armazenados: nome da máquina do servidor. Sessão autônoma: nome da máquina |
| systemUserName   | Text          | Sessões remotas: nome da sessão do sistema aberta na máquina remota.                                                                                                                        |
| IPAddress        | Text          | Endereço IP da máquina remota                                                                                                                                                                                               |
| hostType         | Text          | Tipo de host: "windows" ou "mac"                                                                                                                                                                            |
| creationDateTime | Date ISO 8601 | Data e hora de criação da sessão. Sessão autônoma: data e hora da inicialização do aplicativo                                                                                               |
| state            | Text          | Estado da sessão: "ativa", "adiada", "em espera"                                                                                                                                                            |
| ID               | Text          | UUID da sessão (mesmo valor que [`.id`](#id))                                                                                                                                                            |
| persistentID     | Text          | Sessões remotas: ID persistente da sessão                                                                                                                                                                   |

:::note

Desde `. nfo` é uma propriedade computada, é recomendável chamá-lo uma vez e então armazená-lo em uma variável local se você quiser fazer algum processamento em suas propriedades.

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

| Parâmetro  | Tipo       |                             | Descrição                                                                              |
| ---------- | ---------- | :-------------------------: | -------------------------------------------------------------------------------------- |
| Resultados | Parâmetros | <- | True if session is a Guest one, False otherwise (web sessions only) |

<!-- END REF -->

#### Descrição

:::note

This function always returns **False** with desktop sessions.

:::

The `.isGuest()` function <!-- REF #SessionClass.isGuest().Summary -->returns True as long as `setPrivileges()` is not called in the session or after a [Qodly logout](https://developer.4d.com/qodly/4DQodlyPro/force-login#logout) has been executed in the session<!-- END REF -->.

:::note Compatibidade

In a REST session when the [**Force login mode**](../REST/authUsers.md#force-login-mode) is not enabled, `.isGuest()` returns True if the session has no privileges.

:::

#### Exemplo

No método base `On Web Connection`:

```4d
If (Session.isGuest())
	//Fazer algo para o usuário convidado
End if
```

<!-- END REF -->

<!-- REF SessionClass.promote().Desc -->

## .promote()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20 R10  | Adicionado |

</details>

<!-- REF #SessionClass.promote().Syntax -->**.promote**( *privilege* : Text ) : Integer<!-- END REF -->

<!-- REF #SessionClass.promote().Params -->

| Parâmetro  | Tipo    |                             | Descrição                                                 |
| ---------- | ------- | :-------------------------: | --------------------------------------------------------- |
| privilege  | Text    |              ->             | Nome do privilégio                                        |
| Resultados | Integer | <- | id to use when calling the [`demote()`](#demote) function |

<!-- END REF -->

#### Descrição

The `.promote()` function <!-- REF #SessionClass.promote().Summary -->adds the privilege defined in the *privilege* parameter to the current process during the execution of the calling function and returns the id of the promoted privilege<!-- END REF -->.

Dynamically adding privileges is useful when access rights depend on the execution context, which cannot be fully defined in the "roles.json" file. This is particularly relevant when the same function can be executed by users with different access levels. The use of `.promote()` ensures that only the current process is granted the necessary privileges, without affecting others.

The function does nothing and returns 0 if:

- the *privilege* does not exist in the [`roles.json`](../ORDA/privileges.md#rolesjson-file) file,
- the *privilege* is already assigned to the current process (using `.promote()` or through a static [promote action](../ORDA/privileges.md#permission-actions) declared for the calling function in the [`roles.json`](../ORDA/privileges.md#rolesjson-file) file).

You can call the `promote()` function several times in the same process to add different privileges.

The returned id is incremented each time a privilege is dynamically added to the process.

To remove a privilege dynamically, call the `demote()` function with the appropriate id.

:::note

Keep in mind that privileges only apply to the code executed through web accesses, whatever the [session type](#session-types) on which this function is executed.
:::

#### Exemplo

Several users connect to a single endpoint that serves different applications. A user from application #1 does not need the "super_admin" privilege because they don't create "VerySensitiveInfo". A user from application #2 needs "super_admin" privilege.

You can dynamically provide appropriate privileges in the *CreateInfo* function:

```4d
exposed Function createInfo($info1 : Text; $info2 : Text)
	
var $sensitive : cs.SensitiveInfoEntity
var $verySensitiveInfo : cs.VerySensitiveInfoEntity
var $status : Object
var $promoteId : Integer
	
$sensitive:=ds.SensitiveInfo.new()
$sensitive.info:=$info1
$status:=$sensitive.save()
	
If (Session.storage.role.name="userApp2")
	$promoteId:=Session.promote("super_admin")
	$verySensitiveInfo:=ds.VerySensitiveInfo.new()
	$verySensitiveInfo.info:=$info2
	$status:=$verySensitiveInfo.save()
	Session.demote($promoteId)
End if 
```

#### Veja também

[`.demote()`](#demote)<br/>[`hasPrivilege()`](#hasprivilege)

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

| Parâmetro  | Tipo       |                             | Descrição                                                                    |
| ---------- | ---------- | :-------------------------: | ---------------------------------------------------------------------------- |
| token      | Text       |              ->             | UUID do token de sessão                                                      |
| Resultados | Parâmetros | <- | True se a sessão atual tiver sido substituída com êxito pela sessão no token |

<!-- END REF -->

#### Descrição

A função `.restore()` <!-- REF #SessionClass.restore().Summary -->substitui a sessão do usuário da web pela sua sessão original correspondente ao *token* UUID<!-- END REF -->. O armazenamento e os privilégios da sessão são restaurados.

Se a sessão original do usuário tiver sido restaurada corretamente, a função retornará `true`.

A função retorna `false` se:

- o token de sessão já foi usado,
- o token de sessão expirou,
- o token de sessão não existe,
- a própria sessão original expirou.

Nesse caso, a sessão atual do usuário da Web não é alterada (nenhuma sessão é restaurada).

#### Exemplo

Em um singleton chamado por um manipulador de solicitação HTTP personalizado:

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
| 21      | Support of remote and standalone sessions   |
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

A função `.setPrivileges()` <!-- REF #SessionClass.setPrivileges().Summary -->associa os privilégios e/ou papéis definidos no parâmetro para a sessão e retorna **True** se a execução foi bem sucedida <!-- END REF -->.

- No parâmetro *privilege*, passe uma cadeia de caracteres contendo um nome de privilégio (ou vários nomes de privilégio separados por vírgula).
- No parâmetro *privileges*, passe uma coleção de cadeias de caracteres contendo nomes de privilégios.
- No parâmetro *settings*, passe um objeto que contenha as seguintes propriedades:

| Propriedade | Tipo               | Descrição                                                                                                                                                                                     |
| ----------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| privileges  | Text ou Collection | <li>String contendo um nome de privilégio, ou</li><li>Coleção de cadeias de caracteres contendo nomes de privilégios</li>                                                                     |
| roles       | Text ou Collection | <li>String que contém uma função, ou</li><li>Coleção de cadeias de caracteres contendo funções</li>                                                                                           |
| userName    | Text               | User name to associate to the session (optional, web sessions only). Not available in remote client sessions (ignored). |

:::note

Os privilégios e as funções são definidos no arquivo [`roles.json`](../ORDA/privileges.md#rolesjson-file) do projeto. Para obter mais informações, consulte a seção [**Privilégios**](../ORDA/privileges.md).

:::

Se a propriedade `privileges` ou `roles` tiverem um nome que não seja declarado no arquivo [`roles.json`](../ORDA/privileges.md#rolesjson-file), ele será ignorado.

Como padrão quando não houver um privilégio associado à sessão, a sessão é uma [Sessão de convidados](#isguest).

A propriedade [`userName`](#username) está disponível no nível do objeto de sessão (somente leitura).

:::note

Keep in mind that privileges only apply to the code executed through web accesses, whatever the [session type](#session-types) on which this function is executed.
:::

#### Exemplo

Em um método de autenticação personalizado, deve estabecer o privilégio "WebAdmin" ao usuário:

```4d
var $userOK : Boolean

... //Autenticar o usuário

If ($userOK) //O usuário foi aprovado
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

| Release | Mudanças                    |
| ------- | --------------------------- |
| 20 R5   | Support of desktop sessions |
| 18 R6   | Adicionado                  |

</details>

<!-- REF #SessionClass.storage.Syntax -->**.storage** : Object<!-- END REF -->

#### Descrição

A propriedade `.storage` contém <!-- REF #SessionClass.storage.Summary --> um objeto compartilhado que pode ser usado para armazenar informações disponíveis para todos os processos da sessão<!-- END REF -->.

Quando um objeto `Session` é criado, a propriedade `.storage` está vazia. Como se trata de um objeto compartilhado, essa propriedade estará disponível no objeto `Storage` do servidor.

> Como o objeto `Storage` do servidor, a propriedade `.storage` é sempre "single": adicionar um objeto compartilhado ou uma coleção compartilhada a `.storage` não cria um grupo compartilhado.

Essa propriedade é **apenas de leitura**, mas retorna um objeto de leitura e gravação.

:::tip

Você pode obter a propriedade `.storage` de uma sessão usando o comando [`Session storage`](../commands/session-storage.md).

:::

When a desktop session and a web session are [shared using an OTP](../Desktop/sessions.md#sharing-a-desktop-session-for-web-accesses), they also share the same `.storage` object.

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

| Release | Mudanças                    |
| ------- | --------------------------- |
| 20 R5   | Support of desktop sessions |
| 18 R6   | Adicionado                  |

</details>

<!-- REF #SessionClass.userName.Syntax -->**.userName** : Text<!-- END REF -->

#### Descrição

A propriedade `.userName` contém <!-- REF #SessionClass.userName.Summary -->o nome de usuário associado à sessão<!-- END REF -->. Pode usá-la para identificar o usuário dentro de seu código.

- **Web sessions**: This property is an empty string by default. Ele pode ser definido usando a propriedade `privileges` da função [`setPrivileges()`](#setprivileges).
- **Remote/Stored procedure sessions**: This property returns the same user name as the [`Current user`](../commands-legacy/current-user.md) command.
- **Standalone sessions**: This property contains "designer" or the name set with the [`SET USER ALIAS`](../commands-legacy/set-user-alias.md) command.

This property is **read only** for desktop sessions.

<!-- END REF -->
