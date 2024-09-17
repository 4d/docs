---
id: dom-create-xml-element
title: DOM Create XML element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Create XML element.Syntax-->**DOM Create XML element** ( *elementRef* ; *xPath* {; *attribName* ; *attrValue*} {; *attribName2* ; *attrValue2* ; ... ; *attribNameN* ; *attrValueN*} ) -> Function result<!-- END REF-->
<!--REF #_command_.DOM Create XML element.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | String | -> | Root XML element reference |
| xPath | Text | -> | XPath path of the XML element to create |
| attribName | String | -> | Attribute to set |
| attrValue | String, Boolean, Longint, Real, Time, Date | -> | New attribute value |
| Function result | String | <- | Reference of the created XML element |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Create XML element.Summary-->The **DOM Create XML element** command creates a new element in the XML element *elementRef* in the path set by the *xPath* parameter and adds attributes to it if necessary.<!-- END REF--> 

Pass the root element reference in *elementRef* (created, for example, using the [DOM Create XML Ref](dom-create-xml-ref.md) command).

In *xPath*, pass the path of the element to create, expressed using the XPath notation (for more information, see the [Support of XPath notation (DOM)](/4Dv20R6/4D/20-R6/Overview-of-XML-DOM-Commands.300-6957756.en.html#4967352) section). The following path expressions are supported: 

| **Expression** | **Action**                                          |
| -------------- | --------------------------------------------------- |
| /              | Designates the root node (absolute path)            |
| para\[1\]      | Designates the first para child of the context node |
| para\[last()\] | Designates the last para child of the context node  |

**Compatibility Note:* Starting with v18 R3, the XPath implementation in 4D is more compliant. For compatibility reasons, the previous non-standard implementation is maintained by default in converted databases. If you want to benefit from the extended features in your converted databases, you need to select the *Use standard XPath* compatibility option of the [Compatibility page](/4Dv20R6/4D/20-R6/Compatibility-page.300-7003469.en.html).* 

It is possible to pass a simple item name directly in the *xPath* parameter in order to create a sub-item from the current item (see example 3).

If any path elements do not exist, they are created. If path elements already exist, a new node is added.

**Note:** If you have defined one or more namespaces for the tree set using *elementRef* (see the [DOM Create XML Ref](dom-create-xml-ref.md) command), you must precede the *xPath* parameter with the namespace to be used (for example, “MyNameSpace:MyElement”).

You can pass attribute/attribute value pairs (in the form of variables, fields or literal values) in the optional *attrName* and *attrValue* parameters. You can pass as many pairs as you want.

The *attrValue* parameter can be of the text type or another type (Boolean, integer, real, date or time). If you pass a value other than text, 4D handles its conversion to text, according to the following principles:

| **Type** | **Example of converted value**                |
| -------- | --------------------------------------------- |
| Boolean  | "true" or "false"                             |
| Integer  | "123456"                                      |
| Real     | "12.34" (the decimal separator is always ".") |
| Date     | "2006-12-04T00:00:00Z" (RFC 3339 standard)    |
| Time     | "5233" (number of seconds)                    |

The command returns the XML reference of the element created as a result.

#### Example 1 

We want to create the following element: 

```RAW
                                      
```

To do so, simply write:

```4d
 var vRootRef;vElemRef : Text
 vRootRef:=DOM Create XML Ref("RootElement")
 vxPath:="/RootElement/Elem1/Elem2/Elem3[2]"
 vElemRef:=DOM Create XML element(vRootRef;vxPath)
```

#### Example 2 

We want to create the following element (containing attributes): 

```RAW
                                      
```

To do so, simply write:

```4d
 var vRootRef;vElemRef : Text
 var $aAttrName1;$aAttrName2;$aAttrVal1;$aAttrVal2;$aAttrVal3 : Text

$aAttrName1:="Font"
 $aAttrName2:="Size"
 $aAttrVal1:="Verdana"
 $aAttrVal2:="10"
 $aAttrVal3:="8"
 
 vRootRef:=DOM Create XML Ref("RootElement")
 vxPath:="/RootElement/Elem1/Elem2/Elem3"
 vElemRef:=DOM Create XML element(vRootRef;vxPath;$aAttrName1;$aAttrVal1;$aAttrName2;$aAttrVal2)
 vElemRef:=DOM Create XML element(vRootRef;vxPath;$aAttrName1;$aAttrVal1;$aAttrName2;$aAttrVal3)


```

If you want to insert an element afterwards, you can write:

```4d
 vxPath:="/RootElement/Elem1/Elem2/Elem3[2]"
 vElemRef:=DOM Create XML element(vRootRef;vxPath;"Font";"Arial")
```

You have then:

```RAW
                                                
```

#### Example 3 

We want to create and export the following structure: 

```XML
<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
<Root>
   <Elem1>Hello</Elem1>
</Root>
```

We want to use the syntax based on a simple item name. To do this, simply write:

```4d
 var $root : Text
 var $ref1 : Text
 
 $root:=DOM Create XML Ref("Root")
 $ref1:=DOM Create XML element($root;"Elem1")
 DOM SET XML ELEMENT VALUE($ref1;"Hello")
 DOM EXPORT TO FILE($root;"mydoc.xml")
 DOM CLOSE XML($root)
```

#### System variables and sets 

If the command was executed correctly, the system variable OK is set to 1\. Otherwise, it is set to 0 and an error is generated. 

#### Error management 

An error is generated when:

* The root element reference is invalid.
* The name of the element to create is invalid (for example, if it starts with a number).

#### See also 

[DOM Create XML element arrays](dom-create-xml-element-arrays.md)  
[DOM Get XML element](dom-get-xml-element.md)  
[DOM REMOVE XML ELEMENT](dom-remove-xml-element.md)  