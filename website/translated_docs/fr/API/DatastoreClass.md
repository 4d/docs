---
id: DataStoreClass
title: DataStore
---

Un [Datastore](ORDA/dsMapping.md#datastore) correspond à l'objet d'interface fourni par ORDA pour référencer et accéder à une base de données. Les objets `Datastore` sont retournés par les commandes suivantes :

*   [ds](#ds) : un raccourci vers le datastore principal
*   [Open datastore](#open-datastore) : pour ouvrir n'importe quel datastore distant

### Sommaire

|                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #DataStoreClass.cancelTransaction().Syntax -->](#canceltransaction)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.cancelTransaction().Summary -->|
| [<!-- INCLUDE DataStoreClass.dataclassName.Syntax -->](#dataclassname)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataStoreClass.dataclassName.Summary --> |
| [<!-- INCLUDE #DataStoreClass.encryptionStatus().Syntax -->](#encryptionstatus)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.encryptionStatus().Summary --> |
| [<!-- INCLUDE #DataStoreClass.getInfo().Syntax -->](#getinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.getInfo().Summary --> |
| [<!-- INCLUDE #DataStoreClass.getRequestLog().Syntax -->](#getrequestlog)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.getRequestLog().Summary --> |
| [<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Syntax -->](#makeselectionsalterable)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Summary --> |
| [<!-- INCLUDE #DataStoreClass.provideDataKey().Syntax -->](#providedatakey)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.provideDataKey().Summary --> |
| [<!-- INCLUDE #DataStoreClass.setAdminProtection().Syntax -->](#setadminprotection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.setAdminProtection().Summary --> |
| [<!-- INCLUDE #DataStoreClass.startRequestLog().Syntax -->](#startrequestlog)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.startRequestLog().Summary --> |
| [<!-- INCLUDE #DataStoreClass.startTransaction().Syntax -->](#starttransaction)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.startTransaction().Summary --> |
| [<!-- INCLUDE #DataStoreClass.stopRequestLog().Syntax -->](#stoprequestlog)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.stopRequestLog().Summary --> |
| [<!-- INCLUDE #DataStoreClass.validateTransaction().Syntax -->](#validatetransaction)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.validateTransaction().Summary --> |





## ds

<details><summary>Historique</summary>
| Version | Modifications                |
| ------- | ---------------------------- |
| v18     | Support of localID parameter |
| v17     | Ajout                        |
</details>

<!-- REF #_command_.ds.Syntax -->
**ds** { ( *localID* : Text ) } : cs.DataStore <!-- END REF -->

<!-- REF #_command_.ds.Params -->
| Paramètres | Type         |    | Description                                |
| ---------- | ------------ | -- | ------------------------------------------ |
| localID    | Text         | -> | Local ID of the remote datastore to return |
| Résultat   | cs.DataStore | <- | Reference to the datastore                 |
<!-- END REF -->


#### Description

The `ds` command <!-- REF #_command_.ds.Summary -->returns a reference to the datastore matching the current 4D database or the database designated by *localID*<!-- END REF -->.

If you omit the *localID* parameter (or pass an empty string ""), the command returns a reference to the datastore matching the local 4D database (or the 4D Server database in case of opening a remote database on 4D Server). The datastore is opened automatically and available directly through `ds`.

You can also get a reference on an open remote datastore by passing its local id in the *localID* parameter. The datastore must have been previously opened with the [`Open datastore`](#open-datastore) command by the current database (host or component). The local id is defined when using this command.
> La portée de l'identifiant local est la base de données dans laquelle le datastore a été ouvert.

If no *localID* datastore is found, the command returns **Null**.

Les objets disponibles dans le `cs.Datastore` sont mappés à partir de la base de données cible en respectant les [règles générales d'ORDA](Concepts/dsMapping.md#general-rules).

#### Exemple 1

Using the main datastore on the 4D database:

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
| Version | Modifications |
| ------- | ------------- |
| v18     | Ajout         |
</details>

<!-- REF #_command_.Open datastore.Syntax -->
**Open datastore**( *connectionInfo* : Object ; *localID* : Text ) : cs.DataStore <!-- END REF -->

<!-- REF #_command_.Open datastore.Params -->
| Paramètres     | Type         |    | Description                                                               |
| -------------- | ------------ | -- | ------------------------------------------------------------------------- |
| connectionInfo | Objet        | -> | Connection properties used to reach the remote datastore                  |
| localID        | Texte        | -> | Id to assign to the opened datastore on the local application (mandatory) |
| Résultat       | cs.DataStore | <- | Datastore object                                                          |
<!-- END REF -->


#### Description

The `Open datastore` command <!-- REF #_command_.Open datastore.Summary -->connects the application to the 4D database identified by the *connectionInfo* parameter<!-- END REF --> and returns a matching `cs.DataStore` object associated with the *localID* local alias.

The *connectionInfo* 4D database must be available as a remote datastore, i.e.:

*   its web server must be launched with http and/or https enabled,
*   its [**Expose as REST server**](REST/configuration.md#starting-the-rest-server) option must be checked,
*   at least one client license is available.

If no matching database is found, `Open datastore` returns **Null**.

*localID* is a local alias for the session opened on remote datastore. If *localID* already exists on the application, it is used. Otherwise, a new *localID* session is created when the datastore object is used.

Les objets disponibles dans le `cs.Datastore` sont mappés à partir de la base de données cible en respectant les [règles générales d'ORDA](Concepts/dsMapping.md#general-rules).

Once the session is opened, the following statements become equivalent and return a reference on the same datastore object:

```4d
 $myds:=Open datastore(connectionInfo;"myLocalId")
 $myds2:=ds("myLocalId")
  //$myds et $myds2 sont équivalents
```

Pass in *connectionInfo* an object describing the remote datastore you want to connect to. It can contain the following properties (all properties are optional except *hostname*):

| Propriété   | Type    | Description                                                                                                                                                                                                                                                                                                                                      |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| hostname    | Text    | Nom ou adresse IP de la base de données distante + " :" + numéro de port (le numéro de port est obligatoire)                                                                                                                                                                                                                                     |
| user        | Text    | User name                                                                                                                                                                                                                                                                                                                                        |
| password    | Text    | Mot de passe de l'utilisateur                                                                                                                                                                                                                                                                                                                    |
| idleTimeout | Longint | Délai d'inactivité de la session (exprimé en minutes), au terme duquel la session est automatiquement fermée par 4D. Si cette propriété est omise, la valeur par défaut est 60 (1h). La valeur ne peut pas être < 60 (si une valeur inférieure est passée, le timeout est fixé à 60). Pour plus d'informations, voir **Fermeture des sessions**. |
| tls         | Boolean | Utilisez une connexion sécurisée(*). Si cette propriété est omise, "false" par défaut. L'utilisation d'une connexion sécurisée est recommandée dans la mesure du possible.                                                                                                                                                                       |
| type        | Text    | Doit être "4D Server"                                                                                                                                                                                                                                                                                                                            |

(*) If tls is true, the HTTPS protocol is used if:

*   HTTPS is enabled on the remote datastore
*   the given port is the right HTTPS port configured in the database settings
*   a valid certificate and private encryption key are installed in the database. Otherwise, error "1610 - A remote request to host xxx has failed" is raised

#### Exemple 1

Connection to a remote datastore without user / password:

```4d
 var $connectTo : Object
 var $remoteDS : cs.DataStore
 $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")
 $remoteDS:=Open datastore($connectTo;"students")
 ALERT("This remote datastore contains "+String($remoteDS.Students.all().length)+" students")
```

#### Exemple 2

Connection to a remote datastore with user / password / timeout / tls:

```4d
 var $connectTo : Object
 var $remoteDS : cs.DataStore
 $connectTo:=New object("type";"4D Server";"hostname";\"192.168.18.11:4443";\  
    "user";"marie";"password";$pwd;"idleTimeout";70;"tls";True)
 $remoteDS:=Open datastore($connectTo;"students")
 ALERT("This remote datastore contains "+String($remoteDS.Students.all().length)+" students")
```

#### Exemple 3

Working with several remote datastores:

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

In case of error, the command returns **Null**. If the remote datastore cannot be reached (wrong address, web server not started, http and https not enabled...), error 1610 "A remote request to host XXX has failed" is raised. You can intercept this error with a method installed by `ON ERR CALL`.



<!-- REF DataStoreClass.dataclassName.Desc -->
## *.dataclassName*

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |
</details>

<!-- REF DataStoreClass.dataclassName.Syntax -->
***.dataclassName*** : 4D.DataClass<!-- END REF -->


#### Description

Each dataclass in a datastore is available as a property of the [DataStore object](ORDA/dsMapping.md#datastore)data. The returned object <!-- REF DataStoreClass.dataclassName.Summary -->contains a description of the dataclass<!-- END REF -->.


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
| Version | Modifications |
| ------- | ------------- |
| v18     | Ajout         |
</details>


<!-- REF #DataStoreClass.cancelTransaction().Syntax -->
**.cancelTransaction()**<!-- END REF -->

<!-- REF #DataStoreClass.cancelTransaction().Params -->
| Paramètres | Type |  | Description                 |
| ---------- | ---- |::| --------------------------- |
|            |      |  | Ne requiert aucun paramètre |
<!-- END REF -->


#### Description

The `.cancelTransaction()` function <!-- REF #DataStoreClass.cancelTransaction().Summary -->cancels the transaction<!-- END REF --> opened by the [`.startTransaction()`](#starttransaction) function at the corresponding level in the current process for the specified datastore.

The `.cancelTransaction()` function cancels any changes made to the data during the transaction.

You can nest several transactions (sub-transactions). If the main transaction is cancelled, all of its sub-transactions are also cancelled, even if they were validated individually using the [`.validateTransaction()`](#validatetransactions) function.


#### Exemple

See example for the [`.startTransaction()`](#starttransaction) function.


<!-- END REF -->



<!-- REF DataStoreClass.encryptionStatus().Desc -->
## .encryptionStatus()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!-- REF #DataStoreClass.encryptionStatus().Syntax -->
**.encryptionStatus()**: Object<!-- END REF -->


<!-- REF #DataStoreClass.encryptionStatus().Params -->
| Paramètres | Type   |    | Description                                                                 |
| ---------- | ------ |:--:| --------------------------------------------------------------------------- |
| Résultat   | Object | <- | Information about the encryption of the current datastore and of each table |
<!-- END REF -->


#### Description

The `.encryptionStatus()` function <!-- REF #DataStoreClass.encryptionStatus().Summary -->returns an object providing the encryption status for the current data file<!-- END REF --> (i.e., the data file of the `ds` datastore). The status for each table is also provided.
> Utilisez la commande `Data file encryption status` pour déterminer l'état de cryptage de tout autre fichier de données.


**Valeur retournée**

The returned object contains the following properties:

| Propriété   |             |               | Type    | Description                                                                        |
| ----------- | ----------- | ------------- | ------- | ---------------------------------------------------------------------------------- |
| isEncrypted |             |               | Boolean | True if the data file is encrypted                                                 |
| keyProvided |             |               | Boolean | True if the encryption key matching the encrypted data file is provided(*).        |
| tables      |             |               | Object  | Object containing as many properties as there are encryptable or encrypted tables. |
|             | *tableName* |               | Object  | Encryptable or Encrypted table                                                     |
|             |             | name          | Text    | Name of the table                                                                  |
|             |             | num           | Number  | Table number                                                                       |
|             |             | isEncryptable | Boolean | True if the table is declared encryptable in the structure file                    |
|             |             | isEncrypted   | Boolean | True if the records of the table are encrypted in the data file                    |

(*) The encryption key can be provided:

*   with the `.provideDataKey()` command,
*   at the root of a connected device before opening the datastore,
*   with the `Discover data key` command.

#### Exemple

You want to know the number of encrypted tables in the current data file:

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
```

<!-- END REF -->



<!-- REF DataStoreClass.getInfo().Desc -->
## .getInfo()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #DataStoreClass.getInfo().Syntax -->
**.getInfo()**: Object<!-- END REF -->

<!-- REF #DataStoreClass.getInfo().Params -->
| Paramètres | Type   |    | Description          |
| ---------- | ------ |:--:| -------------------- |
| Résultat   | Object | <- | Datastore properties |
<!-- END REF -->

#### Description

The `.getInfo()` function <!-- REF #DataStoreClass.getInfo().Summary -->returns an object providing information about the datastore<!-- END REF -->. Cette fonction est utile pour l'écriture de code générique.

**Objet retourné**

| Propriété  | Type    | Description                                                                                                                                                     |
| ---------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type       | string  | <li>"4D": main datastore, available through ds </li><li>"4D Server": remote datastore, open with Open datastore</li>                                                                                                              |
| networked  | boolean | <li>True: the datastore is reached through a network connection.</li><li>False: the datastore is not reached through a network connection (local database)</li>                                                                                                              |
| localID    | text    | ID of the datastore on the machine. Corresponds to the localId string given with the `Open datastore` command. Empty string ("") for main datastore.            |
| connection | object  | Object describing the remote datastore connection (not returned for main datastore). Available properties:<p><table><tr><th>Propriété</th><th>Type</th><th>Description</th></tr><tr><td>hostname</td><td>text</td><td>IP address or name of the remote datastore + ":" + port number</td></tr><tr><td>tls</td><td>boolean</td><td>True if secured connection is used with the remote datastore</td></tr><tr><td>idleTimeout</td><td>number</td><td>Session inactivity timeout (in minutes)</td></tr><tr><td>user</td><td>text</td><td>User authenticated on the remote datastore</td></tr></table> |

*   If the `.getInfo()` function is executed on a 4D Server or 4D single-user, `networked` is False.
*   If the `.getInfo()` function is executed on a remote 4D, `networked` is True


#### Exemple 1

```4d
 var $info : Object

 $info:=ds.getInfo() //Exécuté sur 4D Server ou 4D
  //{"type":"4D","networked":false,"localID":""}

 $info:=ds.getInfo() // Exécuté sur 4D distant
  //{"type":"4D","networked":true,"localID":""}
```

#### Exemple 2

On a remote datastore:

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
| Version | Modifications |
| ------- | ------------- |
| v17 R6  | Ajout         |
</details>

<!-- REF #DataStoreClass.getRequestLog().Syntax -->
**.getRequestLog()** : Collection<!-- END REF -->

<!-- REF #DataStoreClass.getRequestLog().Params -->
| Paramètres | Type       |    | Description                                                  |
| ---------- | ---------- |:--:| ------------------------------------------------------------ |
| Résultat   | Collection | <- | Collection of objects, where each object describes a request |
<!-- END REF -->


#### Description

The `.getRequestLog()` function <!-- REF #DataStoreClass.getRequestLog().Summary -->returns the ORDA requests logged in memory on the client side<!-- END REF -->. The ORDA request logging must have previously been enabled using the [`.startRequestLog()`](#startrequestlog) function.

This function must be called on a remote 4D, otherwise it returns an empty collection. It is designed for debugging purposes in client/server configurations.

**Valeur retournée**

Collection of stacked request objects. The most recent request has index 0.

For a description of the ORDA request log format, please refer to the [**ORDA client requests**](https://doc.4d.com/4Dv18/4D/18/Description-of-log-files.300-4575486.en.html#4385373) section.


#### Exemple

See Example 2 of [`.startRequestLog()`](#startrequestlog).

<!-- END REF -->


<!-- REF DataStoreClass.isAdminProtected().Desc -->
## .isAdminProtected()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R6  | Ajout         |
</details>

<!-- REF #DataStoreClass.isAdminProtected().Syntax -->
**.isAdminProtected()** : Boolean<!-- END REF -->

<!-- REF #DataStoreClass.isAdminProtected().Params -->
| Paramètres | Type    |    | Description                                                                    |
| ---------- | ------- |:--:| ------------------------------------------------------------------------------ |
| Résultat   | Boolean | <- | True if the Data Explorer access is disabled, False if it is enabled (default) |
<!-- END REF -->


#### Description

The `.isAdminProtected()` function <!-- REF #DataStoreClass.isAdminProtected().Summary -->returns `True` if [Data Explorer](Admin/dataExplorer.md) access has been disabled for the working session<!-- END REF -->.

By default, the Data Explorer access is granted for `webAdmin` sessions, but it can be disabled to prevent any data access from administrators (see the [`.setAdminProtection()`](#setadminprotection) function).

#### Voir également

[`.setAdminProtection()`](#setadminprotection)

<!-- END REF -->




<!-- REF DataStoreClass.makeSelectionsAlterable().Desc -->
## .makeSelectionsAlterable()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R5  | Ajout         |
</details>

<!-- REF #DataStoreClass.makeSelectionsAlterable().Syntax -->
**.makeSelectionsAlterable()**<!-- END REF -->

<!-- REF #DataStoreClass.makeSelectionsAlterable().Params -->
| Paramètres | Type |  | Description                 |
| ---------- | ---- |::| --------------------------- |
|            |      |  | Ne requiert aucun paramètre |
<!-- END REF -->


#### Description

The `.makeSelectionsAlterable()` function <!-- REF #DataStoreClass.makeSelectionsAlterable().Summary -->sets all entity selections as alterable by default in the current application datastores<!-- END REF --> (including [remote datastores](ORDA/remoteDatastores.md)). It is intended to be used once, for example in the `On Startup` database method.

When this function is not called, new entity selections can be shareable, depending on the nature of their "parent", or [how they are created](ORDA/entities.md#shareable-or-non-shareable-entity-selections).

> Cette fonction ne modifie pas les sélections d'entités créées par [`.copy(`](#copy)) ou `OB Copy` lorsque l'option explicite `ck shared` est utilisée.


> **Compatibilité** : Cette fonction doit être utilisée uniquement dans des projets convertis à partir de versions de 4D antérieures à 4D v18 R5 et contenant des appels [.add()](EntitySelectionClass.md#add). Dans ce contexte, l'utilisation de `.makeSelectionsAlterable()` peut faire gagner du temps en restaurant instantanément le précédent comportement 4D dans les projets existants. En revanche, l'utilisation de cette méthode dans les nouveaux projets créés dans 4D v18 R5 et les versions plus récentes **n'est pas recommandée**, car elle empêche le partage des entity selections, ce qui offre de meilleures performances et une plus grande évolutivité.


<!-- END REF -->


<!-- REF DataStoreClass.provideDataKey().Desc -->
## .provideDataKey()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!-- REF #DataStoreClass.provideDataKey().Syntax -->
**.provideDataKey**( *curPassPhrase* : Text ) : Object <br>**.provideDataKey**( *curDataKey* : Object ) : Object <!-- END REF -->


<!-- REF #DataStoreClass.provideDataKey().Params -->
| Paramètres    | Type   |    | Description                           |
| ------------- | ------ | -- | ------------------------------------- |
| curPassPhrase | Text   | -> | Current encryption passphrase         |
| curDataKey    | Object | -> | Current data encryption key           |
| Résultat      | Object | <- | Result of the encryption key matching |
<!-- END REF -->


#### Description

The `.provideDataKey()` function <!-- REF #DataStoreClass.provideDataKey().Summary -->allows providing a data encryption key for the current data file of the datastore and detects if the key matches the encrypted data<!-- END REF -->. This function can be used when opening an encrypted database, or when executing any encryption operation that requires the encryption key, such as re-encrypting the data file.
> * La fonction `.provideDataKey()` doit être appelée dans une base de données chiffrée. Si elle est appelée dans une base de données non chiffrée, l'erreur 2003 (la clé de cryptage ne correspond pas aux données.) est retournée. Utilisez la commande `Data file encryption status` pour déterminer si la base de données est chiffrée.
> * La fonction `.provideDataKey()` ne peut pas être appelée depuis un 4D distant ou un datastore distant chiffré.

If you use the *curPassPhrase* parameter, pass the string used to generate the data encryption key. When you use this parameter, an encryption key is generated.

If you use the *curDataKey* parameter, pass an object (with *encodedKey* property) that contains the data encryption key. This key may have been generated with the `New data key` command.

If a valid data encryption key is provided, it is added to the *keyChain* in memory and the encryption mode is enabled:

*   all data modifications in encryptable tables are encrypted on disk (.4DD, .journal. 4Dindx files)
*   all data loaded from encryptable tables is decrypted in memory


**Résultat**

The result of the command is described in the returned object:

| Propriété  |                          | Type       | Description                                                                     |
| ---------- | ------------------------ | ---------- | ------------------------------------------------------------------------------- |
| success    |                          | Boolean    | True if the provided encryption key matches the encrypted data, False otherwise |
|            |                          |            | Properties below are returned only if success is *FALSE*                        |
| status     |                          | Number     | Error code (4 if the provided encryption key is wrong)                          |
| statusText |                          | Text       | Message d'erreur                                                                |
| errors     |                          | Collection | Stack of errors. The first error has the highest index                          |
|            | \[ ].componentSignature | Text       | Internal component name                                                         |
|            | \[ ].errCode            | Number     | Error number                                                                    |
|            | \[ ].message            | Text       | Message d'erreur                                                                |

If no *curPassphrase* or *curDataKey* is given, `.provideDataKey()` returns **null** (no error is generated).



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
| Version | Modifications |
| ------- | ------------- |
| v18 R6  | Ajout         |
</details>

<!-- REF #DataStoreClass.setAdminProtection().Syntax -->**.setAdminProtection**( *status* : Boolean )<!-- END REF -->


<!-- REF #DataStoreClass.setAdminProtection().Params -->
| Paramètres | Type    |    | Description                                                                                          |
| ---------- | ------- | -- | ---------------------------------------------------------------------------------------------------- |
| status     | Boolean | -> | True to disable Data Explorer access to data on the `webAdmin` port, False (default) to grant access |
<!-- END REF -->


#### Description

The `.setAdminProtection()` function <!-- REF #DataStoreClass.setAdminProtection().Summary -->allows disabling any data access on the [web admin port](Admin/webAdmin.md#http-port), including for the [Data Explorer](Admin/dataExplorer.md) in `WebAdmin` sessions<!-- END REF -->.

By default when the function is not called, access to data is always granted on the web administration port for a session with `WebAdmin` privilege using the Data Explorer. In some configurations, for example when the application server is hosted on a third-party machine, you might not want the administrator to be able to view your data, although they can edit the server configuration, including the [access key](Admin/webAdmin.md#access-key) settings.

In this case, you can call this function to disable the data access from Data Explorer on the web admin port of the machine, even if the user session has the `WebAdmin` privilege. When this function is executed, the data file is immediately protected and the status is stored on disk: the data file will be protected even if the application is restarted.


#### Exemple

You create a *protectDataFile* project method to call before deployments for example:

```4d
 ds.setAdminProtection(True) //Désactive l'accès aux données de l'Explorateur de données
```

#### See also

[`.isAdminProtected()`](#isadminprotected)

<!-- END REF -->


<!-- REF DataStoreClass.startRequestLog().Desc -->
## .startRequestLog()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R6  | Ajout         |
</details>

<!-- REF #DataStoreClass.startRequestLog().Syntax -->
**.startRequestLog**()<br>**.startRequestLog**( *file* : 4D.File )<br>**.startRequestLog**( *reqNum* : Integer )<!-- END REF -->


<!-- REF #DataStoreClass.startRequestLog().Params -->
| Paramètres | Type    |    | Description                          |
| ---------- | ------- | -- | ------------------------------------ |
| file       | 4D.File | -> | Objet File                           |
| reqNum     | Integer | -> | Number of requests to keep in memory |
<!-- END REF -->


#### Description

The `.startRequestLog()` function <!-- REF #DataStoreClass.startRequestLog().Summary -->starts the logging of ORDA requests on the client side<!-- END REF -->.

This function must be called on a remote 4D, otherwise it does nothing. It is designed for debugging purposes in client/server configurations.

The ORDA request log can be sent to a file or to memory, depending on the parameter type:

*   If you passed a *file* object created with the `File` command, the log data is written in this file as a collection of objects (JSON format). Each object represents a request.<br>If the file does not already exist, it is created. Otherwise if the file already exists, the new log data is appended to it. If `.startRequestLog( )` is called with a file while a logging was previously started in memory, the memory log is stopped and emptied.
> A \] character must be manually appended at the end of the file to perform a JSON validation

*   If you passed a *reqNum* integer, the log in memory is emptied (if any) and a new log is initialized. It will keep *reqNum* requests in memory until the number is reached, in which case the oldest entries are emptied (FIFO stack).<br>If `.startRequestLog()` is called with a *reqNum* while a logging was previously started in a file, the file logging is stopped.

*   If you did not pass any parameter, the log is started in memory. If `.startRequestLog()` was previously called with a *reqNum* (before a `.stopRequestLog()`), the log data is stacked in memory until the next time the log is emptied or `.stopRequestLog()` is called.

For a description of the ORDA request log format, please refer to the [**ORDA client requests**](https://doc.4d.com/4Dv18/4D/18/Description-of-log-files.300-4575486.en.html#4385373) section.

#### Exemple 1

You want to log ORDA client requests in a file and use the log sequence number:

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

You want to log ORDA client requests in memory:

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
| Version | Modifications |
| ------- | ------------- |
| v18     | Ajout         |
</details>

<!-- REF #DataStoreClass.startTransaction().Syntax -->
**.startTransaction()**<!-- END REF -->

<!-- REF #DataStoreClass.startTransaction().Params -->
| Paramètres | Type |  | Description                 |
| ---------- | ---- |  | --------------------------- |
|            |      |  | Ne requiert aucun paramètre |
<!-- END REF -->


#### Description

The `.startTransaction()` function <!-- REF #DataStoreClass.startTransaction().Summary -->starts a transaction in the current process on the database matching the datastore to which it applies<!-- END REF -->. Any changes made to the datastore's entities in the transaction's process are temporarily stored until the transaction is either validated or cancelled.
> Si cette méthode est appelée sur le datastore principal (c'est-à-dire le datastore retourné par la commande `ds`), la transaction est appliquée à toutes les opérations effectuées sur le datastore principal et sur la base de données sous-jacente, incluant donc le langage ORDA et le langage classique.

You can nest several transactions (sub-transactions). Each transaction or sub-transaction must eventually be cancelled or validated. Note that if the main transaction is cancelled, all of its sub-transactions are also cancelled even if they were validated individually using the `.validateTransaction()` function.


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
| Version | Modifications |
| ------- | ------------- |
| v17 R6  | Ajout         |
</details>

<!-- REF #DataStoreClass.stopRequestLog().Syntax -->
**.stopRequestLog()**  <!-- END REF -->

<!-- REF #DataStoreClass.stopRequestLog().Params -->
| Paramètres | Type |  | Description                 |
| ---------- | ---- |  | --------------------------- |
|            |      |  | Ne requiert aucun paramètre |
<!-- END REF -->


#### Description

The `.stopRequestLog()` function <!-- REF #DataStoreClass.stopRequestLog().Summary -->stops any logging of ORDA requests on the client side<!-- END REF --> (in file or in memory). It is particularly useful when logging in a file, since it actually closes the opened document on disk.

This function must be called on a remote 4D, otherwise it does nothing. It is designed for debugging purposes in client/server configurations.


#### Exemple

See examples for [`.startRequestLog()`](#startrequestlog).

<!-- END REF -->




<!-- REF DataStoreClass.validateTransaction().Desc -->
## .validateTransaction()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18     | Ajout         |
</details>

<!-- REF #DataStoreClass.validateTransaction().Syntax -->
**.validateTransaction()**  <!-- END REF -->

<!-- REF #DataStoreClass.validateTransaction().Params -->
| Paramètres | Type |  | Description                 |
| ---------- | ---- |  | --------------------------- |
|            |      |  | Ne requiert aucun paramètre |
<!-- END REF -->


#### Description

The `.validateTransaction()` function <!-- REF #DataStoreClass.validateTransaction().Summary -->accepts the transaction <!-- END REF -->that was started with [`.startTransaction()`](#starttransaction) at the corresponding level on the specified datastore.

The function saves the changes to the data on the datastore that occurred during the transaction.

You can nest several transactions (sub-transactions). If the main transaction is cancelled, all of its sub-transactions are also cancelled, even if they were validated individually using this function.


#### Exemple

See example for [`.startTransaction()`](#starttransaction).

<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
