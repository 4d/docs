---
id: dom-set-xml-element-value
title: DOM SET XML ELEMENT VALUE
slug: /commands/dom-set-xml-element-value
displayed_sidebar: docs
---

<!--REF #_command_.DOM SET XML ELEMENT VALUE.Syntax-->**DOM SET XML ELEMENT VALUE** ( *elementRef* {; *xPath*}; *elementValue* {; *} )<!-- END REF-->
<!--REF #_command_.DOM SET XML ELEMENT VALUE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML element reference |
| xPath | Text | &#8594;  | XPath path of the XML element |
| elementValue | Text, Variable | &#8594;  | New value of element |
| * | Operator | &#8594;  | If passed: set the value in CDATA |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM SET XML ELEMENT VALUE.Summary-->The **DOM SET XML ELEMENT VALUE** command modifies the value of the element set by *elementRef*.<!-- END REF--> 

If you pass the optional *xPath* parameter, you choose to use XPath notation to indicate the element to be modified (for more information see the *Support of XPath notation (DOM)* section). The following path expressions are supported: 

| **Expression** | **Action**                                          |
| -------------- | --------------------------------------------------- |
| /              | Designates the root node (absolute path)            |
| para\[1\]      | Designates the first para child of the context node |
| para\[last()\] | Designates the last para child of the context node  |

In this case, you must pass the reference of a root XML element in *elementRef* and the XPath path of the element to be modified in *xPath*.

**Compatibility Note:* Starting with v18 R3, the XPath implementation in 4D is more compliant. For compatibility reasons, the previous non-standard implementation is maintained by default in converted databases. If you want to benefit from the extended features in your converted databases, you need to select the *Use standard XPath* compatibility option of the Compatibility page.* 

In *elementValue*, pass a string or a variable (or a field) containing the new value of the specified element:

* If you pass a string, the value is used “as is” in the XML structure.
* If you pass a variable or a field, 4D processes the value, depending on the type of *elementValue*. All data types can be used, except arrays, pictures and pointers. If elementValue is evaluated to *undefined*, 4D uses an empty string.

When the optional asterisk (\*) parameter is passed, this indicates that the value of the element must be set in the form of CDATA. The special CDATA form can be used to write raw text as is (see example 2).

**Note:** If the element designated by *elementRef* is a BLOB processed by this command, it is automatically encoded in base64\. In this case, the [DOM GET XML ELEMENT VALUE](dom-get-xml-element-value.md) command does automatically the reverse operation.

##### Note about processing end-of-line characters 

To comply with XML processing rules, all CR and CRLF end-of-line characters are replaced by LF characters.

#### Example 1 

In the following XML source: 

```XML
<Book>
   <Title>The Best Seller</Title>
</Book>
```

If the following code is executed, with *vElemRef* containing the reference to the “Title” element:

```4d
 DOM SET XML ELEMENT VALUE(vElemRef;"The Loser")
```

We get:

```XML
<Book>
   <Title>The Loser</Title>
</Book>
```

#### Example 2 

In the following XML source: 

```XML
<Maths>
   <Postulate>1+2=3</Postulate>
</Maths>
```

We want to write the text “12<18” in the *<Postulate>* element. This string cannot be written as is in XML because the “<” character is not accepted. This character must therefore be changed into “<” or the CDATA form must be used. If *vElemRef* indicates the XML *<Postulate>* node:

```4d
  // Normal form
 DOM SET XML ELEMENT VALUE(vElemRef;"12<18")
```

We get:

```XML
<Maths>
   <Postulate>12 < 18</Postulate>
</Maths>
```
  
  
```4d
  // CDATA form
 DOM SET XML ELEMENT VALUE(vElemRef;"12<18";*)
```

We get:

```XML
<Maths>
   <Postulate><![CDATA[12 < 18]]></Postulate>
</Maths>
```

#### System variables and sets 

If the command has been executed correctly, the system variable OK is set to 1\. Otherwise, it is set to 0 and an error is generated (for example, if the element reference is invalid).

#### See also 

[DOM GET XML ELEMENT VALUE](dom-get-xml-element-value.md)  
[XML SET OPTIONS](xml-set-options.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 868 |
| Thread safe | &check; |
| Modifies variables | OK, error |


