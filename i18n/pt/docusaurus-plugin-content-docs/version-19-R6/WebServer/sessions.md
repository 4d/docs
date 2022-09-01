---
id: sessions
title: User sessions
---

The 4D web server provides built-in features for managing **user sessions**. Creating and maintaining user sessions allows you to control and improve the user experience on your web application. When user sessions are enabled, web clients can reuse the same server context from one request to another.

Web server user sessions allow to:

- handle multiple requests simultaneously from the same web client through an unlimited number of preemptive processes (web server sessions are **scalable**),
- share data between the processes of a web client,
- associate privileges to user sessions,
- handle access through a `Session` object and the [Session API](API/SessionClass.md).

> **Note:** The current implementation is only the first step of an upcoming comprehensive feature allowing developers to manage hierarchical user permissions through sessions in the whole web application.

## Enabling sessions

The session management feature can be enabled and disabled on your 4D web server. There are different ways to enable session management:

- Using the **Scalable sessions** option on the "Web/Options (I)" page of the Settings (permanent setting): ![alt-text](../assets/en/WebServer/settingsSession.png)

This option is selected by default in new projects. It can however be disabled by selecting the **No sessions** option, in which case the web session features are disabled (no `Session` object is available).

- Using the [`.scalableSession`](API/WebServerClass.md#scalablesession) property of the Web Server object (to pass in the *settings* parameter of the [`.start()`](API/WebServerClass.md#start) function). In this case, this setting overrides the option defined in the Settings dialog box for the Web Server object (it is not stored on disk).

> The `WEB SET OPTION` command can also set the session mode for the main Web server.

In any cases, the setting is local to the machine; so it can be different on the 4D Server Web server and the Web servers of remote 4D machines.

> **Compatibility**: A **Legacy sessions** option is available in projects created with a 4D version prior to 4D v18 R6 (for more information, please refer to the [doc.4d.com](https://doc.4d.com) web site).

## Session implementation

When [sessions are enabled](#enabling-sessions), automatic mechanisms are implemented, based upon a private cookie set by 4D itself: "4DSID_*AppName*", where *AppName* is the name of the application project. This cookie references the current web session for the application.

> The cookie name can be get using the [`.sessionCookieName`](API/WebServerClass.md#sessioncookiename) property.

1. In each web client request, the Web server checks for the presence and the value of the private "4DSID_*AppName*" cookie.

2. If the cookie has a value, 4D looks for the session that created this cookie among the existing sessions; if this session is found, it is reused for the call.

2. If the client request does not correspond to an already opened session:

- a new session with a private "4DSID_*AppName*" cookie is created on the web server
- a new Guest `Session` object is created and is dedicated to the scalable web session.

The current `Session` object can then be accessed through the [`Session`](API/SessionClass.md#session) command in the code of any web processes.

![alt-text](../assets/en/WebServer/schemaSession.png)

Web processes usually do not end, they are recycled in a pool for efficiency. When a process finishes executing a request, it is put back in the pool and made available for the next request. Since a web process can be reused by any session, [process variables](Concepts/variables.md#process-variables) must be cleared by your code at the end of its execution (using [`CLEAR VARIABLE`](https://doc.4d.com/4dv18/help/command/en/page89.html) for example). This cleanup is necessary for any process related information, such as a reference to an opened file. This is the reason why **it is recommended** to use the [Session](API/SessionClass.md) object when you want to keep session related information.

### Preemptive mode

On 4D Server, Web server sessions are automatically handled through preemptive processes, **even in interpreted mode**. You need to make sure that your web server code is [compliant with a preemptive execution](preemptiveWeb.md#writing-thread-safe-web-server-code).

> To debug interpreted web code on the server machine, make sure the debugger is [attached to the server](Debugging/debugging-remote.md) or [to a remote machine](Debugging/debugging-remote.md#attaching-the-debugger-to-a-remote-4d-client). Web processes then switch to cooperative mode and the web server code can be debugged.

With 4D single-user, interpreted code always runs in cooperative mode.

## Sharing information

Each `Session` object provides a [`.storage`](API/SessionClass.md#storage) property which is a [shared object](Concepts/shared.md). This property allows you to share information between all processes handled by the session.

## Session lifetime

A scalable web session is closed when:

- the web server is stopped,
- the timeout of the session cookie has been reached.

The lifespan of an inactive cookie is 60 minutes by default, which means that the web server will automatically close inactive sessions after 60 minutes.

This timeout can be set using the [`.idleTimeout`](API/SessionClass.md#idletimeout) property of the `Session` object (the timeout cannot be less than 60 minutes).

When a scalable web session is closed, if the [`Session`](API/SessionClass.md#session) command is called afterwards:

- the `Session` object does not contain privileges (it is a Guest session)
- the [`.storage`](API/SessionClass.md#storage) property is empty
- a new session cookie is associated to the session

## Privileges

Privileges can be associated to sessions. On the web server, you can provide specific access or features depending on the privileges of the session.

You can assign privileges usign the [`.setPrivileges()`](API/SessionClass.md#setprivileges) function. In your code, you can check the session's privileges to allow or deny access using the [`.hasPrivilege()`](API/SessionClass.md#hasprivilege) function. By default, new sessions do not have any privilege: they are **guest** sessions ([`.isGuest()`](API/SessionClass.md#isguest) function returns true).

> In the current implementation (v18 R6), only the "WebAdmin" privilege is available.

Exemplo:

```4d
If (Session.hasPrivilege("WebAdmin"))
 //Access is granted, do nothing Else
 //Display an authentication page End if
```

## Exemplo

In a CRM application, each salesperson manages their own client portfolio. The datastore contains at least two linked dataclasses: Customers and SalesPersons (a salesperson has several customers).

![alt-text](../assets/en/WebServer/exampleSession.png)

We want a salesperson to authenticate, open a session on the web server, and have the top 3 customers be loaded in the session.

1. We run this URL to open a session:

```
http://localhost:8044/authenticate.shtml
```

> In a production environment, it it necessary to use a [HTTPS connection](API/WebServerClass.md#httpsenabled) to avoid any uncrypted information to circulate on the network.

2. The `authenticate.shtml` page is a form containing *userId* et *password* input fields and sending a 4DACTION POST action:

```html
<!DOCTYPE html>
<html>
<body bgcolor="#ffffff">
<FORM ACTION="/4DACTION/authenticate" METHOD=POST>
 UserId: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/>
 Password: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>
<INPUT TYPE=SUBMIT NAME=OK VALUE="Log In">
</FORM>
</body>
</html>
```

![alt-text](../assets/en/WebServer/authenticate.png)

3. The authenticate project method looks for the *userID* person and validates the password against the hashed value already stored in the *SalesPersons* table:

```4d
var $indexUserId; $indexPassword; $userId : Integer
var $password : Text
var $userTop3; $sales; $info : Object ARRAY TEXT($anames; 0)
ARRAY TEXT($avalues; 0) WEB GET VARIABLES($anames; $avalues)

$indexUserId:=Find in array($anames; "userId")
$userId:=Num($avalues{$indexUserId})

$indexPassword:=Find in array($anames; "password")
$password:=$avalues{$indexPassword}

$sales:=ds. SalesPersons.query("userId = :1"; $userId).first() If ($sales#Null)
    If (Verify password hash($password; $sales.password))
        $info:=New object()
        $info.userName:=$sales.firstname+" "+$sales.lastname
        Session.setPrivileges($info)
        Use (Session.storage)
            If (Session.storage.myTop3=Null)
                $userTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)
                Session.storage.myTop3:=$userTop3
            End if
        End use
        WEB SEND HTTP REDIRECT("/authenticationOK.shtml")
    Else
        WEB SEND TEXT("This password is wrong")
    End if Else
    WEB SEND TEXT("This userId is unknown")
End if
```
