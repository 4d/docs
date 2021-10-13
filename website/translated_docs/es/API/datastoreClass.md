---
id: datastoreClass
title: DataStore
---

A [Datastore](ORDA/dsMapping.md#datastore) is the interface object provided by ORDA to reference and access a database. `Datastore` objects are returned by the following commands:

*   [ds](#ds): a shortcut to the main datastore
*   [Open datastore](#open-datastore): to open any remote datastore

### Resumen

|                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #datastoreClass.cancelTransaction().Syntax -->](#canceltransaction)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #datastoreClass.cancelTransaction().Summary -->|
| [<!-- INCLUDE datastoreClass.dataclassName.Syntax -->](#dataclassname)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE datastoreClass.dataclassName.Summary --> |
| [<!-- INCLUDE #datastoreClass.encryptionStatus().Syntax -->](#encryptionstatus)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #datastoreClass.encryptionStatus().Summary --> |
| [<!-- INCLUDE #datastoreClass.getInfo().Syntax -->](#getinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #datastoreClass.getInfo().Summary --> |
| [<!-- INCLUDE #datastoreClass.getRequestLog().Syntax -->](#getrequestlog)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #datastoreClass.getRequestLog().Summary --> |
| [<!-- INCLUDE #datastoreClass.makeSelectionsAlterable().Syntax -->](#makeselectionsalterable)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #datastoreClass.makeSelectionsAlterable().Summary --> |
| [<!-- INCLUDE #datastoreClass.provideDataKey().Syntax -->](#providedatakey)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #datastoreClass.provideDataKey().Summary --> |
| [<!-- INCLUDE #datastoreClass.setAdminProtection().Syntax -->](#setAdminProtection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #datastoreClass.setAdminProtection().Summary --> |
| [<!-- INCLUDE #datastoreClass.startRequestLog().Syntax -->](#startrequestlog)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #datastoreClass.startRequestLog().Summary --> |
| [<!-- INCLUDE #datastoreClass.startTransaction().Syntax -->](#starttransaction)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #datastoreClass.startTransaction().Summary --> |
| [<!-- INCLUDE #datastoreClass.stopRequestLog().Syntax -->](#stoprequestlog)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #datastoreClass.stopRequestLog().Summary --> |
| [<!-- INCLUDE #datastoreClass.validateTransaction().Syntax -->](#validatetransaction)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #datastoreClass.validateTransaction().Summary --> |





## ds

<details><summary>Histórico</summary>
| Versión | Modificaciones               |
| ------- | ---------------------------- |
| v18     | Support of localID parameter |
| v17     | Añadidos                     |
</details>

<!-- REF #_command_.ds.Syntax -->
**ds** { ( *localID* : Text ) } : cs.DataStore <!-- END REF -->

<!-- REF #_command_.ds.Params -->
| Parámetros | Tipo         |    | Descripción                                |
| ---------- | ------------ | -- | ------------------------------------------ |
| localID    | Text         | -> | Local ID of the remote datastore to return |
| Resultado  | cs.DataStore | <- | Reference to the datastore                 |
<!-- END REF -->


#### Descripción

The `ds` command <!-- REF #_command_.ds.Summary -->returns a reference to the datastore matching the current 4D database or the database designated by *localID*<!-- END REF -->.

If you omit the *localID* parameter (or pass an empty string ""), the command returns a reference to the datastore matching the local 4D database (or the 4D Server database in case of opening a remote database on 4D Server). The datastore is opened automatically and available directly through `ds`.

You can also get a reference on an open remote datastore by passing its local id in the *localID* parameter. The datastore must have been previously opened with the [`Open datastore`](#open-datastore) command by the current database (host or component). The local id is defined when using this command.
> The scope of the local id is the database where the datastore has been opened.

If no *localID* datastore is found, the command returns **Null**.

Using `ds` requires that the target database is compliant with ORDA, as specified in the **ORDA prerequisites** section. The following rules are applied:

*   Un datastore sólo hace referencia a las tablas con una sola llave primaria. Tables without a primary key or with composite primary keys are not referenced.
*   BLOB type attributes are not managed in the datastore.



#### Ejemplo 1

Using the main datastore on the 4D database:

```4d
 $result:=ds.Employee.query("firstName = :1";"S@")
```

#### Ejemplo 2

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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18     | Añadidos       |
</details>

<!-- REF #_command_.Open datastore.Syntax -->
**Open datastore**( *connectionInfo* : Object ; *localID* : Text ) : cs.DataStore <!-- END REF -->

<!-- REF #_command_.Open datastore.Params -->
| Parámetros     | Tipo         |    | Descripción                                                               |
| -------------- | ------------ | -- | ------------------------------------------------------------------------- |
| connectionInfo | Object       | -> | Connection properties used to reach the remote datastore                  |
| localID        | Text         | -> | Id to assign to the opened datastore on the local application (mandatory) |
| Resultado      | cs.DataStore | <- | Datastore object                                                          |
<!-- END REF -->


#### Descripción

The `Open datastore` command <!-- REF #_command_.Open datastore.Summary -->connects the application to the 4D database identified by the *connectionInfo* parameter<!-- END REF --> and returns a matching `cs.DataStore` object associated with the *localID* local alias.

The *connectionInfo* 4D database must be available as a remote datastore, i.e.:

*   its web server must be launched with http and/or https enabled,
*   its [**Expose as REST server**](REST/configuration.md#starting-the-rest-server) option must be checked,
*   at least one client license is available.

If no matching database is found, `Open datastore` returns **Null**.

*localID* is a local alias for the session opened on remote datastore. If *localID* already exists on the application, it is used. Otherwise, a new *localID* session is created when the datastore object is used.

Once the session is opened, the following statements become equivalent and return a reference on the same datastore object:

```4d
 $myds:=Open datastore(connectionInfo;"myLocalId")
 $myds2:=ds("myLocalId")
  //$myds and $myds2 are equivalent
```

Pass in *connectionInfo* an object describing the remote datastore you want to connect to. It can contain the following properties (all properties are optional except *hostname*):

| Propiedad   | Tipo    | Descripción                                                                                                                                                                                                                                                            |
| ----------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hostname    | Text    | Name or IP address of the remote database + ":" + port number (port number is mandatory)                                                                                                                                                                               |
| user        | Text    | User name                                                                                                                                                                                                                                                              |
| contraseña  | Text    | User password                                                                                                                                                                                                                                                          |
| idleTimeout | Longint | Inactivity session timeout (in minutes), after which the session is automatically closed by 4D. If omitted, default value is 60 (1h). The value cannot be < 60 (if a lower value is passed, the timeout is set to 60). For more information, see **Closing sessions**. |
| tls         | Boolean | Use secured connection(*). If omitted, false by default. Using a secured connection is recommended whenever possible.                                                                                                                                                  |
| type        | Text    | Debe ser "4D Server"                                                                                                                                                                                                                                                   |

(*) If tls is true, the HTTPS protocol is used if:

*   HTTPS is enabled on the remote datastore
*   the given port is the right HTTPS port configured in the database settings
*   a valid certificate and private encryption key are installed in the database. Otherwise, error "1610 - A remote request to host xxx has failed" is raised

#### Ejemplo 1

Connection to a remote datastore without user / password:

```4d
 var $connectTo : Object 
 var $remoteDS : cs.DataStore
 $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")
 $remoteDS:=Open datastore($connectTo;"students")
 ALERT("This remote datastore contains "+String($remoteDS.Students.all().length)+" students")
```

#### Ejemplo 2

Connection to a remote datastore with user / password / timeout / tls:

```4d
 var $connectTo : Object 
 var $remoteDS : cs.DataStore
 $connectTo:=New object("type";"4D Server";"hostname";\"192.168.18.11:4443";\  
    "user";"marie";"password";$pwd;"idleTimeout";70;"tls";True)
 $remoteDS:=Open datastore($connectTo;"students")
 ALERT("This remote datastore contains "+String($remoteDS.Students.all().length)+" students")
```

#### Ejemplo 3

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

#### Error management

In case of error, the command returns **Null**. If the remote datastore cannot be reached (wrong address, web server not started, http and https not enabled...), error 1610 "A remote request to host XXX has failed" is raised. You can intercept this error with a method installed by `ON ERR CALL`. 



<!-- REF datastoreClass.dataclassName.Desc -->
## *.dataclassName*

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |
</details>

<!-- REF datastoreClass.dataclassName.Syntax -->
***.dataclassName*** : 4D.DataClass<!-- END REF -->


#### Descripción

Each dataclass in a datastore is available as a property of the [DataStore object](ORDA/dsMapping.md#datastore)data. The returned object <!-- REF datastoreClass.dataclassName.Summary -->contains a description of the dataclass<!-- END REF -->.


#### Ejemplo

```4d
 var $emp : cs.Employee
 var $sel : cs.EmployeeSelection
 $emp:=ds.Employee //$emp contains the Employee dataclass
 $sel:=$emp.all() //gets an entity selection of all employees

  //you could also write directly:
 $sel:=ds.Employee.all()
```


<!-- END REF -->



<!-- REF datastoreClass.cancelTransaction().Desc -->

## .cancelTransaction()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18     | Añadidos       |
</details>


<!-- REF #datastoreClass.cancelTransaction().Syntax -->
**.cancelTransaction()**<!-- END REF -->

<!-- REF #datastoreClass.cancelTransaction().Params -->
| Parámetros | Tipo |  | Descripción                  |
| ---------- | ---- |::| ---------------------------- |
|            |      |  | No requiere ningún parámetro |
<!-- END REF -->


#### Descripción

The `.cancelTransaction()` function <!-- REF #datastoreClass.cancelTransaction().Summary -->cancels the transaction<!-- END REF --> opened by the [`.startTransaction()`](#starttransaction) function at the corresponding level in the current process for the specified datastore.

The `.cancelTransaction()` function cancels any changes made to the data during the transaction.

You can nest several transactions (sub-transactions). If the main transaction is cancelled, all of its sub-transactions are also cancelled, even if they were validated individually using the [`.validateTransaction()`](#validatetransactions) function.


#### Ejemplo

See example for the [`.startTransaction()`](#starttransaction) function.


<!-- END REF -->



<!-- REF datastoreClass.encryptionStatus().Desc -->
## .encryptionStatus()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #datastoreClass.encryptionStatus().Syntax -->
**.encryptionStatus()**: Object<!-- END REF -->


<!-- REF #datastoreClass.encryptionStatus().Params -->
| Parámetros | Tipo   |    | Descripción                                                                 |
| ---------- | ------ |:--:| --------------------------------------------------------------------------- |
| Resultado  | Object | <- | Information about the encryption of the current datastore and of each table |
<!-- END REF -->


#### Descripción

The `.encryptionStatus()` function <!-- REF #datastoreClass.encryptionStatus().Summary -->returns an object providing the encryption status for the current data file<!-- END REF --> (i.e., the data file of the `ds` datastore). The status for each table is also provided.
> Use the `Data file encryption status` command to determine the encryption status of any other data file.


**Returned value**

The returned object contains the following properties:

| Propiedad   |             |               | Tipo    | Descripción                                                                        |
| ----------- | ----------- | ------------- | ------- | ---------------------------------------------------------------------------------- |
| isEncrypted |             |               | Boolean | True if the data file is encrypted                                                 |
| keyProvided |             |               | Boolean | True if the encryption key matching the encrypted data file is provided(*).        |
| tablas      |             |               | Object  | Object containing as many properties as there are encryptable or encrypted tables. |
|             | *tableName* |               | Object  | Encryptable or Encrypted table                                                     |
|             |             | name          | Text    | Name of the table                                                                  |
|             |             | num           | Number  | Table number                                                                       |
|             |             | isEncryptable | Boolean | True if the table is declared encryptable in the structure file                    |
|             |             | isEncrypted   | Boolean | True if the records of the table are encrypted in the data file                    |

(*) The encryption key can be provided:

*   with the `.provideDataKey()` command,
*   at the root of a connected device before opening the datastore,
*   with the `Discover data key` command.

#### Ejemplo

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



<!-- REF datastoreClass.getInfo().Desc -->
## .getInfo()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details>

<!-- REF #datastoreClass.getInfo().Syntax -->
**.getInfo()**: Object<!-- END REF -->

<!-- REF #datastoreClass.getInfo().Params -->
| Parámetros | Tipo   |    | Descripción          |
| ---------- | ------ |:--:| -------------------- |
| Resultado  | Objeto | <- | Datastore properties |
<!-- END REF -->

#### Descripción

The `.getInfo()` function <!-- REF #datastoreClass.getInfo().Summary -->returns an object providing information about the datastore<!-- END REF -->. This function is useful for setting up generic code.

**Returned object**

| Propiedad  | Tipo    | Descripción                                                                                                                                                     |
| ---------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type       | string  | <li>"4D": main datastore, available through ds </li><li>"4D Server": remote datastore, open with Open datastore</li>                                                                                                              |
| networked  | boolean | <li>True: the datastore is reached through a network connection.</li><li>False: the datastore is not reached through a network connection (local database)</li>                                                                                                              |
| localID    | text    | ID of the datastore on the machine. Corresponds to the localId string given with the `Open datastore` command. Empty string ("") for main datastore.            |
| connection | object  | Object describing the remote datastore connection (not returned for main datastore). Available properties:<p><table><tr><th>Propiedad</th><th>Tipo</th><th>Descripción</th></tr><tr><td>hostname</td><td>text</td><td>IP address or name of the remote datastore + ":" + port number</td></tr><tr><td>tls</td><td>boolean</td><td>True if secured connection is used with the remote datastore</td></tr><tr><td>idleTimeout</td><td>number</td><td>Session inactivity timeout (in minutes)</td></tr><tr><td>user</td><td>text</td><td>User authenticated on the remote datastore</td></tr></table> |

*   If the `.getInfo()` function is executed on a 4D Server or 4D single-user, `networked` is False.
*   If the `.getInfo()` function is executed on a remote 4D, `networked` is True


#### Ejemplo 1

```4d
 var $info : Object

 $info:=ds.getInfo() //Executed on 4D Server or 4D
  //{"type":"4D","networked":false,"localID":""}

 $info:=ds.getInfo() // Executed on 4D remote
  //{"type":"4D","networked":true,"localID":""}
```

#### Ejemplo 2

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



<!-- REF datastoreClass.getRequestLog().Desc -->
## .getRequestLog()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R6  | Añadidos       |
</details>

<!-- REF #datastoreClass.getRequestLog().Syntax -->
**.getRequestLog()** : Collection<!-- END REF -->

<!-- REF #datastoreClass.getRequestLog().Params -->
| Parámetros | Tipo       |    | Descripción                                                  |
| ---------- | ---------- |:--:| ------------------------------------------------------------ |
| Resultado  | Collection | <- | Collection of objects, where each object describes a request |
<!-- END REF -->


#### Descripción

The `.getRequestLog()` function <!-- REF #datastoreClass.getRequestLog().Summary -->returns the ORDA requests logged in memory on the client side<!-- END REF -->. The ORDA request logging must have previously been enabled using the [`.startRequestLog()`](#startrequestlog) function.

This function must be called on a remote 4D, otherwise it returns an empty collection. It is designed for debugging purposes in client/server configurations.

**Returned value**

Collection of stacked request objects. The most recent request has index 0.

For a description of the ORDA request log format, please refer to the [**ORDA client requests**](https://doc.4d.com/4Dv18/4D/18/Description-of-log-files.300-4575486.en.html#4385373) section.


#### Ejemplo

See Example 2 of [`.startRequestLog()`](#startrequestlog).

<!-- END REF -->


<!-- REF datastoreClass.isAdminProtected().Desc -->
## .isAdminProtected()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |
</details>

<!-- REF #datastoreClass.isAdminProtected().Syntax -->
**.isAdminProtected()** : Boolean<!-- END REF -->

<!-- REF #datastoreClass.isAdminProtected().Params -->
| Parámetros | Tipo    |    | Descripción                                                                    |
| ---------- | ------- |:--:| ------------------------------------------------------------------------------ |
| Resultado  | Boolean | <- | True if the Data Explorer access is disabled, False if it is enabled (default) |
<!-- END REF -->


#### Descripción

The `.isAdminProtected()` function <!-- REF #datastoreClass.isAdminProtected().Summary -->returns `True` if [Data Explorer](Admin/dataExplorer.md) access has been disabled for the working session<!-- END REF -->.

By default, the Data Explorer access is granted for `webAdmin` sessions, but it can be disabled to prevent any data access from administrators (see the [`.setAdminProtection()`](#setadminprotection) function).

#### Ver también

[`.setAdminProtection()`](#setadminprotection)

<!-- END REF -->




<!-- REF datastoreClass.makeSelectionsAlterable().Desc -->
## .makeSelectionsAlterable()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R5  | Añadidos       |
</details>

<!-- REF #datastoreClass.makeSelectionsAlterable().Syntax -->
**.makeSelectionsAlterable()**<!-- END REF -->

<!-- REF #datastoreClass.makeSelectionsAlterable().Params -->
| Parámetros | Tipo |  | Descripción                  |
| ---------- | ---- |::| ---------------------------- |
|            |      |  | No requiere ningún parámetro |
<!-- END REF -->


#### Descripción

The `.makeSelectionsAlterable()` function <!-- REF #datastoreClass.makeSelectionsAlterable().Summary -->sets all entity selections as alterable by default in the current application datastores<!-- END REF --> (including [remote datastores](ORDA/remoteDatastores.md)). It is intended to be used once, for example in the `On Startup` database method.

When this function is not called, new entity selections can be shareable, depending on the nature of their "parent", or [how they are created](ORDA/entities.md#shareable-or-non-shareable-entity-selections).

> This function does not modify entity selections created by [`.copy()`](#copy) or `OB Copy` when the explicit `ck shared` option is used.


> **Compatibility**: This function must only be used in projects converted from 4D versions prior to 4D v18 R5 and containing [.add()](entitySelectionClass.md#add) calls. In this context, using `.makeSelectionsAlterable()` can save time by restoring instantaneously the previous 4D behavior in existing projects. On the other hand, using this method in new projects created in 4D v18 R5 and higher **is not recommended**, since it prevents entity selections to be shared, which provides greater performance and scalabitlity. 


<!-- END REF -->


<!-- REF datastoreClass.provideDataKey().Desc -->
## .provideDataKey()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #datastoreClass.provideDataKey().Syntax -->
**.provideDataKey**( *curPassPhrase* : Text ) : Object <br>**.provideDataKey**( *curDataKey* : Object ) : Object <!-- END REF -->


<!-- REF #datastoreClass.provideDataKey().Params -->
| Parámetros    | Tipo   |    | Descripción                           |
| ------------- | ------ | -- | ------------------------------------- |
| curPassPhrase | Text   | -> | Current encryption passphrase         |
| curDataKey    | Object | -> | Current data encryption key           |
| Resultado     | Object | <- | Result of the encryption key matching |
<!-- END REF -->


#### Descripción

The `.provideDataKey()` function <!-- REF #datastoreClass.provideDataKey().Summary -->allows providing a data encryption key for the current data file of the datastore and detects if the key matches the encrypted data<!-- END REF -->. This function can be used when opening an encrypted database, or when executing any encryption operation that requires the encryption key, such as re-encrypting the data file.
> * The `.provideDataKey()` function must be called in an encrypted database. If it is called in a non-encrypted database, the error 2003 (the encryption key does not match the data.) is returned. Use the `Data file encryption status` command to determine if the database is encrypted.
> * The `.provideDataKey()` function cannot be called from a remote 4D or an encrypted remote datastore.

If you use the *curPassPhrase* parameter, pass the string used to generate the data encryption key. When you use this parameter, an encryption key is generated.

If you use the *curDataKey* parameter, pass an object (with *encodedKey* property) that contains the data encryption key. This key may have been generated with the `New data key` command.

If a valid data encryption key is provided, it is added to the *keyChain* in memory and the encryption mode is enabled:

*   all data modifications in encryptable tables are encrypted on disk (.4DD, .journal. 4Dindx files)
*   all data loaded from encryptable tables is decrypted in memory


**Resultado**

The result of the command is described in the returned object:

| Propiedad  |                          | Tipo       | Descripción                                                                     |
| ---------- | ------------------------ | ---------- | ------------------------------------------------------------------------------- |
| success    |                          | Boolean    | True if the provided encryption key matches the encrypted data, False otherwise |
|            |                          |            | Properties below are returned only if success is *FALSE*                        |
| status     |                          | Number     | Error code (4 if the provided encryption key is wrong)                          |
| statusText |                          | Text       | Error message                                                                   |
| errors     |                          | Collection | Stack of errors. The first error has the highest index                          |
|            | \[ ].componentSignature | Text       | Internal component name                                                         |
|            | \[ ].errCode            | Number     | Error number                                                                    |
|            | \[ ].message            | Text       | Error message                                                                   |

If no *curPassphrase* or *curDataKey* is given, `.provideDataKey()` returns **null** (no error is generated).



#### Ejemplo

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


<!-- REF datastoreClass.setAdminProtection().Desc -->
## .setAdminProtection()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |
</details>

<!-- REF #datastoreClass.setAdminProtection().Syntax -->**.setAdminProtection**( *status* : Boolean )<!-- END REF -->


<!-- REF #datastoreClass.setAdminProtection().Params -->
| Parámetros | Tipo    |    | Descripción                                                                                          |
| ---------- | ------- | -- | ---------------------------------------------------------------------------------------------------- |
| status     | Boolean | -> | True to disable Data Explorer access to data on the `webAdmin` port, False (default) to grant access |
<!-- END REF -->


#### Descripción

The `.setAdminProtection()` function <!-- REF #datastoreClass.setAdminProtection().Summary -->allows disabling any data access on the [web admin port](Admin/webAdmin.md#http-port), including for the [Data Explorer](Admin/dataExplorer.md) in `WebAdmin` sessions<!-- END REF -->.

By default when the function is not called, access to data is always granted on the web administration port for a session with `WebAdmin` privilege using the Data Explorer. In some configurations, for example when the application server is hosted on a third-party machine, you might not want the administrator to be able to view your data, although they can edit the server configuration, including the [access key](Admin/webAdmin.md#access-key) settings.

In this case, you can call this function to disable the data access from Data Explorer on the web admin port of the machine, even if the user session has the `WebAdmin` privilege. When this function is executed, the data file is immediately protected and the status is stored on disk: the data file will be protected even if the application is restarted.


#### Ejemplo

You create a *protectDataFile* project method to call before deployments for example:

```4d
 ds.setAdminProtection(True) //Disables the Data Explorer data access
```

#### Ver también

[`.isAdminProtected()`](#isadminprotected)

<!-- END REF -->


<!-- REF datastoreClass.startRequestLog().Desc -->
## .startRequestLog()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R6  | Añadidos       |
</details>

<!-- REF #datastoreClass.startRequestLog().Syntax -->
**.startRequestLog**()<br>**.startRequestLog**( *file* : 4D.File )<br>**.startRequestLog**( *reqNum* : Integer )<!-- END REF -->


<!-- REF #datastoreClass.startRequestLog().Params -->
| Parámetros | Tipo    |    | Descripción                          |
| ---------- | ------- | -- | ------------------------------------ |
| file       | 4D.File | -> | File object                          |
| reqNum     | Integer | -> | Number of requests to keep in memory |
<!-- END REF -->


#### Descripción

The `.startRequestLog()` function <!-- REF #datastoreClass.startRequestLog().Summary -->starts the logging of ORDA requests on the client side<!-- END REF -->.

This function must be called on a remote 4D, otherwise it does nothing. It is designed for debugging purposes in client/server configurations.

The ORDA request log can be sent to a file or to memory, depending on the parameter type:

*   If you passed a *file* object created with the `File` command, the log data is written in this file as a collection of objects (JSON format). Each object represents a request.<br>If the file does not already exist, it is created. Otherwise if the file already exists, the new log data is appended to it. If `.startRequestLog( )` is called with a file while a logging was previously started in memory, the memory log is stopped and emptied.
> A \] character must be manually appended at the end of the file to perform a JSON validation

*   If you passed a *reqNum* integer, the log in memory is emptied (if any) and a new log is initialized. It will keep *reqNum* requests in memory until the number is reached, in which case the oldest entries are emptied (FIFO stack).<br>If `.startRequestLog()` is called with a *reqNum* while a logging was previously started in a file, the file logging is stopped.

*   If you did not pass any parameter, the log is started in memory. If `.startRequestLog()` was previously called with a *reqNum* (before a `.stopRequestLog()`), the log data is stacked in memory until the next time the log is emptied or `.stopRequestLog()` is called.

For a description of the ORDA request log format, please refer to the [**ORDA client requests**](https://doc.4d.com/4Dv18/4D/18/Description-of-log-files.300-4575486.en.html#4385373) section.

#### Ejemplo 1

You want to log ORDA client requests in a file and use the log sequence number:

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

#### Ejemplo 2

You want to log ORDA client requests in memory:

```4d 
 var $es : cs.PersonsSelection
 var $log : Collection

 ds.startRequestLog(3) //keep 3 requests in memory

 $es:=ds.Persons.query("name=:1";"Marie")
 $es:=ds.Persons.query("name IN :1";New collection("Marie"))
 $es:=ds.Persons.query("name=:1";"So@")

 $log:=ds.getRequestLog()
 ALERT("The longest request lasted: "+String($log.max("duration"))+" ms")
```
 
<!-- END REF -->




<!-- REF datastoreClass.startTransaction().Desc -->
## .startTransaction()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18     | Añadidos       |
</details>

<!-- REF #datastoreClass.startTransaction().Syntax -->
**.startTransaction()**<!-- END REF -->

<!-- REF #datastoreClass.startTransaction().Params -->
| Parámetros | Tipo |  | Descripción                  |
| ---------- | ---- |  | ---------------------------- |
|            |      |  | No requiere ningún parámetro |
<!-- END REF -->


#### Descripción

The `.startTransaction()` function <!-- REF #datastoreClass.startTransaction().Summary -->starts a transaction in the current process on the database matching the datastore to which it applies<!-- END REF -->. Any changes made to the datastore's entities in the transaction's process are temporarily stored until the transaction is either validated or cancelled.
> If this method is called on the main datastore (i.e. the datastore returned by the `ds` command), the transaction is applied to all operations performed on the main datastore and on the underlying database, thus including ORDA and classic languages.

You can nest several transactions (sub-transactions). Each transaction or sub-transaction must eventually be cancelled or validated. Note that if the main transaction is cancelled, all of its sub-transactions are also cancelled even if they were validated individually using the `.validateTransaction()` function.


#### Ejemplo


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





<!-- REF datastoreClass.stopRequestLog().Desc -->
## .stopRequestLog()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R6  | Añadidos       |
</details>

<!-- REF #datastoreClass.stopRequestLog().Syntax -->
**.stopRequestLog()**  <!-- END REF -->

<!-- REF #datastoreClass.stopRequestLog().Params -->
| Parámetros | Tipo |  | Descripción                  |
| ---------- | ---- |  | ---------------------------- |
|            |      |  | No requiere ningún parámetro |
<!-- END REF -->


#### Descripción

The `.stopRequestLog()` function <!-- REF #datastoreClass.stopRequestLog().Summary -->stops any logging of ORDA requests on the client side<!-- END REF --> (in file or in memory). It is particularly useful when logging in a file, since it actually closes the opened document on disk.

This function must be called on a remote 4D, otherwise it does nothing. It is designed for debugging purposes in client/server configurations.


#### Ejemplo

See examples for [`.startRequestLog()`](#startrequestlog).

<!-- END REF -->




<!-- REF datastoreClass.validateTransaction().Desc -->
## .validateTransaction()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18     | Añadidos       |
</details>

<!-- REF #datastoreClass.validateTransaction().Syntax -->
**.validateTransaction()**  <!-- END REF -->

<!-- REF #datastoreClass.validateTransaction().Params -->
| Parámetros | Tipo |  | Descripción                  |
| ---------- | ---- |  | ---------------------------- |
|            |      |  | No requiere ningún parámetro |
<!-- END REF -->


#### Descripción

The `.validateTransaction()` function <!-- REF #datastoreClass.validateTransaction().Summary -->accepts the transaction <!-- END REF -->that was started with [`.startTransaction()`](#starttransaction) at the corresponding level on the specified datastore.

The function saves the changes to the data on the datastore that occurred during the transaction.

You can nest several transactions (sub-transactions). If the main transaction is cancelled, all of its sub-transactions are also cancelled, even if they were validated individually using this function.


#### Ejemplo

See example for [`.startTransaction()`](#starttransaction).

<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
