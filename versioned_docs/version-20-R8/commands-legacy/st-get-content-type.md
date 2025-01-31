---
id: st-get-content-type
title: ST Get content type
slug: /commands/st-get-content-type
displayed_sidebar: docs
---

<!--REF #_command_.ST Get content type.Syntax-->**ST Get content type** ( {* ;} *object* {; *startSel* {; *endSel* {; *startBlock* {; *endBlock*}}}} ) : Integer<!-- END REF-->
<!--REF #_command_.ST Get content type.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | any | &#8594;  | Object name (if * is specified) or <br/>Field or variable (if * is omitted) |
| startSel | Integer | &#8594;  | Start of selection |
| endSel | Integer | &#8594;  | End of selection |
| startBlock | Integer | &#8592; | Start position of first type of selection |
| endBlock | Integer | &#8592; | End position of first type of selection |
| Function result | Integer | &#8592; | Type of content |

<!-- END REF-->

#### Description 

<!--REF #_command_.ST Get content type.Summary-->The **ST Get content type** command returns the type of content found in the styled text field or variable designated by the *object* parameter.<!-- END REF--> 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). During execution, if the object has the focus, the command returns the information of the object being edited; if the object does not have the focus, the command returns the information of the object’s data source (variable or field).  
If you omit the *\** parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string. During execution, the command returns the information of the variable or field.

The optional *startSel* and *endSel* parameters designate a selection of text in *object*. The *startSel* and *endSel* values express a plain text selection, without taking into account any style tags that may be present. 

* If you pass *startSel* and *endSel*, **ST Get content type** evaluates the contents within this selection.
* If you only pass *startSel* or if the value of *endSel*is greater than the total number of characters in *object*, the contents between *startSel* and the end of the text is evaluated.
* If you omit *startSel* and *endSel*, the contents within the current text selection is evaluated.

4D provides predefined constants so that you can designate the selection limits automatically in the *startSel* and *endSel* parameters. These constants are found in the "*Multistyle Text*" theme: 

| Constant           | Type    | Value  | Comment                                                             |
| ------------------ | ------- | ------ | ------------------------------------------------------------------- |
| ST End highlight   | Integer | \-1001 | Designates last character of current text selection in object (\*)  |
| ST End text        | Integer | 0      | Designates last character of text contained in object               |
| ST Start highlight | Integer | \-1000 | Designates first character of current text selection in object (\*) |
| ST Start text      | Integer | 1      | Designates first character of text contained in object              |

(\*) You must pass an object name in *object* to be able to use this constant. If you pass a reference to a field or variable, the command is applied to all the text of the object.

**Note:** If *startSel* is greater than *endSel* (except when *endSel* is 0), the command does nothing and the *OK* variable is set to 0.

The optional *startBlock* and *endBlock* parameters retrieve the position of the first and last character of the first homogenous block identified in the object or the selection of the object. For example, if the selection contains an expression and then plain text, *startBlock* and *endBlock* will return the limits of the expression. You can make a loop to process all the blocks of the selection.

This command returns a value designating the type of contents identified. You can compare this value with the following constants, found in the "*Multistyle Text*" theme: 

| Constant            | Type    | Value | Comment                                                     |
| ------------------- | ------- | ----- | ----------------------------------------------------------- |
| ST Expression type  | Integer | 2     | Selection contains only an expression reference             |
| ST Mixed type       | Integer | 3     | Selection contains at least two different types of contents |
| ST Picture type     | Integer | 6     | Selection contains only a picture (4D Write Pro areas only) |
| ST Plain type       | Integer | 0     | Selection contains text and no references                   |
| ST Unknown tag type | Integer | 4     | Selection contains only an unknown tag type                 |
| ST URL type         | Integer | 1     | Selection contains only a URL reference                     |
| ST User type        | Integer | 5     | Selection contains only a custom reference                  |

#### Example 

You want to display context-menu commands based on the type of contents selected in the area.

```4d
 Case of
    :(Form event code=On Clicked)
  //we retrieve the selection
       GET HIGHLIGHT(*;"myText";startSel;endSel)
       If(Contextual click&(Macintosh control down=False)) //calls the context menu
          If(startSel=endSel) // no contents selected
  //we enable only certain commands
             DISABLE MENU ITEM(<>menu_STYLEDTEXT;2)
             DISABLE MENU ITEM(<>menu_STYLEDTEXT;4)
             ENABLE MENU ITEM(<>menu_STYLEDTEXT;6)
             ...
          Else // we get the content type
             CT_Texttype:=ST Get content type(*;"myText";startSel;endSel)
             Case of // processing of different types
                :(CT_Texttype=ST URL type)
                   DISABLE MENU ITEM(<>menu_STYLEDTEXT;6)
                   ENABLE MENU ITEM(<>menu_STYLEDTEXT;7)
                   ...
                :(CT_Texttype=ST Expression type)
                   DISABLE MENU ITEM(<>menu_STYLEDTEXT;6)
                   DISABLE MENU ITEM(<>menu_STYLEDTEXT;7)
                   ...
                Else
                   ENABLE MENU ITEM(<>menu_STYLEDTEXT;6)
                   DISABLE MENU ITEM(<>menu_STYLEDTEXT;7)
                   ...
             End case
          End if
          MOUSE POSITION($xCoord;$yCoord;$ButtonState)
          $AlphaVar:=Dynamic pop up menu(<>menu_STYLEDTEXT;"";$xCoord;$yCoord)
          startSel:=-3
          endSel:=-3
       End if
       ...
    End if
```


#### Properties

|  |  |
| --- | --- |
| Command number | 1286 |
| Thread safe | &cross; |
| Modifies variables | OK |


