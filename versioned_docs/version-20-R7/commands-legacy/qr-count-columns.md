---
id: qr-count-columns
title: QR Count columns
slug: /commands/qr-count-columns
displayed_sidebar: docs
---

<!--REF #_command_.QR Count columns.Syntax-->**QR Count columns** ( *area* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Count columns.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| Function result | Integer | &#8592; | Number of columns in area |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.QR Count columns.Summary-->The QR Count columns command returns the number of columns present in the Quick Report *area*.<!-- END REF-->

If you pass an invalid area number, the error -9850 will be generated.

#### Example 

The following code retrieves the column count and inserts a column to the right of the rightmost existing column:

```4d
 $ColNb:=QR Count columns(MyArea)
 QR INSERT COLUMN(MyArea;$ColNb+1;->[Table 1]Field2)
```

#### See also 

[QR DELETE COLUMN](qr-delete-column.md)  
[QR INSERT COLUMN](qr-insert-column.md)  