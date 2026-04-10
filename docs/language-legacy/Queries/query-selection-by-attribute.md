---
id: query-selection-by-attribute
title: QUERY SELECTION BY ATTRIBUTE
slug: /commands/query-selection-by-attribute
displayed_sidebar: docs
---

<!--REF #_command_.QUERY SELECTION BY ATTRIBUTE.Syntax-->**QUERY SELECTION BY ATTRIBUTE** ( {*aTable* : Table ;}{*conjOp* : &, \|, # ;} *objectField* : Field ; *attributePath* : Text ; *queryOp* :  Text, >, <, >=, <=, #, =, \|, % ; *value* : Text, Real, Date, Time {; *} )<!-- END REF-->
<!--REF #_command_.QUERY SELECTION BY ATTRIBUTE.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to return a selection of records, or Default table if omitted |
| conjOp | &, \|, # | &#8594;  | Conjunction operator to use to join multiple queries (if any) |
| objectField | Field | &#8594;  | Object field to query attributes |
| attributePath | Text | &#8594;  | Name or path of attribute |
| queryOp | Text, Operator  | &#8594;  | Query operator (comparator) |
| value | Text, Real, Date, Time | &#8594;  | Value to compare |
| * | Operator | &#8594;  | Continue query flag |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|16 R2|Modified|
|16|Created|

</details>
</div>

## Description 

<!--REF #_command_.QUERY SELECTION BY ATTRIBUTE.Summary-->**QUERY SELECTION BY ATTRIBUTE** works and performs the same actions as [QUERY BY ATTRIBUTE](../commands/query-by-attribute).<!-- END REF--> The difference between these two commands is the scope of the query:

* [QUERY BY ATTRIBUTE](../commands/query-by-attribute) looks for records among all the records in the table.
* **QUERY SELECTION BY ATTRIBUTE** looks for records among the records currently selected in the table.

**QUERY SELECTION BY ATTRIBUTE** looks for records in *aTable*. The **QUERY SELECTION BY ATTRIBUTE** command changes the current selection of *aTable* for the current process and makes the first record of the new selection the current record.

For more information, see the description of the [QUERY BY ATTRIBUTE](../commands/query-by-attribute) command.

The **QUERY SELECTION BY ATTRIBUTE** command is useful when a query cannot be defined using a combination of [QUERY BY ATTRIBUTE](../commands/query-by-attribute) (and even [QUERY](../commands/query)) calls joined with the \* parameter. Typically, this is the case when you want to query a current selection that does not result from a previous query, but from a command such as [USE SET](../commands/use-set). 

## Example 

You want to find people with an age between 20 and 30, among the records that were previously highlighted by the user:

```4d
 USE SET("UserSet") //creates a new current selection
 QUERY SELECTION BY ATTRIBUTE([People];[People]OB_Info;"age";>;20;*)
 QUERY SELECTION BY ATTRIBUTE([People];&;[People]OB_Info;"age";<;30) //triggers the query
```

## See also 

[QUERY BY ATTRIBUTE](../commands/query-by-attribute)  

## Properties

|  |  |
| --- | --- |
| Command number | 1424 |
| Thread safe | yes |
| Modifies variables | OK |
| Changes current record ||
| Changes current selection ||


