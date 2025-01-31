---
id: SessionClass
title: Session
---

Les objets Session sont retournés par la commande [`Session`](#session) lorsque [les sessions extensibles sont activées dans votre projet](WebServer/sessions.md#enabling-sessions). L'objet Session est automatiquement créé et maintenu par le serveur web 4D pour contrôler la session d'un client web (par exemple, un navigateur). Cet objet fournit au développeur web une interface avec la session de l'utilisateur, permettant de gérer les privilèges, de stocker des données contextuelles, de partager des informations entre les process et de lancer des processus préemptifs liés à la session.

Pour des informations détaillées sur l'implémentation de la session, veuillez consulter la section [Sessions du serveur web](WebServer/sessions.md).

### Sommaire

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

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R6   | Ajout         |

</details>

<!-- REF #_command_.Session.Syntax -->**Session** : 4D.Session<!-- END REF -->


<!-- REF #_command_.Session.Params -->
| Paramètres | Type       |    | Description   |
| ---------- | ---------- |:--:| ------------- |
| Résultat   | 4D.Session | <- | Objet session |
<!-- END REF -->

#### Description

La commande `Session` <!-- REF #_command_.Session.Summary -->renvoie l'objet `Session` correspondant à la session web utilisateur extensible courante<!-- END REF -->.

Cette commande fonctionne uniquement lorsque les [sessions extensibles sont activées](WebServer/sessions.md#enabling-sessions). Elle retourne *Null* lorsque ces sessions sont inactives ou lorsque les anciennes sessions sont utilisées.

Lorsque les sessions extensibles sont activées, l'objet `Session` est disponible depuis n'importe quel process web dans les contextes suivants :

- Méthodes base `On Web Authentication`, `On Web Connection`, et `On REST Authentication`,
- Les [fonctions Data Model Class](ORDA/ordaClasses.md) ORDA appelées par des requêtes REST,
- code traité par les balises 4D dans les pages semi-dynamiques (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)
- les méthodes projet avec l'attribut "Available through 4D tags and URLs (4DACTION...)" et appelées via les urls 4DACTION/.

#### Exemple

Vous avez défini la méthode `action_Session` ayant l'attribut "Disponible via Balises HTML et URLs 4D". Vous appelez la méthode en saisissant l'URL suivant dans votre navigateur :

```
IP:port/4DACTION/action_Session
```

```4d
  //méthode action_Session
 Case of
    :(Session#Null)
       If(Session.hasPrivilege("WebAdmin")) //appel de la fonction hasPrivilege
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

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R6   | Ajout         |

</details>

<!-- REF #SessionClass.clearPrivileges().Syntax -->**.clearPrivileges()**<!-- END REF -->


<!-- REF #SessionClass.clearPrivileges().Params -->
| Paramètres | Type |  | Description                 |
| ---------- | ---- |::| --------------------------- |
|            |      |  | Ne requiert aucun paramètre |
<!-- END REF -->

#### Description

La fonction `.clearPrivileges()` <!-- REF #SessionClass.clearPrivileges().Summary -->supprime tous les privilèges associés à la session<!-- END REF -->. En résultat, la session devient automatiquement une session Guest.

#### Exemple

```4d
//Invalider une session
var $isGuest : Boolean  

Session.clearPrivileges()
$isGuest:=Session.isGuest() //$isGuest est mis à True
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

<!-- REF SessionClass.idleTimeout.Desc -->
## .idleTimeout

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R6   | Ajout         |

</details>

<!-- REF #SessionClass.idleTimeout.Syntax -->**.idleTimeout** : Integer<!-- END REF -->

#### Description

La propriété `.idleTimeout` contient <!-- REF #SessionClass.idleTimeout.Summary -->le délai maximal d'inactivité de session (en minutes), au-delà duquel la session est automatiquement fermée par 4D<!-- END REF -->.

Si cette propriété n'est pas définie, sa valeur par défaut est 60 (1h).

Lorsque cette propriété est modifiée, la propriété [`.expirationDate`](#expirationdate) est mise à jour en conséquence.

> La valeur ne peut pas être < 60 ; si une valeur inférieure est définie, le timeout est élevé à 60.

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

La fonction `.isGuest()` <!-- REF #SessionClass.isGuest().Summary -->retourne True si la session est une session invité (c'est-à-dire qu'elle n'a pas de privilèges)<!-- END REF -->.

#### Exemple

Dans la méthode base `On Web Connection` :

```4d
If (Session.isGuest())
 //Faire quelque chose pour l'utilisateur Guet
End if
```

<!-- END REF -->

<!-- REF SessionClass.setPrivileges().Desc -->
## .setPrivileges()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R6   | Ajout         |

</details>

<!-- REF #SessionClass.setPrivileges().Syntax -->**.setPrivileges**( *privilege* : Text )<br/>**.setPrivileges**( *privileges* : Collection )<br/>**.setPrivileges**( *settings* : Object )<!-- END REF -->


<!-- REF #SessionClass.setPrivileges().Params -->
| Paramètres | Type       |    | Description                                                      |
| ---------- | ---------- |:--:| ---------------------------------------------------------------- |
| privilege  | Text       | -> | Nom de privilège                                                 |
| privileges | Collection | -> | Collection de noms de privilèges                                 |
| settings   | Object     | -> | Objet contenant une propriété "privileges" (texte ou collection) |
<!-- END REF -->

#### Description

La fonction `.setPrivileges()` <!-- REF #SessionClass.setPrivileges().Summary -->associe le(s) privilège(s) défini(s) dans le paramètre à la session<!-- END REF -->.

- Dans le paramètre *privilege*, passez une chaîne contenant un nom de privilège (ou plusieurs noms de privilèges séparés par des virgules).

- Dans le paramètre *privileges*, passez une collection de chaînes contenant des noms de privilèges.

- Dans le paramètre *settings*, passez un objet contenant les propriétés suivantes :

| Propriété  | Type               | Description                                           |
| ---------- | ------------------ | ----------------------------------------------------- |
| privileges | Text ou Collection | <li>Chaîne contenant un nom de privilège, ou</li><li>Collection de chaînes contenant des noms de privilèges</li>    |
| userName   | Text               | Nom d'utilisateur à associer à la session (optionnel) |

Si la propriété `privileges` contient un nom de privilège invalide, il est ignoré.

> Dans l'implémentation actuelle, seul le privilège "WebAdmin" est disponible.

Par défaut lorsqu'aucun privilège n'est associé à la session, la session est une [session Guest](#isguest).

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

| Release | Modifications |
| ------- | ------------- |
| 18 R6   | Ajout         |

</details>

<!-- REF #SessionClass.storage.Syntax -->**.storage** : Object<!-- END REF -->

#### Description

La propriété `.storage` contient <!-- REF #SessionClass.storage.Summary -->un objet partagé qui peut être utilisé pour stocker des informations disponibles pour toutes les requêtes du client web<!-- END REF -->.

Lorsqu'un objet `Session` est créé, la propriété `.storage` est vide. Puisqu'il s'agit d'un objet partagé, cette propriété sera disponible dans l'objet `Storage` du serveur.

> Tout comme l'objet `Storage` du serveur, la propriété `.storage` est toujours "single" : l'ajout d'un objet partagé ou d'une collection partagée à `.storage` ne crée pas de groupe partagé.

Cette propriété est elle-même en **lecture seulement** mais elle retourne un objet en lecture-écriture.

#### Exemple

Vous voulez stocker l'adresse IP du client dans la propriété `.storage`. Vous pouvez écrire dans la méthode base `On Web Authentication` :

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

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R6   | Ajout         |

</details>

<!-- REF #SessionClass.userName.Syntax -->**.userName** : Text<!-- END REF -->

#### Description

La propriété `.userName` contient <!-- REF #SessionClass.userName.Summary -->le nom d'utilisateur associé à la session<!-- END REF -->. Vous pouvez vous en servir pour identifier l'utilisateur dans votre code.

Cette propriété est une chaîne vide par défaut. Elle peut être définie via la propriété `privileges` de la fonction [`setPrivileges()`](#setprivileges).

Cette propriété est en **lecture seule**.

<!-- END REF -->
