---
id: dom-get-parent-xml-element
title: DOM Get parent XML element
slug: /commands/dom-get-parent-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get parent XML element.Syntax-->**DOM Get parent XML element** ( *elementRef* {; *parentElemName* {; *parentElemValue*}} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get parent XML element.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML element reference |
| parentElemName | Text | &#8592; | Name of parent XML element |
| parentElemValue | Text | &#8592; | Value of parent XML element |
| Function result | Text | &#8592; | Parent XML element reference |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Get parent XML element.Summary-->The DOM Get parent XML element command returns an XML reference to the “parent” of the XML element passed as reference in *elementRef*.<!-- END REF--> This reference may be used with the other XML parsing commands.

The optional *parentElemName* and *parentElemValue* parameters, when passed, receive respectively the name and value of the parent element. 

When you pass a root element in *elementRef*, the command returns the "#document" reference. The document node is the parent of a root element.   
If you use this command on a document node, the command returns a null reference ("0000000000000000") and the OK variable is set to 0\. 

#### System variables and sets 

If the command has been executed correctly, the system variable OK is set to 1\. Otherwise, it is set to 0.

#### See also 

[DOM Get first child XML element](dom-get-first-child-xml-element.md)  
[DOM Get last child XML element](dom-get-last-child-xml-element.md)  
[DOM Get Root XML element](dom-get-root-xml-element.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 923 |
| Thread safe | &check; |
| Modifies variables | OK |


