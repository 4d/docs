---
id: SessionClass
title: Session
---

Les objets session sont retournés par la commande [`Session`](../commands/session.md). Ces objets fournissent au développeur une interface permettant de gérer la session utilisateur courante et d'exécuter des actions telles que le stockage de données contextuelles, le partage d'informations entre les process de la session, le lancement de process préemptifs liés à la session ou (uniquement pour le web) la gestion des [privilèges](../ORDA/privileges.md).

:::tip Articles de blog sur le sujet

- [Sessions évolutives pour applications web avancées](https://blog.4d.com/scalable-sessions-for-advanced-web-applications/)
- [Permissions : Inspecter les privilèges de la session pour faciliter le débogage](https://blog.4d.com/permissions-inspect-session-privileges-for-easy-debugging/)
- [Générer, partager et utiliser des passcodes à usage unique (OTP) pour les sessions web](https://blog.4d.com/connect-your-web-apps-to-third-party-systems/)

:::

:::tip Related blog posts

- [Sessions évolutives pour applications web avancées](https://blog.4d.com/scalable-sessions-for-advanced-web-applications/)
- [Permissions : Inspecter les privilèges de la session pour faciliter le débogage](https://blog.4d.com/permissions-inspect-session-privileges-for-easy-debugging/)
- [Generate, share and use web sessions One-Time Passcodes (OTP)](https://blog.4d.com/connect-your-web-apps-to-third-party-systems/)

:::

### Types de sessions

Les types de sessions suivants sont pris en charge par cette classe :

- [**Session utilisateur Web**](WebServer/sessions.md) : Les sessions utilisateur Web sont disponibles lorsque [les sessions évolutives (scalable sessions) sont activées dans votre projet](WebServer/sessions.md#enabling-web-sessions). Elles sont utilisées pour les connexions Web et REST, et peuvent se voir attribuer des privilèges.
- [**Session utilisateur client distant**](../Desktop/clientServer.md#remote-user-sessions) : Dans les applications client/serveur, les utilisateurs distants ont leurs propres sessions gérées sur le serveur.
- [**Session des procédures stockées**](https://doc.4d.com/4Dv20/4D/20/4D-Server-and-the-4D-Language.300-6330554.en.html) : Toutes les procédures stockées exécutées sur le serveur partagent la même session utilisateur virtuelle.
- [**Session autonome**](../Project/overview.md#development) : objet session local retourné dans une application mono-utilisateur (utile dans les phases de développement et de test des applications client/serveur).

:::note

La disponibilité des propriétés et des fonctions de l'objet `Session` dépend du type de session.

:::

### Sommaire

|                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)<br/><!-- INCLUDE #SessionClass.clearPrivileges().Summary --> |
| [<!-- INCLUDE #SessionClass.createOTP().Syntax -->](#createotp)<br/><!-- INCLUDE #SessionClass.createOTP().Summary -->                   |
| [<!-- INCLUDE #SessionClass.demote().Syntax -->](#demote)<br/><!-- INCLUDE #SessionClass.demote().Summary -->                            |
| [<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)<br/><!-- INCLUDE #SessionClass.expirationDate.Summary -->        |
| [<!-- INCLUDE #SessionClass.getPrivileges().Syntax -->](#getprivileges)<br/><!-- INCLUDE #SessionClass.getPrivileges().Summary -->       |
| [<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)<br/><!-- INCLUDE #SessionClass.hasPrivilege().Summary -->          |
| [<!-- INCLUDE #SessionClass.id.Syntax -->](#id)<br/><!-- INCLUDE #SessionClass.id.Summary -->                                            |
| [<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)<br/><!-- INCLUDE #SessionClass.idleTimeout.Summary -->                 |
| [<!-- INCLUDE #SessionClass.info.Syntax -->](#info)<br/><!-- INCLUDE #SessionClass.info.Summary -->                                      |
| [<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)<br/><!-- INCLUDE #SessionClass.isGuest().Summary -->                         |
| [<!-- INCLUDE #SessionClass.promote().Syntax -->](#promote)<br/><!-- INCLUDE #SessionClass.promote().Summary -->                         |
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

La fonction `.clearPrivileges()` <!-- REF #SessionClass.clearPrivileges().Summary -->supprime tous les privilèges associés à la session (à l'exception des privilèges promus) et renvoie **True** si l'exécution a réussi<!-- END REF -->.

Hormis si vous êtes en mode ["forceLogin"](../REST/authUsers.md#force-login-mode), la session devient automatiquement une session Invité. En mode "forceLogin", `.clearPrivileges()` ne transforme pas la session en session Invité, elle efface seulement les privilèges de la session.

:::note

Cette fonction ne supprime pas les **privilèges promus** du process web, qu'ils aient été ajoutés par le biais du fichier [roles.json](../ORDA/privileges.md#rolesjson-file) ou de la fonction [`promote()`](#promote).

:::

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

| Paramètres | Type    |                             | Description                                  |
| ---------- | ------- | :-------------------------: | -------------------------------------------- |
| lifespan   | Integer |              ->             | Durée de vie du token de session en secondes |
| Résultat   | Text    | <- | UUID de la session                           |

<!-- END REF -->

#### Description

:::note

Cette fonction est uniquement disponible avec les sessions utilisateur web. Elle retourne une chaîne vide dans les autres contextes.

:::

La fonction `.createOTP()` <!-- REF #SessionClass.createOTP().Summary -->crée un nouvel OTP (One Time Passcode) pour la session et renvoie son UUID de token<!-- END REF -->. Ce token est propre à la session au cours de laquelle il a été généré.

Pour plus d'informations sur les tokens OTP, veuillez consulter [cette section](../WebServer/sessions.md#session-token-otp).

Par défaut, si le paramètre *lifespan* est omis, le token est créé avec la même durée de vie que le [`.idleTimeOut`](#idletimeout) de la session. Vous pouvez définir un délai personnalisé en passant une valeur en secondes dans *lifespan*. Si un token expiré est utilisé pour restaurer la session d'un utilisateur web, il est ignoré.

Le token retourné peut ensuite être utilisé lors d'échanges avec des applications tierces ou des sites Web pour identifier la session de manière sécurisée. Par exemple, le token OTP de session peut être utilisé avec une application de paiement.

#### Exemple

```4d
var $token : Text
$token := Session.createOTP( 60 ) //le token est valable pendant 1 mn
```

<!-- END REF -->

<!-- REF SessionClass.demote().Desc -->

## .demote()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20 R10  | Ajout         |

</details>

<!-- REF #SessionClass.demote().Syntax -->**.demote**( *promoteId* : Integer )<!-- END REF -->

<!-- REF #SessionClass.demote().Params -->

| Paramètres | Type    |     | Description                             |
| ---------- | ------- | :-: | --------------------------------------- |
| promoteId  | Integer |  -> | Id retourné par la fonction `promote()` |

<!-- END REF -->

#### Description

:::note

Cette fonction ne fait rien dans les sessions clients distants, procédures stockées et autonomes.

:::

La fonction `.demote()` <!-- REF #SessionClass.demote().Summary -->supprime du process web le privilège promu dont l'identifiant a été passé dans *promoteId*, s'il a été précédemment ajouté par la fonction [`.promote()`](#promote)<!-- END REF -->.

Si aucun privilège avec *promoteId* n'a été promu à l'aide de [`.promote()`](#promote) dans le process web, la fonction ne fait rien.

Si plusieurs privilèges ont été ajoutés au process web, la fonction `demote()` doit être appelée pour chacun d'entre eux avec le *promoteId* approprié. Les privilèges sont empilés dans l'ordre dans lequel ils ont été ajoutés au process, il est recommandé de dépiler les privilèges dans l'ordre LIFO (*Last In, First Out*).

#### Exemple

```4d
exposed Function search($search : Text) : Collection
	
	var $employees : Collection
	var $promoteId1; $promoteId2 : Integer
	
	$promoteId1:=Session.promote("admin")
	$promoteId2:=Session.promote("superAdmin")
	
	$search:="@"+$search+"@"
	
	$employees:=This.query("type = :1 and lastname = :2"; "Intern"; $search).toCollection()
	
	Session.demote($promoteId2)
	Session.demote($promoteId1)
	
	return $employees
```

#### Voir également

[`.promote()`](#promote)

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

:::note

Cette fonction renvoie les privilèges attribués à une session en utilisant la fonction [`setPrivileges()`](#setprivileges) uniquement. Les privilèges promus ne sont PAS renvoyés par la fonction, qu'ils aient été ajoutés via le fichier [roles.json](../ORDA/privileges.md#rolesjson-file) ou la fonction [`promote()`](#promote).

:::

Avec les sessions client distant, procédures stockées et autonomes, cette fonction retourne une collection contenant uniquement "WebAdmin".

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
[*Permissions – Inspect the privileges in the session for an easy debugging* (article de blog)](https://blog.4d.com/permissions-inspect-the-privileges-in-the-session-for-an-easy-debugging)

<!-- END REF -->

<!-- REF SessionClass.hasPrivilege().Desc -->

## .hasPrivilege()

<details><summary>Historique</summary>

| Release | Modifications                            |
| ------- | ---------------------------------------- |
| 21      | Retourne Vrai pour les privilèges promus |
| 18 R6   | Ajout                                    |

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

:::note

Cette fonction renvoie True pour le *privilège* si elle est appelée depuis une fonction qui a été promue pour ce privilège (soit via le fichier [roles.json](../ORDA/privileges.md#rolesjson-file), soit via la fonction [`promote()`](#promote)).

:::

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

#### Voir également

[*Articles de blog sur cette fonctionnalité*](https://blog.4d.com/?s=hasPrivilege)

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

<!-- REF SessionClass.promote().Desc -->

## .promote()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20 R10  | Ajout         |

</details>

<!-- REF #SessionClass.promote().Syntax -->**.promote**( *privilege* : Text ) : Integer<!-- END REF -->

<!-- REF #SessionClass.promote().Params -->

| Paramètres | Type    |                             | Description                                                     |
| ---------- | ------- | :-------------------------: | --------------------------------------------------------------- |
| privilege  | Text    |              ->             | Nom de privilège                                                |
| Résultat   | Integer | <- | id à utiliser pour l'appel de la fonction [`demote()`](#demote) |

<!-- END REF -->

#### Description

:::note

Cette fonction ne fait rien dans les sessions clients distants, procédures stockées et autonomes.

:::

La fonction `.promote()` <!-- REF #SessionClass.promote().Summary -->ajoute le privilège défini dans le paramètre *privilege* au process courant durant l'exécution de la fonction appelante et renvoie l'identifiant du privilège promu<!-- END REF -->.

L'ajout dynamique de privilèges est utile lorsque les droits d'accès dépendent du contexte d'exécution, qui ne peut pas être entièrement défini dans le fichier "roles.json". Ceci est particulièrement le cas lorsque la même fonction peut être exécutée par des utilisateurs ayant des niveaux d'accès différents. L'utilisation de `.promote()` permet de s'assurer que seul le process en cours bénéficie des privilèges nécessaires, sans affecter les autres.

La fonction ne fait rien et renvoie 0 si :

- le *privilege* n'existe pas dans le fichier [`roles.json`](../ORDA/privileges.md#rolesjson-file),
- le *privilege* est déjà assigné au process courant (en utilisant `.promote()` ou à travers une [action de promotion statique](../ORDA/privileges.md#permission-actions) déclarée pour la fonction appelante dans le fichier [`roles.json`](../ORDA/privileges.md#rolesjson-file)).

Vous pouvez appeler la fonction `promote()` plusieurs fois dans le même process pour ajouter différents privilèges.

L'identifiant renvoyé est incrémenté chaque fois qu'un privilège est ajouté dynamiquement au process.

Pour supprimer un privilège de manière dynamique, appelez la fonction `demote()` avec l'identifiant du privilège.

#### Exemple

Plusieurs utilisateurs se connectent à un seul point d'accès qui sert différentes applications. Un utilisateur de l'application n°1 n'a pas besoin du privilège "super_admin" car il ne crée pas de "VerySensitiveInfo". Un utilisateur de l'application n° 2 a besoin du privilège "super_admin".

Vous pouvez allouer dynamiquement les privilèges appropriés dans la fonction *CreateInfo* :

```4d
exposed Function createInfo($info1 : Text; $info2 : Text)
	
var $sensitive : cs.SensitiveInfoEntity
var $verySensitiveInfo : cs.VerySensitiveInfoEntity
var $status : Object
var $promoteId : Integer
	
$sensitive:=ds.SensitiveInfo.new()
$sensitive.info:=$info1
$status:=$sensitive.save()
	
If (Session.storage.role.name="userApp2")
	$promoteId:=Session.promote("super_admin")
	$verySensitiveInfo:=ds.VerySensitiveInfo.new()
	$verySensitiveInfo.info:=$info2
	$status:=$verySensitiveInfo.save()
	Session.demote($promoteId)
End if 
```

#### Voir également

[`.demote()`](#demote)<br/>[`hasPrivilege()`](#hasprivilege)

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

| Paramètres | Type    |                             | Description                                                                     |
| ---------- | ------- | :-------------------------: | ------------------------------------------------------------------------------- |
| token      | Text    |              ->             | UUID du token de session                                                        |
| Résultat   | Boolean | <- | True si la session courante a été remplacée avec succès par la session du token |

<!-- END REF -->

#### Description

:::note

Cette fonction est uniquement disponible avec les sessions utilisateur web. Elle renvoie False dans les autres contextes.

:::

La fonction `.restore()` <!-- REF #SessionClass.restore().Summary -->remplace la session courante de l'utilisateur Web par sa session originale correspondant à l'UUID *token*<!-- END REF -->. Le storage et les privilèges de la session sont restaurés.

Si la session originale de l'utilisateur a été correctement restaurée, la fonction renvoie `true`.

La fonction renvoie `false` si :

- le token de session a déjà été utilisé,
- le token de session a expiré,
- le token de session n'existe pas,
- la session d'origine elle-même a expiré.

Dans ce cas, la session courante de l'utilisateur web est laissée intacte (aucune session n'est restaurée).

#### Exemple

Dans un singleton appelé par un HTTP request handler personnalisé :

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
