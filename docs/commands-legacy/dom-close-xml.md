---
id: dom-close-xml
title: DOM CLOSE XML
slug: /commands/dom-close-xml
displayed_sidebar: docs
---

<!--REF #_command_.DOM CLOSE XML.Syntax-->**DOM CLOSE XML** ( *elementRef* )<!-- END REF-->
<!--REF #_command_.DOM CLOSE XML.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML root element reference |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM CLOSE XML.Summary-->The DOM CLOSE XML command frees up the memory occupied by the XML object designated by *elementRef*.<!-- END REF--> 

If *elementRef* is not an XML root object, an error is generated. 

#### System variables and sets 

If the command has been correctly executed, the system variable OK is set to 1\. If an error occurs, it is set to 0.

#### See also 

[DOM Parse XML source](dom-parse-xml-source.md)  
[DOM Parse XML variable](dom-parse-xml-variable.md)  