---
id: authUsers
title: Usuários e sessões
---

Os pedidos REST podem beneficiar das [sessões usuário Web](WebServer/sessions.md), fornecendo funcionalidades adicionais, como o tratamento de vários pedidos, a partilha de dados entre os processos do cliente Web e os privilégios do usuário.

Como primeiro passo para abrir uma sessão REST no servidor 4D, o usuário que envia a solicitude deve estar autenticado.


## Autenticação de usuários

Pode iniciar a sessão de um usuário em sua aplicação passando o nome e a senhar de usuário em  [`$directory/login`]($directory.md#directorylogin). Este pedido chama o método base `On REST Authentication` (se existir), onde pode verificar as credenciais do usuário (ver exemplo abaixo).

## Abertura de sessões

Quando [sessões escaláveis estão activadas](WebServer/sessions.md#enabling-sessions) (recomendado), se o método base `On REST Authentication` devolver `true`, é automaticamente aberta uma sessão usuario, que pode ser tratada através do objeto `Session` e da [API Session](API/SessionClass.md). Os pedidos REST subsequentes reutilizarão o mesmo cookie de sessão.

Se o método base `On REST Authentication` não tiver sido definido, é aberta uma sessão `guest`.

## Modo preventivo

No servidor 4D, as solicitações REST são tratadas automaticamente através de processos preventivos, **mesmo no modo interpretado**. Você precisa ter certeza de que seu código é [compatível com uma execução preventiva](../WebServer/preemptiveWeb.md#writing-thread-safe-web-server-code).

> Para depurar o código web interpretado na máquina do servidor, certifique-se de que o depurador é [ligado ao servidor](../Debugging/debugging-remote.md) ou [para uma máquina remota](../Debugging/debugging-remote.md). Os processos web então alterne para o modo cooperativo e o código do servidor web pode ser depurado.

With 4D single-user, interpreted code is always run in cooperative mode.

## Exemplo

Neste exemplo, o usuário introduz o seu e-mail e palavra-passe numa página html que solicita [`$directory/login`]($directory.md#directorylogin) num POST (recomenda-se a utilização de uma ligação HTTPS para enviar a página html). O método base `On REST Authentication` é chamado para validar as credenciais e definir a sessão.

A página de início de sessão em HTML:

![alt-text](../assets/en/REST/login.png)


```html
<html><body bgcolor="#ffffff">

<div id="demo">
 <FORM name="myForm"> Email: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/> Password: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>
<button type="button" onclick="onClick()"> Login
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

Quando a página de início de sessão é enviada para o servidor, o método base `On REST Authentication` é chamado:

```4d
    //On REST Authentication

#DECLARE($userId : Text; $password : Text) -> $Accepted : Boolean
var $sales : cs. SalesPersonsEntity

$Accepted:=False

 //A '/rest' URL has been called with headers username-4D and password-4D If ($userId#"")
    $sales:=ds. SalesPersons.query("email = :1"; $userId).first()
    If ($sales#Null)
        If (Verify password hash($password; $sales.password))
            fillSession($sales)
            $Accepted:=True
        End if 
    End if End if 
```

> Assim que tiver sido chamado e devolvido `True`, o método base `On REST Authentication` deixa de ser chamado na sessão.

O método projeto `fillSession` inicializa a sessão usuário, por exemplo:

```4d
#DECLARE($sales : cs. SalesPersonsEntity)
var $info : Object

$info:=New object()
$info.userName:=$sales.firstname+" "+$sales.lastname Session.setPrivileges($info) Use (Session.storage)
    If (Session.storage.myTop3=Null)
        Session.storage.myTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)
    End if End use
```
