---
id: SessionClass
title: Session
---

Session objects are returned by the [`Session`](#session) command when [scalable sessions are enabled in your project](WebServer/sessions.md#enabling-sessions). The Session object is automatically created and maintained by the 4D web server to control the session of a web client (e.g. a browser). This object provides the web developer with an interface to the user session, allowing to manage privileges, store contextual data, share information between processes, and launch session-related preemptive processes.

For detailed information about the session implementation, please refer to the [web server Sessions](WebServer/sessions.md) section.

### Summary

|                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.clearPrivileges().Summary -->|
| [<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.expirationDate.Summary -->|
| [<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.hasPrivilege().Summary -->|
| [<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.idleTimeout.Summary -->|
| [<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.isGuest().Summary -->|
| [<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.setPrivileges().Summary -->|
| [<!-- INCLUDE #SessionClass.storage.Syntax -->](#storage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.storage.Summary -->|
| [<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.userName.Summary -->|

## Session

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R6  | Added   |

</details>

<!-- REF #_command_.Session.Syntax -->

**Session** : 4D.Session<!-- END REF -->

<!-- REF #_command_.Session.Params -->
| Parameter | Typ        |    | Beschreibung                              |
| --------- | ---------- |:--:| ----------------------------------------- |
| Ergebnis  | 4D.Session | <- | Session object|<!-- END REF -->

|

#### Beschreibung

The `Session` command <!-- REF #_command_.Session.Summary -->returns the `Session` object corresponding to the current scalable user web session<!-- END REF -->.

This command only works when [scalable sessions are enabled](WebServer/sessions.md#enabling-sessions). It returns *Null* when sessions are disabled or when legacy sessions are used.

When scalable sessions are enabled, the `Session` object is available from any web processes in the following contexts:

- `On Web Authentication`, `On Web Connection`, and `On REST Authentication` database methods,
- ORDA [Data Model Class functions](ORDA/ordaClasses.md) called with REST requests,
- code processed through 4D tags in semi-dynamic pages (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)
- project methods with the "Available through 4D tags and URLs (4DACTION...)" attribute and called through 4DACTION/ urls.

#### Beispiel

You have defined the `action_Session` method with attribute "Available through 4D tags and URLs". You call the method by entering the following URL in your browser:

```
IP:port/4DACTION/action_Session
```

```4d
  //action_Session method
 Case of
    :(Session#Null)
       If(Session.hasPrivilege("WebAdmin")) //calling the hasPrivilege function
          WEB SEND TEXT("4DACTION --> Session is WebAdmin")
       Else
          WEB SEND TEXT("4DACTION --> Session is not WebAdmin")
       End if
    Else
       WEB SEND TEXT("4DACTION --> Sesion is null")
 End case
```

<!-- REF SessionClass.clearPrivileges().Desc -->
## .clearPrivileges()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R6  | Added   |

</details>

<!-- REF #SessionClass.clearPrivileges().Syntax -->

**.clearPrivileges()**<!-- END REF -->

<!-- REF #SessionClass.clearPrivileges().Params -->
| Parameter | Typ |  | Beschreibung                                               |
| --------- | --- |::| ---------------------------------------------------------- |
|           |     |  | Does not require any parameters|<!-- END REF -->

|

#### Beschreibung

The `.clearPrivileges()` function <!-- REF #SessionClass.clearPrivileges().Summary -->removes all the privileges associated to the session<!-- END REF -->. As a result, the session automatically becomes a Guest session.

#### Beispiel

```4d
//Invalidate a session
var $isGuest : Boolean  

Session.clearPrivileges()
$isGuest:=Session.isGuest() //$isGuest is True
```

<!-- END REF -->

<!-- REF SessionClass.expirationDate.Desc -->
## .expirationDate

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R6  | Added   |

</details>

<!-- REF #SessionClass.expirationDate.Syntax -->

**.expirationDate** : Text<!-- END REF -->

#### Beschreibung

The `.expirationDate` property contains <!-- REF #SessionClass.expirationDate.Summary -->the expiration date and time of the session cookie<!-- END REF -->. .

This property is **read-only**. It is automatically recomputed if the [`.idleTimeout`](#idletimeout) property value is modified.

#### Beispiel

```4d
var $expiration : Text
$expiration:=Session.expirationDate //eg "2021-11-05T17:10:42Z"
```

<!-- END REF -->

<!-- REF SessionClass.hasPrivilege().Desc -->
## .hasPrivilege()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R6  | Added   |

</details>

<!-- REF #SessionClass.hasPrivilege().Syntax -->

**.hasPrivilege**( *privilege* : Text ) : Boolean<!-- END REF -->

<!-- REF #SessionClass.hasPrivilege().Params -->
| Parameter | Typ     |    | Beschreibung                                                                |
| --------- | ------- |:--:| --------------------------------------------------------------------------- |
| privilege | Text    | <- | Name of the privilege to verify                                             |
| Ergebnis  | Boolean | <- | True if session has *privilege*, False otherwise|<!-- END REF -->

|

#### Beschreibung

The `.hasPrivilege()` function <!-- REF #SessionClass.hasPrivilege().Summary -->returns True if the privilege is associated to the session, and False otherwise<!-- END REF -->.

#### Beispiel

You want to check if the "WebAdmin" privilege is associated to the session:

```4d
If (Session.hasPrivilege("WebAdmin"))
 //Access is granted, do nothing
Else
 //Display an authentication page

End if
```

<!-- END REF -->

<!-- REF SessionClass.idleTimeout.Desc -->
## .idleTimeout

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R6  | Added   |

</details>

<!-- REF #SessionClass.idleTimeout.Syntax -->

**.idleTimeout** : Integer<!-- END REF -->

#### Beschreibung

The `.idleTimeout` property contains <!-- REF #SessionClass.idleTimeout.Summary -->the inactivity session timeout (in minutes), after which the session is automatically closed by 4D<!-- END REF -->.

If this property is not set, the default value is 60 (1h).

When this property is set, the [`.expirationDate`](#expirationdate) property is updated accordingly.

> The value cannot be less than 60: if a lower value is set, the timeout is raised up to 60.

This property is **read write**.

#### Beispiel

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

<!-- REF SessionClass.isGuest().Desc -->
## .isGuest()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R6  | Added   |

</details>

<!-- REF #SessionClass.isGuest().Syntax -->

**.isGuest()** : Boolean<!-- END REF -->

<!-- REF #SessionClass.isGuest().Params -->
| Parameter | Typ     |    | Beschreibung                                                               |
| --------- | ------- |:--:| -------------------------------------------------------------------------- |
| Ergebnis  | Boolean | <- | True if session is a Guest one, False otherwise|<!-- END REF -->

|

#### Beschreibung

The `.isGuest()` function <!-- REF #SessionClass.isGuest().Summary -->returns True if the session is a Guest session (i.e. it has no privileges)<!-- END REF -->.

#### Beispiel

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

| Version | Changes |
| ------- | ------- |
| v18 R6  | Added   |

</details>

<!-- REF #SessionClass.setPrivileges().Syntax -->

**.setPrivileges**( *privilege* : Text )<br/>**.setPrivileges**( *privileges* : Collection )<br/>**.setPrivileges**( *settings* : Object )<!-- END REF -->

<!-- REF #SessionClass.setPrivileges().Params -->
| Parameter  | Typ        |    | Beschreibung                                                                          |
| ---------- | ---------- |:--:| ------------------------------------------------------------------------------------- |
| privilege  | Text       | -> | Privilege name                                                                        |
| privileges | Collection | -> | Collection of privilege names                                                         |
| settings   | Objekt     | -> | Object with a "privileges" property (string or collection)|<!-- END REF -->

|

#### Beschreibung

The `.setPrivileges()` function <!-- REF #SessionClass.setPrivileges().Summary -->associates the privilege(s) defined in the parameter to the session<!-- END REF -->.

- In the *privilege* parameter, pass a string containing a privilege name (or several comma-separated privilege names).

- In the *privileges* parameter, pass a collection of strings containing privilege names.

- In the *settings* parameter, pass an object containing the following properties:

| Property   | Typ                | Beschreibung                                       |
| ---------- | ------------------ | -------------------------------------------------- |
| privileges | Text or Collection | <li>String containing a privilege name, or</li><li>Collection of strings containing privilege names</li> |
| userName   | Text               | User name to associate to the session (optional)   |

If the `privileges` property contains an invalid privilege name, it is ignored.

> In the current implementation, only the "WebAdmin" privilege is available.

By default when no privilege is associated to the session, the session is a [Guest session](#isguest).

The [`userName`](#username) property is available at session object level (read-only).

#### Beispiel

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

<!-- END REF -->

<!-- REF SessionClass.storage.Desc -->
## .storage

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R6  | Added   |

</details>

<!-- REF #SessionClass.storage.Syntax -->

**.storage** : Object<!-- END REF -->

#### Beschreibung

The `.storage` property contains <!-- REF #SessionClass.storage.Summary -->a shared object that can be used to store information available to all requests of the web client<!-- END REF -->.

When a `Session` object is created, the `.storage` property is empty. Since it is a shared object, this property will be available in the `Storage` object of the server.

> Like the `Storage` object of the server, the `.storage` property is always "single": adding a shared object or a shared collection to `.storage` does not create a shared group.

This property is **read only** itself but it returns a read-write object.

#### Beispiel

You want to store the client IP in the `.storage` property. You can write in the `On Web Authentication` database method:

```4d
If (Session.storage.clientIP=Null) //first access
    Use (Session.storage)
        Session.storage.clientIP:=New shared object("value"; $clientIP)
    End use
End if

```

<!-- END REF -->

<!-- REF SessionClass.userName.Desc -->
## .userName

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R6  | Added   |

</details>

<!-- REF #SessionClass.userName.Syntax -->

**.userName** : Text<!-- END REF -->

#### Beschreibung

The `.userName` property contains <!-- REF #SessionClass.userName.Summary -->the user name associated to the session<!-- END REF -->. You can use it to identify the user within your code.

This property is an empty string by default. It can be set using the `privileges` property of the [`setPrivileges()`](#setprivileges) function.

This property is **read only**.

<!-- END REF -->
