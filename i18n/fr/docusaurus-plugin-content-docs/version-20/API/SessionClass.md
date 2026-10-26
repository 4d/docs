---
id: SessionClass
title: Session
---

Les objets de session sont renvoyés par la commande [`Session`](#session) lorsque [les sessions évolutives sont activées dans votre projet](WebServer/sessions.md#enabling-sessions). L'objet Session est automatiquement créé et maintenu par le serveur web 4D pour contrôler la session d'un client web (par exemple, un navigateur). Cet objet fournit au développeur web une interface avec la session de l'utilisateur, permettant de gérer les privilèges, de stocker des données contextuelles, de partager des informations entre les process et de lancer des processus préemptifs liés à la session.

Pour plus d'informations sur la mise en œuvre des sessions, veuillez vous reporter à la section [Sessions du serveur web](WebServer/sessions.md).

### Sommaire

|                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.clearPrivileges().Summary --> |
| [<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.expirationDate.Summary -->        |
| [<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.hasPrivilege().Summary -->          |
| [<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.idleTimeout.Summary -->                 |
| [<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.isGuest().Summary -->                         |
| [<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.setPrivileges().Summary -->       |
| [<!-- INCLUDE #SessionClass.storage.Syntax -->](#storage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.storage.Summary -->                             |
| [<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.userName.Summary -->                          |

## Session

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R6   | Ajout         |

</details>

<!-- REF #_command_.Session.Syntax -->**Session** : 4D.Session<!-- END REF -->

<!-- REF #_command_.Session.Params -->

<div class="no-index">

| Paramètres | Type                       |                             | Description   |
| ---------- | -------------------------- | :-------------------------: | ------------- |
| Résultat   | 4D.Session | <- | Objet session |

</div>
<!-- END REF -->

#### Description

La commande `Session` <!-- REF #_command_.Session.Summary -->retourne l'objet `Session` correspondant à la session web évolutive utilisateur courante<!-- END REF -->.

Cette commande ne fonctionne que lorsque [les sessions évolutives sont activées](WebServer/sessions.md#enabling-sessions). Elle renvoie *Null* lorsque les sessions sont désactivées ou lorsque des anciennes sessions sont utilisées.

Lorsque les sessions évolutives sont activées, l'objet `Session` est accessible depuis n'importe quel process Web dans les contextes suivants :

- Méthodes base `On Web Authentication`, `On Web Connection`, et `On REST Authentication`,
- méthodes base [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) et [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action) pour les requêtes mobiles,
- [Fonctions de classe du modèle de données ORDA](ORDA/ordaClasses.md) appelées via REST,
- code traité par les balises 4D dans les pages semi-dynamiques (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)
- méthodes projet avec l'attribut "Disponible via balises HTML et URLs 4D (4DACTION...)" et appelées via les urls 4DACTION/.

#### Exemple

Vous avez défini la méthode `action_Session` ayant l'attribut "Disponible via Balises HTML et URLs 4D". Vous appelez la méthode en saisissant l'URL suivant dans votre navigateur :

```
IP:port/4DACTION/action_Session
```

```4d
  //action_Session method
 Case of
    :(Session#Null)
       If(Session.hasPrivilege("WebAdmin")) //appel de la fonction hasPrivilege
          WEB SEND TEXT("4DACTION --> Session is WebAdmin")
       Else
          WEB SEND TEXT("4DACTION --> Session is not WebAdmin")
       End if
    Else
       WEB SEND TEXT("4DACTION --> session is null")
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

<div class="no-index">

| Paramètres | Type |     | Description                 |
| ---------- | ---- | :-: | --------------------------- |
|            |      |     | Ne requiert aucun paramètre |

</div>
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

Cette propriété est en **lecture seule**. Lorsqu'un objet `Session` est créé, la propriété `.storage` est vide.

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

<div class="no-index">

| Paramètres | Type    |                             | Description                                           |
| ---------- | ------- | :-------------------------: | ----------------------------------------------------- |
| privilege  | Text    | <- | Nom du privilège à vérifier                           |
| Résultat   | Boolean | <- | Vrai si la session dispose du *privilege*, sinon Faux |

</div>
<!-- END REF -->

#### Description

La fonction `.hasPrivilege()` <!-- REF #SessionClass.hasPrivilege().Summary -->renvoie True si le *privilege* est associé à la session, et False sinon<!-- END REF -->.

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

<!-- REF SessionClass.isGuest().Desc -->

## .isGuest()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R6   | Ajout         |

</details>

<!-- REF #SessionClass.isGuest().Syntax -->**.isGuest()** : Boolean<!-- END REF -->

<!-- REF #SessionClass.isGuest().Params -->

<div class="no-index">

| Paramètres | Type    |                             | Description                                      |
| ---------- | ------- | :-------------------------: | ------------------------------------------------ |
| Résultat   | Boolean | <- | Vrai s'il s'agit d'une session Guest, sinon Faux |

</div>
<!-- END REF -->

#### Description

La fonction `.isGuest()` <!-- REF #SessionClass.isGuest().Summary -->renvoie True si la session est une session Guest (c'est-à-dire qu'elle n'a aucun privilège)<!-- END REF -->.

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

<!-- REF #SessionClass.setPrivileges().Syntax -->**.setPrivileges**( *privilege* : Text )<br/>**.setPrivileges**( *privileges* : Collection )<br/>**.setPrivileges**( *settings* : Object )<!-- END REF -->

<!-- REF #SessionClass.setPrivileges().Params -->

<div class="no-index">

| Paramètres | Type       |     | Description                                                                         |
| ---------- | ---------- | :-: | ----------------------------------------------------------------------------------- |
| privilege  | Text       |  -> | Nom de privilège                                                                    |
| privileges | Collection |  -> | Collection de noms de privilèges                                                    |
| settings   | Object     |  -> | Objet contenant une propriété "privileges" (texte ou collection) |

</div>
<!-- END REF -->

#### Description

La fonction `.setPrivileges()` <!-- REF #SessionClass.setPrivileges().Summary -->associe le ou les privilège(s) et/ou le ou les rôle(s) défini(s) dans le paramètre à la session<!-- END REF -->.

- Dans le paramètre *privilege*, passez une chaîne contenant un nom de privilège (ou plusieurs noms de privilèges séparés par des virgules).

- Dans le paramètre *privileges*, passez une collection de chaînes contenant des noms de privilèges.

- Dans le paramètre *settings*, passez un objet contenant les propriétés suivantes :

| Propriété  | Type               | Description                                                                                                      |
| ---------- | ------------------ | ---------------------------------------------------------------------------------------------------------------- |
| privileges | Text ou Collection | <li>Chaîne contenant un nom de privilège, ou</li><li>Collection de chaînes contenant des noms de privilèges</li> |
| roles      | Text ou Collection | <li>Chaîne contenant un rôle, ou</li><li>Collection de chaînes contenant des rôles</li>                          |
| userName   | Text               | Nom d'utilisateur à associer à la session (optionnel)                                         |

:::info

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

Cette propriété est en **lecture seule**.

#### Exemple

Vous voulez stocker l'adresse IP du client dans la propriété `.storage`. Vous pouvez écrire dans la méthode base `On Web Authentication` :

```4d
If (Session.storage.clientIP=Null) //premier accès
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
