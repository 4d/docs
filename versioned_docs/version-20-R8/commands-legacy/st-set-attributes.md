---
id: st-set-attributes
title: ST SET ATTRIBUTES
slug: /commands/st-set-attributes
displayed_sidebar: docs
---

<!--REF #_command_.ST SET ATTRIBUTES.Syntax-->**ST SET ATTRIBUTES** ( {* ;} *object* ; *startSel* ; *endSel* ; *attribName* ; *attribValue* {; *attribName2* ; *attribValue2* ; ... ; *attribNameN* ; *attribValueN*} )<!-- END REF-->
<!--REF #_command_.ST SET ATTRIBUTES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) <br/>If omitted, object is a variable or a field |
| object | any | &#8594;  | Object name (if * is specified) or <br/>Text field or variable (if * is omitted) |
| startSel | Integer | &#8594;  | Start of new text selection |
| endSel | Integer | &#8594;  | End of new text selection |
| attribName | Text | &#8594;  | Attribute to set |
| attribValue | Text, Integer | &#8594;  | New value of attribute |

<!-- END REF-->

#### Description 

<!--REF #_command_.ST SET ATTRIBUTES.Summary-->The ST SET ATTRIBUTES command can be used to modify one or more style attributes in the form object(s) designated by *object*.<!-- END REF--> 

##### 

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (string). During execution, when the object has the focus, the command only applies to the object being edited and not to its data source (field or variable). The changes are only transferred to the source (and to any other objects using this same source) when the object being edited is validated either by losing the focus or with the **Enter** key. When the object does not have the focus, the command applies directly to the data source and the changes are immediately transferred to any other objects using the same source.   
If you omit the *\** parameter, this indicates that the *object* parameter is a field or variable and you pass a field or variable reference instead of a string. The command applies directly to the field or variable and changes are immediately transferred to all the objects using this source, including the object with the focus. 

##### 

**Note:** You can only use style attributes with Text type fields. Since Alpha type fields have a preset length, adding style tags would lead to a loss of data. 

The definition of an attribute is carried out via the insertion or modification of HTML style tags within the text (for more information about this point, refer to the *Design Reference* manual). Note that ST SET ATTRIBUTES inserts style tags in all cases, even if the *object* designates text objects of the form that do not have the Multistyle property.

The *startSel* and *endSel* parameters can be used to designate the selection of text to which to apply the style modification(s) within the *object*. In *startSel*, you pass the position of the first character to be modified and in *endSel*, you pass the position of the last character to be modified plus one (the last character passed is not included in the modification). You can pass 0 in *endSel* to designate automatically the last character of the text (pass 1 in *startSel* to designate the first character of the text).  
If the value of *endSel* is greater than the number of characters in the object, all the characters between *startSel* and the end of the text are modified. If *startSel* is greater than *endSel* (except when *endSel* value is 0, see above), the command does nothing and the OK variable is set to 0\.   
The *startSel* and *endSel* values do not take any style tags already present in the area into account. They are evaluated on the basis of raw text (text where style tags have been filtered).

4D provides predefined constants so that you can designate the selection limits automatically in the *startSel* and *endSel* parameters. These constants are found in the "*Multistyle Text*" theme: 

| Constant           | Type    | Value  | Comment                                                             |
| ------------------ | ------- | ------ | ------------------------------------------------------------------- |
| ST End highlight   | Integer | \-1001 | Designates last character of current text selection in object (\*)  |
| ST End text        | Integer | 0      | Designates last character of text contained in object               |
| ST Start highlight | Integer | \-1000 | Designates first character of current text selection in object (\*) |
| ST Start text      | Integer | 1      | Designates first character of text contained in object              |

(\*) You must pass an object name in *object* to be able to use this constant. If you pass a reference to a field or variable, the command is applied to all the text of the object.

In *attribName* and *attribValue*, pass the name and the value, respectively, of the attribute to be modified. You can pass as many attribute/value pairs as you want. To specify the *attribName* parameter, use the predefined constants placed in the *Multistyle Text Attributes* theme. The value passed in the *attribValue* parameter depends on the *attribName* parameter:

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

**Colors**  
If you pass the Attribute text color or Attribute background color constants in *attribName*, you must pass a string containing either an HTML color name or a hexadecimal color value in *attribValue*:  

| **HTML color name** | **Hexa value** |
| ------------------- | -------------- |
| Aqua                | #00FFFF        |
| Black               | #000000        |
| Blue                | #0000FF        |
| Fuchsia             | #FF00FF        |
| Gray                | #808080        |
| Green               | #008000        |
| Lime                | #00FF00        |
| Maroon              | #800000        |
| Navy                | #000080        |
| Olive               | #808000        |
| Purple              | #800080        |
| Red                 | #FF0000        |
| Silver              | #C0C0C0        |
| Teal                | #008080        |
| White               | #FFFFFF        |
| Yellow              | #FFFF00        |

#### Example 

In this example, we modify the size and color of the text as well as the bold and underline attributes of the characters 2 to 4 of the field:

```4d
 ST SET ATTRIBUTES([MyTable]MyField;2;5;Attribute font name;"Arial";Attribute text size;10;Attribute underline style;1;Attribute bold style;1;Attribute text color;"Blue")
```

#### System variables and sets 

After this command is executed, the OK variable is set to 1 if no error occurred; otherwise, it is set to 0\. This is the case more particularly when style tags are not evaluated properly (incorrect or missing tags).   

In the case of an error, the variable is not changed. When an error occurs on a variable when text is being evaluated, 4D transforms the text into plain text; as a result, the <, > and & characters are converted into HTML entities.

#### See also 

[FONT LIST](font-list.md)  
[ST GET ATTRIBUTES](st-get-attributes.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1093 |
| Thread safe | &cross; |
| Modifies variables | OK |


