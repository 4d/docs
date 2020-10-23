---
id: webServerSessions
title: Session Management
---

The 4D Web Server provides a simple and complete mechanism for managing user sessions. This automatic mechanism allows successive web clients to reuse the same context (selections and variable instances) from one request to another.

This is done through a private cookie set by 4D itself: "4DSID". On each web client request, 4D checks for the presence and the value of the 4DSID cookie:

*	If the cookie has a value, 4D tries to find the context that created this cookie among the existing contexts,
	
	*	If this context is found, it is reused for the call; the `Compiler_Web` method is not executed,
			
	*	If no context is found, 4D creates a new one,
*	If the cookie does not have a value or if it is not present (because it is expired, for instance), 4D creates a new context.

## Enabling and disabling the mechanism  

The session management mechanism must be enabled on your 4D Web Server so that you can use it in your application.

By default, this mechanism is enabled in databases created with 4D v13 and later versions. However, for compatibility reasons, it is disabled in databases converted from previous versions of 4D. You must enable it explicitly in order to benefit from this new functionality. 

There are two ways to enable automatic session management:

*	Using the **Automatic Session Management** option on the "Options (I)" page of the Database Settings:<p>![](assets/en/WebServer/session1.png)<p>When you do this, the setting is permanent; it is saved to disk.

*	Using the `Web Keep session` option of the `WEB SET OPTION` command. In this case, this setting is applied only to the session and "overrides" the setting defined in the database settings.

In both cases, the setting is local to the machine; so it can be different on the 4D Server web server and the web servers of remote 4D machines.

## Cookie expiration and preserving of contexts  

The lifespan of an inactive cookie is 8 hours (480 minutes) by default but this can be changed using the `WEB SET OPTION` command. You can set a different lifespan for cookies (`Web Inactive session timeout` option) from the one for processes associated with server sessions (`Web Inactive process timeout` option): for instance, you may want for a shopping "basket" to remain valid for 24 hours but, for optimization purposes, you do not want to keep the process for that long. In this case, you can set a process life duration of 4 hours, for example. At the end of this period, the `On Web Close Process` database method is called and you can store the variables and selections related to the session before the process is killed. The next time the web client connects (up to 24 hours later), the cookie is sent back to the server and you can reload the session information in the `On Web Connection` database method (see [example](#database-method-example) below).

If necessary, you can use the `WEB CLOSE SESSION` command to force the expiration of the cookie at any time and thus close the session.

## Destruction of inactive contexts  

4D automatically destroys the oldest inactive contexts when the maximum number of kept contexts is reached (this number is 100 by default and can be changed using the `WEB SET OPTION` command).

When a context is about to be destroyed (closing of the associated web process), the `On Web Close Process` database method is called, which lets you save the context variables and selections, in anticipation of subsequent reuse. 

## Database Method Example 
 
This example shows how easy it is to manage sessions using the [`On Web Connection`](webServerConnectMethods.md#on-web-connection) database method and the [`On Web Close Process`](webServerConnectMethods.md#on-web-close-process) database method. 

Here is the code of the `On Web Connection` database method:

```code4d
// On Web Connection (or On Web Authentication)
 C_TEXT(www_SessionID)
 If(www_SessionID=WEB Get Current Session ID)
  // Compiler_Web is not called
  // All variables and selection already exist
    ...
 Else
  // Compiler_Web has just been executed.
  // This is a new session, no variable or selection exists
  // Keep track of the session that 4D just created
    www_SessionID:=WEB Get Current Session ID
 
  // Initialization of session
  // Set up selections
  // find connected user
    QUERY([User];[User]Login=www_Login)
    QUERY([prefs];[prefs]Login=www_Login)
 
  // find employee coordinates
    QUERY([employees];[employees]Name=[user]name)
    QUERY([company];[company]Name=[user]company)
 
  // Setup variables
  // Get prefs for this user
    SELECTION TO ARRAY([prefs]name;prefNames;[prefs]values;prefValues)
    www_UserName:=[User]Name
    www_UserMail:=[User]mail
 
  // Session is now initialized
 End if
```

Code for `On Web Close Process` database method:


```code4d
// On Web Session Suspend
  // After a period of inactivity or whenever necessary, 4D closes the session
 C_TEXT(www_SessionID)
 www_SessionID:=""
  // We store the session info
  // We save the preferences of the previously connected user
 QUERY([prefs];[prefs]Login=www_Login) // kept in the session
 ARRAY TO SELECTION(prefNames;[prefs]name;prefValues;[prefs]values)
 
  // Important: the process is then killed
  // 4D deletes the variables, selections, etc.
```


## In Case of Rejected Cookies  

Since the session management mechanism is based on the use of cookies, the 4D HTTP server is not able to maintain a session if the web client does not accept cookies. In this case, each request is treated as a new connection and the `Compiler_Web` method is executed on each connection. 

You can check for cookie support with the `WEB GET HTTP HEADER` command.

## Session and IP Management  

The 4D HTTP Server keeps track of the IP that started a session. If a different IP tries to access an existing session, an HTTP 400 error is returned to the client.