---
id: execute-on-client
title: EXECUTE ON CLIENT
slug: /commands/execute-on-client
displayed_sidebar: docs
---

<!--REF #_command_.EXECUTE ON CLIENT.Syntax-->**EXECUTE ON CLIENT** ( *clientName* ; *methodName* {; *param*}{; *param2* ; ... ; *paramN*} )<!-- END REF-->
<!--REF #_command_.EXECUTE ON CLIENT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| clientName | Text | &#8594;  | 4D Client’s registered name |
| methodName | Text | &#8594;  | Name of the method to execute |
| param | &#8594;  | Method’s parameter(s) |

<!-- END REF-->

#### Description 

<!--REF #_command_.EXECUTE ON CLIENT.Summary-->The **EXECUTE ON CLIENT** command forces the execution of the *methodName* method, with the parameters *param1.<!-- END REF-->.. paramN*, if necessary, on the registered 4D Client whose name is *clientName*. 4D Client’s registered name is defined by the [REGISTER CLIENT](register-client.md) command. 

This command can be called from a 4D Client or a stored method from 4D Server. 

If the method requires one or more parameters, pass them after the name of the method.   
The execution of the method on 4D Client is done in a process automatically created on the client workstation, and its name will be the 4D Client’s registered name. 

If this command is called many times in a row on the same 4D Client, the execution orders will be stacked. Therefore, the methods will be treated one after another in asynchronous mode. The more methods that are stacked, the bigger the workload is for the 4D Client. You can know the state of the workload of each client by using the [GET REGISTERED CLIENTS](get-registered-clients.md) command.

**Note:** The stacking of the execution orders cannot be modified or stopped unless 4D Client is unregistered by using the [UNREGISTER CLIENT](unregister-client.md) command.

You can simultaneously execute the same method on many or all of the registered 4D Clients. To do so, use the wildcard character (@) in the *clientName* parameter.

#### Example 1 

Let’s assume that you want to execute the “GenerateNums” method on the “Client1” client station:

```4d
 EXECUTE ON CLIENT("Client1";"GenerateNums";12;$a;"Text")
```

#### Example 2 

If you want all the clients to execute the “EmptyTemp” method:

```4d
 EXECUTE ON CLIENT("@";"EmptyTemp")
```

#### Example 3 

Refer to the example of the [REGISTER CLIENT](register-client.md) command.

#### System variables and sets 

The **OK** system variable is equal to 1 if 4D Server has correctly received the execution request of a method; however, this does not guarantee that the method has been properly executed by 4D Client.

#### See also 

[Execute on server](execute-on-server.md)  
[GET REGISTERED CLIENTS](get-registered-clients.md)  
[REGISTER CLIENT](register-client.md)  
[UNREGISTER CLIENT](unregister-client.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 651 |
| Thread safe | &cross; |
| Modifies variables | OK |


