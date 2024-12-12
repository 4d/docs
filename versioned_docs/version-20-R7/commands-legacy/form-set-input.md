---
id: form-set-input
title: FORM SET INPUT
slug: /commands/form-set-input
displayed_sidebar: docs
---

<!--REF #_command_.FORM SET INPUT.Syntax-->**FORM SET INPUT** ( {*aTable* ;} *form* {; *userForm* {; *}} )<!-- END REF-->
<!--REF #_command_.FORM SET INPUT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to set the input form, or Default table, if omitted |
| form | Text, Object | &#8594;  | Name (string) of table form, or a POSIX path (string) to a .json file describing the form, oran object describing the form |
| userForm | Text | &#8594;  | Name of user form to use |
| * | Operator |  &#8594;  | Automatic window size |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.FORM SET INPUT.Summary-->The **FORM SET INPUT** command sets the current input form for *aTable* to *form*, or *userForm*.<!-- END REF--> The form must belong to *aTable*.

The scope of this command is the current process. Each table has its own input form in each process. 

In the *form* parameter, you can pass:

* the name of a form;
* the path (in POSIX syntax) to a valid .json file containing a description of the form to use. See *Form file path*;
* an object containing a description of the form.

**Note:** For structural reasons, this command is not compatible with project forms.  
  
**FORM SET INPUT** does not display the form; it just designates which form is used for data entry, import, or operation by another command. For information about creating forms, see the 4D *Design Reference* manual.

The default input form is defined in the Explorer window for each table. This default input form is used if the **FORM SET INPUT** command is not used to specify an input form, or if you specify a form that does not exist.

Input forms are also used automatically by standard actions such as ak edit subrecord or ak add subrecord.

The optional *userForm* parameter lets you specify a user form (coming from *form*) as the default input form. If you pass a valid user form name, this form will be used by default instead of the input form in the current process. This allows you to have several different custom user forms simultaneously (generated using the *\_o\_CREATE USER FORM* command) and to use the one that suits according to the context. 

For more information about user forms, refer to the *Overview of user forms* section. 

Input forms are displayed by a number of commands, which are generally used to allow the user to enter new data or modify old data. The following commands display an input form for data entry or query purposes:

* [ADD RECORD](add-record.md)
* [DISPLAY RECORD](display-record.md)
* [MODIFY RECORD](modify-record.md)
* [QUERY BY EXAMPLE](query-by-example.md)

The [DISPLAY SELECTION](display-selection.md) and [MODIFY SELECTION](modify-selection.md) commands display a list of records using the output form. The user can double-click on a record in the list, which displays the input form.

The import commands [IMPORT TEXT](import-text.md), [IMPORT SYLK](import-sylk.md) and [IMPORT DIF](import-dif.md) use the current input form for importing records.

The optional *\** parameter is used in conjunction with the form properties you set in the Design environment's Form Properties window and the command [Open window](open-window.md). Specifying the \* parameter tells 4D to use the form properties to automatically resize the window for the next use of the form (as an input form or as a dialog box). See [Open window](open-window.md) for more information.

**Note:** Whether or not you pass the optional *\** parameter, **FORM SET INPUT** changes the input form for the table.

#### Example 1 

The following example shows a typical use of FORM SET INPUT: 

```4d
 FORM SET INPUT([Companies];"New Comp") // Form for adding new companies
 ADD RECORD([Companies]) // Add a new company
```

#### Example 2 

In an invoicing database managing several companies, the creation of an invoice must be carried out using the corresponding user form: 

```4d
 Case of
    :(company="4D SAS")
       FORM SET INPUT([Invoices];"Input";"4D_SAS")
    :(company="4D Inc")
       FORM SET INPUT([Invoices];"Input";"4D_Inc")
    :(company="Acme")
       FORM SET INPUT([Invoices];"Input";"ACME")
 End case
 ADD RECORD([Factures])
```

#### Example 3 

The following example uses a .json file describing a form to enter the records in an employee list: 

```4d
 FORM SET INPUT([Personnel];"/RESOURCES/PersonnelForm.json")
 ADD RECORD([Personnel])
```

which displays:

![](../assets/en/commands/pict3687432.en.png)

#### See also 

[ADD RECORD](add-record.md)  
[DISPLAY RECORD](display-record.md)  
[DISPLAY SELECTION](display-selection.md)  
[FORM SET OUTPUT](form-set-output.md)  
[IMPORT DIF](import-dif.md)  
[IMPORT SYLK](import-sylk.md)  
[IMPORT TEXT](import-text.md)  
[MODIFY RECORD](modify-record.md)  
[MODIFY SELECTION](modify-selection.md)  
[Open window](open-window.md)  
[QUERY BY EXAMPLE](query-by-example.md)  