---
id: authUsers
title: Users and sessions
---

REST requests can benefit from [web user sessions](WebServer/sessions.md), providing extra features such as multiple requests handling, data sharing between the web client processes, and user privileges.

La première étape à suivre pour ouvrir une session REST sur le serveur 4D, consiste à authentifier l'utilisateur qui envoie la requête.


## Authentification des utilisateurs

You log in a user to your application by calling [`$directory/login`]($directory.md#directorylogin) in a POST request including the user's name and password in the header. This request calls the `On REST Authentication` database method (if it exists), where you can check the user's credentials (see example below).

## Ouverture des sessions

Lorsque les [sessions évolutives sont activées](WebServer/sessions.md#enabling-sessions) (recommandé), si la méthode base `On REST Authentication` retourne `true`, une session utilisateur est alors automatiquement ouverte et vous pouvez la gérer via l'objet `Session` et [l'API Session](API/SessionClass.md). Subsequent REST requests will reuse the same session cookie.

If the `On REST Authentication` database method has not been defined, a `guest` session is opened.


## Mode préemptif

On 4D Server, REST requests are automatically handled through preemptive processes, **even in interpreted mode**. You need to make sure that your code is [compliant with a preemptive execution](../WebServer/preemptiveWeb.md#writing-thread-safe-web-server-code).

> To debug interpreted web code on the server machine, make sure the debugger is [attached to the server](../Debugging/debugging-remote.md) or [to a remote machine](../Debugging/debugging-remote.md#attaching-the-debugger-to-a-remote-4d-client). Les process Web passent alors en mode coopératif et le code du serveur Web peut être débogué.

Avec 4D monoposte, le code interprété s'exécute toujours en mode coopératif.


## Exemple

In this example, the user enters their email and password in an html page that requests [`$directory/login`]($directory.md#directorylogin) in a POST (it is recommended to use an HTTPS connection to send the html page). The `On REST Authentication` database method is called to validate the credentials and to set the session.

The HTML login page:

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

When the login page is sent to the server, the `On REST Authentication` database method is called:

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

> As soon as it has been called and returned `True`, the `On REST Authentication` database method is no longer called in the session.

The `fillSession` project method initializes the user session, for example:

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
