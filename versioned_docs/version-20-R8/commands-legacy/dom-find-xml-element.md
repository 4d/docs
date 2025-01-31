---
id: dom-find-xml-element
title: DOM Find XML element
slug: /commands/dom-find-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Find XML element.Syntax-->**DOM Find XML element** ( *elementRef* ; *xPath* {; *arrElementRefs*} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Find XML element.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML element reference |
| xPath | Text | &#8594;  | XPath path of the element to look for |
| arrElementRefs | Text array | &#8592; | List of element references found (if applicable) |
| Function result | Text | &#8592; | Reference of the element found (if applicable) |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Find XML element.Summary-->The DOM Find XML element command looks for specific XML elements in an XML structure.<!-- END REF--> The search starts at the element designated by the *elementRef* parameter. 

The XML node to seek is set expressed in XPath notation using the *xPath* parameter (for more information, see the *Support of XPath notation (DOM)* section). The following path expressions are supported: 

| **Expression**                  | **Action**                                                                                                                       |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| *nodename*                      | Selects all children nodes of the context node with the name "*nodename*"                                                        |
| /                               | Selects nodes from the root node (absolute path)                                                                                 |
| //                              | Selects nodes in the document from the current node that match the selection no matter where they are                            |
| @                               | Selects attributes                                                                                                               |
| .                               | Selects the current node                                                                                                         |
| ..                              | Selects the parent of the current node                                                                                           |
| \*                              | Selects all element children of the context node                                                                                 |
| @\*                             | Selects all the attributes of the context node                                                                                   |
| text()                          | Selects all text node children of the context node                                                                               |
| node()                          | Selects all the children of the context node, whatever their node type                                                           |
| local-name()                    | Returns a string representing the local name of the first node of a given set of nodes                                           |
| para\[1\]                       | Selects the first para child of the context node                                                                                 |
| para\[last()\]                  | Selects the last para child of the context node                                                                                  |
| chapter\[title="Introduction"\] | Selects the chapter children of the context node that have one or more title(s) children with string-value equal to Introduction |
| chapter\[title\]                | Selects the chapter children of the context node that have one or more title children                                            |
| para\[@type="warning"\]         | Selects all para children of the context node that have a "type" attribute with value "warning"                                  |
| para\[@type="warning"\]\[5\]    | Selects the fifth para child of the context node that has a "type" attribute with value "warning"                                |
| para\[5\]\[@type="warning"\]    | Selects the fifth para child of the context node if that child has a "type" attribute with value "warning"                       |
| para\[contains(@type,'bg')\]    | Selects all para children of the context node that have a "type" attribute containing the "bg" string                            |
| //title \| //price              | Selects all the title and price elements in the document                                                                         |

**Compatibility Note:* Starting with v18 R3, the XPath implementation is more compliant and allows the support of the above expressions. For compatibility reasons, the previous non-standard implementation is maintained by default in converted databases. If you want to benefit from the extended features in your converted databases, you need to select the *Use standard XPath* compatibility option of the Compatibility page.* 

**Note:** Searches are case sensitive. 

The command returns the XML reference of the element(s) found. When the *arrElementRefs* string array is passed, the command fills it with the list of XML references found. In this case, the command returns the first element of the *arrElementRefs* array as the result. This parameter is useful when several elements with the same name exist at the location specified by the *xPath* parameter.

#### Example 1 

Give the following XML structure:

```json
  Harry Potter  29.99  Learning XML  39.95
```

This example lets you quickly look for an XML element and display its value:

```4d
 vElemRef:=DOM Parse XML source("books.xml")
 vFound:=DOM Find XML element(vElemRef;"book[2]/title") //relative path from current node
 DOM GET XML ELEMENT VALUE(vFound;value)
 ALERT("The value of the element is: \""+value+"\"") //Learning XML
```

The same search can also be done as follows:

```4d
 vElemRef:=DOM Parse XML source("books.xml")
 vFound:=DOM Find XML element(vElemRef;"/bookstore/book[2]") //absolute path from root
 vFound:=DOM Find XML element(vFound;"title")
 DOM GET XML ELEMENT VALUE(vFound;value)
 ALERT("The value of the element is: \""+value+"\"") //Learning XML
```

#### Example 2 

Given the following XML structure: 

```json
         aaa      bbb      ccc   
```

The following code can be used to retrieve the reference of each Elem2 element in the arrAfound array:

```4d
 vElemRef:=DOM Parse XML source("example.xml")
 ARRAY TEXT(arrAfound;0)
 vFound:=DOM Find XML element(vElemRef;"/Root/Elem1/Elem2";arrAfound)
```

#### Example 3 

You want to select all "rect" elements with a "class" attributes that contains the "bgcontainer" string:

```4d
 $node:=DOM Find XML element($root;" //rect[contains(@class,'bgcontainer')")
```

#### System variables and sets 

If the command has been executed correctly, the system variable OK is set to 1\. Otherwise, it is set to 0 and an error is generated. 

#### Error management 

An error is generated when:

* The element reference is invalid
* The specified xPath path is invalid.

#### See also 

[DOM Count XML elements](dom-count-xml-elements.md)  
[DOM Create XML element](dom-create-xml-element.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 864 |
| Thread safe | &check; |
| Modifies variables | OK, error |


