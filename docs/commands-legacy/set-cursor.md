---
id: set-cursor
title: SET CURSOR
slug: /commands/set-cursor
displayed_sidebar: docs
---

<!--REF #_command_.SET CURSOR.Syntax-->**SET CURSOR** {( *cursor* )}<!-- END REF-->
<!--REF #_command_.SET CURSOR.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| cursor | Integer | &#8594;  | Cursor resource number |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.SET CURSOR.Summary-->The SET CURSOR command changes the mouse cursor to the system cursor whose ID number you pass in *cursor*.<!-- END REF-->

This command must be called in the context of the On Mouse Move [Form event code](../commands/form-event-code.md). 

To restore the standard mouse cursor, call the command without any parameter.

Here are the cursors that can be passed in the *cursor* parameter:

| **Number** | **Cursor**                                    |
| ---------- | --------------------------------------------- |
| 1          | ![](../assets/en/commands/pict14679.en.png)   |
| 2          | ![](../assets/en/commands/pict14680.en.png)   |
| 4          | ![](../assets/en/commands/pict2478657.en.png) |
| 9000       | ![](../assets/en/commands/pict2478660.en.png) |
| 9001       | ![](../assets/en/commands/pict2478662.en.png) |
| 9003       | ![](../assets/en/commands/pict2478664.en.png) |
| 9004       | ![](../assets/en/commands/pict2478666.en.png) |
| 9005       | ![](../assets/en/commands/pict2478669.en.png) |
| 9006       | ![](../assets/en/commands/pict2478671.en.png) |
| 9021       | ![](../assets/en/commands/pict2478674.en.png) |
| 351        | ![](../assets/en/commands/pict2478676.en.png) |
| 9010       | ![](../assets/en/commands/pict2478688.en.png) |
| 9011       | ![](../assets/en/commands/pict2478678.en.png) |
| 9013       | ![](../assets/en/commands/pict2478680.en.png) |
| 9014       | ![](../assets/en/commands/pict2478682.en.png) |
| 9015       | ![](../assets/en/commands/pict2478686.en.png) |
| 9016       | ![](../assets/en/commands/pict2478684.en.png) |
| 9017       | ![](../assets/en/commands/pict2478690.en.png) |
| 9019       | ![](../assets/en/commands/pict2478692.en.png) |
| 9020       | ![](../assets/en/commands/pict2478694.en.png) |
| 559        | ![](../assets/en/commands/pict2478698.en.png) |
| 560        | ![](../assets/en/commands/pict2478696.en.png) |

**Note:** Cursor availability and appearance may vary depending on the operating system.

#### Example 

You want the cursor to be displayed as a ![](../assets/en/commands/pict2478692.en.png) when the mouse moves over a variable area in the form. In the object method of the variable, you can write:

```4d
 If(Form event code=On Mouse Move)
    SET CURSOR(9019)
 End if
```
