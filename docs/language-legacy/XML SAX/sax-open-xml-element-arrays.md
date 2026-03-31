---
id: sax-open-xml-element-arrays
title: SAX OPEN XML ELEMENT ARRAYS
slug: /commands/sax-open-xml-element-arrays
displayed_sidebar: docs
---

<!--REF #_command_.SAX OPEN XML ELEMENT ARRAYS.Syntax-->**SAX OPEN XML ELEMENT ARRAYS** ( *document* : Time ; *tag* : Text {; ...(*attribNamesArray* : Text array ; *attribValuesArray* : Array)} )<br/>*SAX OPEN XML ELEMENT ARRAYS** ( *document* : Time ; *tag* : Text {; ...(*attribNamesArray* : Text  ; *attribValuesArray* : Text)} )<!-- END REF-->
<!--REF #_command_.SAX OPEN XML ELEMENT ARRAYS.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Reference of open document |
| tag | Text | &#8594;  | Name of element to open |
| attribNamesArray | Text array, Text | &#8594;  | Array of attribute names |
| attribValuesArray | Array, Text | &#8594;  | Array of attribute values |
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

<!--REF #_command_.SAX OPEN XML ELEMENT ARRAYS.Summary-->The **SAX OPEN XML ELEMENT ARRAYS** command is used to add a new element in the XML document whose reference is passed in *document* as well as, optionally, attributes and their values in the form of arrays.<!-- END REF--> 

Except for the support of arrays (see below), this command is identical to [SAX OPEN XML ELEMENT](../commands/sax-open-xml-element). Please refer to the description of this command for more information about its operation. 

**SAX OPEN XML ELEMENT ARRAYS** accepts arrays of the text, date, number, Boolean and picture type as *attribValuesArray* parameter(s). 4D automatically carries out the necessary conversions; you can configure these conversions using the [XML SET OPTIONS](../commands/xml-set-options) command. 

Optionally, the **SAX OPEN XML ELEMENT ARRAYS** command can be used to pass pairs of attributes and attribute values in the form of arrays in the *attribNamesArray* and *attribValuesArray* parameters. 

The arrays must have been created previously and operate in attribute/attribute value pairs. You can pass as many pairs of arrays, and as many items in each pair, as you want. 

## Example 

The following method:

```4d
 ARRAY STRING(80;tAttrNames;2)
 ARRAY STRING(80;tAttrValues;2)
 vElement:="Book"
 tAttrNames{1}:="Font"
 tAttrValues{1}:="Arial"
 tAttrNames{2}:="Style"
 tAttrValues{2}:="Bold"
 SAX OPEN XML ELEMENT ARRAYS($DocRef;vElement;tAttrNames;tAttrValues)
```

... will write in the document: 

```XML
<Book Font="Arial" Style="Bold">
```

## See also 

[SAX CLOSE XML ELEMENT](../commands/sax-close-xml-element)  
[SAX OPEN XML ELEMENT](../commands/sax-open-xml-element)  
[XML SET OPTIONS](../commands/xml-set-options)  

## Properties

|  |  |
| --- | --- |
| Command number | 921 |
| Thread safe | yes |


