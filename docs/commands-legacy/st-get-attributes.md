---
id: st-get-attributes
title: ST GET ATTRIBUTES
slug: /commands/st-get-attributes
displayed_sidebar: docs
---

<!--REF #_command_.ST GET ATTRIBUTES.Syntax-->**ST GET ATTRIBUTES** ( {* ;} *object* ; *startSel* ; *endSel* ; *attribName* ; *attribValue* {; *attribName2* ; *attribValue2* ; ... ; *attribNameN* ; *attribValueN*} )<!-- END REF-->
<!--REF #_command_.ST GET ATTRIBUTES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) <br/>If omitted, object is a variable or a field |
| object | any | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| startSel | Integer | &#8594;  | Start of text selection |
| endSel | Integer | &#8594;  | End of text selection |
| attribName | Integer | &#8594;  | Attribute to get |
| attribValue | Variable | &#8592; | Current value of attribute |

<!-- END REF-->

#### Description 

<!--REF #_command_.ST GET ATTRIBUTES.Summary-->The ST GET ATTRIBUTES command is used to recover the current value of a style attribute in a selection of text of the form object(s) designated by *object*.<!-- END REF--> 

##### 

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (string). During execution, if the object has the focus, the command returns information about the object being edited; however, when the object does not have the focus, the command returns information about the data source (field or variable) of the object.  
If you omit the *\** parameter, this indicates that the *object* parameter is a field or a variable. In this case, you pass a field or variable reference instead of a string and during execution, the command returns information about this field or variable.

##### 

The *startSel* and *endSel* parameters are used to designate the text selection of the object from which the style attribute is to be read. Pass the position of the first character of the selection in *startSel* and the position plus one of the last character of the selection in *endSel*. You can pass 0 in *endSel* to designate automatically the last character of the text (pass 1 in *startSel* to designate the first character of the text).  
If the values of *startSel* and *endSel* are equal or if *startSel* is greater than *endSel* (except if *endSel* value is 0, see above), an error is returned.   
The *startSel* and *endSel* values do not take any style tags already present in the area into account. They are evaluated on the basis of raw text (text from which style tags have been filtered). 

4D provides predefined constants so that you can designate the selection limits automatically in the *startSel* and *endSel* parameters. These constants are found in the "*Multistyle Text*" theme: 

| Constant           | Type    | Value  | Comment                                                             |
| ------------------ | ------- | ------ | ------------------------------------------------------------------- |
| ST End highlight   | Integer | \-1001 | Designates last character of current text selection in object (\*)  |
| ST End text        | Integer | 0      | Designates last character of text contained in object               |
| ST Start highlight | Integer | \-1000 | Designates first character of current text selection in object (\*) |
| ST Start text      | Integer | 1      | Designates first character of text contained in object              |

(\*) You must pass an object name in *object* to be able to use this constant. If you pass a reference to a field or variable, the command is applied to all the text of the object.

Pass the name of the attribute to get in the *attribName* parameter and pass a variable which must recover the current value of the attribute in the *attribValue* parameter. To specify the *attribName* parameter, you must use one of the constants of the *Multistyle Text Attributes* theme.

| Constant                      | Type    | Value | Comment                                                                                                                                  |
| ----------------------------- | ------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Attribute background color    | Integer | 8     | *attribValue*\=Hexadecimal values or HTML color names (Windows only)                                                                     |
| Attribute bold style          | Integer | 1     | *attribValue*\=0: remove bold attribute from selection<br/>*attribValue*\=1: apply bold attribute to selection                   |
| Attribute font name           | Integer | 5     | *attribValue*\=Font family name (string)                                                                                                 |
| Attribute italic style        | Integer | 2     | *attribValue*\=0: remove italic attribute from selection<br/> *attribValue*\=1: apply italic attribute to selection              |
| Attribute strikethrough style | Integer | 3     | *attribValue*\=0: remove strikethrough attribute from selection<br/>*attribValue*\=1: apply strikethrough attribute to selection |
| Attribute text color          | Integer | 7     | *attribValue*\=Hexadecimal values or HTML color names                                                                                    |
| Attribute text size           | Integer | 6     | *attribValue*\=Number of points (number)                                                                                                 |
| Attribute underline style     | Integer | 4     | *attribValue*\=0: remove underline attribute from selection<br/> *attribValue*\=1: apply underline attribute to selection        |

You can pass as many attribute/value pairs as you want.

If the value of the *attribName* attribute is the same for all of the selection, it is returned in *attribValue*. If this value is different or if *object* does not contain SPAN tags, the following values are returned:  

| **attribName**                | **attribValue if attribute heterogenous in selection or no SPAN tags** |
| ----------------------------- | ---------------------------------------------------------------------- |
| Attribute background color    | FFFFFFFF                                                               |
| Attribute bold style          | 2                                                                      |
| Attribute font name           | "" (empty string)                                                      |
| Attribute italic style        | 2                                                                      |
| Attribute strikethrough style | 2                                                                      |
| Attribute text color          | FFFFFFFF                                                               |
| Attribute text size           | \-1                                                                    |
| Attribute underline style     | 2                                                                      |

#### Example 

Given a \[Table\_1\]StyledText field displayed in a form. The object has the Multistyle property and is named "StyledText\_t". You want to get the highlighted text as well as the status of the Bold style attribute. You can proceed in two different ways depending on whether you use the object name or the field reference. 

* Using the object name:

```4d
 $text:=ST Get text(*;"StyledText_t";ST Start highlight;ST End highlight)
 ST GET ATTRIBUTES(*;"StyledText_t";ST Start highlight;ST End highlight;Attribute bold style;$bold)
```

* Using the field name:

```4d
 GET HIGHLIGHT([Table_1]StyledText;$Begin_l;$End_l)
 $text:=ST Get text([Table_1]StyledText;$Begin_l;$End_l)
 ST GET ATTRIBUTES([Table_1]StyledText;$Begin_l;$End_l;Attribute bold style;$bold)
```

#### System variables and sets 

After this command is executed, the OK variable is set to 1 if no error occurred; otherwise, it is set to 0\. This is the case more particularly when style tags are not evaluated properly (incorrect or missing tags).   

In the case of an error, the variable is not changed. When an error occurs on a variable when text is being evaluated, 4D transforms the text into plain text; as a result, the <, > and & characters are converted into HTML entities.

#### See also 

[ST SET ATTRIBUTES](st-set-attributes.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1094 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


