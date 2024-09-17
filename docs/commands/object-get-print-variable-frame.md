---
id: object-get-print-variable-frame
title: OBJECT GET PRINT VARIABLE FRAME
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET PRINT VARIABLE FRAME.Syntax-->**OBJECT GET PRINT VARIABLE FRAME** ( {* ;} *object* ; *variableFrame* {; *fixedSubform*} )<!-- END REF-->
<!--REF #_command_.OBJECT GET PRINT VARIABLE FRAME.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | -> | If specified, object is an object name (string)
If omitted, object is a field or variable |
| object | Form object | -> | Object name (if * is specified) or
Field or variable (if * is omitted) |
| variableFrame | Boolean | <-> | True = Variable frame printing, False = Fixed frame printing |
| fixedSubform | Longint | <-> | Option for printing subforms in fixed size |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT GET PRINT VARIABLE FRAME.Summary-->The **OBJECT GET PRINT VARIABLE FRAME** command gets the current configuration of the variable frame print options for the object(s) designated by the *object* and *\** parameters.<!-- END REF--> 

Variable frame printing properties can be defined using the Property List, or using the [OBJECT SET PRINT VARIABLE FRAME](object-set-print-variable-frame.md) command.

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, this indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

In the *variableFrame* parameter, the command returns a Boolean variable whose value indicates the enabled (**True**) or disabled (**False**) state of variable frame printing.

If the *object* is a subform and if variable frame printing is disabled (**False**), the command also returns, in the *fixedSubform* parameter, the fixed frame print option of the subform. You can compare the value returned with the following constants, found in the "[Form Objects (Properties)](/4Dv20R6/4D/20-R6/Form-Objects-Properties.302-6958435.en.html)" theme:

| Constant                                | Type    | Value | Comment                                                                                                                                             |
| --------------------------------------- | ------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Print Frame fixed with multiple records | Longint | 2     | The frame remains the same size, but 4D prints the form several times to include all the records.<br/>                                      |
| Print Frame fixed with truncation       | Longint | 1     | 4D prints only the records that fit into the area of the subform. The form is printed only once and those records that are not printed are ignored. |

#### See also 

[OBJECT SET PRINT VARIABLE FRAME](object-set-print-variable-frame.md)  