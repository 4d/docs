---
id: open-datastore
title: Open datastore
displayed_sidebar: docs
---

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R6|Support access to Qodly instances|
|20 R4|New *passwordAlgorithm* property|
|18|Added|

</details>


<!--REF #_command_.Open datastore.Syntax-->**Open datastore**( *connectionInfo* : Object ; *localID* : Text ) : cs.DataStore<!-- END REF-->

<!--REF #_command_.Open datastore.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| connectionInfo | Object | &#8594;  | Connection properties used to reach the remote datastore |
| localID | Text | &#8594;  | Id to assign to the opened datastore on the local application (mandatory) |
| Function result | cs.DataStore | &#8592; | Datastore object |

<!-- END REF-->

#### Description

The `Open datastore` command <!-- REF #_command_.Open datastore.Summary -->connects the application to the remote datastore identified by the *connectionInfo* parameter<!-- END REF --> and returns a matching `cs.DataStore` object associated with the *localID* local alias.

The following remote datastores are supported by the command:

|datastore kind|Description|
|---|---|
|Remote 4D application|A 4D application available as a remote datastore, i.e.:<li>its web server is launched with http and/or https enabled,</li><li>its datastore is exposed to REST ([**Expose as REST server**](REST/configuration.md#starting-the-rest-server) option checked).</li>A license can be required (see note)|
|[Qodly application](https://developer.qodly.com/docs/cloud/getStarted)|A Qodly Server application that provided you with an **api endpoint** and a valid **api key** associated with a defined role. You must pass the api key in the `api-key` property of the *connectionInfo* object. You can then work with the returned datastore object, with all privileges granted to the associated role.|

:::note

`Open datastore` requests rely on the 4D REST API and can require a 4D Client license to open the connection on a remote 4D Server. Refer to the [user login mode section](../REST/authUsers.md#user-login-modes) to know how to configure the authentication depending on the selected current user login mode.

:::


Pass in *connectionInfo* an object describing the remote datastore you want to connect to. It can contain the following properties (all properties are optional except *hostname*):

|Property| Type|Remote 4D application |Qodly application|
|---|---|---|---|
|hostname|Text|Name or IP address of the remote database + ":" + port number (port number is mandatory)|API Endpoint of the Qodly cloud instance|
|user|Text|User name|- (ignored)|
|password|Text|User password|- (ignored)|
|idleTimeout|Integer|Inactivity session timeout (in minutes), after which the session is automatically closed by 4D. If omitted, default value is 60 (1h). The value cannot be < 60 (if a lower value is passed, the timeout is set to 60). For more information, see **Closing sessions**.|- (ignored)|
|tls|Boolean|True to use secured connection(1). If omitted, false by default. Using a secured connection is recommended whenever possible.|True to use secured connection. If omitted, false by default|
|type |Text |must be "4D Server"|- (ignored)|
|api-key|Text|- (ignored)|Api key of the Qodly cloud instance|

(1) If `tls` is true, the HTTPS protocol is used if:

* HTTPS is enabled on the remote datastore
* the given port is the right HTTPS port configured in the database settings
* a valid certificate and private encryption key are installed in the 4D application. Otherwise, error "1610 - A remote request to host xxx has failed" is raised


*localID* is a local alias for the session opened on remote datastore. If *localID* already exists on the application, it is used. Otherwise, a new *localID* session is created when the datastore object is used.

Once the session is opened, the following statements become equivalent and return a reference on the same datastore object:

```4d
 $myds:=Open datastore(connectionInfo;"myLocalId")
 $myds2:=ds("myLocalId")
  //$myds and $myds2 are equivalent
```

Objects available in the `cs.Datastore` are mapped with respect to the [ORDA general rules](ORDA/dsMapping.md#general-rules).


If no matching datastore is found, `Open datastore` returns **Null**.


#### Example 1  

Connection to a remote datastore without user / password:

```4d
 var $connectTo : Object
 var $remoteDS : cs.DataStore
 $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")
 $remoteDS:=Open datastore($connectTo;"students")
 ALERT("This remote datastore contains "+String($remoteDS.Students.all().length)+" students")
```

#### Example 2

Connection to a remote datastore with user / password / timeout / tls:

```4d
 var $connectTo : Object
 var $remoteDS : cs.DataStore
 $connectTo:=New object("type";"4D Server";"hostname";\"192.168.18.11:4443";\  
  "user";"marie";"password";$pwd;"idleTimeout";70;"tls";True)
 $remoteDS:=Open datastore($connectTo;"students")
 ALERT("This remote datastore contains "+String($remoteDS.Students.all().length)+" students")
```

#### Example 3  

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

#### Example 4

Connection to a Qodly application:

```4d
var $connectTo : Object:={hostname: "https://xxx-x54xxx-xx-xxxxx-8xx5-xxxxxx.xx-api.cloud.com"; tls: True}

var $remoteDS : 4D.DataStoreImplementation
var $data : 4D.EntitySelection

$connectTo["api-key"]:="fxxxx-xxxx-4xxx-txxx-xxxxxxxx0" //only for example purpose  
  //it is recommended to store the API key in a secured place (e.g. a file)
  //and to load it in the code

$remoteDS:=Open datastore($connectTo; "remoteId")
$data:=$remoteDS.item.all()

ALERT(String($data.length)+" items have been read")

```



#### Error management  

In case of error, the command returns **Null**. If the remote datastore cannot be reached (wrong address, web server not started, http and https not enabled...), error 1610 "A remote request to host XXX has failed" is raised. You can intercept this error with a method installed by `ON ERR CALL`.


#### See also 

[ds](ds.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1452 |
| Thread safe | &check; |
| Modifies variables | error |


