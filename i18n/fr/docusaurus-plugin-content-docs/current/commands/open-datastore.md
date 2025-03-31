---
id: open-datastore
title: Open datastore
displayed_sidebar: docs
---

<details><summary>Historique</summary>

| Release | Modifications                                  |
| ------- | ---------------------------------------------- |
| 20 R6   | Prise en charge de l'accès aux instances Qodly |
| 20 R4   | Nouvelle propriété *passwordAlgorithm*         |
| 18      | Ajout                                          |

</details>

<!--REF #_command_.Open datastore.Syntax-->**Open datastore**( *connectionInfo* : Object ; *localID* : Text ) : cs.DataStore<!-- END REF-->

<!--REF #_command_.Open datastore.Params-->

| Paramètres     | Type                         |   | Description                                                                                          |
| -------------- | ---------------------------- | - | ---------------------------------------------------------------------------------------------------- |
| connectionInfo | Object                       | → | Propriétés de connexion utilisées pour joindre le datastore distant                                  |
| localID        | Text                         | → | Identifiant à affecter au datastore ouvert sur l'application locale (obligatoire) |
| Résultat       | cs.DataStore | ← | Objet datastore                                                                                      |

<!-- END REF-->

#### Description

La commande `Open datastore` <!-- REF #_command_.Open datastore.Summary -->connecte l'application au datastore distant identifié par le paramètre *connectionInfo*<!-- END REF --> et renvoie un objet `cs.DataStore` correspondant associé à l'alias local *localID*.

Les datastores distants suivants sont pris en charge par la commande :

