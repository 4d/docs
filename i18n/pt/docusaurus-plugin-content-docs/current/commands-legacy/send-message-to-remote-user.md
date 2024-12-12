---
id: send-message-to-remote-user
title: SEND MESSAGE TO REMOTE USER
slug: /commands/send-message-to-remote-user
displayed_sidebar: docs
---

<!--REF #_command_.SEND MESSAGE TO REMOTE USER.Syntax-->**SEND MESSAGE TO REMOTE USER** ( *message* {; *userSession*} )<!-- END REF-->
<!--REF #_command_.SEND MESSAGE TO REMOTE USER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| message | Text | &#8594;  | Text sent to user |
| userSession | Text | &#8594;  | User's session ID |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SEND MESSAGE TO REMOTE USER.Summary-->The **SEND MESSAGE TO REMOTE USER** command sends a message to all remote users or to a specific remote user.<!-- END REF--> 

In *message*, pass the text of the message to be displayed. It will be displayed as an alert or a notification on the screen of the session user(s).

The optional *userSession* parameter can be used to designate a specific user by passing their session ID. You can retrieve the session ID with the [Process activity](../commands/process-activity.md) command. If *userSession* is omitted, the message is sent to all users.

**Note**: This command can only be executed on 4D Server. If the method calling the command is executed locally on a remote client or on 4D single user, **SEND MESSAGE TO REMOTE USER** does nothing.

#### Exemplo 

You want to send a message to all users, then send a message to a specific user:

```4d
  // Method to be executed on server
 var $message : Text
 var $element : Object
 var $userCol : Collection
 
  // retrieve session information
 $userCol:=(Get process activity(Sessions only)).sessions
 
  // send message to all users
 $message:="A maintenance operation is scheduled for 10pm. The server will be restarted. Please log out before 10pm."
 SEND MESSAGE TO REMOTE USER($message)
 
  // send message to a single user, "Vanessa"
 $message:="Hello Vanessa"
 $userCol:=Get process activity(Sessions only).sessions.query("systemUserName = :1";"Vanessa")
 For each($element;$userCol)
    SEND MESSAGE TO REMOTE USER($message;$element.ID)
 End for each
```

#### Ver também 

[DROP REMOTE USER](drop-remote-user.md)  