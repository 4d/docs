---
id: query-by-formula
title: QUERY BY FORMULA
slug: /commands/query-by-formula
displayed_sidebar: docs
---

<!--REF #_command_.QUERY BY FORMULA.Syntax-->**QUERY BY FORMULA** ( *aTable* {; *queryFormula*} )<!-- END REF-->
<!--REF #_command_.QUERY BY FORMULA.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to return a selection of records |
| queryFormula | Boolean | &#8594;  | Query formula |

<!-- END REF-->

#### Description 

<!--REF #_command_.QUERY BY FORMULA.Summary-->**QUERY BY FORMULA** looks for records in *aTable*.<!-- END REF--> It changes the current selection of *aTable* for the current process and makes the first record of the new selection the current record.

**QUERY BY FORMULA** and [QUERY SELECTION BY FORMULA](query-selection-by-formula.md) work exactly the same way, except that **QUERY BY FORMULA** queries every record in the entire table and [QUERY SELECTION BY FORMULA](query-selection-by-formula.md) queries only the records in the current selection.

Both commands apply *queryFormula* to each record in the table or selection. The *queryFormula* is a Boolean expression that must evaluate to either TRUE or FALSE. If *queryFormula* evaluates as TRUE, the record is included in the new selection.

The *queryFormula* may be simple, perhaps comparing a field to a value; or it may be complex, perhaps performing a calculation or even evaluating information in a related table. The *queryFormula* can be a 4D function (command), or a function (method) or expression you have created. You can use wildcards (@) in *queryFormula* when working with Alpha or text fields as well as the "contains" (%) operator for keyword queries. For more information, please refer to the description of the [QUERY](query.md) command.

**Warning:** Parameters ($1...$n) are not supported in the *queryFormula*. 

If *queryFormula* is omitted, 4D displays the query dialog box (the user can add a line of formula by **Alt+clicking** on the **\[+\]** button).

When the query is complete, the first record of the new selection is loaded from disk and made the current record.

These commands are optimized and can more particularly take advantage of indexes. When the type of query allows it, these commands execute queries equivalent to the [QUERY](query.md) command. For example, the statement **QUERY BY FORMULA**(\[mytable\]; \[mytable\]myfield=value) will be executed just like [QUERY](query.md)(\[mytable\]; \[mytable\]myfield=value), which will allow the use of indexes. 4D can also optimize queries containing parts that cannot be optimized, by first executing the optimized parts and then combining the results with the rest of the query. For example, the statement **QUERY BY FORMULA**\[mytable\];Length(myfield)=value) will not be optimized. On the other hand, **QUERY BY FORMULA**(\[mytable\];Length(myfield)=value1 | myfield=value2) will be partially optimized.

These commands carry out "joins" like SQL when you compare fields from different tables. This means that it is not necessary for a structural automatic relation to exist between the tables. For example, you can execute a statement of the type **QUERY BY FORMULA(\[Table\_A\];(\[Table\_A\]field\_X = \[Table\_B\]field\_Y) & (\[Table\_B\]field\_Y = "abc"))** (see example 3). The first part of the formula (*\[Table\_A\]field\_X = \[Table\_B\]field\_Y*) establishes the join between the two fields and the second part (*\[Table\_B\]field\_Y = "abc"*) defines the search criteria. The following rules apply:

* at least one search criterion must be set.
* the *queryFormula* cannot contain more than one field comparison on the same table.

If they exist, the relations between the tables are not used as a rule. However, these commands will use automatic relations in the following cases:

> \- If the formula cannot be broken down into elements of the *{ field ; comparator ; value}* form  
> \- If two fields of the same table are compared.

> **Compatibility note** **:** For compatibility reasons with databases converted from versions older than v11, it is possible to disable the joins mechanism using a selector of the [SET DATABASE PARAMETER](set-database-parameter.md) command.

**4D Server:** This command is executed on the server, which optimizes its execution. Note that when variables are called directly in *queryFormula*, the query is calculated with the value of the variables on the client machine. For example, the statement **QUERY BY FORMULA**(\[mytable\];\[mytable\]myfield=myvariable) will be executed on the server but with the contents of the client machine's myvariable.

> **Compatibility note:** Until 4D Server v11, this command was executed on the client machine. For reverse compatibility, this behavior is maintained in converted databases. However, a compatibility property or a selector of the [SET DATABASE PARAMETER](set-database-parameter.md) command enables server-side execution in converted databases.

#### Example 1 

This example finds the records for all invoices that were entered in December of any year. It does this by applying the [Month of](month-of.md) function to each record. This query could not be performed any other way without creating a separate field for the month:

```4d
 QUERY BY FORMULA([Invoice];Month of([Invoice]Entered)=12) // Find the invoices entered in December
```

#### Example 2 

This example finds records for all the people who have names with more than ten characters:

```4d
 QUERY BY FORMULA([People];Length([People]Name)>10) // Find names longer than ten characters
```

#### Example 3 

This example uses a join to query all the lines of "ACME" client invoices even though the tables are not related:

```4d
 QUERY BY FORMULA([invoice_line];([invoice_line]invoice_id=[invoice]id&[invoice]client="ACME"))
```

#### See also 

[QUERY](query.md)  
[QUERY BY SQL](query-by-sql.md)  
[QUERY SELECTION](query-selection.md)  
[QUERY SELECTION BY FORMULA](query-selection-by-formula.md)  