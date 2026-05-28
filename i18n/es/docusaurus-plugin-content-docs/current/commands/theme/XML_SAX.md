---
id: XML_SAX_theme
title: XML SAX
sidebar_label: XML SAX
slug: /commands/theme/XML-SAX
---

|                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #_command_.SAX ADD PROCESSING INSTRUCTION.Syntax -->](../../commands/sax-add-processing-instruction)<br/>         |
| [<!-- INCLUDE #_command_.SAX ADD XML CDATA.Syntax -->](../../commands/sax-add-xml-cdata)<br/>                                   |
| [<!-- INCLUDE #_command_.SAX ADD XML COMMENT.Syntax -->](../../commands/sax-add-xml-comment)<br/>                               |
| [<!-- INCLUDE #_command_.SAX ADD XML DOCTYPE.Syntax -->](../../commands/sax-add-xml-doctype)<br/>                               |
| [<!-- INCLUDE #_command_.SAX ADD XML ELEMENT VALUE.Syntax -->](../../commands/sax-add-xml-element-value)<br/>                   |
| [<!-- INCLUDE #_command_.SAX CLOSE XML ELEMENT.Syntax -->](../../commands/sax-close-xml-element)<br/>                           |
| [<!-- INCLUDE #_command_.SAX GET XML CDATA.Syntax -->](../../commands/sax-get-xml-cdata)<br/>                                   |
| [<!-- INCLUDE #_command_.SAX GET XML COMMENT.Syntax -->](../../commands/sax-get-xml-comment)<br/>                               |
| [<!-- INCLUDE #_command_.SAX GET XML DOCUMENT VALUES.Syntax -->](../../commands/sax-get-xml-document-values)<br/>               |
| [<!-- INCLUDE #_command_.SAX GET XML ELEMENT.Syntax -->](../../commands/sax-get-xml-element)<br/>                               |
| [<!-- INCLUDE #_command_.SAX GET XML ELEMENT VALUE.Syntax -->](../../commands/sax-get-xml-element-value)<br/>                   |
| [<!-- INCLUDE #_command_.SAX GET XML ENTITY.Syntax -->](../../commands/sax-get-xml-entity)<br/>                                 |
| [<!-- INCLUDE #_command_.SAX Get XML node.Syntax -->](../../commands/sax-get-xml-node)<br/>                                     |
| [<!-- INCLUDE #_command_.SAX GET XML PROCESSING INSTRUCTION.Syntax -->](../../commands/sax-get-xml-processing-instruction)<br/> |
| [<!-- INCLUDE #_command_.SAX OPEN XML ELEMENT.Syntax -->](../../commands/sax-open-xml-element)<br/>                             |
| [<!-- INCLUDE #_command_.SAX OPEN XML ELEMENT ARRAYS.Syntax -->](../../commands/sax-open-xml-element-arrays)<br/>               |
| [<!-- INCLUDE #_command_.SAX SET XML DECLARATION.Syntax -->](../../commands/sax-set-xml-declaration)<br/>                       |

## Visión general de los comandos XML SAX

See [XML, DOM, and SAX](../theme/XML.md#xml-dom-and-sax) section for a definition of XML SAX.

### Creación, apertura y cierre de documentos XML mediante SAX

The SAX commands work with the standard document references of 4D (**DocRef**, a Time type reference). It is therefore possible to use these commands jointly with the 4D commands used to manage documents, such as [`SEND PACKET`](../../commands/send-packet) or [`Append document`](../../commands/append-document).

The creation and opening of XML documents by programming is carried out using the [`Create document`](../../commands/create-document) and [`Open document`](../../commands/open-document) commands. Posteriormente, el uso de un comando XML con estos documentos provocará la activación automática de mecanismos XML como la codificación. Por ejemplo, la codificación `<?xml version="1.0" encoding="… encodage …" standalone = "no "?>` el encabezado se escribirá automáticamente en el documento.

:::note

Documents read by SAX commands must be opened in read-only mode by the [`Open document`](../../commands/open-document) command. Esto evita cualquier conflicto entre 4D y la biblioteca Xerces cuando se abren documentos "normales" y XML simultáneamente. If you execute a SAX parsing command with a document open in read-write mode, an alert message is displayed and parsing is impossible.

:::

El cierre de un documento XML debe realizarse mediante el comando [`CLOSE DOCUMENT`](../../commands/close-document). If any XML elements were open, they will be closed automatically.

### About end-of-line characters and BOM management

When writing SAX documents, 4D uses the following default settings for end-of-line characters and BOM (byte order mask) usage:

- Caracteres CRLF en Windows y LF en macOS para los caracteres de fin de línea
- archivos escritos sin BOM.

:::note Compatibilidad

In projects created with 4D versions up to 19.x, by default 4D uses CRLF as end-of-line characters on macOS for SAX and a BOM. You can control the `XML line ending` and `XML BOM` management using the [`XML SET OPTIONS`](../../commands/xml-set-options) command and a [Compatibility setting](../../settings/compatibility.md). Important: Since SAX file lines are written directly at each statement, if you need to set the BOM and/or end-of-line options, you must call the [`XML SET OPTIONS`](../../commands/xml-set-options) command before the first SAX writing command.

:::
