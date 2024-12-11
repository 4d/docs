---
id: no-default-table
title: NO DEFAULT TABLE
slug: /commands/no-default-table
displayed_sidebar: docs
---

<!--REF #_command_.NO DEFAULT TABLE.Syntax-->**NO DEFAULT TABLE**<!-- END REF-->
<!--REF #_command_.NO DEFAULT TABLE.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.NO DEFAULT TABLE.Summary-->The **NO DEFAULT TABLE** command is used to cancel the effect of the [DEFAULT TABLE](default-table.md) command.<!-- END REF--> After this command is executed, there is no longer any default table defined for the process.   
This command will have no effect if the [DEFAULT TABLE](default-table.md) command has not been called beforehand.

This command concerns the use of project forms (forms not linked with tables): most of the commands related to forms (apart from user forms) accept an optional *aTable* parameter as their first parameter. For example, this is the case with the *\_o\_FORM GET PARAMETER*, [Open form window](open-form-window.md) or [DIALOG](../commands/dialog.md) commands. Since a project form and table form can have the same name, this parameter can be used to determine the form to be used: pass the *aTable* parameter when you want to target the table form and omit it in the case of a project form.

In a database containing a project form named “TheForm” and a table form with the same name for the \[Table1\] table:

```4d
 DIALOG([Table1];"TheForm") //4D uses the table form
 DIALOG("TheForm") //4D uses the project form
```

However, this principle is null and void if the [DEFAULT TABLE](default-table.md) command is executed when the database contains a project form and a table form with the same name. In fact, in this case 4D will use the table form by default, even if the *aTable* parameter is not passed. In order to guarantee the use of project forms, simply use the **NO DEFAULT TABLE** command. 

#### Example 

In a database containing a project form named “TheForm” and a table form with the same name for the \[Table1\] table: 

```4d
 DEFAULT TABLE([Table1])
 DIALOG("TheForm") //4D uses the table form
 NO DEFAULT TABLE
 DIALOG("TheForm") //4D uses the project form
```

#### See also 

[DEFAULT TABLE](default-table.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 993 |
| Thread safe | &check; |
| Forbidden on the server ||


