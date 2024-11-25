---
id: wp-get-element-by-id
title: WP Get element by ID
slug: /WritePro/commands/wp-get-element-by-id
displayed_sidebar: docs
---

<!--REF #_command_.WP Get element by ID.Syntax-->**WP Get element by ID** ( *wpDoc* ; *ID* ) : Object<!-- END REF-->
<!--REF #_command_.WP Get element by ID.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro document |
| ID | Text | &#8594;  | Identifier of the element to retrieve |
| Function result | Object | &#8592; | 4D Write Pro element |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get element by ID.Summary-->The **WP Get element by ID** command returns an object containing the element of *wpDoc* passed in the *ID* parameter.<!-- END REF--> 

In the *wpDoc* parameter, pass a 4D Write Pro document. 

Pass the ID attribute of the element to retrieve in the *ID* parameter. The element can be within the document, such as an image, a paragraph, a table, row, etc., or the document itself. If no elements in the document have the specified ID, a null value is returned.

**Note:** The *ID* parameter value is case-sensitive.

#### Example 1 

To get the picture with the ID "img1":

```4d
 var obImage : Object
 obImage:=WP Get element by ID(myDoc;"img1")
```

#### Example 2 

You want to find a table element and modify it to have a large purple border:

```4d
 var $element : Object
 $element:=WP Get element by ID(myDoc;"Table1")
 WP SET ATTRIBUTES($element;wk border style;wk solid)
 WP SET ATTRIBUTES($element;wk border width;"4px")
 WP SET ATTRIBUTES($element;wk border color;"purple")
```

#### Example 3 

You want to retrieve an element and modify its ID:

```4d
 $colTable:=WP Create table range([INFO]Sample)
 $elements:=WP Get elements($colTable)
 $elem:=WP Get element by ID([INFO]Sample;"Paris")
 If($elem#Null)
    $elem.ID:="Lyon"
 End if
```

#### See also 

[WP Get elements](wp-get-elements.md)  