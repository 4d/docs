---
id: st-get-url
title: ST GET URL
slug: /commands/st-get-url
displayed_sidebar: docs
---

<!--REF #_command_.ST GET URL.Syntax-->**ST GET URL** ( {* ;} *object* ; *urlText* ; *urlAddress* {; *startSel* {; *endSel*}} )<!-- END REF-->
<!--REF #_command_.ST GET URL.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | any | &#8594;  | Object name (if * is specified) or <br/>Field or variable (if * is omitted) |
| urlText | Text | &#8592; | Visible text of URL |
| urlAddress | Text | &#8592; | URL address |
| startSel | Integer | &#8594;  | Start of selection |
| endSel | Integer | &#8594;  | End of selection |

<!-- END REF-->

#### Description 

<!--REF #_command_.ST GET URL.Summary-->The **ST GET URL** command returns the text label and address of the first URL detected in the styled text field or variable designated by the *object* parameter.<!-- END REF--> 

The text label and address are returned in the *urlText* and *urlAddress* parameters. If the selection does not contain a URL, empty strings are returned in these parameters. 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). During execution, if the object has the focus, the command returns the information of the object being edited; if the object does not have the focus, the command returns the information of the object’s data source (variable or field).  
If you omit the *\** parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string. During execution, the command returns the information of the variable or field.

The optional *startSel* and *endSel* parameters designate a selection of text in object. The *startSel* and *endSel* values express a plain text selection, without taking into account any style tags that may be present. 

* If you pass *startSel* and *endSel*, **ST GET URL** looks for the URL within this selection.
* If you only pass *startSel* or if the value of *endSel* is greater than the total number of characters in *object*, the command looks for the URL between *startSel* and the end of the text.
* If you omit *startSel* and *endSel*, the command looks for the URL within the current text selection.

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

When there is a double-click event, you check that there is in fact an URL, and if so, you display a dialog where you have retrieved its values so that the user can modify them:

```4d
 Case of
    :(Form event code=On Double Clicked)
       GET HIGHLIGHT(*;"StyledText_t";startSel;endSel)
       If(ST Get content type(*;"StyledText_t";startSel;endSel)=ST URL type) //URL
          ST GET URL(*;"StyledText_t";vTitle;vURL;startSel;endSel)
          $winRef:=Open form window("Dial_InsertURL";Movable form dialog box;Horizontally centered;Vertically centered;*)
          SET WINDOW TITLE("URL settings")
          DIALOG("Dial_InsertURL")
          If(OK=1)
             ST INSERT URL(*;"StyledText_t";vTitle;vURL;startSel;endSel)
             HIGHLIGHT TEXT(*;"StyledText_t";startSel;startSel+1)
          End if
       End if
 End case
```

#### See also 

[ST INSERT URL](st-insert-url.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1288 |
| Thread safe | &cross; |


