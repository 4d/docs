---
id: sax-get-xml-entity
title: SAX GET XML ENTITY
slug: /commands/sax-get-xml-entity
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML ENTITY.Syntax-->**SAX GET XML ENTITY** ( *document* : Time ; *name* : Text ; *value* : Text )<!-- END REF-->
<!--REF #_command_.SAX GET XML ENTITY.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Reference of open document |
| name | Text | &#8592; | Entity name |
| value | Text | &#8592; | Entity value |
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

<!--REF #_command_.SAX GET XML ENTITY.Summary-->The **SAX GET XML ENTITY** command allows you to get the *name* and *value* of an XML entity that exists in the XML document referenced in the *document* parameter.<!-- END REF--> This command must be called with the XML Entity SAX event. For more information about SAX events, refer to the description of the [SAX Get XML node](../commands/sax-get-xml-node) command. 

## Example 

Let's look at the following piece of XML code:

```XML
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE body [
   <!ELEMENT body (element*)>
   <!ELEMENT element (#PCDATA)>
   <!ENTITY name "Replacement">
]>
<body>
   <element>Entity updated by &name;</element>
</body>
```

The following instruction will return “name” in *vName* and “Replacement” in *vValue*. 

```4d
 SAX GET XML ENTITY(DocRef;vName;vValue)
```

## System variables and sets 

If the command has been executed correctly, the system variable OK is set to 1\. Otherwise, it is set to 0 and an error is generated. 

## See also 

[SAX Get XML node](../commands/sax-get-xml-node)  

## Properties

|  |  |
| --- | --- |
| Command number | 879 |
| Thread safe | yes |
| Modifies variables | OK, error |


