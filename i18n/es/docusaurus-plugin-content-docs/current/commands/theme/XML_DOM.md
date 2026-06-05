---
id: XML_DOM_theme
title: XML DOM
sidebar_label: XML DOM
slug: /commands/theme/XML-DOM
---

|                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #_command_.DOM Append XML child node.Syntax -->](../../commands/dom-append-xml-child-node)<br/>                       |
| [<!-- INCLUDE #_command_.DOM Append XML element.Syntax -->](../../commands/dom-append-xml-element)<br/>                             |
| [<!-- INCLUDE #_command_.DOM CLOSE XML.Syntax -->](../../commands/dom-close-xml)<br/>                                               |
| [<!-- INCLUDE #_command_.DOM Count XML attributes.Syntax -->](../../commands/dom-count-xml-attributes)<br/>                         |
| [<!-- INCLUDE #_command_.DOM Count XML elements.Syntax -->](../../commands/dom-count-xml-elements)<br/>                             |
| [<!-- INCLUDE #_command_.DOM Create XML element.Syntax -->](../../commands/dom-create-xml-element)<br/>                             |
| [<!-- INCLUDE #_command_.DOM Create XML element arrays.Syntax -->](../../commands/dom-create-xml-element-arrays)<br/>               |
| [<!-- INCLUDE #_command_.DOM Create XML Ref.Syntax -->](../../commands/dom-create-xml-ref)<br/>                                     |
| [<!-- INCLUDE #_command_.DOM EXPORT TO FILE.Syntax -->](../../commands/dom-export-to-file)<br/>                                     |
| [<!-- INCLUDE #_command_.DOM EXPORT TO VAR.Syntax -->](../../commands/dom-export-to-var)<br/>                                       |
| [<!-- INCLUDE #_command_.DOM Find XML element.Syntax -->](../../commands/dom-find-xml-element)<br/>                                 |
| [<!-- INCLUDE #_command_.DOM Find XML element by ID.Syntax -->](../../commands/dom-find-xml-element-by-id)<br/>                     |
| [<!-- INCLUDE #_command_.DOM Get first child XML element.Syntax -->](../../commands/dom-get-first-child-xml-element)<br/>           |
| [<!-- INCLUDE #_command_.DOM Get last child XML element.Syntax -->](../../commands/dom-get-last-child-xml-element)<br/>             |
| [<!-- INCLUDE #_command_.DOM Get next sibling XML element.Syntax -->](../../commands/dom-get-next-sibling-xml-element)<br/>         |
| [<!-- INCLUDE #_command_.DOM Get parent XML element.Syntax -->](../../commands/dom-get-parent-xml-element)<br/>                     |
| [<!-- INCLUDE #_command_.DOM Get previous sibling XML element.Syntax -->](../../commands/dom-get-previous-sibling-xml-element)<br/> |
| [<!-- INCLUDE #_command_.DOM Get root XML element.Syntax -->](../../commands/dom-get-root-xml-element)<br/>                         |
| [<!-- INCLUDE #_command_.DOM GET XML ATTRIBUTE BY INDEX.Syntax -->](../../commands/dom-get-xml-attribute-by-index)<br/>             |
| [<!-- INCLUDE #_command_.DOM GET XML ATTRIBUTE BY NAME.Syntax -->](../../commands/dom-get-xml-attribute-by-name)<br/>               |
| [<!-- INCLUDE #_command_.DOM GET XML CHILD NODES.Syntax -->](../../commands/dom-get-xml-child-nodes)<br/>                           |
| [<!-- INCLUDE #_command_.DOM Get XML document ref.Syntax -->](../../commands/dom-get-xml-document-ref)<br/>                         |
| [<!-- INCLUDE #_command_.DOM Get XML element.Syntax -->](../../commands/dom-get-xml-element)<br/>                                   |
| [<!-- INCLUDE #_command_.DOM GET XML ELEMENT NAME.Syntax -->](../../commands/dom-get-xml-element-name)<br/>                         |
| [<!-- INCLUDE #_command_.DOM GET XML ELEMENT VALUE.Syntax -->](../../commands/dom-get-xml-element-value)<br/>                       |
| [<!-- INCLUDE #_command_.DOM Get XML information.Syntax -->](../../commands/dom-get-xml-information)<br/>                           |
| [<!-- INCLUDE #_command_.DOM Insert XML element.Syntax -->](../../commands/dom-insert-xml-element)<br/>                             |
| [<!-- INCLUDE #_command_.DOM Parse XML source.Syntax -->](../../commands/dom-parse-xml-source)<br/>                                 |
| [<!-- INCLUDE #_command_.DOM Parse XML variable.Syntax -->](../../commands/dom-parse-xml-variable)<br/>                             |
| [<!-- INCLUDE #_command_.DOM REMOVE XML ATTRIBUTE.Syntax -->](../../commands/dom-remove-xml-attribute)<br/>                         |
| [<!-- INCLUDE #_command_.DOM REMOVE XML ELEMENT.Syntax -->](../../commands/dom-remove-xml-element)<br/>                             |
| [<!-- INCLUDE #_command_.DOM SET XML ATTRIBUTE.Syntax -->](../../commands/dom-set-xml-attribute)<br/>                               |
| [<!-- INCLUDE #_command_.DOM SET XML DECLARATION.Syntax -->](../../commands/dom-set-xml-declaration)<br/>                           |
| [<!-- INCLUDE #_command_.DOM SET XML ELEMENT NAME.Syntax -->](../../commands/dom-set-xml-element-name)<br/>                         |
| [<!-- INCLUDE #_command_.DOM SET XML ELEMENT VALUE.Syntax -->](../../commands/dom-set-xml-element-value)<br/>                       |

## Visión general de los comandos XML DOM

Consulte la sección [XML, DOM y SAX](../theme/XML.md#xml-dom-and-sax) para obtener una definición de XML DOM.

### Creación, apertura y cierre de documentos XML mediante DOM

Los objetos creados, modificados o analizados por los comandos DOM de 4D pueden ser texto, URLs, documentos o BLOBs. Los comandos DOM utilizados para abrir objetos XML en 4D son [`DOM Parse XML source`](../../commands/dom-parse-xml-source) y [`DOM Parse XML variable`](../../commands/dom-parse-xml-variable).

Muchos comandos permiten leer, analizar y escribir los elementos y atributos. Los errores se recuperan utilizando el comando [`XML GET ERROR`](../../commands/xml-get-error). No olvide llamar al comando [`DOM CLOSE XML`](../../commands/dom-close-xml) para cerrar la fuente al final.

Nota sobre el uso de parámetros BLOB XML: por razones históricas, los comandos XML como [`DOM Parse XML variable`](../../commands/dom-parse-xml-variable) aceptan parámetros de tipo BLOB. Sin embargo, se recomienda encarecidamente almacenar las estructuras XML como texto. El uso de BLOBs está reservado al tratamiento de datos binarios. Conforme con las especificaciones XML, los datos binarios se codifican automáticamente en Base64, incluso cuando el BLOB contiene texto.

### Soporte de la notación XPath

Varios comandos XML DOM ([`DOM Create XML element`](../../commands/dom-create-xml-element), [`DOM Find XML element`](../../commands/dom-find-xml-element), [`DOM Create XML element arrays`](../../commands/dom-create-xml-element-arrays) y [`DOM SET XML ELEMENT VALUE`](../../commands/dom-set-xml-element-value)) soportan algunas expresiones XPath para acceder a elementos XML.

La notación XPath procede del lenguaje XPath, diseñado para navegar dentro de estructuras XML. Permite fijar elementos directamente dentro de una estructura XML mediante una sintaxis de tipo "pathname", sin tener que indicar necesariamente la ruta completa para llegar a ella.

Por ejemplo, dada la siguiente estructura:

```xml
   <RootElement>
      <Elem1>
         <Elem2>
            <Elem3 Font=Verdana Size=10> </Elem3>
         </Elem2>
      </Elem1>
   </RootElement>
```

La notación XPath permite acceder al elemento 3 utilizando la sintaxis */RootElement/Elem1/Elem2/Elem3*.

4D también acepta elementos XPath indexados utilizando la sintaxis *Element[ElementNum]*. Por ejemplo, dada la siguiente estructura:

```xml
   <RootElement>
      <Elem1>
         <Elem2>aaa</Elem2>
         <Elem2>bbb</Elem2>
         <Elem2>ccc</Elem2>
      </Elem1>
   </RootElement>
```

La notación XPath permite acceder al valor "ccc" utilizando la sintaxis */RootElement/Elem1/Elem2[3]*.

Para una lista completa de expresiones XPath soportadas, consulte la descripción del comando [`DOM Find XML`](../../commands/dom-find-xml-element).

:::note Compatibilidad

A partir de 4D 18 R3, la implementación de XPath ha sido modificada para ser más compatible y soportar un conjunto más amplio de expresiones. Si desea beneficiarse de las funciones extendidas en sus bases de datos convertidas, deberá seleccionar la opción **Utilizar XPath estándar** de la [Página de compatibilidad](../../settings/compatibility.md).

:::

### Gestión de errores

Muchas funciones de este tema devuelven una referencia a un elemento XML. Si se produce un error durante la ejecución de la función (por ejemplo, si la referencia al elemento raíz no es válida), la variable *OK* se pone en 0 y se genera un error.

In addition, the reference returned in this case is a sequence of 32 zero "0" characters.

