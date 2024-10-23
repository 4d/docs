---
id: qr-move-column
title: QR MOVE COLUMN
slug: /commands/qr-move-column
displayed_sidebar: docs
---

<!--REF #_command_.QR MOVE COLUMN.Syntax-->**QR MOVE COLUMN** ( *area* ; *column* ; *newPos* )<!-- END REF-->
<!--REF #_command_.QR MOVE COLUMN.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| column | Integer | &#8594;  | Column number |
| newPos | Integer | &#8594;  | New position for column |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.QR MOVE COLUMN.Summary-->The **QR MOVE COLUMN** command moves the column currently found at the *column* position to the *newPos* position.<!-- END REF-->

Both the *column* and *newPos* parameters must be valid column numbers (between 1 and the total number of columns in the report); otherwise, the error -9852 is returned. 

**Note:** This command can be used with list reports only.

#### Example 

You have designed the following report:

![](../assets/en/commands/pict2569470.en.png)

If you execute:

```4d
 QR MOVE COLUMN(area;3;4)
```

The result is:

![](../assets/en/commands/pict2569472.en.png)
