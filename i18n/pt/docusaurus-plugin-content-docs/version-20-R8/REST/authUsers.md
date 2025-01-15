---
id: authUsers
title: Usuários e sessões
---

## Sessões

Quando [sessões escalonáveis estão ativadas](WebServer/sessions.md#enabling-sessions) (recomendado), as solicitações REST podem criar e usar [sessões de usuário Web](WebServer/sessions.md), fornecendo recursos adicionais, como manipulação de várias solicitações, compartilhamento de dados entre processos de clientes da Web e controle de privilégios de usuário.

Cuando se abre una sesión de usuario web, puede manejarla a través del objeto `Session` y la [Session API](API/SessionClass.md). Subsequent REST requests reuse the same session cookie.

Uma sessão é aberta depois que o usuário é autenticado com sucesso (veja abaixo).

> - On 4D Server, opening a REST session requires that a free 4D client license is available.<br/>
> - Em 4D single-user, pode abrir até três sessões REST para fins de teste.

## Force login mode

:::note Compatibidade

O modo de login legado baseado no método de banco de dados `On REST Authentication` é **obsoleto** a partir de 4D 20 R6. It is now recommended to [use the **force login mode**](../ORDA/privileges.md#rolesjson-file) (automatically enabled in new projects) and to implement the [`ds.authentify()` function](#dsauthentify). Em projetos convertidos, [um botão na caixa de diálogo Configurações](../settings/web.md#activate-rest-authentication-through-dsauthentify-function) o ajudará a atualizar sua configuração. No Qodly Studio para 4D, o modo pode ser definido usando a opção [**Forçar login**](../WebServer/qodly-studio.md#force-login) no painel de Privilégios.

:::

A sequência de login do usuário é a seguinte:

1. At the first REST call (for a Qodly page call for example), a "guest" web user session is created. It has no privileges, no rights to execute requests other than [descriptive REST requests](#descriptive-rest-requests), no license consumption.\
   Descriptive REST requests are always processed by the server, even if no web user session using a license is opened. In this case, they are processed through "guest" sessions.

2. You call your [`authentify()` function](#authentify) (created beforehand), in which you check the user credentials and call [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) with appropriate privileges. `authentify()` deve ser uma [função de datastore class](../ORDA/ordaClasses.md#datastore-class) exposta.

3. La petición `/rest/$catalog/authentify` se envía al servidor junto con las credenciales del usuario. This step only requires a basic login form that do not access data; it can be a [Qodly page](../WebServer/qodly-studio.md) (called via the `/rest/$getWebForm` request).

4. If the user is successfully authentified, a 4D license is consumed on the server and all REST requests are accepted.

![alt-text](../assets/en/REST/force-login-2.jpeg)

In the user login phase, license usage is disconnected from web user sessions. A license is required only when the [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) is executed, allowing you to control the number of used licenses.

All other REST requests (handling data or executing a function) will only be processed if they are executed within a web session with appropriate privileges, otherwise they return an error. To assign privileges to a web session, you need to execute the [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) function for the session. A execução dessa função aciona o consumo da licença 4D.

### Solicitações REST descritivas

Descriptive REST requests can be processed in web user sessions that do not require licenses ("guest" sessions). Essas solicitações são:

- Solicitações [`/rest/$catalog`]($catalog.md) (por exemplo, `/rest/$catalog/$all`) - acesso às dataclasses disponíveis
- `/rest/$catalog/authentify` - la función del almacén de datos utilizada para iniciar sesión del usuario
- `/rest/$getWebForm` - Renderização de uma página Qodly

![alt-text](../assets/en/REST/force-login-1.jpeg)

## `Function authentify`

### Sintaxe

```4d
exposed Function authentify({params : type}) {-> result : type}
	// code
```

The `authentify()` function must be implemented in the [DataStore class](../ORDA/ordaClasses.md#datastore-class) of the project and must be called through a REST request.

This function is the only available entry point from REST guest sessions when the "force login" mode is enabled: any other function call or data access is rejected until the session acquires appropriate privileges.

:::note

The `authentify()` function can always be executed by a REST guest session, whatever the [`roles.json` file](../ORDA/privileges.md#rolesjson-file) configuration.

:::

A função pode receber qualquer autenticação ou informação contextual como [parâmetro(s)](ClassFunctions.md#parameters) e pode retornar qualquer valor. Since this function can only be called from a REST request, parameters must be passed through the body of the POST request.

Esta função deve conter duas partes:

- some code to identify and authenticate the REST request sender,
- if the authentication is successful, a call to [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) that assigns appropriate privileges to the session.

If the function does not call [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges), no privileges are assigned, no license is consumed and subsequent non-descriptive REST requests are rejected.

### Exemplo

You only want to know users to open a web session on the server. Ha creado la siguiente función `authentify()` en la clase datastore:

```4d
exposed Function authentify($credentials : Object) : Text

var $users : cs.UsersSelection
var $user : cs.UsersEntity

$users:=ds.Users.query("name = :1"; $credentials.name)
$user:=$users.first()

If ($user#Null) //the user is known
	If (Verify password hash($credentials.password; $user.password))
		Session.setPrivileges("vip")
	Else

		return "Wrong password"
	End if
Else
        return "Wrong user"
End if
```

Para llamar a la función `authentify()`:

**POST** `127.0.0.1:8111/rest/$catalog/authentify`

Corpo do pedido:

```json
[{"name":"Henry",
"password":"123"}]
```
