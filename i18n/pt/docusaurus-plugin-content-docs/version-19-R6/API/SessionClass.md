---
id: SessionClass
title: Session
---

Os objetos Session são devolvidos pelo comando [`Session`](#session) quando [são habilitadas as sessões escaláveis em seu projeto](WebServer/sessions.md#enabling-sessions). O objeto Session é criado e mantido automaticamente pelo servidor web 4D para controlar a sessão de um cliente web (por exemplo, um navegador). Esse objeto oferece ao desenvolvedor web uma interface para a sessão de usuário, permitindo gerenciar privilégios, armazenar dados contextuais, partilhar informação entre processos e lançar processos preemptivos relacionados a sessão.

Para obter informação detalhada sobre a implementação da sessão, consulte [Sessões do servidor web](WebServer/sessions.md).

### Resumo

|                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.clearPrivileges().Summary --> |
| [<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.expirationDate.Summary -->        |
| [<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.hasPrivilege().Summary -->          |
| [<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.idleTimeout.Summary -->                 |
| [<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.isGuest().Summary -->                         |
| [<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.setPrivileges().Summary -->       |
| [<!-- INCLUDE #SessionClass.storage.Syntax -->](#storage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.storage.Summary -->                             |
| [<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.userName.Summary -->                          |

## Session

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |

</details>

<!-- REF #_command_.Session.Syntax -->

**Session** : 4D. Session<!-- END REF -->


<!-- REF #_command_.Session.Params -->
| Parameter  | Tipo        |    | Descrção                                  |
| ---------- | ----------- |:--:| ----------------------------------------- |
| Resultados | 4D. Session | <- | Session object|<!-- END REF --> |

#### Descrção

The `Session` command <!-- REF #_command_.Session.Summary -->returns the `Session` object corresponding to the current scalable user web session<!-- END REF -->.

Este comando só funciona quando [estão ativadas as sessões escaláveis](WebServer/sessions.md#enabling-sessions). Devolve *Null* quando as sessões estiverem desabilitadas ou quando utilizar sessões herdadas.

Quando se habilitam as sessões escaláveis, o objeto `Sessão` está disponível desde qualquer processo web nos seguintes contextos:

- `On Web Authentication`, `On Web Connection`, e métodos database`On REST Authentication`,
- As [funções Data Model Class](ORDA/ordaClasses.md) ORDA chamadas pelas petições REST,
- código processado a través das etiquetas 4D nas páginas semidinâmicas (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)
- os métodos projeto com o atributo "Available through 4D tags and URLs (4DACTION...)" e chamados através de 4DACTION/ urls.

#### Exemplo

Se definiu o método `action_Session` com o atributo "Available through 4D tags and URLs". Pode chamar ao método introduzindo a URL abaixo no navegador:

```
IP:port/4DACTION/action_Session
```

```4d
  //método action_Session
 Case of
    :(Session#Null)
       If(Session.hasPrivilege("WebAdmin")) //chamada da função hasPrivilege
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
| Parameter | Tipo |  | Descrção                                                   |
| --------- | ---- |::| ---------------------------------------------------------- |
|           |      |  | Does not require any parameters|<!-- END REF --> |

#### Descrção

The `.clearPrivileges()` function <!-- REF #SessionClass.clearPrivileges().Summary -->removes all the privileges associated to the session<!-- END REF -->. Summary -->devolve True se o privilegio estiver associado à sessão, ou então False em caso contrário<!-- END REF -->.

#### Exemplo

```4d
//Invalidate a session
var $isGuest : Boolean Session.clearPrivileges()
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

#### Descrção

The `.expirationDate` property contains <!-- REF #SessionClass.expirationDate.Summary -->the expiration date and time of the session cookie<!-- END REF -->. O valor se expressa como texto no formato ISO 8601: `YYYY-MM-DDTHH:MM:SS.mmmZ`.

Essa propriedade é**apenas leitura**. É recalculada automaticamente se modificar o valor da propriedade [`.idleTimeout`](#idletimeout).

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

<!-- REF #SessionClass.hasPrivilege().Syntax -->

**.hasPrivilege**( *privilege* : Text ) : Boolean<!-- END REF -->


<!-- REF #SessionClass.hasPrivilege().Params -->
| Parameter  | Tipo     |    | Descrção                                                                            |
| ---------- | -------- |:--:| ----------------------------------------------------------------------------------- |
| privilege  | Text     | <- | Nome do privilegio a verificar                                                      |
| Resultados | Booleano | <- | True se a sessão tiver *privilege*, False caso contrário|<!-- END REF --> |

#### Descrção

The `.hasPrivilege()` function <!-- REF #SessionClass.hasPrivilege().Summary -->returns True if the privilege is associated to the session, and False otherwise<!-- END REF -->.

#### Exemplo

Se quiser comprovar se o privilégio "WebAdmin" está associado à sessão:

```4d
If (Session.hasPrivilege("WebAdmin"))
 //Access is granted, do nothing Else
 //Display an authentication page End if
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

#### Descrção

The `.idleTimeout` property contains <!-- REF #SessionClass.idleTimeout.Summary -->the inactivity session timeout (in minutes), after which the session is automatically closed by 4D<!-- END REF -->.

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
| Parameter  | Tipo     |    | Descrção                                                                               |
| ---------- | -------- |:--:| -------------------------------------------------------------------------------------- |
| Resultados | Booleano | <- | True se a sessão for uma sessão Guest, False caso contrário|<!-- END REF --> |

#### Descrção

The `.isGuest()` function <!-- REF #SessionClass.isGuest().Summary -->returns True if the session is a Guest session (i.e. it has no privileges)<!-- END REF -->.

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

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |

</details>

<!-- REF #SessionClass.setPrivileges().Syntax -->

**.setPrivileges**( *privilege* : Text )<br/>**.setPrivileges**( *privileges* : Collection )<br/>**.setPrivileges**( *settings* : Object )<!-- END REF -->


<!-- REF #SessionClass.setPrivileges().Params -->
| Parameter  | Tipo       |    | Descrção                                                                                    |
| ---------- | ---------- |:--:| ------------------------------------------------------------------------------------------- |
| privilege  | Text       | -> | Nome do privilégio                                                                          |
| privileges | Collection | -> | Collection de nomes de privilégios                                                          |
| settings   | Objeto     | -> | Objetos com as propriedades "privilégios" (string ou collection)|<!-- END REF --> |

#### Descrção

The `.setPrivileges()` function <!-- REF #SessionClass.setPrivileges().Summary -->associates the privilege(s) defined in the parameter to the session<!-- END REF -->.

- No parâmetro *privilege*, passe uma string contendo um nome de privilégio (ou vários nomes de privilégio separados por vígulas).

- No parâmetro *privileges*, passe uma coleção de strings contendo nomes de privilégios.

- No parâmetro *settings*, passe um objeto contendo as propriedades abaixo:

| Propriedade | Tipo               | Descrção                                           |
| ----------- | ------------------ | -------------------------------------------------- |
| privileges  | Text ou Collection | <li>Strings contendo um nome de privilégio ou</li><li>Collection de strings contendo nomes de privilégios</li> |
| userName    | Text               | Nome de usuário associado à sessão (opcional)      |

Se a propriedade `privileges` conter um nome de privilégio inválido, é ignorado.

> Na implementação atual, só o privilégio "WebAdmin" está disponível.

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

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |

</details>

<!-- REF #SessionClass.storage.Syntax -->

**.storage** : Object<!-- END REF -->

#### Descrção

The `.storage` property contains <!-- REF #SessionClass.storage.Summary -->a shared object that can be used to store information available to all requests of the web client<!-- END REF -->.

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

#### Descrção

The `.userName` property contains <!-- REF #SessionClass.userName.Summary -->the user name associated to the session<!-- END REF -->. Pode usá-la para identificar o usuário dentro de seu código.

Essa propriedade é uma string vazia como padrão. Pode ser estabelecida usando a propriedade `privileges` da função [`setPrivileges()`](#setprivileges).

Essa propriedade é**apenas leitura**.

<!-- END REF -->
