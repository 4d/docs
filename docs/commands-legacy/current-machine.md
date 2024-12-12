---
id: current-machine
title: Current machine
slug: /commands/current-machine
displayed_sidebar: docs
---

<!--REF #_command_.Current machine.Syntax-->**Current machine**  : Text<!-- END REF-->
<!--REF #_command_.Current machine.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Text | &#8592; | Network name of the machine |

<!-- END REF-->

#### Description 

<!--REF #_command_.Current machine.Summary-->The Current machine command returns the name of the machine as set in the network parameters of the operating system.<!-- END REF-->

#### Example 

Even if you are not running with the Client/Server version of the 4D environment, your application can include some network services that require your machine to be correctly configured. In the of your application, you write:

```4d
 If((Current machine="")|(Current system user=""))
  //Display a dialog box asking the user to setup the Network identity of his or her machine
 End if
```

#### See also 

[Current system user](current-system-user.md)  