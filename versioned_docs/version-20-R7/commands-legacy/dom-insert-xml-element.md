---
id: dom-insert-xml-element
title: DOM Insert XML element
slug: /commands/dom-insert-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Insert XML element.Syntax-->**DOM Insert XML element** ( *targetElementRef* ; *sourceElementRef* ; *childIndex* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Insert XML element.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetElementRef | Text | &#8594;  | Parent XML element reference |
| sourceElementRef | Text | &#8594;  | XML element reference to insert |
| childIndex | Integer | &#8594;  | Index of child of target element above which the new element must be inserted |
| Function result | Text | &#8592; | Reference of new XML element |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Insert XML element.Summary-->The DOM Insert XML element command can be used to insert a new XML element among the child elements of the XML element whose reference is passed in the *targetElementRef* parameter.<!-- END REF--> 

Pass the element to be inserted in *sourceElementRef*. This element must be passed as the reference of an existing XML element in a DOM tree. 

The *childIndex* parameter can be used to designate the child of the parent element before which the new element must be inserted. Pass an index number in this parameter. If the value is not valid (for example, there is no child element having this index), the new element will be added before the first child of the parent element. 

The command returns the reference of the XML element obtained.

#### Example 

In the following structure, we would like to invert the first and second book:

```XML
<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
<BookCatalog>
  <Book>
          <Title>Open Source Web Services</Title>
          <Author>Collective</Author>
          <Date>2003</Date>
          <ISBN>2-7440-1507-5</ISBN>
          <Publisher>Wrox</Publisher>
    </Book>
<Book>
          <Title>Building XML Web services</Title>
          <Author>Scott Short</Author>
          <Date>2002</Date>
          <ISBN>2-10-006476-2</ISBN>
          <Publisher>Microsoft Press</Publisher>
    </Book>
</BookCatalog> 
```

To do this, simply execute the following code:

```4d
 var $rootRef : Text
 $rootRef:=DOM Parse XML source("") //selection of XML document
 If(OK=1)
    var $newStruct : Text
    $newStruct:=DOM Create XML Ref("BookCatalog")
 
    $bookRef:=DOM Find XML element($rootRef;"/BookCatalog/Book[1]")
    $newElementRef:=DOM Append XML element($newStruct;$bookRef)
 
    $bookRef:=DOM Find XML element($rootRef;"/BookCatalog/Book[2]")
    var $newElementRef : Text
    $newElementRef:=DOM Insert XML element($newStruct;$bookRef;1)
 
    DOM CLOSE XML($newStruct)
    DOM CLOSE XML($rootRef)
 End if
```

#### See also 

[DOM Append XML element](dom-append-xml-element.md)  