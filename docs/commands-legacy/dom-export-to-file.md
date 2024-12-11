---
id: dom-export-to-file
title: DOM EXPORT TO FILE
slug: /commands/dom-export-to-file
displayed_sidebar: docs
---

<!--REF #_command_.DOM EXPORT TO FILE.Syntax-->**DOM EXPORT TO FILE** ( *elementRef* ; *filePath* )<!-- END REF-->
<!--REF #_command_.DOM EXPORT TO FILE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | Root XML element reference |
| filePath | Text | &#8594;  | Full access path of the file |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM EXPORT TO FILE.Summary-->The DOM EXPORT TO FILE command stores an XML tree in a file on disk.<!-- END REF--> 

Pass the root element reference to export in the *elementRef* parameter. 

Pass the full access path to use or create of the export file in *filePath*. If the file does not already exist, it is created. 

If you only pass a file name (without an access path), a search for the file will take place or it will be created next to the structure file.

If you pass an empty string (*""*), a standard open file and new file dialog box appears.

##### About end-of-line characters and BOM management 

In XML, line breaks are not significant regardless of whether they are within or between XML elements. Internally, XML uses standard LF characters as line separators. During import and export operations, line break characters can be converted. During an import, the XML parser replaces CRLF characters (standard line breaks under Windows) with LF characters. During export, LF characters are replaced by CRLF characters on Windows (no replacement on macOS).

**Note:** If you want to keep carriage returns, you must include them in an XML CDATA element so that they will not be processed by the XML parser. Instead of CRLF characters, you can also use "<br/>" characters, which are explicit carriage returns that will not be processed by the parser.

By default, XML files are written without BOM (Byte order mask). 

You can control the XML line ending and BOM management using the [XML SET OPTIONS](xml-set-options.md) command. 

**Compatibility Note:** In databases/projects created with 4D versions up to v19.x, by default 4D uses CR as end-of-line characters on macOS and a BOM. To enable the new default settings, check compatibility settings (see *Compatibility page*) or use the [XML SET OPTIONS](xml-set-options.md) command. 

#### Example 

This example stores the tree *vElemRef* in the file MyDoc.xml:

```4d
 DOM EXPORT TO FILE(vElemRef;"C:\\folder\MyDoc.xml")
```

#### System variables and sets 

If the command has been executed correctly, the system variable OK is set to 1\. Otherwise, it is set to 0 and an error is generated. 

#### Error management 

An error is generated when:

* The element reference is invalid,
* The specified access path is invalid,
* The storage volume returns an error (insufficient disk space, etc.).

#### See also 

[DOM EXPORT TO VAR](dom-export-to-var.md)  
[SVG EXPORT TO PICTURE](svg-export-to-picture.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 862 |
| Thread safe | &check; |
| Modifies variables | OK, error |
| Forbidden on the server ||


