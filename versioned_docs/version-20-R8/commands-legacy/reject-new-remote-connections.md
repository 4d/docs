---
id: reject-new-remote-connections
title: REJECT NEW REMOTE CONNECTIONS
slug: /commands/reject-new-remote-connections
displayed_sidebar: docs
---

<!--REF #_command_.REJECT NEW REMOTE CONNECTIONS.Syntax-->**REJECT NEW REMOTE CONNECTIONS** ( *rejectStatus* )<!-- END REF-->
<!--REF #_command_.REJECT NEW REMOTE CONNECTIONS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| rejectStatus | Boolean | &#8594;  | True if new connections are rejected, else false |

<!-- END REF-->

#### Description 

<!--REF #_command_.REJECT NEW REMOTE CONNECTIONS.Summary-->The **REJECT NEW REMOTE CONNECTIONS** command specifies whether or not the application server accepts new remote user connections.<!-- END REF--> 

In *rejectStatus*, pass **true** to reject new remote connections. Passing **false**, specifies that new remote connections are allowed.

**Note**: This command can only be executed on 4D Server. If the method calling the command is executed locally on a remote client or in 4D single user, **REJECT NEW REMOTE CONNECTIONS** does nothing.

#### Example 

You want to reject or accept new client connections:

```4d
  // Reject the new connections
 REJECT NEW REMOTE CONNECTIONS(True)
  // Execute the maintenance operation
 ...
  // Accept the new connections
 REJECT NEW REMOTE CONNECTIONS(False)
```

#### See also 

[DROP REMOTE USER](drop-remote-user.md)  
[Application info](application-info.md)  
[SOAP REJECT NEW REQUESTS](soap-reject-new-requests.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1635 |
| Thread safe | &check; |


