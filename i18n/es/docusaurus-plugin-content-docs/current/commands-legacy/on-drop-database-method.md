---
id: on-drop-database-method
title: On Drop database method
slug: /commands/on-drop-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Drop database method.Syntax-->**On Drop database method**<!-- END REF-->
<!--REF #_command_.On Drop database method.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### 

<!--REF #_command_.On Drop database method.Summary-->The **On Drop database method** is available in local or remote 4D applications.<!-- END REF-->

This database method is automatically executed in the case of objects being dropped in the 4D application outside of any form or windows context. Different drop actions are supported, depending on the platform and the application type:

| **Action**                                | **Platform(s)**     | **Comment**                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Drop in an empty area of the MDI window   | Windows             | Not available when the database is executed in SDI mode since there is no MDI window in this context (see *SDI mode on Windows* section).                                                                                                                                                                       |
| Drop on the 4D icon in the Dock           | macOS               |                                                                                                                                                                                                                                                                                                                 |
| Drop on the 4D icon in the system desktop | Windows(\*) & macOS | The **On Drop database method** is only called when the application is already launched, except in the case of applications merged with 4D Desktop. In this case, the database method is called even when the application is not launched. This means that it is possible to define custom document signatures. |

(\*) Not supported with 4D Developer 64-bit on Windows because this action launches a new application instance (system feature).

On Mac, you need to hold down the **Option**+**Command** keys during the drop in order for the database method to be called. 

#### Example 

This example can be used to open a 4D Write document that is dropped outside of any form:

```4d
  //On Drop database method
 droppedFile:=Get file from pasteboard(1)
 If(Position(".4W7";droppedFile)=Length(droppedFile)-3)
    externalArea:=Open external window(100;100;500;500;0;droppedFile;"_4D Write")
    WR OPEN DOCUMENT(externalArea;droppedFile)
 End if
```

#### See also 

*Drag and Drop*  