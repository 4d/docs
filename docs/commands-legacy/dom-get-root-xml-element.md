---
id: dom-get-root-xml-element
title: DOM Get Root XML element
slug: /commands/dom-get-root-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get Root XML element.Syntax-->**DOM Get Root XML element** ( *elementRef* ) -> Function result<!-- END REF-->
<!--REF #_command_.DOM Get Root XML element.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | String | &#x1F852; | XML element reference |
| Function result | String | &#x1F850; | Reference of root element or "" in case of error |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Get Root XML element.Summary-->The DOM Get Root XML element command returns a reference to the root element of the document to which the XML element that is passed in the *elementRef* parameter belongs.<!-- END REF--> This reference can be used with the other XML parsing commands.

#### See also 

[DOM Get parent XML element](dom-get-parent-xml-element.md)  