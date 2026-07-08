---
id: sax-get-xml-processing-instruction
title: SAX GET XML PROCESSING INSTRUCTION
slug: /commands/sax-get-xml-processing-instruction
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML PROCESSING INSTRUCTION.Syntax-->**SAX GET XML PROCESSING INSTRUCTION** ( *document* : Time ; *name* : Text ; *value* : Text )<!-- END REF-->
<!--REF #_command_.SAX GET XML PROCESSING INSTRUCTION.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Reference of open document |
| name | Text | &#8592; | Instruction name |
| value | Text | &#8592; | Instruction value |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|2004|Created|

</details>
</div>

## Description 

<!--REF #_command_.SAX GET XML PROCESSING INSTRUCTION.Summary-->The **SAX GET XML PROCESSING INSTRUCTION** command returns the *name* and *value* of the XML instruction processed in the XML document referenced in the *document* parameter.<!-- END REF--> This command must be called with the XML Processing Instruction event. For more information about SAX events, refer to the description of the [SAX Get XML node](../commands/sax-get-xml-node) command. 

## Example 

Let's look at the following piece of XML code:

```XML
<?xml version="1.0" encoding="UTF-8"?>
<!-- Edited with XML Spy v3.0.7 NT (http://www.xmlspy.com) by Myself (4D SA)-->
<?PI TextProcess?>
<!DOCTYPE RootElement SYSTEM "ParseTest.dtd">
```

The following instruction will return “PI” in *vName* and “TextProcess” in *vValue*: 

```4d
 SAX GET XML PROCESSING INSTRUCTION($DocRef;vName;vValue)
```

## See also 

[SAX ADD PROCESSING INSTRUCTION](../commands/sax-add-processing-instruction)  
[SAX Get XML node](../commands/sax-get-xml-node)  

## Properties

|  |  |
| --- | --- |
| Command number | 875 |
| Thread safe | yes |


