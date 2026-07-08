---
id: get-registered-clients
title: GET REGISTERED CLIENTS
slug: /commands/get-registered-clients
displayed_sidebar: docs
---

<!--REF #_command_.GET REGISTERED CLIENTS.Syntax-->**GET REGISTERED CLIENTS** ( *clientList* : Text array ; *methods* : Integer array )<!-- END REF-->
<!--REF #_command_.GET REGISTERED CLIENTS.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| clientList | Text array | &#8592; | List of the saved 4D Clients |
| methods | Integer array | &#8592; | List of the methods to be executed |
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

<!--REF #_command_.GET REGISTERED CLIENTS.Summary-->The **GET REGISTERED CLIENTS** command fills two arrays<!-- END REF-->:

* *clientLists* contains the list of clients who were “registered” by using the [REGISTER CLIENT](../commands/register-client) command.
* *methods* supplies the list of each client’s “workload”. The workload is the number of methods that a 4D Client must still execute by calling the [EXECUTE ON CLIENT](../commands/execute-on-client) command (for more information, please refer to the description of the [EXECUTE ON CLIENT](../commands/execute-on-client) command).

## Example 1 

Let’s assume that you want to obtain a list of all the registered clients and the methods that remain to be executed: 

```4d
 ARRAY TEXT($clients;0)
 ARRAY LONGINT($methods;0)
 GET REGISTERED CLIENTS($clients;$methods)
```

## Example 2 

Refer to the example of the [REGISTER CLIENT](../commands/register-client) command.

## System variables and sets 

If the operation was successful, the OK system variable is equal to 1.

## See also 

[EXECUTE ON CLIENT](../commands/execute-on-client)  
[REGISTER CLIENT](../commands/register-client)  
[UNREGISTER CLIENT](../commands/unregister-client)  

## Properties

|  |  |
| --- | --- |
| Command number | 650 |
| Thread safe | no |
| Modifies variables | OK |


