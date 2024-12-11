---
id: sax-close-xml-element
title: SAX CLOSE XML ELEMENT
slug: /commands/sax-close-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.SAX CLOSE XML ELEMENT.Syntax-->**SAX CLOSE XML ELEMENT** ( *document* )<!-- END REF-->
<!--REF #_command_.SAX CLOSE XML ELEMENT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Reference of open document |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX CLOSE XML ELEMENT.Summary-->The SAX CLOSE XML ELEMENT command writes the statements necessary for closing the last element opened using the [SAX OPEN XML ELEMENT](sax-open-xml-element.md) command in the XML document referenced by *document*

The use of this command is optional.<!-- END REF--> In fact, 4D will automatically add the necessary end tags for any unclosed elements when XML documents are closed.

#### Example 

If the last element opened is *<Book>*, the following statement:

```4d
 SAX CLOSE XML ELEMENT($DocRef)
```

... will write the following line in the document: 

```4d
 
```

#### See also 

[SAX OPEN XML ELEMENT](sax-open-xml-element.md)  
[SAX OPEN XML ELEMENT ARRAYS](sax-open-xml-element-arrays.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 854 |
| Thread safe | &check; |
| Forbidden on the server ||


