---
id: XML_theme
title: XML
sidebar_label: XML
slug: /commands/theme/XML
---

|                                                                                           |
| ----------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #_command_.XML DECODE.Syntax -->](../../commands/xml-decode)<br/>           |
| [<!-- INCLUDE #_command_.XML GET ERROR.Syntax -->](../../commands/xml-get-error)<br/>     |
| [<!-- INCLUDE #_command_.XML GET OPTIONS.Syntax -->](../../commands/xml-get-options)<br/> |
| [<!-- INCLUDE #_command_.XML SET OPTIONS.Syntax -->](../../commands/xml-set-options)<br/> |

## Overview of XML Commands

:::note

For XML support, 4D uses the [Xerces.dll library](../../Notes/updates.md#library-table) developed by the Apache Foundation company.

:::

### XML, DOM, and SAX

The **XML** theme groups together the generic XML "utilities" commands of 4D. These are option- and error-management commands.

4D also offers two separate sets of XML commands: [**DOM**](../theme/XML_DOM.md) (Document Object Model) and [**SAX**](../theme/XML_SAX.md) (Simple API XML) are two different parsing modes for XML documents.

- The DOM mode parses an XML source and builds its structure (its "tree") in memory. Because of this, access to each element of the source is extremely fast. However, since the entire tree structure is stored in memory, the processing of large XML documents may lead to the memory capacity being exceeded and thus provoke errors.
- The SAX mode does not build a tree structure in memory. In this mode, "events" (such as the start and end of an element) are generated when parsing the source. This mode lets you parse XML documents of any size, regardless of the amount of memory available.

#### 参照

http://www.saxproject.org/?selected=event <br/>
http://www.w3schools.com/xml/

### プリエンプティブモード

XML references created by a [preemptive process](../../Develop/preemptive.md) can only be used in that specific process. Conversely, XML references created by a cooperative process can be used by any other cooperative process, but cannot be used by any preemptive process.

### Character Sets

The following character sets are supported by the XML DOM and XML SAX commands of 4D:

- ASCII
- UTF-8
- UTF-16 (Big/Small Endian)
- UCS4 (Big/Small Endian)
- EBCDIC code pages IBM037, IBM1047 and IBM1140 encodings,
- ISO-8859-1 (or Latin1)
- Windows-1252.

### 用語集

This non-exhaustive list details the main XML concepts used by the commands and functions of 4D.

- **Attribute**: an XML sub-tag associated with an element. An attribute always contains a name and a value.
- **Child**: In an XML structure, an element in a level directly below another.
- **DTD**: *Document Type Declaration*. The DTD records the set of specific rules and properties that the XML must follow. These rules define, more particularly, the name and content of each tag as well as its context. This formalization of the elements can be used to check whether an XML document is in compliance (in which case, it is declared “valid”). The DTD may be included in the XML document (internal DTD) or in a separate document (external DTD). Note that the DTD is not mandatory.
- **Element**: an XML tag. An element always contains a name and a value. Optionally, an element may contain attributes.
- **ElementRef**: XML reference used by the 4D XML commands to specify an XML structure. This reference is made up of 8 coded characters in hexadecimal form, which means that its length is 32 characters on a 64-bit system. It is recommended to declare XML references as Text.
- **Parent**: In an XML structure, an element in a level directly above another.
- **Parsing, parser**: The act of analyzing the contents of a structured object in order to extract useful information.
- **Root**: An element located at the first level of an XML structure.
- **Sibling**: An element at the same level as another.
- **Structure**: structured XML object. This object can be a document, a variable, or an element.
- **Validation**: An XML document is “validated” by the parser when it is “well-formed” and in compliance with the DTD specifications.
- **Well-formed**: An XML document is declared “well-formed” by the parser when it complies with the generic XML specifications.
- **XML**: eXtensible Markup Language. A computerized data exchange standard enabling the transfer of data as well as their structure. The XML language is based on the use of tags and a specific syntax, in keeping with the HTML language. However, unlike the latter, the XML language allows the definition of customized tags.
- **XSL**: eXtensible Stylesheet Language. A language permitting the definition of style sheets used to process and display the contents of an XSL document.

