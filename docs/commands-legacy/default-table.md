---
id: default-table
title: DEFAULT TABLE
slug: /commands/default-table
displayed_sidebar: docs
---

<!--REF #_command_.DEFAULT TABLE.Syntax-->**DEFAULT TABLE** ( *aTable* )<!-- END REF-->
<!--REF #_command_.DEFAULT TABLE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table to set as the default |

<!-- END REF-->

#### Description 

<!--REF #_command_.DEFAULT TABLE.Summary-->**Tip:** Although using **DEFAULT TABLE** and omitting the table name may make the code easier to read, many programmers find that using this command actually causes more problems and confusion than it is worth.<!-- END REF--> In particular, note that [DEFAULT TABLE](default-table.md) takes priority when you use, for example, the [DIALOG](dialog.md) command with a project form and there is a default table form with the same name.

**DEFAULT TABLE** sets *aTable* as the default table for the current process.

There is no default table for a process until the **DEFAULT TABLE** command is executed. After a default table has been set, any command that omits the *table* parameter will operate on the default table. For example, consider this command:

```4d
 FORM SET INPUT([Table];"form")
```

If the default table is first set to \[Table\], the same command could be written this way:

```4d
 FORM SET INPUT("form")
```

One reason for setting the default table is to create code that is not table specific. Doing this allows the same code to operate on different tables. You can also use pointers to tables to write code that is not table specific. For more information about this technique, see the description of the [Table name](table-name.md) command.

**DEFAULT TABLE** does not allow the omission of table names when referring to fields. For example:

```4d
 [My Table]My Field:="A string" //Good
```

could not be written as:

```4d
 DEFAULT TABLE([My Table])
 My Field:="A string" //WRONG
```

because a default table had been set. 

In 4D, all tables are “open” and ready for use. **DEFAULT TABLE** does not open a table, set a current table, or prepare the table for input or output. **DEFAULT TABLE** is simply a programming convenience to reduce the amount of typing and make the code easier to read.

#### Example 

The following example first shows code without the DEFAULT TABLE command. It then shows the same code, with DEFAULT TABLE. The code is a loop commonly used to add new records to a database. The [FORM SET INPUT](form-set-input.md) and [ADD RECORD](add-record.md) commands both require a table as the first parameter:

```4d
 FORM SET INPUT([Customers];"Add Recs")
 Repeat
    ADD RECORD([Customers])
 Until(OK=0)
```

Specifying the default table results in this code:

```4d
 DEFAULT TABLE([Customers])
 FORM SET INPUT("Add Recs")
 Repeat
    ADD RECORD
 Until(OK=0)
```

#### See also 

[Current default table](current-default-table.md)  
[NO DEFAULT TABLE](no-default-table.md)  