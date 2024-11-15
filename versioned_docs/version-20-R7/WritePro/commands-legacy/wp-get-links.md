---
id: wp-get-links
title: WP Get links
slug: /WritePro/commands/wp-get-links
displayed_sidebar: docs
---

<!--REF #_command_.WP Get links.Syntax-->**WP Get links** ( *targetObj* ) : Collection<!-- END REF-->
<!--REF #_command_.WP Get links.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element or 4D Write Pro document |
| Function result | Collection | &#8592; | Collection of links |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get links.Summary-->The **WP Get links** command returns the collection of all links defined in *targetObj*.<!-- END REF-->

In the *targetObj* parameter, you can pass:

* a range, or
* an element (table / row / paragraph / body / header / footer / section / subsection / text box), or
* a 4D Write Pro document

**Returned value**

**WP Get links** returns a collection of link objects, each of them containing one or more of the following properties:

| **Property**    | **Type**       | **Description**                                          | **Available for**      |
| --------------- | -------------- | -------------------------------------------------------- | ---------------------- |
| \[ \].url       | Text           | Link's target contents                                   | url links              |
| \[ \].method    | Text           | Link's method name                                       | method links           |
| \[ \].parameter | Text \| Number | User parameter value passed to the link                  | method links (if used) |
| \[ \].bookmark  | Text           | Bookmark name for the link                               | bookmark links         |
| \[ \].range     | Object         | Range of the link's label. See *Range handling commands* | all links              |

#### Example 

You want to change the color of all url link labels in a 4D Write Pro document:

```4d
 var $links : Collection
 var $link : Object
 
 $links:=WP Get links(myDoc)
 
 For each($link;$links)
    If($link.url#Null) //it's a url link
       WP SET ATTRIBUTES($link.range;wk text color;"red")
    End if
 End for each
```

#### See also 

[Blog: Links in 4D Write Pro documents](https://blog.4d.com/links-in-4d-write-pro-documents/)  
[WP Get formulas](wp-get-formulas.md)  
[WP SET LINK](wp-set-link.md)  