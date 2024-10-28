---
id: dom-set-xml-declaration
title: DOM SET XML DECLARATION
slug: /commands/dom-set-xml-declaration
displayed_sidebar: docs
---

<!--REF #_command_.DOM SET XML DECLARATION.Syntax-->**DOM SET XML DECLARATION** ( *elementRef* ; *encoding* {; *standalone* {; *indentation*}} )<!-- END REF-->
<!--REF #_command_.DOM SET XML DECLARATION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML element reference |
| encoding | Text | &#8594;  | XML document character set |
| standalone | Boolean | &#8594;  | True = document is standalone False (default) = document is not standalone |
| indentation | Boolean | &#8594;  | *** Obsolete, do not use *** |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM SET XML DECLARATION.Summary-->The **DOM SET XML DECLARATION** command allows you to define various options that are useful in creating the XML tree set using *elementRef*.<!-- END REF--> These options concern the encoding and the standalone property of the tree:

* *encoding*: Indicates the character set used in the document. By default (if the command is not called), the UTF-8 character set (compressed Unicode) is used.  
**Note:** If you pass a character set that is not supported by 4D XML commands, UTF-8 will be used. Refer to *Character Sets* to see the list of character sets supported (UTF-8 is however recommended in most cases).
* *standalone*: Indicates whether the tree is standalone (**True**) or if it needs other files or external resources to operate (**False**). By default (if the command is not called or if the parameter is omitted), the tree is not standalone.
**Compatibility note:** The *indentation* parameter is kept for reasons of compatibility with previous versions of 4D but its use is not recommended in 4D v12\. From now on, to specify the indentation of the document, it is strongly recommended to use the [XML SET OPTIONS](xml-set-options.md) command.

#### Example 

The following example sets the encoding to use and the standalone option in the *elementRef* element: 

```4d
 DOM SET XML DECLARATION(elementRef;"UTF-16";True)
```

#### See also 

[DOM Create XML Ref](dom-create-xml-ref.md)  
[XML SET OPTIONS](xml-set-options.md)  