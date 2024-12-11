---
id: dom-count-xml-elements
title: DOM Count XML elements
slug: /commands/dom-count-xml-elements
displayed_sidebar: docs
---

<!--REF #_command_.DOM Count XML elements.Syntax-->**DOM Count XML elements** ( *elementRef* ; *elementName* ) : Integer<!-- END REF-->
<!--REF #_command_.DOM Count XML elements.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML element reference |
| elementName | Text | &#8594;  | Name of XML elements to count |
| Function result | Integer | &#8592; | Number of elements |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Count XML elements.Summary-->The DOM Count XML elements command returns the number of “child” elements dependent on the *elementRef* parent element and named *elementName*.<!-- END REF-->By default, **DOM Count XML elements** is case sensitive regarding the *elementName* parameter (xml compliance). You can control the case sensitivity of the command using the XML DOM case sensitivity selector of the [XML SET OPTIONS](xml-set-options.md) command. 

#### System variables and sets 

If the command has been correctly executed, the system variable OK is set to 1\. If an error occurs, it is set to 0.

#### See also 

[DOM Get XML element](dom-get-xml-element.md)  
[XML SET OPTIONS](xml-set-options.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 726 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


