---
id: qr-run
title: QR RUN
slug: /commands/qr-run
displayed_sidebar: docs
---

<!--REF #_command_.QR RUN.Syntax-->**QR RUN** ( *area* )<!-- END REF-->
<!--REF #_command_.QR RUN.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area to execute |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR RUN.Summary-->The **QR RUN** command executes the report *area* whose reference was passed as parameter with the Quick Report current settings, including the output type.<!-- END REF--> You can use the [QR SET DESTINATION](qr-set-destination.md) command to modify the output type.

The report is executed on the table to which the area belongs. When *area* designates an offscreen area, it is necessary to specify the table to be used via the [QR SET REPORT TABLE](qr-set-report-table.md) command.

If you pass an invalid *area* number, the error -9850 will be generated.

**4D Server:** This command can be executed on 4D Server as part of a stored procedure. In this context, make sure that no dialog box appears on the server machine (except for specific requirements). To do this, you need to call the [QR SET DESTINATION](qr-set-destination.md) command with the "\*" parameter. In case of a printer problem (out of paper, printer disconnected, etc.), no error message is generated. 


#### Properties

|  |  |
| --- | --- |
| Command number | 746 |
| Thread safe | &cross; |
| Modifies variables | error |


