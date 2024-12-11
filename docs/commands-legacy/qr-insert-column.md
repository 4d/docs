---
id: qr-insert-column
title: QR INSERT COLUMN
slug: /commands/qr-insert-column
displayed_sidebar: docs
---

<!--REF #_command_.QR INSERT COLUMN.Syntax-->**QR INSERT COLUMN** ( *area* ; *colNumber* ; *object* )<!-- END REF-->
<!--REF #_command_.QR INSERT COLUMN.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| colNumber | Integer | &#8594;  | Column number |
| object | Field, Variable, Pointer | &#8594;  | Object to be inserted in the column |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR INSERT COLUMN.Summary-->The QR INSERT COLUMN command inserts or creates a column at the specified position.<!-- END REF--> Columns located to the right of that position will be shifted accordingly.

*position* is the number of the column, established from left to right.

The default title for the column will be the value passed in *object*.

If you pass an invalid *area* number, the error -9850 will be generated.

**Note:** This command cannot be used with a cross-table report.

#### Example 

The following statement inserts (or creates) a first column in a Quick Report area, inserts “Field1” as column title (default behavior) and populates the contents of the body with values from Field1.

```4d
 QR INSERT COLUMN(MyArea;1;->[Table 1]Field1)
```

#### See also 

[QR DELETE COLUMN](qr-delete-column.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 748 |
| Thread safe | &check; |
| Modifies variables | error |
| Forbidden on the server ||


