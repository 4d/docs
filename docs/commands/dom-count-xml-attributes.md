---
id: dom-count-xml-attributes
title: DOM Count XML attributes
displayed_sidebar: docs
---

<!--REF #_command_.DOM Count XML attributes.Syntax-->**DOM Count XML attributes** ( *elementRef* ) -> Function result<!-- END REF-->
<!--REF #_command_.DOM Count XML attributes.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | String | -> | XML element reference |
| Function result | Longint | <- | Number of attributes |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Count XML attributes.Summary-->The **DOM Count XML attributes** command returns the number of XML attributes present in the XML element designated by *elementRef*.<!-- END REF--> For more information about XML attributes, refer to the [Overview of XML DOM Commands](/4Dv20R6/4D/20-R6/Overview-of-XML-DOM-Commands.300-6957756.en.html) section. 

#### Example 

Before retrieving the values of elements in an array, you want to know the number of attributes in the following XML element:

![](../assets/en/Commands/pict39728.en.png)

```4d
 C_BLOB(myBlobVar)

 C_TEXT($xml_Parent_Ref;$xml_Child_Ref)

 C_TEXT(myResult)

 C_LONGINT($numAttributes)
 

 $xml_Parent_Ref:=DOM Parse XML variable(myBlobVar)

 $xml_Child_Ref:=DOM Get first child XML element($xml_Parent_Ref)
 

 $numAttributes:=DOM Count XML attributes($xml_Child_Ref)

 ARRAY TEXT(tAttrib;$numAttributes)

 ARRAY TEXT(tValAttrib;$numAttributes)

 For($i;1;$numAttributes)

    DOM GET XML ATTRIBUTE BY INDEX($xml_Child_Ref;$i;tAttrib{$i};tValAttrib{$i})

 End for
```

In the above example, $numAttributes equals 3, tAttrib{1} contains “Font”, tAttrib{2} contains “N”, tAttrib{3} contains “size” and tValAttrib contains “Verdana”, “1” and “10”.

**Note:** The index number does not correspond to the location of the attribute in the XML file displayed in text form. In XML, the index of an attribute indicates its position among the attributes arranged in alphabetical order (according to their name).

#### System variables and sets 

If the command has been correctly executed, the system variable OK is set to 1\. If an error occurs, it is set to 0.

#### See also 
[DOM Count XML elements](dom-count-xml-elements.md)  