---
id: svg-get-attribute
title: SVG GET ATTRIBUTE
slug: /commands/svg-get-attribute
displayed_sidebar: docs
---

<!--REF #_command_.SVG GET ATTRIBUTE.Syntax-->**SVG GET ATTRIBUTE** ( {* ;} *pictureObject* ; element_ID ; *attribName* ; *attribValue* )<!-- END REF-->
<!--REF #_command_.SVG GET ATTRIBUTE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, pictureObject is an object name (string) <br/>If omitted, pictureObject is a variable |
| pictureObject | Picture | &#8594;  | Object name (if * specified) or <br/>Variable or field (if * omitted) |
| element_ID | Text | &#8594;  | ID of element whose attribute value you want to get |
| attribName | Text | &#8594;  | Attribute whose value you want to get |
| attribValue | Text, Integer | &#8592; | Current value of attribute |

<!-- END REF-->

#### Description 

<!--REF #_command_.SVG GET ATTRIBUTE.Summary-->The SVG GET ATTRIBUTE command is used to get the current value of the *attribName* attribute in an object or an SVG picture.<!-- END REF--> 

If you pass the optional *\** parameter, you indicate that the *pictureObject* parameter is an object name (string). In this case, the command returns the value of the attribute for the rendered image attached to the object. This value may have been modified by [SVG SET ATTRIBUTE](svg-set-attribute.md) for example.   
If you do not pass the *\** parameter, you indicate that the *pictureObject* parameter is a variable or a field. Therefore, you pass a variable (object variable only) or field reference instead of a string. In this case, the command returns the value of the attribute for the initial rendered image (corresponding to the data source of the variable). 

**Note:** This principle also applies to the [SVG Find element ID by coordinates](svg-find-element-id-by-coordinates.md) command. 

The *element\_ID* parameter is used to set the ID ("id" or "xml:id" attribute) of the element whose attribute value you want to get. 

For more information about SVG attributes, please refer to the description of the [SVG SET ATTRIBUTE](svg-set-attribute.md) command. Here is a list of 4D attributes reserved and dedicated to animation:

| **Attributes**                                | **Access** | **Comments**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4D-text                                       | read/write | Replaces/reads the contents of the text node. Can be used with 'text' 'tspan' and 'textArea' elements.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 4D-bringToFront                               | write      | If 'true', move node in front of sibling nodes. Can only be used with the [SVG SET ATTRIBUTE](svg-set-attribute.md) command.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 4D-isOfClass-{IDENT \[\[S\|COMMA\] IDENT\]\*} | read       | Returns 'true' if inherited class attribute of node contains all class name(s); otherwise, returns 'false'. Returns for example true for "4D-isOfClass-land" if the inherited class of the node is "land department01").                                                                                                                                                                                                                                                                                                                            |
| 4D-enableD2D                                  | read/write | If 'false', disables Direct2D for the SVG rendering engine. In fact, SVG filters are not rendered in Direct2D but they are in GDI/GDIPlus. This option lets you use SVG filters even when the database is in Direct2D. Note that this option is only taken into account when a picture has already been loaded into the *pictureObject*. However, since this option is applied globally to the engine, you only need to set it once per session (for example with a simple SVG loaded in memory from a text variable when the database is started). |

#### See also 

[SVG SET ATTRIBUTE](svg-set-attribute.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1056 |
| Thread safe | &cross; |


