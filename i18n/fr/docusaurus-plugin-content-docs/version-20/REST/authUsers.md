---
id: authUsers
title: Sessions et utilisateurs
---

Les requêtes REST peuvent bénéficier des [sessions utilisateurs web](WebServer/sessions.md), offrant des fonctionnalités supplémentaires telles que la gestion de requêtes multiples, le partage de données entre les process du client web, et les privilèges utilisateur.

La première étape à suivre pour ouvrir une session REST sur le serveur 4D, consiste à authentifier l'utilisateur qui envoie la requête.


## Authentification des utilisateurs

Vous connectez un utilisateur à votre application en appelant [`$directory/login`]($directory.md#directorylogin) dans une requête POST incluant le nom et le mot de passe de l'utilisateur dans l'en-tête. Cette requête appelle la méthode base `On REST Authentication` (si elle existe), où vous pouvez vérifier les informations d'identification de l'utilisateur (voir l'exemple ci-dessous).

## Ouverture des sessions

Lorsque les [sessions évolutives sont activées](WebServer/sessions.md#enabling-sessions) (recommandé), si la méthode base `On REST Authentication` retourne `true`, une session utilisateur est alors automatiquement ouverte et vous pouvez la gérer via l'objet `Session` et [l'API Session](API/SessionClass.md). Les requêtes REST ultérieures réutilisent le même cookie de session.

Si la méthode base `On REST Authentication` n'a pas été définie, une session `guest` est ouverte.

## Mode préemptif

Sur 4D Server, les requêtes REST sont automatiquement traitées par des process préemptifs, **même en mode interprété**. Vous devez vous assurer que votre code est [conforme à l'exécution préemptive](../WebServer/preemptiveWeb.md#writing-thread-safe-web-server-code).

> To debug interpreted web code on the server machine, make sure the debugger is [attached to the server](../Debugging/debugging-remote.md) or [to a remote machine](../Debugging/debugging-remote.md#attaching-the-debugger-to-a-remote-4d-client). Les process Web passent alors en mode coopératif et le code du serveur Web peut être débogué.

Avec 4D monoposte, le code interprété s'exécute toujours en mode coopératif.

## Exemple

Dans cet exemple, l'utilisateur saisit son adresse email et son mot de passe dans une page html qui requête [`$directory/login`]($directory.md#directorylogin) dans un POST (il est recommandé d'utiliser une connexion HTTPS pour envoyer la page html). La méthode base `On REST Authentication` est appelée afin de vous permettre d’évaluer ces identifiants et de définir la session.

La page de connexion HTML :

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

Lorsque la page de connexion est envoyée au serveur, la méthode base `On REST Authentication` est appelée :

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

> Dès qu'elle a été appelée et qu'elle a renvoyé `True`, la méthode base `On REST Authentication` n'est plus appelée dans la session.

La méthode projet `fillSession` initialise la session utilisateur, par exemple :

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
