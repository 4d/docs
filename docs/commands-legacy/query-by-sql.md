---
id: query-by-sql
title: QUERY BY SQL
slug: /commands/query-by-sql
displayed_sidebar: docs
---

<!--REF #_command_.QUERY BY SQL.Syntax-->**QUERY BY SQL** ( {*aTable* ;} *sqlFormula* )<!-- END REF-->
<!--REF #_command_.QUERY BY SQL.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table in which to return a selection of records or Default table if this parameter is omitted |
| sqlFormula | Text | &#8594;  | Valid SQL search formula representing the WHERE clause of the SELECT query |

<!-- END REF-->

#### Description 

<!--REF #_command_.QUERY BY SQL.Summary-->The QUERY BY SQL command can be used to take advantage of the SQL kernel integrated into 4D.<!-- END REF--> It can execute a simple SELECT query that can be written as follows:

```SQL
   SELECT *       FROM table       WHERE 
```

*aTable* is the name of the table passed in the first parameter and *sqlFormula* is the query string passed in the second parameter.

For example, the following statement:

```4d
 ([Employees];"name=’smith’")
```

is equivalent to the following SQL query:

```4d
 SELECT*FROM Employees WHERE"name=’smith’"
```

The QUERY BY SQL command is similar to the [QUERY BY FORMULA](query-by-formula.md) command. It looks for records in the specified table. It changes the current selection of *aTable* for the current process and makes the first record of the new selection the current record.

**Note:** The QUERY BY SQL command cannot be used in the context of an external SQL connection; it connects directly to the integrated SQL engine of 4D.

QUERY BY SQL applies *sqlFormula* to each record in the table selection. *sqlFormula* is a Boolean expression that must return **True** or **False**. As you may know, in the SQL standard, a search condition can yield a **True**, **False** or NULL result. All the records (rows) where the search condition returns **True** are included in the new current selection.

The *sqlFormula* expression may be simple, such as comparing a field (column) to a value; or it may be complex, such as performing a calculation. Like [QUERY BY FORMULA](query-by-formula.md), QUERY BY SQL is able to evaluate information in related tables (see example 4). *sqlFormula* must be a valid SQL statement that is compliant with the SQL-2 standard and with respect to the limitations of the current SQL implementation of 4D. For more information about SQL support in 4D, refer to the *4D SQL Reference* manual.

The *sqlFormula* parameter can use references to 4D expressions. The syntax to use is the same as for the integrated SQL commands or the code included between the [Begin SQL](begin-sql.md)/[End SQL](end-sql.md) tags, i.e.: *<<MyVar>>* or *:MyVar*.

**Note:** This command is compatible with the [SET QUERY LIMIT](set-query-limit.md) and [SET QUERY DESTINATION](set-query-destination.md) commands.

**Reminder:** You cannot have references to local variables in compiled mode. For more information about SQL programming in 4D, refer to the section *Overview of SQL Commands*.   

##### About Relations 

QUERY BY SQL does not use relations between tables defined in the 4D Structure editor. If you want to make use of related data, you will have to add a JOIN to the query. For example, assuming we have the following structure with a Many-to-One relation from\[Persons\]City to \[Cities\]Name:

```SQL
   [People]       Name       City    [Cities]       Name       Population
```

Using the [QUERY BY FORMULA](query-by-formula.md) command, you can write:

```4d
 QUERY BY FORMULA([People];[Cities]Population>1000)
```

Using QUERY BY SQL, you must write the following statement, regardless of whether the relation exists:

```4d
 QUERY BY SQL([People];"people.city=cities.name AND cities.population>1000")
```

**Note:** QUERY BY SQL handles One-to-Many and Many-to-Many relations differently than [QUERY BY FORMULA](query-by-formula.md).

#### Example 1 

This example shows the offices where sales exceed 100\. The SQL query is: 

```SQL
   SELECT *      FROM Offices      WHERE Sales > 100
```

When using the **QUERY BY SQL** command:

```4d
 C_STRING(30;$queryFormula)
 $queryFormula:="Sales > 100"
 QUERY BY SQL([Offices];$queryFormula)
```

#### Example 2 

This example shows the orders that fall into the 3000 to 4000 range. The SQL query is: 

```SQL
   SELECT *      FROM Orders      WHERE Amount BETWEEN 3000 AND 4000
```

When using the QUERY BY SQL command:

```4d
 C_STRING(40;$queryFormula)
 $queryFormula:="Amount BETWEEN 3000 AND 4000"
 QUERY BY SQL([Orders];$queryFormula)
```

#### Example 3 

This example shows how to get the query result ordered by a specific criterion. The SQL query is: 

```SQL
   SELECT *      FROM People      WHERE City =’Paris’         ORDER BY Name
```

When using the QUERY BY SQL command:

```4d
 C_STRING(40;$queryFormula)
 $queryFormula:="City= ‘Paris’ ORDER BY Name"
 QUERY BY SQL([People];$queryFormula)
```

#### Example 4 

This example shows a query using related tables in 4D. In SQL you should use a JOIN to simulate this relation. Assuming we have the two following tables: 

```SQL
   [Invoices] with the following columns (fields):      ID_Inv: Longint      Date_Inv: Date      Amount: Real   [Lines_Invoices] with the following columns (fields):      ID_Line: Longint      ID_Inv: Longint      Code: Alpha (10)
```

There is a Many-to-One relation from \[Lines\_Invoices\]ID\_Inv to \[Invoices\]ID\_Inv.  
Using the [QUERY BY FORMULA](query-by-formula.md) command, you could write:

```4d
 QUERY BY FORMULA([Lines_Invoices];([Lines_Invoices]Code="FX-200") & (Month of([Invoices]Date_Inv)=4))
```

The SQL query is:

```SQL
   SELECT ID_Line      FROM Lines_Invoices, Invoices      WHERE Lines_Invoices.ID_Inv=Invoices.ID_Inv         AND Lines_Invoices.Code='FX-200'         AND MONTH(Invoices.Date_Inv) = 4
```

When using the **QUERY BY SQL** command:

```4d
 C_STRING(40;$queryFormula)
 $queryFormula:="Lines_Invoices.ID_Inv=Invoices.ID_InvAND Lines_Invoices.Code=’FX-200’ AND MONTH(Invoices.Date_Inv)=4"
 QUERY BY SQL([Lines_Invoices];$queryFormula)
```

#### System variables and sets 

If the format of the search condition is correct, the system variable OK is set to 1\. Otherwise, it is set to 0, the result of the command is an empty selection and an error is returned. This error can be intercepted by a method installed using the [ON ERR CALL](on-err-call.md) command.

#### See also 

[QUERY BY FORMULA](query-by-formula.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 942 |
| Thread safe | &check; |
| Modifies variables | OK, error |
| Changes current record ||
| Changes current selection ||
| Forbidden on the server ||


