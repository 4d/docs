---
id: cut-named-selection
title: CUT NAMED SELECTION
slug: /commands/cut-named-selection
displayed_sidebar: docs
---

<!--REF #_command_.CUT NAMED SELECTION.Syntax-->**CUT NAMED SELECTION** ( {*aTable* : Table ;} *name* : Text )<!-- END REF-->
<!--REF #_command_.CUT NAMED SELECTION.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table from which to cut selection, or Default table, if omitted |
| name | Text | &#8594;  | Name of the named selection to create |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.CUT NAMED SELECTION.Summary-->**CUT NAMED SELECTION** creates a named selection *name* and moves the current selection of *aTable* to it.<!-- END REF--> This command differs from [COPY NAMED SELECTION](../commands/copy-named-selection) in that it does not copy the current selection, but moves the current selection of *table* itself.

After the command has been executed, the current selection of *aTable* in the current process becomes empty. Therefore, **CUT NAMED SELECTION** should not be used while a record is being modified.

**CUT NAMED SELECTION** is more memory efficient than [COPY NAMED SELECTION](../commands/copy-named-selection). With [COPY NAMED SELECTION](../commands/copy-named-selection), 4 bytes times the number of selected records is duplicated in memory. With **CUT NAMED SELECTION**, only the reference to the list is moved.

## Example 

The following method empties the current selection of a table *\[Customers\]*:

```4d
 CUT NAMED SELECTION([Customers];"ToBeCleared")
 CLEAR NAMED SELECTION("ToBeCleared")
```

## See also 

[CLEAR NAMED SELECTION](../commands/clear-named-selection)  
[COPY NAMED SELECTION](../commands/copy-named-selection)  
[USE NAMED SELECTION](../commands/use-named-selection)  

## Properties

|  |  |
| --- | --- |
| Command number | 334 |
| Thread safe | yes |
| Changes current selection ||


