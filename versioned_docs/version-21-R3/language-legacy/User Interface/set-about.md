---
id: set-about
title: SET ABOUT
slug: /commands/set-about
displayed_sidebar: docs
---

<!--REF #_command_.SET ABOUT.Syntax-->**SET ABOUT** ( *itemText* : Text ; *method* : Text )<!-- END REF-->
<!--REF #_command_.SET ABOUT.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| itemText | Text | &#8594;  | New About menu item text |
| method | Text | &#8594;  | Name of method to execute when menu item is chosen |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|2004.4|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.SET ABOUT.Summary-->The **SET ABOUT** command changes the **About 4D** menu command in the **Help** menu (Windows) or in the **Application** menu (macOS) menu to *itemText*.<!-- END REF--> 

After the call, when a user selects this menu command in Design or Application mode, *method* will be called. Typically, this method can open a dialog box to give version information about your application.

This command is used with 4D (all modes), 4D Desktop and 4D Server. A new process is created when it is run on a server machine.

**Note:** On Windows, this command modifies the "About 4D" line in the **Help** menu created by the [SET HELP MENU](../commands/set-help-menu) command. 

## Example 1 

The following example replaces the **About** menu command with the **About Scheduler** menu command. The ABOUT method displays a custom About box:

```4d
 SET ABOUT("About Scheduler…";"ABOUT")
```

## Example 2 

The following example resets the About 4D menu command:

```4d
 SET ABOUT("About 4D";"")
```

## See also 

[SET HELP MENU](../commands/set-help-menu)  

## Properties

|  |  |
| --- | --- |
| Command number | 316 |
| Thread safe | no |


