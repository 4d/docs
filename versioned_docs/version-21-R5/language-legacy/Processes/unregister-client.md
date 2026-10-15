---
id: unregister-client
title: UNREGISTER CLIENT
slug: /commands/unregister-client
displayed_sidebar: docs
---

<!--REF #_command_.UNREGISTER CLIENT.Syntax-->**UNREGISTER CLIENT**<!-- END REF-->
<!--REF #_command_.UNREGISTER CLIENT.Params-->
<div class="no-index">

| Does not require any parameters |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|6.5|Created|

</details>
</div>

## Description 

<!--REF #_command_.UNREGISTER CLIENT.Summary-->The **UNREGISTER CLIENT** command “unregisters” a 4D client station.<!-- END REF--> The client must have already been registered by the [REGISTER CLIENT](../commands/register-client) command. 

**Note:** A 4D client is automatically unregistered when the user quits the application. 

If the client workstation was not previously registered or if the command was executed on 4D in local mode, the command has no effect. 

## Example 

Refer to the example for the [REGISTER CLIENT](../commands/register-client) command.

## System variables and sets 

If the client is correctly unregistered, the OK system variable is set to 1\. If the client was not registered, OK is set to 0.

## See also 

[EXECUTE ON CLIENT](../commands/execute-on-client)  
[GET REGISTERED CLIENTS](../commands/get-registered-clients)  
[REGISTER CLIENT](../commands/register-client)  

## Properties

|  |  |
| --- | --- |
| Command number | 649 |
| Thread safe | no |
| Modifies variables | OK |


