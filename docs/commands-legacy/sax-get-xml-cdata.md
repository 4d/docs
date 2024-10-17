---
id: sax-get-xml-cdata
title: SAX GET XML CDATA
slug: /commands/sax-get-xml-cdata
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML CDATA.Syntax-->**SAX GET XML CDATA** ( *document* ; *value* )<!-- END REF-->
<!--REF #_command_.SAX GET XML CDATA.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Reference of open document |
| value | Text, Blob | &#8592; | Element value |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX GET XML CDATA.Summary-->The **SAX GET XML CDATA** command gets the CDATA *value* of an XML element that exists in the XML document referenced in the *document* parameter.<!-- END REF--> This command must be called with the XML CDATA SAX event. For more information about SAX events, refer to the description of the [SAX Get XML node](sax-get-xml-node.md) command. 

Pass a *value* variable of the Text type if you want to retrieve data having a size greater than 32 KB (the database must be running in Unicode mode). 

**Compatibility note:** Starting with 4D v12, CDATA contents encoded in base64 are automatically decoded by the **SAX GET XML CDATA** command, so it is not necessary to call the [BASE64 DECODE](base64-decode.md) command. 

#### Example 

Let's look at the following piece of XML code:

```XML
<RootElement>
   <Child>MyText<![CDATA[MyCData]]</Child>
</RootElement>
```

The following 4D code will return “MyCData” in *vTextData*: 

```4d
 var vData : Blob
 var vTextData : Text
 SAX GET XML CDATA(DocRef;vData)
 vTextData:=BLOB to text(vData;UTF8 C string)
```

#### System variables and sets 

If the command has been executed correctly, the system variable OK is set to 1\. Otherwise, it is set to 0 and an error is generated.

#### See also 

[SAX ADD XML CDATA](sax-add-xml-cdata.md)  
[SAX Get XML node](sax-get-xml-node.md)  