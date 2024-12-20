---
id: object-set-subform
title: OBJECT SET SUBFORM
slug: /commands/object-set-subform
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET SUBFORM.Syntax-->**OBJECT SET SUBFORM** ( {* ;} *object* {; *aTable*}; *detailSubform* {; *listSubform*} )<!-- END REF-->
<!--REF #_command_.OBJECT SET SUBFORM.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable |
| object | any | &#8594;  | Object Name (if * is specified) or Variable (if * is omitted) |
| aTable | Table | &#8594;  | Table of form (if table form) |
| detailSubform | Text, Object | &#8594;  | Name (text) of the detail form, or a POSIX path (text) to a .json file describing the detail form, or an object describing the detail form of the subform |
| listSubform | Text, Object | &#8594;  | Name (text) of the list form, ora POSIX path (text) to a .json file describing the list form, or an object describing the list form of the subform (table form) |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET SUBFORM.Summary-->The **OBJECT SET SUBFORM** command dynamically modifies the detail form as well as, optionally, the screen list form associated with the subform object designated by the *\**, *object* parameters.<!-- END REF-->

**Note:** This command cannot change the type of the subform itself (list or page). This property can only be set in Design mode. 

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable. In this case, you pass a variable reference instead of a string. 

In the *aTable* parameter, pass the table of the forms to be used. This parameter is optional; you can omit it when you specify a project form as detail subform. 

In the *detailSubform* and *listSubform* parameters, pass either :

* the name of a form, or
* the path\* (in POSIX syntax) to a valid .json file containing a description of the form to use (see *Form file path*), or
* an object containing a description of the form.

\*Unlike other dynamic form-related commands, **OBJECT SET SUBFORM** filepaths are relative to the subform's parent form. 

**Note**: The *listSubform* parameter can only be passed when you modify a list type subform.

When you modify a page subform, the command can be executed at any time; current selections are not modified. However, when you modify a list subform, it can only be modified when it displays the list. If the command is executed when the detail form is displayed following a double-click in the list, an error is generated. 

#### See also 

[OBJECT GET SUBFORM](object-get-subform.md)  
[OBJECT GET SUBFORM CONTAINER SIZE](object-get-subform-container-size.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1138 |
| Thread safe | &cross; |
