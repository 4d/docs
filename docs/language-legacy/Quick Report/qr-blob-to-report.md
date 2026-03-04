---
id: qr-blob-to-report
title: QR BLOB TO REPORT
slug: /commands/qr-blob-to-report
displayed_sidebar: docs
---

<!--REF #_command_.QR BLOB TO REPORT.Syntax-->**QR BLOB TO REPORT** ( *area* : Integer ; *blob* : Blob )<!-- END REF-->
<!--REF #_command_.QR BLOB TO REPORT.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| Blob | Blob | &#8594;  | BLOB that houses the report |
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

<!--REF #_command_.QR BLOB TO REPORT.Summary-->The QR BLOB TO REPORT command places the report contained in *blob* in the Quick Report area passed in *area*.<!-- END REF--> 

If you pass an invalid *area* number, the error -9850 will be generated.  
If you pass an invalid *blob* parameter, the error -9852 will be generated.

## Example 1 

The following code allows you to display, in MyArea, a report file named “report.4qr” located next to the database structure. The report file does not have to be created with 4D version 2003; it can originate from previous versions:

```4d
 var $doc : Blob
 var MyArea : Integer
 DOCUMENT TO BLOB("report.4qr";$doc)
 QR BLOB TO REPORT(MyArea;$doc)
```

## Example 2 

The following statement retrieves the Quick Report stored in Field4 and displays it in MyArea:

```4d
 QR BLOB TO REPORT(MyArea;[Table 1]Field4)
```

## See also 

[QR REPORT TO BLOB](../commands/qr-report-to-blob)  

## Properties

|  |  |
| --- | --- |
| Command number | 771 |
| Thread safe | no |
| Modifies variables | error |


