---
id: SessionClass
title: Session
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Les objets Session sont retournés par la commande [`Session`](#session). Ces objets fournissent au développeur une interface permettant de gérer la session utilisateur courante et d'exécuter des actions telles que stocker des données contextuelles, partager des informations entre les process de la session, lancer des process préemptifs liés à la session ou (web uniquement) gérer des [privilèges](../ORDA/privileges.md).

### Types de sessions

Trois types de sessions sont pris en charge par cette classe :

- [**Sessions utilisateur Web**](WebServer/sessions.md) : Les sessions utilisateur Web sont disponibles lorsque [les sessions évolutives (scalable sessions) sont activées dans votre projet](WebServer/sessions.md#enabling-sessions). Elles sont utilisées pour les connexions Web et REST, et peuvent se voir attribuer des privilèges.
- [**Session utilisateur client distant**](../Desktop/clientServer.md#remote-user-sessions): Dans les applications client/serveur, les utilisateurs distants ont leurs propres sessions gérées sur le serveur.
- [**Session des procédures stockées**](https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html): Toutes les procédures stockées exécutées sur le serveur partagent la même session utilisateur virtuelle.

:::note

La disponibilité des propriétés et des fonctions dans l'objet `Session` dépend du type de session.

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

| Release | Modifications                                                             |
| ------- | ------------------------------------------------------------------------- |
| 20 R5   | Prise en charge des sessions utilisateurs distants et procédures stockées |
| 18 R6   | Ajout                                                                     |

</details>

<!-- REF #_command_.Session.Syntax -->**Session** : 4D.Session<!-- END REF -->


<!-- REF #_command_.Session.Params -->
| Paramètres | Type       |    | Description   |
| ---------- | ---------- |:--:| ------------- |
| Résultat   | 4D.Session | <- | Objet session |
<!-- END REF -->


#### Description

La commande `Session` <!-- REF #_command_.Session.Summary -->retourne l'objet `Session` correspondant à la session utilisateur courante<!-- END REF -->.

Selon le process à partir duquel la commande est appelée, la session utilisateur courante peut être :

- une session web (lorsque les [sessions évolutives sont activées](WebServer/sessions.md#enabling-sessions)),
- une session de client distant,
- la session des procédures stockées.

Pour plus d'informations, voir le paragraphe [Types de sessions](#types-de-sessions).

Si la commande est appelée à partir d'un contexte non pris en charge (application mono-utilisateur, sessions évolutives désactivées...), elle retourne *Null*.

#### Sessions Web

L'objet `Session` des sessions web est disponible depuis n'importe quel process web :

- Méthodes base `On Web Authentication`, `On Web Connection`, et `On REST Authentication`,
- code traité par les balises 4D dans les pages semi-dynamiques (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)
- méthodes projet avec l'attribut "Disponible via balises HTML et URLs 4D (4DACTION...)" et appelées via les urls 4DACTION/
- Méthodes base [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) et [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action) pour les requêtes mobiles,
- Fonctions ORDA [appelées via des requêtes REST](../REST/ClassFunctions.md).

Pour plus d'informations sur les sessions utilisateur web, veuillez consulter la section [Sessions web](WebServer/sessions.md).

#### Sessions clients distants

L'objet `Session` des sessions client distants est disponible depuis :

- Les méthodes projet qui ont l'attribut [Exécuter sur serveur](../Project/code-overview.md#execute-on-server) (elles sont exécutées dans le process jumeau du process client),
- Les Triggers,
- Les méthodes base `On Server Open Connection` et `On Server Shutdown Connection`.

Pour plus d'informations sur les sessions clients distants, veuillez vous référer au paragraphe [**Sessions clients distants**](../Desktop/clientServer.md#remote-user-sessions).

#### Session des procédures stockées

Tous les process des procédures stockées partagent la même session d'utilisateur virtuel. L'objet `Session` des procédures stockées est disponible depuis :

- Les méthodes appelées avec la commande [`Execute on server`](https://doc.4d.com/4dv20/help/command/en/page373.html),
- Les méthodes base `On Server Startup`, `On Server Shutdown`, `On Backup Startup`, `On Backup Shutdown`, et `On System event`.

For information on stored procedures virtual user session, please refer to the [4D Server and the 4D Language](https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html) page.

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

<!-- REF #SessionClass.clearPrivileges().Syntax -->**.clearPrivileges()** : Boolean<!-- END REF -->


<!-- REF #SessionClass.clearPrivileges().Params -->
| Paramètres | Type    |    | Description                     |
| ---------- | ------- |:--:| ------------------------------- |
| Résultat   | Boolean | <- | True si l'exécution est réussie |
<!-- END REF -->


#### Description

:::note

Étant donné que les privilèges ne sont pris en charge que dans les sessions utilisateur Web, cette fonction ne fait rien et retourne toujours **False** dans les autres types de sessions.

:::

La fonction `.clearPrivileges()` <!-- REF #SessionClass.clearPrivileges().Summary -->supprime tous les privilèges associés à la session et retourne **True** si l'exécution a réussi<!-- END REF -->. En résultat, la session devient automatiquement une session Guest.


#### Exemple

```4d
//Invalider une session
var $isGuest : Boolean
var $isOK : Boolean

$isOK:=Session.clearPrivileges()
$isGuest:=Session.isGuest() //$isGuest est True
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

Étant donné que les privilèges ne sont pris en charge que dans les sessions utilisateur Web, cette fonction ne fait rien et retourne toujours **False** dans les autres types de sessions.

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

La propriété `.id` contient <!-- REF #SessionClass.id.Summary -->l'identifiant unique (UUID) de la session sur le serveur<!-- END REF -->. Cette chaîne unique est automatiquement attribuée par le serveur à chaque session et vous permet d'identifier ses process. 


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

Cette propriété est uniquement disponible avec les sessions web.

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

Cette propriété est uniquement disponible avec les sessions des procédures stockées et des client distants.

:::

La propriété `.info` <!-- REF #SessionClass.info.Summary -->décrit la session du client distant ou des procédures stockées sur le serveur<!-- END REF -->.

L'objet `.info` est le même objet que celui renvoyé par la commande [`Get process activity`](https://doc.4d.com/4dv20/help/command/fr/page1495.html) pour les sessions des clients distants et des procédures stockées.

L'objet `.info` contient les propriétés suivantes:

| Propriété        | Type          | Description                                                                                                  |
| ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------ |
| type             | Text          | Type de session : "remote" ou "storedProcedure"                                                              |
| userName         | Text          | Nom d'utilisateur 4D (même valeur que [`.userName`](#username))                                              |
| machineName      | Text          | Sessions distantes : nom de la machine distante. Session des procédures stockées : nom de la machine serveur |
| systemUserName   | Text          | Sessions distantes : nom de la session système ouverte sur la machine distante.                              |
| IPAddress        | Text          | Adresse IP de la machine distante                                                                            |
| hostType         | Text          | Type d'hôte : "windows" ou "mac"                                                                             |
| creationDateTime | Date ISO 8601 | Date et heure de création de la session                                                                      |
| state            | Text          | État de la session : "active", "postponed", "sleeping"                                                       |
| ID               | Text          | UUID de session (même valeur que [`.id`](#id))                                                               |
| persistentID     | Text          | ID persistant de la session                                                                                  |

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
| Paramètres | Type    |    | Description                                      |
| ---------- | ------- |:--:| ------------------------------------------------ |
| Résultat   | Boolean | <- | Vrai s'il s'agit d'une session Guest, sinon Faux |
<!-- END REF -->

#### Description

:::note

Cette fonction retourne toujours **True** avec les sessions des clients distants et des procédures stockées.

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
| Résultat   | Boolean    | <- | True si l'exécution est réussie                                  |
<!-- END REF -->

#### Description

:::note

Étant donné que les privilèges ne sont pris en charge que dans les sessions utilisateur Web, cette fonction ne fait rien et retourne toujours **False** dans les autres types de sessions.

:::

La fonction `.setPrivileges()` <!-- REF #SessionClass.setPrivileges().Summary -->associe le(s) privilège(s) et/ou le(s) rôle(s) défini(s) dans le paramètre à la session et retourne **True** si l'exécution a réussi<!-- END REF -->.

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

<Tabs>

<TabItem value="Web session example">

Vous voulez stocker l'adresse IP du client dans la propriété `.storage`. Vous pouvez écrire dans la méthode base `On Web Authentication` :


```4d
If (Session.storage.clientIP=Null) //premier accès
    Use (Session.storage)
        Session.storage.clientIP:=New shared object("value"; $clientIP)
    End use
End if
```

</TabItem>

<TabItem value="Remote session example">

Vous voulez partager des données entre des process de la même session :


```4d
Use(Session.storage)
 Session.storage.settings:=New shared object("property"; $value; "property2"; $value2)
End use
```

</TabItem>

</Tabs>

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
- Avec les sessions distantes et des procédures stockées, cette propriété renvoie le même nom d'utilisateur que la commande [`Current user`](https://doc.4d.com/4dv20/help/command/fr/page182.html).

Cette propriété est en **lecture seule**.



<!-- END REF -->
