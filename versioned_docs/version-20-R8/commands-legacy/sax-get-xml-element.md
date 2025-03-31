---
id: sax-get-xml-element
title: SAX GET XML ELEMENT
slug: /commands/sax-get-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML ELEMENT.Syntax-->**SAX GET XML ELEMENT** ( *document* ; *name* ; *prefix* ; *attrNames* ; *attrValues* )<!-- END REF-->
<!--REF #_command_.SAX GET XML ELEMENT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Reference of open document |
| name | Text | &#8592; | Element name |
| prefix | Text | &#8592; | Namespace |
| attrNames | Text array | &#8592; | Attribute names |
| attrValues | Text array | &#8592; | Attribute values |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX GET XML ELEMENT.Summary-->The **SAX GET XML ELEMENT** command returns various information about the element *name* that is present in the XML document reference in the *document* parameter.<!-- END REF--> This command must be called with the XML Start Element or XML End Element SAX events. In the specific case of XML End Element, the attribute parameters are not handled. For more information about SAX events, refer to the description of the [SAX Get XML node](sax-get-xml-node.md) command. 

The *name* parameter contains the name of the element. 

The *prefix* parameter returns the namespace of the element. This parameter is empty if no namespace is linked to the element. 

The command fills the *attrNames* array with the names of attributes of the target element. If necessary, the command creates and sizes the array automatically. 

The command also fills the *attrValues* array with the values of attributes of the target element. If necessary, the command creates and sizes the array automatically. 

#### Example 

Let's look at the following piece of XML code:

```4d
 
 MyText
 
```

Once the following statement has been executed: 

```4d
 SAX GET XML ELEMENT(DocRef;vName;vPrefix;tAttrNames;tAttrValues)
```

...*vName* will contain “Child”  
*vPrefix* will contain “”  
*tAttrNames{1}* will contain “Att1”, *tAttrNames{2}* will contain “Att2”, *tAttrNames{3}* will contain “Att3”  
*tAttrValues{1}* will contain “111”, *tAttrValues{2}* will contain “222”, *tAttrValues{3}* will contain “333”

#### System variables and sets 

If the command has been executed correctly, the system variable OK is set to 1\. Otherwise, it is set to 0 and an error is generated.

#### See also 

[SAX Get XML node](sax-get-xml-node.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 876 |
| Thread safe | &check; |
| Modifies variables | OK |


