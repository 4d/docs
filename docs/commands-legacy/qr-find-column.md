---
id: qr-find-column
title: QR Find column
slug: /commands/qr-find-column
displayed_sidebar: docs
---

<!--REF #_command_.QR Find column.Syntax-->**QR Find column** ( *area* ; *expression* ) -> Function result<!-- END REF-->
<!--REF #_command_.QR Find column.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| expression | Text, Pointer | &#8594;  | Column object |
| Function result | Longint | &#8592; | Number of the column |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.QR Find column.Summary-->The QR Find column command returns the number of the first column whose contents match the *expression* passed in parameter.<!-- END REF-->

*expression* can either be a string or a pointer.

QR Find column returns –1 if nothing has been found.

If you pass an invalid area number, the error -9850 will be generated.

#### Example 

The following code retrieves the column number that holds the field \[G.NQR Tests\]Quarter and deletes that column:

```4d
 $NumColumn:=QR Find column(MyArea;->[G.NQR Tests]Quarter)
```

or:

```4d
 $NumColumn:=QR Find column(MyArea;"[G.NQR Tests]Quarter")
```

followed by:

```4d
 If($NumColumn#-1)
    QR DELETE COLUMN(MyArea;$NumColumn)
 End if
```
