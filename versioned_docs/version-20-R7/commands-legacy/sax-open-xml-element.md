---
id: sax-open-xml-element
title: SAX OPEN XML ELEMENT
slug: /commands/sax-open-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.SAX OPEN XML ELEMENT.Syntax-->**SAX OPEN XML ELEMENT** ( *document* ; *tag* {; *attribName* ; *attribValue*} {; *attribName2* ; *attribValue2* ; ... ; *attribNameN* ; *attribValueN*} )<!-- END REF-->
<!--REF #_command_.SAX OPEN XML ELEMENT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Reference of open document |
| tag | Text | &#8594;  | Name of element to open |
| attribName | Text | &#8594;  | Attribute name |
| attribValue | Text | &#8594;  | Attribute value |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX OPEN XML ELEMENT.Summary-->The **SAX OPEN XML ELEMENT** command adds a new element in the XML document referenced by *document* as well as, optionally, attributes and their values.<!-- END REF--> 

The added element is “open” in the document (the end tag is not added). To close an element created using this command, you must either:

* Use the [SAX CLOSE XML ELEMENT](sax-close-xml-element.md) command, or
* Close the XML document. In this case, 4D will automatically add the necessary XML end tags.

In *tag*, pass the name of the element to be created. This name may only contain letters, numbers and the characters “.”, “-“,”\_” and “:”. If an invalid character is passed in *tag*, an error will be generated. 

Optionally, the command can pass one or more attribute/value pairs (in the form of variables, fields or literal values) using the *attribName* and *attribValue* parameters. You can pass as many attribute/value pairs as you want. 

#### Example 

The following statement:

```4d
 vElement:="Book"
 SAX OPEN XML ELEMENT($DocRef;vElement)
```

... writes the following line in the document: 

```XML
<Book
```

#### Error management 

If an invalid character is passed in *tag*, an error is generated. 

#### See also 

[SAX CLOSE XML ELEMENT](sax-close-xml-element.md)  
[SAX OPEN XML ELEMENT ARRAYS](sax-open-xml-element-arrays.md)  