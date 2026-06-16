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

Consulte la sección [XML, DOM y SAX](../theme/XML.md#xml-dom-and-sax) para obtener una definición de XML SAX.

### Creación, apertura y cierre de documentos XML mediante SAX

Los comandos SAX funcionan con las referencias de documento estándar de 4D (**DocRef**, una referencia de tipo Time). Por tanto, es posible utilizar estos comandos conjuntamente con los comandos 4D utilizados para gestionar documentos, como [`SEND PACKET`](../../commands/send-packet) o [`Append document`](../../commands/append-document).

La creación y apertura de documentos XML por programación se lleva a cabo utilizando los comandos [`Create document`](../../commands/create-document) y [`Open document`](../../commands/open-document). Posteriormente, el uso de un comando XML con estos documentos provocará la activación automática de mecanismos XML como la codificación. Por ejemplo, la codificación `<?xml version="1.0" encoding="… encodage …" standalone = "no "?>` el encabezado se escribirá automáticamente en el documento.

:::note

Los documentos que leen los comandos SAX deben abrirse en modo de solo lectura mediante el comando [`Open document`](../../commands/open-document). Esto evita cualquier conflicto entre 4D y la biblioteca Xerces cuando se abren documentos "normales" y XML simultáneamente. Si ejecuta un comando de análisis SAX con un documento abierto en modo de lectura-escritura, se muestra un mensaje de alerta y el análisis es imposible.

:::

El cierre de un documento XML debe realizarse mediante el comando [`CLOSE DOCUMENT`](../../commands/close-document). Si se abrieran algunos elementos XML, se cerrarán automáticamente.

### Acerca de caracteres finales de línea y gestión de BOM

Al generar documentos SAX, 4D utiliza los siguientes ajustes predeterminados para los caracteres de fin de línea y el uso de la máscara de orden de bytes (BOM):

- Caracteres CRLF en Windows y LF en macOS para los caracteres de fin de línea
- archivos escritos sin BOM.

:::note Compatibilidad

In projects created with 4D versions up to 19.x, by default 4D uses CRLF as end-of-line characters on macOS for SAX and a BOM. You can control the `XML line ending` and `XML BOM` management using the [`XML SET OPTIONS`](../../commands/xml-set-options) command and a [Compatibility setting](../../settings/compatibility.md). Important: Since SAX file lines are written directly at each statement, if you need to set the BOM and/or end-of-line options, you must call the [`XML SET OPTIONS`](../../commands/xml-set-options) command before the first SAX writing command.

:::
