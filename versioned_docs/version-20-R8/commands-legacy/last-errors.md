---
id: last-errors
title: Last errors
slug: /commands/last-errors
displayed_sidebar: docs
---

<!--REF #_command_.Last errors.Syntax-->**Last errors**  : Collection<!-- END REF-->
<!--REF #_command_.Last errors.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Collection | &#8592; | Collection of error objects |

<!-- END REF-->

#### Description 

<!--REF #_command_.Last errors.Summary-->The **Last errors** command returns the current stack of errors of the 4D application as a collection of error objects, or **null** if no error occurred.<!-- END REF--> The stack of errors includes objects sent by the [throw](throw.md) command, if any.

Each error object contains the following attributes:

| **Property**       | **Type** | **Description**                                              |
| ------------------ | -------- | ------------------------------------------------------------ |
| errCode            | number   | Error code                                                   |
| message            | text     | Description of the error                                     |
| componentSignature | text     | Signature of the internal component which returned the error |

This command must be called from an on error call method installed by the [ON ERR CALL](on-err-call.md) command.


#### See also 

[ON ERR CALL](on-err-call.md)  
[throw](throw.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1799 |
| Thread safe | &check; |


