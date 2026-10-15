---
id: sax-close-xml-element
title: SAX CLOSE XML ELEMENT
slug: /commands/sax-close-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.SAX CLOSE XML ELEMENT.Syntax-->**SAX CLOSE XML ELEMENT** ( *document* : Time )<!-- END REF-->
<!--REF #_command_.SAX CLOSE XML ELEMENT.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Reference of open document |
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

<!--REF #_command_.SAX CLOSE XML ELEMENT.Summary-->The SAX CLOSE XML ELEMENT command writes the statements necessary for closing the last element opened using the [SAX OPEN XML ELEMENT](../commands/sax-open-xml-element) command in the XML document referenced by *document*<!-- END REF-->.

The use of this command is optional. In fact, 4D will automatically add the necessary end tags for any unclosed elements when XML documents are closed.

## Example 

If the last element opened is *<Book>*, the following statement:

```4d
 SAX CLOSE XML ELEMENT($DocRef)
```

... will write the following line in the document: 

```xml
 </Book>
```

## See also 

[SAX OPEN XML ELEMENT](../commands/sax-open-xml-element)  
[SAX OPEN XML ELEMENT ARRAYS](../commands/sax-open-xml-element-arrays)  

## Properties

|  |  |
| --- | --- |
| Command number | 854 |
| Thread safe | yes |


