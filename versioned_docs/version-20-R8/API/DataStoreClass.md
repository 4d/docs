---
id: DataStoreClass
title: DataStore
---

A [Datastore](ORDA/dsMapping.md#datastore) is the interface object provided by ORDA to reference and access a database. `Datastore` objects are returned by the following commands:

* [ds](../commands/ds.md): a shortcut to the main datastore
* [Open datastore](../commands/open-datastore.md): to open any remote datastore

### Summary

||
|---|
|[<!-- INCLUDE #DataStoreClass.cancelTransaction().Syntax -->](#canceltransaction)<br/><!-- INCLUDE #DataStoreClass.cancelTransaction().Summary -->|
|[<!-- INCLUDE #DataStoreClass.clearAllRemoteContexts().Syntax -->](#clearallremotecontexts)<br/><!-- INCLUDE #DataStoreClass.clearAllRemoteContexts().Summary -->|
|[<!-- INCLUDE DataStoreClass.dataclassName.Syntax -->](#dataclassname)<br/><!-- INCLUDE DataStoreClass.dataclassName.Summary --> |
|[<!-- INCLUDE #DataStoreClass.encryptionStatus().Syntax -->](#encryptionstatus)<br/><!-- INCLUDE #DataStoreClass.encryptionStatus().Summary --> |
|[<!-- INCLUDE #DataStoreClass.flushAndLock().Syntax -->](#flushAndLock)<br/><!-- INCLUDE #DataStoreClass.flushAndLock().Summary --> |
|[<!-- INCLUDE #DataStoreClass.getAllRemoteContexts().Syntax -->](#getallremotecontexts)<br/><!-- INCLUDE #DataStoreClass.getAllRemoteContexts().Summary --> |
|[<!-- INCLUDE #DataStoreClass.getGlobalStamp().Syntax -->](#getglobalstamp)<br/><!-- INCLUDE #DataStoreClass.getGlobalStamp().Summary --> |
|[<!-- INCLUDE #DataStoreClass.getInfo().Syntax -->](#getinfo)<br/><!-- INCLUDE #DataStoreClass.getInfo().Summary --> |
|[<!-- INCLUDE #DataStoreClass.getRemoteContextInfo().Syntax -->](#getremotecontextinfo)<br/><!-- INCLUDE #DataStoreClass.getRemoteContextInfo().Summary --> |
|[<!-- INCLUDE #DataStoreClass.getRequestLog().Syntax -->](#getrequestlog)<br/><!-- INCLUDE #DataStoreClass.getRequestLog().Summary --> |
|[<!-- INCLUDE #DataStoreClass.locked().Syntax -->](#locked)<br/><!-- INCLUDE #DataStoreClass.locked().Summary --> |
|[<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Syntax -->](#makeselectionsalterable)<br/><!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Summary --> |
|[<!-- INCLUDE #DataStoreClass.provideDataKey().Syntax -->](#providedatakey)<br/><!-- INCLUDE #DataStoreClass.provideDataKey().Summary --> |
|[<!-- INCLUDE #DataStoreClass.setAdminProtection().Syntax -->](#setadminprotection)<br/><!-- INCLUDE #DataStoreClass.setAdminProtection().Summary --> |
|[<!-- INCLUDE #DataStoreClass.setGlobalStamp().Syntax -->](#setglobalstamp)<br/><!-- INCLUDE #DataStoreClass.setGlobalStamp().Summary --> |
|[<!-- INCLUDE #DataStoreClass.setRemoteContextInfo().Syntax -->](#setremotecontextinfo)<br/><!-- INCLUDE #DataStoreClass.setRemoteContextInfo().Summary --> |
|[<!-- INCLUDE #DataStoreClass.startRequestLog().Syntax -->](#startrequestlog)<br/><!-- INCLUDE #DataStoreClass.startRequestLog().Summary --> |
|[<!-- INCLUDE #DataStoreClass.startTransaction().Syntax -->](#starttransaction)<br/><!-- INCLUDE #DataStoreClass.startTransaction().Summary --> |
|[<!-- INCLUDE #DataStoreClass.stopRequestLog().Syntax -->](#stoprequestlog)<br/><!-- INCLUDE #DataStoreClass.stopRequestLog().Summary --> |
|[<!-- INCLUDE #DataStoreClass.unlock().Syntax -->](#unlock)<br/><!-- INCLUDE #DataStoreClass.unlock().Summary --> |
|[<!-- INCLUDE #DataStoreClass.validateTransaction().Syntax -->](#validatetransaction)<br/><!-- INCLUDE #DataStoreClass.validateTransaction().Summary --> |





<!-- REF DataStoreClass.dataclassName.Desc -->
## *.dataclassName*

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17|Added|

</details>

<!-- REF DataStoreClass.dataclassName.Syntax -->***.dataclassName*** : 4D.DataClass<!-- END REF -->

#### Description

Each dataclass in a datastore is available as a property of the [DataStore object](ORDA/dsMapping.md#datastore)data. The returned object <!-- REF DataStoreClass.dataclassName.Summary -->contains a description of the dataclass<!-- END REF -->.

#### Example

```4d
 var $emp : cs.Employee
 var $sel : cs.EmployeeSelection
 $emp:=ds.Employee //$emp contains the Employee dataclass
 $sel:=$emp.all() //gets an entity selection of all employees

  //you could also write directly:
 $sel:=ds.Employee.all()
```

<!-- END REF -->

<!-- REF DataStoreClass.cancelTransaction().Desc -->

## .cancelTransaction()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18|Added|

</details>

<!-- REF #DataStoreClass.cancelTransaction().Syntax -->**.cancelTransaction()**<!-- END REF -->


<!-- REF #DataStoreClass.cancelTransaction().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|
<!-- END REF -->

#### Description

The `.cancelTransaction()` function <!-- REF #DataStoreClass.cancelTransaction().Summary -->cancels the transaction<!-- END REF --> opened by the [`.startTransaction()`](#starttransaction) function at the corresponding level in the current process for the specified datastore.

The `.cancelTransaction()` function cancels any changes made to the data during the transaction.

You can nest several transactions (sub-transactions). If the main transaction is cancelled, all of its sub-transactions are also cancelled, even if they were validated individually using the [`.validateTransaction()`](#validatetransactions) function.

#### Example

See example for the [`.startTransaction()`](#starttransaction) function.

<!-- END REF -->

<!-- REF #DataStoreClass.clearAllRemoteContexts().Desc -->
## .clearAllRemoteContexts()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R5|Added|


</details>

<!-- REF #DataStoreClass.clearAllRemoteContexts().Syntax -->**.clearAllRemoteContexts()**<!-- END REF -->


<!-- REF #DataStoreClass.clearAllRemoteContexts().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|
<!-- END REF -->

#### Description

The `.clearAllRemoteContexts()` function <!-- REF #DataStoreClass.clearAllRemoteContexts().Summary -->clears all the attributes for all the active contexts in the datastore<!-- END REF -->.

This function is mainly used in the context of debugging. One thing to keep in mind is that when you open the debugger, it sends requests to the server and queries all the dataclass attributes to display them. This can overload your contexts with unnecessary data.

In such cases, you can use `.clearAllRemoteContexts()` to clear your contexts and keep them clean.

#### See also

[.getRemoteContextInfo()](#getremotecontextinfo)<br/>[.getAllRemoteContexts()](#getallremotecontexts)<br/>[.setRemoteContextInfo()](#setremotecontextinfo)

<!-- REF DataStoreClass.encryptionStatus().Desc -->
## .encryptionStatus()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17 R5|Added|

</details>

<!-- REF #DataStoreClass.encryptionStatus().Syntax -->**.encryptionStatus()**: Object<!-- END REF -->


<!-- REF #DataStoreClass.encryptionStatus().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Object|<-|Information about the encryption of the current datastore and of each table|
<!-- END REF -->

#### Description

The `.encryptionStatus()` function <!-- REF #DataStoreClass.encryptionStatus().Summary -->returns an object providing the encryption status for the current data file<!-- END REF --> (i.e., the data file of the `ds` datastore). The status for each table is also provided.

>Use the `Data file encryption status` command to determine the encryption status of any other data file.

**Returned value**

The returned object contains the following properties:

|Property | | |Type |Description|
|---|---|---|---|---|
|isEncrypted|||Boolean|True if the data file is encrypted|
|keyProvided|||Boolean|True if the encryption key matching the encrypted data file is provided(*).|
|tables| ||Object| Object containing as many properties as there are encryptable or encrypted tables.|
||*tableName*||  Object| Encryptable or Encrypted table|
|||name |Text| Name of the table|
|||num| Number |Table number|
|||isEncryptable|Boolean|True if the table is declared encryptable in the structure file|
|||isEncrypted| Boolean| True if the records of the table are encrypted in the data file|

(*) The encryption key can be provided:

* with the `.provideDataKey()` command,
* at the root of a connected device before opening the datastore,
* with the `Discover data key` command.

#### Example

You want to know the number of encrypted tables in the current data file:

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

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20|Added|

</details>

<!-- REF #DataStoreClass.flushAndLock().Syntax -->**.flushAndLock()**<!-- END REF -->


<!-- REF #DataStoreClass.flushAndLock().Params -->
|Parameter|Type||Description|
|---|---|---|---|
||||Does not require any parameters|
<!-- END REF -->


#### Description

The `.flushAndLock()` function <!-- REF #DataStoreClass.flushAndLock().Summary -->flushes the cache of the local datastore and prevents other processes from performing write operations on the database<!-- END REF -->. The datastore is set to a consistent, frozen state. Calling this function is necessary before executing an application snapshot, for example.

:::info

This function can only be called:

- on the local datastore ([`ds`](../commands/ds.md)).
- in client/server environment, on the server machine.

:::

Once this function is executed, write operations such as `.save()` or other `.flushAndLock()` calls are frozen in all other processes until the datastore is unlocked.

When multiple calls to `.flushAndLock()` have been done in the same process, the same number of [`.unlock()`](#unlock) calls must be executed to actually unlock the datastore.

The datastore is unlocked when:

- the [`.unlock()`](#unlock) function is called in the same process, or
- the process that called the `.flushAndLock()` function is killed.


If the datastore is already locked from another process, the `.flushAndLock()` call is frozen and will be executed when the datastore will be unlocked.

An error is triggered if the `.flushAndLock()` function cannot be executed (e.g. it is run on a remote 4D), .


:::caution

Other 4D features and services including [backup](../Backup/backup.md), [vss](https://doc.4d.com/4Dv20/4D/20/Using-Volume-Shadow-Copy-Service-on-Windows.300-6330532.en.html), and [MSC](../MSC/overview.md) can also lock the datastore. Before calling `.flushAndLock()`, make sure no other locking action is being used, in order to avoid any unexpected interaction.

:::

#### Example

You want to create a copy of the data folder along with its current journal file:

```4d
$destination:=Folder(fk documents folder).folder("Archive")
$destination.create()

ds.flushAndLock() //Block write operations from other processes

$dataFolder:=Folder(fk data folder)
$dataFolder.copyTo($destination) //Copy the data folder

$oldJournalPath:=New log file //Close the journal and create a new one
$oldJournal:=File($oldJournalPath; fk platform path)
$oldJournal.moveTo($destination) //Save the old journal with data

ds.unlock() //Our copy is over, we can now unlock the datastore
```

#### See also

[.locked()](#locked)<br/>[.unlock()](#unlock)


<!-- REF DataClassClass.getAllRemoteContexts().Desc -->
## .getAllRemoteContexts()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R5|Added|

</details>

<!-- REF #DataStoreClass.getAllRemoteContexts().Syntax -->**.getAllRemoteContexts()** : Collection<!-- END REF -->


<!-- REF #DataStoreClass.getAllRemoteContexts().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|Collection|<-|Collection of optimization context objects|
<!-- END REF -->

> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. In most cases, you will not need to use it.

#### Description

The `.getAllRemoteContexts()` function <!-- REF #DataStoreClass.getAllRemoteContexts().Summary -->returns a collection of objects containing information on all the active optimization contexts in the datastore<!-- END REF -->.

> For more information on how contexts can be created, see [client/server optimization](../ORDA/client-server-optimization.md#optimization-context).

Each object in the returned collection has the properties listed in the [`.getRemoteContextInfo()`](#properties-of-the-returned-object) section.

#### Example


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

// Open remote datastore
$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

// Set context A
$contextA:=New object("context"; "contextA")
$persons:=$ds.Persons.all($contextA)
$text:=""
For each ($p; $persons)
    $text:=$p.firstname+" lives in "+$p.address.city+" / "
End for each

// Set context B
$contextB:=New object("context"; "contextB")
$addresses:=$ds.Address.all($contextB)
$text:=""
For each ($a; $addresses)
    $text:=$a.zipCode
End for each

// Get all remote contexts (in this case, contextA and contextB)
$info:=$ds.getAllRemoteContexts()
//$info = [{name:"contextB"; dataclass:"Address"; main:"zipCode"},
{name:"contextA";dataclass:"Persons";main:"firstname,address.city"}]
```

> This example serves as a demonstration, it is not meant for real implementation.

#### See also

[.getRemoteContextInfo()](#getremotecontextinfo)<br/>[.setRemoteContextInfo()](#setremotecontextinfo)<br/>[.clearAllRemoteContexts()](#clearallremotecontexts)


<!-- REF DataClassClass.getGlobalStamp().Desc -->
## .getGlobalStamp()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R3|Added|

</details>

<!-- REF #DataStoreClass.getGlobalStamp().Syntax -->**.getGlobalStamp**() : Real<!-- END REF -->


<!-- REF #DataStoreClass.getGlobalStamp().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|Real|<-|Current value of the global modification stamp|
<!-- END REF -->


#### Description

The `.getGlobalStamp()` function <!-- REF #DataStoreClass.getGlobalStamp().Summary -->returns the current value of the global modification stamp of the datastore<!-- END REF -->.

:::info

This function can only be called:

- on the local datastore ([`ds`](../commands/ds.md)).
- in client/server environment, on the server machine.

:::

For more information on global stamp and data change tracking, please refer to the [**Using the Global Stamp**](../ORDA/global-stamp.md) page.


#### Example

```4d
var $currentStamp : Real
var $hasModifications : Boolean

$currentStamp:=ds.getGlobalStamp()
methodWhichCouldModifyEmployees //call some code
$hasModifications:=($currentStamp # ds.getGlobalStamp())
```

#### See also

[.setGlobalStamp()](#setglobalstamp)

<!-- REF DataStoreClass.getInfo().Desc -->
## .getInfo()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17|Added|

</details>

<!-- REF #DataStoreClass.getInfo().Syntax -->**.getInfo()**: Object<!-- END REF -->


<!-- REF #DataStoreClass.getInfo().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Object|<-|Datastore properties|
<!-- END REF -->

#### Description

The `.getInfo()` function <!-- REF #DataStoreClass.getInfo().Summary -->returns an object providing information about the datastore<!-- END REF -->. This function is useful for setting up generic code.

**Returned object**

|Property |Type |Description|
|---|---|---|
|type| string |<li>"4D": main datastore, available through ds </li><li>"4D Server": remote datastore, open with Open datastore</li>|
|networked |boolean|<li>True: the datastore is reached through a network connection.</li><li>False: the datastore is not reached through a network connection (local database)</li>|
|localID| text| ID of the datastore on the machine. Corresponds to the localId string given with the `Open datastore` command. Empty string ("") for main datastore.|
|connection |object|Object describing the remote datastore connection (not returned for main datastore). Available properties:<table><tr><th>Property</th><th>Type</th><th>Description</th></tr><tr><td>hostname</td><td>text</td><td>IP address or name of the remote datastore + ":" + port number</td></tr><tr><td>tls</td><td>boolean</td><td>True if secured connection is used with the remote datastore</td></tr><tr><td>idleTimeout</td><td>number</td><td>Session inactivity timeout (in minutes)</td></tr><tr><td>user</td><td>text</td><td>User authenticated on the remote datastore</td></tr></table>|

* If the `.getInfo()` function is executed on a 4D Server or 4D single-user, `networked` is False.
* If the `.getInfo()` function is executed on a remote 4D, `networked` is True

#### Example 1  

```4d
 var $info : Object

 $info:=ds.getInfo() //Executed on 4D Server or 4D
  //{"type":"4D","networked":false,"localID":""}

 $info:=ds.getInfo() // Executed on 4D remote
  //{"type":"4D","networked":true,"localID":""}
```

#### Example 2  

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

<!-- REF #DataStoreClass.getRemoteContextInfo().Desc -->
## .getRemoteContextInfo()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R5|Added|

</details>

<!-- REF #DataStoreClass.getRemoteContextInfo().Syntax -->**.getRemoteContextInfo**(*contextName* : Text) : Object <!-- END REF -->


<!-- REF #DataStoreClass.getRemoteContextInfo().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|contextName|Text|->|Name of the context|
|Result|Object|<-|Description of the optimization context|
<!-- END REF -->

> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. In most cases, you will not need to use it.

#### Description

The `.getRemoteContextInfo()` function <!-- REF #DataStoreClass.getRemoteContextInfo().Summary --> returns an object that holds information on the *contextName* optimization context in the datastore.<!-- END REF -->.

For more information on how optimization contexts can be created, see [client/server optimization](../ORDA/client-server-optimization.md#optimization-context).

#### Returned object

The returned object has the following properties:

|Property|Type|Description|
|---|---|---|
|name|Text|Name of the context|
|main|Text|Attribute(s) associated to the context (attribute names are separated by a comma) |
|dataclass|Text|Dataclass name|
|currentItem (optional)|Text|The attributes of the [page mode](../ORDA/remoteDatastores.md#entity-selection-based-list-box) if the context is linked to a list box. Returned as `Null` or empty text element if the context name is not used for a list box, or if there is no context for the currentItem|

Since contexts behave as filters for attributes, if *main* is returned empty, it means that no filter is applied, and that the server returns all the dataclass attributes.

#### Example

See the example from the [.setRemoteContextInfo()](#example-1-3) section.

#### See also

[.setRemoteContextInfo()](#setremotecontextinfo)<br/>[.getAllRemoteContexts()](#getallremotecontexts)<br/>[.clearAllRemoteContexts()](#clearallremotecontexts)

<!-- REF DataStoreClass.getRequestLog().Desc -->
## .getRequestLog()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17 R6|Added|

</details>

<!-- REF #DataStoreClass.getRequestLog().Syntax -->**.getRequestLog()** : Collection<!-- END REF -->


<!-- REF #DataStoreClass.getRequestLog().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Collection|<-|Collection of objects, where each object describes a request|
<!-- END REF -->

#### Description

The `.getRequestLog()` function <!-- REF #DataStoreClass.getRequestLog().Summary -->returns the ORDA requests logged in memory on the client side<!-- END REF -->. The ORDA request logging must have previously been enabled using the [`.startRequestLog()`](#startrequestlog) function.

This function must be called on a remote 4D, otherwise it returns an empty collection. It is designed for debugging purposes in client/server configurations.

**Returned value**

Collection of stacked request objects. The most recent request has index 0.

For a description of the ORDA request log format, please refer to the [**ORDA client requests**](https://doc.4d.com/4Dv18/4D/18/Description-of-log-files.300-4575486.en.html#4385373) section.

#### Example

See Example 2 of [`.startRequestLog()`](#startrequestlog).

<!-- END REF -->

<!-- REF DataStoreClass.isAdminProtected().Desc -->
## .isAdminProtected()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R6|Added|

</details>

<!-- REF #DataStoreClass.isAdminProtected().Syntax -->**.isAdminProtected()** : Boolean<!-- END REF -->


<!-- REF #DataStoreClass.isAdminProtected().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Boolean|<-|True if the Data Explorer access is disabled, False if it is enabled (default)|
<!-- END REF -->

#### Description

The `.isAdminProtected()` function <!-- REF #DataStoreClass.isAdminProtected().Summary -->returns `True` if [Data Explorer](Admin/dataExplorer.md) access has been disabled for the working session<!-- END REF -->.

By default, the Data Explorer access is granted for `webAdmin` sessions, but it can be disabled to prevent any data access from administrators (see the [`.setAdminProtection()`](#setadminprotection) function).

#### See also

[`.setAdminProtection()`](#setadminprotection)

<!-- END REF -->


<!-- REF DataClassClass.locked().Desc -->
## .locked()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20|Added|

</details>

<!-- REF #DataStoreClass.locked().Syntax -->**.locked()** : Boolean<!-- END REF -->


<!-- REF #DataStoreClass.locked().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|Boolean|<-|True if locked|
<!-- END REF -->


#### Description

The `.locked()` function <!-- REF #DataStoreClass.locked().Summary -->returns True if the local datastore is currently locked<!-- END REF -->.

You can lock the datastore using the [.flushAndLock()](#flushandlock) function before executing a snapshot of the data file, for example.

:::caution

The function will also return `True` if the datastore was locked by another administration feature such as backup or vss (see [.flushAndLock()](#flushandlock)).  

:::


#### See also

[.flushAndLock()](#flushandlock)<br/>[.unlock()](#unlock)


<!-- REF DataStoreClass.makeSelectionsAlterable().Desc -->
## .makeSelectionsAlterable()


<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R5|Added|

</details>

<!-- REF #DataStoreClass.makeSelectionsAlterable().Syntax -->**.makeSelectionsAlterable()**<!-- END REF -->


<!-- REF #DataStoreClass.makeSelectionsAlterable().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|
<!-- END REF -->

#### Description

The `.makeSelectionsAlterable()` function <!-- REF #DataStoreClass.makeSelectionsAlterable().Summary -->sets all entity selections as alterable by default in the current application datastores<!-- END REF --> (including [remote datastores](ORDA/remoteDatastores.md)). It is intended to be used once, for example in the `On Startup` database method.

When this function is not called, new entity selections can be shareable, depending on the nature of their "parent", or [how they are created](ORDA/entities.md#shareable-or-non-shareable-entity-selections).

> This function does not modify entity selections created by [`.copy()`](#copy) or `OB Copy` when the explicit `ck shared` option is used.

> **Compatibility**: This function must only be used in projects converted from 4D versions prior to 4D v18 R5 and containing [.add()](EntitySelectionClass.md#add) calls. In this context, using `.makeSelectionsAlterable()` can save time by restoring instantaneously the previous 4D behavior in existing projects.
On the other hand, using this method in new projects created in 4D v18 R5 and higher **is not recommended**, since it prevents entity selections to be shared, which provides greater performance and scalabitlity.

<!-- END REF -->

<!-- REF DataStoreClass.provideDataKey().Desc -->
## .provideDataKey()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17 R5|Added|

</details>

<!-- REF #DataStoreClass.provideDataKey().Syntax -->**.provideDataKey**( *curPassPhrase* : Text ) : Object <br/>**.provideDataKey**( *curDataKey* : Object ) : Object <!-- END REF -->


<!-- REF #DataStoreClass.provideDataKey().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|curPassPhrase |Text|->|Current encryption passphrase|
|curDataKey |Object|->|Current data encryption key|
|Result|Object|<-|Result of the encryption key matching|
<!-- END REF -->

#### Description

The `.provideDataKey()` function <!-- REF #DataStoreClass.provideDataKey().Summary -->allows providing a data encryption key for the current data file of the datastore and detects if the key matches the encrypted data<!-- END REF -->. This function can be used when opening an encrypted database, or when executing any encryption operation that requires the encryption key, such as re-encrypting the data file.

>* The `.provideDataKey()` function must be called in an encrypted database. If it is called in a non-encrypted database, the error 2003 (the encryption key does not match the data.) is returned. Use the `Data file encryption status` command to determine if the database is encrypted.
>* The `.provideDataKey()` function cannot be called from a remote 4D or an encrypted remote datastore.

If you use the *curPassPhrase* parameter, pass the string used to generate the data encryption key. When you use this parameter, an encryption key is generated.

If you use the *curDataKey* parameter, pass an object (with *encodedKey* property) that contains the data encryption key. This key may have been generated with the `New data key` command.

If a valid data encryption key is provided, it is added to the *keyChain* in memory and the encryption mode is enabled:

* all data modifications in encryptable tables are encrypted on disk (.4DD, .journal. 4Dindx files)
* all data loaded from encryptable tables is decrypted in memory

**Result**

The result of the command is described in the returned object:

|Property|  |Type| Description|
|---|---|---|---|
|success| | Boolean| True if the provided encryption key matches the encrypted data, False otherwise|
||||Properties below are returned only if success is *FALSE*|
|status | |Number| Error code (4 if the provided encryption key is wrong)|
|statusText| | Text| Error message|
|errors | |Collection| Stack of errors. The first error has the highest index|
||\[ ].componentSignature| Text| Internal component name|
||\[ ].errCode |Number |Error number|
||\[ ].message |Text| Error message|

If no *curPassphrase* or *curDataKey* is given, `.provideDataKey()` returns **null** (no error is generated).

#### Example  

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



<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R6|Added|

</details>

<!-- REF #DataStoreClass.setAdminProtection().Syntax -->**.setAdminProtection**( *status* : Boolean )<!-- END REF -->


<!-- REF #DataStoreClass.setAdminProtection().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|status|Boolean|->|True to disable Data Explorer access to data on the `webAdmin` port, False (default) to grant access|
<!-- END REF -->

#### Description

The `.setAdminProtection()` function <!-- REF #DataStoreClass.setAdminProtection().Summary -->allows disabling any data access on the [web admin port](Admin/webAdmin.md#http-port), including for the [Data Explorer](Admin/dataExplorer.md) in `WebAdmin` sessions<!-- END REF -->.

By default when the function is not called, access to data is always granted on the web administration port for a session with `WebAdmin` privilege using the Data Explorer. In some configurations, for example when the application server is hosted on a third-party machine, you might not want the administrator to be able to view your data, although they can edit the server configuration, including the [access key](Admin/webAdmin.md#access-key) settings.

In this case, you can call this function to disable the data access from Data Explorer on the web admin port of the machine, even if the user session has the `WebAdmin` privilege. When this function is executed, the data file is immediately protected and the status is stored on disk: the data file will be protected even if the application is restarted.

#### Example

You create a *protectDataFile* project method to call before deployments for example:

```4d
 ds.setAdminProtection(True) //Disables the Data Explorer data access
```

#### See also

[`.isAdminProtected()`](#isadminprotected)

<!-- END REF -->


<!-- REF DataClassClass.setGlobalStamp().Desc -->
## .setGlobalStamp()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R3|Added|

</details>

<!-- REF #DataStoreClass.setGlobalStamp().Syntax -->**.setGlobalStamp**( *newStamp* : Real)<!-- END REF -->


<!-- REF #DataStoreClass.setGlobalStamp().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|newStamp|Real|->|New value of global modification stamp|
<!-- END REF -->


:::info Advanced mode

This function is intended for developers who need to modify the current global stamp value. It should be used with care.  

:::

#### Description

The `.setGlobalStamp()` function <!-- REF #DataStoreClass.setGlobalStamp().Summary -->sets *newStamp* as new value for the current global modification stamp for the datastore<!-- END REF -->.

:::info

This function can only be called:

- on the local datastore ([`ds`](../commands/ds.md)).
- in client/server environment, on the server machine.

:::

For more information on global stamp and data change tracking, please refer to the [**Using the Global Stamp**](../ORDA/global-stamp.md) page.


#### Example

The following code sets the modification global stamp:

```4d
var $newValue: Real
$newValue:=ReadValueFrom //get a new value to assign
ds.setGlobalStamp($newValue)
```

#### See also

[.getGlobalStamp()](#getglobalstamp)

<!-- REF #DataStoreClass.setRemoteContextInfo().Desc -->
## .setRemoteContextInfo()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R5|Added|

</details>

<!-- REF #DataStoreClass.setRemoteContextInfo().Syntax -->**.setRemoteContextInfo**( *contextName* : Text ; *dataClassName* : Text ; *attributes* : Text {; *contextType* : Text { ; *pageLength* : Integer}})<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassName* : Text; *attributesColl* : Collection {; *contextType* : Text { ; *pageLength* : Integer }} )<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassObject* : 4D.DataClass ; *attributes* : Text {; *contextType* : Text { ; *pageLength* : Integer }})<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassObject* : 4D.DataClass ; *attributesColl* : Collection {; *contextType* : Text { ; *pageLength* : Integer }} )<!-- END REF -->


<!-- REF #DataStoreClass.setRemoteContextInfo().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|contextName|Text|->|Name of the context|
|dataClassName|Text|->|Name of the dataclass|
|dataClassObject|4D.DataClass|->|dataclass object (e.g datastore.Employee)|
|attributes|Text|->|Attribute list separated by a comma|
|attributesColl|Collection|->|Collection of attribute names (text)|
|contextType|Text|->|If provided, value must be "main" or "currentItem"|
|pageLength|Integer|->|Page length of the entity selection linked to the context (default is 80)|
<!-- END REF -->

> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. In most cases, you will not need to use it.

#### Description

The `.setRemoteContextInfo()` function <!-- REF #DataStoreClass.setRemoteContextInfo().Summary -->links the specified dataclass attributes to the *contextName* optimization context<!-- END REF -->. If an optimization context already exists for the specified attributes, this command replaces it.

When you pass a context to the ORDA class functions, the REST request optimization is triggered immediately:

* the first entity is not fully loaded as done in automatic mode
* pages of 80 entities (or `pageLength` entities) are immediately asked to the server with only the attributes in the context

> For more information on how optimization contexts are built, refer to the [client/server optimization paragraph](../ORDA/client-server-optimization.md#optimization-context)

In *contextName*, pass the name of the optimization context to link to the dataclass attributes.

To designate the dataclass that will receive the context, you can pass a *dataClassName* or a *dataClassObject*.

To designate the attributes to link to the context, pass either a list of attributes separated by a comma in *attributes* (Text), or a collection of attribute names in *attributesColl* (collection of text).

If *attributes* is an empty Text, or *attributesColl* is an empty collection, all the scalar attributes of the dataclass are put in the optimization context. If you pass an attribute that does not exist in the dataclass, the function ignores it and an error is thrown.

You can pass a *contextType* to  specify if the context is a standard context or the context of the current entity selection item displayed in a list box:

* If set to "main" (default), the *contextName* designates a standard context.
* If set to "currentItem", the attributes passed are put in the context of the current item.  See  [Entity selection-based list box](../ORDA/remoteDatastores.md#entity-selection-based-list-box).

In *pageLength*, specify the number of dataclass entities to request from the server.

You can pass a *pageLength* for a relation attribute which is an entity selection (one to many). The syntax is `relationAttributeName:pageLength` (e.g employees:20).

#### Example 1

```4d
var $ds : 4D.DataStoreImplementation
var $persons : cs.PersonsSelection
var $p : cs.PersonsEntity
var $contextA : Object
var $info : Object
var $text : Text

// Open remote datastore
$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

// Set context info
$contextA:=New object("context"; "contextA")
$ds.setRemoteContextInfo("contextA"; $ds.Persons; "firstname, lastname")

// Send requests to the server using a loop
$persons:=$ds.Persons.all($contextA)
$text:=""
For each ($p; $persons)
    $text:=$p.firstname + " " + $p.lastname
End for each

// Check contents of the context
$info:=$ds.getRemoteContextInfo("contextA")
// $info = {name:"contextA";dataclass:"Persons";main:"firstname, lastname"}
```

> This example serves as a demonstration, it is not meant for real implementation.

#### Example 2

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
// When the form loads
Case of
    : (Form event code=On Load)

        Form.ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

       // Set the attributes of the page context
        Form.ds.setRemoteContextInfo("LB"; Form.ds.Persons; "age, gender,\
        children"; "currentItem")

        Form.settings:=New object("context"; "LB")
        Form.persons:=Form.ds.Persons.all(Form.settings)
        // Form.persons is displayed in a list box
End case

// When you get the attributes in the context of the current item:
Form.currentItemLearntAttributes:=Form.selectedPerson.getRemoteContextAttributes()
// Form.currentItemLearntAttributes = "age, gender, children"
```

#### See also

[.getRemoteContextInfo()](#getremotecontextinfo)<br/>[.getAllRemoteContexts()](#getallremotecontexts)<br/>[.clearAllRemoteContexts()](#clearallremotecontexts)


<!-- REF DataStoreClass.startRequestLog().Desc -->
## .startRequestLog()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20|Server side support, new `options` parameter|
|17 R6|Added|

</details>

<!-- REF #DataStoreClass.startRequestLog().Syntax -->**.startRequestLog**()<br/>**.startRequestLog**( *file* : 4D.File )<br/>**.startRequestLog**( *file* : 4D.File ; *options* : Integer )<br/>**.startRequestLog**( *reqNum* : Integer )<!-- END REF -->


<!-- REF #DataStoreClass.startRequestLog().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|file |4D.File|->|File object |
|options |Integer|->|Log response option (server only)|
|reqNum |Integer|->|Number of requests to keep in memory (client only)|
<!-- END REF -->

#### Description

The `.startRequestLog()` function <!-- REF #DataStoreClass.startRequestLog().Summary -->starts the logging of ORDA requests on the client side or on the server side<!-- END REF -->. It is designed for debugging purposes in client/server configurations.

:::info

For a description of the ORDA request log format, please refer to the [**ORDA requests**](../Debugging/debugLogFiles.md#orda-requests) section.

:::

#### Client-side

To create a client-side ORDA request log, call this function on a remote machine. The log can be sent to a file or to memory, depending on the parameter type:

* If you passed a *file* object created with the `File` command, the log data is written in this file as a collection of objects (JSON format). Each object represents a request.<br/>If the file does not already exist, it is created. Otherwise if the file already exists, the new log data is appended to it.
If `.startRequestLog()` is called with a file while a logging was previously started in memory, the memory log is stopped and emptied.

 >A \] character must be manually appended at the end of the file to perform a JSON validation

* If you passed a *reqNum* integer, the log in memory is emptied (if any) and a new log is initialized. It will keep *reqNum* requests in memory until the number is reached, in which case the oldest entries are emptied (FIFO stack).<br/>If `.startRequestLog()` is called with a *reqNum* while a logging was previously started in a file, the file logging is stopped.

* If you did not pass any parameter, the log is started in memory. If `.startRequestLog()` was previously called with a *reqNum* (before a `.stopRequestLog()`), the log data is stacked in memory until the next time the log is emptied or `.stopRequestLog()` is called.

#### Server-side

To create a server-side ORDA request log, call this function on the server machine. The log data is written in a file in `.jsonl` format. Each object represents a request. If the file does not already exist, it is created. Otherwise if the file already exists, the new log data is appended to it.

- If you passed the *file* parameter, the log data is written in this file, at the requested location. - If you omit the *file* parameter or if it is null, the log data is written in a file named *ordaRequests.jsonl* and stored in the "/LOGS" folder.
- The *options* parameter can be used to specify if the server response has to be logged, and if it should include the body. By default when the parameter is omitted, the full response is logged. The following constants can be used in this parameter:

|Constant|Description|
|----|----|
|srl log all|Log the response entirely (default value)|
|srl log no response|Disable the logging of the response|
|srl log response without body|Log the response without the body|


#### Example 1

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

#### Example 2

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

#### Example 3

You want to log ORDA server requests in a specific file and enable the log sequence number and duration:

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

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18|Added|

</details>

<!-- REF #DataStoreClass.startTransaction().Syntax -->**.startTransaction()**<!-- END REF -->


<!-- REF #DataStoreClass.startTransaction().Params -->
|Parameter|Type||Description|
|---|---|:---:|---|
||||Does not require any parameters|
<!-- END REF -->


#### Description

The `.startTransaction()` function <!-- REF #DataStoreClass.startTransaction().Summary -->starts a transaction in the current process on the database matching the datastore to which it applies<!-- END REF -->. Any changes made to the datastore's entities in the transaction's process are temporarily stored until the transaction is either validated or cancelled.

>If this method is called on the main datastore (i.e. the datastore returned by the `ds` command), the transaction is applied to all operations performed on the main datastore and on the underlying database, thus including ORDA and classic languages.

You can nest several transactions (sub-transactions). Each transaction or sub-transaction must eventually be cancelled or validated. Note that if the main transaction is cancelled, all of its sub-transactions are also cancelled even if they were validated individually using the `.validateTransaction()` function.

#### Example

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

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20|Server side support|
|17 R6|Added|

</details>

<!-- REF #DataStoreClass.stopRequestLog().Syntax -->**.stopRequestLog()**  <!-- END REF -->


<!-- REF #DataStoreClass.stopRequestLog().Params -->
|Parameter|Type||Description|
|---|---|---|---|
||||Does not require any parameters|
<!-- END REF -->

#### Description

The `.stopRequestLog()` function <!-- REF #DataStoreClass.stopRequestLog().Summary -->stops any logging of ORDA requests on the machine it is called (client or server)<!-- END REF -->.

It actually closes the opened document on disk. On the client side, if the log was started in memory, it is stopped.

This function does nothing if logging of ORDA requests was not started on the machine.

#### Example

See examples for [`.startRequestLog()`](#startrequestlog).

<!-- END REF -->


<!-- REF DataClassClass.unlock().Desc -->
## .unlock()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20|Added|

</details>

<!-- REF #DataStoreClass.unlock().Syntax -->**.unlock()**<!-- END REF -->


<!-- REF #DataStoreClass.unlock().Params -->
|Parameter|Type||Description|
|---|---|---|---|
||||Does not require any parameters|
<!-- END REF -->


#### Description

The `.unlock()` function <!-- REF #DataStoreClass.unlock().Summary -->removes the current lock on write operations in the datastore, if it has been set in the same process<!-- END REF -->. Write operations can be locked in the local datastore using the [`.flushAndLock()`](#flushandlock) function.

If the current lock was the only lock on the datastore, write operations are immediately enabled. If the `.flushAndLock()` function was called several times in the process, the same number of `.unlock()` must be called to actually unlock the datastore.

The `.unlock()` function must be called from the process that called the corresponding `.flushAndLock()`, otherwise the function does nothing and the lock is not removed.

If the `.unlock()` function is called in an unlocked datastore, it does nothing.


#### See also

[.flushAndLock()](#flushandlock)<br/>[.locked()](#locked)


<!-- REF DataStoreClass.validateTransaction().Desc -->
## .validateTransaction()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18|Added|

</details>

<!-- REF #DataStoreClass.validateTransaction().Syntax -->**.validateTransaction()**  <!-- END REF -->


<!-- REF #DataStoreClass.validateTransaction().Params -->
|Parameter|Type||Description|
|---|---|---|---|
||||Does not require any parameters|
<!-- END REF -->

#### Description

The `.validateTransaction()` function <!-- REF #DataStoreClass.validateTransaction().Summary -->accepts the transaction <!-- END REF -->that was started with [`.startTransaction()`](#starttransaction) at the corresponding level on the specified datastore.

The function saves the changes to the data on the datastore that occurred during the transaction.

You can nest several transactions (sub-transactions). If the main transaction is cancelled, all of its sub-transactions are also cancelled, even if they were validated individually using this function.

#### Example

See example for [`.startTransaction()`](#starttransaction).


<!-- END REF -->
