---
id: query-selection-by-attribute
title: QUERY SELECTION BY ATTRIBUTE
slug: /commands/query-selection-by-attribute
displayed_sidebar: docs
---

<!--REF #_command_.QUERY SELECTION BY ATTRIBUTE.Syntax-->**QUERY SELECTION BY ATTRIBUTE** ( {*aTable*}{;}{*conjOp* ;} *objectField* ; *attributePath* ; *queryOp* ; *value* {; *} )<!-- END REF-->
<!--REF #_command_.QUERY SELECTION BY ATTRIBUTE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to return a selection of records, or Default table if omitted |
| conjOp | * | &#8594;  | Conjunction operator to use to join multiple queries (if any) |
| objectField | Field | &#8594;  | Object field to query attributes |
| attributePath | Text | &#8594;  | Name or path of attribute |
| queryOp | *, Text | &#8594;  | Query operator (comparator) |
| value | Text, Number, Date, Time | &#8594;  | Value to compare |
| * | Operator | &#8594;  | Continue query flag |

<!-- END REF-->

#### Description 

<!--REF #_command_.QUERY SELECTION BY ATTRIBUTE.Summary-->**QUERY SELECTION BY ATTRIBUTE** works and performs the same actions as [QUERY BY ATTRIBUTE](query-by-attribute.md).<!-- END REF--> The difference between these two commands is the scope of the query:

* [QUERY BY ATTRIBUTE](query-by-attribute.md) looks for records among all the records in the table.
* **QUERY SELECTION BY ATTRIBUTE** looks for records among the records currently selected in the table.

**QUERY SELECTION BY ATTRIBUTE** looks for records in *aTable*. The **QUERY SELECTION BY ATTRIBUTE** command changes the current selection of *aTable* for the current process and makes the first record of the new selection the current record.

For more information, see the description of the [QUERY BY ATTRIBUTE](query-by-attribute.md) command.

The **QUERY SELECTION BY ATTRIBUTE** command is useful when a query cannot be defined using a combination of [QUERY BY ATTRIBUTE](query-by-attribute.md) (and even [QUERY](query.md)) calls joined with the \* parameter. Typically, this is the case when you want to query a current selection that does not result from a previous query, but from a command such as [USE SET](use-set.md). 

#### Example 

You want to find people with an age between 20 and 30, among the records that were previously highlighted by the user:

```4d
 USE SET("UserSet") //creates a new current selection
 QUERY SELECTION BY ATTRIBUTE([People];[People]OB_Info;"age";>;20;*)
 QUERY SELECTION BY ATTRIBUTE([People];&;[People]OB_Info;"age";<;30) //triggers the query
```

#### See also 

[QUERY BY ATTRIBUTE](query-by-attribute.md)  