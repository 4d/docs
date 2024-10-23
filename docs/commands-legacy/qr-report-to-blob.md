---
id: qr-report-to-blob
title: QR REPORT TO BLOB
slug: /commands/qr-report-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.QR REPORT TO BLOB.Syntax-->**QR REPORT TO BLOB** ( *area* ; *blob* )<!-- END REF-->
<!--REF #_command_.QR REPORT TO BLOB.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| blob | Blob | &#8592; | BLOB to house the Quick Report |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.QR REPORT TO BLOB.Summary-->The QR REPORT TO BLOB command places the report whose reference was passed in *area* in a BLOB (variable or field).<!-- END REF-->

If you pass an invalid *area* number, the error -9850 will be generated.

#### Example 

The following statement assigns the Quick Report stored in MyArea into a BLOB Field.

```4d
 QR REPORT TO BLOB(MyArea;[Table 1]Field4)
```

#### See also 

[QR BLOB TO REPORT](qr-blob-to-report.md)  