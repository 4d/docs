---
id: sax-open-xml-element-arrays
title: SAX OPEN XML ELEMENT ARRAYS
slug: /commands/sax-open-xml-element-arrays
displayed_sidebar: docs
---

<!--REF #_command_.SAX OPEN XML ELEMENT ARRAYS.Syntax-->**SAX OPEN XML ELEMENT ARRAYS** ( *document* ; *tag* {; *attribNamesArray* ; *attribValuesArray*} {; *attribNamesArray2* ; *attribValuesArray2* ; ... ; *attribNamesArrayN* ; *attribValuesArrayN*} )<!-- END REF-->
<!--REF #_command_.SAX OPEN XML ELEMENT ARRAYS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Reference of open document |
| tag | Text | &#8594;  | Name of element to open |
| attribNamesArray | Text array | &#8594;  | Array of attribute names |
| attribValuesArray | Text array, Array integer, Date array, Real array, Picture array, Boolean array | &#8594;  | Array of attribute values |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX OPEN XML ELEMENT ARRAYS.Summary-->The **SAX OPEN XML ELEMENT ARRAYS** command is used to add a new element in the XML document whose reference is passed in *document* as well as, optionally, attributes and their values in the form of arrays.<!-- END REF--> 

Except for the support of arrays (see below), this command is identical to [SAX OPEN XML ELEMENT](sax-open-xml-element.md). Please refer to the description of this command for more information about its operation. 

**SAX OPEN XML ELEMENT ARRAYS** accepts arrays of the date, number, Boolean and picture type as *attribValuesArray* parameter(s). 4D automatically carries out the necessary conversions; you can configure these conversions using the [XML SET OPTIONS](xml-set-options.md) command. 

Optionally, the **SAX OPEN XML ELEMENT ARRAYS** command can be used to pass pairs of attributes and attribute values in the form of arrays in the *attribNamesArray* and *attribValuesArray* parameters. 

The arrays must have been created previously and operate in attribute/attribute value pairs. You can pass as many pairs of arrays, and as many items in each pair, as you want. 

#### Example 

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

#### See also 

[SAX CLOSE XML ELEMENT](sax-close-xml-element.md)  
[SAX OPEN XML ELEMENT](sax-open-xml-element.md)  
[XML SET OPTIONS](xml-set-options.md)  