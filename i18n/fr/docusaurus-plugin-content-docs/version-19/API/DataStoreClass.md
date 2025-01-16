---
id: DataStoreClass
title: DataStore
---

Un [Datastore](ORDA/dsMapping.md#datastore) correspond à l'objet d'interface fourni par ORDA pour référencer et accéder à une base de données. Les objets `Datastore` sont retournés par les commandes suivantes :

* [ds](#ds) : un raccourci vers le datastore principal
* [Open datastore](#open-datastore) : pour ouvrir n'importe quel datastore distant

### Sommaire

|                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #DataStoreClass.cancelTransaction().Syntax -->](#canceltransaction)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.cancelTransaction().Summary -->|
| [<!-- INCLUDE DataStoreClass.dataclassName.Syntax -->](#dataclassname)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataStoreClass.dataclassName.Summary --> |
| [<!-- INCLUDE #DataStoreClass.encryptionStatus().Syntax -->](#encryptionstatus)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.encryptionStatus().Summary --> |
| [<!-- INCLUDE #DataStoreClass.getInfo().Syntax -->](#getinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.getInfo().Summary --> |
| [<!-- INCLUDE #DataStoreClass.getRequestLog().Syntax -->](#getrequestlog)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.getRequestLog().Summary --> |
| [<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Syntax -->](#makeselectionsalterable)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Summary --> |
| [<!-- INCLUDE #DataStoreClass.provideDataKey().Syntax -->](#providedatakey)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.provideDataKey().Summary --> |
| [<!-- INCLUDE #DataStoreClass.setAdminProtection().Syntax -->](#setadminprotection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.setAdminProtection().Summary --> |
| [<!-- INCLUDE #DataStoreClass.startRequestLog().Syntax -->](#startrequestlog)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.startRequestLog().Summary --> |
| [<!-- INCLUDE #DataStoreClass.startTransaction().Syntax -->](#starttransaction)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.startTransaction().Summary --> |
| [<!-- INCLUDE #DataStoreClass.stopRequestLog().Syntax -->](#stoprequestlog)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.stopRequestLog().Summary --> |
| [<!-- INCLUDE #DataStoreClass.validateTransaction().Syntax -->](#validatetransaction)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.validateTransaction().Summary --> |

## ds

<details><summary>Historique</summary>

| Release | Modifications                        |
| ------- | ------------------------------------ |
| 18      | Prise en charge du paramètre localID |
| 17      | Ajout                                |

</details>

<!-- REF #_command_.ds.Syntax -->**ds** { ( *localID* : Text ) } : cs.DataStore <!-- END REF -->


<!-- REF #_command_.ds.Params -->
| Paramètres | Type         |    | Description                                                |
| ---------- | ------------ | -- | ---------------------------------------------------------- |
| localID    | Text         | -> | Identifiant local du datastore distant                     |
| Résultat   | cs.DataStore | <- | Nouvelle référence de datastore|<!-- END REF -->

|

#### Description

La commande `ds` <!-- REF #_command_.ds.Summary -->retourne une nouvelle référence vers le datastore correspondant à la base de données 4D courante ou à la base désignée par *localID*<!-- END REF -->.

Si vous omettez le paramètre *localID* (ou si vous passez une chaîne vide ""), la commande renvoie une référence au datastore correspondant à la base de données 4D locale (ou à la base 4D Server en cas d'ouverture d'une base de données distante sur 4D Server). Le datastore est ouvert automatiquement et est disponible directement via `ds`.

Vous pouvez également obtenir une référence sur un datastore distant ouvert en passant son identifiant local dans le paramètre *localID*. Le datastore doit avoir été préalablement ouvert avec la commande [`Open datastore`](#open-datastore) par la base de données courante (hôte ou composant). L'identifiant local est défini lors de l'utilisation de cette commande.
> La portée de l'identifiant local est la base de données dans laquelle le datastore a été ouvert.

Si aucun datastore nommé *localID* n'est trouvé, la commande renvoie **Null**.

L'utilisation de `ds` nécessite que la base de données cible soit conforme à ORDA. Les règles suivantes s'appliquent :

* Un datastore ne référence que les tables avec une seule clé primaire. A datastore only references tables with a single primary key.
* Les attributs de type BLOB ne sont pas gérés via le datastore.

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
  //méthode getFirst
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
| Paramètres     | Type         |    | Description                                                                       |
| -------------- | ------------ | -- | --------------------------------------------------------------------------------- |
| connectionInfo | Object       | -> | Propriétés de connexion utilisées pour joindre le datastore distant               |
| localID        | Text         | -> | Identifiant à affecter au datastore ouvert sur l'application locale (obligatoire) |
| Résultat       | cs.DataStore | <- | Objet datastore|<!-- END REF -->

|

#### Description

La commande `Open datastore` <!-- REF #_command_.Open datastore.Summary -->connecte l'application à la base de données 4D identifiée par le paramètre *connectionInfo*<!-- END REF --> et retourne un objet `cs.DataStore` associé à l'alias local *localID*.

La base de données *connectionInfo* 4D doit être disponible en tant que datastore distant, c'est-à-dire :

* son serveur Web doit être lancé avec http et/ou https activé,
* son option [**Activer le service REST**](REST/configuration.md#starting-the-rest-server) doit être cochée,
* au moins une licence client est disponible.

Si aucune base de données correspondante n'est trouvée, `Open datastore` retourne **Null**.

*localID* est un alias local de la session ouverte sur le datastore distant. Si *localID* existe déjà dans l'application, il est utilisé. Sinon, une nouvelle session *localID* est créée lors de l’utilisation de l’objet datastore.

Une fois la session ouverte, les instructions suivantes deviennent équivalentes et renvoient une référence sur le même objet datastore :

```4d
 $myds:=Open datastore(connectionInfo;"myLocalId")
 $myds2:=ds("myLocalId")
  //$myds et $myds2 sont équivalents
```

Passez dans *connectionInfo* un objet décrivant le datastore distant auquel vous souhaitez vous connecter. Il peut contenir les propriétés suivantes (toutes les propriétés sont optionnelles, à l'exception de *hostname*) :

| Propriété   | Type    | Description                                                                                                                                                                                                                                                                                                                                      |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| hostname    | Text    | Nom ou adresse IP de la base de données distante + " :" + numéro de port (le numéro de port est obligatoire)                                                                                                                                                                                                                                     |
| user        | Text    | Nom d'utilisateur                                                                                                                                                                                                                                                                                                                                |
| password    | Text    | Mot de passe de l'utilisateur                                                                                                                                                                                                                                                                                                                    |
| idleTimeout | Integer | Délai d'inactivité de la session (exprimé en minutes), au terme duquel la session est automatiquement fermée par 4D. Si cette propriété est omise, la valeur par défaut est 60 (1h). La valeur ne peut pas être < 60 (si une valeur inférieure est passée, le timeout est fixé à 60). Pour plus d'informations, voir **Fermeture des sessions**. |
| tls         | Boolean | Utilisez une connexion sécurisée(*). Si cette propriété est omise, "false" par défaut. L'utilisation d'une connexion sécurisée est recommandée dans la mesure du possible.                                                                                                                                                                       |
| type        | Text    | Doit être "4D Server"                                                                                                                                                                                                                                                                                                                            |

(*) Si tls est vrai, le protocole HTTPS est utilisé si :

* HTTPS est activé sur le datastore distant
* Le port donné correspond au port HTTPS configuré dans les propriétés
* Un certificat valide et une clé de chiffrement privée sont installés dans la base. Sinon, l'erreur "1610 - Une requête vers l’hôte: "{xxx}" a échoué" est générée

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
## *.dataclassName*

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
| Paramètres | Type |  | Description                                            |
| ---------- | ---- |::| ------------------------------------------------------ |
|            |      |  | Ne requiert aucun paramètre|<!-- END REF -->

|

#### Description

La fonction `.cancelTransaction()` <!-- REF #DataStoreClass.cancelTransaction().Summary -->annule la transaction<!-- END REF --> ouverte avec la fonction [`.startTransaction()`](#starttransaction) au niveau correspondant dans le process courant du datastore spécifié.

La fonction `.cancelTransaction()` annule toutes les modifications apportées aux données durant la transaction.

Vous pouvez imbriquer plusieurs transactions (sous-transactions). Si la transaction principale est annulée, toutes ses sous-transactions sont également annulées, même si elles ont été validées individuellement à l'aide de la fonction [`.validateTransaction()`](#validatetransactions).

#### Exemple

Voir l'exemple de la fonction [`.startTransaction()`](#starttransaction).

<!-- END REF -->

<!-- REF DataStoreClass.encryptionStatus().Desc -->
## .encryptionStatus()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #DataStoreClass.encryptionStatus().Syntax -->**.encryptionStatus()**: Object<!-- END REF -->


<!-- REF #DataStoreClass.encryptionStatus().Params -->
| Paramètres | Type   |    | Description                                                                                        |
| ---------- | ------ |:--:| -------------------------------------------------------------------------------------------------- |
| Résultat   | Object | <- | Informations sur le chiffrement du datastore courant et de chaque table|<!-- END REF -->

|

#### Description

La fonction `.encryptionStatus()` <!-- REF #DataStoreClass.encryptionStatus().Summary -->retourne un objet qui fournit le statut de chiffrement du fichier de données courant<!-- END REF --> (.e., le fichier de données du datastore `ds`). Le statut de chiffrement pour chaque table est également fourni.
> Utilisez la commande `Data file encryption status` pour déterminer l'état de cryptage de tout autre fichier de données.

**Valeur retournée**

L'objet retourné contient les propriétés suivantes :

| Propriété   |             |               | Type    | Description                                                                               |
| ----------- | ----------- | ------------- | ------- | ----------------------------------------------------------------------------------------- |
| isEncrypted |             |               | Boolean | Vrai si le fichier de données est chiffré                                                 |
| keyProvided |             |               | Boolean | Vrai si la clé de chiffrement correspondant au fichier de données chiffré est fournie(*). |
| tables      |             |               | Object  | Objet contenant autant de propriétés que de tables chiffrables ou chiffrées.              |
|             | *tableName* |               | Object  | Table chiffrable ou chiffrée                                                              |
|             |             | name          | Text    | Nom de la table                                                                           |
|             |             | num           | Number  | Numéro de la table                                                                        |
|             |             | isEncryptable | Boolean | Vrai si la table est déclarée chiffrable dans le fichier de structure                     |
|             |             | isEncrypted   | Boolean | Vrai si les enregistrements de la table sont chiffrés dans le fichier de données          |

(*) La clé de chiffrement peut être fournie :

* via la fonction `.provideDataKey()`,
* à la racine d'un appareil connecté avant l'ouverture du datastore,
* via la commande `Discover data key`.

#### Exemple

Vous souhaitez connaitre le nombre de tables chiffrées dans le fichier de données courant :

```4d
 var $status : Object

 $status:=dataStore.encryptionStatus()

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
 Else
    ALERT("This database is not encrypted.")
 End if
 Else
    ALERT("This database is not encrypted.")
 End if
```

<!-- END REF -->

<!-- REF DataStoreClass.getInfo().Desc -->
## .getInfo()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #DataStoreClass.getInfo().Syntax -->**.getInfo()**: Object<!-- END REF -->


<!-- REF #DataStoreClass.getInfo().Params -->
| Paramètres | Type   |    | Description                                        |
| ---------- | ------ |:--:| -------------------------------------------------- |
| Résultat   | Object | <- | Propriétés du datastore|<!-- END REF -->

|

#### Description

La fonction `.getInfo()` <!-- REF #DataStoreClass.getInfo().Summary -->retourne un objet qui fournit des informations sur le datastore<!-- END REF -->. Cette fonction est utile pour l'écriture de code générique.

**Objet retourné**

| Propriété  | Type    | Description                                                                                                                                                     |
| ---------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type       | string  | <li>"4D" : datastore principal, disponible via ds </li><li>"4D Server" : datastore distant ouvert avec Open datastore</li>                                                                                                              |
| networked  | boolean | <li>Vrai : le datastore est accessible via une connexion réseau.</li><li>Faux : le datastore n'est pas accessible via une connexion réseau (base locale)</li>                                                                                                              |
| localID    | text    | Identifiant du datastore sur la machine. Correspond à la chaîne localID donnée avec la commande `Open datastore`. Chaîne vide ("") pour le datastore principal. |
| connection | object  | Objet décrivant la connexion au datastore distant (non retourné pour le datastore principal). Propriétés disponibles :<table><tr><th>Propriété</th><th>Type</th><th>Description</th></tr><tr><td>hostname</td><td>text</td><td>Adresse IP ou nom du datastore distant + ":" + numéro de port</td></tr><tr><td>tls</td><td>boolean</td><td>Vrai si une connexion sécurisée est utilisée avec le datastore distant</td></tr><tr><td>idleTimeout</td><td>number</td><td>Delai d'inactivité autorisé de la session (en minutes)</td></tr><tr><td>user</td><td>text</td><td>Utilisateur authentifié sur le datastore distant</td></tr></table>                |

* Si la fonction `.getInfo()` est exécutée sur un 4D Server ou un 4D monoposte, `networked` est Faux.
* Si la fonction `.getInfo()` est exécutée sur un 4D distant, `networked` est Vrai

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

<!-- REF DataStoreClass.getRequestLog().Desc -->
## .getRequestLog()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R6   | Ajout         |

</details>

<!-- REF #DataStoreClass.getRequestLog().Syntax -->**.getRequestLog()** : Collection<!-- END REF -->


<!-- REF #DataStoreClass.getRequestLog().Params -->
| Paramètres | Type       |    | Description                                                           |
| ---------- | ---------- |:--:| --------------------------------------------------------------------- |
| Résultat   | Collection | <- | Collection d'objets décrivant les requêtes|<!-- END REF -->

|

#### Description

La fonction `getRequestLog()` <!-- REF #DataStoreClass.getRequestLog().Summary -->retourne les requêtes ORDA enregistrées en mémoire côté client<!-- END REF -->. L'enregistrement des requêtes ORDA doit avoir été préalablement activé à l'aide de la fonction [`.startRequestLog()`](#startrequestlog).

Cette fonction doit être appelée sur un client 4D distant, sinon elle retourne une collection vide. Elle est conçue à des fins de débogage dans les configurations client/serveur.

**Valeur retournée**

Collection d'objets requête empilés. La requête la plus récente porte l'indice 0.

Pour plus de détails sur le format d'enregistrement des requêtes ORDA, veuillez consulter la section [**ORDA client requests**](https://doc.4d.com/4Dv18/4D/18/Description-of-log-files.300-4575486.en.html#4385373).

#### Exemple

Voir l'exemple 2 de [`.startRequestLog()`](#startrequestlog).

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
| Paramètres | Type    |    | Description                                                                                              |
| ---------- | ------- |:--:| -------------------------------------------------------------------------------------------------------- |
| Résultat   | Boolean | <- | Vrai si l'accès au Data Explorer est désactivé, Faux s'il est activé (défaut)|<!-- END REF -->

|

#### Description

La fonction `.isAdminProtected()` <!-- REF #DataStoreClass.isAdminProtected().Summary -->retourne `True` si l'accès au [Data Explorer](Admin/dataExplorer.md) est désactivé pour la session courante<!-- END REF -->.

Par défaut, l'accès au Data Explorer est autorisé pour les sessions `webAdmin`, mais il peut être désactivé pour empêcher que les administrateurs puissent accéder aux données (cf. fonction [`.setAdminProtection()`](#setadminprotection)).

#### Voir également

[`.setAdminProtection()`](#setadminprotection)

<!-- END REF -->

<!-- REF DataStoreClass.makeSelectionsAlterable().Desc -->
## .makeSelectionsAlterable()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R5   | Ajout         |

</details>

<!-- REF #DataStoreClass.makeSelectionsAlterable().Syntax -->**.makeSelectionsAlterable()**<!-- END REF -->


<!-- REF #DataStoreClass.makeSelectionsAlterable().Params -->
| Paramètres | Type |  | Description                                            |
| ---------- | ---- |::| ------------------------------------------------------ |
|            |      |  | Ne requiert aucun paramètre|<!-- END REF -->

|

#### Description

La fonction `.makeSelectionsAlterable()` <!-- REF #DataStoreClass.makeSelectionsAlterable().Summary -->définit toutes les nouvelles sélections d'entités comme altérables par défaut dans tous les datastores de l'application<!-- END REF --> (y compris les [datastores distants](ORDA/remoteDatastores.md)). Elle est destinée à être appelée une fois, par exemple dans la méthode base `On Startup`.

Lorsque cette méthode n'est pas appelée, les nouvelles sélections d'entités peuvent être partageables, selon la nature de leur "parent" ou la façon dont elles sont créées (voir la section [Entity selections partageables et non partageables](ORDA/entities.md#entity-selections-partageables-et-non-partageables)).

> Cette fonction ne modifie pas les sélections d'entités créées par [`.copy(`](#copy)) ou `OB Copy` lorsque l'option explicite `ck shared` est utilisée.

> **Compatibilité** : Cette fonction doit être utilisée uniquement dans des projets convertis à partir de versions de 4D antérieures à 4D v18 R5 et contenant des appels [.add()](EntitySelectionClass.md#add). Dans ce contexte, l'utilisation de `.makeSelectionsAlterable()` peut faire gagner du temps en restaurant instantanément le précédent comportement 4D dans les projets existants. En revanche, l'utilisation de cette méthode dans les nouveaux projets créés dans 4D v18 R5 et les versions plus récentes **n'est pas recommandée**, car elle empêche le partage des entity selections, ce qui offre de meilleures performances et une plus grande évolutivité.

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
| Paramètres    | Type   |    | Description                                                                               |
| ------------- | ------ | -- | ----------------------------------------------------------------------------------------- |
| curPassPhrase | Text   | -> | Phrase secrète courante                                                                   |
| curDataKey    | Object | -> | Clé de chiffrement des données courante                                                   |
| Résultat      | Object | <- | Résultat de la mise en correspondance de la clé de chiffrement|<!-- END REF -->

|

#### Description

La fonction `.provideDataKey()` <!-- REF #DataStoreClass.provideDataKey().Summary -->permet de fournir une clé de chiffrement des données pour le fichier de données courant du datastore et détecte si la clé correspond aux données chiffrées<!-- END REF -->. Cette fonction peut être utilisée à l'ouverture d'une base chiffrée, ou à l'exécution de n'importe quelle opération de chiffrement qui nécessite la clé de chiffrement, telle que le re-chiffrement du fichier de données.
> * La fonction `.provideDataKey()` doit être appelée dans une base de données chiffrée. Si elle est appelée dans une base de données non chiffrée, l'erreur 2003 (la clé de cryptage ne correspond pas aux données.) est retournée. Utilisez la commande `Data file encryption status` pour déterminer si la base de données est chiffrée.
> * La fonction `.provideDataKey()` ne peut pas être appelée depuis un 4D distant ou un datastore distant chiffré.

Si vous utilisez le paramètre *curPassPhrase*, passez la chaîne utilisée pour générer la clé de chiffrement des données. Lorsque vous utilisez ce paramètre, une clé de chiffrement est générée.

Si vous utilisez le paramètre *curDataKey*, passez un objet (avec la propriété *encodedKey*) contenant la clé de chiffrement des données. Cette clé peut avoir été générée à l'aide de la commande `New data key`.

Si une clé de chiffrement des données valide est fournie, elle est ajoutée à la *keyChain* dans la mémoire et le mode chiffrement est activé :

* toutes les modifications de données apportées dans les tables chiffrables sont chiffrées sur le disque (fichiers .4DD, .journal,  . 4Dindx).
* toutes les données chargées à partir de tables chiffrables sont déchiffrées dans la mémoire

**Résultat**

Le résultat de la commande est décrit dans l'objet retourné :

| Propriété  |                          | Type       | Description                                                                        |
| ---------- | ------------------------ | ---------- | ---------------------------------------------------------------------------------- |
| success    |                          | Boolean    | Vrai si la clé de chiffrement fournie correspond aux données chiffrées, sinon Faux |
|            |                          |            | Les propriétés ci-dessous sont retournées uniquement si success est à *Faux*       |
| status     |                          | Number     | Code d'erreur (4 si la clé de chiffrement fournie est erronée)                     |
| statusText |                          | Text       | Message d'erreur                                                                   |
| errors     |                          | Collection | Pile d'erreurs. La première erreur possède l'indice le plus élevé.                 |
|            | \[ ].componentSignature | Text       | Nom du composant interne                                                           |
|            | \[ ].errCode            | Number     | Numéro de l'erreur                                                                 |
|            | \[ ].message            | Text       | Message d'erreur                                                                   |

Si aucun paramètre *curPassphrase* ou *curDataKey* n'est fourni, `.provideDataKey()` retourne **null** (aucune erreur n'est générée).

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
**.setAdminProtection**( *status* : Boolean )<!-- END REF -->


<!-- REF #DataStoreClass.setAdminProtection().Params -->
| Paramètres | Type    |    | Description                                                                                                                           |
| ---------- | ------- | -- | ------------------------------------------------------------------------------------------------------------------------------------- |
| status     | Boolean | -> | Vrai pour désactiver l'accès au Data Explorer sur le port `webAdmin`, Faux (défaut) pour permettre l'accès|<!-- END REF -->

|

#### Description

La fonction `.setAdminProtection()` <!-- REF #DataStoreClass.setAdminProtection().Summary -->permet de désactiver tout accès aux données sur le [port admin web](Admin/webAdmin.md#http-port), y compris via le [Data Explorer](Admin/dataExplorer.md) dans les sessions `WebAdmin`<!-- END REF -->.

Par défaut lorsque la fonction n'est pas appelée, l'accès aux données est possible via le Data Explorer sur le port d'administration web pour une session avec le privilège `WebAdmin` . Dans certaines configurations, par exemple lorsque le serveur d'application est hébergé sur la machine d'un prestataire de service, vous pouvez souhaiter que l'administrateur ne puisse pas visualiser vos données, même s'il peut accéder à la configuration du serveur, y compris au paramétrage de l'[access key](Admin/webAdmin.md#access-key).

Dans ce cas, vous pouvez appeler cette fonction pour désactiver l'accès aux données depuis le Data Explorer sur le port web admin de la machine, même pour les sessions utilisateurs ayant le privilège `WebAdmin`. Lorsque cette fonction est exécutée, le fichier de données est immédiatement protégé et le statut est sauvegardé sur disque : le fichier de données sera protégé même si l'application est redémarrée.

#### Exemple

Vous créez une méthode projet *protectDataFile* à appeler par exemple avant le déploiement :

```4d
 ds.setAdminProtection(True) //Désactive l'accès aux données de l'Explorateur de données
```

#### Voir également

[`.isAdminProtected()`](#isadminprotected)

<!-- END REF -->

<!-- REF DataStoreClass.startRequestLog().Desc -->
## .startRequestLog()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R6   | Ajout         |

</details>

<!-- REF #DataStoreClass.startRequestLog().Syntax -->**.startRequestLog**()<br/>**.startRequestLog**( *file* : 4D.File )<br/>**.startRequestLog**( *reqNum* : Integer )<!-- END REF -->


<!-- REF #DataStoreClass.startRequestLog().Params -->
| Paramètres | Type    |    | Description                                                          |
| ---------- | ------- | -- | -------------------------------------------------------------------- |
| file       | 4D.File | -> | Objet File                                                           |
| reqNum     | Integer | -> | Nombre de requêtes à conserver en mémoire|<!-- END REF -->

|

#### Description

La fonction `startRequestLog()` <!-- REF #DataStoreClass.startRequestLog().Summary -->lance l'enregistrement des requêtes ORDA sur le poste client<!-- END REF -->.

Cette fonction doit être appelée sur un 4D distant, sinon elle ne fait rien. Elle est conçue à des fins de débogage dans les configurations client/serveur.

L'enregistrement des requêtes ORDA peut être effectué dans un fichier ou dans la mémoire, en fonction du type de paramètre :

* Si vous avez passé un objet *file* créé à l'aide de la commande `File`, les données de l'enregistrement sont écrites dans ce fichier sous forme de collection d'objets (format JSON). Chaque objet représente une requête.<br/>Si le fichier n'existe pas encore, il est créé. Sinon, s'il existe déjà, les nouvelles données d'enregistrement y sont ajoutées. Si la fonction `.startRequestLog()` est appelée avec un fichier alors qu'un enregistrement des requêtes est déjà en cours en mémoire, l'enregistrement en mémoire est stoppé et vidé.
> Un caractère \] doit être ajouté manuellement à la fin du fichier pour effectuer une validation JSON

* Si vous avez passé un numéro *reqNum*, l'enregistrement en mémoire est vidé (le cas échéant) et un nouvel enregistrement est lancé. Il gardera en mémoire les requêtes jusqu'à atteindre le nombre *reqNum*, auquel cas les entrées précédentes sont vidées (pile FIFO).<br/>Si la fonction `.startRequestLog()` est appelée avec un *reqNum* alors qu'un enregistrement des requêtes dans un fichier est déjà en cours, l'enregistrement dans le fichier est stoppé.

* Si vous n'avez passé aucun paramètre, l'enregistrement est lancé dans la mémoire. Si `.startRequestLog()` a été préalablement appelée avec un *reqNum* (avant un `.stopRequestLog()`), les données enregistrées sont empilées dans la mémoire jusqu'au prochain vidage ou appel de `.stopRequestLog()`.

Pour plus de détails sur le format d'enregistrement des requêtes ORDA, veuillez consulter la section [**ORDA client requests**](https://doc.4d.com/4Dv18/4D/18/Description-of-log-files.300-4575486.en.html#4385373).

#### Exemple 1

Vous souhaitez enregistrer des requêtes ORDA clientes dans un fichier et utiliser le numéro de séquence de l'enregistrement :

```4d
 var $file : 4D.File
 var $e : cs.PersonsEntity

 $file:=File("/LOGS/ORDARequests.txt") //dossier logs

 SET DATABASE PARAMETER(Client Log Recording;1) //pour déclencher le numéro de séquence log global 
 ds.startRequestLog($file)
 $e:=ds.Persons.get(30001) //envoyer une requête
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
| Paramètres | Type |  | Description                                            |
| ---------- | ---- |  | ------------------------------------------------------ |
|            |      |  | Ne requiert aucun paramètre|<!-- END REF -->


|


#### Description

La fonction `.startTransaction()` <!-- REF #DataStoreClass.startTransaction().Summary -->démarre une transaction dans le process courant sur la base de données du datastore<!-- END REF -->. Toute modification apportée aux entités du datastore dans le process de la transaction est temporairement stockée jusqu'à ce que la transaction soit validée ou annulée.
> Si cette méthode est appelée sur le datastore principal (c'est-à-dire le datastore retourné par la commande `ds`), la transaction est appliquée à toutes les opérations effectuées sur le datastore principal et sur la base de données sous-jacente, incluant donc le langage ORDA et le langage classique.

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

| Release | Modifications |
| ------- | ------------- |
| 17 R6   | Ajout         |

</details>

<!-- REF #DataStoreClass.stopRequestLog().Syntax -->**.stopRequestLog()**  <!-- END REF -->


<!-- REF #DataStoreClass.stopRequestLog().Params -->
| Paramètres | Type |  | Description                                            |
| ---------- | ---- |  | ------------------------------------------------------ |
|            |      |  | Ne requiert aucun paramètre|<!-- END REF -->

|

#### Description

La fonction `stopRequestLog()` <!-- REF #DataStoreClass.stopRequestLog().Summary -->stoppe tout enregistrement des requêtes ORDA côté client<!-- END REF --> (dans un fichier ou dans la mémoire). Elle est particulièrement utile en cas d'enregistrement dans un fichier, étant donné qu'elle ferme le document ouvert sur le disque.

Cette fonction doit être appelée sur un 4D distant, sinon elle ne fait rien. Elle est conçue à des fins de débogage dans les configurations client/serveur.

#### Exemple

Voir les exemples de [`.startRequestLog()`](#startrequestlog).

<!-- END REF -->

<!-- REF DataStoreClass.validateTransaction().Desc -->
## .validateTransaction()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18      | Ajout         |

</details>

<!-- REF #DataStoreClass.validateTransaction().Syntax -->**.validateTransaction()**  <!-- END REF -->


<!-- REF #DataStoreClass.validateTransaction().Params -->
| Paramètres | Type |  | Description                                            |
| ---------- | ---- |  | ------------------------------------------------------ |
|            |      |  | Ne requiert aucun paramètre|<!-- END REF -->

|

#### Description

La fonction `.validateTransaction()` <!-- REF #DataStoreClass.validateTransaction().Summary -->valide la transaction <!-- END REF -->démarrée avec [`.startTransaction()`](#starttransaction) au niveau correspondant dans le datastore.

La fonction sauvegarde les modifications apportées aux données sur le datastore durant la transaction.

Vous pouvez imbriquer plusieurs transactions (sous-transactions). Si la transaction principale est annulée, toutes ses sous-transactions sont également annulées, même si elles ont été validées individuellement à l'aide de cette fonction.

#### Exemple

Voir l'exemple de [`.startTransaction()`](#starttransaction).

<!-- END REF -->
