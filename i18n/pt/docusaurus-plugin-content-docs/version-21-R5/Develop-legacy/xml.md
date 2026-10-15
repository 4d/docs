---
id: xml
title: XML Processing
slug: /Develop/XML
displayed_sidebar: docs
---


## Overview of XML Commands

### XML, DOM, and SAX

The [**XML** theme](../commands/theme/XML.md) groups together the generic XML "utilities" commands of 4D. These are option- and error-management commands. 

4D also offers two separate sets of XML commands: [**DOM**](../commands/theme/XML_DOM.md) (Document Object Model) and [**SAX**](../commands/theme/XML_SAX.md) (Simple API XML) are two different parsing modes for XML documents.

- The DOM mode parses an XML source and builds its structure (its "tree") in memory. Because of this, access to each element of the source is extremely fast. However, since the entire tree structure is stored in memory, the processing of large XML documents may lead to the memory capacity being exceeded and thus provoke errors.
- The SAX mode does not build a tree structure in memory. In this mode, "events" (such as the start and end of an element) are generated when parsing the source. This mode lets you parse XML documents of any size, regardless of the amount of memory available.

### References

http://www.saxproject.org/?selected=event <br/>
http://www.w3schools.com/xml/

:::note

For XML support, 4D uses the [Xerces.dll library](../Notes/updates.md#library-table) developed by the Apache Foundation company. 

:::


### Preemptive mode

XML references created by a [preemptive process](../Develop/preemptive.md) can only be used in that specific process. Conversely, XML references created by a cooperative process can be used by any other cooperative process, but cannot be used by any preemptive process.


### Character Sets  

The following character sets are supported by the XML DOM and XML SAX commands of 4D:

- ASCII
- UTF-8
- UTF-16 (Big/Small Endian)
- UCS4 (Big/Small Endian)
- EBCDIC code pages IBM037, IBM1047 and IBM1140 encodings,
- ISO-8859-1 (or Latin1)
- Windows-1252.


### Glossary

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


## XML DOM Commands

### Creating, opening and closing XML documents via DOM  

Objects created, modified or parsed by the [4D XML DOM commands](../commands/theme/XML_DOM.md) can be text, URLs, documents or BLOBs. The DOM commands used for opening XML objects in 4D are [`DOM Parse XML source`](../commands/dom-parse-xml-source) and [`DOM Parse XML variable`](../commands/dom-parse-xml-variable).

Many commands then let you read, parse and write the elements and attributes. Errors are recovered using the [`XML GET ERROR`](../commands/xml-get-error) command. Do not forget to call the [`DOM CLOSE XML`](../commands/dom-close-xml) command to close the source in the end.

Note about use of XML BLOB parameters: For historical reasons, XML commands such as [`DOM Parse XML variable`](../commands/dom-parse-xml-variable) accept BLOB type parameters. However, it is highly recommended to store XML structures as Text. The use of BLOBs is reserved for processing binary data. In conformity with XML specifications, binary data are automatically encoded in Base64, even when the BLOB contains text.


### Support of XPath notation  

Several XML DOM commands ([`DOM Create XML element`](../commands/dom-create-xml-element), [`DOM Find XML element`](../commands/dom-find-xml-element), [`DOM Create XML element arrays`](../commands/dom-create-xml-element-arrays) and [`DOM SET XML ELEMENT VALUE`](../commands/dom-set-xml-element-value)) support some XPath expressions for accessing XML elements. 

XPath notation comes from the XPath language, designed to navigate within XML structures. It allows the setting of elements directly within an XML structure via a "pathname" type syntax, without necessarily having to indicate the complete pathname in order to reach it. 

For example, given the following structure: 

```xml
   <RootElement>
      <Elem1>
         <Elem2>
            <Elem3 Font=Verdana Size=10> </Elem3>
         </Elem2>
      </Elem1>
   </RootElement>
```

XPath notation allows you to access element 3 using the */RootElement/Elem1/Elem2/Elem3* syntax.

4D also accepts indexed XPath elements using the *Element[ElementNum]* syntax. For example, given the following structure:

```xml
   <RootElement>
      <Elem1>
         <Elem2>aaa</Elem2>
         <Elem2>bbb</Elem2>
         <Elem2>ccc</Elem2>
      </Elem1>
   </RootElement>
```

XPath notation allows you to access the "ccc" value using the */RootElement/Elem1/Elem2[3]* syntax.

For a comprehensive list of supported XPath expressions, refer to the [`DOM Find XML element`](../commands/dom-find-xml-element) command description. 

:::note Compatibility

Starting with 4D 18 R3, the XPath implementation has been modified to be more compliant and to support a wider set of expressions. If you want to benefit from the extended features in your converted databases, you need to select the **Use standard XPath** option of the [Compatibility page](../settings/compatibility.md). 

:::

### Error Handling  

Many functions in this theme return an XML element reference. If an error occurs during function execution (for example, if the root element reference is not valid), the *OK* variable is set to 0 and an error is generated.

In addition, the reference returned in this case is a sequence of 32 zero "0" characters.


## XML SAX Commands

### Creating, opening and closing XML documents via SAX  

The [XML SAX commands](../commands/theme/XML_SAX.md) work with the standard document references of 4D (**DocRef**, a Time type reference). It is therefore possible to use these commands jointly with the 4D commands used to manage documents, such as [`SEND PACKET`](../commands/send-packet) or [`Append document`](../commands/append-document).

The creation and opening of XML documents by programming is carried out using the [`Create document`](../commands/create-document) and [`Open document`](../commands/open-document) commands. Subsequently, the use of an XML command with these documents will cause the automatic activation of XML mechanisms such as encoding. For instance, the `<?xml version="1.0" encoding="… encodage …" standalone = "no "?>` header will be written automatically in the document.

:::note

Documents read by SAX commands must be opened in read-only mode by the [`Open document`](../commands/open-document) command. This avoids any conflict between 4D and the Xerces library when you open "regular" and XML documents simultaneously. If you execute a SAX parsing command with a document open in read-write mode, an alert message is displayed and parsing is impossible.

:::

Closing an XML document must be carried out using the [`CLOSE DOCUMENT`](../commands/close-document) command. If any XML elements were open, they will be closed automatically.

### About end-of-line characters and BOM management  

When writing SAX documents, 4D uses the following default settings for end-of-line characters and BOM (byte order mask) usage:

- CRLF characters on Windows and LF on macOS for end-of-line characters
- files are written without BOM.

:::note Compatibility

In projects created with 4D versions up to 19.x, by default 4D uses CRLF as end-of-line characters on macOS for SAX and a BOM. You can control the `XML line ending` and `XML BOM` management using the [`XML SET OPTIONS`](../commands/xml-set-options) command and a [Compatibility setting](../settings/compatibility.md). Important: Since SAX file lines are written directly at each statement, if you need to set the BOM and/or end-of-line options, you must call the [`XML SET OPTIONS`](../commands/xml-set-options) command before the first SAX writing command.

:::
