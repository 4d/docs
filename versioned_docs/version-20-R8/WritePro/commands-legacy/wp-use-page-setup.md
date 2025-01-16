---
id: wp-use-page-setup
title: WP USE PAGE SETUP
slug: /WritePro/commands/wp-use-page-setup
displayed_sidebar: docs
---

<!--REF #_command_.WP USE PAGE SETUP.Syntax-->**WP USE PAGE SETUP** ( *wpDoc* )<!-- END REF-->
<!--REF #_command_.WP USE PAGE SETUP.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro document |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.WP USE PAGE SETUP.Summary-->The **WP USE PAGE SETUP** command modifies the current printer page settings based on the 4D Write Pro document attributes for page size and orientation.<!-- END REF--> This command should be called just before [WP PRINT](wp-print.md) in order to synchronize the current printer page settings with the 4D Write Pro document page settings. 

Other settings are defined by the 4D [PRINT SETTINGS](../../commands-legacy/print-settings.md) command. Current print settings are set for the whole 4D session.

#### Example 

Before printing a document, you want to reset its size and orientation to values stored in the document:

```4d
 WP USE PAGE SETUP(writeProDoc)
```

#### See also 

[WP PRINT](wp-print.md)  