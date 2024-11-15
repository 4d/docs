---
id: dom-append-xml-child-node
title: DOM Append XML child node
slug: /commands/dom-append-xml-child-node
displayed_sidebar: docs
---

<!--REF #_command_.DOM Append XML child node.Syntax-->**DOM Append XML child node** ( *elementRef* ; *childType* ; *childValue* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Append XML child node.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML element reference |
| childType | Integer | &#8594;  | Type of child to append |
| childValue | Text, Blob | &#8594;  | Text or variable (Text or BLOB) whose value must be inserted as child node |
| Function result | Text | &#8592; | Reference of child XML element |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Append XML child node.Summary-->The DOM Append XML child node command is used to append the *childValue* value to the XML node designated by *elementRef*.<!-- END REF--> 

The type of node created is specified by the *childType* parameter. In this parameter you can pass one of the following constants, located in the "*XML*" theme:  

| Constant                   | Type    | Value |
| -------------------------- | ------- | ----- |
| XML CDATA                  | Integer | 7     |
| XML comment                | Integer | 2     |
| XML DATA                   | Integer | 6     |
| XML DOCTYPE                | Integer | 10    |
| XML ELEMENT                | Integer | 11    |
| XML processing instruction | Integer | 3     |

In *childValue*, pass the data to be inserted. You can pass a string or a 4D variable (string or BLOB). The contents of this parameter will always be converted into text. 

**Note:** If the *elementRef* parameter designates the Document node (top level node), the command inserts a "Doctype" node before any other node. The same goes for processing instructions and comments, which are always inserted before the root node (but after the Doctype node). 

#### Example 1 

Adding a text type node:

```4d
 Reference:=DOM Create XML element(elementRef;"myElement")
 DOM SET XML ELEMENT VALUE(Reference;"Hello")
 temp:=DOM Create XML element(Reference;"br")
 temp:=DOM Append XML child node(Reference;XML DATA;"New")
 temp:=DOM Create XML element(Reference;"br")
 temp:=DOM Append XML child node(Reference;XML DATA;"York")
```

Result:  

```XML
<myElement>Hello<br/>New<br/>York</myElement>
```

#### Example 2 

Adding a processing instruction type node:

```4d
 $Txt_instruction:="xml-stylesheet type = \"text/xsl\" href=\"style.xsl\""
 Reference:=DOM Append XML child node(elementRef;XML Processing Instruction;$Txt_instruction)
```

Result (inserted before first element):  

```XML
<?xml-stylesheet type="text/xsl" href="style.xsl"?>
```

#### Example 3 

Adding a comment type node:

```4d
 Reference:=DOM Append XML child node(elementRef;XML Comment;"Hello world")
```

Result:  

```XML
<!--Hello world-->
```

#### Example 4 

Adding a CDATA type node:

```4d
 Reference:=DOM Append XML child node(elementRef;XML CDATA;"12 < 18")
```

Result:  

```XML
<element><![CDATA[12 < 18]]></element>
```

#### Example 5 

Adding or replacing a Doctype declaration type node:

```4d
 Reference:=DOM Append XML child node(elementRef;XML DOCTYPE;"Books SYSTEM \"Book.DTD\"")
```

Result (inserted before first element):  

```XML
<!DOCTYPE Books SYSTEM  "Book.DTD">
```

#### Example 6 

Adding or replacing an Element type node.

* if the *childValue* parameter is an XML fragment, it is inserted as child nodes:  
```4d  
 Reference:=DOM Append XML child node(elementRef;XML ELEMENT;"simoneva")  
```  
    
Result:  
```XML  
<parent>  
    <child>simon</child>  
    <child>eva</child>  
</parent>  
```
* otherwise, a new blank child element is appended:  
```4d  
 Reference:=DOM Append XML child node(elementRef;XML ELEMENT;"tbreak")  
```  
    
Result:  
```XML  
<parent>  
     <tbreak/>  
 </parent>  
```

If the contents of *childValue* are not valid, an error is returned. 

#### See also 

[DOM GET XML CHILD NODES](dom-get-xml-child-nodes.md)  
[DOM Get XML document ref](dom-get-xml-document-ref.md)  