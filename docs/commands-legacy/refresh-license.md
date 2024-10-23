---
id: refresh-license
title: Refresh license
slug: /commands/refresh-license
displayed_sidebar: docs
---

<!--REF #_command_.Refresh license.Syntax-->**Refresh license** -> Function result<!-- END REF-->
<!--REF #_command_.Refresh license.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Object | &#8592; | Status object |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Refresh license.Summary-->The **Refresh license** command updates the current 4D Server license.<!-- END REF--> It connects you to the 4D customer database and automatically activates any new or updated licenses (*e.g.*, additional purchased clients) related to the current license.

**Returned object**

The object returned by **Refresh license** contains the following properties:  
  
| **Property** | **Type** | **Description**                                            |
| ------------ | -------- | ---------------------------------------------------------- |
| success      | boolean  | True if the refresh action is successful, False otherwise. |
| status       | number   | Status code                                                |
| statusText   | text     | Status description                                         |
| tips         | text     | Suggestions to resolve error.                              |

**Note**: This command can only be executed on 4D Server. If the method calling the command is executed locally on a remote client or in 4D single user, **Refresh license** does nothing.

#### Example 

You want to update your license and receive a message when it's completed:

```4d
  // Method to be executed on server
 var $res : Object
 $res:=Refresh license
 If($res.success)
    ALERT("Success")
 Else
    ALERT($res.statusText)
 End if
```
