---
id: open-datastore
title: Open datastore
displayed_sidebar: docs
---

<details><summary>Historique</summary>

| Release | Modifications                           |
| ------- | --------------------------------------- |
| 21      | Qodly cloud discontinued                |
| 20 R6   | Support access to Qodly cloud instances |
| 20 R4   | Nouvelle propriété *passwordAlgorithm*  |
| 18      | Ajout                                   |

</details>

<!--REF #_command_.Open datastore.Syntax-->**Open datastore**( *connectionInfo* : Object ; *localID* : Text ) : 4D.DataStoreImplementation<!-- END REF-->

<!--REF #_command_.Open datastore.Params-->

| Paramètres     | Type                                       |                             | Description                                                                                          |
| -------------- | ------------------------------------------ | --------------------------- | ---------------------------------------------------------------------------------------------------- |
| connectionInfo | Object                                     | &#8594; | Propriétés de connexion utilisées pour joindre le datastore distant                                  |
| localID        | Text                                       | &#8594; | Identifiant à affecter au datastore ouvert sur l'application locale (obligatoire) |
| Résultat       | 4D.DataStoreImplementation | &#8592; | Objet datastore                                                                                      |

<!-- END REF-->

## Description

La commande `Open datastore` <!-- REF #_command_.Open datastore.Summary -->connecte l'application au datastore distant identifié par le paramètre *connectionInfo*<!-- END REF --> et renvoie un objet `4D.DataStoreImplementation` correspondant associé à l'alias local *localID*.

Exchanges with the remote datastore are automatically managed via REST requests. The *connectionInfo* 4D datastore must be available as a remote datastore, i.e.:

- its Web Server must be launched with http and/or https enabled,
- its datastore is exposed to REST ([**Expose as REST server**](REST/configuration.md#starting-the-rest-server) option checked),
- a client license must be available if required (see note).

:::note

Les requêtes `Open datastore` reposent sur l'API REST 4D et peuvent nécessiter une licence 4D Client pour ouvrir la connexion sur un 4D Server distant. Référez-vous à la section [User login mode](../REST/authUsers.md#force-login-mode) pour savoir comment configurer l'authentification en fonction du mode de connexion utilisateur actuel sélectionné.

:::

Passez dans *connectionInfo* un objet décrivant le datastore distant auquel vous souhaitez vous connecter. Il peut contenir les propriétés suivantes (toutes les propriétés sont optionnelles, à l'exception de *hostname*) :

| Propriété   | Type    | Application 4D distante                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                        |
| ----------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| hostname    | Text    | Nom ou adresse IP de la base de données distante + " :" + numéro de port (le numéro de port est obligatoire)                                                                                                                                                                                                                                                                                                                                                    | API Endpoint de l'instance Qodly cloud |
| user        | Text    | Nom d'utilisateur                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                        |
| password    | Text    | Mot de passe de l'utilisateur                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                        |
| idleTimeout | Integer | Délai d'inactivité de la session (exprimé en minutes), au terme duquel la session est automatiquement fermée par 4D. Si cette propriété est omise, la valeur par défaut est 60 (1h). La valeur ne peut pas être < 60 (si une valeur inférieure est passée, le timeout est fixé à 60). Pour plus d'informations, voir **Fermeture des sessions**. |                                        |
| tls         | Boolean | Vrai pour utiliser une connexion sécurisée(1). Si cette propriété est omise, "false" par défaut. L'utilisation d'une connexion sécurisée est recommandée dans la mesure du possible.                                                                                                                                                                                                                                            |                                        |
| type        | Text    | doit être "4D Server"                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                        |

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

Les objets disponibles dans `4D.DataStoreImplementation` sont mappés conformément aux [règles générales ORDA](ORDA/dsMapping.md#general-rules).

Si aucun datastore correspondant n'est trouvé, `Open datastore` retourne **Null**.

## Exemple 1

Connexion à un datastore distant sans utilisateur/mot de passe :

```4d
 var $connectTo : Object
 var $remoteDS : 4D.DataStoreImplementation
 $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")
 $remoteDS:=Open datastore($connectTo;"students")
 ALERT("This remote datastore contains "+String($remoteDS.Students.all().length)+" students")
```

## Exemple 2

Connexion à un datastore distant avec utilisateur/mot de passe/timeout/tls :

```4d
 var $connectTo : Object
 var $remoteDS : 4D.DataStoreImplementation
 $connectTo:=New object("type";"4D Server";"hostname";\"192.168.18.11:4443";\  
  "user";"marie";"password";$pwd;"idleTimeout";70;"tls";True)
 $remoteDS:=Open datastore($connectTo;"students")
 ALERT("This remote datastore contains "+String($remoteDS.Students.all().length)+" students")
```

## Exemple 3

Travailler avec plusieurs datastores distants :

```4d
 var $connectTo : Object
 var $frenchStudents; $foreignStudents : 4D.DataStoreImplementation
 $connectTo:=New object("hostname";"192.168.18.11:8044")
 $frenchStudents:=Open datastore($connectTo;"french")
 $connectTo.hostname:="192.168.18.11:8050"
 $foreignStudents:=Open datastore($connectTo;"foreign")
 ALERT("They are "+String($frenchStudents.Students.all().length)+" French students")
 ALERT("They are "+String($foreignStudents.Students.all().length)+" foreign students")
```

## Gestion des erreurs

En cas d'erreur, la commande retourne **Null**. Si le datastore distant ne peut pas être joint (adresse incorrecte, web serveur non lancé, http et https non activés, etc.), l'erreur 1610 "Une requête vers l’hôte: {xxx} a échoué" est générée. Vous pouvez intercepter cette erreur avec une méthode installée par `ON ERR CALL`.

## Voir également

[ds](ds.md)

## Propriétés

|                       |                             |
| --------------------- | --------------------------- |
| Numéro de commande    | 1452                        |
| Thread safe           | yes |
| Modifie les variables | error                       |


