---
id: DataStoreClass
title: DataStore
---

Un [Datastore](ORDA/dsMapping.md#datastore) correspond à l'objet d'interface fourni par ORDA pour référencer et accéder à une base de données. Les objets `Datastore` sont retournés par les commandes suivantes :

- [ds](#ds) : un raccourci vers le datastore principal
- [Open datastore](#open-datastore) : pour ouvrir n'importe quel datastore distant

### Sommaire

|                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #DataStoreClass.cancelTransaction().Syntax -->](#canceltransaction)<br/><!-- INCLUDE #DataStoreClass.cancelTransaction().Summary -->                   |
| [<!-- INCLUDE #DataStoreClass.clearAllRemoteContexts().Syntax -->](#clearallremotecontexts)<br/><!-- INCLUDE #DataStoreClass.clearAllRemoteContexts().Summary -->    |
| [<!-- INCLUDE DataStoreClass.dataclassName.Syntax -->](#dataclassname)<br/><!-- INCLUDE DataStoreClass.dataclassName.Summary -->                                     |
| [<!-- INCLUDE #DataStoreClass.encryptionStatus().Syntax -->](#encryptionstatus)<br/><!-- INCLUDE #DataStoreClass.encryptionStatus().Summary -->                      |
| [<!-- INCLUDE #DataStoreClass.flushAndLock().Syntax -->](#flushAndLock)<br/><!-- INCLUDE #DataStoreClass.flushAndLock().Summary -->                                  |
| [<!-- INCLUDE #DataStoreClass.getAllRemoteContexts().Syntax -->](#getallremotecontexts)<br/><!-- INCLUDE #DataStoreClass.getAllRemoteContexts().Summary -->          |
| [<!-- INCLUDE #DataStoreClass.getGlobalStamp().Syntax -->](#getglobalstamp)<br/><!-- INCLUDE #DataStoreClass.getGlobalStamp().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.getInfo().Syntax -->](#getinfo)<br/><!-- INCLUDE #DataStoreClass.getInfo().Summary -->                                                 |
| [<!-- INCLUDE #DataStoreClass.getRemoteContextInfo().Syntax -->](#getremotecontextinfo)<br/><!-- INCLUDE #DataStoreClass.getRemoteContextInfo().Summary -->          |
| [<!-- INCLUDE #DataStoreClass.getRequestLog().Syntax -->](#getrequestlog)<br/><!-- INCLUDE #DataStoreClass.getRequestLog().Summary -->                               |
| [<!-- INCLUDE #DataStoreClass.locked().Syntax -->](#locked)<br/><!-- INCLUDE #DataStoreClass.locked().Summary -->                                                    |
| [<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Syntax -->](#makeselectionsalterable)<br/><!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Summary --> |
| [<!-- INCLUDE #DataStoreClass.provideDataKey().Syntax -->](#providedatakey)<br/><!-- INCLUDE #DataStoreClass.provideDataKey().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.setAdminProtection().Syntax -->](#setadminprotection)<br/><!-- INCLUDE #DataStoreClass.setAdminProtection().Summary -->                |
| [<!-- INCLUDE #DataStoreClass.setGlobalStamp().Syntax -->](#setglobalstamp)<br/><!-- INCLUDE #DataStoreClass.setGlobalStamp().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.setRemoteContextInfo().Syntax -->](#setremotecontextinfo)<br/><!-- INCLUDE #DataStoreClass.setRemoteContextInfo().Summary -->          |
| [<!-- INCLUDE #DataStoreClass.startRequestLog().Syntax -->](#startrequestlog)<br/><!-- INCLUDE #DataStoreClass.startRequestLog().Summary -->                         |
| [<!-- INCLUDE #DataStoreClass.startTransaction().Syntax -->](#starttransaction)<br/><!-- INCLUDE #DataStoreClass.startTransaction().Summary -->                      |
| [<!-- INCLUDE #DataStoreClass.stopRequestLog().Syntax -->](#stoprequestlog)<br/><!-- INCLUDE #DataStoreClass.stopRequestLog().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.unlock().Syntax -->](#unlock)<br/><!-- INCLUDE #DataStoreClass.unlock().Summary -->                                                    |
| [<!-- INCLUDE #DataStoreClass.validateTransaction().Syntax -->](#validatetransaction)<br/><!-- INCLUDE #DataStoreClass.validateTransaction().Summary -->             |

## ds

<details><summary>Historique</summary>

| Release | Modifications                        |
| ------- | ------------------------------------ |
| 18      | Prise en charge du paramètre localID |
| 17      | Ajout                                |

</details>

<!-- REF #_command_.ds.Syntax -->**ds** { ( *localID* : Text ) } : cs.DataStore <!-- END REF -->

<!-- REF #_command_.ds.Params -->

| Paramètres | Type                         |    | Description                            |
| ---------- | ---------------------------- | -- | -------------------------------------- |
| localID    | Text                         | -> | Identifiant local du datastore distant |
| Résultat   | cs.DataStore | <- | Nouvelle référence de datastore        |

<!-- END REF -->

#### Description

The `ds` command <!-- REF #_command_.ds.Summary -->returns a reference to the datastore matching the current 4D database or the database designated by _localID_<!-- END REF -->.

Si vous omettez le paramètre _localID_ (ou si vous passez une chaîne vide ""), la commande renvoie une référence au datastore correspondant à la base de données 4D locale (ou à la base 4D Server en cas d'ouverture d'une base de données distante sur 4D Ser Le datastore est ouvert automatiquement et est disponible directement via `ds`.

Vous pouvez également obtenir une référence sur un datastore distant ouvert en passant son identifiant local dans le paramètre _localID_. The datastore must have been previously opened with the [`Open datastore`](#open-datastore) command by the current database (host or component). L'identifiant local est défini lors de l'utilisation de cette commande.

> La portée de l'identifiant local est la base de données dans laquelle le datastore a été ouvert.

Si aucun datastore nommé _localID_ n'est trouvé, la commande renvoie **Null**.

Les objets disponibles dans le `cs.Datastore` sont créés à partir de la base de données cible en fonction des [règles générales](ORDA/dsMapping.md#règles-générales) de correspondance d'ORDA.

#### Exemple 1

Utilisation du datastore principal de la base 4D :

```4d
 $result:=ds.Employee.query("firstName = :1";"S@")
```

#### Exemple 2

```4d
 var $connectTo; $firstFrench; $firstForeign : Object

 var $frenchStudents; $foreignStudents : cs.DataStore

 $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")
 $frenchStudents:=Open datastore($connectTo;"french")

 $connectTo.hostname:="192.168.18.11:8050"
 $foreignStudents:=Open datastore($connectTo;"foreign")
  //...
  //...
 $firstFrench:=getFirst("french";"Students")
 $firstForeign:=getFirst("foreign";"Students")
```

```4d
  //getFirst method
  //getFirst(localID;dataclass) -> entity
 #DECLARE( $localId : Text; $dataClassName : Text ) -> $entity : 4D.Entity

 $0:=ds($localId)[$dataClassName].all().first()
```

## Open datastore

<details><summary>Historique</summary>

| Release | Modifications                    |
| ------- | -------------------------------- |
| 20 R4   | New _passwordAlgorithm_ property |
| 18      | Ajout                            |

</details>

<!-- REF #_command_.Open datastore.Syntax -->**Open datastore**( *connectionInfo* : Object ; *localID* : Text ) : cs.DataStore <!-- END REF -->

<!-- REF #_command_.Open datastore.Params -->

| Paramètres     | Type                         |    | Description                                                                                          |
| -------------- | ---------------------------- | -- | ---------------------------------------------------------------------------------------------------- |
| connectionInfo | Object                       | -> | Propriétés de connexion utilisées pour joindre le datastore distant                                  |
| localID        | Text                         | -> | Identifiant à affecter au datastore ouvert sur l'application locale (obligatoire) |
| Résultat       | cs.DataStore | <- | Objet datastore                                                                                      |

<!-- END REF -->

#### Description

The `Open datastore` command <!-- REF #_command_.Open datastore.Summary -->connects the application to the 4D database identified by the _connectionInfo_ parameter<!-- END REF --> and returns a matching `cs.DataStore` object associated with the _localID_ local alias.

La base de données _connectionInfo_ 4D doit être disponible en tant que datastore distant, c'est-à-dire :

- son serveur Web doit être lancé avec http et/ou https activé,
- the datastore must be exposed ([**Expose as REST server**](REST/configuration.md#starting-the-rest-server) option checked) as well as [dataclasses and attributes](../REST/configuration.md#exposing-tables-and-fields).

:::note

Les requêtes `Open datastore` reposent sur l'API REST 4D et peuvent nécessiter une licence 4D Client pour ouvrir la connexion. Référez-vous à la section [User login mode](../REST/authUsers.md#user-login-modes) pour savoir comment configurer l'authentification en fonction du mode de connexion utilisateur actuel sélectionné.

:::

Si aucune base de données correspondante n'est trouvée, `Open datastore` retourne **Null**.

_localID_ est un alias local de la session ouverte sur le datastore distant. Si _localID_ existe déjà dans l'application, il est utilisé. Sinon, une nouvelle session _localID_ est créée lors de l’utilisation de l’objet datastore.

Les objets disponibles dans le `cs.Datastore` sont créés à partir de la base de données cible en fonction des [règles générales](ORDA/dsMapping.md#règles-générales) de correspondance d'ORDA.

Une fois la session ouverte, les instructions suivantes deviennent équivalentes et renvoient une référence sur le même objet datastore :

```4d
 $myds:=Open datastore(connectionInfo;"myLocalId")
 $myds2:=ds("myLocalId")
  //$myds et $myds2 sont équivalents
```

Passez dans _connectionInfo_ un objet décrivant le datastore distant auquel vous souhaitez vous connecter. All properties are optional except _hostname_ :

| Propriété         | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hostname          | Text    | Nom ou adresse IP de la base de données distante + " :" + numéro de port (le numéro de port est obligatoire)                                                                                                                                                                                                                                                                                                                           |
| user              | Text    | Nom d'utilisateur                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| password          | Text    | User password. By default, the password is sent in clear form, therefore it is **strongly recommended** to use encrypted communications by passing `true` in the `tls` property.                                                                                                                                                                                                                                                          |
| idleTimeout       | Longint | Délai d'inactivité de la session (exprimé en minutes), au terme duquel la session est automatiquement fermée par 4D. Si cette propriété est omise, la valeur par défaut est 60 (1h). La valeur ne peut pas être < 60 (si une valeur inférieure est passée, le timeout est fixé à 60). Pour plus d'informations, voir **Fermeture des sessions**. |
| tls               | Boolean | Utilisez une connexion sécurisée(\*). Si cette propriété est omise, "false" par défaut. L'utilisation d'une connexion sécurisée est recommandée dans la mesure du possible.                                                                                                                                                                                                                            |
| passwordAlgorithm | Text    | Pass "4d-rest-digest" if the server validates the password using the [`Validate password`](https://doc.4d.com/4dv20/help/command/en/page638.html) command with the _digest_ parameter set to `true`.                                                                                                                                                                                                                                                      |
| type              | Text    | Doit être "4D Server"                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

(\*) Si tls est vrai, le protocole HTTPS est utilisé si :

- HTTPS est activé sur le datastore distant
- Le port donné correspond au port HTTPS configuré dans les propriétés
- Un certificat valide et une clé de chiffrement privée sont installés dans la base. Sinon, l'erreur "1610 - Une requête vers l’hôte: "{xxx}" a échoué" est générée

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

#### Gestion des erreurs

En cas d'erreur, la commande retourne **Null**. Si le datastore distant ne peut pas être joint (adresse incorrecte, web serveur non lancé, http et https non activés, etc.), l'erreur 1610 "Une requête vers l’hôte: {xxx} a échoué" est générée. Vous pouvez intercepter cette erreur avec une méthode installée par `ON ERR CALL`.

<!-- REF DataStoreClass.dataclassName.Desc -->

## _.dataclassName_

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF DataStoreClass.dataclassName.Syntax -->***.dataclassName*** : 4D.DataClass<!-- END REF -->

#### Description

Chaque dataclass d'un datastore est disponible en tant que propriété de l'objet [DataStore](ORDA/dsMapping.md#datastore). L'objet retourné <!-- REF DataStoreClass.dataclassName.Summary -->contient la description de la dataclass<!-- END REF -->.

#### Exemple

```4d
 var $emp : cs.Employee
 var $sel : cs.EmployeeSelection
 $emp:=ds.Employee //$emp contient la dataclass Employee 
 $sel:=$emp.all() //obtient une entity selection de tous les employés

  //vous poubez également saisir directement :
 $sel:=ds.Employee.all()
```

<!-- END REF -->

<!-- REF DataStoreClass.cancelTransaction().Desc -->

## .cancelTransaction()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18      | Ajout         |

</details>

<!-- REF #DataStoreClass.cancelTransaction().Syntax -->**.cancelTransaction()**<!-- END REF -->

<!-- REF #DataStoreClass.cancelTransaction().Params -->

| Paramètres | Type |     | Description                 |
| ---------- | ---- | :-: | --------------------------- |
|            |      |     | Ne requiert aucun paramètre |

<!-- END REF -->

#### Description

The `.cancelTransaction()` function <!-- REF #DataStoreClass.cancelTransaction().Summary -->cancels the transaction<!-- END REF --> opened by the [`.startTransaction()`](#starttransaction) function at the corresponding level in the current process for the specified datastore.

La fonction `.cancelTransaction()` annule toutes les modifications apportées aux données durant la transaction.

Vous pouvez imbriquer plusieurs transactions (sous-transactions). If the main transaction is cancelled, all of its sub-transactions are also cancelled, even if they were validated individually using the [`.validateTransaction()`](#validatetransactions) function.

#### Exemple

See example for the [`.startTransaction()`](#starttransaction) function.

<!-- END REF -->

<!-- REF #DataStoreClass.clearAllRemoteContexts().Desc -->

## .clearAllRemoteContexts()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R5   | Ajout         |

</details>

<!-- REF #DataStoreClass.clearAllRemoteContexts().Syntax -->**.clearAllRemoteContexts()**<!-- END REF -->

<!-- REF #DataStoreClass.clearAllRemoteContexts().Params -->

| Paramètres | Type |     | Description                 |
| ---------- | ---- | :-: | --------------------------- |
|            |      |     | Ne requiert aucun paramètre |

<!-- END REF -->

#### Description

The `.clearAllRemoteContexts()` function <!-- REF #DataStoreClass.clearAllRemoteContexts().Summary -->clears all the attributes for all the active contexts in the datastore<!-- END REF -->.

Cette fonction est utile principalement dans le contexte du débogage. Gardez à l'esprit que lorsque vous ouvrez le débogueur, il envoie des requêtes au serveur et récupère tous les attributs de la dataclass pour les afficher. Cela peut surcharger vos contextes avec des données inutiles.

Si cela se produit, vous pouvez utiliser `.clearAllRemoteContexts()` pour réinitialiser vos contextes.

#### Voir également

[.getRemoteContextInfo()](#getremotecontextinfo)<br/>[.getAllRemoteContexts()](#getallremotecontexts)<br/>[.setRemoteContextInfo()](#setremotecontextinfo)

<!-- REF DataStoreClass.encryptionStatus().Desc -->

## .encryptionStatus()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #DataStoreClass.encryptionStatus().Syntax -->**.encryptionStatus()**: Object<!-- END REF -->

<!-- REF #DataStoreClass.encryptionStatus().Params -->

| Paramètres | Type   |     | Description                                                             |
| ---------- | ------ | :-: | ----------------------------------------------------------------------- |
| Résultat   | Object |  <- | Informations sur le chiffrement du datastore courant et de chaque table |

<!-- END REF -->

#### Description

The `.encryptionStatus()` function <!-- REF #DataStoreClass.encryptionStatus().Summary -->returns an object providing the encryption status for the current data file<!-- END REF --> (i.e., the data file of the `ds` datastore). Le statut de chiffrement pour chaque table est également fourni.

> Utilisez la commande `Data file encryption status` pour déterminer l'état de cryptage de tout autre fichier de données.

**Valeur retournée**

L'objet retourné contient les propriétés suivantes :

| Propriété   |             |               | Type    | Description                                                                                                                   |
| ----------- | ----------- | ------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| isEncrypted |             |               | Boolean | Vrai si le fichier de données est chiffré                                                                                     |
| keyProvided |             |               | Boolean | Vrai si la clé de chiffrement correspondant au fichier de données chiffré est fournie(\*). |
| tables      |             |               | Object  | Objet contenant autant de propriétés que de tables chiffrables ou chiffrées.                                  |
|             | _tableName_ |               | Object  | Table chiffrable ou chiffrée                                                                                                  |
|             |             | name          | Text    | Nom de la table                                                                                                               |
|             |             | num           | Number  | Numéro de la table                                                                                                            |
|             |             | isEncryptable | Boolean | Vrai si la table est déclarée chiffrable dans le fichier de structure                                                         |
|             |             | isEncrypted   | Boolean | Vrai si les enregistrements de la table sont chiffrés dans le fichier de données                                              |

(\*) La clé de chiffrement peut être fournie :

- via la fonction `.provideDataKey()`,
- à la racine d'un appareil connecté avant l'ouverture du datastore,
- via la commande `Discover data key`.

#### Exemple

Vous souhaitez connaitre le nombre de tables chiffrées dans le fichier de données courant :

```4d
 var $status : Object

 $status:=ds.encryptionStatus()

 If($status.isEncrypted) //the database is encrypted
    C_LONGINT($vcount)
    C_TEXT($tabName)
    For each($tabName;$status.tables)
       If($status.tables[$tabName].isEncrypted)
          $vcount:=$vcount+1
       End if
    End for each
    ALERT(String($vcount)+" encrypted table(s) in this datastore.")
 Else
    ALERT("This database is not encrypted.")
 End if
```

<!-- END REF -->

<!-- REF DataClassClass.flushAndLock().Desc -->

## .flushAndLock()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20      | Ajout         |

</details>

<!-- REF #DataStoreClass.flushAndLock().Syntax -->**.flushAndLock()**<!-- END REF -->

<!-- REF #DataStoreClass.flushAndLock().Params -->

| Paramètres | Type |   | Description                 |
| ---------- | ---- | - | --------------------------- |
|            |      |   | Ne requiert aucun paramètre |

<!-- END REF -->

#### Description

The `.flushAndLock()` function <!-- REF #DataStoreClass.flushAndLock().Summary -->flushes the cache of the local datastore and prevents other processes from performing write operations on the database<!-- END REF -->. Le datastore est placé dans un état cohérent et figé. L'appel de cette fonction est nécessaire avant l'exécution d'un instantané d'application (snapshot), par exemple.

:::info

Cette fonction ne peut être appelée que :

- on the local datastore ([`ds`](#ds)).
- dans un environnement client/serveur, sur la machine serveur.

:::

Une fois cette fonction exécutée, les opérations d'écriture telles que `.save()` ou les autres appels `.flushAndLock()` sont figés dans tous les autres process jusqu'à ce que le datastore soit déverrouillé.

When multiple calls to `.flushAndLock()` have been done in the same process, the same number of [`.unlock()`](#unlock) calls must be executed to actually unlock the datastore.

Le datastore est déverrouillé lorsque :

- the [`.unlock()`](#unlock) function is called in the same process, or
- le process qui a appelé la fonction `.flushAndLock()` est tué.

Si le datastore est déjà verrouillé par un autre process, l'appel de `.flushAndLock()` est figé et sera exécuté lorsque le datastore sera déverrouillé.

Une erreur est déclenchée si la fonction `.flushAndLock()` ne peut pas être exécutée (par exemple, elle est exécutée sur un 4D distant).

:::caution

D'autres fonctions et services 4D, notamment le [backup](../Backup/backup.md), le [vss](https://doc.4d.com/4Dv20/4D/20/Using-Volume-Shadow-Copy-Service-on-Windows.300-6330532.en.html) et le [MSC](../MSC/overview.md) , peuvent également verrouiller le data Avant d'appeler `.flushAndLock()`, assurez-vous qu'aucune autre action de verrouillage n'est en cours d'utilisation, afin d'éviter toute interaction inattendue.

:::

#### Exemple

Vous voulez créer une copie du dossier de données avec son fichier journal courant :

```4d
$destination:=Folder(fk documents folder).folder("Archive") 
$destination.create()

ds.flushAndLock() //Bloque les opérations d'écriture des autres process

$dataFolder:=Folder(fk data folder) 
$dataFolder.copyTo($destination) //Copie le dossier de données

$oldJournalPath:=New log file //Ferme le journal et en créer un nouveau
$oldJournal:=File($oldJournalPath; fk platform path) 
$oldJournal.moveTo($destination) //Sauvegarde l'ancien journal avec les données

ds.unlock() //Notre copie est terminée, nous pouvons maintenant déverrouiller le datastore
```

#### Voir également

[.locked()](#locked)<br/>[.unlock()](#unlock)

<!-- REF DataClassClass.getAllRemoteContexts().Desc -->

## .getAllRemoteContexts()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R5   | Ajout         |

</details>

<!-- REF #DataStoreClass.getAllRemoteContexts().Syntax -->**.getAllRemoteContexts()** : Collection<!-- END REF -->

<!-- REF #DataStoreClass.getAllRemoteContexts().Params -->

| Paramètres | Type       |    | Description                                  |
| ---------- | ---------- | -- | -------------------------------------------- |
| Résultat   | Collection | <- | Collection d'objets contextes d'optimisation |

<!-- END REF -->

> **Mode avancé :** Cette fonction est destinée aux développeurs qui souhaitent personnaliser les fonctionnalités par défaut de ORDA dans le cadre de configurations spécifiques. Dans la plupart des cas, vous n'aurez pas besoin de l'utiliser.

#### Description

The `.getAllRemoteContexts()` function <!-- REF #DataStoreClass.getAllRemoteContexts().Summary -->returns a collection of objects containing information on all the active optimization contexts in the datastore<!-- END REF -->.

> Pour plus d'informations sur la façon dont les contextes peuvent être créés, voir [Optimisation client/serveur](../ORDA/client-server-optimization.md#optimization-context).

Each object in the returned collection has the properties listed in the [`.getRemoteContextInfo()`](#properties-of-the-returned-object) section.

#### Exemple

Le code suivant définit deux contextes et les récupère à l'aide de `.getAllRemoteContexts()` :

```4d
var $ds : 4D.DataStoreImplementation
var $persons : cs.PersonsSelection
var $addresses : cs.AddressSelection
var $p : cs.PersonsEntity
var $a : cs.AddressEntity
var $contextA; $contextB : Object
var $info : Collection
var $text : Text

// Accès datastore distant
$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

// définition contexte A
$contextA:=New object("context"; "contextA")
$persons:=$ds.Persons.all($contextA)
$text:=""
For each ($p; $persons)
    $text:=$p.firstname+" lives in "+$p.address.city+" / "
End for each

// définition contexte B
$contextB:=New object("context"; "contextB")
$addresses:=$ds.Address.all($contextB)
$text:=""
For each ($a; $addresses)
    $text:=$a.zipCode
End for each

// récupérer tous les contextes distants (ici contextA et contextB)
$info:=$ds.getAllRemoteContexts()
//$info = [{name:"contextB"; dataclass:"Address"; main:"zipCode"},
{name:"contextA";dataclass:"Persons";main:"firstname,address.city"}]
```

> Cet exemple est à but de démonstration, il n'est pas destiné à une implémentation réelle.

#### Voir également

[.getRemoteContextInfo()](#getremotecontextinfo)<br/>[.setRemoteContextInfo()](#setremotecontextinfo)<br/>[.clearAllRemoteContexts()](#clearallremotecontexts)

<!-- REF DataClassClass.getGlobalStamp().Desc -->

## .getGlobalStamp()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20 R3   | Ajout         |

</details>

<!-- REF #DataStoreClass.getGlobalStamp().Syntax -->**.getGlobalStamp**() : Real<!-- END REF -->

<!-- REF #DataStoreClass.getGlobalStamp().Params -->

| Paramètres | Type |    | Description                                        |
| ---------- | ---- | -- | -------------------------------------------------- |
| Résultat   | Real | <- | Valeur courante du marqueur de modification global |

<!-- END REF -->

#### Description

The `.getGlobalStamp()` function <!-- REF #DataStoreClass.getGlobalStamp().Summary -->returns the current value of the global modification stamp of the datastore<!-- END REF -->.

:::info

Cette fonction ne peut être appelée que :

- on the local datastore ([`ds`](#ds)).
- dans un environnement client/serveur, sur la machine serveur.

:::

For more information on global stamp and data change tracking, please refer to the [**Using the Global Stamp**](../ORDA/global-stamp.md) page.

#### Exemple

```4d
var $currentStamp : Real
var $hasModifications : Boolean

$currentStamp:=ds.getGlobalStamp()
methodWhichCouldModifyEmployees //exécuter du code
$hasModifications:=($currentStamp # ds.getGlobalStamp())
```

#### Voir également

[.setGlobalStamp()](#setglobalstamp)

<!-- REF DataStoreClass.getInfo().Desc -->

## .getInfo()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #DataStoreClass.getInfo().Syntax -->**.getInfo()**: Object<!-- END REF -->

<!-- REF #DataStoreClass.getInfo().Params -->

| Paramètres | Type   |     | Description             |
| ---------- | ------ | :-: | ----------------------- |
| Résultat   | Object |  <- | Propriétés du datastore |

<!-- END REF -->

#### Description

The `.getInfo()` function <!-- REF #DataStoreClass.getInfo().Summary -->returns an object providing information about the datastore<!-- END REF -->. Cette fonction est utile pour l'écriture de code générique.

**Objet retourné**

| Propriété  | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type       | string  | <li>"4D": main datastore, available through ds </li><li>"4D Server": remote datastore, open with Open datastore</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| networked  | boolean | <li>True: the datastore is reached through a network connection.</li><li>False: the datastore is not reached through a network connection (local database)</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| localID    | text    | Identifiant du datastore sur la machine. Correspond à la chaîne localID donnée avec la commande `Open datastore`. Chaîne vide ("") pour le datastore principal.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| connection | object  | Objet décrivant la connexion au datastore distant (non retourné pour le datastore principal). Available properties:<table><tr><th>Property</th><th>Type</th><th>Description</th></tr><tr><td>hostname</td><td>text</td><td>IP address or name of the remote datastore + ":" + port number</td></tr><tr><td>tls</td><td>boolean</td><td>True if secured connection is used with the remote datastore</td></tr><tr><td>idleTimeout</td><td>number</td><td>Session inactivity timeout (in minutes)</td></tr><tr><td>user</td><td>text</td><td>User authenticated on the remote datastore</td></tr></table> |

- Si la fonction `.getInfo()` est exécutée sur un 4D Server ou un 4D monoposte, `networked` est Faux.
- Si la fonction `.getInfo()` est exécutée sur un 4D distant, `networked` est Vrai

#### Exemple 1

```4d
 var $info : Object

 $info:=ds.getInfo() //Exécuté sur 4D Server ou 4D
  //{"type":"4D","networked":false,"localID":""}

 $info:=ds.getInfo() // Exécuté sur 4D distant
  //{"type":"4D","networked":true,"localID":""}
```

#### Exemple 2

Sur un datastore distant :

```4d
  var $remoteDS : cs.DataStore
  var $info; $connectTo : Object

 $connectTo:=New object("hostname";"111.222.33.44:8044";"user";"marie";"password";"aaaa")
 $remoteDS:=Open datastore($connectTo;"students")
 $info:=$remoteDS.getInfo()

  //{"type":"4D Server",
  //"localID":"students",
  //"networked":true,
  //"connection":{hostname:"111.222.33.44:8044","tls":false,"idleTimeout":2880,"user":"marie"}}
```

<!-- END REF -->

<!-- REF #DataStoreClass.getRemoteContextInfo().Desc -->

## .getRemoteContextInfo()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R5   | Ajout         |

</details>

<!-- REF #DataStoreClass.getRemoteContextInfo().Syntax -->**.getRemoteContextInfo**(*contextName* : Text) : Object <!-- END REF -->

<!-- REF #DataStoreClass.getRemoteContextInfo().Params -->

| Paramètres  | Type   |    | Description             |
| ----------- | ------ | -- | ----------------------- |
| contextName | Text   | -> | Nom du contexte         |
| Résultat    | Object | <- | Description du contexte |

<!-- END REF -->

> **Mode avancé :** Cette fonction est destinée aux développeurs qui souhaitent personnaliser les fonctionnalités par défaut de ORDA dans le cadre de configurations spécifiques. Dans la plupart des cas, vous n'aurez pas besoin de l'utiliser.

#### Description

The `.getRemoteContextInfo()` function <!-- REF #DataStoreClass.getRemoteContextInfo().Summary --> returns an object that holds information on the _contextName_ optimization context in the datastore.<!-- END REF -->.

Pour plus d'informations sur la façon dont les contextes peuvent être créés, voir [Optimisation client/serveur](../ORDA/client-server-optimization.md#optimization-context).

#### Objet retourné

L'objet retourné contient les propriétés suivantes :

| Propriété                                  | Type | Description                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| name                                       | Text | Nom du contexte                                                                                                                                                                                                                                                                                                                            |
| main                                       | Text | Attribut(s) associé(s) au contexte (les noms d'attributs sont séparés par des virgules)                                                                                                                                                                                           |
| dataclass                                  | Text | Nom de la dataclass                                                                                                                                                                                                                                                                                                                        |
| currentItem (optionnel) | Text | Attributs du [mode page](../ORDA/remoteDatastores.md#listbox-basée-sur-une-sélection-dentités) si le contexte est lié à une list box. Retourn `Null` ou un élément de texte vide si le contexte n'est pas utilisé pour une list box, ou s'il n'y a pas de contexte pour l'élément courant (currentItem) |

Comme les contextes se comportent comme des filtres d'attributs, si _main_ est retourné vide, cela signifie qu'aucun filtre n'est appliqué et que le serveur donc retourne tous les attributs de la dataclass.

#### Exemple

Voir l'exemple de la section [.setRemoteContextInfo()](#example-1-3).

#### Voir également

[.setRemoteContextInfo()](#setremotecontextinfo)<br/>[.getAllRemoteContexts()](#getallremotecontexts)<br/>[.clearAllRemoteContexts()](#clearallremotecontexts)

<!-- REF DataStoreClass.getRequestLog().Desc -->

## .getRequestLog()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R6   | Ajout         |

</details>

<!-- REF #DataStoreClass.getRequestLog().Syntax -->**.getRequestLog()** : Collection<!-- END REF -->

<!-- REF #DataStoreClass.getRequestLog().Params -->

| Paramètres | Type       |     | Description                                |
| ---------- | ---------- | :-: | ------------------------------------------ |
| Résultat   | Collection |  <- | Collection d'objets décrivant les requêtes |

<!-- END REF -->

#### Description

The `.getRequestLog()` function <!-- REF #DataStoreClass.getRequestLog().Summary -->returns the ORDA requests logged in memory on the client side<!-- END REF -->. The ORDA request logging must have previously been enabled using the [`.startRequestLog()`](#startrequestlog) function.

Cette fonction doit être appelée sur un client 4D distant, sinon elle retourne une collection vide. Elle est conçue à des fins de débogage dans les configurations client/serveur.

**Valeur retournée**

Collection d'objets requête empilés. La requête la plus récente porte l'indice 0.

For a description of the ORDA request log format, please refer to the [**ORDA client requests**](https://doc.4d.com/4Dv18/4D/18/Description-of-log-files.300-4575486.en.html#4385373) section.

#### Exemple

See Example 2 of [`.startRequestLog()`](#startrequestlog).

<!-- END REF -->

<!-- REF DataStoreClass.isAdminProtected().Desc -->

## .isAdminProtected()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R6   | Ajout         |

</details>

<!-- REF #DataStoreClass.isAdminProtected().Syntax -->**.isAdminProtected()** : Boolean<!-- END REF -->

<!-- REF #DataStoreClass.isAdminProtected().Params -->

| Paramètres | Type    |     | Description                                                                                      |
| ---------- | ------- | :-: | ------------------------------------------------------------------------------------------------ |
| Résultat   | Boolean |  <- | Vrai si l'accès au Data Explorer est désactivé, Faux s'il est activé (défaut) |

<!-- END REF -->

#### Description

The `.isAdminProtected()` function <!-- REF #DataStoreClass.isAdminProtected().Summary -->returns `True` if [Data Explorer](Admin/dataExplorer.md) access has been disabled for the working session<!-- END REF -->.

By default, the Data Explorer access is granted for `webAdmin` sessions, but it can be disabled to prevent any data access from administrators (see the [`.setAdminProtection()`](#setadminprotection) function).

#### Voir également

[`.setAdminProtection()`](#setadminprotection)

<!-- END REF -->

<!-- REF DataClassClass.locked().Desc -->

## .locked()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20      | Ajout         |

</details>

<!-- REF #DataStoreClass.locked().Syntax -->**.locked()** : Boolean<!-- END REF -->

<!-- REF #DataStoreClass.locked().Params -->

| Paramètres | Type    |    | Description        |
| ---------- | ------- | -- | ------------------ |
| Résultat   | Boolean | <- | Vrai si verrouillé |

<!-- END REF -->

#### Description

The `.locked()` function <!-- REF #DataStoreClass.locked().Summary -->returns True if the local datastore is currently locked<!-- END REF -->.

Vous pouvez verrouiller le datastore à l'aide de la fonction [.flushAndLock()](#flushandlock) avant d'exécuter un instantané du fichier de données, par exemple.

:::caution

La fonction renvoie également `True` si le datastore a été verrouillé par une autre fonction d'administration telle que la sauvegarde ou le vss (voir [.flushAndLock()](#flushandlock)).

:::

#### Voir également

[.flushAndLock()](#flushandlock)<br/>[.unlock()](#unlock)

<!-- REF DataStoreClass.makeSelectionsAlterable().Desc -->

## .makeSelectionsAlterable()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R5   | Ajout         |

</details>

<!-- REF #DataStoreClass.makeSelectionsAlterable().Syntax -->**.makeSelectionsAlterable()**<!-- END REF -->

<!-- REF #DataStoreClass.makeSelectionsAlterable().Params -->

| Paramètres | Type |     | Description                 |
| ---------- | ---- | :-: | --------------------------- |
|            |      |     | Ne requiert aucun paramètre |

<!-- END REF -->

#### Description

The `.makeSelectionsAlterable()` function <!-- REF #DataStoreClass.makeSelectionsAlterable().Summary -->sets all entity selections as alterable by default in the current application datastores<!-- END REF --> (including [remote datastores](ORDA/remoteDatastores.md)). Elle est destinée à être appelée une fois, par exemple dans la méthode base `On Startup`.

Lorsque cette méthode n'est pas appelée, les nouvelles sélections d'entités peuvent être partageables, selon la nature de leur "parent" ou la façon dont elles sont créées (voir la section [Entity selections partageables et non partageables](ORDA/entities.

> This function does not modify entity selections created by [`.copy()`](#copy) or `OB Copy` when the explicit `ck shared` option is used.

> **Compatibilité** : Cette fonction doit être utilisée uniquement dans des projets convertis à partir de versions de 4D antérieures à 4D v18 R5 et contenant des appels [.add()](EntitySelectionClass.md#add). Dans ce contexte, l'utilisation de `.makeSelectionsAlterable()` peut faire gagner du temps en restaurant instantanément le précédent comportement 4D dans les projets existants.
> En revanche, l'utilisation de cette méthode dans les nouveaux projets créés dans 4D v18 R5 et les versions plus récentes **n'est pas recommandée**, car elle empêche le partage des entity selections, ce qui offre de meilleures performances et une plus gran

<!-- END REF -->

<!-- REF DataStoreClass.provideDataKey().Desc -->

## .provideDataKey()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #DataStoreClass.provideDataKey().Syntax -->**.provideDataKey**( *curPassPhrase* : Text ) : Object <br/>**.provideDataKey**( *curDataKey* : Object ) : Object <!-- END REF -->

<!-- REF #DataStoreClass.provideDataKey().Params -->

| Paramètres    | Type   |    | Description                                                    |
| ------------- | ------ | -- | -------------------------------------------------------------- |
| curPassPhrase | Text   | -> | Phrase secrète courante                                        |
| curDataKey    | Object | -> | Clé de chiffrement des données courante                        |
| Résultat      | Object | <- | Résultat de la mise en correspondance de la clé de chiffrement |

<!-- END REF -->

#### Description

The `.provideDataKey()` function <!-- REF #DataStoreClass.provideDataKey().Summary -->allows providing a data encryption key for the current data file of the datastore and detects if the key matches the encrypted data<!-- END REF -->. Cette fonction peut être utilisée à l'ouverture d'une base chiffrée, ou à l'exécution de n'importe quelle opération de chiffrement qui nécessite la clé de chiffrement, telle que le re-chiffrement du fichier de données.

> - La fonction `.provideDataKey()` doit être appelée dans une base de données chiffrée. If it is called in a non-encrypted database, the error 2003 (the encryption key does not match the data.) is returned. Utilisez la commande `Data file encryption status` pour déterminer si la base de données est chiffrée.
> - La fonction `.provideDataKey()` ne peut pas être appelée depuis un 4D distant ou un datastore distant chiffré.

Si vous utilisez le paramètre _curPassPhrase_, passez la chaîne utilisée pour générer la clé de chiffrement des données. Lorsque vous utilisez ce paramètre, une clé de chiffrement est générée.

Si vous utilisez le paramètre _curDataKey_, passez un objet (avec la propriété _encodedKey_) contenant la clé de chiffrement des données. Cette clé peut avoir été générée à l'aide de la commande `New data key`.

Si une clé de chiffrement des données valide est fournie, elle est ajoutée à la _keyChain_ dans la mémoire et le mode chiffrement est activé :

- toutes les modifications de données apportées dans les tables chiffrables sont chiffrées sur le disque (fichiers .4DD, .journal,  . 4Dindx).
- toutes les données chargées à partir de tables chiffrables sont déchiffrées dans la mémoire

**Result**

Le résultat de la commande est décrit dans l'objet retourné :

| Propriété  |                                                                                              | Type       | Description                                                                                        |
| ---------- | -------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------- |
| success    |                                                                                              | Boolean    | Vrai si la clé de chiffrement fournie correspond aux données chiffrées, sinon Faux                 |
|            |                                                                                              |            | Les propriétés ci-dessous sont retournées uniquement si success est à _Faux_                       |
| status     |                                                                                              | Number     | Code d'erreur (4 si la clé de chiffrement fournie est erronée)                  |
| statusText |                                                                                              | Text       | Message d'erreur                                                                                   |
| errors     |                                                                                              | Collection | Pile d'erreurs. La première erreur possède l'indice le plus élevé. |
|            | \[ ].componentSignature | Text       | Nom du composant interne                                                                           |
|            | \[ ].errCode            | Number     | Numéro de l'erreur                                                                                 |
|            | \[ ].message            | Text       | Message d'erreur                                                                                   |

Si aucun paramètre _curPassphrase_ ou _curDataKey_ n'est fourni, `.provideDataKey()` retourne **null** (aucune erreur n'est générée).

#### Exemple

```4d
 var $keyStatus : Object
 var $passphrase : Text

 $passphrase:=Request("Enter the passphrase")
 If(OK=1)
    $keyStatus:=ds.provideDataKey($passphrase)
    If($keyStatus.success)
       ALERT("You have provided a valid encryption key")
    Else
       ALERT("You have provided an invalid encryption key, you will not be able to work with encrypted data")
    End if
 End if
```

<!-- END REF -->

<!-- REF DataStoreClass.setAdminProtection().Desc -->

## .setAdminProtection()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R6   | Ajout         |

</details>

<!-- REF #DataStoreClass.setAdminProtection().Syntax -->

**.setAdminProtection**( _status_ : Boolean )<!-- END REF -->

<!-- REF #DataStoreClass.setAdminProtection().Params -->

| Paramètres | Type    |    | Description                                                                                                                   |
| ---------- | ------- | -- | ----------------------------------------------------------------------------------------------------------------------------- |
| status     | Boolean | -> | Vrai pour désactiver l'accès au Data Explorer sur le port `webAdmin`, Faux (défaut) pour permettre l'accès |

<!-- END REF -->

#### Description

The `.setAdminProtection()` function <!-- REF #DataStoreClass.setAdminProtection().Summary -->allows disabling any data access on the [web admin port](Admin/webAdmin.md#http-port), including for the [Data Explorer](Admin/dataExplorer.md) in `WebAdmin` sessions<!-- END REF -->.

Par défaut lorsque la fonction n'est pas appelée, l'accès aux données est possible via le Data Explorer sur le port d'administration web pour une session avec le privilège `WebAdmin` . In some configurations, for example when the application server is hosted on a third-party machine, you might not want the administrator to be able to view your data, although they can edit the server configuration, including the [access key](Admin/webAdmin.md#access-key) settings.

Dans ce cas, vous pouvez appeler cette fonction pour désactiver l'accès aux données depuis le Data Explorer sur le port web admin de la machine, même pour les sessions utilisateurs ayant le privilège `WebAdmin`. Lorsque cette fonction est exécutée, le fichier de données est immédiatement protégé et le statut est sauvegardé sur disque : le fichier de données sera protégé même si l'application est redémarrée.

#### Exemple

Vous créez une méthode projet _protectDataFile_ à appeler par exemple avant le déploiement :

```4d
 ds.setAdminProtection(True) //Désactive l'accès aux données de l'Explorateur de données
```

#### Voir également

[`.isAdminProtected()`](#isadminprotected)

<!-- END REF -->

<!-- REF DataClassClass.setGlobalStamp().Desc -->

## .setGlobalStamp()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20 R3   | Ajout         |

</details>

<!-- REF #DataStoreClass.setGlobalStamp().Syntax -->**.setGlobalStamp**( *newStamp* : Real)<!-- END REF -->

<!-- REF #DataStoreClass.setGlobalStamp().Params -->

| Paramètres | Type |    | Description                                        |
| ---------- | ---- | -- | -------------------------------------------------- |
| newStamp   | Real | -> | Nouvelle valeur du marqueur de modification global |

<!-- END REF -->

:::info Mode avancé

Cette fonction est destinée aux développeurs qui ont besoin de modifier la valeur courante du marqueur global. Elle doit être utilisée avec précaution.

:::

#### Description

The `.setGlobalStamp()` function <!-- REF #DataStoreClass.setGlobalStamp().Summary -->sets _newStamp_ as new value for the current global modification stamp for the datastore<!-- END REF -->.

:::info

Cette fonction ne peut être appelée que :

- on the local datastore ([`ds`](#ds)).
- dans un environnement client/serveur, sur la machine serveur.

:::

For more information on global stamp and data change tracking, please refer to the [**Using the Global Stamp**](../ORDA/global-stamp.md) page.

#### Exemple

Le code suivant définit le marqueur de modification global:

```4d
var $newValue: Real
$newValue:=ReadValueFrom //on obtient une valeur à assigner
ds.setGlobalStamp($newValue)
```

#### Voir également

[.getGlobalStamp()](#getglobalstamp)

<!-- REF #DataStoreClass.setRemoteContextInfo().Desc -->

## .setRemoteContextInfo()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R5   | Ajout         |

</details>

<!-- REF #DataStoreClass.setRemoteContextInfo().Syntax -->**.setRemoteContextInfo**( *contextName* : Text ; *dataClassName* : Text ; *attributes* : Text {; *contextType* : Text { ; *pageLength* : Integer}})<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassName* : Text; *attributesColl* : Collection {; *contextType* : Text { ; *pageLength* : Integer }} )<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassObject* : 4D.DataClass ; *attributes* : Text {; *contextType* : Text { ; *pageLength* : Integer }})<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassObject* : 4D.DataClass ; *attributesColl* : Collection {; *contextType* : Text { ; *pageLength* : Integer }} )<!-- END REF -->

<!-- REF #DataStoreClass.setRemoteContextInfo().Params -->

| Paramètres      | Type                         |    | Description                                                                                  |
| --------------- | ---------------------------- | -- | -------------------------------------------------------------------------------------------- |
| contextName     | Text                         | -> | Nom du contexte                                                                              |
| dataClassName   | Text                         | -> | Nom de la dataclass                                                                          |
| dataClassObject | 4D.DataClass | -> | Objet dataclass (e.g datastore.Employee)  |
| attributes      | Text                         | -> | Liste d'attributs séparés par des virgules                                                   |
| attributesColl  | Collection                   | -> | Collection de noms d'attributs (text)                                     |
| contextType     | Text                         | -> | Si passé, "main" ou "currentItem"                                                            |
| pageLength      | Integer                      | -> | Taille de page de l'entity selection associée au contexte (80 par défaut) |

<!-- END REF -->

> **Mode avancé :** Cette fonction est destinée aux développeurs qui souhaitent personnaliser les fonctionnalités par défaut de ORDA dans le cadre de configurations spécifiques. Dans la plupart des cas, vous n'aurez pas besoin de l'utiliser.

#### Description

The `.setRemoteContextInfo()` function <!-- REF #DataStoreClass.setRemoteContextInfo().Summary -->links the specified dataclass attributes to the _contextName_ optimization context<!-- END REF -->. Si un contexte d'optimisation existe déjà pour les attributs spécifiés, la commande le remplace.

Lorsque vous passez un contexte aux fonctions de classe ORDA, l'optimisation des requêtes REST est déclenchée immédiatement :

- la première entité n'est pas chargée intégralement, à la différence du mode automatique
- des pages de 80 entités (ou de `pageLength` entités) sont imméditament demandées au serveur avec uniquement les attributs du contexte

> Pour plus d'informations sur la façon dont les contextes peuvent être créés, voir [Optimisation client/serveur](../ORDA/client-server-optimization.md#optimization-context).

Dans _contextName_, passez le nom du contexte d'optimisation à lier aux attributs de la dataclass.

Pour désigner la dataclass qui doit recevoir le contexte, vous pouvez passer un _dataClassName_ ou un _dataClassObject_.

Pour désigner les attributs à lier au contexte, passez soit une liste d'attributs séparés par des virgules dans _attributes_ (Text), soit une collection de noms d'attributs dans _attributesColl_ (collection de textes).

Si _attributes_ est un texte vide, ou si _attributesColl_ est une collection vide, tous les attributs scalaires de la dataclass sont intégrés au contexte d'optimisation. Si vous passez un attribut qui n'existe pas dans la dataclass, la fonction l'ignore et une erreur est générée.

Vous pouvez passer un _contextType_ pour spécifier si le contexte est standard ou s'il s'agit du contexte de l'élément courant de l'entity selection affichée dans une list box :

- Si sa valeur est "main" (défaut), _contextName_ désigne un contexte standard.
- Si sa valeur est "currentItem", les attributs passés sont intégrés dans le contexte de l'élément courant.  Voir  [Listbox basée sur une sélection d'entités](../ORDA/remoteDatastores.md#listbox-basée-sur-une-sélection-dentités).

Dans _pageLength_, spécifiez le nombre d'entités de dataclass à demander au serveur.

Vous pouvez passer une _pageLength_ pour un attribut relationnel qui est une entity selection (1-vers-N). La syntaxe est `relationAttributeName:pageLength` (e.g employees:20).

#### Exemple 1

```4d
var $ds : 4D.DataStoreImplementation
var $persons : cs.PersonsSelection
var $p : cs.PersonsEntity
var $contextA : Object
var $info : Object
var $text : Text

// Ouvrir datastore distant
$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

// définir le contexte
$contextA:=New object("context"; "contextA")
$ds.setRemoteContextInfo("contextA"; $ds.Persons; "firstname, lastname")

// envoi de requêtes au serveur dans une boucle
$persons:=$ds.Persons.all($contextA)
$text:=""
For each ($p; $persons)
    $text:=$p.firstname + " " + $p.lastname
End for each

// vérifier le contenu du contexte
$info:=$ds.getRemoteContextInfo("contextA")
// $info = {name:"contextA";dataclass:"Persons";main:"firstname, lastname"}
```

> Cet exemple est à but de démonstration, il n'est pas destiné à une implémentation réelle.

#### Exemple 2

Le code suivant demande des pages de 30 entités de la dataclass `Address` au serveur. Les entités retournées contiennent uniquement l'attribut `zipCode`.

Pour chaque entité `Address`, 20 entités Persons sont retournées, et elles contiennent uniquement les attributs `lastname` et `firstname` :

```4d
var $ds : 4D.DataStoreImplementation

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$ds.setRemoteContextInfo("contextA"; $ds.Address; "zipCode, persons:20,\
persons.lastname, persons.firstname"; "main"; 30)
```

#### Example 3 - Listbox

```4d
// Au chargement du formulaire
Case of
    : (Form event code=On Load)

        Form.ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

       // définir les attributs du contexte de page
        Form.ds.setRemoteContextInfo("LB"; Form.ds.Persons; "age, gender,\
        children"; "currentItem")

        Form.settings:=New object("context"; "LB")
        Form.persons:=Form.ds.Persons.all(Form.settings)
        // Form.persons est affiché dans une list box
End case

// vous récupérez les attributs dans le contexte de l'élément courant:
Form.currentItemLearntAttributes:=Form.selectedPerson.getRemoteContextAttributes()
// Form.currentItemLearntAttributes = "age, gender, children"
```

#### Voir également

[.getRemoteContextInfo()](#getremotecontextinfo)<br/>[.getAllRemoteContexts()](#getallremotecontexts)<br/>[.clearAllRemoteContexts()](#clearallremotecontexts)

<!-- REF DataStoreClass.startRequestLog().Desc -->

## .startRequestLog()

<details><summary>Historique</summary>

| Release | Modifications                                             |
| ------- | --------------------------------------------------------- |
| 20      | Prise en charge côté serveur, nouveau paramètre `options` |
| 17 R6   | Ajout                                                     |

</details>

<!-- REF #DataStoreClass.startRequestLog().Syntax -->**.startRequestLog**()<br/>**.startRequestLog**( *file* : 4D.File )<br/>**.startRequestLog**( *file* : 4D.File ; *options* : Integer )<br/>**.startRequestLog**( *reqNum* : Integer )<!-- END REF -->

<!-- REF #DataStoreClass.startRequestLog().Params -->

| Paramètres | Type                    |    | Description                                                                     |
| ---------- | ----------------------- | -- | ------------------------------------------------------------------------------- |
| file       | 4D.File | -> | Objet File                                                                      |
| options    | Integer                 | -> | Option d'enregistrement de réponse (serveur uniquement)      |
| reqNum     | Integer                 | -> | Nombre de requêtes à conserver en mémoire (client seulement) |

<!-- END REF -->

#### Description

The `.startRequestLog()` function <!-- REF #DataStoreClass.startRequestLog().Summary -->starts the logging of ORDA requests on the client side or on the server side<!-- END REF -->. Elle est conçue à des fins de débogage dans les configurations client/serveur.

:::info

For a description of the ORDA request log format, please refer to the [**ORDA requests**](../Debugging/debugLogFiles.md#orda-requests) section.

:::

#### Côté client

Pour créer un journal des requêtes ORDA côté client, appelez cette fonction sur une machine distante. Le journal peut être envoyé à un fichier ou en mémoire, selon le type de paramètre :

- Si vous avez passé un objet _file_ créé à l'aide de la commande `File`, les données de l'enregistrement sont écrites dans ce fichier sous forme de collection d'objets (format JSON). Chaque objet représente une requête.<br/>Si le fichier n'existe pas encore, il est créé. Sinon, s'il existe déjà, les nouvelles données d'enregistrement y sont ajoutées.
  Si la fonction `.startRequestLog()` est appelée avec un fichier alors qu'un enregistrement des requêtes est déjà en cours en mémoire, l'enregistrement en mémoire est stoppé et vidé.

> Un caractère \] doit être ajouté manuellement à la fin du fichier pour effectuer une validation JSON

- Si vous avez passé un numéro _reqNum_, l'enregistrement en mémoire est vidé (le cas échéant) et un nouvel enregistrement est lancé. It will keep _reqNum_ requests in memory until the number is reached, in which case the oldest entries are emptied (FIFO stack).<br/>If `.startRequestLog()` is called with a _reqNum_ while a logging was previously started in a file, the file logging is stopped.

- Si vous n'avez passé aucun paramètre, l'enregistrement est lancé dans la mémoire. Si `.startRequestLog()` a été préalablement appelée avec un _reqNum_ (avant un `.stopRequestLog()`), les données enregistrées sont empilées dans la mémoire jusqu'au prochain vidage ou appel de `.stopRequestLog()`.

#### Côté serveur

Pour créer un journal des requêtes ORDA côté serveur, appelez cette fonction sur la machine serveur. Les données du journal sont écrites dans un fichier au format `.jsonl`. Chaque objet représente une requête. Si le fichier n'existe pas encore, il est créé. Sinon, s'il existe déjà, les nouvelles données d'enregistrement y sont ajoutées.

- Si vous avez passé le paramètre _file_ , les données du journal sont écrites dans ce fichier, à l'emplacement demandé. - Si vous omettez le paramètre _file_ ou s'il est null, les données du journal sont écrites dans un fichier nommé _ordaRequests.jsonl_ et stockées dans le dossier "/LOGS".
- Le paramètre _options_ peut être utilisé pour spécifier si la réponse du serveur doit être enregistrée et si elle doit inclure le corps du message. Par défaut, lorsque le paramètre est omis, la réponse complète est enregistrée. Les constantes suivantes peuvent être utilisées dans ce paramètre :

|Constant|Description|
\|----|----|---|
|srl log all|Log the response entirely (default value)|
|srl log no response|Disable the logging of the response|
|srl log response without body|Log the response without the body|

#### Exemple 1

Vous souhaitez enregistrer des requêtes ORDA clientes dans un fichier et utiliser le numéro de séquence de l'enregistrement :

```4d
 var $file : 4D.File
 var $e : cs.PersonsEntity

 $file:=File("/LOGS/ORDARequests.txt") //logs folder

 SET DATABASE PARAMETER(Client Log Recording;1) //to trigger the global log sequence number
 ds.startRequestLog($file)
 $e:=ds.Persons.get(30001) //send a request
 ds.stopRequestLog()
 SET DATABASE PARAMETER(Client Log Recording;0)
```

#### Exemple 2

Vous souhaitez enregistrer des requêtes ORDA clientes dans la mémoire :

```4d
 var $es : cs.PersonsSelection
 var $log : Collection

 ds.startRequestLog(3) //garde 3 requêtes dans la mémoire

 $es:=ds.Persons.query("name=:1";"Marie")
 $es:=ds.Persons.query("name IN :1";New collection("Marie"))
 $es:=ds.Persons.query("name=:1";"So@")

 $log:=ds.getRequestLog()
 ALERT("The longest request lasted: "+String($log.max("duration"))+" ms")
```

#### Exemple 3

Vous souhaitez enregistrer les requêtes du serveur ORDA dans un fichier spécifique et activer le numéro de séquence du log et la durée :

```4d
SET DATABASE PARAMETER(4D Server Log Recording;1)

$file:=Folder(fk logs folder).file("myOrdaLog.jsonl")
ds.startRequestLog($file)
...
ds.stopRequestLog()
SET DATABASE PARAMETER(4D Server Log Recording;0)


```

<!-- END REF -->

<!-- REF DataStoreClass.startTransaction().Desc -->

## .startTransaction()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18      | Ajout         |

</details>

<!-- REF #DataStoreClass.startTransaction().Syntax -->**.startTransaction()**<!-- END REF -->

<!-- REF #DataStoreClass.startTransaction().Params -->

| Paramètres | Type |     | Description                 |
| ---------- | ---- | :-: | --------------------------- |
|            |      |     | Ne requiert aucun paramètre |

<!-- END REF -->

#### Description

The `.startTransaction()` function <!-- REF #DataStoreClass.startTransaction().Summary -->starts a transaction in the current process on the database matching the datastore to which it applies<!-- END REF -->. Toute modification apportée aux entités du datastore dans le process de la transaction est temporairement stockée jusqu'à ce que la transaction soit validée ou annulée.

> Si cette méthode est appelée sur le datastore principal (c'est-à-dire le datastore retourné par la commande `ds`), la transaction est appliquée à toutes les opérations effectuées sur le datastore principal et sur la base de données sous-jacente, incluant

Vous pouvez imbriquer plusieurs transactions (sous-transactions). Chaque transaction ou sous-transaction doit être annulée ou validée. A noter que si la transaction principale est annulée, toutes ses sous-transactions le sont également, même si elles avaient été validées individuellement à l'aide de la fonction `.validateTransaction()`.

#### Exemple

```4d
 var $connect; $status : Object
 var $person : cs.PersonsEntity
 var $ds : cs.DataStore
 var $choice : Text
 var $error : Boolean

 Case of
    :($choice="local")
       $ds:=ds
    :($choice="remote")
       $connect:=New object("hostname";"111.222.3.4:8044")
       $ds:=Open datastore($connect;"myRemoteDS")
 End case

 $ds.startTransaction()
 $person:=$ds.Persons.query("lastname=:1";"Peters").first()

 If($person#Null)
    $person.lastname:="Smith"
    $status:=$person.save()
 End if
 ...
 ...
 If($error)
    $ds.cancelTransaction()
 Else
    $ds.validateTransaction()
 End if
```

<!-- END REF -->

<!-- REF DataStoreClass.stopRequestLog().Desc -->

## .stopRequestLog()

<details><summary>Historique</summary>

| Release | Modifications       |
| ------- | ------------------- |
| 20      | Server side support |
| 17 R6   | Ajout               |

</details>

<!-- REF #DataStoreClass.stopRequestLog().Syntax -->**.stopRequestLog()**  <!-- END REF -->

<!-- REF #DataStoreClass.stopRequestLog().Params -->

| Paramètres | Type |   | Description                 |
| ---------- | ---- | - | --------------------------- |
|            |      |   | Ne requiert aucun paramètre |

<!-- END REF -->

#### Description

The `.stopRequestLog()` function <!-- REF #DataStoreClass.stopRequestLog().Summary -->stops any logging of ORDA requests on the machine it is called (client or server)<!-- END REF -->.

It actually closes the opened document on disk. On the client side, if the log was started in memory, it is stopped.

This function does nothing if logging of ORDA requests was not started on the machine.

#### Exemple

See examples for [`.startRequestLog()`](#startrequestlog).

<!-- END REF -->

<!-- REF DataClassClass.unlock().Desc -->

## .unlock()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20      | Ajout         |

</details>

<!-- REF #DataStoreClass.unlock().Syntax -->**.unlock()**<!-- END REF -->

<!-- REF #DataStoreClass.unlock().Params -->

| Paramètres | Type |   | Description                 |
| ---------- | ---- | - | --------------------------- |
|            |      |   | Ne requiert aucun paramètre |

<!-- END REF -->

#### Description

The `.unlock()` function <!-- REF #DataStoreClass.unlock().Summary -->removes the current lock on write operations in the datastore, if it has been set in the same process<!-- END REF -->. Write operations can be locked in the local datastore using the [`.flushAndLock()`](#flushandlock) function.

Si le verrou courant était le seul verrou sur le datastore, les opérations d'écriture sont immédiatement réactivées. Si la fonction `.flushAndLock()` a été appelée plusieurs fois dans le process, le même nombre de `.unlock()` doit être appelé pour déverrouiller réellement le datastore.

La fonction `.unlock()` doit être appelée par le process qui a appelé la fonction `.flushAndLock()`correspondante, sinon la fonction ne fait rien et le verrou n'est pas supprimé.

Si la fonction `.unlock()` est appelée dans un datastore déverrouillé, elle ne fait rien.

#### Voir également

[.flushAndLock()](#flushandlock)<br/>[.locked()](#locked)

<!-- REF DataStoreClass.validateTransaction().Desc -->

## .validateTransaction()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18      | Ajout         |

</details>

<!-- REF #DataStoreClass.validateTransaction().Syntax -->**.validateTransaction()**  <!-- END REF -->

<!-- REF #DataStoreClass.validateTransaction().Params -->

| Paramètres | Type |   | Description                 |
| ---------- | ---- | - | --------------------------- |
|            |      |   | Ne requiert aucun paramètre |

<!-- END REF -->

#### Description

The `.validateTransaction()` function <!-- REF #DataStoreClass.validateTransaction().Summary -->accepts the transaction <!-- END REF -->that was started with [`.startTransaction()`](#starttransaction) at the corresponding level on the specified datastore.

La fonction sauvegarde les modifications apportées aux données sur le datastore durant la transaction.

Vous pouvez imbriquer plusieurs transactions (sous-transactions). Si la transaction principale est annulée, toutes ses sous-transactions sont également annulées, même si elles ont été validées individuellement à l'aide de cette fonction.

#### Exemple

See example for [`.startTransaction()`](#starttransaction).

<!-- END REF -->
