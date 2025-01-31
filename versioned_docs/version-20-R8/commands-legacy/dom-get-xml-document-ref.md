---
id: dom-get-xml-document-ref
title: DOM Get XML document ref
slug: /commands/dom-get-xml-document-ref
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get XML document ref.Syntax-->**DOM Get XML document ref** ( *elementRef* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get XML document ref.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | Reference of existing element in DOM tree |
| Function result | Text | &#8592; | Reference of first element of a DOM tree (document node) |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Get XML document ref.Summary-->The **DOM Get XML document ref** command is used to recover the reference of the "document" element of the DOM tree whose reference you have passed in *elementRef*.<!-- END REF--> The document element is the first element of a DOM tree; it is the parent of the root element. 

The reference of the document element lets you handle the "Doctype" and "Processing Instruction" nodes. It can only be used with the [DOM Append XML child node](dom-append-xml-child-node.md) and [DOM GET XML CHILD NODES](dom-get-xml-child-nodes.md) commands.

At this level, you can only append processing instructions and comments or replace the Doctype node. You cannot create CDATA or Text nodes there. 

#### Example 

In this example, we want to find the DTD declaration of the XML document:

```4d
 var $rootRef : Text
 $rootRef:=DOM Parse XML source("")
 If(OK=1)
    var $documentRef : Text
  // we are looking for the document node, since it is the node to which
  // the DOCTYPE node is attached before the root node
    $documentRef:=DOM Get XML document ref($rootRef)
    ARRAY TEXT($typeArr;0)
    ARRAY TEXT($valueArr;0)
  // on this node we look for the DOCTYPE type node among the
  // child nodes
    DOM GET XML CHILD NODES($refDocument;$typeArr;$valueArr)
    var $text : Text
    $text:=""
    $pos:=Find in array($typeArr;XML DOCTYPE)
    If($pos>-1)
  // We retrieve the DTD declaration in $text
       $text:=$text+"Doctype: "+$valueArr{$pos}+Char(Carriage return)
    End if
    DOM CLOSE XML($rootRef)
 End if
```

#### See also 

[DOM Append XML child node](dom-append-xml-child-node.md)  
[DOM GET XML CHILD NODES](dom-get-xml-child-nodes.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1088 |
| Thread safe | &check; |


