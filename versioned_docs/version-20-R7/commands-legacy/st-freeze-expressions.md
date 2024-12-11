---
id: st-freeze-expressions
title: ST FREEZE EXPRESSIONS
slug: /commands/st-freeze-expressions
displayed_sidebar: docs
---

<!--REF #_command_.ST FREEZE EXPRESSIONS.Syntax-->**ST FREEZE EXPRESSIONS** ( {* ;} *object* {; *startSel* {; *endSel*}}{; *} )<!-- END REF-->
<!--REF #_command_.ST FREEZE EXPRESSIONS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | any | &#8594;  | Object name (if * is specified) or<br/>Field or variable (if * is omitted) |
| startSel | Integer | &#8594;  | Start of selection |
| endSel | Integer | &#8594;  | End of selection |
| * | Operator | &#8594;  | If passed = update expressions before freezing them |

<!-- END REF-->

#### Description 

<!--REF #_command_.ST FREEZE EXPRESSIONS.Summary-->The **ST FREEZE EXPRESSIONS** command "freezes" the contents of expressions found in the multi-style text or 4D Write Pro field or variable designated by the *object* parameter.<!-- END REF--> This action converts dynamic expressions into static text or (4D Write Pro areas only) images and removes the associated references from the *object*. 

For more information about 4D expressions used in multi-style text or 4D Write Pro areas, refer to the description of the [ST INSERT EXPRESSION](st-insert-expression.md) command.

The **ST FREEZE EXPRESSIONS** command stores the computed value of an expression at a given time. This operation is necessary particularly before each use of the *object* outside of the area (exports, storage in a disk file, printing, etc.) since only the reference of the expression is kept in the area itself. 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

The optional *startSel* and *endSel* parameters designate a selection of text in *object*. The *startSel* and *endSel* values express a plain text selection, without taking into account any style tags or references that may be present.

* If you pass *startSel* and *endSel*, **ST FREEZE EXPRESSIONS** only freezes the expressions located within this selection.
* If you only pass *startSel* or if the value of *endSel* is greater than the total number of characters in the *object*, all the expressions between *startSel* and the end of the text are frozen.
* If you omit *startSel* and *endSel*, all the expressions included in the user selection of the *object* are frozen.

4D provides predefined constants so that you can designate the selection limits automatically in the *startSel* and *endSel* parameters.   
These constants are found in the "*Multistyle Text*" theme: 

| Constant           | Type    | Value  | Comment                                                             |
| ------------------ | ------- | ------ | ------------------------------------------------------------------- |
| ST End highlight   | Integer | \-1001 | Designates last character of current text selection in object (\*)  |
| ST End text        | Integer | 0      | Designates last character of text contained in object               |
| ST Start highlight | Integer | \-1000 | Designates first character of current text selection in object (\*) |
| ST Start text      | Integer | 1      | Designates first character of text contained in object              |

(\*) You must pass an object name in *object* to be able to use this constant. If you pass a reference to a field or variable, the command is applied to all the text of the object.

**Note:** If *startSel* is greater than *endSel* (except when *endSel*is 0), the command does nothing and the *OK* variable is set to 0.

By default, expressions are not re-evaluated before they are frozen. If you want the expression to be recomputed and then frozen, you can pass the second *\** parameter.

**Note:** **ST FREEZE EXPRESSIONS** does not freeze 4D Write Pro expressions containing *$wp\_pageNumber* or *$wp\_pageCount*. For more information, please refer to the *Managing formulas* section. 

#### Example 

You want to insert the current time at the start of the text and then freeze it before saving the record:

```4d
  //Inserting the time at the start of the text
 ST INSERT EXPRESSION(*;StyledText_t;"Current time";1)
  //We freeze the expression
 ST FREEZE EXPRESSIONS(*;"StyledText_t";1)
```

#### See also 

[ST COMPUTE EXPRESSIONS](st-compute-expressions.md)  
[ST INSERT EXPRESSION](st-insert-expression.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1282 |
| Thread safe | &check; |
| Forbidden on the server ||


