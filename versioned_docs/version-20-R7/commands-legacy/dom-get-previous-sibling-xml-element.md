---
id: dom-get-previous-sibling-xml-element
title: DOM Get previous sibling XML element
slug: /commands/dom-get-previous-sibling-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get previous sibling XML element.Syntax-->**DOM Get previous sibling XML element** ( *elementRef* {; *siblingElemName* {; *siblingElemValue*}} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get previous sibling XML element.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML element reference |
| siblingElemName | Text | &#8592; | Name of sibling XML element |
| siblingElemValue | Text | &#8592; | Value of sibling XML element |
| Function result | Text | &#8592; | Sibling XML element reference |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Get previous sibling XML element.Summary-->The DOM Get previous sibling XML element command returns a reference to the previous “sibling” of the XML element passed as reference.<!-- END REF--> This reference may be used with the other XML parsing commands.

The optional *siblingElemName* and *siblingElemValue* parameters, when passed, receive respectively the name and value of the previous “sibling” element. 

This command can be used to navigate among the “children” of an XML element. 

Before the first “sibling,” the system variable OK is set to 0\. 

#### System variables and sets 

If the command has been executed correctly and if the referenced element is not the first “child” of the structure, the system variable OK is set to 1\. If an error occurs or if the element parsed is the first “child” of the structure, it is set to 0.

#### See also 

[DOM Get next sibling XML element](dom-get-next-sibling-xml-element.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 924 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


