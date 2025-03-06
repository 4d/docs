---
id: sax-set-xml-declaration
title: SAX SET XML DECLARATION
slug: /commands/sax-set-xml-declaration
displayed_sidebar: docs
---

<!--REF #_command_.SAX SET XML DECLARATION.Syntax-->**SAX SET XML DECLARATION** ( *document* ; *encoding* {; *standalone*} )<!-- END REF-->
<!--REF #_command_.SAX SET XML DECLARATION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Reference of open document |
| encoding | Text | &#8594;  | XML document character set |
| standalone | Boolean | &#8594;  | True = the document is standalone False (default) = document is not standalone |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX SET XML DECLARATION.Summary-->The **SAX SET XML DECLARATION** command initializes the XML document referenced in *document* using the specified *encoding*.<!-- END REF--> Optionnally, you can set the *standalone* attribute.

* *encoding*: Indicates the character set used in the document. By default (if the command is not called), the UTF-8 character set (compressed Unicode) is used.  
**Note:** If you pass a character set that is not supported by 4D XML commands, UTF-8 will be used. Refer to *Character Sets* to see the list of character sets supported (UTF-8 is however recommended in most cases).
* *standalone*: Indicates whether the document is standalone (**True**) or if it needs other files or external resources to operate (**False**). By default (if the command is not called or if the parameter is omitted), the document is not standalone.

**Note:** You can specify the indentation of the document thanks to the [XML SET OPTIONS](xml-set-options.md) command before writing anything.

This command must be called one time per document and before the first XML set command in the document; otherwise, an error message will be generated.

#### Example 

The following code: 

```4d
 SAX SET XML DECLARATION($DocRef;"UTF-16";True)
```

... will write this line in the document: 

```XML
<<?xml version="1.0" encoding="UTF-16" standalone="yes"?>
```

#### See also 

[SAX GET XML DOCUMENT VALUES](sax-get-xml-document-values.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 858 |
| Thread safe | &check; |


