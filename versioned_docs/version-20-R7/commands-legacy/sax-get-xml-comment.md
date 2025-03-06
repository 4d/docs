---
id: sax-get-xml-comment
title: SAX GET XML COMMENT
slug: /commands/sax-get-xml-comment
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML COMMENT.Syntax-->**SAX GET XML COMMENT** ( *document* ; *comment* )<!-- END REF-->
<!--REF #_command_.SAX GET XML COMMENT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Reference of open document |
| comment | Text | &#8592; | XML comment |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX GET XML COMMENT.Summary-->The **SAX GET XML COMMENT** command returns a *comment* if an XML Comment SAX event is generated in the XML document referenced in the *document* parameter.<!-- END REF--> For more information about SAX events, refer to the description of the [SAX Get XML node](sax-get-xml-node.md) command. 

#### System variables and sets 

If the command has been executed correctly, the system variable OK is set to 1\. Otherwise, it is set to 0 and an error is generated.

#### See also 

[SAX ADD XML COMMENT](sax-add-xml-comment.md)  
[SAX Get XML node](sax-get-xml-node.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 874 |
| Thread safe | &check; |
| Modifies variables | OK |


