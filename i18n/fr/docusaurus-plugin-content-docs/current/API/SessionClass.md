---
id: SessionClass
title: Session
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Session objects are returned by the [`Session`](#session) command. These objects provide the developer with an interface allowing to manage the current user session and execute actions such as store contextual data, share information between session processes, launch session-related preemptive processes, or (web only) manage [privileges](../ORDA/privileges.md).

### Session types

Three types of sessions are supported by this class:

- [**Web user sessions**](WebServer/sessions.md): Web user sessions are available when [scalable sessions are enabled in your project](WebServer/sessions.md#enabling-sessions). They are used for Web and REST connections, and can be assigned privileges.
- [**Remote client user sessions**](../Desktop/clientServer.md#remote-user-sessions): In client/server applications, remote users have their own sessions managed on the server.
- [**Stored procedures session**](https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html): All stored procedures executed on the server share the same virtual user session.

:::note

The availability of properties and functions in the `Session` object depend on the session type.

:::


### Sommaire


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

<details><summary>Historique</summary>

| Release | Modifications                                          |
| ------- | ------------------------------------------------------ |
| 20 R5   | Support of remote client and stored procedure sessions |
| 18 R6   | Ajout                                                  |

</details>

<!-- REF #_command_.Session.Syntax -->**Session** : 4D.Session<!-- END REF -->


<!-- REF #_command_.Session.Params -->
| Paramètres | Type       |    | Description   |
| ---------- | ---------- |:--:| ------------- |
| Résultat   | 4D.Session | <- | Objet session |
<!-- END REF -->


#### Description

La commande `Session` <!-- REF #_command_.Session.Summary -->returns the `Session` object corresponding to the current user session<!-- END REF -->.

Depending on the process from which the command is called, the current user session can be:

- a web session (when [scalable sessions are enabled](WebServer/sessions.md#enabling-sessions)),
- a remote client session,
- the stored procedures session.

For more information, see the [Session types](#session-types) paragraph.

If the command is called from a non supported context (single-user application, scalable sessions disabled...), it returns *Null*.

#### Web sessions

The `Session` object of web sessions is available from any web process:

- Méthodes base `On Web Authentication`, `On Web Connection`, et `On REST Authentication`,
- le code traité par les balises 4D dans les pages semi-dynamiques (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)
- project methods with the "Available through 4D tags and URLs (4DACTION...)" attribute and called through 4DACTION/ urls,
- Méthodes base [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) et [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action) pour les requêtes mobiles,
- ORDA functions [called with REST requests](../REST/ClassFunctions.md).

For more information on web user sessions, please refer to the [Web Server Sessions](WebServer/sessions.md) section.

#### Remote client sessions

The `Session` object of remote client sessions is available from:

- Project methods that have the [Execute on Server](../Project/code-overview.md#execute-on-server) attribute (they are executed in the "twinned" process of the client process),
- Triggers,
- `On Server Open Connection` and `On Server Shutdown Connection` database methods.

For more information on remote user sessions, please refer to the [**Remote client user sessions**](../Desktop/clientServer.md#remote-user-sessions) paragraph.

#### Stored procedures session

All stored procedure processes share the same virtual user session. The `Session` object of stored procedures is available from:

- methods called with the [`Execute on server`](https://doc.4d.com/4dv20/help/command/en/page373.html) command,
- `On Server Startup`, `On Server Shutdown`, `On Backup Startup`, `On Backup Shutdown`, and `On System event` database methods

For information on stored procedures virtual user session, please refer to the [XXXX](XXX) page.

#### Exemple

Vous avez défini la méthode `action_Session` ayant l'attribut "Disponible via Balises HTML et URLs 4D". Vous appelez la méthode en saisissant l'URL suivant dans votre navigateur :

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
       WEB SEND TEXT("4DACTION --> Session is null")
 End case
```



<!-- REF SessionClass.clearPrivileges().Desc -->
## .clearPrivileges()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R6   | Ajout         |

</details>

<!-- REF #SessionClass.clearPrivileges().Syntax -->**.clearPrivileges()** : Boolean<!-- END REF -->


<!-- REF #SessionClass.clearPrivileges().Params -->
| Paramètres | Type    |    | Description                         |
| ---------- | ------- |:--:| ----------------------------------- |
| Résultat   | Boolean | <- | True if the execution is successful |
<!-- END REF -->


#### Description

:::note

Since privileges are only supported in web user sessions, this function does nothing and always returns **False** in other session types.

:::

La fonction `.clearPrivileges()` <!-- REF #SessionClass.clearPrivileges().Summary -->removes all the privileges associated to the session and returns **True** if the execution was successful<!-- END REF -->. En résultat, la session devient automatiquement une session Guest.


#### Exemple

```4d
//Invalidate a session
var $isGuest : Boolean
var $isOK : Boolean

$isOK:=Session.clearPrivileges()
$isGuest:=Session.isGuest() //$isGuest is True
```

<!-- END REF -->



<!-- REF SessionClass.expirationDate.Desc -->
## .expirationDate

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R6   | Ajout         |

</details>

<!-- REF #SessionClass.expirationDate.Syntax -->**.expirationDate** : Text<!-- END REF -->

#### Description

:::note

This property is only available with web user sessions.

:::

La propriété `.expirationDate` contient <!-- REF #SessionClass.expirationDate.Summary -->la date et l'heure d'expiration du cookie de session<!-- END REF -->. La valeur est exprimée sous forme de texte au format ISO 8601 : `YYYY-MM-DDTHH:MM:SS.mmmZ`.

Cette propriété est en **lecture seule**. Elle est automatiquement recalculée si la valeur de la propriété [`.idleTimeout`](#idletimeout) est modifiée.

#### Exemple

```4d
var $expiration : Text
$expiration:=Session.expirationDate //ex : "2021-11-05T17:10:42Z"
```

<!-- END REF -->




<!-- REF SessionClass.hasPrivilege().Desc -->
## .hasPrivilege()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R6   | Ajout         |

</details>

<!-- REF #SessionClass.hasPrivilege().Syntax -->**.hasPrivilege**( *privilege* : Text ) : Boolean<!-- END REF -->


<!-- REF #SessionClass.hasPrivilege().Params -->
| Paramètres | Type    |    | Description                                           |
| ---------- | ------- |:--:| ----------------------------------------------------- |
| privilege  | Text    | <- | Nom du privilège à vérifier                           |
| Résultat   | Boolean | <- | Vrai si la session dispose du *privilege*, sinon Faux |
<!-- END REF -->


#### Description

:::note

Since privileges are only supported in web user sessions, this function does nothing and always returns **False** in other session types.

:::


La fonction `.hasPrivilege()` <!-- REF #SessionClass.hasPrivilege().Summary -->renvoie Vrai si le privilège est associé à la session, et Faux sinon<!-- END REF -->.


#### Exemple

Vous voulez vérifier si le privilège "WebAdmin" est associé à la session :

```4d
If (Session.hasPrivilege("WebAdmin"))
    //Accès accordé, ne rien faire
Else
    //Afficher une page d'authentification

End if
```

<!-- END REF -->


<!-- REF SessionClass.id.Desc -->
## .id

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20 R5   | Ajout         |

</details>

<!-- REF #SessionClass.id.Syntax -->**.id** : Text<!-- END REF -->

#### Description

La propriété `.id` contient <!-- REF #SessionClass.id.Summary -->the unique identifier (UUID) of the session on the server<!-- END REF -->. This unique string is automatically assigned by the server for each session and allows you to identify its processes. 


<!-- END REF -->



<!-- REF SessionClass.idleTimeout.Desc -->
## .idleTimeout

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R6   | Ajout         |

</details>

<!-- REF #SessionClass.idleTimeout.Syntax -->**.idleTimeout** : Integer<!-- END REF -->

#### Description

:::note

This property is only available with web user sessions.

:::

La propriété `.idleTimeout` contient <!-- REF #SessionClass.idleTimeout.Summary -->le délai maximal d'inactivité de session (en minutes), au-delà duquel la session est automatiquement fermée par 4D<!-- END REF -->.

Si cette propriété n'est pas définie, sa valeur par défaut est 60 (1h).

Lorsque cette propriété est modifiée, la propriété [`.expirationDate`](#expirationdate) est mise à jour en conséquence.

> La valeur ne peut pas être < 60 ; si une valeur inférieure est définie, le timeout est élevé à 60.


Cette propriété est en **lecture-écriture**.

#### Exemple

```4d
If (Session.isGuest())
        // Une session Guest se ferme après 60 minutes d'inactivité.
    Session.idleTimeout:=60
Else
        //Les autres sessions se ferment après 120 minutes d'inactivité.
    Session.idleTimeout:=120
End if

```

<!-- END REF -->


<!-- REF SessionClass.info.Desc -->
## .info

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20 R5   | Ajout         |

</details>

<!-- REF #SessionClass.info.Syntax -->**.info** : Object<!-- END REF -->

#### Description

:::note

This property is only available with remote client and stored procedure sessions.

:::

The `.info` property <!-- REF #SessionClass.info.Summary -->describes the remote client or stored procedure session on the server<!-- END REF -->.

The `.info` object is the same object as the one returned by the [`Get process activity`](https://doc.4d.com/4dv20/help/command/en/page1495.html) command for remote client and stored procedure sessions.

The `.info` object contains the following properties:

| Propriété        | Type          | Description                                                                                        |
| ---------------- | ------------- | -------------------------------------------------------------------------------------------------- |
| type             | Text          | Session type: "remote" or "storedProcedure"                                                        |
| userName         | Text          | 4D user name (same value as [`.userName`](#username))                                              |
| machineName      | Text          | Remote sessions: name of the remote machine. Stored procedures session: name of the server machine |
| systemUserName   | Text          | Remote sessions: name of the system session opened on the remote machine.                          |
| IPAddress        | Text          | IP address of the remote machine                                                                   |
| hostType         | Text          | Host type: "windows" or "mac"                                                                      |
| creationDateTime | Date ISO 8601 | Date and time of session creation                                                                  |
| state            | Text          | Session state: "active", "postponed", "sleeping"                                                   |
| ID               | Text          | Session UUID (same value as [`.id`](#id))                                                          |
| persistentID     | Text          | Session's persistent ID                                                                            |

:::note

Since `.info` is a computed property, it is recommended to call it once and then to store it in a local variable if you want to do some processing on its properties.

:::


<!-- END REF -->


<!-- REF SessionClass.isGuest().Desc -->
## .isGuest()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R6   | Ajout         |

</details>

<!-- REF #SessionClass.isGuest().Syntax -->**.isGuest()** : Boolean<!-- END REF -->


<!-- REF #SessionClass.isGuest().Params -->
| Paramètres | Type    |    | Description                                      |
| ---------- | ------- |:--:| ------------------------------------------------ |
| Résultat   | Boolean | <- | Vrai s'il s'agit d'une session Guest, sinon Faux |
<!-- END REF -->

#### Description

:::note

This function always returns **True** with remote client and stored procedure sessions.

:::

La fonction `.isGuest()` <!-- REF #SessionClass.isGuest().Summary -->retourne True si la session est une session invité (c'est-à-dire qu'elle n'a pas de privilèges)<!-- END REF -->.


#### Exemple

Dans la méthode base `On Web Connection` :

```4d
If (Session.isGuest())
    //Faire quelque chose pour l'utilisateur invité
End if
```


<!-- END REF -->


<!-- REF SessionClass.setPrivileges().Desc -->
## .setPrivileges()

<details><summary>Historique</summary>

| Release | Modifications                                         |
| ------- | ----------------------------------------------------- |
| 19 R8   | Prise en charge de la propriété "roles" dans settings |
| 18 R6   | Ajout                                                 |

</details>

<!-- REF #SessionClass.setPrivileges().Syntax -->**.setPrivileges**( *privilege* : Text ) : Boolean<br/>**.setPrivileges**( *privileges* : Collection )<br/>**.setPrivileges**( *settings* : Object ) : Boolean<!-- END REF -->


<!-- REF #SessionClass.setPrivileges().Params -->
| Paramètres | Type       |    | Description                                                      |
| ---------- | ---------- |:--:| ---------------------------------------------------------------- |
| privilege  | Text       | -> | Nom de privilège                                                 |
| privileges | Collection | -> | Collection de noms de privilèges                                 |
| settings   | Object     | -> | Objet contenant une propriété "privileges" (texte ou collection) |
| Résultat   | Boolean    | <- | True if the execution is successful                              |
<!-- END REF -->

#### Description

:::note

Since privileges are only supported in web user sessions, this function does nothing and always returns **False** in other session types.

:::

La fonction `.setPrivileges()` <!-- REF #SessionClass.setPrivileges().Summary -->associates the privilege(s) and/or role(s) defined in the parameter to the session and returns **True** if the execution was successful<!-- END REF -->.

- Dans le paramètre *privilege*, passez une chaîne contenant un nom de privilège (ou plusieurs noms de privilèges séparés par des virgules).

- Dans le paramètre *privileges*, passez une collection de chaînes contenant des noms de privilèges.

- Dans le paramètre *settings*, passez un objet contenant les propriétés suivantes :

| Propriété  | Type               | Description                                           |
| ---------- | ------------------ | ----------------------------------------------------- |
| privileges | Text ou Collection | <li>Chaîne contenant un nom de privilège, ou</li><li>Collection de chaînes contenant des noms de privilèges</li>   |
| roles      | Text ou Collection | <li>Chaîne contenant un nom de rôle, ou</li><li>Collection de chaînes contenant des noms de roles</li>  |
| userName   | Text               | Nom d'utilisateur à associer à la session (optionnel) |

:::note

Les privilèges et les rôles sont définis dans le fichier [`roles.json`](../ORDA/privileges.md#rolesjson-file) du projet. Pour plus d'informations, veuillez vous reporter à la section [**Privileges**](../ORDA/privileges.md) .

:::

Si la propriété `privileges` ou `roles` contient un nom qui n'est pas déclaré dans le fichier [`roles.json`](../ORDA/privileges.md#rolesjson-file) , elle est ignorée.

Par défaut lorsqu'aucun privilège ou rôle n'est associé à la session, la session est une [session Guest](#isguest).

La propriété [`userName`](#username) est accessible au niveau de l'objet session (lecture seulement).

#### Exemple

Dans une méthode d'authentification personnalisée, vous assignez le privilège "WebAdmin" à l'utilisateur :

```4d
var $userOK : Boolean

... //Authentifier l'utilisateur

If ($userOK) //L'utilisateur a été approuvé
  var $info : Object
  $info:=New object()
  $info.privileges:=New collection("WebAdmin")
  Session.setPrivileges($info)
End if

```


<!-- END REF -->

<!-- REF SessionClass.storage.Desc -->
## .storage

<details><summary>Historique</summary>

| Release | Modifications                                          |
| ------- | ------------------------------------------------------ |
| 20 R5   | Support of remote client and stored procedure sessions |
| 18 R6   | Ajout                                                  |

</details>

<!-- REF #SessionClass.storage.Syntax -->**.storage** : Object<!-- END REF -->

#### Description

La propriété `.storage` contient <!-- REF #SessionClass.storage.Summary -->a shared object that can be used to store information available to all processes of the session<!-- END REF -->.

Lorsqu'un objet `Session` est créé, la propriété `.storage` est vide. Puisqu'il s'agit d'un objet partagé, cette propriété sera disponible dans l'objet `Storage` du serveur.

> Tout comme l'objet `Storage` du serveur, la propriété `.storage` est toujours "single" : l'ajout d'un objet partagé ou d'une collection partagée à `.storage` ne crée pas de groupe partagé.

Cette propriété est elle-même en **lecture seulement** mais elle retourne un objet en lecture-écriture.

<Tabs>

<TabItem value="Web session example">

You want to store the client IP in the `.storage` property. You can write in the `On Web Authentication` database method:

```4d
If (Session.storage.clientIP=Null) //first access
    Use (Session.storage)
        Session.storage.clientIP:=New shared object("value"; $clientIP)
    End use
End if

```
</TabItem>

<TabItem value="Remote session example">

You want to share data between processes in the same session:

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

<details><summary>Historique</summary>

| Release | Modifications                                          |
| ------- | ------------------------------------------------------ |
| 20 R5   | Support of remote client and stored procedure sessions |
| 18 R6   | Ajout                                                  |

</details>

<!-- REF #SessionClass.userName.Syntax -->**.userName** : Text<!-- END REF -->

#### Description

La propriété `.userName` contient <!-- REF #SessionClass.userName.Summary -->le nom d'utilisateur associé à la session<!-- END REF -->. Vous pouvez vous en servir pour identifier l'utilisateur dans votre code.

- With web sessions, this property is an empty string by default. Elle peut être définie via la propriété `privileges` de la fonction [`setPrivileges()`](#setprivileges).
- With remote and stored procedure sessions, this property returns the same user name as the [`Current user`](https://doc.4d.com/4dv20/help/command/en/page182.html) command.

Cette propriété est en **lecture seule**.



<!-- END REF -->
