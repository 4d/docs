---
id: drop-remote-user
title: DROP REMOTE USER
slug: /commands/drop-remote-user
displayed_sidebar: docs
---

<!--REF #_command_.DROP REMOTE USER.Syntax-->**DROP REMOTE USER** ( *userSession* )<!-- END REF-->
<!--REF #_command_.DROP REMOTE USER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| userSession | Text | &#8594;  | User's session ID |

<!-- END REF-->

#### Description 

<!--REF #_command_.DROP REMOTE USER.Summary-->The **DROP REMOTE USER** command disconnects a specific user remotely connected to the 4D Server.<!-- END REF--> 

In *userSession*, pass the session ID of the user you want to disconnect from the server. You can retrieve the session ID with the [Process activity](../commands/process-activity.md) command.

**Note:** This command is executed asynchronously and can only be executed on 4D Server. If the method calling the command is executed locally on a remote client or in 4D single user, **DROP REMOTE USER** does nothing.

#### Example 

You want to drop a specific remote user:

```4d
  // Method to be executed on server
 var $userCol : Collection
 var $element : Object
 
  //disconnect the remote user Vanessa Talbot
 $userCol:=Get process activity(Sessions only).sessions.query("systemUserName = :1";"Vanessa")
 For each($element;$userCol)
    DROP REMOTE USER($element.ID)
 End for each
```

#### See also 

[REJECT NEW REMOTE CONNECTIONS](reject-new-remote-connections.md)  
[SEND MESSAGE TO REMOTE USER](send-message-to-remote-user.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1633 |
| Thread safe | &check; |


