---
id: sax-get-xml-element-value
title: SAX GET XML ELEMENT VALUE
slug: /commands/sax-get-xml-element-value
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML ELEMENT VALUE.Syntax-->**SAX GET XML ELEMENT VALUE** ( *document* ; *value* )<!-- END REF-->
<!--REF #_command_.SAX GET XML ELEMENT VALUE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Reference of open document |
| value | Text, Blob | &#8592; | Element value |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX GET XML ELEMENT VALUE.Summary-->The **SAX GET XML ELEMENT VALUE** command allows you to get the *value* of an XML element that exists in the XML document referenced in the *document* parameter.<!-- END REF--> This command must be called with the XML DATA SAX event. For more information about SAX events, refer to the description of the [SAX Get XML node](sax-get-xml-node.md) command. 

Pass a Text or BLOB type variable in the *value* parameter. If you pass a BLOB, the command will automatically attempt to decode it into base64.

#### Example 

Let's look at the following piece of XML code:

```XML
<RootElement>
   <Child Att1="111" Att2="222" Att3="333">MyText</Child>
</RootElement>
```

The following instruction will return “MyText” in *vValue*:

```4d
 SAX GET XML ELEMENT VALUE(DocRef;vValue)
```

#### System variables and sets 

If the command was executed correctly, the system variable OK is set to 1\. Otherwise, it is set to 0 and an error is generated.

#### See also 

[SAX ADD XML ELEMENT VALUE](sax-add-xml-element-value.md)  
[SAX Get XML node](sax-get-xml-node.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 877 |
| Thread safe | &check; |
| Modifies variables | OK, error |
| Forbidden on the server ||


