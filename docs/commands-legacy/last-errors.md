---
id: last-errors
title: Last errors
slug: /commands/last-errors
displayed_sidebar: docs
---

<!--REF #_command_.Last errors.Syntax-->**Last errors**  -> Function result<!-- END REF-->
<!--REF #_command_.Last errors.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Collection | &#x1F850; | Collection of error objects |

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

**Note:** See also the [GET LAST ERROR STACK](get-last-error-stack.md) legacy command that returns the same information as arrays. 

#### See also 

[GET LAST ERROR STACK](get-last-error-stack.md)  
[ON ERR CALL](on-err-call.md)  
[throw](throw.md)  