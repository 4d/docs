---
id: st-get-expression
title: ST Get expression
slug: /commands/st-get-expression
displayed_sidebar: docs
---

<!--REF #_command_.ST Get expression.Syntax-->**ST Get expression** ( {* ;} *object* {; *startSel* {; *endSel*}} )  : Text<!-- END REF-->
<!--REF #_command_.ST Get expression.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | any | &#8594;  | Object name (if * is specified) or <br/>Field or variable (if * is omitted) |
| startSel | Integer | &#8594;  | Start of selection |
| endSel | Integer | &#8594;  | End of selection |
| Function result | Text | &#8592; | Expression label |

<!-- END REF-->

#### Description 

<!--REF #_command_.ST Get expression.Summary-->The **ST Get expression** command returns the first expression found in the current selection of the styled text field or variable designated by the *object* parameter.<!-- END REF--> 

The command returns the label of the expression as it was inserted into the object (for example "mymethod" or "\[table1\]field1"). The current value of the expression is not returned. 

**Note:** This command returns "real" names for fields and tables, even if a "virtual" structure has been defined using [SET TABLE TITLES](set-table-titles.md) and [SET FIELD TITLES](set-field-titles.md) commands. 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). During execution, if the object has the focus, the command returns the information of the object being edited; if the object does not have the focus, the command returns the information of the object’s data source (variable or field).  
If you omit the *\** parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string. During execution, the command returns the information of the variable or field.

The optional *startSel* and *endSel* parameters designate a selection of text in *object*. The *startSel* and *endSel* values express a plain text selection, without taking into account any style tags that may be present.

* If you pass *startSel* and *endSel*, **ST Get expression** looks for the expression within this selection.
* If you only pass *startSel* or if the value of *endSel* is greater than the total number of characters in *object*, the command looks for the expression between *startSel* and the end of the text.
* If you omit *startSel* and *endSel*, the command looks for the expression within the current text selection.

4D provides predefined constants so that you can designate the selection limits automatically in the *startSel* and *endSel* parameters. These constants are found in the "*Multistyle Text*" theme: 

| Constant           | Type    | Value  | Comment                                                             |
| ------------------ | ------- | ------ | ------------------------------------------------------------------- |
| ST End highlight   | Integer | \-1001 | Designates last character of current text selection in object (\*)  |
| ST End text        | Integer | 0      | Designates last character of text contained in object               |
| ST Start highlight | Integer | \-1000 | Designates first character of current text selection in object (\*) |
| ST Start text      | Integer | 1      | Designates first character of text contained in object              |

(\*) You must pass an object name in *object* to be able to use this constant. If you pass a reference to a field or variable, the command is applied to all the text of the object.

**Note:** If *startSel* is greater than *endSel* (except when *endSel* is 0), the command does nothing and the *OK* variable is set to 0.

If there is no expression found in the selection, the command returns an empty string. 

#### Example 1 

When there is a double-click event, you check that there is in fact an expression, and if so, you display a dialog where you have retrieved its values so that the user can modify them:

```4d
 Case of
    :(Form event code=On Double Clicked)
       GET HIGHLIGHT(*;"StyledText_t";startSel;endSel)
       If(ST Get content type(*;"StyledText_t";startSel;endSel)=ST Expression type)
          vExpression:=ST Get expression(*;"StyledText_t";startSel;endSel)
          $winRef:=Open form window("Dial_InsertExpr";Movable form dialog box;Horizontally centered;Vertically centered;*)
          DIALOG("Dial_InsertExpr")
          If(OK=1)
             ST INSERT EXPRESSION(*;"StyledText_t";vExpression;startSel;endSel)
             HIGHLIGHT TEXT(*;"StyledText_t";startSel;endSel)
          End if
       End if
 End case
```

#### Example 2 

You want to execute a 4D method when a user link is clicked:

```4d
 Case of
    :(Form event code=On Clicked)
  //we retrieve the selection
       HIGHLIGHT TEXT(*;"myText";startSel;endSel)
       If(startSel#endSel) //there is selected content
  //we get the content type
          $CT_type:=ST Get content type(*;"myText";startSel;endSel)
          If($CT_type=ST User type) //this is a user link
             MyMethod //we execute a 4D method
          End if
       End if
 End case
```

#### See also 

[ST INSERT EXPRESSION](st-insert-expression.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1287 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


