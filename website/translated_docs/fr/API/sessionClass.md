---
id: SessionClass
title: Session
---

Les objets Session sont retournés par la commande [`Session`](#session) lorsque [les sessions évolutives sont activées dans votre projet](WebServer/sessions.md#enabling-sessions). L'objet Session est automatiquement créé et maintenu par le serveur web 4D pour contrôler la session d'un client web (par exemple, un navigateur). Cet objet fournit au développeur web une interface avec la session de l'utilisateur, permettant de gérer les privilèges, de stocker des données contextuelles, de partager des informations entre les process et de lancer des processus préemptifs liés à la session.

Pour des informations détaillées sur l'implémentation de la session, veuillez consulter la section [Sessions du serveur web](WebServer/sessions.md).

### Sommaire


|                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.clearPrivileges().Summary -->|
| [<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.expirationDate.Summary -->|
| [<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.hasPrivilege().Summary -->|
| [<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.idleTimeout.Summary -->|
| [<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.isGuest().Summary -->|
| [<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.setPrivileges().Summary -->|
| [<!-- INCLUDE #SessionClass.storage.Syntax -->](#storage)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.storage.Summary -->|
| [<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.userName.Summary -->|




## Session

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R6  | Ajout         |
</details>

<!-- REF #_command_.Session.Syntax -->
**Session** : 4D.Session<!-- END REF -->


<!-- REF #_command_.Session.Params -->
| Paramètres | Type       |    | Description    |
| ---------- | ---------- |:--:| -------------- |
| Résultat   | 4D.Session | <- | Session object |
<!-- END REF -->


#### Description

The `Session` command <!-- REF #_command_.Session.Summary -->returns the `Session` object corresponding to the current scalable user web session<!-- END REF -->.

This command only works when [scalable sessions are enabled](WebServer/sessions.md#enabling-sessions). It returns *Null* when sessions are disabled or when legacy sessions are used.

When scalable sessions are enabled, the `Session` object is available from any web processes in the following contexts:

- Méthodes base `On Web Authentication`, `On Web Connection`, et `On REST Authentication`,
- Les [fonctions Data Model Class](ORDA/ordaClasses.md) ORDA appelées par des requêtes REST,
- le code traité par les balises 4D dans les pages semi-dynamiques (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)
- les méthodes projet avec l'attribut "Available through 4D tags and URLs (4DACTION...)" et appelées via les urls 4DACTION/.


#### Exemple

You have defined the `action_Session` method with attribute "Available through 4D tags and URLs". You call the method by entering the following URL in your browser:

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
| Version | Modifications |
| ------- | ------------- |
| v18 R6  | Ajout         |

</details>

<!-- REF #SessionClass.clearPrivileges().Syntax -->
**.clearPrivileges()**<!-- END REF -->

<!-- REF #SessionClass.clearPrivileges().Params -->
| Paramètres | Type |  | Description                 |
| ---------- | ---- |::| --------------------------- |
|            |      |  | Ne requiert aucun paramètre |
<!-- END REF -->


#### Description

The `.clearPrivileges()` function <!-- REF #SessionClass.clearPrivileges().Summary -->removes all the privileges associated to the session<!-- END REF -->. As a result, the session automatically becomes a Guest session.


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
| Version | Modifications |
| ------- | ------------- |
| v18 R6  | Ajout         |

</details>

<!-- REF #SessionClass.expirationDate.Syntax -->
**.expirationDate** : Text<!-- END REF -->

#### Description

The `.expirationDate` property contains <!-- REF #SessionClass.expirationDate.Summary -->the expiration date and time of the session cookie<!-- END REF -->. The value is expressed as text in the ISO 8601 format: `YYYY-MM-DDTHH:MM:SS.mmmZ`.

Cette propriété est en **lecture seule**. It is automatically recomputed if the [`.idleTimeout`](#idletimeout) property value is modified.

#### Exemple

```4d
var $expiration : Text
$expiration:=Session.expirationDate //ex : "2021-11-05T17:10:42Z"
```

<!-- END REF -->




<!-- REF SessionClass.hasPrivilege().Desc -->
## .hasPrivilege()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R6  | Ajout         |
</details>

<!-- REF #SessionClass.hasPrivilege().Syntax -->
**.hasPrivilege**( *privilege* : Text ) : Boolean<!-- END REF -->

<!-- REF #SessionClass.hasPrivilege().Params -->
| Paramètres | Type    |    | Description                                      |
| ---------- | ------- |:--:| ------------------------------------------------ |
| privilege  | Texte   | <- | Name of the privilege to verify                  |
| Résultat   | Booléen | <- | True if session has *privilege*, False otherwise |
<!-- END REF -->


#### Description

The `.hasPrivilege()` function <!-- REF #SessionClass.hasPrivilege().Summary -->returns True if the privilege is associated to the session, and False otherwise<!-- END REF -->.


#### Exemple

You want to check if the "WebAdmin" privilege is associated to the session:

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
| Version | Modifications |
| ------- | ------------- |
| v18 R6  | Ajout         |

</details>

<!-- REF #SessionClass.idleTimeout.Syntax -->
**.idleTimeout** : Integer<!-- END REF -->

#### Description

The `.idleTimeout` property contains <!-- REF #SessionClass.idleTimeout.Summary -->the inactivity session timeout (in minutes), after which the session is automatically closed by 4D<!-- END REF -->.

If this property is not set, the default value is 60 (1h).

When this property is set, the [`.expirationDate`](#expirationdate) property is updated accordingly.

> La valeur ne peut pas être < 60 ; si une valeur inférieure est définie, le timeout est élevé à 60.


This property is **read write**.

#### Exemple

```4d
If (Session.isGuest())
        // La session d'un invité se ferme après 60 minutes d'inactivité.
    Session.idleTimeout:=60
Else
        //D'autres sessions se fermeront après 60 minutes d'inactivité.
    Session.idleTimeout:=120
End if

```

<!-- END REF -->


<!-- REF SessionClass.isGuest().Desc -->
## .isGuest()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R6  | Ajout         |

</details>

<!-- REF #SessionClass.isGuest().Syntax -->
**.isGuest()** : Boolean<!-- END REF -->

<!-- REF #SessionClass.isGuest().Params -->
| Paramètres | Type    |    | Description                                     |
| ---------- | ------- |:--:| ----------------------------------------------- |
| Résultat   | Booléen | <- | True if session is a Guest one, False otherwise |
<!-- END REF -->

#### Description

The `.isGuest()` function <!-- REF #SessionClass.isGuest().Summary -->returns True if the session is a Guest session (i.e. it has no privileges)<!-- END REF -->.


#### Exemple

In the `On Web Connection` database method:

```4d
If (Session.isGuest())
    //Faire quelque chose pour l'utilisateur invité
End if
```


<!-- END REF -->


<!-- REF SessionClass.setPrivileges().Desc -->
## .setPrivileges()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R6  | Ajout         |

</details>

<!-- REF #SessionClass.setPrivileges().Syntax -->
**.setPrivileges**( *privilege* : Text )<br>**.setPrivileges**( *privileges* : Collection )<br>**.setPrivileges**( *settings* : Object )<!-- END REF -->

<!-- REF #SessionClass.setPrivileges().Params -->
| Paramètres | Type       |    | Description                                                |
| ---------- | ---------- |:--:| ---------------------------------------------------------- |
| privilege  | Texte      | -> | Privilege name                                             |
| privileges | Collection | -> | Collection of privilege names                              |
| settings   | Object     | -> | Object with a "privileges" property (string or collection) |
<!-- END REF -->

#### Description

The `.setPrivileges()` function <!-- REF #SessionClass.setPrivileges().Summary -->associates the privilege(s) defined in the parameter to the session<!-- END REF -->.

- Dans le paramètre *privilege*, passez une chaîne contenant un nom de privilège (ou plusieurs noms de privilèges séparés par des virgules).

- Dans le paramètre *privileges*, passez une collection de chaînes contenant des noms de privilèges.

- Dans le paramètre *settings*, passez un objet contenant les propriétés suivantes :

| Propriété  | Type               | Description                                        |
| ---------- | ------------------ | -------------------------------------------------- |
| privileges | Text or Collection | <li>String containing a privilege name, or</li><li>Collection of strings containing privilege names</li> |
| userName   | Texte              | User name to associate to the session (optional)   |

If the `privileges` property contains an invalid privilege name, it is ignored.

> Dans l'implémentation actuelle, seul le privilège "WebAdmin" est disponible.

By default when no privilege is associated to the session, the session is a [Guest session](#isguest).

The [`userName`](#username) property is available at session object level (read-only).

#### Exemple

In a custom authentication method, you set the "WebAdmin" privilege to the user:

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
| Version | Modifications |
| ------- | ------------- |
| v18 R6  | Ajout         |

</details>

<!-- REF #SessionClass.storage.Syntax -->
**.storage** : Object<!-- END REF -->

#### Description

The `.storage` property contains <!-- REF #SessionClass.storage.Summary -->a shared object that can be used to store information available to all requests of the web client<!-- END REF -->.

When a `Session` object is created, the `.storage` property is empty. Since it is a shared object, this property will be available in the `Storage` object of the server.

> Tout comme l'objet `Storage` du serveur, la propriété `.storage` est toujours "single" : l'ajout d'un objet partagé ou d'une collection partagée à `.storage` ne crée pas de groupe partagé.

This property is **read only** itself but it returns a read-write object.

#### Exemple

You want to store the client IP in the `.storage` property. You can write in the `On Web Authentication` database method:

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
| Version | Modifications |
| ------- | ------------- |
| v18 R6  | Ajout         |

</details>

<!-- REF #SessionClass.userName.Syntax -->
**.userName** : Text<!-- END REF -->

#### Description

The `.userName` property contains <!-- REF #SessionClass.userName.Summary -->the user name associated to the session<!-- END REF -->. You can use it to identify the user within your code.

This property is an empty string by default. It can be set using the `privileges` property of the [`setPrivileges()`](#setprivileges) function.

This property is **read only**. 



<!-- END REF -->


<style> h2 { background: #d9ebff;}</style>
