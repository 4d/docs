---
id: webServerSessions
title: User sessions
---

## Overview

The 4D web server provides built-in features for managing user sessions. Creating and maintaining user sessions allows you to control and improve the user experience on your web application.

Web server user sessions allow to:

- handle simultaneously multiple requests from the same web client through several preemptive processes --web server sessions are **scalable**,
- share data between the processes of a web client,
- share private data between all web processes,
- associate privileges to user sessions.

## Enabling session mechanism

The session management feature can be enabled and disabled on your 4D web server. There are two ways to enable session management:

- Using the **Scalable sessions** option on the "Web/Options (I)" page of the Settings (permanent setting): 
![alt-text](assets/en/WebServer/settingsSession.png)

This option is selected by default in new projects. It can however be disabled by selecting the **No sessions** option, in which case the web session features are disabled (no `Session` object is available).

- Using the `WEB SET OPTION(Web scalable session;1)` statement. In this case, this setting "overrides" the option defined in the Settings dialog box and is applied only during the working session (it is not stored on disk).

In both cases, the setting is local to the machine; so it can be different on the 4D Server Web server and the Web servers of remote 4D machines.

> **Compatibility**: A **Legacy sessions** option is available in projects created with a 4D version prior to 4D v18 R6 (for more information, please refer to the [doc.4d.com](https://doc.4d.com) web site). In converted projects, it is recommended to enable **Scalable sessions**. 


## Session implementation

### How it works

When [sessions are enabled](#enabling-session-mechanism), automatic mechanisms are implemented: in each web client request, 4D checks for the presence and the value of the private "4DSID" cookie. This cookie references the web session.  

When the Web server receives a client request that does not correspond to an already opened session:

- a new session with a private "4DSID" cookie is created on the web server
- a new Guest `Session` object is created and is dedicated to the scalable web session.

The current `Session` object can then be accessed through the [`Session`](API/sessionClass.md#session) command in the code of any web processes.

![alt-text](assets/en/WebServer/schemaSession.png)

### Example

## Sharing information

Each `Session` object provides a [`.storage`](API/sessionClass.md#storage) property which is a [shared object](Concepts/shared). This property allows you to share information between all processes handled by the session. 

## Session lifetime

A scalable web session is closed when:

- the web server is stopped,
- the timeout of the session cookie has been reached.

The lifespan of an inactive cookie is 60 minutes by default, which means that the web server will automatically close inactive sessions after 60 minutes. 

This timeout can be set using the [`.idleTimeout`](API/sessionClass.md#idletimeout) property of the `Session` object (the timeout cannot be less than 60 minutes). 

When a scalable web session is closed, if the [`Session`](API/sessionClass.md#session) command is called afterwards:

- the `Session` object does not contain privileges (it is a Guest session)
- the [`.storage`](API/sessionClass.md#storage) property is empty
- a new session cookie is associated to the session


## Privileges

Privileges can be associated to sessions. On the web server, you can provide specific access or features depending on the privileges of the session. 

By default, new sessions do not have any privilege: they are **Guest** sessions. You can assign privileges usign the [`.setPrivileges()`](API/sessionClass.md#setprivileges) function. In your code, you can check the session's privileges to allow or deny access using the [`.hasPrivilege()`](API/sessionClass.md#hasprivilege) function. 

> In the current implementation, only "Guest" and "WebAdmin" privileges are available.

Example: 

```4d
If (Session.hasPrivilege("WebAdmin"))
	//Access is granted, do nothing
Else
	//Display an authentication page
End if
```


