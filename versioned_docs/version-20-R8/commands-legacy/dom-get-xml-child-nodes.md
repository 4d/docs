---
id: dom-get-xml-child-nodes
title: DOM GET XML CHILD NODES
slug: /commands/dom-get-xml-child-nodes
displayed_sidebar: docs
---

<!--REF #_command_.DOM GET XML CHILD NODES.Syntax-->**DOM GET XML CHILD NODES** ( *elementRef* ; *childTypesArr* ; *nodeRefsArr* )<!-- END REF-->
<!--REF #_command_.DOM GET XML CHILD NODES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML element reference |
| childTypesArr | Array integer | &#8592; | Types of child nodes |
| nodeRefsArr | Text array | &#8592; | References or Values of child nodes |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM GET XML CHILD NODES.Summary-->The **DOM GET XML CHILD NODES** command returns the types and references or values of all the child nodes of the XML element designated by *elementRef*.<!-- END REF-->

The types of child nodes are returned in the *childTypesArr* array. You can compare the values returned by the command with the following constants, found in the "*XML*" theme:

| Constant                   | Type    | Value |
| -------------------------- | ------- | ----- |
| XML comment                | Integer | 2     |
| XML processing instruction | Integer | 3     |
| XML DATA                   | Integer | 6     |
| XML CDATA                  | Integer | 7     |
| XML DOCTYPE                | Integer | 10    |
| XML ELEMENT                | Integer | 11    |

For more information, please refer to the description of the [DOM Append XML child node](dom-append-xml-child-node.md) command.

The *nodeRefsArr* array receives the values or references of the elements according to their nature (contents or instructions).

#### Example 

Given the following XML structure:  

```XML
<myElement>Hello<br/>New<br/>York</myElement>
```

After executing these instructions:  

```4d
 elementRef:=DOM Find XML element($root;"myElement")
 DOM GET XML CHILD NODES(elementRef;$typeArr;$textArr)
```

... the $typeArr and $textArr arrays will contain the following values:  

| $typeArr{1}=6  | $textArr{1} = "Hello"                                      |
| -------------- | ---------------------------------------------------------- |
| $typeArr{2}=11 | $textArr{2} = "AEF1233456878977" (element reference <Br/>) |
| $typeArr{3}=6  | $textArr{3} = "New"                                        |
| $typeArr{4}=11 | $textArr{4} = "AEF1237897734568" (element reference <Br/>) |
| $typeArr{5}=6  | $textArr{5} = "York"                                       |

#### See also 

[DOM Append XML child node](dom-append-xml-child-node.md)  
[DOM Get XML document ref](dom-get-xml-document-ref.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1081 |
| Thread safe | &check; |


