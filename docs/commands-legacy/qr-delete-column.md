---
id: qr-delete-column
title: QR DELETE COLUMN
slug: /commands/qr-delete-column
displayed_sidebar: docs
---

<!--REF #_command_.QR DELETE COLUMN.Syntax-->**QR DELETE COLUMN** ( *area* ; *colNumber* )<!-- END REF-->
<!--REF #_command_.QR DELETE COLUMN.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| colNumber | Integer | &#8594;  | Column number |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.QR DELETE COLUMN.Summary-->The QR DELETE COLUMN command deletes the column in *area* whose number was passed in *colNumber*.<!-- END REF--> This command does not apply to cross-table reports.

If you pass an invalid *area* number, the error -9850 will be generated.  
If you pass an invalid *column* number, the error -9852 will be generated.

#### Example 

The following example makes sure the report is a list report and deletes the third column: 

```4d
 If(QR Get report kind(MyArea)=qr list report)
    QR DELETE COLUMN(MyArea;3)
 End if
```

#### See also 

[QR INSERT COLUMN](qr-insert-column.md)  