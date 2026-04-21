---
id: before-selection
title: Before selection
slug: /commands/before-selection
displayed_sidebar: docs
---

<!--REF #_command_.Before selection.Syntax-->**Before selection** ( {*aTable* : Table} ) : Boolean<!-- END REF-->
<!--REF #_command_.Before selection.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to test if record pointer is before the first selected record, or Default table, if omitted |
| Function result | Boolean | &#8592; | Yes (TRUE) or No (FALSE) |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.Before selection.Summary-->**Before selection** returns TRUE when the current record pointer is before the first record of the current selection of *table*.<!-- END REF-->is commonly used to check whether or not [PREVIOUS RECORD](../commands/previous-record) has moved the current record pointer before the first record. If the current selection is empty, **Before selection** returns TRUE.

To move the current record pointer back into the selection, use [FIRST RECORD](../commands/first-record), [LAST RECORD](../commands/last-record) or [GOTO SELECTED RECORD](../commands/goto-selected-record). [NEXT RECORD](../commands/next-record) does not move the pointer back into the selection.

**Before selection** also returns TRUE in the first header when a report is being printed with [PRINT SELECTION](../commands/print-selection) or from the Print menu. You can use the following code to test for the first header and print a special header for the first page:

```4d
  // Method of a form being used as output form for a summary report
 $vpFormTable:=Current form table
 Case of
  // ...
    :(Form event code=On Header)
  // A header area is about to be printed
       Case of
          :(Before selection($vpFormTable->))
  // Code for the first break header goes here
  // ...
       End case
 End case
```

## Example 

This form method is used during the printing of a report. It sets a variable, *vTitle*, to print in the Header area on the first page:

```4d
  // [Finances];"Summary" Form Method
 Case of
  // ...
    :(Form event code=On Header)
       Case of
          :(Before selection([Finances))
             vTitle:="Corporate Report 1997" // Set the title for the first page
          Else
             vTitle:="" // Clear the title for all other pages
       End case
 End case
```

## See also 

[End selection](../commands/end-selection)  
[FIRST RECORD](../commands/first-record)  
[Form event code](../commands/form-event-code)  
[PREVIOUS RECORD](../commands/previous-record)  
[PRINT SELECTION](../commands/print-selection)  

## Properties

|  |  |
| --- | --- |
| Command number | 198 |
| Thread safe | yes |



