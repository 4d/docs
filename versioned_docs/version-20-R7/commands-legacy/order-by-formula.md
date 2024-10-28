---
id: order-by-formula
title: ORDER BY FORMULA
slug: /commands/order-by-formula
displayed_sidebar: docs
---

<!--REF #_command_.ORDER BY FORMULA.Syntax-->**ORDER BY FORMULA** ( *aTable* ; *formula* {; > or <}{; *formula2* ; > or <2 ; ... ; *formulaN* ; > or <N} )<!-- END REF-->
<!--REF #_command_.ORDER BY FORMULA.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to order selected records |
| formula | Expression | &#8594;  | Expression on which to set the order for each level (can be of type Alphanumeric, Real, Integer, Long Integer, Date, Time or Boolean) |
| > or < | Operator | &#8594;  | Ordering direction for each level: > to order in ascending order, or < to order in descending order |

<!-- END REF-->

#### Description 

<!--REF #_command_.ORDER BY FORMULA.Summary-->**ORDER BY FORMULA** sorts (reorders) the records of the current selection of *aTable* for the current process.<!-- END REF--> After the sort has been completed, the new first record of the selection becomes the current record. **Note**: you must specify *aTable*. You cannot use a default table.

You can sort the selection on one or several levels. For each sort level, you specify an expression in *formula* and the sorting order in *\> or <*. If you pass the “greater than” symbol (>), the order is ascending. If you pass the “less than” symbol (<), the order is descending. If you do not specify the sorting order, ascending order is the default.

The *formula* parameter can be of type: Alphanumeric, Real, Integer, Long Integer, Date, Time or Boolean.

**Warning:** Parameters ($1...$n) are not supported in the *formula*. 

**Note:** If **ORDER BY FORMULA** is used in conjunction with [PRINT SELECTION](print-selection.md), [BREAK LEVEL](break-level.md) and a local variable, the three commands must be executed *from the same method*, otherwise an error will be generated. This is because [PRINT SELECTION](print-selection.md) needs to reevaluate the *formula* to compute break values. For example, if you execute **ORDER BY FORMULA**( \[T1\] ; \[T1\]f1 > $value) from a method, the sort is done and the method ends. Any subsequent call to [PRINT SELECTION](print-selection.md) and [BREAK LEVEL](break-level.md) will fail because *$value* no longer exists and the *formula* cannot be evaluated. 

No matter how a sort has been defined, if the actual sort operation is going to take some time to be performed, 4D automatically displays a message containing a progress indicator. These messages can be turned on and off by using the [MESSAGES ON](messages-on.md) and [MESSAGES OFF](messages-off.md) commands. If the progress indicator is displayed, the user can click the **Stop** button to interrupt the sort. If the sort is completed, OK is set to 1\. Otherwise, if the sort is interrupted, OK is set to 0 (zero).

**4D Server:** This command is executed on the server, which optimizes its execution. Note that when variables are called directly in the *formula*, the sort order is calculated with the value of the variable on the client machine. For example, the statement **ORDER BY FORMULA(\[mytable\];\[mytable\]myfield\*myvariable)** will be executed on the server but with the contents of the client machine's myvariable.

> **Compatibility note:** Until 4D Server v11, this command was executed on the client machine. For reverse compatibility, this behavior is maintained in converted databases. However, a compatibility property or a selector of the [SET DATABASE PARAMETER](set-database-parameter.md) command enables server-side execution in converted databases.

#### Example 

This example orders the records of the \[People\] table in descending order, based on the length of each person’s last name. The record for the person with the longest last name will be first in the current selection:

```4d
 ORDER BY FORMULA([People];Length([People]Last Name);<)
```

#### See also 

[ORDER BY](order-by.md)  