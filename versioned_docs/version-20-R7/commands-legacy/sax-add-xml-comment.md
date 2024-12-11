---
id: sax-add-xml-comment
title: SAX ADD XML COMMENT
slug: /commands/sax-add-xml-comment
displayed_sidebar: docs
---

<!--REF #_command_.SAX ADD XML COMMENT.Syntax-->**SAX ADD XML COMMENT** ( *document* ; *comment* )<!-- END REF-->
<!--REF #_command_.SAX ADD XML COMMENT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Reference of open document |
| comment | Text | &#8594;  | Comment to be added |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX ADD XML COMMENT.Summary-->The SAX ADD XML COMMENT command adds a *comment* in the XML document referenced by *document*.<!-- END REF--> 

An XML comment is a text whose contents will not be parsed by the XML interpreter. XML comments must be enclosed between the <!-- and --> characters. 

#### Example 

The following statement:

```4d
 vComment:="Created by 4D"
 SAX ADD XML COMMENT($DocRef;vComment)
```

... will write the following line in the document: 

```4d
 
```

#### System variables and sets 

If the command has been executed correctly, the system variable OK is set to 1\. Otherwise, it is set to 0\. 

#### Error management 

In the event of an error, the command returns an error which can be intercepted using an error-handling method.

#### See also 

[SAX ADD XML DOCTYPE](sax-add-xml-doctype.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 852 |
| Thread safe | &check; |
| Modifies variables | OK, error |
| Forbidden on the server ||


