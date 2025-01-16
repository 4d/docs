---
id: SessionClass
title: Session
---


Session objects are returned by the [`Session`](../commands/session.md) command. These objects provide the developer with an interface allowing to manage the current user session and execute actions such as store contextual data, share information between session processes, launch session-related preemptive processes, or (web only) manage [privileges](../ORDA/privileges.md).

### Session types

The following types of sessions are supported by this class:

- [**Web user sessions**](WebServer/sessions.md): Web user sessions are available when [scalable sessions are enabled in your project](WebServer/sessions.md#enabling-sessions). They are used for Web and REST connections, and can be assigned privileges.
- [**Remote client user sessions**](../Desktop/clientServer.md#remote-user-sessions): In client/server applications, remote users have their own sessions managed on the server.
- [**Stored procedures session**](https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html): All stored procedures executed on the server share the same virtual user session.
- [**Standalone session**](../Project/overview.md#development): Local session object returned in single-user application (useful in development and test phases of client/server applications). 


:::note

The availability of properties and functions in the `Session` object depends on the session type.

:::


### Summary


||
|---|
|[<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)<br/><!-- INCLUDE #SessionClass.clearPrivileges().Summary -->|
|[<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)<br/><!-- INCLUDE #SessionClass.expirationDate.Summary -->|
|[<!-- INCLUDE #SessionClass.getPrivileges().Syntax -->](#getprivileges)<br/><!-- INCLUDE #SessionClass.getPrivileges().Summary -->|
|[<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)<br/><!-- INCLUDE #SessionClass.hasPrivilege().Summary -->|
|[<!-- INCLUDE #SessionClass.id.Syntax -->](#id)<br/><!-- INCLUDE #SessionClass.id.Summary -->|
|[<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)<br/><!-- INCLUDE #SessionClass.idleTimeout.Summary -->|
|[<!-- INCLUDE #SessionClass.info.Syntax -->](#info)<br/><!-- INCLUDE #SessionClass.info.Summary -->|
|[<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)<br/><!-- INCLUDE #SessionClass.isGuest().Summary -->|
|[<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)<br/><!-- INCLUDE #SessionClass.setPrivileges().Summary -->|
|[<!-- INCLUDE #SessionClass.storage.Syntax -->](#storage)<br/><!-- INCLUDE #SessionClass.storage.Summary -->|
|[<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)<br/><!-- INCLUDE #SessionClass.userName.Summary -->|





<!-- REF SessionClass.clearPrivileges().Desc -->
## .clearPrivileges()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R6|Added|

</details>

<!-- REF #SessionClass.clearPrivileges().Syntax -->**.clearPrivileges()** : Boolean<!-- END REF -->


<!-- REF #SessionClass.clearPrivileges().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Boolean|<-|True if the execution is successful|
<!-- END REF -->


#### Description

:::note

This function does nothing and always returns **True** with remote client, stored procedure, and standalone sessions.

:::

The `.clearPrivileges()` function <!-- REF #SessionClass.clearPrivileges().Summary -->removes all the privileges associated to the session and returns **True** if the execution was successful<!-- END REF -->. As a result, the session automatically becomes a Guest session.


#### Example

```4d
//Invalidate a web user session
var $isGuest : Boolean
var $isOK : Boolean

$isOK:=Session.clearPrivileges()
$isGuest:=Session.isGuest() //$isGuest is True
```

<!-- END REF -->



<!-- REF SessionClass.expirationDate.Desc -->
## .expirationDate

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R6|Added|

</details>

<!-- REF #SessionClass.expirationDate.Syntax -->**.expirationDate** : Text<!-- END REF -->

#### Description

:::note

This property is only available with web user sessions.

:::

The `.expirationDate` property contains <!-- REF #SessionClass.expirationDate.Summary -->the expiration date and time of the session cookie<!-- END REF -->. The value is expressed as text in the ISO 8601 format: `YYYY-MM-DDTHH:MM:SS.mmmZ`.

This property is **read-only**. It is automatically recomputed if the [`.idleTimeout`](#idletimeout) property value is modified.

#### Example

```4d
var $expiration : Text
$expiration:=Session.expirationDate //eg "2021-11-05T17:10:42Z"
```

<!-- END REF -->


<!-- REF SessionClass.getPrivileges().Desc -->
## .getPrivileges()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R6|Added|

</details>

<!-- REF #SessionClass.getPrivileges().Syntax -->**.getPrivileges**() : Collection<!-- END REF -->


<!-- REF #SessionClass.getPrivileges().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Collection|<-|Collection of privilege names (strings)|
<!-- END REF -->

#### Description

The `.getPrivileges()` function <!-- REF #SessionClass.getPrivileges().Summary -->returns a collection of all the privilege names associated to the session<!-- END REF -->.

With remote client, stored procedure and standalone sessions, this function returns a collection only containing "WebAdmin".


:::info

Privileges are assigned to a Session using the [`setPrivileges()`](#setprivileges) function.

:::


#### Example

The following [`roles.json`](../ORDA/privileges.md#rolesjson-file) has been defined:

```json
{
   "privileges":[
      {
         "privilege":"simple",
         "includes":[

         ]
      },
      {
         "privilege":"medium",
         "includes":[
            "simple"
         ]
      }
   ],
   "roles":[
      {
         "role":"Medium",
         "privileges":[
            "medium"
         ]
      }
   ],
   "permissions":{
      "allowed":[

      ]
   }
}
```


The session role is assigned in an `authentify()` datastore function:

```4d
  //Datastore Class

exposed Function authentify($role : Text) : Text
	Session.clearPrivileges()
	Session.setPrivileges({roles: $role})
```

Assuming the `authentify()` function is called with the "Medium" role:

```4d
var $privileges : Collection
$privileges := Session.getPrivileges()
//$privileges: ["simple","medium"]
```


#### See also

[.setPrivileges()](#setprivileges)<br/>
[Permissions – Inspect the privileges in the session for an easy debugging (blog post)](https://blog.4d.com/permissions-inspect-the-privileges-in-the-session-for-an-easy-debugging)

<!-- END REF -->





<!-- REF SessionClass.hasPrivilege().Desc -->
## .hasPrivilege()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R6|Added|

</details>

<!-- REF #SessionClass.hasPrivilege().Syntax -->**.hasPrivilege**( *privilege* : Text ) : Boolean<!-- END REF -->


<!-- REF #SessionClass.hasPrivilege().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|privilege|Text|->|Name of the privilege to verify|
|Result|Boolean|<-|True if session has *privilege*, False otherwise|
<!-- END REF -->


#### Description


The `.hasPrivilege()` function <!-- REF #SessionClass.hasPrivilege().Summary -->returns True if the *privilege* is associated to the session, and False otherwise<!-- END REF -->.

With remote client, stored procedure and standalone sessions, this function always returns True, whatever the *privilege*.


#### Example

You want to check if the "WebAdmin" privilege is associated to the web user session:

```4d
If (Session.hasPrivilege("WebAdmin"))
	//Access is granted, do nothing
Else
	//Display an authentication page

End if
```

<!-- END REF -->


<!-- REF SessionClass.id.Desc -->
## .id

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R5|Added|

</details>

<!-- REF #SessionClass.id.Syntax -->**.id** : Text<!-- END REF -->

#### Description

The `.id` property contains <!-- REF #SessionClass.id.Summary -->the unique identifier (UUID) of the user session<!-- END REF -->. With 4D Server, this unique string is automatically assigned by the server for each session and allows you to identify its processes.


:::tip

You can use this property to get the [`.storage`](#storage) object of a session thanks to the [`Session storage`](../commands/session-storage.md) command.  

:::


<!-- END REF -->



<!-- REF SessionClass.idleTimeout.Desc -->
## .idleTimeout

<details><summary>History</summary>

|Release|Changes|
|---|---|

|18 R6|Added|

</details>

<!-- REF #SessionClass.idleTimeout.Syntax -->**.idleTimeout** : Integer<!-- END REF -->

#### Description

:::note

This property is only available with web user sessions.

:::

The `.idleTimeout` property contains <!-- REF #SessionClass.idleTimeout.Summary -->the inactivity session timeout (in minutes), after which the session is automatically closed by 4D<!-- END REF -->.

If this property is not set, the default value is 60 (1h).

When this property is set, the [`.expirationDate`](#expirationdate) property is updated accordingly.

> The value cannot be less than 60: if a lower value is set, the timeout is raised up to 60.


This property is **read write**.

#### Example

```4d
If (Session.isGuest())
		// A Guest session will close after 60 minutes of inactivity
	Session.idleTimeout:=60
Else
		// Other sessions will close after 120 minutes of inactivity
	Session.idleTimeout:=120
End if

```

<!-- END REF -->


<!-- REF SessionClass.info.Desc -->
## .info

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R5|Added|

</details>

<!-- REF #SessionClass.info.Syntax -->**.info** : Object<!-- END REF -->

#### Description

:::note

This property is only available with remote client, stored procedure, and standalone sessions.

:::

The `.info` property <!-- REF #SessionClass.info.Summary -->describes the remote client or stored procedure session on the server, or the standalone session<!-- END REF -->.

:::note

- The `.info` object is the same object as the one returned in the "session" property by the [`Process activity`](../commands/process-activity.md) command for remote client and stored procedure sessions.
- The `.info` object is the same object as the one returned by the [`Session info`](../commands/session-info.md) command for a standalone session.


:::

The `.info` object contains the following properties:

|Property|Type|Description|
|---|---|---|
|type|Text|Session type: "remote", "storedProcedure", "standalone"|
|userName|Text|4D user name (same value as [`.userName`](#username))|
|machineName|Text|Remote sessions: name of the remote machine. Stored procedures session: name of the server machine. Standalone session: name of the machine|
|systemUserName|Text|Remote sessions: name of the system session opened on the remote machine.  |
|IPAddress|Text|IP address of the remote machine|
|hostType|Text|Host type: "windows" or "mac"|
|creationDateTime|Date ISO 8601|Date and time of session creation. Standalone session: date and time of application startup|
|state|Text|Session state: "active", "postponed", "sleeping"|
|ID|Text|Session UUID (same value as [`.id`](#id))|
|persistentID|Text|Remote sessions: Session's persistent ID|

:::note

Since `.info` is a computed property, it is recommended to call it once and then to store it in a local variable if you want to do some processing on its properties.

:::


<!-- END REF -->


<!-- REF SessionClass.isGuest().Desc -->
## .isGuest()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R6|Added|

</details>

<!-- REF #SessionClass.isGuest().Syntax -->**.isGuest()** : Boolean<!-- END REF -->


<!-- REF #SessionClass.isGuest().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Boolean|<-|True if session is a Guest one, False otherwise|
<!-- END REF -->

#### Description

:::note

This function always returns **False** with remote client, stored procedure, and standalone sessions.

:::

The `.isGuest()` function <!-- REF #SessionClass.isGuest().Summary -->returns True if the session is a Guest session (i.e. it has no privileges)<!-- END REF -->.


#### Example

In the `On Web Connection` database method:

```4d
If (Session.isGuest())
	//Do something for Guest user
End if
```


<!-- END REF -->


<!-- REF SessionClass.setPrivileges().Desc -->
## .setPrivileges()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R8|Support of "roles" Settings property|
|18 R6|Added|

</details>

<!-- REF #SessionClass.setPrivileges().Syntax -->**.setPrivileges**( *privilege* : Text ) : Boolean<br/>**.setPrivileges**( *privileges* : Collection )<br/>**.setPrivileges**( *settings* : Object ) : Boolean<!-- END REF -->


<!-- REF #SessionClass.setPrivileges().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|privilege|Text|->|Privilege name|
|privileges|Collection|->|Collection of privilege names|
|settings|Object|->|Object with a "privileges" property (string or collection)|
|Result|Boolean|<-|True if the execution is successful|
<!-- END REF -->

#### Description

:::note

This function does nothing and always returns **False** with remote client, stored procedure, and standalone sessions.

:::

The `.setPrivileges()` function <!-- REF #SessionClass.setPrivileges().Summary -->associates the privilege(s) and/or role(s) defined in the parameter to the session and returns **True** if the execution was successful<!-- END REF -->.

- In the *privilege* parameter, pass a string containing a privilege name (or several comma-separated privilege names).

- In the *privileges* parameter, pass a collection of strings containing privilege names.

- In the *settings* parameter, pass an object containing the following properties:

|Property|Type|Description|
|---|---|---|
|privileges|Text or Collection|<li>String containing a privilege name, or</li><li>Collection of strings containing privilege names</li>|
|roles|Text or Collection|<li>String containing a role, or</li><li>Collection of strings containing roles</li>|
|userName|Text|User name to associate to the session (optional)|

:::note

Privileges and roles are defined in [`roles.json`](../ORDA/privileges.md#rolesjson-file) file of the project. For more information, please refer to the [**Privileges**](../ORDA/privileges.md) section.

:::

If the `privileges` or `roles` property contains a name that is not declared in the [`roles.json`](../ORDA/privileges.md#rolesjson-file) file, it is ignored.

By default when no privilege or role is associated to the session, the session is a [Guest session](#isguest).

The [`userName`](#username) property is available at session object level (read-only).

#### Example

In a custom authentication method, you set the "WebAdmin" privilege to the user:

```4d
var $userOK : Boolean

... //Authenticate the user

If ($userOK) //The user has been approved
  var $info : Object
  $info:=New object()
  $info.privileges:=New collection("WebAdmin")
  Session.setPrivileges($info)
End if

```

#### See also

[.getPrivileges()](#getprivileges)

<!-- END REF -->

<!-- REF SessionClass.storage.Desc -->
## .storage

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R5|Support of remote client and stored procedure sessions|
|18 R6|Added|

</details>

<!-- REF #SessionClass.storage.Syntax -->**.storage** : Object<!-- END REF -->

#### Description

The `.storage` property contains <!-- REF #SessionClass.storage.Summary -->a shared object that can be used to store information available to all processes of the session<!-- END REF -->.

When a `Session` object is created, the `.storage` property is empty. Since it is a shared object, this property will be available in the `Storage` object of the server.

> Like the `Storage` object of the server, the `.storage` property is always "single": adding a shared object or a shared collection to `.storage` does not create a shared group.

This property is **read only** itself but it returns a read-write object.

:::tip

You can get the `.storage` property of a session using the [`Session storage`](../commands/session-storage.md) command.  

:::


#### Web session example

You want to store the client IP in the `.storage` property. You can write in the `On Web Authentication` database method:


```4d
If (Session.storage.clientIP=Null) //first access
    Use (Session.storage)
        Session.storage.clientIP:=New shared object("value"; $clientIP)
    End use
End if
```

#### Remote session example

You want to share data between processes in the same session:


```4d
Use (Session.storage)
 Session.storage.settings:=New shared object("property"; $value; "property2"; $value2)
End use
```


<!-- END REF -->





<!-- REF SessionClass.userName.Desc -->
## .userName

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R5|Support of remote client and stored procedure sessions|
|18 R6|Added|

</details>

<!-- REF #SessionClass.userName.Syntax -->**.userName** : Text<!-- END REF -->

#### Description

The `.userName` property contains <!-- REF #SessionClass.userName.Summary -->the user name associated to the session<!-- END REF -->. You can use it to identify the user within your code.

- With web sessions, this property is an empty string by default. It can be set using the `privileges` property of the [`setPrivileges()`](#setprivileges) function.
- With remote and stored procedure sessions, this property returns the same user name as the [`Current user`](../commands-legacy/current-user.md) command.
- With standalone sessions, this property contains "designer" or the name set with the [`SET USER ALIAS`](../commands-legacy/set-user-alias.md) command. 

This property is **read only**.



<!-- END REF -->
