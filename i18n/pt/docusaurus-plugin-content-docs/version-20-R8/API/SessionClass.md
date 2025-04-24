---
id: SessionClass
title: Session
---

Os objetos de sessão são retornados pelo comando [`Session`](../commands/session.md). Esses objetos fornecem ao desenvolvedor uma interface que permite gerenciar a sessão atual do usuário e executar ações como armazenar dados contextuais, compartilhar informações entre processos de sessão, iniciar processos preemptivos relacionados à sessão ou (somente na Web) gerenciar [privilégios](../ORDA/privileges.md).

### Tipos de sessão

Os seguintes tipos de sessões são suportados por essa classe:

- [**Sessões de usuário web**](WebServer/sessions.md): sessões de usuário web estão disponíveis quando [sessões escaláveis estão habilitadas em seu projeto](WebServer/sessions.md#enabling-web-sessions). Eles são usados para conexões Web e REST e podem receber privilégios.
- [**Sessões de usuário cliente remoto**](../Desktop/clientServer.md#remote-user-sessions): em aplicações cliente/servidor, os usuários remotos têm suas próprias sessões gerenciadas no servidor.
- [**Sessão de procedimentos armazenados**](https://doc.4d.com/4Dv20/4D/20/Stored-Procedures.300-6330553.en.html): todos os procedimentos armazenados executados no servidor compartilham a mesma sessão de usuário virtual.
- [**Standalone session**](../Project/overview.md#development): Objeto de sessão local retornado em aplicativo de usuário único (útil nas fases de desenvolvimento e teste de aplicativos cliente/servidor).

:::note

A disponibilidade de propriedades e funções no objeto `Session` depende do tipo de sessão.

:::

### Resumo

|                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)<br/><!-- INCLUDE #SessionClass.clearPrivileges().Summary --> |
| [<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)<br/><!-- INCLUDE #SessionClass.expirationDate.Summary -->        |
| [<!-- INCLUDE #SessionClass.getPrivileges().Syntax -->](#getprivileges)<br/><!-- INCLUDE #SessionClass.getPrivileges().Summary -->       |
| [<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)<br/><!-- INCLUDE #SessionClass.hasPrivilege().Summary -->          |
| [<!-- INCLUDE #SessionClass.id.Syntax -->](#id)<br/><!-- INCLUDE #SessionClass.id.Summary -->                                            |
| [<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)<br/><!-- INCLUDE #SessionClass.idleTimeout.Summary -->                 |
| [<!-- INCLUDE #SessionClass.info.Syntax -->](#info)<br/><!-- INCLUDE #SessionClass.info.Summary -->                                      |
| [<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)<br/><!-- INCLUDE #SessionClass.isGuest().Summary -->                         |
| [<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)<br/><!-- INCLUDE #SessionClass.setPrivileges().Summary -->       |
| [<!-- INCLUDE #SessionClass.storage.Syntax -->](#storage)<br/><!-- INCLUDE #SessionClass.storage.Summary -->                             |
| [<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)<br/><!-- INCLUDE #SessionClass.userName.Summary -->                          |

<!-- REF SessionClass.clearPrivileges().Desc -->

## .clearPrivileges()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #SessionClass.clearPrivileges().Syntax -->**.clearPrivileges()** : Boolean<!-- END REF -->

<!-- REF #SessionClass.clearPrivileges().Params -->

| Parâmetro  | Tipo       |                             | Descrição                           |
| ---------- | ---------- | :-------------------------: | ----------------------------------- |
| Resultados | Parâmetros | <- | True se a execução for bem-sucedida |

<!-- END REF -->

#### Descrição

:::note

Esta função não faz nada e sempre retorna **Verdadeiro** com cliente remoto, procedimento armazenado e sessões autônomas.

:::

A função `.clearPrivileges()` <!-- REF #SessionClass.clearPrivileges().Summary -->remove todos os privilégios associados à sessão e retorna **True** se a execução foi bem-sucedida<!-- END REF -->. A menos que esteja no modo ["forceLogin"] (../REST/authUsers.md#force-login-mode), a sessão se torna automaticamente uma sessão de convidado.

:::note

No modo "forceLogin", `.clearPrivileges()` não transforma a sessão em uma sessão Guest, apenas limpa os privilégios da sessão.

:::

#### Exemplo

```4d
//Invalidar uma sessão de usuário da web
var $isGuest : Boolean
var $isOK : Boolean

$isOK:=Session.clearPrivileges()
$isGuest:=Session.isGuest() //$isGuest é True
```

<!-- END REF -->

<!-- REF SessionClass.expirationDate.Desc -->

## .expirationDate

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #SessionClass.expirationDate.Syntax -->**.expirationDate** : Text<!-- END REF -->

#### Descrição

:::note

Essa propriedade só está disponível com sessões de usuário da Web.

:::

A propriedade `.expirationDate` contém <!-- REF #SessionClass.expirationDate.Summary -->a data e a hora de expiração do cookie de sessão<!-- END REF -->. O valor é expresso como texto no formato ISO 8601: `YYYY-MM-DDTHH:MM:SS.mmmZ`.

Essa propriedade é **somente leitura**. Ele será automaticamente recalculado se o valor da propriedade [`.idleTimeout`](#idletimeout) for modificado.

#### Exemplo

```4d
var $expiration : Text
$expiration:=Session.expirationDate //por exemplo "2021-11-05T17:10:42Z"
```

<!-- END REF -->

<!-- REF SessionClass.getPrivileges().Desc -->

## .getPrivileges()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20 R6   | Adicionado |

</details>

<!-- REF #SessionClass.getPrivileges().Syntax -->**.getPrivileges**() : Collection<!-- END REF -->

<!-- REF #SessionClass.getPrivileges().Params -->

| Parâmetro  | Tipo       |                             | Descrição                                                    |
| ---------- | ---------- | :-------------------------: | ------------------------------------------------------------ |
| Resultados | Collection | <- | Coleção de nomes de privilégios (strings) |

<!-- END REF -->

#### Descrição

A função `.getPrivileges()` <!-- REF #SessionClass.getPrivileges().Summary -->retorna uma coleção de todos os nomes de privilégios associados à sessão<!-- END REF -->.

Com cliente remoto, procedimento armazenado e sessões autônomas, essa função retorna uma coleção que contém apenas "WebAdmin".

:::info

Os privilégios são atribuídos a uma sessão usando a função [`setPrivileges()`](#setprivileges).

:::

#### Exemplo

O seguinte arquivo [`roles.json`](../ORDA/privileges.md#rolesjson-file) foi definido:

```json
{
   "privileges":[
      {
         "privilege":"simple",
         "includes":[

         ]
      },
      {
         "privilege":"medium",
         "includes":[
            "simple"
         ]
      }
   ],
   "roles":[
      {
         "role":"Medium",
         "privileges":[
            "medium"
         ]
      }
   ],
   "permissions":{
      "allowed":[

      ]
   }
}
```

O papel de sessão é atribuído em uma função de datastore `authentify()`:

```4d
  //Datastore Class

exposed Function authentify($role : Text) : Text
	Session.clearPrivileges()
	Session.setPrivileges({roles: $role})
```

Assumindo que a função `authentify()` seja chamada com o papel "Medium":

```4d
var $privileges : Collection
$privileges := Session.getPrivileges()
//$privileges: ["simple","medium"]
```

#### Veja também

[.setPrivileges()](#setprivileges)<br/>
[Permissões - Inspecionar os privilégios na sessão para facilitar a depuração (publicação no blog)](https://blog.4d.com/permissions-inspect-the-privileges-in-the-session-for-an-easy-debugging)

<!-- END REF -->

<!-- REF SessionClass.hasPrivilege().Desc -->

## .hasPrivilege()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #SessionClass.hasPrivilege().Syntax -->**.hasPrivilege**( *privilege* : Text ) : Boolean<!-- END REF -->

<!-- REF #SessionClass.hasPrivilege().Params -->

| Parâmetro  | Tipo       |                             | Descrição                                                |
| ---------- | ---------- | :-------------------------: | -------------------------------------------------------- |
| privilege  | Text       |              ->             | Nome do privilegio a verificar                           |
| Resultados | Parâmetros | <- | True se a sessão tiver *privilege*, False caso contrário |

<!-- END REF -->

#### Descrição

A função `.hasPrivilege()` <!-- REF #SessionClass.hasPrivilege().Summary -->retorna True se o *privilege* estiver associado à sessão e False caso contrário<!-- END REF -->.

Com cliente remoto, procedimento armazenado e sessões autônomas, essa função sempre retorna True, independentemente do *privilégio*.

#### Exemplo

Você deseja verificar se o privilégio "WebAdmin" está associado à sessão do usuário da Web:

```4d
If (Session.hasPrivilege("WebAdmin"))
	//Acesso é concedido, não faça nada
Else
	//Exibe uma página de autenticação

End if
```

<!-- END REF -->

<!-- REF SessionClass.id.Desc -->

## .id

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20 R5   | Adicionado |

</details>

<!-- REF #SessionClass.id.Syntax -->**.id** : Text<!-- END REF -->

#### Descrição

A propriedade `.id` contém <!-- REF #SessionClass.id.Summary --> o identificador único (UUID) da sessão do usuário<!-- END REF -->. Com o 4D Server, essa string exclusiva é atribuída automaticamente pelo servidor para cada sessão e permite que você identifique seus processos.

:::tip

Você pode usar essa propriedade para obter o objeto [`.storage`](#storage) de uma sessão graças ao comando [`storage`](../commands/session-storage.md).

:::

<!-- END REF -->

<!-- REF SessionClass.idleTimeout.Desc -->

## .idleTimeout

<details><summary>História</summary>

| Release | Mudanças |
| ------- | -------- |

|v18 R6|Adicionado|

</details>

<!-- REF #SessionClass.idleTimeout.Syntax -->**.idleTimeout** : Integer<!-- END REF -->

#### Descrição

:::note

Essa propriedade só está disponível com sessões de usuário da Web.

:::

A propriedade `.idleTimeout` contém <!-- REF #SessionClass.idleTimeout.Summary -->o tempo limite da sessão de inatividade (em minutos), após o qual a sessão é automaticamente encerrada pelo 4D<!-- END REF -->.

Se não se definir esta propriedade, o valor padrão é 60 (1h).

Quando essa propriedade é definida, a propriedade [`.expirationDate`](#expirationdate) é atualizada de acordo.

> O valor não pode ser inferior a 60: se definir um valor inferior, o tempo de espera se eleva até 60.

Essa propriedade é **leitura escrita**.

#### Exemplo

```4d
If (Session.isGuest())
		// Uma sessão de convidado será fechada após 60 minutos de inatividade
	Session.idleTimeout:=60
Else
		// Outras sessões serão fechadas após 120 minutos de inatividade
	Session.idleTimeout:=120
End if

```

<!-- END REF -->

<!-- REF SessionClass.info.Desc -->

## .info

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20 R5   | Adicionado |

</details>

<!-- REF #SessionClass.info.Syntax -->**.info** : Object<!-- END REF -->

#### Descrição

:::note

Essa propriedade só está disponível com cliente remoto, procedimento armazenado e sessões autônomas.

:::

A propriedade `.info` <!-- REF #SessionClass.info.Summary -->descreve o cliente remoto ou a sessão do procedimento armazenado no servidor, ou a sessão autônoma<!-- END REF -->.

:::note

- O objeto `.info` é o mesmo objeto retornado na propriedade "session" pelo comando [`Process activity`](../commands/process-activity.md) para sessões de procedimento armazenado e cliente remoto.
- O objeto `.info` é o mesmo objeto retornado pelo comando [`Session info`](../commands/session-info.md) para uma sessão autônoma.

:::

O objeto `.info` contém as seguintes propriedades:

| Propriedade      | Tipo          | Descrição                                                                                                                                                                                                                   |
| ---------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type             | Text          | Tipo de sessão: "remote", "storedProcedure", "standalone"                                                                                                                                                   |
| userName         | Text          | Nome de usuário 4D (o mesmo valor que [`.userName`](#username))                                                                                                                                          |
| machineName      | Text          | Sessões remotas: nome da máquina remota. Sessão de procedimentos armazenados: nome da máquina do servidor. Sessão autônoma: nome da máquina |
| systemUserName   | Text          | Sessões remotas: nome da sessão do sistema aberta na máquina remota.                                                                                                                        |
| IPAddress        | Text          | Endereço IP da máquina remota                                                                                                                                                                                               |
| hostType         | Text          | Tipo de host: "windows" ou "mac"                                                                                                                                                                            |
| creationDateTime | Date ISO 8601 | Data e hora de criação da sessão. Sessão autônoma: data e hora da inicialização do aplicativo                                                                                               |
| state            | Text          | Estado da sessão: "ativa", "adiada", "em espera"                                                                                                                                                            |
| ID               | Text          | UUID da sessão (mesmo valor que [`.id`](#id))                                                                                                                                                            |
| persistentID     | Text          | Sessões remotas: ID persistente da sessão                                                                                                                                                                   |

:::note

Desde `. nfo` é uma propriedade computada, é recomendável chamá-lo uma vez e então armazená-lo em uma variável local se você quiser fazer algum processamento em suas propriedades.

:::

<!-- END REF -->

<!-- REF SessionClass.isGuest().Desc -->

## .isGuest()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #SessionClass.isGuest().Syntax -->**.isGuest()** : Boolean<!-- END REF -->

<!-- REF #SessionClass.isGuest().Params -->

| Parâmetro  | Tipo       |                             | Descrição                                                   |
| ---------- | ---------- | :-------------------------: | ----------------------------------------------------------- |
| Resultados | Parâmetros | <- | True se a sessão for uma sessão Guest, False caso contrário |

<!-- END REF -->

#### Descrição

:::note

Essa função sempre retorna **False** com cliente remoto, procedimento armazenado e sessões autônomas.

:::

A função `.isGuest()` <!-- REF #SessionClass.isGuest().Summary -->retorna True se a sessão for uma sessão Guest (ou seja, não tem privilégios)<!-- END REF -->.

#### Exemplo

No método base `On Web Connection`:

```4d
If (Session.isGuest())
	//Fazer algo para o usuário convidado
End if
```

<!-- END REF -->

<!-- REF SessionClass.setPrivileges().Desc -->

## .setPrivileges()

<details><summary>História</summary>

| Release | Mudanças                                    |
| ------- | ------------------------------------------- |
| 19 R8   | Suporte da propriedade "roles" das Settings |
| 18 R6   | Adicionado                                  |

</details>

<!-- REF #SessionClass.setPrivileges().Syntax -->**.setPrivileges**( *privilege* : Text ) : Boolean<br/>**.setPrivileges**( *privileges* : Collection )<br/>**.setPrivileges**( *settings* : Object ) : Boolean<!-- END REF -->

<!-- REF #SessionClass.setPrivileges().Params -->

| Parâmetro  | Tipo       |                             | Descrição                                                                           |
| ---------- | ---------- | :-------------------------: | ----------------------------------------------------------------------------------- |
| privilege  | Text       |              ->             | Nome do privilégio                                                                  |
| privileges | Collection |              ->             | Collection de nomes de privilégios                                                  |
| settings   | Object     |              ->             | Objetos com as propriedades "privilégios" (string ou collection) |
| Resultados | Parâmetros | <- | True se a execução for bem-sucedida                                                 |

<!-- END REF -->

#### Descrição

:::note

Essa função não faz nada e sempre retorna **False** com cliente remoto, procedimento armazenado e sessões autônomas.

:::

A função `.setPrivileges()` <!-- REF #SessionClass.setPrivileges().Summary -->associa os privilégios e/ou papéis definidos no parâmetro para a sessão e retorna **True** se a execução foi bem sucedida <!-- END REF -->.

- No parâmetro *privilege*, passe uma cadeia de caracteres contendo um nome de privilégio (ou vários nomes de privilégio separados por vírgula).

- No parâmetro *privileges*, passe uma coleção de cadeias de caracteres contendo nomes de privilégios.

- No parâmetro *settings*, passe um objeto que contenha as seguintes propriedades:

| Propriedade | Tipo               | Descrição                                                                                                                 |
| ----------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| privileges  | Text ou Collection | <li>String contendo um nome de privilégio, ou</li><li>Coleção de cadeias de caracteres contendo nomes de privilégios</li> |
| roles       | Text ou Collection | <li>String que contém uma função, ou</li><li>Coleção de cadeias de caracteres contendo funções</li>                       |
| userName    | Text               | Nome de usuário associado à sessão (opcional)                                                          |

:::note

Os privilégios e as funções são definidos no arquivo [`roles.json`](../ORDA/privileges.md#rolesjson-file) do projeto. Para obter mais informações, consulte a seção [**Privilégios**](../ORDA/privileges.md).

:::

Se a propriedade `privileges` ou `roles` tiverem um nome que não seja declarado no arquivo [`roles.json`](../ORDA/privileges.md#rolesjson-file), ele será ignorado.

Como padrão quando não houver um privilégio associado à sessão, a sessão é uma [Sessão de convidados](#isguest).

A propriedade [`userName`](#username) está disponível no nível do objeto de sessão (somente leitura).

#### Exemplo

Em um método de autenticação personalizado, deve estabecer o privilégio "WebAdmin" ao usuário:

```4d
var $userOK : Boolean

... //Autenticar o usuário

If ($userOK) //O usuário foi aprovado
  var $info : Object
  $info:=New object()
  $info.privileges:=New collection("WebAdmin")
  Session.setPrivileges($info)
End if

```

#### Veja também

[.getPrivileges()](#getprivileges)

<!-- END REF -->

<!-- REF SessionClass.storage.Desc -->

## .storage

<details><summary>História</summary>

| Release | Mudanças                                                      |
| ------- | ------------------------------------------------------------- |
| 20 R5   | Suporte a sessões de procedimento armazenado e cliente remoto |
| 18 R6   | Adicionado                                                    |

</details>

<!-- REF #SessionClass.storage.Syntax -->**.storage** : Object<!-- END REF -->

#### Descrição

A propriedade `.storage` contém <!-- REF #SessionClass.storage.Summary --> um objeto compartilhado que pode ser usado para armazenar informações disponíveis para todos os processos da sessão<!-- END REF -->.

Quando um objeto `Session` é criado, a propriedade `.storage` está vazia. Como se trata de um objeto compartilhado, essa propriedade estará disponível no objeto `Storage` do servidor.

> Como o objeto `Storage` do servidor, a propriedade `.storage` é sempre "única": adicionar um objeto compartilhado ou uma coleção compartilhada a `.storage` não cria um grupo compartilhado.

Essa propriedade é **apenas de leitura**, mas retorna um objeto de leitura e gravação.

:::tip

Você pode obter a propriedade `.storage` de uma sessão usando o comando [`Session storage`](../commands/session-storage.md).

:::

#### Exemplo de sessão na web

Você deseja armazenar o IP do cliente na propriedade `.storage`. Você pode escrever no método de banco de dados `On Web Authentication`:

```4d
If (Session.storage.clientIP=Null) //first access
    Use (Session.storage)
        Session.storage.clientIP:=New shared object("value"; $clientIP)
    End use End if
```

#### Exemplo de sessão remota

Você deseja compartilhar dados entre processos na mesma sessão:

```4d
Use (Session.storage)
 Session.storage.settings:=New shared object("property"; $value; "property2"; $value2)
End use
```

<!-- END REF -->

<!-- REF SessionClass.userName.Desc -->

## .userName

<details><summary>História</summary>

| Release | Mudanças                                                      |
| ------- | ------------------------------------------------------------- |
| 20 R5   | Suporte a sessões de procedimento armazenado e cliente remoto |
| 18 R6   | Adicionado                                                    |

</details>

<!-- REF #SessionClass.userName.Syntax -->**.userName** : Text<!-- END REF -->

#### Descrição

A propriedade `.userName` contém <!-- REF #SessionClass.userName.Summary -->o nome de usuário associado à sessão<!-- END REF -->. Pode usá-la para identificar o usuário dentro de seu código.

- Com sessões da Web, essa propriedade é uma cadeia de caracteres vazia por padrão. Ele pode ser definido usando a propriedade `privileges` da função [`setPrivileges()`](#setprivileges).
- Com sessões de procedimento remotas e armazenadas, esta propriedade retorna o mesmo nome de usuário que o comando [`usuário atual`](../commands-legacy/current-user.md).
- Com sessões autônomas, essa propriedade contém "designer" ou o nome definido com o comando [`SET USER ALIAS`](../commands-legacy/set-user-alias.md).

Essa propriedade é **somente leitura**.

<!-- END REF -->
