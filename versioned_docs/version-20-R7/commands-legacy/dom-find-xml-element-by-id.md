---
id: dom-find-xml-element-by-id
title: DOM Find XML element by ID
slug: /commands/dom-find-xml-element-by-id
displayed_sidebar: docs
---

<!--REF #_command_.DOM Find XML element by ID.Syntax-->**DOM Find XML element by ID** ( *elementRef* ; *id* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Find XML element by ID.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML element reference |
| id | Text | &#8594;  | Value of ID attribute of element to look for |
| Function result | Text | &#8592; | Reference of the element found (if applicable) |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Find XML element by ID.Summary-->The DOM Find XML element by ID command searches within an XML document for the element whose id attribute equals the value passed in the *id* parameter.<!-- END REF-->

In *elementRef*, pass the reference of an element in the XML document where you want to perform the search. You can pass the reference of the root element or any other element; the search does not take the position of *elementRef* into account and always searches the whole document. 

The command returns the XML reference of the element found as a result.

**Warning:** In XML, the id attribute associates a unique ID to each document element. The value of the id attribute must be a valid XML name and it must be unique among all the elements in the XML document (validity constraint). In order for the DOM Find XML element by ID command to work properly, this constraint must be complied with; otherwise, the result is random (the command returns the reference to the first element found in the document).

#### See also 

[DOM Find XML element](dom-find-xml-element.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1010 |
| Thread safe | &check; |
| Modifies variables | OK |


