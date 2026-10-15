---
id: xml
title: Procesamiento XML
slug: /Develop/XML
displayed_sidebar: docs
---


## Información general sobre los comandos XML

### XML, DOM y SAX

El [**tema XML**](../commands/theme/XML.md) agrupa los comandos "utilitarios" XML genéricos de 4D. Se trata de comandos de gestión de opciones y de errores.

4D también ofrece dos conjuntos distintos de comandos XML: [**DOM**](../commands/theme/XML_DOM.md) (Document Object Model) y [**SAX**](../commands/theme/XML_SAX.md) (Simple API XML) son dos modos de análisis diferentes para los documentos XML.

- El modo DOM analiza una fuente XML y construye su estructura (su "árbol") en memoria. Debido a esto, el acceso a cada elemento de la fuente es extremadamente rápido. Sin embargo, dado que toda la estructura de árbol se almacena en memoria, el procesamiento de documentos XML de gran tamaño puede llevar a superar la capacidad de memoria y provocar así errores.
- El modo SAX no construye una estructura de árbol en memoria. En este modo, se generan "eventos" (como el inicio y el fin de un elemento) al analizar la fuente. Este modo le permite analizar documentos XML de cualquier tamaño, independientemente de la cantidad de memoria disponible.

### Referencias

http://www.saxproject.org/?selected=event <br/>
http://www.w3schools.com/xml/

:::note

