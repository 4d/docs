---
id: sax-get-xml-element-value
title: SAX GET XML ELEMENT VALUE
slug: /commands/sax-get-xml-element-value
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML ELEMENT VALUE.Syntax-->**SAX GET XML ELEMENT VALUE** ( *document* : Time ; *value* : Variable, Field )<!-- END REF-->
<!--REF #_command_.SAX GET XML ELEMENT VALUE.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Reference of open document |
| value | Variable, Field | &#8592; | Element value (Text or Blob) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|12|Modified|
|2004|Created|

</details>
</div>

## Description 

<!--REF #_command_.SAX GET XML ELEMENT VALUE.Summary-->The **SAX GET XML ELEMENT VALUE** command allows you to get the *value* of an XML element that exists in the XML document referenced in the *document* parameter.<!-- END REF--> This command must be called with the XML DATA SAX event. For more information about SAX events, refer to the description of the [SAX Get XML node](../commands/sax-get-xml-node) command. 

Pass a Text or BLOB type variable or field in the *value* parameter. If you pass a BLOB, the command will automatically attempt to decode it into base64.

## Example 

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

## System variables and sets 

If the command was executed correctly, the system variable OK is set to 1\. Otherwise, it is set to 0 and an error is generated.

## See also 

[SAX ADD XML ELEMENT VALUE](../commands/sax-add-xml-element-value)  
[SAX Get XML node](../commands/sax-get-xml-node)  

## Properties

|  |  |
| --- | --- |
| Command number | 877 |
| Thread safe | yes |
| Modifies variables | OK, error |


