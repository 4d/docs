---
id: authUsers
title: Users and sessions
---


## Sessions

When [scalable sessions are enabled](WebServer/sessions.md#enabling-sessions) (recommended), REST requests can create and use [web user sessions](WebServer/sessions.md), providing extra features such as multiple requests handling, data sharing between web client processes, and control of user privileges.

When a web user session is opened, you can handle it through the `Session` object and the [Session API](API/SessionClass.md). Subsequent REST requests reuse the same session cookie.

A session is opened after the user was successfully logged (see below).

> - On 4D Server, opening a REST session requires that a free 4D client license is available.<br/>
> - On 4D single-user, you can open up to three REST sessions for testing purposes.



## Force login mode

:::note Compatibility

The legacy login mode based upon the `On REST Authentication` database method is **deprecated** as of 4D 20 R6. It is now recommended to [use the **force login mode**](../ORDA/privileges.md#rolesjson-file) (automatically enabled in new projects) and to implement the [`ds.authentify()` function](#dsauthentify). In converted projects, [a button in the Settings dialog box](../settings/web.md#activate-rest-authentication-through-dsauthentify-function) will help you upgrade your configuration. In Qodly Studio for 4D, the mode can be set using the [**Force login** option](../WebServer/qodly-studio.md#force-login) in the Privileges panel.

:::


The user login sequence is the following:

1. At the first REST call (for a Qodly page call for example), a "guest" web user session is created. It has no privileges, no rights to execute requests other than [descriptive REST requests](#descriptive-rest-requests), no license consumption.  
Descriptive REST requests are always processed by the server, even if no web user session using a license is opened. In this case, they are processed through "guest" sessions.


2. You call your [`authentify()` function](#authentify) (created beforehand), in which you check the user credentials and call [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) with appropriate privileges. `authentify()` must be an exposed [datastore class function](../ORDA/ordaClasses.md#datastore-class).


3. The `/rest/$catalog/authentify` request is sent to the server along with user credentials. This step only requires a basic login form that do not access data; it can be a [Qodly page](../WebServer/qodly-studio.md) (called via the `/rest/$getWebForm` request).


4. If the user is successfully authentified, a 4D license is consumed on the server and all REST requests are accepted.

![alt-text](../assets/en/REST/force-login-2.jpeg)


In the user login phase, license usage is disconnected from web user sessions. A license is required only when the [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) is executed, allowing you to control the number of used licenses.    


All other REST requests (handling data or executing a function) will only be processed if they are executed within a web session with appropriate privileges, otherwise they return an error. To assign privileges to a web session, you need to execute the [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) function for the session. Executing this function triggers the 4D license consumption.  


### Descriptive REST requests

Descriptive REST requests can be processed in web user sessions that do not require licenses ("guest" sessions). These requests are:

- [`/rest/$catalog`]($catalog.md) requests (e.g. `/rest/$catalog/$all`) - access to available dataclasses
- `/rest/$catalog/authentify` - the datastore function used to login the user
- `/rest/$getWebForm` - the rendering of a Qodly page

![alt-text](../assets/en/REST/force-login-1.jpeg)


## `Function authentify`

### Syntax

```4d
exposed Function authentify({params : type}) {-> result : type}
	// code
```

The `authentify()` function must be implemented in the [DataStore class](../ORDA/ordaClasses.md#datastore-class) of the project and must be called through a REST request.

This function is the only available entry point from REST guest sessions when the "force login" mode is enabled: any other function call or data access is rejected until the session acquires appropriate privileges.

:::note

The `authentify()` function can always be executed by a REST guest session, whatever the [`roles.json` file](../ORDA/privileges.md#rolesjson-file) configuration.

:::

The function can receive any authentication or contextual information as [parameter(s)](ClassFunctions.md#parameters) and can return any value. Since this function can only be called from a REST request, parameters must be passed through the body of the POST request.

This function should contain two parts:

- some code to identify and authenticate the REST request sender,
- if the authentication is successful, a call to [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) that assigns appropriate privileges to the session.

If the function does not call [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges), no privileges are assigned, no license is consumed and subsequent non-descriptive REST requests are rejected.


### Example

You only want to know users to open a web session on the server. You created the following `authentify()` function in the datastore class:

```4d
exposed Function authentify($credentials : Object) : Text

var $users : cs.UsersSelection
var $user : cs.UsersEntity

$users:=ds.Users.query("name = :1"; $credentials.name)
$user:=$users.first()

If ($user#Null) //the user is known
	If (Verify password hash($credentials.password; $user.password))
		Session.setPrivileges("vip")
	Else

		return "Wrong password"
	End if
Else
        return "Wrong user"
End if
```


To call the `authentify()` function:

**POST** `127.0.0.1:8111/rest/$catalog/authentify`

Body of the request:

```json
[{"name":"Henry",
"password":"123"}]
```
