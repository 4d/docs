---
id: form-set-output
title: FORM SET OUTPUT
slug: /commands/form-set-output
displayed_sidebar: docs
---

<!--REF #_command_.FORM SET OUTPUT.Syntax-->**FORM SET OUTPUT** ( {*aTable* : Table ;} *form* : Text, Object {; *userForm* : Text} )<!-- END REF-->
<!--REF #_command_.FORM SET OUTPUT.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to set the output form, or Default table, if omitted |
| form | Text, Object | &#8594;  | Name (string) of table form, or a POSIX path (string) to a .json file describing the form, oran object describing the form |
| userForm | Text | &#8594;  | Name of user form to use |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|16 R6|Modified|
|12|Renamed|
|2004|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.FORM SET OUTPUT.Summary-->The **FORM SET OUTPUT**  command sets the current output form for *table* to *form*, or *userForm*.<!-- END REF--> The form must belong to *aTable*.

The *form* parameter is the form which will be displayed. Pass the:

* the name of a form;
* the path (in POSIX syntax) to a valid .json file containing a description of the form to use. See *Form file path*;
* an object containing a description of the form.

The scope of this command is the current process. Each table has its own output form in each process.

**Note:** For structural reasons, this command is not compatible with project forms.

**FORM SET OUTPUT** does not display the form; it just designates which form is printed, displayed, or used by another command. For information about creating forms, see the 4D *Design Reference* manual.

The default output form is defined in the Explorer window for each table. This default output form is used if the **FORM SET OUTPUT**  command is not used to specify an output form, or if you specify a form that does not exist.

The optional *userForm* parameter lets you specify a user form (coming from *form*) as the default output form. If you pass a valid user form name, this form will be used by default instead of the output form in the current process. This allows you to have several different custom user forms simultaneously (generated using the *\_o\_CREATE USER FORM* command) and to use the one that suits according to the context. 

For more information about user forms, refer to the *Overview of user forms* section. 

Output forms are used by three groups of commands. One group displays a list of records on screen, another group generates reports, and the third group exports data. The [DISPLAY SELECTION](../commands/display-selection) and [MODIFY SELECTION](../commands/modify-selection) commands display a list of records using an output form. You use the output form when creating reports with the [PRINT LABEL](../commands/print-label) and [PRINT SELECTION](../commands/print-selection) commands. Each of the export commands ([EXPORT DIF](../commands/export-dif), [EXPORT SYLK](../commands/export-sylk) and [EXPORT TEXT](../commands/export-text)) also uses the output form.

## Example 1 

The following example shows a typical use of **FORM SET OUTPUT**. Note that although the **FORM SET OUTPUT** command appears immediately before the output form is used, this is not required. In fact, the command may be executed in a completely different method, as long as it is executed prior to this method:

```4d
 FORM SET INPUT([Parts];"Parts In") //Select the input form
 FORM SET OUTPUT([Parts];"Parts List") //Select the output form
 MODIFY SELECTION([Parts]) //This command uses both forms
```

## Example 2 

The following example uses the path to a .json form to print the records in an employee list: 

```4d
 FORM SET OUTPUT([Personnel];"/RESOURCES/PersonnelPrintForm.json")
 ALL RECORDS([Personnel])
 PRINT SELECTION([Personnel])
```

## See also 

[DISPLAY SELECTION](../commands/display-selection)  
[EXPORT DIF](../commands/export-dif)  
[EXPORT SYLK](../commands/export-sylk)  
[EXPORT TEXT](../commands/export-text)  
[FORM SET INPUT](../commands/form-set-input)  
[MODIFY SELECTION](../commands/modify-selection)  
[PRINT LABEL](../commands/print-label)  
[PRINT SELECTION](../commands/print-selection)  

## Properties

|  |  |
| --- | --- |
| Command number | 54 |
| Thread safe | no |


