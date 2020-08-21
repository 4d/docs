---
id: datastoreClass
title: DataStore
---

A datastore is the interface object provided by ORDA to reference and access a database. A datastore is made of a model and data:

*	The model contains and describes all the dataclasses that make up the datastore. It is independant from the underlying database itself.
*	Data refers to the information that is going to be used and stored in this model. For example, names, addresses, and birthdates of employees are pieces of data that you can work with in a datastore.


## DataStore Object

The `DataStore` object itself cannot be copied as an object:

```4d
 $mydatastore:=OB Copy(ds) //returns null
```

The datastore properties are however enumerable:

```4d
 ARRAY TEXT($prop;0)
 OB GET PROPERTY NAMES(ds;$prop)
  //$prop contains the names of all the dataclasses
```

`DataStore` objects are handled with the following commands:

*	[ds](#ds)
*	[Open datastore](#open-datastore)

## Summary

||
|---|
|[<!-- INCLUDE #datastoreClass.cancelTransaction().Syntax -->](#canceltransaction-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #datastoreClass.cancelTransaction().Summary -->|
|[<!-- INCLUDE datastoreClass.{dataclassName}.Syntax -->](#dataclassname)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE datastoreClass.{dataclassName}.Summary --> |
|[<!-- INCLUDE #datastoreClass.encryptionStatus().Syntax -->](#encryptionstatus-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #datastoreClass.encryptionStatus().Summary --> |
|[<!-- INCLUDE #datastoreClass.getInfo().Syntax -->](#getinfo-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #datastoreClass.getInfo().Summary --> |
|[<!-- INCLUDE #datastoreClass.getRequestLog().Syntax -->](#getrequestlog-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #datastoreClass.getRequestLog().Summary --> |
|[<!-- INCLUDE #datastoreClass.provideDataKey().Syntax -->](#providedatakey-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #datastoreClass.provideDataKey().Summary --> |
|[<!-- INCLUDE #datastoreClass.startRequestLog().Syntax -->](#startrequestlog-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #datastoreClass.startRequestLog().Summary --> |
|[<!-- INCLUDE #datastoreClass.startTransaction().Syntax -->](#starttransaction-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #datastoreClass.startTransaction().Summary --> |
|[<!-- INCLUDE #datastoreClass.stopRequestLog().Syntax -->](#stoprequestlog-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #datastoreClass.stopRequestLog().Summary --> |
|[<!-- INCLUDE #datastoreClass.validateTransaction().Syntax -->](#validatetransaction-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #datastoreClass.validateTransaction().Summary --> |




---

<!-- REF datastoreClass.ds.Desc -->
## ds

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18|Modified|
|v17|Added|
</details>

<!-- REF #datastoreClass.ds.Syntax -->
**ds** { ( *localID* ) } : DataStore <!-- END REF -->

<!-- REF #datastoreClass.ds.Params -->
|Parameter|Type||Description|
|---|---|---|---|
|localID|text|->|Local ID of the remote datastore to return|
|Result |DataStore|<-|Reference to the datastore|
<!-- END REF -->


#### Description
The `ds` command <!-- REF #datastoreClass.ds.Summary -->returns a reference to the datastore matching the current 4D database or the database designated by localID<!-- END REF -->. 

If you omit the *localID* parameter (or pass an empty string ""), the command returns a reference to the datastore matching the local 4D database (or the 4D Server database in case of opening a remote database on 4D Server). The datastore is opened automatically and available directly through `.ds`. 

You can also get a reference on an open remote datastore by passing its local id in the localID parameter. The datastore must have been previously opened with the `Open datastore` command by the current database (host or component). The local id is defined when using this command. 

>The scope of the local id is the database where the datastore has been opened. 

If no *localID* datastore is found, the command returns **Null**.

Using `ds` requires that the target database is compliant with ORDA, as specified in the **ORDA prerequisites** section. The following rules are applied:

*	A datastore only references tables with a single primary key. Tables without a primary key or with composite primary keys are not referenced.
*	BLOB type attributes are not managed in the datastore.

For more information about datastore implementation, please refer to the **Datastores** section.


#### Example 1

Using the main datastore on the 4D database:

```4d
 $result:=ds.Employee.query("firstName = :1";"S@")
```

#### Example 2 
 
```4d 
 C_OBJECT($connectTo;$frenchStudents;$foreignStudents;$firstFrench;$firstForeign)
 
 $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")
 $frenchStudents:=Open datastore($connectTo;"french")
 
 $connectTo.hostname:="192.168.18.11:8050"
 $foreignStudents:=Open datastore($connectTo;"foreign")
  //...
  //...
 $firstFrench:=getFirst("french";"Students")
 $firstForeign:=getFirst("foreign";"Students")
  //getFirst method
  //getFirst(localID;dataclass) -> entity
  // ---------------------
 C_TEXT($dataClassName;$2;$localId;$1)
 C_OBJECT($0)
 
 $localId:=$1
 $dataClassName:=$2
 $0:=ds($localId)[$dataClassName].all().first()
```

<!-- END REF -->

---

<!-- REF datastoreClass.Open datastore.Desc -->
## Open datastore

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18|Added|
</details>

<!-- REF #datastoreClass.Open datastore.Syntax -->
**Open datastore**( *connectionInfo* ; *localID* ) : object <!-- END REF -->

<!-- REF #datastoreClass.Open datastore.Params -->
|Parameter|Type||Description|
|---|---|---|---|
|connectionInfo|object|->|Connection properties used to reach the remote datastore|	
|localID |text|->|Id to assign to the opened datastore on the local application (mandatory)|
|Result |object|<-|Datastore object|
<!-- END REF -->


#### Description
The `Open datastore` command <!-- REF #datastoreClass.Open datastore.Summary -->connects the application to the 4D database identified by the *connectionInfo* parameter<!-- END REF --> and returns a matching `DataStore` object associated with the *localID* local alias.

The *connectionInfo* 4D database must be available as a remote datastore, i.e.:

*	its web server must be launched with http and/or https enabled,
*	its **Expose as REST server** option must be checked (see **Web/REST Resource**),
*	at least one client license is available.

If no matching database is found, `Open datastore` returns **Null**.

*localID* is a local alias for the session opened on remote datastore. If *localID* already exists on the application, it is used. Otherwise, a new *localID* session is created when the datastore object is used. 

Once the session is opened, the following statements become equivalent and return a reference on the same datastore object:

```4d
 $myds:=Open datastore(connectionInfo;"myLocalId")
 $myds2:=ds("myLocalId")
  //$myds and $myds2 are equivalent
```

Pass in *connectionInfo* an object describing the remote datastore you want to connect to. It can contain the following properties (all properties are optional except *hostname*):

|Property|	Type|	Description|
|---|---|---|
|hostname|Text|Name or IP address of the remote database + ":" + port number (port number is mandatory)|
|user|Text|User name
|password|Text|User password
|idleTimeout|Longint|Inactivity session timeout (in minutes), after which the session is automatically closed by 4D. If omitted, default value is 60 (1h). The value cannot be < 60 (if a lower value is passed, the timeout is set to 60). For more information, see **Closing sessions**.|
|tls|Boolean|Use secured connection(*). If omitted, false by default. Using a secured connection is recommended whenever possible.|
|type	|Text	|Must be "4D Server"|

(*) If tls is true, the HTTPS protocol is used if:

*	HTTPS is enabled on the remote datastore
*	the given port is the right HTTPS port configured in the database settings
*	a valid certificate and private encryption key are installed in the database (see **TLS installation and activation within 4D**).<p>Otherwise, error "1610 - A remote request to host xxx has failed" is raised

#### Example 1  

Connection to a remote datastore without user / password:

```4d
 C_OBJECT($connectTo;$remoteDS)
 $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")
 $remoteDS:=Open datastore($connectTo;"students")
 ALERT("This remote datastore contains "+String($remoteDS.Students.all().length)+" students")
```

#### Example 2 
 
Connection to a remote datastore with user / password / timeout / tls:

```4d
 C_OBJECT($connectTo;$remoteDS)
 $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:4443";"user";"marie";"password";$pwd;"idleTimeout";70;"tls";True)
 $remoteDS:=Open datastore($connectTo;"students")
 ALERT("This remote datastore contains "+String($remoteDS.Students.all().length)+" students")
```

#### Example 3  

Working with several remote datastores:

```4d
 C_OBJECT($connectTo;$frenchStudents;$foreignStudents)
 $connectTo:=New object("hostname";"192.168.18.11:8044")
 $frenchStudents:=Open datastore($connectTo;"french")
 $connectTo.hostname:="192.168.18.11:8050"
 $foreignStudents:=Open datastore($connectTo;"foreign")
 ALERT("They are "+String($frenchStudents.Students.all().length)+" French students")
 ALERT("They are "+String($foreignStudents.Students.all().length)+" foreign students")
```

#### Error management  

In case of error, the command returns **Null**. If the remote datastore cannot be reached (wrong address, web server not started, http and https not enabled...), error 1610 "A remote request to host XXX has failed" is raised. You can intercept this error with a method installed by `ON ERR CALL`. 

<!-- END REF -->

---

<!-- REF datastoreClass.{dataclassName}.Desc -->
## .{dataclassName}

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|
</details>

<!-- REF datastoreClass.{dataclassName}.Syntax -->
**.{dataclassName}** -> DataClass<!-- END REF -->


#### Description

Each dataclass in the datastore is available as a property of the ds object. The returned object <!-- REF datastoreClass.{dataclassName}.Summary -->contains a description of the dataclass<!-- END REF -->.

Dataclass objects benefit from specific methods listed in the **ORDA - DataClass** theme.


#### Example

```4d
 C_OBJECT($emp;$sel)
 $emp:=ds.Employee //$emp contains the Employee dataclass
 $sel:=$emp.all() //gets an entity selection of all employees
 
  //you could also write directly:
 $sel:=ds.Employee.all()
```


<!-- END REF -->


---

<!-- REF datastoreClass.cancelTransaction().Desc -->
## .cancelTransaction( ) 

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18|Added|
</details>


<!-- REF #datastoreClass.cancelTransaction().Syntax -->
**.cancelTransaction( )**<!-- END REF -->

<!-- REF #datastoreClass.cancelTransaction().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|
<!-- END REF -->


#### Description
The `.cancelTransaction( )` function <!-- REF #datastoreClass.cancelTransaction().Summary -->cancels the transaction<!-- END REF --> opened by the `.startTransaction( )` function at the corresponding level in the current process for the specified datastore.

The `.cancelTransaction( )` function cancels any changes made to the data during the transaction.

You can nest several transactions (sub-transactions). If the main transaction is cancelled, all of its sub-transactions are also cancelled, even if they were validated individually using the `.validateTransaction( )` function. 


#### Example 

See example for the `.startTransaction( )` function.


<!-- END REF -->

---

<!-- REF datastoreClass.encryptionStatus().Desc -->
## .encryptionStatus( ) 

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Modified|
|v17|Added|
</details>

<!-- REF #datastoreClass.encryptionStatus().Syntax -->
**.encryptionStatus( )**: object<!-- END REF -->


<!-- REF #datastoreClass.encryptionStatus().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|<-|Information about the encryption of the current datastore and of each table|
<!-- END REF -->


#### Description
The `.encryptionStatus()` function <!-- REF #datastoreClass.encryptionStatus().Summary -->returns an object providing the encryption status for the current data file<!-- END REF --> (i.e., the data file of the `ds` datastore). The status for each table is also provided.

>Use the `Data file encryption status` command to determine the encryption status of any other data file.
 

**Returned value**

The returned object contains the following properties:

|Property	|	|	|Type	|Description|
|---|---|---|---|---|
|isEncrypted|||Boolean|True if the data file is encrypted|
|keyProvided|||Boolean|True if the encryption key matching the encrypted data file is provided(*).|
|tables| ||Object|	Object containing as many properties as there are encryptable or encrypted tables.|
||\<table name>||		Object|	Encryptable or Encrypted table|
|||name	|Text|	Name of the table|
|||num|	Number	|Table number|
|||isEncryptable|Boolean|True if the table is declared encryptable in the structure file|
|||isEncrypted|	Boolean|	True if the records of the table are encrypted in the data file|

(*) The encryption key can be provided:

*	with the `.provideDataKey( )` command,
*	on a connected device before opening the datastore,
*	with the `Discover data key` command.

#### Example 

You want to know the number of encrypted tables in the current data file:

```4d
 C_OBJECT($status)
 
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

---

<!-- REF datastoreClass.getInfo().Desc -->
## .getInfo( )   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|

</details>

<!-- REF #datastoreClass.getInfo().Syntax -->
**.getInfo( )**: object<!-- END REF -->

<!-- REF #datastoreClass.getInfo().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|<-|Datastore properties|
<!-- END REF -->

#### Description

The `.getInfo()` function <!-- REF #datastoreClass.getInfo().Summary -->returns an object providing information about the datastore<!-- END REF -->. This function is useful for setting up generic code.

**Returned object**

|Property	|Type	|Description|
|---|---|---|
|type|	string	|<ul><li>"4D": main datastore, available through ds </li><li>"4D Server": remote datastore, open with Open datastore</li></ul>|
|networked	|boolean|<ul><li>True: the datastore is reached through a network connection.</li><li>False: the datastore is not reached through a network connection (local database)</li></ul>|
|localId|	text|	ID of the datastore on the machine. Corresponds to the localId string given with the `Open datastore` command. Empty string ("") for main datastore.|
|connection	|object|Object describing the remote datastore connection (not returned for main datastore). Available properties:<p><table><tr><th>Property</th><th>Type</th><th>Description</th></tr><tr><td>hostname</td><td>text</td><td>IP address or name of the remote datastore + ":" + port number</td></tr><tr><td>tls</td><td>boolean</td><td>True if secured connection is used with the remote datastore</td></tr><tr><td>idleTimeout</td><td>number</td><td>Session inactivity timeout (in minutes)</td></tr><tr><td>user</td><td>text</td><td>User authenticated on the remote datastore</td></tr></table>|

*	If the `.getInfo( )` function is executed on a 4D Server or 4D single-user, networked is False. 
*	If the `.getInfo( )` function is executed on a remote 4D, networked is True


#### Example 1  

```4d
C_OBJECT($info)
 
 $info:=ds.getInfo() //Executed on 4D Server or 4D
  //{"type":"4D","networked":false,"localID":""}
 
 $info:=ds.getInfo() // Executed on 4D remote
  //{"type":"4D","networked":true,"localID":""}
```

#### Example 2  

On a remote datastore:

```4d
 C_OBJECT($info;$connectTo;$remoteDS)
 
 $connectTo:=New object("hostname";"111.222.33.44:8044";"user";"marie";"password";"aaaa")
 $remoteDS:=Open datastore($connectTo;"students")
 $info:=$remoteDS.getInfo()
 
  //{"type":"4D Server",
  //"localID":"students",
  //"networked":true,
  //"connection":{hostname:"111.222.33.44:8044","tls":false,"idleTimeout":2880,"user":"marie"}}
``` 
 

<!-- END REF -->

---

<!-- REF datastoreClass.getRequestLog().Desc -->
## .getRequestLog( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R6|Added|
</details>

<!-- REF #datastoreClass.getRequestLog().Syntax -->
**.getRequestLog( )** : collection<!-- END REF -->

<!-- REF #datastoreClass.getRequestLog().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|collection|<-|Collection of objects, where each object describes a request|
<!-- END REF -->


#### Description
The `.getRequestLog( )` function <!-- REF #datastoreClass.getRequestLog().Summary -->returns the ORDA requests logged in memory on the client side<!-- END REF -->. The ORDA request logging must have previously been enabled using the `.startRequestLog( )` function. 

This function must be called on a remote 4D, otherwise it returns an empty collection. It is designed for debugging purposes in client/server configurations.

**Returned value**

Collection of stacked request objects. The most recent request has index 0. 

For a description of the ORDA request log format, please refer to the **ORDA client requests** section.


#### Example

See Example 2 of [`.startRequestLog( )`](#startrequestlog-).

<!-- END REF -->

---

<!-- REF datastoreClass.provideDataKey().Desc -->
## .provideDataKey( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
</details>

<!-- REF #datastoreClass.provideDataKey().Syntax -->
**.provideDataKey**( *curPassPhrase* &#124; *curDataKey*) : object <!-- END REF -->

<!-- REF #datastoreClass.provideDataKey().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|curPassPhrase &#124; curDataKey |Text, Object|->|Current passphrase (text) or current data encryption key (object)|
|Result|boolean|<-|Result of the encryption key matching|
<!-- END REF -->


#### Description
The `.provideDataKey( )` function <!-- REF #datastoreClass.provideDataKey().Summary -->allows providing a data encryption key for the current data file of the datastore<!-- END REF --> and detects if the key matches the encrypted data. This command can be used when opening an encrypted database, or when executing any encryption operation that requires the encryption key, such as re-encrypting the data file.

>*	The `.provideDataKey( )` function must be called in an encrypted database. If it is called in a non-encrypted database, the error 2003 (the encryption key does not match the data.) is returned. Use the `Data file encryption status` command to determine if the database is encrypted.
>*	The `.provideDataKey( )` function cannot be called from a remote 4D.

In the parameter, pass the *curPassPhrase* or *curDataKey* that matches the database:

*	*curPassPhrase*: String used to generate the data encryption key. When you use this parameter, an encryption key is generated.
*	*curDataKey*: Object (with *encodedKey* property) that contains the data encryption key. This key may have been generated with the `New data key` command.

If a valid data encryption key is provided, it is added to the *keyChain* in memory and the encryption mode is enabled:

*	all data modifications in encryptable tables are encrypted on disk (.4DD, .journal. 4Dindx files)
*	all data loaded from encryptable tables is decrypted in memory
 

**Result**

The result of the command is described in the returned object:

|Property|		|Type|	Description|
|---|---|---|---|
|success|	|	Boolean|	True if the provided encryption key matches the encrypted data, False otherwise|
||||Properties below are returned only if success is *FALSE*|
|status	|	|Number|	Error code (4 if the provided encryption key is wrong)|
|statusText|	|	Text|	Error message|
|errors	|	|Collection|	Stack of errors. The first error has the highest index|
||\[ ].componentSignature|	Text|	Internal component name|
||\[ ].errCode	|Number	|Error number|
||\[ ].message	|Text|	Error message|

If no *curPassphrase* or *curDataKey* is given, `.provideDataKey( )` returns **null** (no error is generated).



#### Example  

```4d 
 C_OBJECT($keyStatus)
 C_TEXT($passphrase)
 
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

---

<!-- REF datastoreClass.startRequestLog().Desc -->
## .startRequestLog( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R6|Added|
</details>

<!-- REF #datastoreClass.startRequestLog().Syntax -->
**.startRequestLog**( { *file*  &#124; *reqNum* } ) : object &#124; longint <!-- END REF -->

<!-- REF #datastoreClass.startRequestLog().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|file &#124; reqNum |object, longint|->|File object or<br>Number of requests to keep in memory|
<!-- END REF -->


#### Description
The `.startRequestLog( )` function <!-- REF #datastoreClass.startRequestLog().Summary -->starts the logging of ORDA requests on the client side<!-- END REF -->. 

This function must be called on a remote 4D, otherwise it does nothing. It is designed for debugging purposes in client/server configurations.

The ORDA request log can be sent to a file or to memory, depending on the parameter passed to the method: 

*	If you passed a *file* object created with the `File` command, the log data is written in this file as a collection of objects (JSON format). Each object represents a request.<p>If the file does not already exist, it is created. Otherwise if the file already exists, the new log data is appended to it.
If `.startRequestLog( )` is called with a file while a logging was previously started in memory, the memory log is stopped and emptied.
	>A \] character must be manually appended at the end of the file to perform a JSON validation

*	If you passed a number in the *reqNum* (longint) parameter, the log in memory is emptied (if any) and a new log is initialized. It will keep reqNum requests in memory until the number is reached, in which case the oldest entries are emptied (FIFO stack).<p>If `.startRequestLog( )` is called with a *reqNum* while a logging was previously started in a file, the file logging is stopped.

*	If you did not pass any parameter, the log is started in memory. If `.startRequestLog( )` was previously called with a *reqNum* (before a `.stopRequestLog( )`), the log data is stacked in memory until the next time the log is emptied or `.stopRequestLog()` is called.

For a description of the ORDA request log format, please refer to the **ORDA client requests** section.

#### Example 1

You want to log ORDA client requests in a file and use the log sequence number:

```4d 
 C_OBJECT($e;$file)
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
C_OBJECT($es)
 C_COLLECTION($log)
 
 ds.startRequestLog(3) //keep 3 requests in memory
 
 $es:=ds.Persons.query("name=:1";"Marie")
 $es:=ds.Persons.query("name IN :1";New collection("Marie"))
 $es:=ds.Persons.query("name=:1";"So@")
 
 $log:=ds.getRequestLog()
 ALERT("The longest request lasted: "+String($log.max("duration"))+" ms")
```
 
<!-- END REF -->


---

<!-- REF datastoreClass.startTransaction().Desc -->
## .startTransaction( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18|Added|
</details>

<!-- REF #datastoreClass.startTransaction().Syntax -->
**.startTransaction( )**<!-- END REF -->

<!-- REF #datastoreClass.startTransaction().Params -->
|Parameter|Type||Description|
|---|---|---|---|
||||Does not require any parameters|
<!-- END REF -->


#### Description
The `.startTransaction( )` function <!-- REF #datastoreClass.startTransaction().Summary -->starts a transaction in the current process on the database matching the datastore to which it applies<!-- END REF -->. Any changes made to the datastore's entities in the transaction's process are temporarily stored until the transaction is either validated or cancelled. 

>If this method is called on the main datastore (i.e. the datastore returned by the `ds` command), the transaction is applied to all operations performed on the main datastore and on the underlying database, thus including ORDA and classic languages. 

You can nest several transactions (sub-transactions). Each transaction or sub-transaction must eventually be cancelled or validated. Note that if the main transaction is cancelled, all of its sub-transactions are also cancelled even if they were validated individually using the `.validateTransaction( )` function.


#### Example


```4d 
C_OBJECT($connect;$ds;$person;$status)
 C_TEXT($choice)
 C_BOOLEAN($error)
 
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

---

<!-- REF datastoreClass.stopRequestLog().Desc -->
## .stopRequestLog( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R6|Added|
</details>

<!-- REF #datastoreClass.stopRequestLog().Syntax -->
**.stopRequestLog( )**  <!-- END REF -->

<!-- REF #datastoreClass.stopRequestLog().Params -->
|Parameter|Type||Description|
|---|---|---|---|
||||Does not require any parameters|
<!-- END REF -->


#### Description
The `.stopRequestLog( )` function <!-- REF #datastoreClass.stopRequestLog().Summary -->stops any logging of ORDA requests on the client side<!-- END REF --> (in file or in memory). It is particularly useful when logging in a file, since it actually closes the opened document on disk. 

This function must be called on a remote 4D, otherwise it does nothing. It is designed for debugging purposes in client/server configurations.


#### Example

See examples for [`.startRequestLog( )`](#startrequestlog-).

<!-- END REF -->


---

<!-- REF datastoreClass.validateTransaction().Desc -->
## .validateTransaction( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18|Added|
</details>

<!-- REF #datastoreClass.validateTransaction().Syntax -->
**.validateTransaction( )**  <!-- END REF -->

<!-- REF #datastoreClass.validateTransaction().Params -->
|Parameter|Type||Description|
|---|---|---|---|
||||Does not require any parameters|
<!-- END REF -->


#### Description
The `.validateTransaction( )` function <!-- REF #datastoreClass.validateTransaction().Summary -->accepts the transaction <!-- END REF -->that was started with `.startTransaction( )` at the corresponding level on the specified datastore. 

The method saves the changes to the data on the datastore that occurred during the transaction.

You can nest several transactions (sub-transactions). If the main transaction is cancelled, all of its sub-transactions are also cancelled, even if they were validated individually using this method.


#### Example

See examples for [`.startRequestLog( )`](#startrequestlog-).

<!-- END REF -->

