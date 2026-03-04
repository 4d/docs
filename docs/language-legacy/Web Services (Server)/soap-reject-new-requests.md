---
id: soap-reject-new-requests
title: SOAP REJECT NEW REQUESTS
slug: /commands/soap-reject-new-requests
displayed_sidebar: docs
---

<!--REF #_command_.SOAP REJECT NEW REQUESTS.Syntax-->**SOAP REJECT NEW REQUESTS** ( *rejectStatus* : Boolean )<!-- END REF-->
<!--REF #_command_.SOAP REJECT NEW REQUESTS.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| rejectStatus | Boolean | &#8594;  | True if new requests are rejected, else false |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|17 R4|Created|

</details>
</div>

## Description 

<!--REF #_command_.SOAP REJECT NEW REQUESTS.Summary-->The **SOAP REJECT NEW REQUESTS** command specifies whether or not the Web Services server accepts new SOAP requests.<!-- END REF--> 

In *rejectStatus*, pass **True** to reject new SOAP requests. Passing **False** specifies that new SOAP requests are allowed. 

**Note**: This command can only be executed on 4D Server. If the method calling the command is executed locally on a remote client or in 4D single user, **SOAP REJECT NEW REQUESTS** does nothing.

## Example 

You want to deny any new requests to your Web Services server:

```4d
  //method to be executed on server
 If(WEB Get server info.SOAPServerStarted)
    SOAP REJECT NEW REQUESTS(True)
 End if
```

## See also 

[REJECT NEW REMOTE CONNECTIONS](../commands/reject-new-remote-connections)  
[WEB Get server info](../commands/web-get-server-info)  

## Properties

|  |  |
| --- | --- |
| Command number | 1636 |
| Thread safe | yes |


