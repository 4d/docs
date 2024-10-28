---
id: dom-export-to-var
title: DOM EXPORT TO VAR
slug: /commands/dom-export-to-var
displayed_sidebar: docs
---

<!--REF #_command_.DOM EXPORT TO VAR.Syntax-->**DOM EXPORT TO VAR** ( *elementRef* ; *vXmlVar* )<!-- END REF-->
<!--REF #_command_.DOM EXPORT TO VAR.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | Root XML element reference |
| vXmlVar | Text, Blob | &#8592; | Variable to receive XML tree |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM EXPORT TO VAR.Summary-->The **DOM EXPORT TO VAR** command saves an XML tree in a text or BLOB variable.<!-- END REF--> 

Pass the root element reference to export in *elementRef*. 

Pass the name of the variable that must contain the XML tree in *vXmlVar*. This variable must either be a Text or BLOB type. You can select the type depending on what you plan on doing next or the size that the tree can reach (remember that when not in Unicode mode, Text type variables are limited to 32 K of text, whereas in Unicode mode, this limit is 2 GB). 

Keep in mind that if you use a Text variable to store *elementRef* when not in Unicode mode, , it will be encoded using the “current” Mac character set (i.e. Mac Roman on most Western systems). This means that the text returned will lose its original encoding (encoding="xxx"). In this case, the *vVarXml* variable allows you to view or store the code but NOT to generate a valid XML document (using the [SEND PACKET](send-packet.md) command for example). 

In Unicode mode, the original encoding is kept in the variable.

##### About end-of-line characters and BOM management 

In XML, line breaks are not significant regardless of whether they are within or between XML elements. Internally, XML uses standard LF characters as line separators. During import and export operations, line break characters can be converted. During an import, the XML parser replaces CRLF characters (standard line breaks under Windows) with LF characters. During export, LF characters are replaced by CRLF characters on Windows (no replacement on macOS).

**Note:** If you want to keep carriage returns, you must include them in an XML CDATA element so that they will not be processed by the XML parser. Instead of CRLF characters, you can also use "<br/>" characters, which are explicit carriage returns that will not be processed by the parser.

By default, XML files are written without BOM (Byte order mask). 

You can control the XML line ending and BOM management using the [XML SET OPTIONS](xml-set-options.md) command. 

**Compatibility Note:** In databases/projects created with 4D versions up to v19.x, by default 4D uses CR as end-of-line characters on macOS and a BOM. To enable the new default settings, check compatibility settings (see *Compatibility page*) or use the [XML SET OPTIONS](xml-set-options.md) command. 

#### Example 

This example stores the tree vElemRef in a text variable: 

```4d
 var vtMyText : Text
 DOM EXPORT TO VAR(vElemRef;vtMyText)
```

#### System variables and sets 

If the command has been executed correctly, the system variable OK is set to 1\. Otherwise, it is set to 0 and an error is generated (for example, if the element reference is invalid).

#### See also 

[DOM EXPORT TO FILE](dom-export-to-file.md)  
[SVG EXPORT TO PICTURE](svg-export-to-picture.md)  