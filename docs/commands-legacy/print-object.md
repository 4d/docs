---
id: print-object
title: Print object
slug: /commands/print-object
displayed_sidebar: docs
---

<!--REF #_command_.Print object.Syntax-->**Print object** ( {* ;} *object* {; *posX* {; *posY* {; *width* {; *height*}}}} ) : Boolean<!-- END REF-->
<!--REF #_command_.Print object.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) <br/>If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or <br/>Variable (if * is omitted) |
| posX | Integer | &#8594;  | Horizontal location of object |
| posY | Integer | &#8594;  | Vertical location of object |
| width | Integer | &#8594;  | Width of object (pixels) |
| height | Integer | &#8594;  | Height of object (pixels) |
| Function result | Boolean | &#8592; | True = object entirely printed; otherwise False |

<!-- END REF-->

#### Description 

<!--REF #_command_.Print object.Summary-->The **Print object** command lets you print the form object(s) designated by the *object* and *\** parameters, at the location set by the *posX* and *posY* parameters.<!-- END REF-->

Before calling the **Print object** command, you must designate the table or project form containing the objects to be printed, using the [FORM LOAD](../commands/form-load.md) command. 

If you pass the optional *\** parameter, you indicate that the object parameter is an object name (character string). If you do not pass the *\** parameter, you indicate that object is a variable. In this case, you pass a variable reference (object type only) instead of a string.

The *posX* and *posY* parameters specify the starting point for printing the object(s). These values must be expressed in pixels. If these parameters are omitted, the object will be printed according to its location in the form. 

The *width* and *height* parameters are used to specify the width and height of the form object. The **Print object** command does not manage objects of variable size. You must use the [OBJECT GET BEST SIZE](object-get-best-size.md) command to manage the size of objects. You can also use the [OBJECT GET BEST SIZE](object-get-best-size.md) command to find out the most appropriate size for objects containing text. Similarly, **Print object** will not cause automatic page breaks. You must manage them according to your needs. 

You can use 4D commands to modify object properties (color, size, etc.) on the fly.

The command returns True if the object has been completely printed and False if this is not the case; in other words, if it was not able to print all the data associated with the object within the set framework. Typically, the command returns False when printing a list box if all the rows of the list box could not be printed. In this case, you can simply call the **Print object** command repeatedly until it returns True: a specific mechanism automatically causes the contents of the object to scroll after each call. If the user cancels the printing operation, a -128 error is generated, that you can intercept using [ON ERR CALL](on-err-call.md).

**Notes:**  

* In the current version of 4D, only list box type objects have this mechanism (the command always returns True for any other type of object).
* The [LISTBOX GET PRINT INFORMATION](listbox-get-print-information.md) command lets you check the status of the printing during the operation.

The **Print object** command can only be used in the context of a print job opened beforehand with the [OPEN PRINTING JOB](open-printing-job.md) command. If it is not called in this context, the command does nothing. Several Print object commands can be called in the same print job. 

**Note:** Hierarchical lists, subforms and Web areas cannot be printed.

#### Example 1 

Example for printing ten objects in a form:

```4d
 PRINT SETTINGS
 If(OK=1)
    OPEN PRINTING JOB
    If(OK=1)
       FORM LOAD("PrintForm")
       x:=100
       y:=50
       GET PRINTABLE AREA(hpaper;wpaper)
       For($i;1;10)
          OBJECT GET BEST SIZE(*;"Obj"+String($i);bestwidth;bestheight)
          $end:=Print object(*;"Obj"+String($i))
          y:=y+bestheight+15
          If(y>hpaper)
             PAGE BREAK(>)
             y:=50
          End if
       End for
    End if
    CLOSE PRINTING JOB
 End if
```

#### Example 2 

Example of printing a complete list box:

```4d
 OPEN PRINTING JOB
 FORM LOAD("myForm")
 $Over:=False
 gError:=0
 ON ERR CALL("err")
 Repeat
    $Total:=Print object(*;"List_Box")
    LISTBOX GET PRINT INFORMATION(*;"List_Box";lk printing is over;$Over)
    PAGE BREAK
    If(gError=-128) //the user has cancelled the operation
       $Over:=True
    End if
 Until($Over)
 CLOSE PRINTING JOB
 ON ERR CALL("")
```

#### See also 

[FORM LOAD](../commands/form-load.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1095 |
| Thread safe | &check; |
| Forbidden on the server ||


