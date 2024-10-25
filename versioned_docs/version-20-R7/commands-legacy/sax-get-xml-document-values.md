---
id: sax-get-xml-document-values
title: SAX GET XML DOCUMENT VALUES
slug: /commands/sax-get-xml-document-values
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML DOCUMENT VALUES.Syntax-->**SAX GET XML DOCUMENT VALUES** ( *document* ; *encoding* ; *version* ; *standalone* )<!-- END REF-->
<!--REF #_command_.SAX GET XML DOCUMENT VALUES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Reference of open document |
| encoding | Text | &#8592; | XML document character set |
| version | Text | &#8592; | XML version |
| standalone | Boolean | &#8592; | True = document is standalone, otherwise False |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX GET XML DOCUMENT VALUES.Summary-->The **SAX GET XML DOCUMENT VALUES** command gets basic information from the XML header of the XML document referenced in the *document* parameter.<!-- END REF--> 

The command returns the type of encoding, version and the “standalone” property of the document respectively in the *encoding*, *version* and *standalone* parameters. This command must be used with the SAX event XML Start Document. For more information about SAX events, refer to the description of the [SAX Get XML node](sax-get-xml-node.md) command. 

#### System variables and sets 

If the command has been executed correctly, the system variable OK is set to 1\. Otherwise, it is set to 0 and an error is generated. 

#### See also 

[SAX Get XML node](sax-get-xml-node.md)  
[SAX SET XML DECLARATION](sax-set-xml-declaration.md)  