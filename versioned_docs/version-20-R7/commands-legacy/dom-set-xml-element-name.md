---
id: dom-set-xml-element-name
title: DOM SET XML ELEMENT NAME
slug: /commands/dom-set-xml-element-name
displayed_sidebar: docs
---

<!--REF #_command_.DOM SET XML ELEMENT NAME.Syntax-->**DOM SET XML ELEMENT NAME** ( *elementRef* ; *elementName* )<!-- END REF-->
<!--REF #_command_.DOM SET XML ELEMENT NAME.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML element reference |
| elementName | Text | &#8594;  | New name of element |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM SET XML ELEMENT NAME.Summary-->The DOM SET XML ELEMENT NAME command modifies the name of the element set by *elementRef*.<!-- END REF--> 

Pass the reference of the element to rename in *elementRef* and the new name of the element in *elementName*. The command also takes charge of updating the open and close tags of the element. 

#### Example 

In the following XML source:

```XML
<Book>
   <Title>The Best Seller</Title>
</Book>
```

If the following code is executed, with *vElemRef* containing the reference to the ‘Book’ element:

```4d
 DOM SET XML ELEMENT NAME(vElemRef;"BestSeller")
```

We get:

```XML
<BestSeller>
   <Title>The Best Seller</Title>
</BestSeller>
```

#### System variables and sets 

If the command was executed correctly, the system variable OK is set to 1\. Otherwise, it is set to 0 and an error is generated. 

#### Error management 

An error is generated when:

* The element reference is invalid
* The new name of the element to create is invalid (for example, if it starts with a number).

#### See also 

[DOM GET XML ELEMENT NAME](dom-get-xml-element-name.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 867 |
| Thread safe | &check; |
| Modifies variables | OK, error |
| Forbidden on the server ||


