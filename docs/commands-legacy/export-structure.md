---
id: export-structure
title: EXPORT STRUCTURE
slug: /commands/export-structure
displayed_sidebar: docs
---

<!--REF #_command_.EXPORT STRUCTURE.Syntax-->**EXPORT STRUCTURE** ( *exportedStructure* {; *format*} )<!-- END REF-->
<!--REF #_command_.EXPORT STRUCTURE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| exportedStructure | Text | &#8592; | Export of the 4D database structure definition (by default in XML format) |
| format | Text | &#8594;  | Export format: xml format (default) or html format |

<!-- END REF-->

#### Description 

<!--REF #_command_.EXPORT STRUCTURE.Summary-->The **EXPORT STRUCTURE** command exports the structure definition of the current 4D database in *exportedStructure*.<!-- END REF-->

In exportedStructure, you pass the text variable intended to store the structure definition. The exported definition includes tables, fields, indexes, and relations, as well as their attributes and any characteristics necessary for a complete description of the structure. Invisible elements are exported with the corresponding attribute. However, deleted elements are not exported. 

By default if you omit the *format* parameter, the command exports the structure definition in XML format. Otherwise, you can pass one of the following constants in the *format* parameter:

| Constant    | Value | Comment                                   |
| ----------- | ----- | ----------------------------------------- |
| html format | html  | Exports structure in html format          |
| xml format  | xml   | Exports structure in xml format (default) |

The command generates the same XML or HTML code as the **Export >** **Structure definition to XML file... or** **Export >** **Structure definition to HTML file...**menu item (see *Exporting and importing structure definitions*).

* **xml format**: the internal "grammar" of 4D structure definitions is documented by means of DTD files — also used for the validation of XML files. The DTD files used by 4D are grouped together in the **DTD** folder, found next to the 4D application. The **base\_core.dtd** and **common.dtd** files are used for structure definitions. For more information, you can consult these files along with the comments they contain.  
A structure definition exported in XML format can be imported in another database (see [IMPORT STRUCTURE](import-structure.md)).
* **html format**: the command generates raw HTML code which includes references to a folder containing external resources such as pictures or css, required for HTML representation. If you want to save this code in an HTML page to be displayed in a browser, you can reuse the folder created by the **Export >** **Structure definition to HTML file...** menu item, or create your own resources folder.

#### Example 1 

You want to export the current database structure in a text file:

```4d
 var $vTStruc : Text
 EXPORT STRUCTURE($vTStruc)
 TEXT TO DOCUMENT("myStructure.xml";$vTStruc)
```

#### Example 2 

You want to export the current database structure in html format:

```4d
 var $vHtml : Text
 EXPORT STRUCTURE($vHtml;html format)
 File("/PACKAGE/myProject Structure Export/myProject.html").setText($vHtml)
```

#### See also 

[IMPORT STRUCTURE](import-structure.md)  