Para el soporte de XML, 4D utiliza la [biblioteca Xerces.dll](../Notes/updates.md#library-table) desarrollada por la empresa Apache Foundation.

:::


### Modo apropiativo

Las referencias XML creadas por un [proceso apropiativo](../Develop/preemptive.md) solo pueden utilizarse en ese proceso específico. A la inversa, las referencias XML creadas por un proceso cooperativo pueden utilizarse por cualquier otro proceso cooperativo, pero no pueden utilizarse por ningún proceso apropiativo.


### Juegos de caracteres

Los siguientes juegos de caracteres son compatibles con los comandos XML DOM y XML SAX de 4D:

- ASCII
- UTF-8
- UTF-16 (Big/Small Endian)
- UCS4 (Big/Small Endian)
- Páginas de códigos EBCDIC (codificaciones IBM037, IBM1047 e IBM1140)
- ISO-8859-1 (o Latin1)
- Windows-1252.


### Glosario

Esta lista no exhaustiva detalla los principales conceptos XML utilizados por los comandos y funciones de 4D.

- **Atributo**: un subtag XML asociado a un elemento. Un atributo siempre contiene un nombre y un valor.
- **Hijo (Child)**: En una estructura XML, un elemento situado en un nivel directamente inferior a otro.
- **DTD**: *Document Type Declaration*. La DTD registra el conjunto de reglas y propiedades específicas que el XML debe respetar. Estas reglas definen, más concretamente, el nombre y el contenido de cada tag así como su contexto. Esta formalización de los elementos puede utilizarse para comprobar si un documento XML es conforme (en cuyo caso, se declara "válido"). La DTD puede estar incluida en el documento XML (DTD interna) o en un documento separado (DTD externa). Tenga en cuenta que la DTD no es obligatoria.
- **Elemento**: un tag XML. Un elemento siempre contiene un nombre y un valor. Opcionalmente, un elemento puede contener atributos.
- **ElementRef**: referencia XML utilizada por los comandos XML de 4D para designar una estructura XML. Esta referencia está compuesta por 8 caracteres codificados en forma hexadecimal, lo que significa que su longitud es de 32 caracteres en un sistema de 64 bits. Se recomienda declarar las referencias XML como Texto.
- **Padre**: En una estructura XML, un elemento situado en un nivel directamente superior a otro.
- **Análisis (Parsing), analizador (parser)**: La acción de analizar el contenido de un objeto estructurado con el fin de extraer información útil.
- **Raíz (Root)**: Un elemento situado en el primer nivel de una estructura XML.
- **Hermano (Sibling)**: Un elemento situado en el mismo nivel que otro.
- **Estructura**: objeto XML estructurado. Este objeto puede ser un documento, una variable o un elemento.
- **Validación**: Un documento XML es "validado" por el analizador cuando está "bien formado" y es conforme con las especificaciones de la DTD.
- **Bien formado (Well-formed)**: Un documento XML se declara "bien formado" por el analizador cuando es conforme con las especificaciones XML genéricas.
- **XML**: eXtensible Markup Language. Un estándar informatizado de intercambio de datos que permite la transferencia de los datos así como de su estructura. El lenguaje XML se basa en el uso de tags y de una sintaxis específica, al igual que el lenguaje HTML. Sin embargo, a diferencia de este último, el lenguaje XML permite la definición de tags personalizados.
- **XSL**: eXtensible Stylesheet Language. Un lenguaje que permite la definición de hojas de estilo utilizadas para procesar y mostrar el contenido de un documento XSL.


## Comandos XML DOM

### Crear, abrir y cerrar documentos XML mediante DOM

Los objetos creados, modificados o analizados por los [comandos XML DOM de 4D](../commands/theme/XML_DOM.md) pueden ser texto, URL, documentos o BLOB. Los comandos DOM utilizados para abrir objetos XML en 4D son [`DOM Parse XML source`](../commands/dom-parse-xml-source) y [`DOM Parse XML variable`](../commands/dom-parse-xml-variable).

A continuación, muchos comandos le permiten leer, analizar y escribir los elementos y los atributos. Los errores se recuperan utilizando el comando [`XML GET ERROR`](../commands/xml-get-error). No olvide llamar al comando [`DOM CLOSE XML`](../commands/dom-close-xml) para cerrar la fuente al final.

Nota sobre el uso de los parámetros BLOB XML: Por razones históricas, los comandos XML como [`DOM Parse XML variable`](../commands/dom-parse-xml-variable) aceptan parámetros de tipo BLOB. Sin embargo, se recomienda encarecidamente almacenar las estructuras XML como Texto. El uso de los BLOB está reservado al procesamiento de datos binarios. De conformidad con las especificaciones XML, los datos binarios se codifican automáticamente en Base64, incluso cuando el BLOB contiene texto.


### Soporte de la notación XPath

Varios comandos XML DOM ([`DOM Create XML element`](../commands/dom-create-xml-element), [`DOM Find XML element`](../commands/dom-find-xml-element), [`DOM Create XML element arrays`](../commands/dom-create-xml-element-arrays) y [`DOM SET XML ELEMENT VALUE`](../commands/dom-set-xml-element-value)) soportan algunas expresiones XPath para acceder a los elementos XML.

La notación XPath proviene del lenguaje XPath, diseñado para navegar dentro de las estructuras XML. Permite designar elementos directamente dentro de una estructura XML mediante una sintaxis de tipo "nombre de ruta", sin tener necesariamente que indicar la ruta completa para alcanzarlo.

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

La notación XPath le permite acceder al elemento 3 utilizando la sintaxis */RootElement/Elem1/Elem2/Elem3*.

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

La notación XPath le permite acceder al valor "ccc" utilizando la sintaxis */RootElement/Elem1/Elem2[3]*.

Para una lista completa de las expresiones XPath soportadas, consulte la descripción del comando [`DOM Find XML element`](../commands/dom-find-xml-element).

:::note Compatibilidad

A partir de 4D 18 R3, la implementación de XPath se ha modificado para ser más conforme y soportar un conjunto más amplio de expresiones. Si desea beneficiarse de las funciones ampliadas en sus bases convertidas, debe seleccionar la opción **Utilizar XPath estándar** de la [página Compatibilidad](../settings/compatibility.md).

:::

### Gestión de errores

Muchas funciones de este tema devuelven una referencia de elemento XML. Si se produce un error durante la ejecución de la función (por ejemplo, si la referencia del elemento raíz no es válida), la variable *OK* se establece en 0 y se genera un error.

Además, la referencia devuelta en este caso es una secuencia de 32 caracteres cero "0".


## Comandos XML SAX

### Crear, abrir y cerrar documentos XML mediante SAX

Los [comandos XML SAX](../commands/theme/XML_SAX.md) funcionan con las referencias de documento estándar de 4D (**DocRef**, una referencia de tipo Hora). Por lo tanto, es posible utilizar estos comandos conjuntamente con los comandos 4D utilizados para gestionar documentos, como [`SEND PACKET`](../commands/send-packet) o [`Append document`](../commands/append-document).

La creación y apertura de documentos XML por programación se realiza utilizando los comandos [`Create document`](../commands/create-document) y [`Open document`](../commands/open-document). Posteriormente, el uso de un comando XML con estos documentos provocará la activación automática de mecanismos XML como la codificación. Por ejemplo, la cabecera `<?xml version="1.0" encoding="… codificación …" standalone = "no "?>` se escribirá automáticamente en el documento.

:::note

Los documentos leídos por los comandos SAX deben abrirse en modo solo lectura mediante el comando [`Open document`](../commands/open-document). Esto evita cualquier conflicto entre 4D y la biblioteca Xerces cuando abre simultáneamente documentos "normales" y XML. Si ejecuta un comando de análisis SAX con un documento abierto en modo lectura/escritura, se muestra un mensaje de alerta y el análisis es imposible.

:::

El cierre de un documento XML debe realizarse utilizando el comando [`CLOSE DOCUMENT`](../commands/close-document). Si había elementos XML abiertos, se cerrarán automáticamente.

### Acerca de los caracteres de fin de línea y la gestión del BOM

Al escribir documentos SAX, 4D utiliza los siguientes ajustes predeterminados para los caracteres de fin de línea y el uso del BOM (byte order mask):

- caracteres CRLF en Windows y LF en macOS para los caracteres de fin de línea
- los archivos se escriben sin BOM.

:::Note Nota de compatibilidad

En los proyectos creados con versiones de 4D hasta 19.x, por defecto 4D utiliza CRLF como caracteres de fin de línea en macOS para SAX y un BOM. Puede controlar la gestión de `XML line ending` y `XML BOM` utilizando el comando [`XML SET OPTIONS`](../commands/xml-set-options) y un [ajuste de compatibilidad](../settings/compatibility.md). Importante: Dado que las líneas de los archivos SAX se escriben directamente en cada instrucción, si necesita definir las opciones de BOM y/o de fin de línea, debe llamar al comando [`XML SET OPTIONS`](../commands/xml-set-options) antes del primer comando de escritura SAX.

:::
