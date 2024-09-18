---
id: dom-get-last-child-xml-element
title: DOM Get last child XML element
slug: /commands-legacy/dom-get-last-child-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get last child XML element.Syntax-->**DOM Get last child XML element** ( *elementRef* {; *childElemName* {; *childElemValue*}} ) -> Function result<!-- END REF-->
<!--REF #_command_.DOM Get last child XML element.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | String | &rarr; | XML element reference |
| childElemName | String | <&rarr; | Name of child element |
| childElemValue | String | <&rarr; | Value of child element |
| Function result | String | &larr; | XML element reference |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Get last child XML element.Summary-->The DOM Get last child XML element command returns an XML reference to the last “child” of the XML element passed as reference in *elementRef*.<!-- END REF--> This reference may be used with the other XML parsing commands.

The optional *childElemName* and *childElemValue* parameters, when passed, receive respectively the name and value of the “child” element.

#### Example 

Recovery of the reference of the last XML element of the parent root. The XML structure (C:\\\\import.xml) is loaded into a BLOB beforehand: 

```4d
 var myBlobVar : Blob
 var $ref_XML_Parent;$ref_XML_Child : Text
 var $childName;$childValue : Text
 
 DOCUMENT TO BLOB("c:\\import.xml";myBlobVar)
 $ref_XML_Parent:=DOM Parse XML variable(myBlobVar)
 $ref_XML_Child:=DOM Get last child XML element($ref_XML_Parent;$childName;$childValue)
```

#### System variables and sets 

If the command has been executed correctly, the system variable OK is set to 1\. Otherwise, it is set to 0.

#### See also 

[DOM Get first child XML element](dom-get-first-child-xml-element.md)  