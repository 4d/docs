---
id: svg-export-to-picture
title: SVG EXPORT TO PICTURE
slug: /commands/svg-export-to-picture
displayed_sidebar: docs
---

<!--REF #_command_.SVG EXPORT TO PICTURE.Syntax-->**SVG EXPORT TO PICTURE** ( *elementRef* ; *pictVar* {; *exportType*} )<!-- END REF-->
<!--REF #_command_.SVG EXPORT TO PICTURE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | Root XML element reference |
| pictVar | Picture | &#8594;  | Picture variable to receive XML tree (SVG picture) |
| exportType | Integer | &#8594;  | 0 = Do not store data source, 1 = Copy data source (default), 2 = Own data source |

<!-- END REF-->

#### Description 

<!--REF #_command_.SVG EXPORT TO PICTURE.Summary-->The **SVG EXPORT TO PICTURE** command saves an SVG format picture contained in an XML tree in the picture field or variable indicated by the *pictVar* parameter.<!-- END REF-->For more information about the SVG format, refer to the *Overview of XML Utilities Commands* section. 

Pass the root XML element reference that contains the SVG picture in *elementRef*.

Pass the name of the 4D picture field or variable that will contain the SVG picture in *pictVar*. The picture is exported in its native format (XML description) and is redrawn via the SVG rendering engine when it is displayed.

The optional *exportType* parameter specifies the way the XML data source is to be handled by the command. You can pass one of the following constants, found in the “*XML*” theme, in this parameter:

| Constant             | Type    | Value | Comment                                                                                                                                                                                                                                                    |
| -------------------- | ------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Copy XML data source | Integer | 1     | 4D keeps a copy of the DOM tree with the picture, which means the picture can be saved in a picture field of the database and then redisplayed or exported at any time. This is the default mode for exporting when the *exportType* parameter is omitted. |
| Get XML data source  | Integer | 0     | 4D only reads the XML data source; it is not kept with the picture. This noticeably increases command execution speed; however, because the DOM tree is not kept, it is not possible to store or export the picture.                                       |
| Own XML data source  | Integer | 2     | 4D exports the DOM tree with the picture. The picture can be stored or exported and command execution is fast. However, the *elementRef* XML reference can then no longer be used by other 4D commands.                                                    |

#### Example 

The following example can be used to display “Hello World” in a 4D picture:  

```4d
 var vpict : Picture
 $svg:=DOM Create XML Ref("svg";"http://www.w3.org/2000/svg")
 $ref:=DOM Create XML element($svg;"text";"font-size";26;"fill";"red")
 DOM SET XML ATTRIBUTE($ref;"y";"1em")
 DOM SET XML ELEMENT VALUE($ref;"Hello World")
 SVG EXPORT TO PICTURE($svg;vpict;Copy XML data source)
 DOM CLOSE XML($svg)
```

![](../assets/en/commands/pict14520.en.png)

#### See also 

[DOM EXPORT TO FILE](dom-export-to-file.md)  
[DOM EXPORT TO VAR](dom-export-to-var.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1017 |
| Thread safe | &check; |
| Forbidden on the server ||


