---
id: SessionClass
title: Session
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Os objetos de sessão são retornados pelo [`Session`](#session) comando. Esses objetos fornecem ao desenvolvedor uma interface que permite gerenciar a sessão atual do usuário e executar ações como armazenar dados contextuais, compartilhar informações entre processos de sessão, iniciar processos preemptivos relacionados à sessão ou (somente na Web) gerenciar [privilégios](../ORDA/privileges.md).

### Tipos de sessão

Três tipos de sessões são suportados por essa classe:

- [**Sessões de usuários da Web**](WebServer/sessions.md): As sessões de usuário da Web estão disponíveis quando [as sessões escalonáveis estão ativadas no seu projeto](WebServer/sessions.md#enabling-sessions). Eles são usados para conexões Web e REST e podem receber privilégios.
- [**Sessões de usuário de cliente remoto**](../Desktop/clientServer.md#remote-user-sessions): Em aplicativos cliente/servidor, os usuários remotos têm suas próprias sessões gerenciadas no servidor.
- [**Sessão de procedimentos armazenados**](https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html): Todos os procedimentos armazenados executados no servidor compartilham a mesma sessão de usuário virtual.

:::note

A disponibilidade de propriedades e funções no objeto `Session` depende do tipo de sessão.

:::


### Resumo


|                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.clearPrivileges().Summary -->|
| [<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.expirationDate.Summary -->|
| [<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.hasPrivilege().Summary -->|
| [<!-- INCLUDE #SessionClass.id.Syntax -->](#id)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.id.Summary -->|
| [<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.idleTimeout.Summary -->|
| [<!-- INCLUDE #SessionClass.info.Syntax -->](#info)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.info.Summary -->|
| [<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.isGuest().Summary -->|
| [<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.setPrivileges().Summary -->|
| [<!-- INCLUDE #SessionClass.storage.Syntax -->](#storage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.storage.Summary -->|
| [<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.userName.Summary -->|




## Session

<details><summary>Histórico</summary>

| Release | Mudanças                                               |
| ------- | ------------------------------------------------------ |
| 20 R5   | Support of remote client and stored procedure sessions |
| 18 R6   | Adicionado                                             |

</details>

<!-- REF #_command_.Session.Syntax -->**Session** : 4D. Session<!-- END REF -->


<!-- REF #_command_.Session.Params -->
| Parâmetro  | Tipo        |    | Descrição       |
| ---------- | ----------- |:--:| --------------- |
| Resultados | 4D. Session | <- | Objecto Session |
<!-- END REF -->


#### Descrição

O comando `Session` <!-- REF #_command_.Session.Summary -->Retorna o objeto `Session` correspondente à sessão do usuário atual<!-- END REF -->.

Dependendo do processo a partir do qual o comando é chamado, a sessão atual do usuário pode ser:

- uma sessão da Web (quando [as sessões escalonáveis estão ativadas](WebServer/sessions.md#enabling-sessions)),
- uma sessão de cliente remoto,
- a sessão de procedimentos armazenados.

Para obter mais informações, consulte o parágrafo [Tipos de sessão](#session-types).

Se o comando for chamado de um contexto não compatível (aplicativo de usuário único, sessões dimensionáveis desativadas...), ele retornará *Null*.

#### Sessões web

O objeto `Session` das sessões da Web está disponível em qualquer processo da Web:

- `On Web Authentication`, `On Web Connection`, e métodos database`On REST Authentication`,
- código processado a través das etiquetas 4D nas páginas semidinâmicas (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)
- os métodos projeto com o atributo "Available through 4D tags and URLs (4DACTION...)" e chamados através de 4DACTION/ urls,
- [`Em Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) e [`Em Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action) métodos de base de dados para pedidos móveis,
- Funções ORDA [chamadas com solicitações REST](../REST/ClassFunctions.md).

Para obter mais informações sobre sessões de usuários da Web, consulte a seção [Sessões do servidor da Web](WebServer/sessions.md).

#### Sessões cliente remoto

O objeto `Session` das sessões de clientes remotos está disponível em:

- Métodos de projeto que têm o atributo [Execute on Server](../Project/code-overview.md#execute-on-server) (são executados no processo "geminado" do processo do cliente),
- Triggers,
- `On Server Abrir Conexão` e `On Server Encerrar Conexão` métodos do banco de dados.

Para obter mais informações sobre sessões de usuários remotos, consulte o [**parágrafo sobre sessões de usuários remotos do cliente**](../Desktop/clientServer.md#remote-user-sessions).

#### a sessão de procedimentos armazenados

Todos os processos de procedimento armazenado compartilham a mesma sessão de usuário virtual. O objeto `Session` dos procedimentos armazenados está disponível em:

- métodos chamados com o comando [`Executar no servidor`](https://doc.4d.com/4dv20/help/command/pt-BR/page373.html),
- `Na inicialização do servidor`, `no desligamento do servidor`, na inicialização do `backup`, `no desligamento do backup` e nos métodos de banco de dados de `eventos do sistema`

For information on stored procedures virtual user session, please refer to the [4D Server and the 4D Language](https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html) page.

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

<!-- REF #SessionClass.clearPrivileges().Syntax -->**.clearPrivileges()** : Boolean<!-- END REF -->


<!-- REF #SessionClass.clearPrivileges().Params -->
| Parâmetro  | Tipo       |    | Descrição                           |
| ---------- | ---------- |:--:| ----------------------------------- |
| Resultados | Parâmetros | <- | True se a execução for bem-sucedida |
<!-- END REF -->


#### Descrição

:::note

Como os privilégios são compatíveis apenas com sessões de usuário da Web, essa função não faz nada e sempre retorna **False** em outros tipos de sessão.

:::

A função `.clearPrivileges()` <!-- REF #SessionClass.clearPrivileges().Summary -->remove todos os privilégios associados à sessão e retorna **True** se a execução foi bem-sucedida<!-- END REF -->. Como resultado, a sessão torna-se automaticamente uma sessão de convidado.


#### Exemplo

```4d
//Invalidar uma sessão
var $isGuest : Boolean
var $isOK : Boolean

$isOK:=Session.clearPrivileges()
$isGuest:=Session.isGuest() //$isGuest é True
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

:::note

Essa propriedade só está disponível com sessões de usuário da Web.

:::

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
| Parâmetro  | Tipo       |    | Descrição                                                |
| ---------- | ---------- |:--:| -------------------------------------------------------- |
| privilege  | Text       | <- | Nome do privilegio a verificar                           |
| Resultados | Parâmetros | <- | True se a sessão tiver *privilege*, False caso contrário |
<!-- END REF -->


#### Descrição

:::note

Como os privilégios são compatíveis apenas com sessões de usuário da Web, essa função não faz nada e sempre retorna **False** em outros tipos de sessão.

:::


A função `.hasPrivilege()` <!-- REF #SessionClass.hasPrivilege().Summary -->retorna Verdadeiro se o privilégio estiver associado à sessão, e Falso de outra forma<!-- END REF -->.


#### Exemplo

Se quiser comprovar se o privilégio "WebAdmin" está associado à sessão:

```4d
If (Session.hasPrivilege("WebAdmin"))
 //Access is granted, do nothing Else
 //Display an authentication page End if
```

<!-- END REF -->


<!-- REF SessionClass.id.Desc -->
## .id

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20 R5   | Adicionado |

</details>

<!-- REF #SessionClass.id.Syntax -->**.id** : Text<!-- END REF -->

#### Descrição

A propriedade `.id` contém <!-- REF #SessionClass.id.Summary -->o identificador exclusivo (UUID) da sessão no servidor<!-- END REF -->. Esta string única é automaticamente atribuída pelo servidor para cada sessão e permite que você identifique seus processos. 


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

:::note

Essa propriedade só está disponível com sessões de usuário da Web.

:::

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


<!-- REF SessionClass.info.Desc -->
## .info

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20 R5   | Adicionado |

</details>

<!-- REF #SessionClass.info.Syntax -->**.info** : Object<!-- END REF -->

#### Descrição

:::note

Essa propriedade só está disponível com sessões de procedimento armazenado e cliente remoto.

:::

A propriedade `.info` <!-- REF #SessionClass.info.Summary -->descreve o cliente remoto ou a sessão do procedimento armazenado no servidor<!-- END REF -->.

O objeto `.info` é o mesmo objeto retornado pelo comando [`Obter atividade do processo`](https://doc.4d.com/4dv20/help/command/pt/page1495.html) para sessões de cliente remoto e de procedimento armazenado.

O objeto `.info` contém as seguintes propriedades:

| Propriedade      | Tipo          | Descrição                                                                                                 |
| ---------------- | ------------- | --------------------------------------------------------------------------------------------------------- |
| type             | Text          | Tipo de sessão: "remote" ou "storedProcedure"                                                             |
| userName         | Text          | Nome de usuário 4D (o mesmo valor de [`.userName`](#username))                                            |
| machineName      | Text          | Sessões remotas: nome da máquina remota. Sessão de procedimentos armazenados: nome da máquina do servidor |
| systemUserName   | Text          | Sessões remotas: nome da sessão do sistema aberta na máquina remota.                                      |
| IPAddress        | Text          | Endereço IP da máquina remota                                                                             |
| hostType         | Text          | Tipo de host: "windows" ou "mac"                                                                          |
| creationDateTime | Date ISO 8601 | Data e hora de criação da sessão                                                                          |
| state            | Text          | Estado da sessão: "ativa", "adiada", "em espera"                                                          |
| ID               | Text          | UUID da sessão (mesmo valor que [`.id`](#id))                                                             |
| persistentID     | Text          | ID persistente da sessão                                                                                  |

:::note

Como `.info` é uma propriedade calculada, é recomendado chamá-la uma vez e depois armazená-la em uma variável local se você deseja fazer algum processamento em suas propriedades.

:::


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
| Parâmetro  | Tipo       |    | Descrição                                                   |
| ---------- | ---------- |:--:| ----------------------------------------------------------- |
| Resultados | Parâmetros | <- | True se a sessão for uma sessão Guest, False caso contrário |
<!-- END REF -->

#### Descrição

:::note

Essa função sempre retorna **True** com sessões de procedimento armazenado e cliente remoto.

:::

A função `.isGuest()` <!-- REF #SessionClass.isGuest().Summary -->retorna Verdadeiro se a sessão for uma sessão de Convidado (ou seja, não tem privilégios)<!-- END REF -->.


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

<!-- REF #SessionClass.setPrivileges().Syntax -->**.setPrivileges**( *privilege* : Text ) : Boolean<br/>**.setPrivileges**( *privileges* : Collection )<br/>**.setPrivileges**( *settings* : Object ) : Boolean<!-- END REF -->


<!-- REF #SessionClass.setPrivileges().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                        |
| ---------- | ---------- |:--:| ---------------------------------------------------------------- |
| privilege  | Text       | -> | Nome do privilégio                                               |
| privileges | Collection | -> | Collection de nomes de privilégios                               |
| settings   | Object     | -> | Objetos com as propriedades "privilégios" (string ou collection) |
| Resultados | Parâmetros | <- | True se a execução for bem-sucedida                              |
<!-- END REF -->

#### Descrição

:::note

Como os privilégios são compatíveis apenas com sessões de usuário da Web, essa função não faz nada e sempre retorna **False** em outros tipos de sessão.

:::

A função `.setPrivileges()` <!-- REF #SessionClass.setPrivileges().Summary -->associa o(s) privilégio(s) e/ou papel(s) definidos no parâmetro para a sessão e retorna **True** se a execução foi bem sucedida<!-- END REF -->.

- No parâmetro *privilege*, passe uma string contendo um nome de privilégio (ou vários nomes de privilégio separados por vígulas).

- No parâmetro *privileges*, passe uma coleção de strings contendo nomes de privilégios.

- No parâmetro *settings*, passe um objeto contendo as propriedades abaixo:

| Propriedade | Tipo               | Descrição                                            |
| ----------- | ------------------ | ---------------------------------------------------- |
| privileges  | Text ou Collection | <li>Strings contendo um nome de privilégio ou</li><li>Collection de strings contendo nomes de privilégios</li>  |
| roles       | Text ou Collection | <li>Strings contendo um papel ou</li><li>Coleção de strings contendo papéis</li> |
| userName    | Text               | Nome de usuário associado à sessão (opcional)        |

:::note

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

| Release | Mudanças                                               |
| ------- | ------------------------------------------------------ |
| 20 R5   | Support of remote client and stored procedure sessions |
| 18 R6   | Adicionado                                             |

</details>

<!-- REF #SessionClass.storage.Syntax -->**.storage** : Object<!-- END REF -->

#### Descrição

A propriedade `.storage` contém <!-- REF #SessionClass.storage.Summary -->um objeto compartilhado que pode ser usado para armazenar informações disponíveis para todos os processos da sessão<!-- END REF -->.

Quando um objeto `Session` for criado, a propriedade `.storage` é vazia. Já que é um objeto partilhado, essa propriedade estará disponível no objeto `Storage` do servidor.

> Da mesma forma que o objeto `Storage` do servidor, a propriedade `.storage` sempre será "single": adicionar um objeto partilhado ou uma collection partilhada a `.storage` não cria um grupo partilhado.

Esas propriedade é **read only** mas retorna um objeto  read-write.

<Tabs>

<TabItem value="Web session example">

Você deseja armazenar o IP do cliente na propriedade `.storage`. Você pode escrever no método de banco de dados `On Web Authentication`:


```4d
If (Session.storage.clientIP=Null) //primeiro acesso
    Use (Session.storage)
        Session.storage.clientIP:=New shared object("value"; $clientIP)
    End use
End if
```

</TabItem>

<TabItem value="Remote session example">

Você deseja compartilhar dados entre processos na mesma sessão:


```4d
Use (Session.storage)
 Session.storage.settings:=New shared object("property"; $value; "property2"; $value2)
End use
```

</TabItem>

</Tabs>

<!-- END REF -->





<!-- REF SessionClass.userName.Desc -->
## .userName

<details><summary>Histórico</summary>

| Release | Mudanças                                               |
| ------- | ------------------------------------------------------ |
| 20 R5   | Support of remote client and stored procedure sessions |
| 18 R6   | Adicionado                                             |

</details>

<!-- REF #SessionClass.userName.Syntax -->**.userName** : Text<!-- END REF -->

#### Descrição

A propriedade `.userName` contém <!-- REF #SessionClass.userName.Summary -->o nome de usuário associado à sessão<!-- END REF -->. Pode usá-la para identificar o usuário dentro de seu código.

- Com sessões da Web, essa propriedade é uma cadeia de caracteres vazia por padrão. Pode ser estabelecida usando a propriedade `privileges` da função [`setPrivileges()`](#setprivileges).
- Com sessões de procedimentos remotos e armazenados, essa propriedade retorna o mesmo nome de usuário que a propriedade [`Usuário atual`](https://doc.4d.com/4dv20/help/command/en/page182.html) comando.

Essa propriedade é**apenas leitura**.



<!-- END REF -->
