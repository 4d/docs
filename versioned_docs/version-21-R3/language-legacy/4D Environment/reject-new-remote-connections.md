---
id: reject-new-remote-connections
title: REJECT NEW REMOTE CONNECTIONS
slug: /commands/reject-new-remote-connections
displayed_sidebar: docs
---

<!--REF #_command_.REJECT NEW REMOTE CONNECTIONS.Syntax-->**REJECT NEW REMOTE CONNECTIONS** ( *rejectStatus* : Boolean )<!-- END REF-->
<!--REF #_command_.REJECT NEW REMOTE CONNECTIONS.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| rejectStatus | Boolean | &#8594;  | True if new connections are rejected, else false |
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

<!--REF #_command_.REJECT NEW REMOTE CONNECTIONS.Summary-->The **REJECT NEW REMOTE CONNECTIONS** command specifies whether or not the application server accepts new remote user connections.<!-- END REF--> 

In *rejectStatus*, pass **true** to reject new remote connections. Passing **false**, specifies that new remote connections are allowed.

**Note**: This command can only be executed on 4D Server. If the method calling the command is executed locally on a remote client or in 4D single user, **REJECT NEW REMOTE CONNECTIONS** does nothing.

## Example 

You want to reject or accept new client connections:

```4d
  // Reject the new connections
 REJECT NEW REMOTE CONNECTIONS(True)
  // Execute the maintenance operation
 ...
  // Accept the new connections
 REJECT NEW REMOTE CONNECTIONS(False)
```

## See also 

[DROP REMOTE USER](../commands/drop-remote-user)  
[Application info](../commands/application-info)  
[SOAP REJECT NEW REQUESTS](../commands/soap-reject-new-requests)  

## Properties

|  |  |
| --- | --- |
| Command number | 1635 |
| Thread safe | yes |



