---
id: dom-get-xml-attribute-by-index
title: DOM GET XML ATTRIBUTE BY INDEX
slug: /commands/dom-get-xml-attribute-by-index
displayed_sidebar: docs
---

<!--REF #_command_.DOM GET XML ATTRIBUTE BY INDEX.Syntax-->**DOM GET XML ATTRIBUTE BY INDEX** ( *elementRef* ; *attribIndex* ; *attribName* ; *attribValue* )<!-- END REF-->
<!--REF #_command_.DOM GET XML ATTRIBUTE BY INDEX.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML element reference |
| attribIndex | Integer | &#8594;  | Attribute index number |
| attribName | Variable | &#8592; | Attribute name |
| attribValue | Variable | &#8592; | Attribute value |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM GET XML ATTRIBUTE BY INDEX.Summary-->The **DOM GET XML ATTRIBUTE BY INDEX** command gets the name of an attribute specified by its index number as well as its value.<!-- END REF--> 

Pass the reference of an XML element in *elementRef* and the index number of the attribute that you want to know the name of in *attribIndex*. The name is returned in the *attribName* parameter and its value is returned in the *attribValue*, parameter. 4D attempts to convert the value obtained into the same type as that of the variable passed as parameter. If the variable type is not defined, the value is returned in text type by default.

**Note:** The index number does not correspond to the location of the attribute in the XML file displayed in text form. In XML, the index of an attribute indicates it position among the attributes when placed in alphabetical order (based on their names). For an illustration of this, refer to the example of the [DOM Count XML attributes](dom-count-xml-attributes.md) command.

If the value passed in *attribIndex* is greater than the number of attributes present in the XML element, an error is returned.

#### Example 

Refer to the example in the [DOM Count XML attributes](dom-count-xml-attributes.md) command. 

#### System variables and sets 

If the command has been correctly executed, the system variable OK is set to 1\. If an error occurs, it is set to 0.

#### See also 

[DOM GET XML ATTRIBUTE BY NAME](dom-get-xml-attribute-by-name.md)  
[DOM REMOVE XML ATTRIBUTE](dom-remove-xml-attribute.md)  