---
id: query-selection-by-formula
title: QUERY SELECTION BY FORMULA
slug: /commands/query-selection-by-formula
displayed_sidebar: docs
---

<!--REF #_command_.QUERY SELECTION BY FORMULA.Syntax-->**QUERY SELECTION BY FORMULA** ( *aTable* {; *queryFormula*} )<!-- END REF-->
<!--REF #_command_.QUERY SELECTION BY FORMULA.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to return a selection of records |
| queryFormula | Boolean | &#8594;  | Query formula |

<!-- END REF-->

#### Description 

<!--REF #_command_.QUERY SELECTION BY FORMULA.Summary-->**QUERY SELECTION BY FORMULA** looks for records in *aTable*.<!-- END REF--> **QUERY SELECTION BY FORMULA** changes the current selection of *aTable* for the current process and makes the first record of the new selection the current record. 

**QUERY SELECTION BY FORMULA** performs the same actions as [QUERY BY FORMULA](query-by-formula.md). The difference between the two commands is the scope of the query:

* [QUERY BY FORMULA](query-by-formula.md) looks for records among all the records in the table.
* **QUERY SELECTION BY FORMULA** looks for records among the records currently selected in the table.

For more information, see the description of the [QUERY BY FORMULA](query-by-formula.md) command.

#### See also 

[QUERY](query.md)  
[QUERY BY FORMULA](query-by-formula.md)  
[QUERY SELECTION](query-selection.md)  