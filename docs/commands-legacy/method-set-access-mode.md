---
id: method-set-access-mode
title: METHOD SET ACCESS MODE
slug: /commands/method-set-access-mode
displayed_sidebar: docs
---

<!--REF #_command_.METHOD SET ACCESS MODE.Syntax-->**METHOD SET ACCESS MODE** ( *mode* )<!-- END REF-->
<!--REF #_command_.METHOD SET ACCESS MODE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| mode | Integer | &srarr; | Access mode for locked objects |

<!-- END REF-->

#### Description 

<!--REF #_command_.METHOD SET ACCESS MODE.Summary-->The **METHOD SET ACCESS MODE** command sets the behavior for 4D when you attempt to write access an object already loaded for modification by another user or process.<!-- END REF--> The scope of this command is the current session.

In *mode*, you pass one of the following constants of the *Design Object Access* theme:

| Constant                 | Type    | Value | Comment                                                                                                                                     |
| ------------------------ | ------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| On object locked abort   | Longint | 0     | Loading of object is aborted (default functioning)                                                                                          |
| On object locked confirm | Longint | 2     | 4D displays a dialog box so that you can choose to try again or to abort. In remote mode, this option is not supported (loading is aborted) |
| On object locked retry   | Longint | 1     | 4D keeps attempting to load the object until it has been released                                                                           |
