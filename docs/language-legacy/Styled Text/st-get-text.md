---
id: st-get-text
title: ST Get text
slug: /commands/st-get-text
displayed_sidebar: docs
---

<!--REF #_command_.ST Get text.Syntax-->**ST Get text** ( * ; *object* : Text {; *startSel* : Integer {; *endSel* : Integer}} )  : Text<br/>**ST Get text** ( *object* : Variable, Field {; *startSel* : Integer {; *endSel* : Integer}} )  : Text<!-- END REF-->
<!--REF #_command_.ST Get text.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) <br/>If omitted, object is a variable or a field |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| startSel | Integer | &#8594;  | Start of selection |
| endSel | Integer | &#8594;  | End of selection |
| Function result | Text | &#8592; | Text including style tags |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|14|Renamed|
|12.1|Modified|
|12|Created|

</details>
</div>

## Description 

<!--REF #_command_.ST Get text.Summary-->The ST Get text command returns the styled text found in the text field or variable designated by the *object* parameter.<!-- END REF--> 

### 

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (string). During execution, if the object has the focus, the command returns information about the object being edited; however, when the object does not have the focus, the command returns information about the data source (field or variable) of the object.  
If you omit the *\** parameter, this indicates that the *object* parameter is a field or a variable. In this case, you pass a field or variable reference instead of a string and during execution, the command returns information about this field or variable.

### 

The command returns the text with any style tags that are associated with it, which means, for example, that you can copy and paste text while keeping its style. 

The optional *startSel* and *endSel* parameters let you designate a selection of text in object. The *startSel* and *endSel* values give a selection of plain text, without taking any style tags found in the text into account. 

* If you omit *startSel* and *endSel*, ST Get text returns all the text contained in *object*,
* If you pass *startSel* and *endSel*, ST Get text returns the selection of text set by these limits.

4D provides predefined constants so that you can designate the selection limits automatically in the *startSel* and *endSel* parameters. These constants are found in the "*Multistyle Text*" theme: 

| Constant           | Type    | Value  | Comment                                                             |
| ------------------ | ------- | ------ | ------------------------------------------------------------------- |
| ST End highlight   | Integer | \-1001 | Designates last character of current text selection in object (\*)  |
| ST End text        | Integer | 0      | Designates last character of text contained in object               |
| ST Start highlight | Integer | \-1000 | Designates first character of current text selection in object (\*) |
| ST Start text      | Integer | 1      | Designates first character of text contained in object              |

(\*) You must pass an object name in *object* to be able to use this constant. If you pass a reference to a field or variable, the command is applied to all the text of the object.

If the values of *startSel* and *endSel* are equal or if *startSel* is greater than *endSel*, an error is returned. 

## System variables and sets 

After this command is executed, the OK variable is set to 1 if no error occurred; otherwise, it is set to 0\. This is the case more particularly when style tags are not evaluated properly (incorrect or missing tags).   

In the case of an error, the variable is not changed. When an error occurs on a variable when text is being evaluated, 4D transforms the text into plain text; as a result, the <, > and & characters are converted into HTML entities.

## See also 

[ST Get plain text](../commands/st-get-plain-text)  
[ST SET TEXT](../commands/st-set-text)  
[TEXT TO ARRAY](../commands/text-to-array)  

## Properties

|  |  |
| --- | --- |
| Command number | 1116 |
| Thread safe | no |
| Modifies variables | OK |


