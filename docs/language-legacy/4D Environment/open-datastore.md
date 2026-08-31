---
id: open-datastore
title: Open datastore
slug: /commands/open-datastore
displayed_sidebar: docs
---

<!--REF #_command_.Open datastore.Syntax-->**Open datastore**( *connectionInfo* : Object ; *localID* : Text ) : 4D.DataStoreImplementation<!-- END REF-->

<!--REF #_command_.Open datastore.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| connectionInfo | Object | &#8594;  | Connection properties used to reach the remote datastore |
| localID | Text | &#8594;  | Id to assign to the opened datastore on the local application (mandatory) |
| Function result | 4D.DataStoreImplementation | &#8592; | Datastore object |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|21|Qodly cloud discontinued|
|20 R6|Support access to Qodly cloud instances|
|20 R4|New *passwordAlgorithm* property|
|18|Added|

</details>
</div>


## Description

The `Open datastore` command <!-- REF #_command_.Open datastore.Summary -->connects the application to the remote datastore identified by the *connectionInfo* parameter<!-- END REF --> and returns a matching `4D.DataStoreImplementation` object associated with the *localID* local alias.

Exchanges with the remote datastore are automatically managed via REST requests. The *connectionInfo* 4D datastore must be available as a remote datastore, i.e.:

- its Web Server must be launched with http and/or https enabled,
- its datastore is exposed to REST ([**Expose as REST server**](REST/configuration.md#starting-the-rest-server) option checked),
- a client license must be available if required (see note).

:::note

`Open datastore` requests rely on the 4D REST API and can require a 4D Client license to open the connection on a remote 4D Server. Refer to the [Force login mode](../../REST/authUsers.md#force-login-mode) to know how to configure the authentication.

:::


Pass in *connectionInfo* an object describing the remote datastore you want to connect to. It can contain the following properties (all properties are optional except *hostname*):

|Property| Type|Remote 4D application |
|---|---|---|
|hostname|Text|Name or IP address of the remote database + ":" + port number (port number is mandatory)|
|idleTimeout|Integer|Inactivity session timeout (in minutes), after which the session is automatically closed by 4D. If omitted, default value is 60 (1h). The value cannot be < 60 (if a lower value is passed, the timeout is set to 60). For more information, see [**Closing sessions**](../../ORDA/remoteDatastores.md#closing-sessions).|
|tls|Boolean|True to use secured connection(1). If omitted, false by default. Using a secured connection is recommended whenever possible.|
|type |Text |must be "4D Server"|
|user|Text|(*deprecated*)(2) User name|
|password|Text|(*deprecated*)(2) User password|


(1) If `tls` is true, the HTTPS protocol is used if:

* HTTPS is enabled on the remote datastore
* the given port is the right HTTPS port configured in the database settings
* a valid certificate and private encryption key are installed in the 4D application. Otherwise, error "1610 - A remote request to host xxx has failed" is raised

(2) These properties are ignored when the "Force login mode" is enabled, in which case credentials must passed as parameters to the [`authentify()` function](../../REST/authUsers.md#function-authentify) (the legacy login mode is deprecated as of 4D 20 R6, see [**Force login mode**](../../REST/authUsers.md#force-login-mode)).  

*localID* is a local alias for the session opened on remote datastore. If *localID* already exists on the application, it is used. Otherwise, a new *localID* session is created when the datastore object is used.

Once the session is opened, the following statements become equivalent and return a reference on the same datastore object:

```4d
 $myds:=Open datastore(connectionInfo;"myLocalId")
  //authentication
 $myds2:=ds("myLocalId")
  //$myds and $myds2 are equivalent
```

:::note

If you run `$myds:=Open datastore(connectionInfo;"myLocalId")` multiple times, the *$myds* datastore object is not reloaded into memory; instead, the one loaded during the first execution is retained. No connection request is sent.

:::

Objects available in the `4D.DataStoreImplementation` are mapped with respect to the [ORDA general rules](ORDA/dsMapping.md#general-rules).


If no matching datastore is found, `Open datastore` returns **Null**.


## Example

On the remote datastore, in [force login mode](../../REST/authUsers.md#force-login-mode), you write the following `authentify()` function:

```4d
  //in the Datastore class
exposed Function authentify($credentials : Object) : Boolean
  var $user : cs.UsersEntity
  var $result:=False
  
  If ($credentials#Null)
    $user:=ds.Users.query("identifier === :1"; $credentials.identifier).first()
      If (($user#Null) && (Verify password hash($credentials.password; $user.password)))
        Session.clearPrivileges()  // Start from a clean situation in the session
        Session.setPrivileges("")  // Add here in the session the real privileges for the corresponding the user
                  
        $result:=True
      End if 
    End if 
    return $result

```

In a 4D project, you can write:


```4d

var $remoteDS : 4D.DataStoreImplementation
var $connectTo:={type: "4D Server"; hostname: "192.168.7.47:8044"; idleTimeout : 70; tls : True}
var $authentified : Boolean
var $people : 4D.EntitySelection

$remoteDS:=Open datastore($connectTo;"thePeople")
Try
  $people:=$remoteDS.Users.all() // Error "You need to be logged in to perform this request"
Catch
  ASSERT(Last errors().first().message="You need to be logged in to perform this request.")
End try

$authentified:=$remoteDS.authentify({identifier: "Mary"; password: "a"})  // Authentication successful

If ($authentified)
  ALERT("There are "+String($remoteDS.Users.all().length)+" users.")
Else 
  ALERT("Wrong credentials")
End if 

```



## Error management  

In case of error, the command returns **Null**. If the remote datastore cannot be reached (wrong address, web server not started, http and https not enabled...), error 1610 "A remote request to host XXX has failed" is raised. You can intercept this error within a [Try/Catch structure](../../Concepts/error-handling.md#trycatchend-try) or with a method installed by [`ON ERR CALL`](../../commands/on-err-call).


## See also 

[ds](../commands/ds)  

## Properties

|  |  |
| --- | --- |
| Command number | 1452 |
| Thread safe | yes |
| Modifies variables | error |


