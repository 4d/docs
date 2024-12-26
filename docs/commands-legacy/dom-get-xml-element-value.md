---
id: dom-get-xml-element-value
title: DOM GET XML ELEMENT VALUE
slug: /commands/dom-get-xml-element-value
displayed_sidebar: docs
---

<!--REF #_command_.DOM GET XML ELEMENT VALUE.Syntax-->**DOM GET XML ELEMENT VALUE** ( *elementRef* ; *elementValue* {; *cDATA*} )<!-- END REF-->
<!--REF #_command_.DOM GET XML ELEMENT VALUE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML element reference |
| elementValue | Variable | &#8592; | Value of the element |
| cDATA | Variable | &#8592; | Contents of the CDATA section |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM GET XML ELEMENT VALUE.Summary-->The **DOM GET XML ELEMENT VALUE** command returns, in the *elementValue* parameter, the value of the XML element designated by *elementRef*.<!-- END REF--> 4D will attempt to convert the value obtained into the same type as that of the variable passed as parameter. If the variable type is not defined, the value is returned in text type by default. 

The optional *cDATA* parameter is used to retrieve the contents of the CDATA section(s) of the *elementRef* XML element. Like with the *elementValue* parameter, 4D will attempt to convert the value obtained into the same type as that of the variable passed as parameter, and if the variable type is not defined, the text type is used by default. 

**Note:** If the element designated by *elementRef* is a BLOB processed by the [DOM SET XML ELEMENT VALUE](dom-set-xml-element-value.md) command, it has been automatically encoded in base64\. Therefore the command will automatically attempt to decode it in base64.

#### Example 

This method returns the value of the $xml\_Element\_Ref element:

```4d
 var $xml_Element_Ref : Text
 var $value : Real
 
 DOM GET XML ELEMENT VALUE($xml_Element_Ref;$value)
```

#### System variables and sets 

If the command has been correctly executed, the system variable OK is set to 1\. If an error occurs, it is set to 0.

#### See also 

[DOM Get XML element](dom-get-xml-element.md)  
[DOM GET XML ELEMENT NAME](dom-get-xml-element-name.md)  
[DOM SET XML ELEMENT VALUE](dom-set-xml-element-value.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 731 |
| Thread safe | &check; |
| Modifies variables | OK |


