---
id: sessionClass
title: Session
---

Session objects are returned by the `Session` command, when scalable sessions are enabled in your project. A Session object is automatically created and maintained by the 4D web server to control the browsing session of a web client (e.g. a browser). This object provides the web developer with an interface to the user session, allowing to manage privileges, store contextual data, share information between user sessions, and launch session-related preemptive processes.


## Summary


||
|---|
|[<!-- INCLUDE #sessionClass.clearPrivileges().Syntax -->](#clearprivileges)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #sessionClass.clearPrivileges().Summary -->|
|[<!-- INCLUDE #sessionClass.expirationDate.Syntax -->](#expirationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #sessionClass.expirationDate.Summary -->|
|[<!-- INCLUDE #sessionClass.hasPrivilege().Syntax -->](#hasprivilege)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #sessionClass.hasPrivilege().Summary -->|
|[<!-- INCLUDE #sessionClass.isGuest().Syntax -->](#isguest)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #sessionClass.isGuest().Summary -->|
|[<!-- INCLUDE #sessionClass.setPrivileges().Syntax -->](#setprivileges)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #sessionClass.setPrivileges().Summary -->|
|[<!-- INCLUDE #sessionClass.timeout.Syntax -->](#timeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #sessionClass.timeout.Summary -->|
|[<!-- INCLUDE #sessionClass.userName.Syntax -->](#username)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #sessionClass.userName.Summary -->|



---

<!-- REF sessionClass.clearPrivileges().Desc -->
## .clearPrivileges()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R6|Added|

</details>

<!-- REF #sessionClass.clearPrivileges().Syntax -->
**.clearPrivileges()**<!-- END REF -->

<!-- REF #sessionClass.clearPrivileges().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|
<!-- END REF -->


#### Description

The `.clearPrivileges()` function <!-- REF #sessionClass.clearPrivileges().Summary -->removes all the privileges associated to the session<!-- END REF -->. As a result, the session automatically becomes a Guest session.


#### Example

```4d
//Invalidate a session
var $isGuest : Boolean  

Session.clearPrivileges()
$isGuest:=Session.isGuest() //$isGuest is True
```

<!-- END REF -->

---

<!-- REF sessionClass.expirationDate.Desc -->
## .expirationDate

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R6|Added|

</details>

<!-- REF #sessionClass.expirationDate.Syntax -->
**.expirationDate** : Text<!-- END REF -->

#### Description

The `.expirationDate` property contains <!-- REF #sessionClass.expirationDate.Summary -->the expiration date and time of the session cookie<!-- END REF -->. The value is expressed as text in the ISO 8601 format: `YYYY-MM-DDTHH:MM:SS.mmmZ`.

This property is **read-only**. It is automatically recomputed if the [`.timeout`](#timeout) property value is modified. 

#### Example

```4d
var $expiration : Text
$expiration:=Session.expirationDate //eg "2021-11-05T17:10:42Z"
```

<!-- END REF -->


---

<!-- REF sessionClass.hasPrivilege().Desc -->
## .hasPrivilege()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R6|Added|
</details>

<!-- REF #sessionClass.hasPrivilege().Syntax -->
**.hasPrivilege**( *privilege* : Text ) : Boolean<!-- END REF -->

<!-- REF #sessionClass.hasPrivilege().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|privilege|Text|<-|Name of the privilege to verify|
|Result|Boolean|<-|True if session has *privilege*, False otherwise|
<!-- END REF -->


#### Description

The `.hasPrivilege()` function <!-- REF #sessionClass.hasPrivilege().Summary -->returns True if the privilege is associated to the session, and False otherwise<!-- END REF -->. 


#### Example

In the `On Web Connection` database method, you want to check if the "WebAdmin" privilege is associated to the session:

```4d
If (Session.hasPrivilege("WebAdmin"))
	//Access is granted, do nothing
Else
	//Display an authentication page
End if
```

<!-- END REF -->

---

<!-- REF sessionClass.isGuest().Desc -->
## .isGuest()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R6|Added|

</details>

<!-- REF #sessionClass.isGuest().Syntax -->
**.isGuest()** : Boolean<!-- END REF -->

<!-- REF #sessionClass.isGuest().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Boolean|<-|True if session is a Guest one, False otherwise|
<!-- END REF -->

#### Description

The `.isGuest` function <!-- REF #sessionClass.isGuest().Summary -->returns True if the session is a Guest session (i.e. it has no privileges)<!-- END REF -->.


#### Example

In the `On Web Connection` database method:

```4d
If (Session.isGuest())
	//Do something for Guest user
End if
```


<!-- END REF -->

---

<!-- REF sessionClass.setPrivileges().Desc -->
## .setPrivileges()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R6|Added|

</details>

<!-- REF #sessionClass.setPrivileges().Syntax -->
**.setPrivileges**( *settings* : Object )<!-- END REF -->

<!-- REF #sessionClass.setPrivileges().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|settings|Object|->|Object with a "privileges" property (string or collection)|
<!-- END REF -->

#### Description

The `.setPrivileges` function <!-- REF #sessionClass.setPrivileges().Summary -->associates the privilege(s) defined in the *settings* parameter to the session<!-- END REF -->.

In the *settings* parameter, pass an object containing the following property:

|Property|Type|Description|
|---|---|---|
|privileges|Text or Collection|<li>String containing a privilege name, or</li><li>Collection of strings containing privilege names</li>|

If the `privileges` property contains an invalid privilege name, it is ignored.

> In the current implementation (v18 R6), only the "WebAdmin" privilege is available.

By default when no privilege is associated to the session, the session is a Guest session. 

#### Example

In the `On Web Authentication` database method:

```4d
var $clientIP; $3 : Text
var $userOK : Boolean

$clientIP:=$3

... //Authenticate the user

If ($userOK) //The user has been approved
  var $info : Object
  $info:=New object
  $info.privileges:=New collection("WebAdmin")
  Session.setPrivileges($info)

  Use (Session.storage)
     Session.storage.clientIP:=New shared object("value"; $clientIP)
  End use

 $0:=True

End if

```


<!-- END REF -->

---

<!-- REF sessionClass.timeout.Desc -->
## .timeout

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R6|Added|

</details>

<!-- REF #sessionClass.timeout.Syntax -->
**.timeout** : Integer<!-- END REF -->

#### Description

The `.timeout` property contains <!-- REF #sessionClass.timeout.Summary -->the inactivity session timeout (in minutes), after which the session is automatically closed by 4D<!-- END REF -->. 

If this property is not set, the default value is 60 (1h). 

When this property is set, the [`.expirationDate`](#expirationdate) property is updated accordingly. 

> The value cannot be less than 60: if a lower value is set, the timeout is raised up to 60.

 
This property is **read write**. 

#### Example

```4d
If (Session.isGuest())
		// A Guest session will close after 60 minutes of inactivity
	Session.timeout:=60
Else
		// Other sessions will close after 120 minutes of inactivity
	Session.timeout:=120
End if

```

<!-- END REF -->

---

<!-- REF sessionClass.userName.Desc -->
## .userName

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R6|Added|

</details>

<!-- REF #sessionClass.userName.Syntax -->
**.userName** : Text<!-- END REF -->

#### Description

The `.userName` property contains <!-- REF #sessionClass.userName.Summary -->the user name associated to the session<!-- END REF -->. 

This property is empty by default. You can use it to identify the user within your code.

This property is **read write**. 

#### Example

In the `On Web Authentication` database method:

```4d
var $clientName; $5 : Text

$clientName:=$5

... //Authenticate the user

Session.userName:=$clientName

```



<!-- END REF -->
