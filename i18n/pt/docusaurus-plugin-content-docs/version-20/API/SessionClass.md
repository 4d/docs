---
id: SessionClass
title: Session
---

Os objetos Session são devolvidos pelo comando [`Session`](#session) quando [são habilitadas as sessões escaláveis em seu projeto](WebServer/sessions.md#enabling-sessions). O objeto Session é criado e mantido automaticamente pelo servidor web 4D para controlar a sessão de um cliente web (por exemplo, um navegador). Esse objeto oferece ao desenvolvedor web uma interface para a sessão de usuário, permitindo gerenciar privilégios, armazenar dados contextuais, partilhar informação entre processos e lançar processos preemptivos relacionados a sessão.

Para obter informação detalhada sobre a implementação da sessão, consulte [Sessões do servidor web](WebServer/sessions.md).

### Resumo


|                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.clearPrivileges().Summary -->|
| [<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.expirationDate.Summary -->|
| [<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.hasPrivilege().Summary -->|
| [<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.idleTimeout.Summary -->|
| [<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.isGuest().Summary -->|
| [<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.setPrivileges().Summary -->|
| [<!-- INCLUDE #SessionClass.storage.Syntax -->](#storage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.storage.Summary -->|
| [<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.userName.Summary -->|




## Session

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #_command_.Session.Syntax -->**Session** : 4D. Session<!-- END REF -->


<!-- REF #_command_.Session.Params -->
| Parâmetro  | Tipo        |    | Descrição                                  |
| ---------- | ----------- |:--:| ------------------------------------------ |
| Resultados | 4D. Session | <- | Objecto Session|<!-- END REF -->


|


#### Descrição

O comando `Session` <!-- REF #_command_.Session.Summary -->devolve o objecto `Sessão` correspondente à actual sessão web escalável do utilizador<!-- END REF -->.

Este comando só funciona quando [estão ativadas as sessões escaláveis](WebServer/sessions.md#enabling-sessions). Devolve *Null* quando as sessões estiverem desabilitadas ou quando utilizar sessões herdadas.

Quando se habilitam as sessões escaláveis, o objeto `Sessão` está disponível desde qualquer processo web nos seguintes contextos:

- `On Web Authentication`, `On Web Connection`, e métodos database`On REST Authentication`,
- [`Em Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) e [`Em Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action) métodos de base de dados para pedidos móveis,
- as [funções Data Model Class](ORDA/ordaClasses.md) ORDA chamadas pelas petições REST,
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

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #SessionClass.clearPrivileges().Syntax -->**.clearPrivileges()**<!-- END REF -->


<!-- REF #SessionClass.clearPrivileges().Params -->
| Parâmetro | Tipo |  | Descrição                                             |
| --------- | ---- |::| ----------------------------------------------------- |
|           |      |  | Não exige nenhum parâmetro|<!-- END REF -->


|


#### Descrição

A função `.clearPrivileges()` <!-- REF #SessionClass.clearPrivileges().Summary -->retira todos os privilégios associados à sessão<!-- END REF -->. Como resultado, a sessão torna-se automaticamente uma sessão de convidado.


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

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #SessionClass.expirationDate.Syntax -->**.expirationDate** : Text<!-- END REF -->

#### Descrição

A propriedade `.expirationDate` contém <!-- REF #SessionClass.expirationDate.Summary -->a data e hora de expiração do cookie da sessão<!-- END REF -->. .

Essa propriedade é **apenas leitura**. É recalculada automaticamente se modificar o valor da propriedade [`.idleTimeout`](#idletimeout).

#### Exemplo

```4d
var $expiration : Text
$expiration:=Session.expirationDate //por exemplo "2021-11-05T17:10:42Z"
```

<!-- END REF -->




<!-- REF SessionClass.hasPrivilege().Desc -->
## .hasPrivilege()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #SessionClass.hasPrivilege().Syntax -->**.hasPrivilege**( *privilege* : Text ) : Boolean<!-- END REF -->


<!-- REF #SessionClass.hasPrivilege().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                                           |
| ---------- | ---------- |:--:| ----------------------------------------------------------------------------------- |
| privilege  | Text       | <- | Nome do privilegio a verificar                                                      |
| Resultados | Parâmetros | <- | True se a sessão tiver *privilege*, False caso contrário|<!-- END REF -->


|


#### Descrição

A função `.hasPrivilege()` <!-- REF #SessionClass.hasPrivilege().Summary -->retorna Verdadeiro se o privilégio estiver associado à sessão, e Falso de outra forma<!-- END REF -->.


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

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #SessionClass.idleTimeout.Syntax -->**.idleTimeout** : Integer<!-- END REF -->

#### Descrição

A propriedade `.idleTimeout` contém <!-- REF #SessionClass.idleTimeout.Summary -->o tempo limite da sessão de inatividade (em minutos), após o qual a sessão é automaticamente encerrada por 4D<!-- END REF -->.

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

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #SessionClass.isGuest().Syntax -->**.isGuest()** : Boolean<!-- END REF -->


<!-- REF #SessionClass.isGuest().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                                              |
| ---------- | ---------- |:--:| -------------------------------------------------------------------------------------- |
| Resultados | Parâmetros | <- | True se a sessão for uma sessão Guest, False caso contrário|<!-- END REF -->

|

#### Descrição

A função `.isGuest()` <!-- REF #SessionClass.isGuest().Summary -->retorna True se a sessão for uma sessão de Convidado (ou seja, não tem privilégios)<!-- END REF -->.


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

| Release | Mudanças                                    |
| ------- | ------------------------------------------- |
| 19 R8   | Suporte da propriedade "roles" das Settings |
| 18 R6   | Adicionado                                  |

</details>

<!-- REF #SessionClass.setPrivileges().Syntax -->**.setPrivileges**( *privilege* : Text )<br/>**.setPrivileges**( *privileges* : Collection )<br/>**.setPrivileges**( *settings* : Object )<!-- END REF -->


<!-- REF #SessionClass.setPrivileges().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                                                   |
| ---------- | ---------- |:--:| ------------------------------------------------------------------------------------------- |
| privilege  | Text       | -> | Nome do privilégio                                                                          |
| privileges | Collection | -> | Collection de nomes de privilégios                                                          |
| settings   | Object     | -> | Objetos com as propriedades "privilégios" (string ou collection)|<!-- END REF -->

|

#### Descrição

A função `.setPrivileges()` <!-- REF #SessionClass.setPrivileges().Summary -->associa à sessão o(s) privilégio(s) definido(s) no parâmetro<!-- END REF -->.

- No parâmetro *privilege*, passe uma string contendo um nome de privilégio (ou vários nomes de privilégio separados por vígulas).

- No parâmetro *privileges*, passe uma coleção de strings contendo nomes de privilégios.

- No parâmetro *settings*, passe um objeto contendo as propriedades abaixo:

| Propriedade | Tipo               | Descrição                                           |
| ----------- | ------------------ | --------------------------------------------------- |
| privileges  | Text ou Collection | <li>Strings contendo um nome de privilégio ou</li><li>Collection de strings contendo nomes de privilégios</li>  |
| roles       | Text ou Collection | <li>Strings contendo um papel ou</li><li>Coleção de strings contendo papéis</li> |
| userName    | Text               | Nome de usuário associado à sessão (opcional)       |

:::info

Os privilégios e papéis são definidos no arquivo [`roles.json`](../ORDA/privileges.md#rolesjson-file) do projeto. Para mais informações, consulte por favor a secção [**Privileges**](../ORDA/privileges.md).

:::

Se a propriedade `privilegios` ou `roles` conter um nome que não é declarado no arquivo [`roles.json`](../ORDA/privileges.md#rolesjson-file), ele é ignorado.

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

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #SessionClass.storage.Syntax -->**.storage** : Object<!-- END REF -->

#### Descrição

A propriedade `.storage` contém <!-- REF #SessionClass.storage.Summary -->um objeto partilhado que pode ser utilizado para armazenar informação disponível para todos os pedidos do cliente da web<!-- END REF -->.

Quando um objeto `Session` for criado, a propriedade `.storage` é vazia. Já que é um objeto partilhado, essa propriedade estará disponível no objeto `Storage` do servidor.

> Da mesma forma que o objeto `Storage` do servidor, a propriedade `.storage` sempre será "single": adicionar um objeto partilhado ou uma collection partilhada a `.storage` não cria um grupo partilhado.

Esas propriedade é **read only** mas retorna um objeto  read-write.

#### Exemplo

Se quiser armazenar a IP do cliente na propriedade `.storage`. Pode escrever no método de banco de dados `On Web Authentication`:

```4d
If (Session.storage.clientIP=Null) //first access
    Use (Session.storage)
        Session.storage.clientIP:=New shared object("value"; $clientIP)
    End use End if

```

<!-- END REF -->





<!-- REF SessionClass.userName.Desc -->
## .userName

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #SessionClass.userName.Syntax -->**.userName** : Text<!-- END REF -->

#### Descrição

A propriedade `.userName` contém <!-- REF #SessionClass.userName.Summary -->o nome de usuário associado à sessão<!-- END REF -->. Pode usá-la para identificar o usuário dentro de seu código.

Essa propriedade é uma string vazia como padrão. Pode ser estabelecida usando a propriedade `privileges` da função [`setPrivileges()`](#setprivileges).

Essa propriedade é **apenas leitura**.



<!-- END REF -->
