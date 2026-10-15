---
id: authUsers
title: Usuarios y sesiones
---

REST requests can benefit from [web user sessions](WebServer/sessions.md), providing extra features such as multiple requests handling, data sharing between the web client processes, and user privileges.

Como primer paso para abrir una sesión REST en el servidor 4D, el usuario que envía la solicitud debe estar autenticado.

## Autenticación de los usuarios

You log in a user to your application by calling [`$directory/login`]($directory.md#directorylogin) in a POST request including the user's name and password in the header. Esta petición llama al método base `On REST Authentication` (si existe), donde se pueden comprobar las credenciales del usuario (ver ejemplo abajo).

## Apertura de las sesiones

When [scalable sessions are enabled](WebServer/sessions.md#enabling-sessions) (recommended), if the `On REST Authentication` database method returns `true`, a user session is then automatically opened and you can handle it through the `Session` object and the [Session API](API/SessionClass.md). Las siguientes peticiones REST reutilizarán la misma cookie de sesión.

Si no se ha definido el método base `On REST Authentication`, se abre una sesión `guest`.

## Modo apropiativo

En 4D Server, las peticiones REST se gestionan automáticamente a través de procesos apropiativos, **incluso en modo interpretado**. Debe asegurarse de que su código es [compatible con una ejecución apropiativa](../WebServer/preemptiveWeb.md#writing-thread-safe-web-server-code).

> Para depurar código web interpretado en la máquina del servidor, asegúrese de que el depurador está [conectado al servidor](../Debugging/debugging-remote.md) o [a una máquina remota](../Debugging/debugging-remote.md). Los procesos web pasan entonces al modo cooperativo y se puede depurar el código del servidor web.

Con 4D monopuesto, el código interpretado siempre se ejecuta en modo cooperativo.

## Ejemplo

En este ejemplo, el usuario introduce su correo electrónico y contraseña en una página html que solicita [`$directory/login`]($directory.md#directorylogin) en un POST (se recomienda utilizar una conexión HTTPS para enviar la página html). Se llama al método base `On REST Authentication` para validar las credenciales y establecer la sesión.

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
