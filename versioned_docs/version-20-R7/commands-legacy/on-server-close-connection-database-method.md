---
id: on-server-close-connection-database-method
title: On Server Close Connection database method
slug: /commands/on-server-close-connection-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Server Close Connection database method.Syntax-->$1, $2, $3 -> On Server Close Connection database method<!-- END REF-->
<!--REF #_command_.On Server Close Connection database method.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| $1 | Integer | &#8592; | User ID number used internally by 4D Server to identify users |
| $2 | Integer | &#8592; | Connection ID number used internally by 4D Server to identify a connection |
| $3 | Integer | &#8592; | Obsolete: Always returns 0 but must be declared |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.On Server Close Connection database method.Summary-->The **On Server Close Connection database method** is called once on the Server machine each time a 4D Client process ends.<!-- END REF-->

As for the [On Server Open Connection database method](on-server-open-connection-database-method.md), 4D Server passes three Long Integer parameters to the **On Server Close Connection database method**. On the other hand, no result is expected by 4D Server.

The method must therefore be explicitly declared with three Long Integer parameters:

```4d
 var $1;$2;$3 : Integer
```

This table details the information provided by the three parameters passed to the database method:

| **Parameter** | **Description**                                                            |
| ------------- | -------------------------------------------------------------------------- |
| $1            | User ID number used internally by 4D Server to identify users              |
| $2            | Connection ID number used internally by 4D Server to identify a connection |
| $3            | Obsolete: Always returns 0 but must be declared                            |

The **On Server Close Connection database method** is the exact counterpoint to the [On Server Open Connection database method](on-server-open-connection-database-method.md). For more information and a description of the **4D Client processes**, see the description of this database method.

#### Example 

See the first example for [On Server Open Connection database method](on-server-open-connection-database-method.md).