| type de datastore                                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Application 4D distante                                                | Une application 4D disponible en tant que datastore distant, c'est-à-dire :<li>son serveur web est lancé avec le support de http et/ou https,</li><li>son datastore est exposé via l'option REST ([**Exposer en tant que serveur REST**](REST/configuration.md#démarrer-le-serveur-rest) cochée).</li>Une licence peut être requise (voir note) |
| [Application Qodly](https://developer.qodly.com/docs/cloud/getStarted) | Une application Qodly Server qui vous a fourni un **api endpoint** et une **api key** valide associée à un rôle défini. Vous devez passer la clé d'api dans la propriété `api-key` de l'objet *connectionInfo*. Vous pouvez ensuite travailler avec l'objet datastore renvoyé, avec tous les privilèges accordés au rôle associé.                                     |

:::note

Les requêtes `Open datastore` reposent sur l'API REST 4D et peuvent nécessiter une licence 4D Client pour ouvrir la connexion sur un 4D Server distant. Référez-vous à la section [User login mode](../REST/authUsers.md#user-login-modes) pour savoir comment configurer l'authentification en fonction du mode de connexion utilisateur actuel sélectionné.

:::

Passez dans *connectionInfo* un objet décrivant le datastore distant auquel vous souhaitez vous connecter. Il peut contenir les propriétés suivantes (toutes les propriétés sont optionnelles, à l'exception de *hostname*) :

| Propriété   | Type    | Application 4D distante                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Application Qodly                                                                    |
| ----------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| hostname    | Text    | Nom ou adresse IP de la base de données distante + " :" + numéro de port (le numéro de port est obligatoire)                                                                                                                                                                                                                                                                                                                                                    | API Endpoint de l'instance Qodly cloud                                               |
| user        | Text    | Nom d'utilisateur                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | - (ignoré)                                                        |
| password    | Text    | Mot de passe de l'utilisateur                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | - (ignoré)                                                        |
| idleTimeout | Integer | Délai d'inactivité de la session (exprimé en minutes), au terme duquel la session est automatiquement fermée par 4D. Si cette propriété est omise, la valeur par défaut est 60 (1h). La valeur ne peut pas être < 60 (si une valeur inférieure est passée, le timeout est fixé à 60). Pour plus d'informations, voir **Fermeture des sessions**. | - (ignoré)                                                        |
| tls         | Boolean | Vrai pour utiliser une connexion sécurisée(1). Si cette propriété est omise, "false" par défaut. L'utilisation d'une connexion sécurisée est recommandée dans la mesure du possible.                                                                                                                                                                                                                                            | Vrai pour utiliser une connexion sécurisée. Si omis, faux par défaut |
| type        | Text    | doit être "4D Server"                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | - (ignoré)                                                        |
| api-key     | Text    | - (ignoré)                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | API key de l'instance Qodly cloud                                                    |

(1) Si `tls` est vrai, le protocole HTTPS est utilisé si :

- HTTPS est activé sur le datastore distant
- Le port donné correspond au port HTTPS configuré dans les propriétés
- un certificat valide et une clé de chiffrement privée sont installés dans l'application 4D. Sinon, l'erreur "1610 - Une requête vers l’hôte: "{xxx}" a échoué" est générée

*localID* est un alias local de la session ouverte sur le datastore distant. Si *localID* existe déjà dans l'application, il est utilisé. Sinon, une nouvelle session *localID* est créée lors de l’utilisation de l’objet datastore.

Une fois la session ouverte, les instructions suivantes deviennent équivalentes et renvoient une référence sur le même objet datastore :

```4d
 $myds:=Open datastore(connectionInfo;"myLocalId")
 $myds2:=ds("myLocalId")
  //$myds et $myds2 sont équivalents
```

Les objets disponibles dans le `cs.Datastore` sont mappés conformément aux [règles générales ORDA] (ORDA/dsMapping.md#general-rules).

Si aucun datastore correspondant n'est trouvé, `Open datastore` retourne **Null**.

#### Exemple 1

Connexion à un datastore distant sans utilisateur/mot de passe :

```4d
 var $connectTo : Object
 var $remoteDS : cs.DataStore
 $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")
 $remoteDS:=Open datastore($connectTo;"students")
 ALERT("This remote datastore contains "+String($remoteDS.Students.all().length)+" students")
```

#### Exemple 2

Connexion à un datastore distant avec utilisateur/mot de passe/timeout/tls :

```4d
 var $connectTo : Object
 var $remoteDS : cs.DataStore
 $connectTo:=New object("type";"4D Server";"hostname";\"192.168.18.11:4443";\  
  "user";"marie";"password";$pwd;"idleTimeout";70;"tls";True)
 $remoteDS:=Open datastore($connectTo;"students")
 ALERT("This remote datastore contains "+String($remoteDS.Students.all().length)+" students")
```

#### Exemple 3

Travailler avec plusieurs datastores distants :

```4d
 var $connectTo : Object
 var $frenchStudents; $foreignStudents : cs.DataStore
 $connectTo:=New object("hostname";"192.168.18.11:8044")
 $frenchStudents:=Open datastore($connectTo;"french")
 $connectTo.hostname:="192.168.18.11:8050"
 $foreignStudents:=Open datastore($connectTo;"foreign")
 ALERT("They are "+String($frenchStudents.Students.all().length)+" French students")
 ALERT("They are "+String($foreignStudents.Students.all().length)+" foreign students")
```

#### Exemple 4

Connexion à une application Qodly :

```4d
var $connectTo : Object:={hostname : "https://xxx-x54xxx-xx-xxxxx-8xx5-xxxxxx.xx-api.cloud.com" ; tls : True}

var $remoteDS : 4D.DataStoreImplementation
var $data : 4D.EntitySelection

$connectTo["api-key"]:="fxxxx-xxxx-4xxx-txxx-xxxxxxxx0" //uniquement à titre d'exemple  
  //il est recommandé de stocker la clé API dans un endroit sécurisé 
  //(par ex. un fichier) et de la charger dans le code

$remoteDS:=Open datastore($connectTo; "remoteId")
$data:=$remoteDS.item.all()

ALERT(String($data.length)+" items have been read")

```

#### Gestion des erreurs

En cas d'erreur, la commande retourne **Null**. Si le datastore distant ne peut pas être joint (adresse incorrecte, web serveur non lancé, http et https non activés, etc.), l'erreur 1610 "Une requête vers l’hôte: {xxx} a échoué" est générée. Vous pouvez intercepter cette erreur avec une méthode installée par `ON ERR CALL`.

#### Voir également

[ds](ds.md)

#### Propriétés

|                       |                                                                 |
| --------------------- | --------------------------------------------------------------- |
| Numéro de commande    | 1452                                                            |
| Thread safe           | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
| Modifie les variables | error                                                           |
