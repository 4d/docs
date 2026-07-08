---
id: query-selection-by-formula
title: QUERY SELECTION BY FORMULA
slug: /commands/query-selection-by-formula
displayed_sidebar: docs
---

<!--REF #_command_.QUERY SELECTION BY FORMULA.Syntax-->**QUERY SELECTION BY FORMULA** ( *aTable* : Table {; *queryFormula* : Expression} )<!-- END REF-->
<!--REF #_command_.QUERY SELECTION BY FORMULA.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to return a selection of records |
| queryFormula | Expression | &#8594;  | Query formula |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL Release 2|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.QUERY SELECTION BY FORMULA.Summary-->**QUERY SELECTION BY FORMULA** looks for records in *aTable*.<!-- END REF-->changes the current selection of *aTable* for the current process and makes the first record of the new selection the current record. 

**QUERY SELECTION BY FORMULA** performs the same actions as [QUERY BY FORMULA](../commands/query-by-formula). The difference between the two commands is the scope of the query:

* [QUERY BY FORMULA](../commands/query-by-formula) looks for records among all the records in the table.
* **QUERY SELECTION BY FORMULA** looks for records among the records currently selected in the table.

For more information, see the description of the [QUERY BY FORMULA](../commands/query-by-formula) command.

## See also 

[QUERY](../commands/query)  
[QUERY BY FORMULA](../commands/query-by-formula)  
[QUERY SELECTION](../commands/query-selection)  

## Properties

|  |  |
| --- | --- |
| Command number | 207 |
| Thread safe | yes |
| Changes current record ||
| Changes current selection ||


