---
id: dom-append-xml-element
title: DOM Append XML element
slug: /commands/dom-append-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Append XML element.Syntax-->**DOM Append XML element** ( *targetElementRef* ; *sourceElementRef* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Append XML element.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetElementRef | Text | &#8594;  | Reference of XML parent element |
| sourceElementRef | Text | &#8594;  | Reference of XML element to append |
| Function result | Text | &#8592; | Reference of new XML element |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Append XML element.Summary-->The DOM Append XML element command is used to add a new XML element to the children of the XML element whose reference is passed in the *targetElementRef* parameter.<!-- END REF--> 

In the *sourceElementRef* parameter, pass the element to be added. This element must be passed as the reference of an existing XML element in a DOM tree. It is added after the last existing child element of *targetElementRef*. 

#### Example 

See the example of the [DOM Insert XML element](dom-insert-xml-element.md "DOM Insert XML element") command.

#### See also 

[DOM Insert XML element](dom-insert-xml-element.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1082 |
| Thread safe | &check; |


