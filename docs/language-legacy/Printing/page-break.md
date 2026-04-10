---
id: page-break
title: PAGE BREAK
slug: /commands/page-break
displayed_sidebar: docs
---

<!--REF #_command_.PAGE BREAK.Syntax-->**PAGE BREAK** ({ * })<br/>**PAGE BREAK** ({ > : > })<!-- END REF-->
<!--REF #_command_.PAGE BREAK.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | Cancel printing job started with Print form |
| > | Operator | &#8594;  | Force one printing job |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|2003|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.PAGE BREAK.Summary-->**PAGE BREAK** triggers the printing of the data that has been sent to the printer and ejects the page.<!-- END REF--> **PAGE BREAK** is used with [Print form](../commands/print-form) (in the context of the On Printing Detail form event) to force page breaks and to print the last page created in memory. Do not use **PAGE BREAK** with the [PRINT SELECTION](../commands/print-selection) command. Instead, use [Subtotal](../commands/subtotal) or [BREAK LEVEL](../commands/break-level) with the optional parameter to generate page breaks.

The *\** and *\>* parameters are both optional.

The *\** parameter allows you to cancel a print job started with the [Print form](../commands/print-form) command. Executing this command immediately stops the print job in progress.

**Note:** Under Windows, this mechanism can be disrupted by the spooling properties of the print server. If the printer is configured to start printing immediately, cancelling will not be effective. For the **PAGE BREAK**(\*) command to operate correctly, it is preferable to choose the "Start printing after last page is spooled" property for the printer. 

The *\>* parameter modifies the way in which the **PAGE BREAK** command behaves. This syntax has two effects:

* It holds the print job open until the **PAGE BREAK** command is executed again without a parameter.
* It gives priority to the print job. No other printing can take place until the print job is finished.  
The second option is particularly useful when used with a spooled print job. The > parameter guarantees that the print job will be spooled to one file. This will reduce printing time.

**Note:** When screen printing, if the user clicks on Cancel in the print preview dialog box, the **PAGE BREAK** command sets the system variable OK to 0.

## Example 1 

See example for the [Print form](../commands/print-form) command.

## Example 2 

Refer to the example of the [SET PRINT MARKER](../commands/set-print-marker) command.

## See also 

[CANCEL](../commands/cancel)  
[Print form](../commands/print-form)  

## Properties

|  |  |
| --- | --- |
| Command number | 6 |
| Thread safe | no |
| Modifies variables | OK |



