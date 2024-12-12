---
id: sax-add-xml-doctype
title: SAX ADD XML DOCTYPE
slug: /commands/sax-add-xml-doctype
displayed_sidebar: docs
---

<!--REF #_command_.SAX ADD XML DOCTYPE.Syntax-->**SAX ADD XML DOCTYPE** ( *document* ; *docType* )<!-- END REF-->
<!--REF #_command_.SAX ADD XML DOCTYPE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Reference of open document |
| docType | Text | &#8594;  | DocType to be added |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX ADD XML DOCTYPE.Summary-->The SAX ADD XML DOCTYPE command adds a DocType statement set by the *docType* parameter in the XML document referenced by *document*.<!-- END REF--> 

The DocType statement lets you indicate the type of XML in which the document has been written and to specify the Document Type Declaration (DTD) used. A DocType statement generally takes the following form: .

#### Example 

The following statement:

```4d
 vDocType:="SYSTEM Books \"Book.DTD\""
 SAX ADD XML DOCTYPE($DocRef;vDocType)
```

... will write the following line in the document: 

```4d
 
```

#### System variables and sets 

If the command has been executed correctly, the system variable OK is set to 1\. Otherwise, it is set to 0\. 

#### Error management 

In the event of an error, the the command returns an error which can be intercepted using an error-handling method.

#### See also 

[SAX ADD XML COMMENT](sax-add-xml-comment.md)  