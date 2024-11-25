---
id: st-compute-expressions
title: ST COMPUTE EXPRESSIONS
slug: /commands/st-compute-expressions
displayed_sidebar: docs
---

<!--REF #_command_.ST COMPUTE EXPRESSIONS.Syntax-->**ST COMPUTE EXPRESSIONS** ( {* ;} *object* {; *startSel* {; *endSel*}} )<!-- END REF-->
<!--REF #_command_.ST COMPUTE EXPRESSIONS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | any | &#8594;  | Object name (if * is specified) or <br/>Field or variable (if * is omitted) |
| startSel | Integer | &#8594;  | Start of selection |
| endSel | Integer | &#8594;  | End of selection |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.ST COMPUTE EXPRESSIONS.Summary-->The **ST COMPUTE EXPRESSIONS** command updates the dynamic 4D expressions found in the multi-style or 4D Write Pro field or variable designated by the *object* parameter.<!-- END REF--> 

For more information about 4D expressions used in multi-style text or 4D Write Pro areas, refer to the description of the [ST INSERT EXPRESSION](st-insert-expression.md) command.

 The command re-evaluates the result of expressions found in the *object* based on the current context and displays the result obtained. For example, if the expression inserted is the time, the value will be modified each time the **ST COMPUTE EXPRESSIONS** command is called. Expressions are also computed:

* when they are inserted
* when the object is loaded
* when they are "frozen" using the [ST FREEZE EXPRESSIONS](st-freeze-expressions.md) command, if the second *\** parameter is passed.

**ST COMPUTE EXPRESSIONS** does not modify styled text (containing *span* tags) but only plain text displayed in *object*. The values computed are not stored in the styled text, only their reference is stored there. 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string. 

It is not necessary for the *object* to have the focus. However, if the *object* designates a multi-style text area, it must be included in a form or else the **ST COMPUTE EXPRESSIONS** command has no effect.

**Note:** If the *object* designates a 4D Write Pro document, it will be computed by the command even if it is not opened in a form object (see also *Picture expressions*). 

The optional *startSel* and *endSel* parameters designate a selection of text in *object*. The *startSel* and *endSel* values express a plain text selection, without taking into account any style tags or references that may be present. Note that a reference is equivalent to a single character. 

* If you pass *startSel* and *endSel*, **ST COMPUTE EXPRESSIONS** only updates the expressions located within this selection.
* If you only pass *startSel* or if the value of *endSel*is greater than the total number of characters in object, all the expressions between *startSel* and the end of the text are computed.
* If you omit *startSel* and *endSel*, all the expressions included in the user selection of the *object* are computed.

4D provides predefined constants so that you can designate the selection limits automatically in the *startSel* and *endSel* parameters. These constants are found in the "*Multistyle Text*" theme: 

| Constant           | Type    | Value  | Comment                                                             |
| ------------------ | ------- | ------ | ------------------------------------------------------------------- |
| ST End highlight   | Integer | \-1001 | Designates last character of current text selection in object (\*)  |
| ST End text        | Integer | 0      | Designates last character of text contained in object               |
| ST Start highlight | Integer | \-1000 | Designates first character of current text selection in object (\*) |
| ST Start text      | Integer | 1      | Designates first character of text contained in object              |

(\*) You must pass an object name in *object* to be able to use this constant. If you pass a reference to a field or variable, the command is applied to all the text of the object.

**Note:** If *startSel* is greater than *endSel* (except when *endSel* is 0), the command does nothing and the *OK* variable is set to 0.

#### Example 

You want to update the references included in the selection of text:

```4d
 ST COMPUTE EXPRESSIONS(*;"myText";ST Start highlight;ST End highlight)
```

#### See also 

[ST FREEZE EXPRESSIONS](st-freeze-expressions.md)  
[ST INSERT EXPRESSION](st-insert-expression.md)  