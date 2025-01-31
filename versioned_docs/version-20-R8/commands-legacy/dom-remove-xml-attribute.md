---
id: dom-remove-xml-attribute
title: DOM REMOVE XML ATTRIBUTE
slug: /commands/dom-remove-xml-attribute
displayed_sidebar: docs
---

<!--REF #_command_.DOM REMOVE XML ATTRIBUTE.Syntax-->**DOM REMOVE XML ATTRIBUTE** ( *elementRef* ; *attribName* )<!-- END REF-->
<!--REF #_command_.DOM REMOVE XML ATTRIBUTE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML element reference |
| attribName | Text | &#8594;  | Attribute to be removed |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM REMOVE XML ATTRIBUTE.Summary-->The DOM REMOVE XML ATTRIBUTE command removes, if it exists, the attribute designated by *attribName* from the XML element whose reference is passed in the *elementRef* parameter.<!-- END REF--> 

If the attribute has been correctly removed, the *OK* system variable is set to 1\. If no attribute named *attribName* exists in *elementRef*, an error is returned and the *OK* system variable is set to 0\. 

#### Example 

Given the following structure:

![](../assets/en/commands/pict204122.fr.png)

The following code can be used to remove the first attribute "N=1": 

```4d
 var myBlobVar : Blob
 var $xml_Parent_Ref;$xml_Child_Ref : Text
 var $LineNum : Integer
 
 $xml_Parent_Ref:=DOM Parse XML variable(myBlobVar)
 $xml_Child_Ref:=DOM Get first child XML element($xml_Parent_Ref)
 DOM REMOVE XML ATTRIBUTE($xml_Child_Ref;"N")
```

#### See also 

[DOM GET XML ATTRIBUTE BY INDEX](dom-get-xml-attribute-by-index.md)  
[DOM GET XML ATTRIBUTE BY NAME](dom-get-xml-attribute-by-name.md)  
[DOM REMOVE XML ELEMENT](dom-remove-xml-element.md)  
[DOM SET XML ATTRIBUTE](dom-set-xml-attribute.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1084 |
| Thread safe | &check; |
| Modifies variables | OK |


