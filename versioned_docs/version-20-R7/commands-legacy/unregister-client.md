---
id: unregister-client
title: UNREGISTER CLIENT
slug: /commands/unregister-client
displayed_sidebar: docs
---

<!--REF #_command_.UNREGISTER CLIENT.Syntax-->**UNREGISTER CLIENT**<!-- END REF-->
<!--REF #_command_.UNREGISTER CLIENT.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.UNREGISTER CLIENT.Summary-->The **UNREGISTER CLIENT** command “unregisters” a 4D client station.<!-- END REF--> The client must have already been registered by the [REGISTER CLIENT](register-client.md) command. 

**Note:** A 4D client is automatically unregistered when the user quits the application. 

If the client workstation was not previously registered or if the command was executed on 4D in local mode, the command has no effect. 

#### Example 

Refer to the example for the [REGISTER CLIENT](register-client.md) command.

#### System variables and sets 

If the client is correctly unregistered, the OK system variable is set to 1\. If the client was not registered, OK is set to 0.

#### See also 

[EXECUTE ON CLIENT](execute-on-client.md)  
[GET REGISTERED CLIENTS](get-registered-clients.md)  
[REGISTER CLIENT](register-client.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 649 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


