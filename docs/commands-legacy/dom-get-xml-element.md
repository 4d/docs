---
id: dom-get-xml-element
title: DOM Get XML element
slug: /commands/dom-get-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get XML element.Syntax-->**DOM Get XML element** ( *elementRef* ; *elementName* ; *index* ; *elementValue* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get XML element.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML element reference |
| elementName | Text | &#8594;  | Name of element to get |
| index | Integer | &#8594;  | Index number of element to get |
| elementValue | Variable | &#8592; | Value of the element |
| Function result | Text | &#8592; | XML reference (16 characters) |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Get XML element.Summary-->The DOM Get XML element command returns a reference to the “child” element dependent on the *elementName* and *index* parameters.<!-- END REF-->

The value of the element is also returned in the *elementValue* parameter.

**Note:** By default, **DOM Get XML element** is case sensitive regarding the *elementName* parameter (xml compliance). You can control the case sensitivity of the command using the XML DOM case sensitivity selector of the [XML SET OPTIONS](xml-set-options.md) command. 

#### System variables and sets 

If the command has been correctly executed, the system variable OK is set to 1\. If an error occurs, it is set to 0.

#### See also 

[DOM GET XML ELEMENT VALUE](dom-get-xml-element-value.md)  
[XML SET OPTIONS](xml-set-options.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 725 |
| Thread safe | &check; |
| Modifies variables | OK, error |
| Forbidden on the server ||


