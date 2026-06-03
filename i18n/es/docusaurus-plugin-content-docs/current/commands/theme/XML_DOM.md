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

See [XML, DOM, and SAX](../theme/XML.md#xml-dom-and-sax) section for a definition of XML DOM.

### Creación, apertura y cierre de documentos XML mediante DOM

Objects created, modified or parsed by the 4D DOM commands can be text, URLs, documents or BLOBs. The DOM commands used for opening XML objects in 4D are [`DOM Parse XML source`](../../commands/dom-parse-xml-source) and [`DOM Parse XML variable`](../../commands/dom-parse-xml-variable).

Muchos comandos permiten leer, analizar y escribir los elementos y atributos. Los errores se recuperan utilizando el comando [`XML GET ERROR`](../../commands/xml-get-error). No olvide llamar al comando [`DOM CLOSE XML`](../../commands/dom-close-xml) para cerrar la fuente al final.

Note about use of XML BLOB parameters: For historical reasons, XML commands such as [`DOM Parse XML variable`](../../commands/dom-parse-xml-variable) accept BLOB type parameters. However, it is highly recommended to store XML structures as Text. The use of BLOBs is reserved for processing binary data. In conformity with XML specifications, binary data are automatically encoded in Base64, even when the BLOB contains text.

### Soporte de la notación XPath

Several XML DOM commands ([`DOM Create XML element`](../../commands/dom-create-xml-element), [`DOM Find XML element`](../../commands/dom-find-xml-element), [`DOM Create XML element arrays`](../../commands/dom-create-xml-element-arrays) and [`DOM SET XML ELEMENT VALUE`](../../commands/dom-set-xml-element-value)) support some XPath expressions for accessing XML elements.

La notación XPath procede del lenguaje XPath, diseñado para navegar dentro de estructuras XML. It allows the setting of elements directly within an XML structure via a "pathname" type syntax, without necessarily having to indicate the complete pathname in order to reach it.

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

XPath notation allows you to access element 3 using the */RootElement/Elem1/Elem2/Elem3* syntax.

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

Starting with 4D 18 R3, the XPath implementation has been modified to be more compliant and to support a wider set of expressions. If you want to benefit from the extended features in your converted databases, you need to select the **Use standard XPath** option of the [Compatibility page](../../settings/compatibility.md).

:::

### Gestión de errores

Muchas funciones de este tema devuelven una referencia a un elemento XML. If an error occurs during function execution (for example, if the root element reference is not valid), the *OK* variable is set to 0 and an error is generated.

In addition, the reference returned in this case is a sequence of 32 zero "0" characters.

