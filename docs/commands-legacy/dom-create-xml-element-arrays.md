---
id: dom-create-xml-element-arrays
title: DOM Create XML element arrays
slug: /commands/dom-create-xml-element-arrays
displayed_sidebar: docs
---

<!--REF #_command_.DOM Create XML element arrays.Syntax-->**DOM Create XML element arrays** ( *elementRef* ; *xPath* {; *attribNamesArray* ; *attribValuesArray*} {; *attribNamesArray2* ; *attribValuesArray2* ; ... ; *attribNamesArrayN* ; *attribValuesArrayN*} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Create XML element arrays.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML root element reference |
| xPath | Text | &#8594;  | XPath path of the XML element to create |
| attribNamesArray | Text array | &#8594;  | Array of attribute names |
| attribValuesArray | Text array | &#8594;  | Array of attribute values |
| Function result | Text | &#8592; | Reference of created XML element |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Create XML element arrays.Summary-->The **DOM Create XML element arrays** command is used to add a new element in the *elementRef* XML element, as well as, optionally, attributes and their values in the form of arrays.<!-- END REF-->

Apart from supporting arrays (see below), this command is identical to [DOM Create XML element](dom-create-xml-element.md). Please refer to the description of this command for the details of its functioning. 

Optionally, this command can be used to pass several pairs of attributes and attribute values as arrays in the *attribNamesArray* and *attribValuesArray* parameters. In *attribValuesArray*, you can pass arrays of the text, date, number, and picture type. 4D automatically carries out the necessary conversions; you can modify these conversions using the [XML SET OPTIONS](xml-set-options.md) command. 

The arrays must have been created beforehand and function by pairs. You can pass as many pairs of arrays and as many elements in each pair as you want. 

#### Example 

We want to create the following element:

```XML
<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
<RootElement>
   <Elem1>
      <Elem2>
         <Elem3 Font="Verdana" Size="10" Style="Bold"></Elem3>
      </Elem2>
   </Elem1>
</RootElement>
```

For this, you can simply write:

```4d
 ARRAY TEXT(arrAttNames;3)
 ARRAY TEXT(arrAttValues;3)
 arrAttNames{1}:="Font"
 arrAttValues{1}:="Verdana"
 arrAttNames{2}:="Size"
 arrAttValues{2}:="10"
 arrAttNames{3}:="Style"
 arrAttValues{3}:="Bold"
 vRootRef:=DOM Create XML Ref("RootElement")
 vxPath:="/RootElement/Elem1/Elem2/Elem3"
 vElementRef:=DOM Create XML element arrays(vRootRef;vxPath;arrAttNames;arrAttValues)
```

#### See also 

[DOM Create XML element](dom-create-xml-element.md)  