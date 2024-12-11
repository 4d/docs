---
id: dom-remove-xml-element
title: DOM REMOVE XML ELEMENT
slug: /commands/dom-remove-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM REMOVE XML ELEMENT.Syntax-->**DOM REMOVE XML ELEMENT** ( *elementRef* )<!-- END REF-->
<!--REF #_command_.DOM REMOVE XML ELEMENT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML element reference |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM REMOVE XML ELEMENT.Summary-->The DOM REMOVE XML ELEMENT command removes the element designated by *elementRef*.<!-- END REF-->

#### System variables and sets 

If the command has been executed correctly, the system variable OK is set to 1\. Otherwise, it is set to 0 and an error is generated.   
An error is generated when the element reference is invalid.

#### See also 

[DOM Create XML element](dom-create-xml-element.md)  
[DOM REMOVE XML ATTRIBUTE](dom-remove-xml-attribute.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 869 |
| Thread safe | &check; |
| Modifies variables | OK, error |
| Forbidden on the server ||


