---
id: query-selection
title: QUERY SELECTION
slug: /commands/query-selection
displayed_sidebar: docs
---

<!--REF #_command_.QUERY SELECTION.Syntax-->**QUERY SELECTION** ( {*aTable* }{;}{ *queryArgument* {; *}} )<!-- END REF-->
<!--REF #_command_.QUERY SELECTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to return a selection of records, or Default table, if omitted |
| queryArgument | Expression | &#8594;  | Query argument |
| * | Operator | &#8594;  | Continue query flag |

<!-- END REF-->

#### Description 

<!--REF #_command_.QUERY SELECTION.Summary-->**QUERY SELECTION** looks for records in *aTable*.<!-- END REF--> The **QUERY SELECTION** command changes the current selection of *table* for the current process and makes the first record of the new selection the current record.

**QUERY SELECTION** works and performs the same actions as [QUERY](query.md). The difference between the two commands is the scope of the query:

* [QUERY](query.md) looks for records among all the records in the table.
* **QUERY SELECTION** looks for records among the records currently selected in the table.

For more information, see the description of the [QUERY](query.md) command.

The **QUERY SELECTION** command is useful when a query cannot be defined using a sequence of [QUERY](query.md) calls joined with the *\** parameter. Typically, it is the case when you want to query a current selection that does not result from a previous query, but from a command such as [USE SET](use-set.md). 

#### Example 

You want to query the records that have been previously highlighted by the user in a list form. You can write:

```4d
 USE SET("UserSet") //replace the current selection with the highlighted records
 QUERY SELECTION([Company];[Company]City="New York City";*)
 QUERY SELECTION([Company]Type Business="Stock Exchange")
```

You will find all companies located in New York City, with a Stock Exchange activity, among the initial user selection. 

#### See also 

[QUERY](query.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 341 |
| Thread safe | &check; |
| Modifies variables | OK |
| Changes current record ||
| Changes current selection ||
| Forbidden on the server ||


