---
id: qr-report-to-blob
title: QR REPORT TO BLOB
slug: /commands/qr-report-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.QR REPORT TO BLOB.Syntax-->**QR REPORT TO BLOB** ( *area* : Integer ; *blob* : Blob )<!-- END REF-->
<!--REF #_command_.QR REPORT TO BLOB.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| Blob | Blob | &#8592; | BLOB to house the Quick Report |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|2003|Created|

</details>
</div>

## Description 

<!--REF #_command_.QR REPORT TO BLOB.Summary-->The QR REPORT TO BLOB command places the report whose reference was passed in *area* in a BLOB (variable or field).<!-- END REF-->

If you pass an invalid *area* number, the error -9850 will be generated.

## Example 

The following statement assigns the Quick Report stored in MyArea into a BLOB Field.

```4d
 QR REPORT TO BLOB(MyArea;[Table 1]Field4)
```

## See also 

[QR BLOB TO REPORT](../commands/qr-blob-to-report)  

## Properties

|  |  |
| --- | --- |
| Command number | 770 |
| Thread safe | no |
| Modifies variables | error |


