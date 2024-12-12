---
id: st-insert-expression
title: ST INSERT EXPRESSION
slug: /commands/st-insert-expression
displayed_sidebar: docs
---

<!--REF #_command_.ST INSERT EXPRESSION.Syntax-->**ST INSERT EXPRESSION** ( {* ;} *object* ; *expression* {; *startSel* {; *endSel*}} )<!-- END REF-->
<!--REF #_command_.ST INSERT EXPRESSION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | Object | &#8594;  | Object name (if * is specified) or <br/>Field or variable (if * is omitted) |
| expression | Text | &#8594;  | Expression and (optional) format to insert |
| startSel | Integer | &#8594;  | Start of selection |
| endSel | Integer | &#8594;  | End of selection |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.ST INSERT EXPRESSION.Summary-->The **ST INSERT EXPRESSION** command inserts a reference to the *expression* in the styled text field or variable designated by the *object* parameter.<!-- END REF-->

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

In the *expression* parameter, you pass the 4D expression to evaluate in the *object*. The expression must be placed in quotation marks ("").

A valid 4D expression is a string returning a value. *expression* can be a field, a variable, a 4D command, a statement returning a value, a project method, a 4D Write Pro special expression (see *Managing formulas*), and so on.

**Notes:**

* Inserting picture expressions (e. g. Picture type variables) is supported in 4D Write Pro areas (see *Picture expressions*) but is not supported in multi-style text areas.
* This command expects "real" names for fields and tables, even if a "virtual" structure has been defined using [SET TABLE TITLES](set-table-titles.md) and [SET FIELD TITLES](set-field-titles.md) commands.

If *expression* returns a value containing carriage returns and tabs, 4D formats the text according to the object hosting the expression; carriage return characters are interpreted as line breaks. 

You can format the expression by including formatting information in the *expression* parameter. In this case, the parameter must be in the form:  

```RAW
"String(value;format)"
```

... where *value* contains the expression itself and *format* contains the format to apply. The *format* parameter can have the following values: 

* for numbers: any number display format (existing or not), for example "###,##".
* for dates: a number designating an existing date format. You can use the constants of the "*Date Display Formats*" theme, for example System date short .
* for times: a number designating an existing time format. You can use the constants of the "*Time Display Formats*" theme, for example System time short .

For example:

```4d
 "String([Table_1]Field_1;System date short)"
```

By default, the expression **values** are displayed in the multi-style text areas. You can force the display of the **references** instead using the [ST SET OPTIONS](st-set-options.md) command.

The optional *startSel* and *endSel* parameters designate a selection of text in *object*. The *startSel* and *endSel* values express a plain text selection, without taking into account any style tags that may be present. 

* If you only pass *startSel*, the result of the expression is inserted at the specified location.
* If you omit *startSel* and *endSel*, the result of the expression is inserted at the location of the cursor.
* If you pass *startSel* and *endSel*, **ST INSERT EXPRESSION** replaces the text in this selection with the result of the *expression*. If the value of *endSel* is greater than the total number of characters in the object, all the characters between *startSel* and the end of the text are replaced by the result of the *expression*.

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

You want to replace the highlighted text with a field value:

```4d
 ST INSERT EXPRESSION(*;"myText";"[Customer]LastName";ST Start highlight;ST End highlight)
```

#### See also 

[ST COMPUTE EXPRESSIONS](st-compute-expressions.md)  
[ST FREEZE EXPRESSIONS](st-freeze-expressions.md)  
[ST Get expression](st-get-expression.md)  
[ST INSERT URL](st-insert-url.md)  