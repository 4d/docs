---
id: SessionClass
title: Session
---

Session objects are returned by the [`Session`](#session) command when [scalable sessions are enabled in your project](WebServer/sessions.md#enabling-sessions). The Session object is automatically created and maintained by the 4D web server to control the session of a web client (e.g. a browser). This object provides the web developer with an interface to the user session, allowing to manage privileges, store contextual data, share information between processes, and launch session-related preemptive processes.

For detailed information about the session implementation, please refer to the [web server Sessions](WebServer/sessions.md) section.

### Resumo


|                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.clearPrivileges().Summary -->|
| [<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.expirationDate.Summary -->|
| [<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.hasPrivilege().Summary -->|
| [<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.idleTimeout.Summary -->|
| [<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.isGuest().Summary -->|
| [<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.setPrivileges().Summary -->|
| [<!-- INCLUDE #SessionClass.storage.Syntax -->](#storage)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.storage.Summary -->|
| [<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.userName.Summary -->|




## Session

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |
</details>

<!-- REF #_command_.Session.Syntax -->
**Session** : 4D.Session<!-- END REF -->


<!-- REF #_command_.Session.Params -->
| Parameter | Type       |    | Description    |
| --------- | ---------- |:--:| -------------- |
| Result    | 4D.Session | <- | Session object |
<!-- END REF -->


#### Description

O comando `Session` <!-- REF #_command_.Session.Summary -->devolve o objeto `Session` correspondente à sessão web atual do usuário escalável<!-- END REF -->.

Este comando só funciona quando [estão ativadas as sessões escaláveis](WebServer/sessions.md#enabling-sessions). Devolve *Null* quando as sessões estiverem desabilitadas ou quando utilizar sessões herdadas.

Quando se habilitam as sessões escaláveis, o objeto `Sessão` está disponível desde qualquer processo web nos seguintes contextos:

- `On Web Authentication`, `On Web Connection`, and `On REST Authentication` database methods,
- ORDA [Data Model Class functions](ORDA/ordaClasses.md) called with REST requests,
- code processed through 4D tags in semi-dynamic pages (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)
- project methods with the "Available through 4D tags and URLs (4DACTION...)" attribute and called through 4DACTION/ urls.


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
       WEB SEND TEXT("4DACTION --> Sesion is null")
 End case
```



<!-- REF SessionClass.clearPrivileges().Desc -->
## .clearPrivileges()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |

</details>

<!-- REF #SessionClass.clearPrivileges().Syntax -->
**.clearPrivileges()**<!-- END REF -->

<!-- REF #SessionClass.clearPrivileges().Params -->
| Parameter | Type |  | Description                     |
| --------- | ---- |::| ------------------------------- |
|           |      |  | Does not require any parameters |
<!-- END REF -->


#### Description

A função `.clearPrivileges()` <!-- REF #SessionClass.clearPrivileges().Summary -->elimina todos os privilégios associados à sessão<!-- END REF -->. Como resultado, a seção se converte automaticamente em uma sessão de convidado.


#### Exemplo

```4d
//Invalidate a session
var $isGuest : Boolean  

Session.clearPrivileges()
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

<!-- REF #SessionClass.expirationDate.Syntax -->
**.expirationDate** : Text<!-- END REF -->

#### Description

A propriedade `.expirationDate` contém <!-- REF #SessionClass.expirationDate.Summary -->a data e hora de expiração da cookie de sessão<!-- END REF -->. O valor se expressa como texto no formato ISO 8601: `YYYY-MM-DDTHH:MM:SS.mmmZ`.

Essa propriedade é**apenas leitura**. É recalculada automaticamente se modificar o valor da propriedade [`.idleTimeout`](#idletimeout).

#### Exemplo

```4d
var $expiration : Text
$expiration:=Session.expirationDate //eg "2021-11-05T17:10:42Z"
```

<!-- END REF -->




<!-- REF SessionClass.hasPrivilege().Desc -->
## .hasPrivilege()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |
</details>

<!-- REF #SessionClass.hasPrivilege().Syntax -->
**.hasPrivilege**( *privilege* : Text ) : Boolean<!-- END REF -->

<!-- REF #SessionClass.hasPrivilege().Params -->
| Parameter | Type     |    | Description                                              |
| --------- | -------- |:--:| -------------------------------------------------------- |
| privilege | Texto    | <- | Nome do privilegio a verificar                           |
| Result    | Booleano | <- | True se a sessão tiver *privilege*, False caso contrário |
<!-- END REF -->


#### Description

A função `.hasPrivilege()` <!-- REF #SessionClass.hasPrivilege().Summary -->devolve True se o privilegio estiver associado à sessão, ou então False em caso contrário<!-- END REF -->.


#### Exemplo

Se quiser comprovar se o privilégio "WebAdmin" está associado à sessão:

```4d
If (Session.hasPrivilege("WebAdmin"))
    //Access is granted, do nothing
Else
    //Display an authentication page

End if
```

<!-- END REF -->

<!-- REF SessionClass.idleTimeout.Desc -->
## .idleTimeout

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |

</details>

<!-- REF #SessionClass.idleTimeout.Syntax -->
**.idleTimeout** : Integer<!-- END REF -->

#### Description

A propriedade `.idleTimeout` contiene <!-- REF #SessionClass.idleTimeout.Summary -->o tempo de inatividade da sessão (em minutos), depois da qual a sessão é fechada automaticamente por 4D<!-- END REF -->.

Se não se definir esta propriedade, o valor padrão é 60 (1h).

Quando se definir esta propriedade, a propriedade [`.expirationDate`](#expirationdate) é atualizada em consequência.

> The value cannot be less than 60: if a lower value is set, the timeout is raised up to 60.


Essa propriedade é**apenas escrita**.

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


<!-- REF SessionClass.isGuest().Desc -->
## .isGuest()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |

</details>

<!-- REF #SessionClass.isGuest().Syntax -->
**.isGuest()** : Boolean<!-- END REF -->

<!-- REF #SessionClass.isGuest().Params -->
| Parameter | Type     |    | Description                                                 |
| --------- | -------- |:--:| ----------------------------------------------------------- |
| Result    | Booleano | <- | True se a sessão for uma sessão Guest, False caso contrário |
<!-- END REF -->

#### Description

A função `.isGuest()` <!-- REF #SessionClass.isGuest().Summary -->devolve True se a sessão for uma sessão Guest (ou seja, não tem privilégios)<!-- END REF -->.


#### Exemplo

No método base `On Web Connection`:

```4d
If (Session.isGuest())
    //Do something for Guest user
End if
```


<!-- END REF -->


<!-- REF SessionClass.setPrivileges().Desc -->
## .setPrivileges()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |

</details>

<!-- REF #SessionClass.setPrivileges().Syntax -->
**.setPrivileges**( *privilege* : Text )<br>**.setPrivileges**( *privileges* : Collection )<br>**.setPrivileges**( *settings* : Object )<!-- END REF -->

<!-- REF #SessionClass.setPrivileges().Params -->
| Parameter  | Type       |    | Description                                                      |
| ---------- | ---------- |:--:| ---------------------------------------------------------------- |
| privilege  | Texto      | -> | Nome do privilégio                                               |
| privileges | Collection | -> | Collection de nomes de privilégios                               |
| settings   | Objeto     | -> | Objetos com as propriedades "privilégios" (string ou collection) |
<!-- END REF -->

#### Description

A função `.setPrivileges()` <!-- REF #SessionClass.setPrivileges().Summary -->associa os privilégios definidos no parâmetro à sessão<!-- END REF -->.

- In the *privilege* parameter, pass a string containing a privilege name (or several comma-separated privilege names).

- In the *privileges* parameter, pass a collection of strings containing privilege names.

- In the *settings* parameter, pass an object containing the following properties:

| Property   | Type               | Description                                        |
| ---------- | ------------------ | -------------------------------------------------- |
| privileges | Text ou Collection | <li>Strings contendo um nome de privilégio ou</li><li>Collection de strings contendo nomes de privilégios</li> |
| userName   | Texto              | Nome de usuário associado à sessão (opcional)      |

Se a propriedade `privileges` conter um nome de privilégio inválido, é ignorado.

> In the current implementation, only the "WebAdmin" privilege is available.

Como padrão quando não houver um privilégio associado à sessão, a sessão é [Guest session](#isguest).

A propriedade [`userName`](#username) está disponível no nível do objeto da sessão (apenas leitura).

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


<!-- END REF -->

<!-- REF SessionClass.storage.Desc -->
## .storage

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |

</details>

<!-- REF #SessionClass.storage.Syntax -->
**.storage** : Object<!-- END REF -->

#### Description

A propriedade `.storage` contém <!-- REF #SessionClass.storage.Summary -->um objeto partilhado que pode ser usado para armazenar informação disponível a todas as petições do cliente web<!-- END REF -->.

Quando um objeto `Session` for criado, a propriedade `.storage` é vazia. Já que é um objeto partilhado, essa propriedade estará disponível no objeto `Storage` do servidor.

> Da mesma forma que o objeto `Storage` do servidor, a propriedade `.storage` sempre será "single": adicionar um objeto partilhado ou uma collection partilhada a `.storage` não cria um grupo partilhado.

Esas propriedade é **read only** mas retorna um objeto  read-write.

#### Exemplo

Se quiser armazenar a IP do cliente na propriedade `.storage`. Pode escrever no método de banco de dados `On Web Authentication`:

```4d
If (Session.storage.clientIP=Null) //first access
    Use (Session.storage)
        Session.storage.clientIP:=New shared object("value"; $clientIP)
    End use 
End if 

```

<!-- END REF -->





<!-- REF SessionClass.userName.Desc -->
## .userName

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |

</details>

<!-- REF #SessionClass.userName.Syntax -->
**.userName** : Text<!-- END REF -->

#### Description

A propriedade `.userName` contém <!-- REF #SessionClass.userName.Summary -->o nome de usuuário associado à sessão<!-- END REF -->. Pode usá-la para identificar o usuário dentro de seu código.

Essa propriedade é uma string vazia como padrão. Pode ser estabelecida usando a propriedade `privileges` da função [`setPrivileges()`](#setprivileges).

Essa propriedade é**apenas leitura**. 



<!-- END REF -->


<style> h2 { background: #d9ebff;}</style>
