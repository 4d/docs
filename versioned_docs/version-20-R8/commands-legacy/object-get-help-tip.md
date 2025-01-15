---
id: object-get-help-tip
title: OBJECT Get help tip
slug: /commands/object-get-help-tip
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get help tip.Syntax-->**OBJECT Get help tip** ( {* ;} *object* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get help tip.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable |
| object | any | &#8594;  | Object Name (if * is specified) or Variable (if * is omitted) |
| Function result | Text | &#8592; | Help message of object |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get help tip.Summary-->The **OBJECT Get help tip** command returns the help message associated with the object(s) designated by the *object* and *\** parameters for the current process.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable. In this case, you pass a variable reference instead of a string.

The command returns the current help message associated with the object, as it is defined in Design mode or for the process using the [OBJECT SET HELP TIP](object-set-help-tip.md) command. The string returned shows the message as it appears when the form is executed. If it contains variable items (xliff *resname* or 4D references), they are interpreted according to the context. 

#### Example 

The title of a picture button is stored as a help message. This title is stored in an xliff file and differs according to the current language of the application: 

```4d
 OBJECT SET HELP TIP(*;"button1";":xliff:btn_discover")
 $helpmessage:=OBJECT Get help tip(*;"button1")
  // $helpmessage contains for example "Découvrir" with a French 4D and "Discover" with an English 4D.
```

#### See also 

[OBJECT SET HELP TIP](object-set-help-tip.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1182 |
| Thread safe | &cross; |


