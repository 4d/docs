---
id: application-type
title: Application type
slug: /commands/application-type
displayed_sidebar: docs
---

<!--REF #_command_.Application type.Syntax-->**Application type**  : Integer<!-- END REF-->
<!--REF #_command_.Application type.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Integer | &#8592; | Numeric value denoting the type of the application |

<!-- END REF-->

#### Description 

<!--REF #_command_.Application type.Summary-->The Application type command returns a numeric value that denotes the type of 4D environment that you are running.<!-- END REF--> 4D provides the following predefined constants:  

| Constant          | Value | Comment                                                                                                     |
| ----------------- | ----- | ----------------------------------------------------------------------------------------------------------- |
| 4D Desktop        | 3     |                                                                                                             |
| 4D Local mode     | 0     |                                                                                                             |
| 4D Remote mode    | 4     |                                                                                                             |
| 4D Server         | 5     |                                                                                                             |
| 4D Volume desktop | 1     |                                                                                                             |
| tool4d            | 6     | For more information, see [tool4D](http://developer.4d.com/docs/next/Admin/cli#tool4d) on developer.4d.com. |

**Note:** *4D Desktop* incorporates certain deployment offers, such as, for example,"4D SQL Desktop".

#### Example 

Somewhere in your code, other than in the *On Server Startup Database Method*, you need to check if you are running 4D Server. You can write:

```4d
 If(Application type=4D Server)
  //Perform appropriate actions
 End if
```

#### See also 

[Application version](application-version.md)  
[Version type](version-type.md)  