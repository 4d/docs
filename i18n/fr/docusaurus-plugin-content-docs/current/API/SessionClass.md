---
id: SessionClass
title: Session
---

Les objets de session sont retournés par la commande [`Session`](../commands/session.md). Ces objets fournissent au développeur une interface permettant de gérer la session utilisateur courante et d'exécuter des actions telles que le stockage de données contextuelles, le partage d'informations entre les process de la session, le lancement de process préemptifs liés à la session ou (uniquement pour le web) la gestion des [privilèges](../ORDA/privileges.md).

### Types de sessions

Les types de sessions suivants sont pris en charge par cette classe :

- [**Session utilisateur Web**](WebServer/sessions.md) : Les sessions utilisateur Web sont disponibles lorsque [les sessions évolutives (scalable sessions) sont activées dans votre projet](WebServer/sessions.md#enabling-sessions). Elles sont utilisées pour les connexions Web et REST, et peuvent se voir attribuer des privilèges.
- [**Session utilisateur client distant**](../Desktop/clientServer.md#remote-user-sessions) : Dans les applications client/serveur, les utilisateurs distants ont leurs propres sessions gérées sur le serveur.
- [**Stored procedures session**](https://doc.4d.com/4Dv20/4D/20/4D-Server-and-the-4D-Language.300-6330554.en.html): All stored procedures executed on the server share the same virtual user session.
- [**Session autonome**](../Project/overview.md#development) : objet session local retourné dans une application mono-utilisateur (utile dans les phases de développement et de test des applications client/serveur).

:::note

La disponibilité des propriétés et des fonctions de l'objet `Session` dépend du type de session.

:::

### Sommaire

|                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)<br/><!-- INCLUDE #SessionClass.clearPrivileges().Summary --> |
| [<!-- INCLUDE #SessionClass.createOTP().Syntax -->](#createotp)<br/><!-- INCLUDE #SessionClass.createOTP().Summary -->                   |
| [<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)<br/><!-- INCLUDE #SessionClass.expirationDate.Summary -->        |
| [<!-- INCLUDE #SessionClass.getPrivileges().Syntax -->](#getprivileges)<br/><!-- INCLUDE #SessionClass.getPrivileges().Summary -->       |
| [<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)<br/><!-- INCLUDE #SessionClass.hasPrivilege().Summary -->          |
| [<!-- INCLUDE #SessionClass.id.Syntax -->](#id)<br/><!-- INCLUDE #SessionClass.id.Summary -->                                            |
| [<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)<br/><!-- INCLUDE #SessionClass.idleTimeout.Summary -->                 |
| [<!-- INCLUDE #SessionClass.info.Syntax -->](#info)<br/><!-- INCLUDE #SessionClass.info.Summary -->                                      |
| [<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)<br/><!-- INCLUDE #SessionClass.isGuest().Summary -->                         |
| [<!-- INCLUDE #SessionClass.restore().Syntax -->](#restore)<br/><!-- INCLUDE #SessionClass.restore().Summary -->                         |
| [<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)<br/><!-- INCLUDE #SessionClass.setPrivileges().Summary -->       |
| [<!-- INCLUDE #SessionClass.storage.Syntax -->](#storage)<br/><!-- INCLUDE #SessionClass.storage.Summary -->                             |
| [<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)<br/><!-- INCLUDE #SessionClass.userName.Summary -->                          |

<!-- REF SessionClass.clearPrivileges().Desc -->

## .clearPrivileges()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R6   | Ajout         |

</details>

<!-- REF #SessionClass.clearPrivileges().Syntax -->**.clearPrivileges()** : Boolean<!-- END REF -->

<!-- REF #SessionClass.clearPrivileges().Params -->

| Paramètres | Type    |                             | Description                     |
| ---------- | ------- | :-------------------------: | ------------------------------- |
| Résultat   | Boolean | <- | True si l'exécution est réussie |

<!-- END REF -->

#### Description

:::note

Cette fonction ne fait rien et retourne toujours **True** avec les sessions client distants, procédure stockée et autonomes.

:::

La fonction `.clearPrivileges()` <!-- REF #SessionClass.clearPrivileges().Summary -->supprime tous les privilèges associés à la session et retourne **True** si l'exécution a réussi<!-- END REF -->. En résultat, la session devient automatiquement une session Guest.

#### Exemple

```4d
//Invalider une session utilisateur web
var $isGuest : Boolean
var $isOK : Boolean

$isOK:=Session.clearPrivileges()
$isGuest:=Session.isGuest() //$isGuest est True
```

<!-- END REF -->

<!-- REF SessionClass.createOTP().Desc -->

## .createOTP()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20 R9   | Ajout         |

</details>

<!-- REF #SessionClass.createOTP().Syntax -->**.createOTP** ( { *lifespan* : Integer } ) : Text <!-- END REF -->

<!-- REF #SessionClass.createOTP().Params -->

| Paramètres | Type    |                             | Description                       |
| ---------- | ------- | :-------------------------: | --------------------------------- |
| lifespan   | Integer |              ->             | Session token lifespan in seconds |
| Résultat   | Text    | <- | UUID of the session               |

<!-- END REF -->

#### Description

:::note

This function is only available with web user sessions. It returns an empty string in other contexts.

:::

The `.createOTP()` function <!-- REF #SessionClass.createOTP().Summary -->creates a new OTP (One Time Passcode) for the session and returns its token UUID<!-- END REF -->. This token is unique to the session in which it was generated.

For more information about the OTP tokens, please refer to [this section](../WebServer/sessions.md#session-token-otp).

By default, if the *lifespan* parameter is omitted, the token is created with the same lifespan as the [`.idleTimeOut`](#idletimeout) of the session. You can set a custom timeout by passing a value in seconds in *lifespan* (the minimum value is 10 seconds, *lifespan* is reset to 10 if a smaller value is passed). If an expired token is used to restore a web user session, it is ignored.

The returned token can then be used in exchanges with third-party applications or websites to securely identify the session. For example, the session OTP token can be used with a payment application.

#### Exemple

```4d
var $token : Text
$token := Session.createOTP( 60 ) //the token is valid for 1 mn
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

Cette propriété est uniquement disponible avec les sessions web.

:::

La propriété `.expirationDate` contient <!-- REF #SessionClass.expirationDate.Summary -->la date et l'heure d'expiration du cookie de session<!-- END REF -->. La valeur est exprimée sous forme de texte au format ISO 8601 : `YYYY-MM-DDTHH:MM:SS.mmmZ`.

Cette propriété est en **lecture seule**. Elle est automatiquement recalculée si la valeur de la propriété [`.idleTimeout`](#idletimeout) est modifiée.

#### Exemple

```4d
var $expiration : Text
$expiration:=Session.expirationDate //ex : "2021-11-05T17:10:42Z"
```

<!-- END REF -->

<!-- REF SessionClass.getPrivileges().Desc -->

## .getPrivileges()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20 R6   | Ajout         |

</details>

<!-- REF #SessionClass.getPrivileges().Syntax -->**.getPrivileges**() : Collection<!-- END REF -->

<!-- REF #SessionClass.getPrivileges().Params -->

| Paramètres | Type       |                             | Description                                                   |
| ---------- | ---------- | :-------------------------: | ------------------------------------------------------------- |
| Résultat   | Collection | <- | Collection de noms de privilèges (chaînes) |

<!-- END REF -->

#### Description

La fonction `.getPrivileges()` <!-- REF #SessionClass.getPrivileges().Summary -->renvoie une collection contenant tous les noms de privilèges associés à la session<!-- END REF -->.

Avec les sessions client distant, procédures stockées et autonomes, cette fonction retourne une collection contenant uniquement "WebAdmin".

:::info

Les privilèges sont assignés à une Session en utilisant la fonction [`setPrivileges()`](#setprivileges).

:::

#### Exemple

Les rôles suivants [`roles.json`](../ORDA/privileges.md#rolesjson-file) ont été définis :

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

Le rôle de la session est attribué dans une fonction de datastore `authentify()` :

```4d
  //Datastore Class

exposed Function authentify($role : Text) : Text
	Session.clearPrivileges()
	Session.setPrivileges({roles: $role})
```

En supposant que la fonction `authentify()` soit appelée avec le rôle "Medium" :

```4d
var $privileges : Collection
$privileges := Session.getPrivileges()
//$privileges: ["simple","medium"]
```

#### Voir également

[.setPrivileges()](#setprivileges)<br/>
[Permissions : Inspecter les privilèges de la session pour faciliter le débogage (article de blog)](https://blog.4d.com/permissions-inspect-the-privileges-in-the-session-for-an-easy-debugging)

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

| Paramètres | Type    |                             | Description                                           |
| ---------- | ------- | :-------------------------: | ----------------------------------------------------- |
| privilege  | Text    |              ->             | Nom du privilège à vérifier                           |
| Résultat   | Boolean | <- | Vrai si la session dispose du *privilege*, sinon Faux |

<!-- END REF -->

#### Description

La fonction `.hasPrivilege()` <!-- REF #SessionClass.hasPrivilege().Summary -->renvoie True si le *privilege* est associé à la session, et False sinon<!-- END REF -->.

Avec les sessions client distant, procédures stockées et autonomes, cette fonction retourne toujours True, quel que soit le *privilege*.

#### Exemple

Vous voulez vérifier si le privilège "WebAdmin" est associé à la session utilisateur web :

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

La propriété `.id` contient <!-- REF #SessionClass.id.Summary -->l'identifiant unique (UUID) de la session utilisateur<!-- END REF -->. Avec 4D Server, cette chaîne unique est automatiquement assignée par le serveur à chaque session et vous permet d'identifier ses process.

:::tip

Vous pouvez utiliser cette propriété pour obtenir l'objet [`.storage`](#storage) d'une session grâce à la commande [`Session storage`](../commands/session-storage.md) .

:::

<!-- END REF -->

<!-- REF SessionClass.idleTimeout.Desc -->

## .idleTimeout

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |

|18 R6|Added|

</details>

<!-- REF #SessionClass.idleTimeout.Syntax -->**.idleTimeout** : Integer<!-- END REF -->

#### Description

:::note

Cette propriété est uniquement disponible avec les sessions web.

:::

La propriété `.idleTimeout` contient <!-- REF #SessionClass.idleTimeout.Summary -->le délai maximal d'inactivité de session (en minutes), au-delà duquel la session est automatiquement fermée par 4D<!-- END REF -->.

Si cette propriété n'est pas définie, sa valeur par défaut est 60 (1h).

Lorsque cette propriété est définie, la propriété [`.expirationDate`](#expirationdate) est mise à jour en conséquence.

> La valeur ne peut pas être &#060; 60 ; si une valeur inférieure est définie, le timeout est élevé à 60.

Cette propriété est en **lecture-écriture**.

#### Exemple

```4d
If (Session.isGuest())
		// La session Guest se ferme après 60 minutes d'inactivité
	Session.idleTimeout:=60
Else
		// Les autres sessions se ferment après 120 minutes d'inactivité
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

Cette propriété est uniquement disponible avec les sessions clients distants, procédures stockées et autonomes.

:::

La propriété `.info` <!-- REF #SessionClass.info.Summary -->décrit le client distant ou la session de procédure stockée sur le serveur, ou la session autonome<!-- END REF -->.

:::note

- L'objet `.info` est le même objet que celui retourné dans la propriété "session" par la commande [`Process activity`](../commands/process-activity.md) pour les sessions de clients distants et procédures stockées.
- L'objet `.info` est le même objet que celui retourné par la commande [`Session info`](../commands/session-info.md) pour une session autonome.

:::

L'objet `.info` contient les propriétés suivantes:

| Propriété        | Type          | Description                                                                                                                                                                                                                    |
| ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| type             | Text          | Type de session : "remote", "storedProcedure", "standalone"                                                                                                                                                    |
| userName         | Text          | Nom d'utilisateur 4D (même valeur que [`.userName`](#username))                                                                                                                                             |
| machineName      | Text          | Sessions distantes : nom de la machine distante. Session procédures stockées : nom de la machine serveur. Session autonome : nom de la machine |
| systemUserName   | Text          | Sessions distantes : nom de la session système ouverte sur la machine distante.                                                                                                                |
| IPAddress        | Text          | Adresse IP de la machine distante                                                                                                                                                                                              |
| hostType         | Text          | Type d'hôte : "windows" ou "mac"                                                                                                                                                                               |
| creationDateTime | Date ISO 8601 | Date et heure de création de la session. Session autonome : date et heure de démarrage de l'application                                                                                        |
| state            | Text          | État de la session : "active", "postponed", "sleeping"                                                                                                                                                         |
| ID               | Text          | UUID de session (même valeur que [`.id`](#id))                                                                                                                                                              |
| persistentID     | Text          | Sessions distantes : ID persistant de la session                                                                                                                                                               |

:::note

`.info` étant une propriété calculée, il est recommandé de l'appeler une fois et de la stocker dans une variable locale si vous souhaitez effectuer un traitement sur ses propriétés.

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

| Paramètres | Type    |                             | Description                                      |
| ---------- | ------- | :-------------------------: | ------------------------------------------------ |
| Résultat   | Boolean | <- | Vrai s'il s'agit d'une session Guest, sinon Faux |

<!-- END REF -->

#### Description

:::note

Cette fonction retourne toujours **False** avec les sessions clients distants, procédures stockées et autonomes.

:::

La fonction `.isGuest()` <!-- REF #SessionClass.isGuest().Summary -->renvoie True si la session est une session Guest (c'est-à-dire qu'elle n'a aucun privilège)<!-- END REF -->.

#### Exemple

Dans la méthode base `On Web Connection` :

```4d
If (Session.isGuest())
 //Faire quelque chose pour l'utilisateur invité
End if
```

<!-- END REF -->

<!-- REF SessionClass.restore().Desc -->

## .restore()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20 R9   | Ajout         |

</details>

<!-- REF #SessionClass.restore().Syntax -->**.restore** ( *token* : Text ) : Boolean <!-- END REF -->

<!-- REF #SessionClass.restore().Params -->

| Paramètres | Type    |                             | Description                                                                        |
| ---------- | ------- | :-------------------------: | ---------------------------------------------------------------------------------- |
| token      | Text    |              ->             | Session token UUID                                                                 |
| Résultat   | Boolean | <- | True if the current session has been successfully replaced by the session in token |

<!-- END REF -->

#### Description

:::note

This function is only available with web user sessions. It returns False in other contexts.

:::

The `.restore()` function <!-- REF #SessionClass.restore().Summary -->replaces the current web user session with their original session corresponding to the *token* UUID<!-- END REF -->. Session's storage and privileges are restored.

If the original user session has been correctly restored, the function returns `true`.

The function returns `false` if:

- the session token has already been used,
- the session token has expired,
- the session token does not exist,
- the original session itself has expired.

In this case, the current web user session is left untouched (no session is restored).

#### Exemple

In a singleton called by a custom HTTP Request handler:

```4d
shared singleton Class constructor()

Function callback($request : 4D.IncomingMessage) : 4D.OutgoingMessage
   Session.restore($request.urlQuery.state) 
```

#### Voir également

[`.createOTP()`](#createotp)

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

| Paramètres | Type       |                             | Description                                                                         |
| ---------- | ---------- | :-------------------------: | ----------------------------------------------------------------------------------- |
| privilege  | Text       |              ->             | Nom de privilège                                                                    |
| privileges | Collection |              ->             | Collection de noms de privilèges                                                    |
| settings   | Object     |              ->             | Objet contenant une propriété "privileges" (texte ou collection) |
| Résultat   | Boolean    | <- | True si l'exécution est réussie                                                     |

<!-- END REF -->

#### Description

:::note

Cette fonction ne fait rien et retourne toujours **False** avec les sessions client distants, procédures stockées et autonomes.

:::

La fonction `.setPrivileges()` <!-- REF #SessionClass.setPrivileges().Summary -->associe le ou les privilège(s) et/ou rôle(s) défini(s) en paramètre à la session et renvoie **True** si l'exécution a réussi<!-- END REF -->.

- Dans le paramètre *privilege*, passez une chaîne contenant un nom de privilège (ou plusieurs noms de privilèges séparés par des virgules).

- Dans le paramètre *privileges*, passez une collection de chaînes contenant des noms de privilèges.

- Dans le paramètre *settings*, passez un objet contenant les propriétés suivantes :

| Propriété  | Type               | Description                                                                                                      |
| ---------- | ------------------ | ---------------------------------------------------------------------------------------------------------------- |
| privileges | Text ou Collection | <li>Chaîne contenant un nom de privilège, ou</li><li>Collection de chaînes contenant des noms de privilèges</li> |
| roles      | Text ou Collection | <li>Chaîne contenant un rôle, ou</li><li>Collection de chaînes contenant des rôles</li>                          |
| userName   | Text               | Nom d'utilisateur à associer à la session (optionnel)                                         |

:::note

Les privilèges et les rôles sont définis dans le fichier [`roles.json`](../ORDA/privileges.md#rolesjson-file) du projet. Pour plus d'informations, veuillez vous reporter à la section [**Privileges**](../ORDA/privileges.md).

:::

Si la propriété `privileges` ou `roles` contient un nom qui n'est pas déclaré dans le fichier [`roles.json`](../ORDA/privileges.md#rolesjson-file), il est ignoré.

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

#### Voir également

[.getPrivileges()](#getprivileges)

<!-- END REF -->

<!-- REF SessionClass.storage.Desc -->

## .storage

<details><summary>Historique</summary>

| Release | Modifications                                                             |
| ------- | ------------------------------------------------------------------------- |
| 20 R5   | Prise en charge des sessions utilisateurs distants et procédures stockées |
| 18 R6   | Ajout                                                                     |

</details>

<!-- REF #SessionClass.storage.Syntax -->**.storage** : Object<!-- END REF -->

#### Description

La propriété `.storage` contient <!-- REF #SessionClass.storage.Summary -->un objet partagé qui peut être utilisé pour stocker des informations disponibles pour tous les process de la session<!-- END REF -->.

Lorsqu'un objet `Session` est créé, la propriété `.storage` est vide. Puisqu'il s'agit d'un objet partagé, cette propriété sera disponible dans l'objet `Storage` du serveur.

> Tout comme l'objet `Storage` du serveur, la propriété `.storage` est toujours "single" : l'ajout d'un objet partagé ou d'une collection partagée à `.storage` ne crée pas de groupe partagé.

Cette propriété est elle-même en **lecture seulement** mais elle retourne un objet en lecture-écriture.

:::tip

Vous pouvez obtenir la propriété `.storage` d'une session en utilisant la commande [`Session storage`](../commands/session-storage.md).

:::

#### Exemple de session Web

Vous voulez stocker l'adresse IP du client dans la propriété `.storage`. Vous pouvez écrire dans la méthode base `On Web Authentication` :

```4d
If (Session.storage.clientIP=Null) //first access
    Use (Session.storage)
        Session.storage.clientIP:=New shared object("value"; $clientIP)
    End use
End if
```

#### Exemple de session distante

Vous voulez partager des données entre les process de la même session :

```4d
Use (Session.storage)
 Session.storage.settings:=New shared object("property"; $value; "property2"; $value2)
End use
```

<!-- END REF -->

<!-- REF SessionClass.userName.Desc -->

## .userName

<details><summary>Historique</summary>

| Release | Modifications                                                             |
| ------- | ------------------------------------------------------------------------- |
| 20 R5   | Prise en charge des sessions utilisateurs distants et procédures stockées |
| 18 R6   | Ajout                                                                     |

</details>

<!-- REF #SessionClass.userName.Syntax -->**.userName** : Text<!-- END REF -->

#### Description

La propriété `.userName` contient <!-- REF #SessionClass.userName.Summary -->le nom d'utilisateur associé à la session<!-- END REF -->. Vous pouvez vous en servir pour identifier l'utilisateur dans votre code.

- Avec les sessions web, cette propriété est une chaîne vide par défaut. Elle peut être définie via la propriété `privileges` de la fonction [`setPrivileges()`](#setprivileges).
- Avec les sessions clients distants et procédures stockées, cette propriété retourne le même nom d'utilisateur que la commande [`Current user`](../commands-legacy/current-user.md).
- Avec les sessions autonomes, cette propriété contient "designer" ou le nom défini avec la commande [`SET USER ALIAS`](../commands-legacy/set-user-alias.md).

Cette propriété est en **lecture seule**.

<!-- END REF -->
