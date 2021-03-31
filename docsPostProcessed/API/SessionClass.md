---
id: SessionClass
title: Session
---

Session objects are returned by the [`Session`](#session) command when [scalable sessions are enabled in your project](WebServer/sessions.md#enabling-sessions). The Session object is automatically created and maintained by the 4D web server to control the session of a web client (e.g. a browser). This object provides the web developer with an interface to the user session, allowing to manage privileges, store contextual data, share information between processes, and launch session-related preemptive processes.

For detailed information about the session implementation, please refer to the [web server Sessions](WebServer/sessions.md) section.

### Summary


||
|---|
|[**.clearPrivileges()**](#clearprivileges)<p>&nbsp;&nbsp;&nbsp;&nbsp;removes all the privileges associated to the session|
|[**.expirationDate** : Text](#expirationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;the expiration date and time of the session cookie|
|[**.hasPrivilege**( *privilege* : Text ) : Boolean](#hasprivilege)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns True if the privilege is associated to the session, and False otherwise|
|[**.idleTimeout** : Integer](#idletimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;the inactivity session timeout (in minutes), after which the session is automatically closed by 4D|
|[**.isGuest()** : Boolean](#isguest)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns True if the session is a Guest session (i.e. it has no privileges)|
|[**.setPrivileges**( *privilege* : Text )<br>**.setPrivileges**( *privileges* : Collection )<br>**.setPrivileges**( *settings* : Object )](#setprivileges)<p>&nbsp;&nbsp;&nbsp;&nbsp;associates the privilege(s) defined in the parameter to the session|
|[**.userName** : Text](#username)<p>&nbsp;&nbsp;&nbsp;&nbsp;the user name associated to the session|




## Session

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R6|Added|
</details>

**Session** : 4D.Session

|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|4D.Session|<-|Session object|


#### Description

The `Session` command returns the `Session` object corresponding to the current scalable user web session. 

This command only works when [scalable sessions are enabled](WebServer/sessions.md#enabling-sessions). It returns *Null* when sessions are disabled or when legacy sessions are used. 

When scalable sessions are enabled, the `Session` object is available from any web processes in the following contexts:

- `On Web Authentication`, `On Web Connection`, and `On REST Authentication` database methods,
- ORDA [Data Model Class functions](ORDA/ordaClasses.md) called with REST requests,
- code processed through 4D tags in semi-dynamic pages (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)
- project methods with the "Available through 4D tags and URLs (4DACTION...)" attribute and called through 4DACTION/ urls.


#### Example

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



## .clearPrivileges()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R6|Added|

</details>

**.clearPrivileges()**
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|


#### Description

The `.clearPrivileges()` function removes all the privileges associated to the session. As a result, the session automatically becomes a Guest session.


#### Example

```4d
//Invalidate a session
var $isGuest : Boolean  

Session.clearPrivileges()
$isGuest:=Session.isGuest() //$isGuest is True
```




## .expirationDate

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R6|Added|

</details>

**.expirationDate** : Text
#### Description

The `.expirationDate` property contains the expiration date and time of the session cookie. The value is expressed as text in the ISO 8601 format: `YYYY-MM-DDTHH:MM:SS.mmmZ`.

This property is **read-only**. It is automatically recomputed if the [`.idleTimeout`](#idletimeout) property value is modified. 

#### Example

```4d
var $expiration : Text
$expiration:=Session.expirationDate //eg "2021-11-05T17:10:42Z"
```





## .hasPrivilege()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R6|Added|
</details>

**.hasPrivilege**( *privilege* : Text ) : Boolean
|Parameter|Type||Description|
|---------|--- |:---:|------|
|privilege|Text|<-|Name of the privilege to verify|
|Result|Boolean|<-|True if session has *privilege*, False otherwise|


#### Description

The `.hasPrivilege()` function returns True if the privilege is associated to the session, and False otherwise. 


#### Example

You want to check if the "WebAdmin" privilege is associated to the session:

```4d
If (Session.hasPrivilege("WebAdmin"))
	//Access is granted, do nothing
Else
	//Display an authentication page

End if
```


## .idleTimeout

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R6|Added|

</details>

**.idleTimeout** : Integer
#### Description

The `.idleTimeout` property contains the inactivity session timeout (in minutes), after which the session is automatically closed by 4D. 

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



## .isGuest()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R6|Added|

</details>

**.isGuest()** : Boolean
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Boolean|<-|True if session is a Guest one, False otherwise|

#### Description

The `.isGuest()` function returns True if the session is a Guest session (i.e. it has no privileges).


#### Example

In the `On Web Connection` database method:

```4d
If (Session.isGuest())
	//Do something for Guest user
End if
```




## .setPrivileges()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R6|Added|

</details>

**.setPrivileges**( *privilege* : Text )<br>**.setPrivileges**( *privileges* : Collection )<br>**.setPrivileges**( *settings* : Object )
|Parameter|Type||Description|
|---------|--- |:---:|------|
|privilege|Text|->|Privilege name|
|privileges|Collection|->|Collection of privilege names|
|settings|Object|->|Object with a "privileges" property (string or collection)|

#### Description

The `.setPrivileges()` function associates the privilege(s) defined in the parameter to the session.

- In the *privilege* parameter, pass a string containing a privilege name (or several comma-separated privilege names).

- In the *privileges* parameter, pass a collection of strings containing privilege names.

- In the *settings* parameter, pass an object containing the following properties:

|Property|Type|Description|
|---|---|---|
|privileges|Text or Collection|<li>String containing a privilege name, or</li><li>Collection of strings containing privilege names</li>|
|userName|Text|User name to associate to the session (optional)|

If the `privileges` property contains an invalid privilege name, it is ignored.

> In the current implementation (v18 R6), only the "WebAdmin" privilege is available.

By default when no privilege is associated to the session, the session is a [Guest session](#isguest). 

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



## .storage

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R6|Added|

</details>

**.storage** : Object
#### Description

The `.storage` property contains a shared object that can be used to store information available to all requests of the web client. 

When a `Session` object is created, the `.storage` property is empty. Since it is a shared object, this property will be available in the `Storage` object of the server. 

This property is **read only** itself but it returns a read-write object.

#### Example

You want to store the client IP in the `.storage` property. You can write in the `On Web Authentication` database method:

```4d
If (Session.storage.clientIP=Null) //first access
    Use (Session.storage)
        Session.storage.clientIP:=New shared object("value"; $clientIP)
    End use 
End if 

```






## .userName

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R6|Added|

</details>

**.userName** : Text
#### Description

The `.userName` property contains the user name associated to the session. You can use it to identify the user within your code.

This property is an empty string by default. It can be set using the `privileges` property of the [`setPrivileges()`](#setprivileges) function.

This property is **read only**. 





<style> h2 { background: #d9ebff;}</style>
