---
id: dom-get-xml-element-name
title: DOM GET XML ELEMENT NAME
slug: /commands/dom-get-xml-element-name
displayed_sidebar: docs
---

<!--REF #_command_.DOM GET XML ELEMENT NAME.Syntax-->**DOM GET XML ELEMENT NAME** ( *elementRef* ; *elementName* )<!-- END REF-->
<!--REF #_command_.DOM GET XML ELEMENT NAME.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML element reference |
| elementName | Variable | &#8592; | Name of the element |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM GET XML ELEMENT NAME.Summary-->The DOM GET XML ELEMENT NAME command returns, in the *elementName* parameter, the name of the XML element designated by *elementRef*.<!-- END REF--> If the *elementName* variable type is not defined, the text type is used by default. 

For more information on XML element names, refer to the *Overview of XML DOM Commands* section.

#### Example 

This method returns the name of the $xml\_Element\_Ref element:

```4d
 var $xml_Element_Ref : Text
 var $name : Text
 
 DOM GET XML ELEMENT NAME($xml_Element_Ref;$name)
```

#### System variables and sets 

If the command has been correctly executed, the system variable OK is set to 1\. If an error occurs, it is set to 0.

#### See also 

[DOM Get XML element](dom-get-xml-element.md)  
[DOM GET XML ELEMENT VALUE](dom-get-xml-element-value.md)  
[DOM SET XML ELEMENT NAME](dom-set-xml-element-name.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 730 |
| Thread safe | &check; |
| Modifies variables | OK |


