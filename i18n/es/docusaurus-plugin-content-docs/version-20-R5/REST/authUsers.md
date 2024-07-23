---
id: authUsers
title: Usuarios y sesiones
---

When [scalable sessions are enabled](WebServer/sessions.md#enabling-sessions) (recommended), REST requests can create and use [web user sessions](WebServer/sessions.md), providing extra features such as multiple requests handling, data sharing between web client processes, and control of user privileges.

Cuando se abre una sesión de usuario web, puede manejarla a través del objeto `Session` y la [Session API](API/SessionClass.md). Las siguientes peticiones REST reutilizan la misma cookie de sesión.

> - On 4D Server, opening a REST session might require that a free 4D client license is available, depending on the [user login mode](#user-login-modes).<br/>
> - En 4D monopuesto, puede abrir hasta tres sesiones REST para realizar pruebas.

## Modos de inicio de sesión de usuario

El modo de inicio de sesión del usuario le permite controlar cómo las peticiones REST adquieren licencias 4D Client. Puedes elegir entre dos modos de inicio de sesión de usuario: "predeterminado" o "inicio de sesión forzado".

You set the user login mode through the `forceLogin` property in the [`roles.json` file](../ORDA/privileges.md#rolesjson-file):

- el **modo predeterminado** se utiliza si la propiedad "forceLogin" no se encuentra o se define en "false",
- el modo **force login** se utiliza si la propiedad "forceLogin" es "true".

:::caution

If you modify this property, the server must be restarted to take the change into account.

:::

:::note

In Qodly Studio for 4D, the mode can be set using the [**Force login** option](../WebServer/qodly-studio.md#force-login) in the Privileges panel.

:::

### Modo por defecto

In the default mode, any REST request is processed in a web user session that automatically consumes a license (the web user session is created if it does not already exist). Puede utilizar este modo simple si no necesita controlar cuántas licencias se conservan en el servidor.
When the default mode is enabled, you can authenticate users through the `On REST Authentication` database method (see below).

### Forzar el modo de inicio de sesión

En el modo "inicio de sesión forzada", el uso de la licencia está desconectado de las sesiones de usuario web. A license is required only when the [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) is executed, allowing you to control the number of used licenses.

[Descriptive REST requests](#descriptive-rest-requests) are always processed by the server, even if no web user session using a license is opened. En este caso, son procesados a través de sesiones "invitado".

All other REST requests (handling data or executing a function) will only be processed if they are executed within a web session with appropriate privileges, otherwise they return an error. To assign privileges to a web session, you need to execute the [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) function for the session. Ejecutar esta función activa el consumo de la licencia 4D.

Este modo le permite implementar la siguiente secuencia de acceso:

1. En la primera llamada REST (para una llamada webform, por ejemplo), se crea una sesión de usuario web "invitado". It has no privileges, no rights to execute requests other than descriptive requests, no license consumption.
2. You call your exposed [datastore class function](../ORDA/ordaClasses.md#datastore-class) named [`authentify()`](#function-authentify) (created beforehand), in which you check the user credentials and call [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) with appropriate privileges.
3. La petición `/rest/$catalog/authentify` se envía al servidor junto con las credenciales del usuario. Este paso sólo requiere un formulario de acceso básico que no acceda a datos; puede ser un formulario Qodly (llamado a través de la petición `/rest/$getWebForm`).
4. If the user is successfully authentified, a 4D license is consumed on the server and all REST requests are accepted.

![alt-text](../assets/en/REST/force-login-2.jpeg)

### Peticiones REST descriptivas

Las peticiones REST descriptivas pueden procesarse en sesiones de usuario web que no requieren licencias (sesiones "invitado"). Estas peticiones son:

- [`/rest/$catalog`]($catalog.md) requests (e.g. `/rest/$catalog/$all`) - access to available dataclasses
- `/rest/$catalog/authentify` - la función del almacén de datos utilizada para iniciar sesión del usuario
- `/rest/$getWebForm` - la renderización de un formulario Qodly

![alt-text](../assets/en/REST/force-login-1.jpeg)

### `Function authentify`

#### Sintaxis

```4d
exposed Function authentify({params : type}) {-> result : type}
	// código
```

The `authentify()` function must be implemented in the [DataStore class](../ORDA/ordaClasses.md#datastore-class) of the project and must be called through a REST request.

This function is the only available entry point from REST guest sessions when the "force login" mode is enabled: any other function call or data access is rejected until the session acquires appropriate privileges.

:::note

The `authentify()` function can always be executed by a REST guest session, whatever the [`roles.json` file](../ORDA/privileges.md#rolesjson-file) configuration.

:::

The function can receive any authentication or contextual information as [parameter(s)](ClassFunctions.md#parameters) and can return any value. Since this function can only be called from a REST request, parameters must be passed through the body of the POST request.

Esta función debe contener dos partes:

- algún código para identificar y autenticar al remitente de la petición REST,
- if the authentication is successful, a call to [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) that assigns appropriate privileges to the session.

If the function does not call [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges), no privileges are assigned, no license is consumed and subsequent non-descriptive REST requests are rejected.

#### Ejemplo

Sólo quiere conocer a los usuarios para abrir una sesión web en el servidor. Ha creado la siguiente función `authentify()` en la clase datastore:

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

Cuerpo de la petición:

```json
[{"name":"Henry",
"password":"123"}]
```

## Usando `On REST Authentication`

In default login mode (i.e. the "force login" mode is disabled), you can log in a user to your application by calling [`$directory/login`]($directory.md#directorylogin) in a POST request including the user's name and password in the header. Esta petición llama al método base `On REST Authentication` (si existe), donde se pueden comprobar las credenciales del usuario (ver ejemplo abajo).

Si no se ha definido el método base `On REST Authentication`, se abre una sesión `guest`.

### Ejemplo

In this example, the user enters their email and password in an html page that requests [`$directory/login`]($directory.md#directorylogin) in a POST (it is recommended to use an HTTPS connection to send the html page). Se llama al método base `On REST Authentication` para validar las credenciales y establecer la sesión.

Página de inicio de sesión HTML:

![alt-text](../assets/en/REST/login.png)

```html
<html><body bgcolor="#ffffff">

<div id="demo">
	<FORM name="myForm">
Email: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/>
Password: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>
<button type="button" onclick="onClick()">
Login
</button>
<div id="authenticationFailed" style="visibility:hidden;">Authentication failed</div>
</FORM>
</div>

<script>
function sendData(data) {
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (this.status == 200) {      
      window.location = "authenticationOK.shtml";
      }
      else {
      document.getElementById("authenticationFailed").style.visibility = "visible";
      }
  };

  XHR.open('POST', 'http://127.0.0.1:8044/rest/$directory/login'); //rest server address

  XHR.setRequestHeader('username-4D', data.userId);
  XHR.setRequestHeader('password-4D', data.password);
  XHR.setRequestHeader('session-4D-length', data.timeout);

  XHR.send();
};
function onClick()
{
sendData({userId:document.forms['myForm'].elements['userId'].value , password:document.forms['myForm'].elements['password'].value , timeout:120})
}
</script></body></html>

```

Cuando la página de inicio de sesión se envía al servidor, se llama al método base `On REST Authentication`:

```4d
	//On REST Authentication

#DECLARE($userId : Text; $password : Text) -> $Accepted : Boolean
var $sales : cs.SalesPersonsEntity

$Accepted:=False

	//A '/rest' URL has been called with headers username-4D and password-4D
If ($userId#"")
    $sales:=ds.SalesPersons.query("email = :1"; $userId).first()
    If ($sales#Null)
        If (Verify password hash($password; $sales.password))
            fillSession($sales)
            $Accepted:=True
        End if
    End if
End if
```

> Tan pronto como se ha llamado y devuelto `True`, el método base `On REST Authentication` deja de llamarse en la sesión.

El método proyecto `fillSession` inicializa la sesión usuario, por ejemplo:

```4d
#DECLARE($sales : cs.SalesPersonsEntity)
var $info : Object

$info:=New object()
$info.userName:=$sales.firstname+" "+$sales.lastname

Session.setPrivileges($info)

Use (Session.storage)
    If (Session.storage.myTop3=Null)
        Session.storage.myTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)
    End if
End use
```
