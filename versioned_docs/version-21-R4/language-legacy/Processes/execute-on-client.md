---
id: execute-on-client
title: EXECUTE ON CLIENT
slug: /commands/execute-on-client
displayed_sidebar: docs
---

<!--REF #_command_.EXECUTE ON CLIENT.Syntax-->**EXECUTE ON CLIENT** ( *clientName* : Text ; *methodName* : Text {; *...param* : any} )<!-- END REF-->
<!--REF #_command_.EXECUTE ON CLIENT.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| clientName | Text | &#8594;  | 4D Client’s registered name |
| methodName | Text | &#8594;  | Name of the method to execute |
| param | any| &#8594;  | Method’s parameter(s) |
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

<!--REF #_command_.EXECUTE ON CLIENT.Summary-->The **EXECUTE ON CLIENT** command forces the execution of the *methodName* method, with the parameters *param1.<!-- END REF-->.. paramN*, if necessary, on the registered 4D Client whose name is *clientName*. 4D Client’s registered name is defined by the [REGISTER CLIENT](../commands/register-client) command. 

This command can be called from a 4D Client or a stored method from 4D Server. 

If the method requires one or more parameters, pass them after the name of the method.   
The execution of the method on 4D Client is done in a process automatically created on the client workstation, and its name will be the 4D Client’s registered name. 

If this command is called many times in a row on the same 4D Client, the execution orders will be stacked. Therefore, the methods will be treated one after another in asynchronous mode. The more methods that are stacked, the bigger the workload is for the 4D Client. You can know the state of the workload of each client by using the [GET REGISTERED CLIENTS](../commands/get-registered-clients) command.

**Note:** The stacking of the execution orders cannot be modified or stopped unless 4D Client is unregistered by using the [UNREGISTER CLIENT](../commands/unregister-client) command.

You can simultaneously execute the same method on many or all of the registered 4D Clients. To do so, use the wildcard character (@) in the *clientName* parameter.

## Example 1 

Let’s assume that you want to execute the “GenerateNums” method on the “Client1” client station:

```4d
 EXECUTE ON CLIENT("Client1";"GenerateNums";12;$a;"Text")
```

## Example 2 

If you want all the clients to execute the “EmptyTemp” method:

```4d
 EXECUTE ON CLIENT("@";"EmptyTemp")
```

## Example 3 

Refer to the example of the [REGISTER CLIENT](../commands/register-client) command.

## System variables and sets 

The **OK** system variable is equal to 1 if 4D Server has correctly received the execution request of a method; however, this does not guarantee that the method has been properly executed by 4D Client.

## See also 

[Execute on server](../commands/execute-on-server)  
[GET REGISTERED CLIENTS](../commands/get-registered-clients)  
[REGISTER CLIENT](../commands/register-client)  
[UNREGISTER CLIENT](../commands/unregister-client)  

## Properties

|  |  |
| --- | --- |
| Command number | 651 |
| Thread safe | no |
| Modifies variables | OK |


