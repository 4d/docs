---
id: dom-get-root-xml-element
title: DOM Get Root XML element
slug: /commands/dom-get-root-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get Root XML element.Syntax-->**DOM Get Root XML element** ( *elementRef* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get Root XML element.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML element reference |
| Function result | Text | &#8592; | Reference of root element or "" in case of error |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Get Root XML element.Summary-->The DOM Get Root XML element command returns a reference to the root element of the document to which the XML element that is passed in the *elementRef* parameter belongs.<!-- END REF--> This reference can be used with the other XML parsing commands.

#### See also 

[DOM Get parent XML element](dom-get-parent-xml-element.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1053 |
| Thread safe | &check; |
| Modifies variables | OK, error |


