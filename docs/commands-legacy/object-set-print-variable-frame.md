---
id: object-set-print-variable-frame
title: OBJECT SET PRINT VARIABLE FRAME
slug: /commands/object-set-print-variable-frame
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET PRINT VARIABLE FRAME.Syntax-->**OBJECT SET PRINT VARIABLE FRAME** ( {* ;} *object* ; *variableFrame* {; *fixedSubform*} )<!-- END REF-->
<!--REF #_command_.OBJECT SET PRINT VARIABLE FRAME.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | any | &#8594;  | Object name (if * is specified) or <br/>Field or variable (if * is omitted) |
| variableFrame | Boolean | &#8594;  | True = Variable frame printing, False = Fixed frame printing |
| fixedSubform | Integer | &#8594;  | Options for printing subforms in fixed size |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.OBJECT SET PRINT VARIABLE FRAME.Summary-->The **OBJECT SET PRINT VARIABLE FRAME** command modifies the Print Variable Frame property of the object(s) designated by the *object* and *\** parameters.<!-- END REF--> 

This property is available for the following objects:

* Text or Picture type variables and fields (see *Print Variable Frame* in the *Design Reference* manual)
* 4D Write Pro areas (see *Using a 4D Write Pro area* in the 4D Write Pro reference manual).
* Subforms. Subforms have an additional option for fixed size printing (see *Subform Printing* in the *Design Reference* manual); the command can be used to configure this option using the *fixedSubform* parameter.

If you apply this command to an object that does not support this property, the command does nothing. 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

Pass a Boolean in the *variableFrame* parameter: if you pass **True**, the object is printed with a variable frame. If you pass **False**, it is printed with a fixed frame. 

The optional *fixedSubform* parameter lets you set an additional option when you pass **False** in the *variableFrame* parameter and the *object* is a subform (it is ignored in all other cases). In this case, you can define the fixed frame printing mode for the subform. You can pass one of the following constants, found in the "*Form Objects (Properties)*" theme:

| Constant                                | Type    | Value | Comment                                                                                                                                             |
| --------------------------------------- | ------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Print Frame fixed with multiple records | Integer | 2     | The frame remains the same size, but 4D prints the form several times to include all the records.<br/>                                      |
| Print Frame fixed with truncation       | Integer | 1     | 4D prints only the records that fit into the area of the subform. The form is printed only once and those records that are not printed are ignored. |

#### See also 

[OBJECT GET PRINT VARIABLE FRAME](object-get-print-variable-frame.md)  