---
id: soap-reject-new-requests
title: SOAP REJECT NEW REQUESTS
slug: /commands/soap-reject-new-requests
displayed_sidebar: docs
---

<!--REF #_command_.SOAP REJECT NEW REQUESTS.Syntax-->**SOAP REJECT NEW REQUESTS** ( *rejectStatus* )<!-- END REF-->
<!--REF #_command_.SOAP REJECT NEW REQUESTS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| rejectStatus | Boolean | &#8594;  | True if new requests are rejected, else false |

<!-- END REF-->

#### Description 

<!--REF #_command_.SOAP REJECT NEW REQUESTS.Summary-->The **SOAP REJECT NEW REQUESTS** command specifies whether or not the Web Services server accepts new SOAP requests.<!-- END REF--> 

In *rejectStatus*, pass **True** to reject new SOAP requests. Passing **False** specifies that new SOAP requests are allowed. 

**Note**: This command can only be executed on 4D Server. If the method calling the command is executed locally on a remote client or in 4D single user, **SOAP REJECT NEW REQUESTS** does nothing.

#### Example 

You want to deny any new requests to your Web Services server:

```4d
  //method to be executed on server
 If(WEB Get server info.SOAPServerStarted)
    SOAP REJECT NEW REQUESTS(True)
 End if
```

#### See also 

[REJECT NEW REMOTE CONNECTIONS](reject-new-remote-connections.md)  
[WEB Get server info](web-get-server-info.md)  