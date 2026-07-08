---
id: desktop-sessions
title: Desktop Sessions
---

## Overview

A desktop session is a user-related execution context on 4D Server, 4D remote, or 4D single-user that **does not result from any web or REST access**.  

Desktop sessions include:

- **Remote user sessions**: In client/server applications, remote users have their own sessions, managed from the client and from the server.
- **Stored procedures sessions**: In client/server applications, the unique virtual user session that manages all stored procedures executed on the server.
- **Standalone sessions**: Local session object returned in single-user application (useful in development and test phases of client/server applications).


The following diagram shows the different session types and how they interact:


![](../assets/en/Desktop/sessions.png)


Just like in a [**web user session**](../WebServer/sessions.md), the code executed in a desktop session has access to a [`Session`](../API/SessionClass.md) object which provides functions and properties allowing you to store session values and to share them between user processes, for example using the [`session.storage`](../API/SessionClass.md#storage) object.   

However, unlike the code executed in web user sessions, the code executed in desktop sessions is not controlled by [roles and privileges](../ORDA/privileges.md). It can access any parts of the 4D application, including ORDA and data model classes (on 4D Server, [users and groups feature](../Users/handling_users_groups.md) can manage user accesses). Note also that desktop sessions do not require [scalable sessions](../WebServer/sessions.md#enabling-web-sessions) to be enabled. 


You can nevertheless [**share** a remote session with a web session](#sharing-a-remote-session-for-web-accesses) so that desktop application users can access your 4D application through a web interface, using in particular **Qodly pages** and Web areas. 



## Remote user sessions {#remote-user-sessions}

In client/server applications, when a user connects to the server, a **remote user session object** is created and available on both the server and the client. It is returned by the [`Session`](../commands/session) command on both machines. 

This object is handled through the functions and properties of the [`Session` class](../API/SessionClass.md). 

### Comparing server-side and client-side user session objects {#comparing-server-side-and-client-side-user-session-objects}

Depending on where the code is executed, a server-side or a client-side user `session` object is available. Both objects are similar, except that:

- their [`.storage`](../API/SessionClass.md#storage) properties are not the same object. A value stored in the `.storage` of the user session on the server will not be available in the `.storage` of the user session on the client and conversely.
- for security reasons, the client-side session cannot execute functions that **modify** [privileges](../ORDA/privileges.md) ([`setPrivileges()`](../API/SessionClass.md#setprivileges), [`clearPrivileges()`](../API/SessionClass.md#clearprivileges), [`promote()`](../API/SessionClass.md#promote), [`demote()`](../API/SessionClass.md#demote), [`restore()`](../API/SessionClass.md#restore)). Calling these functions on a client generates an error. 

:::note

Functions that read privileges can be called on both client and server sides ([`getPrivileges()`](../API/SessionClass.md#getprivileges), [`hasPrivilege()`](../API/SessionClass.md#hasprivilege), [`isGuest()`](../API/SessionClass.md#isguest))

:::

### Usage

You use the remote user `session` object to manage and share session data.

Within each environment, a [session `storage`](../API/SessionClass.md#storage) object is shared across all processes of the same user session. For example on the server, you can launch a user authentication and verification procedure when a client connects to the server, involving entering a code sent by e-mail or SMS into the application. You then add the user information to the session storage, enabling the server to identify the user. This way, the 4D server can access user information for all client processes, enabling customized code to be written according to the user's role. 

Within each environment, you can use the remote user `session` object to [create an OTP](../API/SessionClass.md#createotp) and [share the remote session for web accesses](#sharing-a-remote-session-for-web-accesses).  

On the server, you can also [assign privileges](../API/SessionClass.md#setprivileges) to a remote user session to control access when the session comes from [Qodly pages running in web areas](#sharing-a-remote-session-for-web-accesses). 

:::note

On the client side, two distinct local storage objects are available:

- the [`Storage`](../commands/storage) object of the client machine,
- the [`session.storage`](../API/SessionClass.md#storage) object of the user remote session (also returned by the [`Session storage`](../commands/session-storage) command). 

:::


:::tip Related blog posts

- [4D remote session object with Client/Server connection and Stored procedure](https://blog.4d.com/new-4D-remote-session-object-with-client-server-connection-and-stored-procedure).
- [Forget server-side wrappers, use 4D Sessions from the client](https://blog.4d.com/forget-server-side-wrappers-use-4d-sessions-from-the-client).

:::




### Sharing a remote session for web accesses {#sharing-a-remote-session-for-web-accesses}

Remote user sessions can be used to handle web accesses to the application by the same user and thus, manage their [privileges](../ORDA/privileges.md). This possibility is particularly useful for Client/Server applications where [Qodly pages](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/pageLoaderOverview) are used for the interface, running on remote machines. With this configuration, your applications have modern CSS-based web interfaces but still benefit from the power and simplicity of integrated client/server development. In such applications, Qodly pages are executed within standard 4D [Web areas](../FormObjects/webArea_overview.md). 

To manage this configuration in production, you need to use remote user sessions. Actually, requests coming from both the remote 4D application and its Qodly pages loaded in Web areas need to work inside the same session. You just have to share the session on the server between the remote client and its web pages so that you can have the same [session storage](../API/SessionClass.md#storage) and client license, wherever the request comes from (web or remote 4D).  

[Privileges](../ORDA/privileges.md) should be set in the session before executing a web request, so that the user automatically gets their privileges for web access (see example). Keep in mind that privileges only apply to requests coming from the web. 

:::note

Privileges can only be set from the remote user session on the server. For security reasons, they cannot be modified from the remote user session on the client (see [Comparing server-side and client-side user session objects](#comparing-server-side-and-client-side-user-session-objects)).

:::

Shared sessions are handled through [OTP tokens](../WebServer/sessions.md#session-token-otp). After you created an OTP token for the remote session, you add the token (through the `$4DSID` parameter value) to web requests sent from Web areas containing Qodly pages (or from any web browser) so that the user session on the server is identified and shared. On the web server side, if a web request contains an *OTP id* in the $4DSID parameter, the session corresponding to this OTP token is used.

:::note

You can execute the [OTP creation code](../API/SessionClass.md#createotp) from the server or directly from the client (on the server you can use for example the [`On Server Open Connection`](../commands/on-server-open-connection-database-method) database method). However, keep in mind that the web session `.storage` is shared with the server-side user session `.storage` that and privileges can only be set from the user session on the server. 

:::

:::tip

For development and testing purposes, you can use a [standalone session](#standalone-sessions) to code and test all features related to web access sharing, whether your application is intended for single-user or client/server deployment. 

:::


:::tip Related blog post

[Embed Qodly pages in a 4D web area without extra cost](https://blog.4d.com/share-your-4d-remote-client-session-with-web-accesses/)

:::



### Example 

In a form, get an OTP and open a Qodly page in a Web area:

```4d
Form.otp:=getOTP

Form.url:="http://localhost/$lib/renderer/?w=Products&$4DSID="+Form.otp

WA OPEN URL(*; "QodlyPage"; Form.url)

```

The *getOTP* project method (with the [**Execute on server** property](../Project/project-method-properties.md#execute-on-server) in Client/Server):

```4d
// In Client Server:
// ----------------
// Method executed on the server because the session object is on the server
// The Session object is Null on the client 
//

#DECLARE() : Text

return Session.createOTP()

```

Here is the code used to put the "viewProducts" privilege in the session:

```4d
// In Client Server:
// ----------------
// This code must be executed on the server because the session object is on the server
// The Session object is Null on the client 

Session.clearPrivileges() // Clean the session from its old privileges
Session.setPrivileges("viewProducts")
```


## Stored procedure sessions {#stored-procedure-sessions}

On the server, all [stored procedures](https://doc.4d.com/4Dv20/4D/20/Stored-Procedures.300-6330553.en.html) share the same virtual user session. 

### Usage

You can share data between all processes of a stored procedure session using the [`session.storage`](../API/SessionClass.md#storage) shared object.

### Availability
 
The `session` object of stored procedures is available from:

- Project methods that are called by the [`Execute on Server`](../commands/execute-on-server) command,
- ORDA [data model functions](../ORDA/ordaClasses.md) called from a stored procedure, 
- Database methods such as [`On Server Startup`](../commands/on-server-startup-database-method) and [`On Server Shutdown`](../commands/on-server-shutdown-database-method).


## Standalone sessions {#standalone-sessions}

A standalone session is the single-user session running when you work locally with 4D.  

### Usage

The standalone session can be used to develop and test your client/server application and its interaction with web sessions and [OTP sharing](#sharing-a-remote-session-for-web-accesses). You can use the `session` object in your code in standalone session just as the `session` object of the remote sessions.

### Availability
 
The `session` object of a standalone is available from all methods and code executed on the 4D application. 


