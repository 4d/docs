---
id: wp-get-elements
title: WP Get elements
slug: /WritePro/commands/wp-get-elements
displayed_sidebar: docs
---

<!--REF #_command_.WP Get elements.Syntax-->**WP Get elements** ( *targetObj* {; *elementType*} ) : Collection<!-- END REF-->
<!--REF #_command_.WP Get elements.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element or 4D Write Pro document |
| elementType | Integer | &#8594;  | Desired type of element to retrieve |
| Function result | Collection | &#8592; | Collection containing element references |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get elements.Summary-->The **WP Get elements** command returns a collection of objects containing paragraphs, images, tables and/or rows.<!-- END REF-->

In the *targetObj* parameter, you can pass:

* a range, or
* an element (table / row / paragraph / body / header / footer / section / subsection / text box), or
* a 4D Write Pro document

**Note:** If you pass a subsection in *targetObj*, the command returns the elements of the parent section.

If a typed range or element is passed, the command will return a collection containing only elements of the corresponding type (unless you specify a type with the *elementType* parameter, see below). Otherwise, the command returns a collection containing all of the available elements in *targetObj*.

Optionally, you can pass the *elementType* parameter to specify the types of elements to return in the collection. The following types are available:

| Constant               | Value | Comment                                       |
| ---------------------- | ----- | --------------------------------------------- |
| wk type default        | 0     | Default range type                            |
| wk type image          | 2     | Anchored and/or inline images                 |
| wk type image anchored | 200   | Anchored image reference for document objects |
| wk type image inline   | 100   | Inline image reference for document objects   |
| wk type paragraph      | 1     | Paragraph type range                          |
| wk type table          | 4     | Table reference                               |
| wk type table row      | 5     | Table row reference                           |
| wk type text box       | 300   | Text box (value for wk type)                  |

**Note:**

* If you pass the wk type default selector, the command returns an unfiltered collection.
* If you pass the wk type paragraph, wk type image or wk type table selector, the returned collection will contain only elements of the given type, even if it differs from the type specified in the *elementType* parameter.
* If a range passed in *targetObj* contains an element that is not fully contained within the range, the entire element will be included in the results. For example, if the range includes part of a table (but not the entire table), the reference for the entire table element is returned, however only the cell (paragraph) references within the range are included.
* If you pass wk type text box in the *elementType* parameter, *targetObj* can only contain a 4D Write Pro document. An error is returned if you pass anything but a document object in *targetObj* in this case.

##### How elements are sorted 

The elements in the returned collection are ordered differently depending on the *targetObj* contents:

* If you passed a range or an element in *targetObj* (paragraph, table, body, header, footer…), elements in the collection are sorted in the order of the document flow (in the same order as they appear in the document).
* If you passed a 4D Write Pro document in *targetObj*, since all document areas are returned, elements in the collection are sorted by their ID (except anchored images when the wk type image anchored parameter is used; in this case, they are sorted by *z-order*). Inline elements of type *elementType* present in **text boxes** (if any) are returned at the end of the collection.

If you want for example to alternate background color for paragraphs in the body part of a document, you need to pass the body element in *targetObj* and not the document, to make sure the element order in the collection corresponds to the document paragraph order.

#### Example 1 

You want to return a collection of all the paragraphs in a document:

```4d
 var $docElements : Collection
 $docElements:=WP Get elements($myDoc;wk type paragraph)
  //returns a collection containing only paragraph elements
```

#### Example 2 

 You want to alternate the alignment and color of the paragraphs in a document: 

```4d
 var $col : Collection
 var $obj : Object
 var $body : Object
 var $i;$n : Integer
 $col:=New collection
 $body:=WP Get body(myDoc)
 $col:=WP Get elements($body;wk type paragraph)
 $i:=0
 $n:=$col.length
 For($i;0;$n-1)
    $obj:=$col[$i]
    WP RESET ATTRIBUTES($obj)
    WP SET ATTRIBUTES($obj;wk font bold;wk false)
    WP SET ATTRIBUTES($obj;wk font italic;wk false)
    If($i%2=0)
       WP SET ATTRIBUTES($obj;wk text align;wk left)
       WP SET ATTRIBUTES($obj;wk font bold;wk true)
       WP SET ATTRIBUTES($obj;wk text color;"#804040")
       WP SET ATTRIBUTES($obj;wk margin right;"5cm")
       WP SET ATTRIBUTES($obj;wk margin left;"1cm")
    Else
       WP SET ATTRIBUTES($obj;wk text align;wk right)
       WP SET ATTRIBUTES($obj;wk font italic;wk true)
       WP SET ATTRIBUTES($obj;wk text color;"#404020")
       WP SET ATTRIBUTES($obj;wk margin left;"5cm")
       WP SET ATTRIBUTES($obj;wk margin right;"1cm")
    End if
 End for
```

#### See also 

[WP Get breaks](wp-get-breaks.md)  
[WP Get element by ID](wp-get-element-by-id.md)  
[WP Table range](wp-table-range.md)  