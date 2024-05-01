---
id: DataStoreClass
title: DataStore
---

A [Datastore](ORDA/dsMapping.md#datastore) is the interface object provided by ORDA to reference and access a database. `Datastore` objects are returned by the following commands:

- [ds](#ds): a shortcut to the main datastore
- [Open datastore](#open-datastore): to open any remote datastore

### Sommaire

|                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #DataStoreClass.cancelTransaction().Syntax -->](#canceltransaction)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.cancelTransaction().Summary -->                   |
| [<!-- INCLUDE #DataStoreClass.clearAllRemoteContexts().Syntax -->](#clearallremotecontexts)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.clearAllRemoteContexts().Summary -->    |
| [<!-- INCLUDE DataStoreClass.dataclassName.Syntax -->](#dataclassname)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE DataStoreClass.dataclassName.Summary -->                                     |
| [<!-- INCLUDE #DataStoreClass.encryptionStatus().Syntax -->](#encryptionstatus)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.encryptionStatus().Summary -->                      |
| [<!-- INCLUDE #DataStoreClass.flushAndLock().Syntax -->](#flushAndLock)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.flushAndLock().Summary -->                                  |
| [<!-- INCLUDE #DataStoreClass.getAllRemoteContexts().Syntax -->](#getallremotecontexts)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.getAllRemoteContexts().Summary -->          |
| [<!-- INCLUDE #DataStoreClass.getGlobalStamp().Syntax -->](#getglobalstamp)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.getGlobalStamp().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.getInfo().Syntax -->](#getinfo)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.getInfo().Summary -->                                                 |
| [<!-- INCLUDE #DataStoreClass.getRemoteContextInfo().Syntax -->](#getremotecontextinfo)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.getRemoteContextInfo().Summary -->          |
| [<!-- INCLUDE #DataStoreClass.getRequestLog().Syntax -->](#getrequestlog)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.getRequestLog().Summary -->                               |
| [<!-- INCLUDE #DataStoreClass.locked().Syntax -->](#locked)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.locked().Summary -->                                                    |
| [<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Syntax -->](#makeselectionsalterable)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Summary --> |
| [<!-- INCLUDE #DataStoreClass.provideDataKey().Syntax -->](#providedatakey)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.provideDataKey().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.setAdminProtection().Syntax -->](#setadminprotection)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.setAdminProtection().Summary -->                |
| [<!-- INCLUDE #DataStoreClass.setGlobalStamp().Syntax -->](#setglobalstamp)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.setGlobalStamp().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.setRemoteContextInfo().Syntax -->](#setremotecontextinfo)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.setRemoteContextInfo().Summary -->          |
| [<!-- INCLUDE #DataStoreClass.startRequestLog().Syntax -->](#startrequestlog)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.startRequestLog().Summary -->                         |
| [<!-- INCLUDE #DataStoreClass.startTransaction().Syntax -->](#starttransaction)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.startTransaction().Summary -->                      |
| [<!-- INCLUDE #DataStoreClass.stopRequestLog().Syntax -->](#stoprequestlog)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.stopRequestLog().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.unlock().Syntax -->](#unlock)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.unlock().Summary -->                                                    |
| [<!-- INCLUDE #DataStoreClass.validateTransaction().Syntax -->](#validatetransaction)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataStoreClass.validateTransaction().Summary -->             |

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

If you omit the _localID_ parameter (or pass an empty string ""), the command returns a reference to the datastore matching the local 4D database (or the 4D Server database in case of opening a remote database on 4D Server). The datastore is opened automatically and available directly through `ds`.

You can also get a reference on an open remote datastore by passing its local id in the _localID_ parameter. The datastore must have been previously opened with the [`Open datastore`](#open-datastore) command by the current database (host or component). L'identifiant local est défini lors de l'utilisation de cette commande.

> La portée de l'identifiant local est la base de données dans laquelle le datastore a été ouvert.

If no _localID_ datastore is found, the command returns **Null**.

Objects available in the `cs.Datastore` are mapped from the target database with respect to the [ORDA general rules](ORDA/dsMapping.md#general-rules).

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

| Release | Modifications |
| ------- | ------------- |
| 18      | Ajout         |

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

The _connectionInfo_ 4D database must be available as a remote datastore, i.e.:

- son serveur Web doit être lancé avec http et/ou https activé,
- the datastore must be exposed ([**Expose as REST server**](REST/configuration.md#starting-the-rest-server) option checked) as well as [dataclasses and attributes](../REST/configuration.md#exposing-tables-and-fields).

:::note

`Open datastore` requests rely on the 4D REST API and can require a 4D Client license to open the connection. Refer to the [user login mode section](../REST/authUsers.md#user-login-modes) to know how to configure the authentication depending on the selected current user login mode.

:::

If no matching database is found, `Open datastore` returns **Null**.

_localID_ is a local alias for the session opened on remote datastore. If _localID_ already exists on the application, it is used. Otherwise, a new _localID_ session is created when the datastore object is used.

Objects available in the `cs.Datastore` are mapped from the target database with respect to the [ORDA general rules](ORDA/dsMapping.md#general-rules).

Une fois la session ouverte, les instructions suivantes deviennent équivalentes et renvoient une référence sur le même objet datastore :

```4d
 $myds:=Open datastore(connectionInfo;"myLocalId")
 $myds2:=ds("myLocalId")
  //$myds et $myds2 sont équivalents
```

Pass in _connectionInfo_ an object describing the remote datastore you want to connect to. It can contain the following properties (all properties are optional except _hostname_):

| Propriété   | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hostname    | Text    | Nom ou adresse IP de la base de données distante + " :" + numéro de port (le numéro de port est obligatoire)                                                                                                                                                                                                                                                                                                |
| user        | Text    | Nom d'utilisateur                                                                                                                                                                                                                                                                                                                                                                                                                              |
| password    | Text    | Mot de passe de l'utilisateur                                                                                                                                                                                                                                                                                                                                                                                                                  |
| idleTimeout | Longint | Délai d'inactivité de la session (exprimé en minutes), au terme duquel la session est automatiquement fermée par 4D. Si cette propriété est omise, la valeur par défaut est 60 (1h). The value cannot be < 60 (if a lower value is passed, the timeout is set to 60). For more information, see **Closing sessions**. |
| tls         | Boolean | Utilisez une connexion sécurisée(\*). Si cette propriété est omise, "false" par défaut. L'utilisation d'une connexion sécurisée est recommandée dans la mesure du possible.                                                                                                                                                                                                 |
| type        | Text    | Doit être "4D Server"                                                                                                                                                                                                                                                                                                                                                                                                                          |

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

In case of error, the command returns **Null**. Si le datastore distant ne peut pas être joint (adresse incorrecte, web serveur non lancé, http et https non activés, etc.), l'erreur 1610 "Une requête vers l’hôte: {xxx} a échoué" est générée. You can intercept this error with a method installed by `ON ERR CALL`.

<!-- REF DataStoreClass.dataclassName.Desc -->

## _.dataclassName_

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF DataStoreClass.dataclassName.Syntax -->***.dataclassName*** : 4D.DataClass<!-- END REF -->

#### Description

Each dataclass in a datastore is available as a property of the [DataStore object](ORDA/dsMapping.md#datastore)data. L'objet retourné <!-- REF DataStoreClass.dataclassName.Summary -->contient la description de la dataclass<!-- END REF -->.

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

The `.cancelTransaction()` function cancels any changes made to the data during the transaction.

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

In such cases, you can use `.clearAllRemoteContexts()` to clear your contexts and keep them clean.

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

> Use the `Data file encryption status` command to determine the encryption status of any other data file.

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

- with the `.provideDataKey()` command,
- à la racine d'un appareil connecté avant l'ouverture du datastore,
- with the `Discover data key` command.

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

Once this function is executed, write operations such as `.save()` or other `.flushAndLock()` calls are frozen in all other processes until the datastore is unlocked.

When multiple calls to `.flushAndLock()` have been done in the same process, the same number of [`.unlock()`](#unlock) calls must be executed to actually unlock the datastore.

Le datastore est déverrouillé lorsque :

- the [`.unlock()`](#unlock) function is called in the same process, or
- the process that called the `.flushAndLock()` function is killed.

If the datastore is already locked from another process, the `.flushAndLock()` call is frozen and will be executed when the datastore will be unlocked.

An error is triggered if the `.flushAndLock()` function cannot be executed (e.g. it is run on a remote 4D), .

:::caution

Other 4D features and services including [backup](../Backup/backup.md), [vss](https://doc.4d.com/4Dv20/4D/20/Using-Volume-Shadow-Copy-Service-on-Windows.300-6330532.en.html), and [MSC](../MSC/overview.md) can also lock the datastore. Before calling `.flushAndLock()`, make sure no other locking action is being used, in order to avoid any unexpected interaction.

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

> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. Dans la plupart des cas, vous n'aurez pas besoin de l'utiliser.

#### Description

The `.getAllRemoteContexts()` function <!-- REF #DataStoreClass.getAllRemoteContexts().Summary -->returns a collection of objects containing information on all the active optimization contexts in the datastore<!-- END REF -->.

> For more information on how contexts can be created, see [client/server optimization](../ORDA/client-server-optimization.md#optimization-context).

Each object in the returned collection has the properties listed in the [`.getRemoteContextInfo()`](#properties-of-the-returned-object) section.

#### Exemple

The following code sets up two contexts and retrieves them using `.getAllRemoteContexts()`:

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

**Returned object**

| Propriété  | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type       | string  | <li>"4D": main datastore, available through ds </li><li>"4D Server": remote datastore, open with Open datastore</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| networked  | boolean | <li>True: the datastore is reached through a network connection.</li><li>False: the datastore is not reached through a network connection (local database)</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| localID    | text    | Identifiant du datastore sur la machine. Corresponds to the localId string given with the `Open datastore` command. Chaîne vide ("") pour le datastore principal.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| connection | object  | Objet décrivant la connexion au datastore distant (non retourné pour le datastore principal). Available properties:<table><tr><th>Property</th><th>Type</th><th>Description</th></tr><tr><td>hostname</td><td>text</td><td>IP address or name of the remote datastore + ":" + port number</td></tr><tr><td>tls</td><td>boolean</td><td>True if secured connection is used with the remote datastore</td></tr><tr><td>idleTimeout</td><td>number</td><td>Session inactivity timeout (in minutes)</td></tr><tr><td>user</td><td>text</td><td>User authenticated on the remote datastore</td></tr></table> |

- If the `.getInfo()` function is executed on a 4D Server or 4D single-user, `networked` is False.
- If the `.getInfo()` function is executed on a remote 4D, `networked` is True

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

> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. Dans la plupart des cas, vous n'aurez pas besoin de l'utiliser.

#### Description

The `.getRemoteContextInfo()` function <!-- REF #DataStoreClass.getRemoteContextInfo().Summary --> returns an object that holds information on the _contextName_ optimization context in the datastore.<!-- END REF -->.

For more information on how optimization contexts can be created, see [client/server optimization](../ORDA/client-server-optimization.md#optimization-context).

#### Objet retourné

L'objet retourné contient les propriétés suivantes :

| Propriété                                  | Type | Description                                                                                                                                                                                                                                                                                   |
| ------------------------------------------ | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                                       | Text | Nom du contexte                                                                                                                                                                                                                                                                               |
| main                                       | Text | Attribut(s) associé(s) au contexte (les noms d'attributs sont séparés par des virgules)                                                                                                                                              |
| dataclass                                  | Text | Nom de la dataclass                                                                                                                                                                                                                                                                           |
| currentItem (optionnel) | Text | The attributes of the [page mode](../ORDA/remoteDatastores.md#entity-selection-based-list-box) if the context is linked to a list box. Returned as `Null` or empty text element if the context name is not used for a list box, or if there is no context for the currentItem |

Since contexts behave as filters for attributes, if _main_ is returned empty, it means that no filter is applied, and that the server returns all the dataclass attributes.

#### Exemple

See the example from the [.setRemoteContextInfo()](#example-1-3) section.

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

You can lock the datastore using the [.flushAndLock()](#flushandlock) function before executing a snapshot of the data file, for example.

:::caution

The function will also return `True` if the datastore was locked by another administration feature such as backup or vss (see [.flushAndLock()](#flushandlock)).

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

The `.makeSelectionsAlterable()` function <!-- REF #DataStoreClass.makeSelectionsAlterable().Summary -->sets all entity selections as alterable by default in the current application datastores<!-- END REF --> (including [remote datastores](ORDA/remoteDatastores.md)). It is intended to be used once, for example in the `On Startup` database method.

When this function is not called, new entity selections can be shareable, depending on the nature of their "parent", or [how they are created](ORDA/entities.md#shareable-or-non-shareable-entity-selections).

> This function does not modify entity selections created by [`.copy()`](#copy) or `OB Copy` when the explicit `ck shared` option is used.

> **Compatibility**: This function must only be used in projects converted from 4D versions prior to 4D v18 R5 and containing [.add()](EntitySelectionClass.md#add) calls. In this context, using `.makeSelectionsAlterable()` can save time by restoring instantaneously the previous 4D behavior in existing projects.
> On the other hand, using this method in new projects created in 4D v18 R5 and higher **is not recommended**, since it prevents entity selections to be shared, which provides greater performance and scalabitlity.

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

> - The `.provideDataKey()` function must be called in an encrypted database. If it is called in a non-encrypted database, the error 2003 (the encryption key does not match the data.) is returned. Use the `Data file encryption status` command to determine if the database is encrypted.
> - The `.provideDataKey()` function cannot be called from a remote 4D or an encrypted remote datastore.

If you use the _curPassPhrase_ parameter, pass the string used to generate the data encryption key. Lorsque vous utilisez ce paramètre, une clé de chiffrement est générée.

If you use the _curDataKey_ parameter, pass an object (with _encodedKey_ property) that contains the data encryption key. This key may have been generated with the `New data key` command.

If a valid data encryption key is provided, it is added to the _keyChain_ in memory and the encryption mode is enabled:

- toutes les modifications de données apportées dans les tables chiffrables sont chiffrées sur le disque (fichiers .4DD, .journal,  . 4Dindx).
- toutes les données chargées à partir de tables chiffrables sont déchiffrées dans la mémoire

**Result**

Le résultat de la commande est décrit dans l'objet retourné :

| Propriété  |                                                                                              | Type       | Description                                                                                        |
| ---------- | -------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------- |
| success    |                                                                                              | Boolean    | Vrai si la clé de chiffrement fournie correspond aux données chiffrées, sinon Faux                 |
|            |                                                                                              |            | Properties below are returned only if success is _FALSE_                                           |
| status     |                                                                                              | Number     | Code d'erreur (4 si la clé de chiffrement fournie est erronée)                  |
| statusText |                                                                                              | Text       | Message d'erreur                                                                                   |
| errors     |                                                                                              | Collection | Pile d'erreurs. La première erreur possède l'indice le plus élevé. |
|            | \[ ].componentSignature | Text       | Nom du composant interne                                                                           |
|            | \[ ].errCode            | Number     | Numéro de l'erreur                                                                                 |
|            | \[ ].message            | Text       | Message d'erreur                                                                                   |

If no _curPassphrase_ or _curDataKey_ is given, `.provideDataKey()` returns **null** (no error is generated).

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

| Paramètres | Type    |    | Description                                                                                                             |
| ---------- | ------- | -- | ----------------------------------------------------------------------------------------------------------------------- |
| status     | Boolean | -> | True to disable Data Explorer access to data on the `webAdmin` port, False (default) to grant access |

<!-- END REF -->

#### Description

The `.setAdminProtection()` function <!-- REF #DataStoreClass.setAdminProtection().Summary -->allows disabling any data access on the [web admin port](Admin/webAdmin.md#http-port), including for the [Data Explorer](Admin/dataExplorer.md) in `WebAdmin` sessions<!-- END REF -->.

By default when the function is not called, access to data is always granted on the web administration port for a session with `WebAdmin` privilege using the Data Explorer. In some configurations, for example when the application server is hosted on a third-party machine, you might not want the administrator to be able to view your data, although they can edit the server configuration, including the [access key](Admin/webAdmin.md#access-key) settings.

In this case, you can call this function to disable the data access from Data Explorer on the web admin port of the machine, even if the user session has the `WebAdmin` privilege. Lorsque cette fonction est exécutée, le fichier de données est immédiatement protégé et le statut est sauvegardé sur disque : le fichier de données sera protégé même si l'application est redémarrée.

#### Exemple

You create a _protectDataFile_ project method to call before deployments for example:

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

> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. Dans la plupart des cas, vous n'aurez pas besoin de l'utiliser.

#### Description

The `.setRemoteContextInfo()` function <!-- REF #DataStoreClass.setRemoteContextInfo().Summary -->links the specified dataclass attributes to the _contextName_ optimization context<!-- END REF -->. Si un contexte d'optimisation existe déjà pour les attributs spécifiés, la commande le remplace.

Lorsque vous passez un contexte aux fonctions de classe ORDA, l'optimisation des requêtes REST est déclenchée immédiatement :

- la première entité n'est pas chargée intégralement, à la différence du mode automatique
- pages of 80 entities (or `pageLength` entities) are immediately asked to the server with only the attributes in the context

> For more information on how optimization contexts are built, refer to the [client/server optimization paragraph](../ORDA/client-server-optimization.md#optimization-context)

In _contextName_, pass the name of the optimization context to link to the dataclass attributes.

To designate the dataclass that will receive the context, you can pass a _dataClassName_ or a _dataClassObject_.

To designate the attributes to link to the context, pass either a list of attributes separated by a comma in _attributes_ (Text), or a collection of attribute names in _attributesColl_ (collection of text).

If _attributes_ is an empty Text, or _attributesColl_ is an empty collection, all the scalar attributes of the dataclass are put in the optimization context. Si vous passez un attribut qui n'existe pas dans la dataclass, la fonction l'ignore et une erreur est générée.

You can pass a _contextType_ to  specify if the context is a standard context or the context of the current entity selection item displayed in a list box:

- If set to "main" (default), the _contextName_ designates a standard context.
- Si sa valeur est "currentItem", les attributs passés sont intégrés dans le contexte de l'élément courant.  See  [Entity selection-based list box](../ORDA/remoteDatastores.md#entity-selection-based-list-box).

In _pageLength_, specify the number of dataclass entities to request from the server.

You can pass a _pageLength_ for a relation attribute which is an entity selection (one to many). The syntax is `relationAttributeName:pageLength` (e.g employees:20).

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

The following piece of code requests pages of 30 entities of the `Address` dataclass from the server. The returned entities only contain the `zipCode` attribute.

For each `Address` entity, 20 Persons entities are returned, and they only contain the `lastname` and `firstname` attributes:

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

| Release | Modifications                                |
| ------- | -------------------------------------------- |
| 20      | Server side support, new `options` parameter |
| 17 R6   | Ajout                                        |

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

- If you passed a _file_ object created with the `File` command, the log data is written in this file as a collection of objects (JSON format). Chaque objet représente une requête.<br/>Si le fichier n'existe pas encore, il est créé. Sinon, s'il existe déjà, les nouvelles données d'enregistrement y sont ajoutées.
  If `.startRequestLog()` is called with a file while a logging was previously started in memory, the memory log is stopped and emptied.

> Un caractère \] doit être ajouté manuellement à la fin du fichier pour effectuer une validation JSON

- If you passed a _reqNum_ integer, the log in memory is emptied (if any) and a new log is initialized. It will keep _reqNum_ requests in memory until the number is reached, in which case the oldest entries are emptied (FIFO stack).<br/>If `.startRequestLog()` is called with a _reqNum_ while a logging was previously started in a file, the file logging is stopped.

- Si vous n'avez passé aucun paramètre, l'enregistrement est lancé dans la mémoire. If `.startRequestLog()` was previously called with a _reqNum_ (before a `.stopRequestLog()`), the log data is stacked in memory until the next time the log is emptied or `.stopRequestLog()` is called.

#### Côté serveur

Pour créer un journal des requêtes ORDA côté serveur, appelez cette fonction sur la machine serveur. The log data is written in a file in `.jsonl` format. Chaque objet représente une requête. Si le fichier n'existe pas encore, il est créé. Sinon, s'il existe déjà, les nouvelles données d'enregistrement y sont ajoutées.

- If you passed the _file_ parameter, the log data is written in this file, at the requested location. - If you omit the _file_ parameter or if it is null, the log data is written in a file named _ordaRequests.jsonl_ and stored in the "/LOGS" folder.
- The _options_ parameter can be used to specify if the server response has to be logged, and if it should include the body. Par défaut, lorsque le paramètre est omis, la réponse complète est enregistrée. Les constantes suivantes peuvent être utilisées dans ce paramètre :

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

> If this method is called on the main datastore (i.e. the datastore returned by the `ds` command), the transaction is applied to all operations performed on the main datastore and on the underlying database, thus including ORDA and classic languages.

Vous pouvez imbriquer plusieurs transactions (sous-transactions). Chaque transaction ou sous-transaction doit être annulée ou validée. Note that if the main transaction is cancelled, all of its sub-transactions are also cancelled even if they were validated individually using the `.validateTransaction()` function.

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

Si le verrou courant était le seul verrou sur le datastore, les opérations d'écriture sont immédiatement réactivées. If the `.flushAndLock()` function was called several times in the process, the same number of `.unlock()` must be called to actually unlock the datastore.

The `.unlock()` function must be called from the process that called the corresponding `.flushAndLock()`, otherwise the function does nothing and the lock is not removed.

If the `.unlock()` function is called in an unlocked datastore, it does nothing.

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
