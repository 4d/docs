---
id: qr-set-report-table
title: QR SET REPORT TABLE
slug: /commands/qr-set-report-table
displayed_sidebar: docs
---

<!--REF #_command_.QR SET REPORT TABLE.Syntax-->**QR SET REPORT TABLE** ( *area* ; *aTable* )<!-- END REF-->
<!--REF #_command_.QR SET REPORT TABLE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| aTable | Integer | &#8594;  | Table number |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR SET REPORT TABLE.Summary-->The QR SET REPORT TABLE command sets the current table for the report area whose reference was passed in *area* to the table whose number was passed in *aTable*.<!-- END REF-->

It is necessary for a table to be assigned to the report since the report editor will be using the current selection for that table to display the data, perform computations and propagate relations, if needed.

If you pass an invalid *area* number, the error -9850 will be generated.  
If you pass an invalid *table* value, the error -9852 will be generated.

#### See also 

[QR Get report table](qr-get-report-table.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 757 |
| Thread safe | &cross; |
| Modifies variables | error |


