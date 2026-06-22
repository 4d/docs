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

## Visión general de los comandos XML

:::note

Para soporte XML, 4D utiliza la [librería Xerces.dll](../../Notes/updates.md#library-table) desarrollada por la empresa Fundación Apache.

:::

### XML, DOM y SAX

El tema **XML** agrupa los comandos "utilities" XML genéricos de 4D. Estos son comandos relacionados con la gestión de opciones y de errores.

4D también ofrece dos conjuntos distintos de comandos XML: [**DOM**](../theme/XML_DOM.md) (Modelo de objetos de documento) y [**SAX**](../theme/XML_SAX.md) (API XML simple) son dos modos diferentes de análisis de documentos XML.

- El modo DOM analiza una fuente XML y construye su estructura (su "árbol") en la memoria. Por este motivo, el acceso a cada elemento del código fuente es extremadamente rápido. Sin embargo, dado que toda la estructura de árbol se almacena en memoria, el procesamiento de documentos XML de gran tamaño puede provocar que se supere la capacidad de memoria y, por lo tanto, dar lugar a errores.
- El modo SAX no crea una estructura de árbol en la memoria. En este modo, se generan "eventos" (como el inicio y el final de un elemento) al analizar el código fuente. Este modo le permite analizar documentos XML de cualquier tamaño, independientemente de la cantidad de memoria disponible.

#### Ver también

http://www.saxproject.org/?selected=event <br/>
http://www.w3schools.com/xml/

### Modo apropiativo

Las referencias XML creadas por un [proceso preventivo](../../Develop/preemptive.md) solo pueden utilizarse en ese proceso concreto. Por el contrario, las referencias XML creadas por un proceso cooperativo pueden ser utilizadas por cualquier otro proceso cooperativo, pero no pueden ser utilizadas por ningún proceso preemptivo.

### Conjuntos de caracteres

Los siguientes conjuntos de caracteres son soportados por los comandos XML DOM y XML SAX de 4D:

- ASCII
- UTF-8
- UTF-16 (Big/Small Endian)
- UCS4 (Big/Small Endian)
- Las codificaciones de las páginas de códigos EBCDIC IBM037, IBM1047 e IBM1140,
- ISO-8859-1 (o Latin1)
- Windows-1252.

### Glosario

Esta lista no exhaustiva detalla los principales conceptos XML utilizados por los comandos y funciones de 4D.

- **Atributo**: subetiqueta XML asociada a un elemento. Un atributo siempre contiene un nombre y un valor.
- **Child**: en una estructura XML, un elemento en un nivel directamente por debajo de otro.
- **DTD**: *Document Type Declaration*. El DTD recoge el conjunto de reglas y propiedades específicas que debe cumplir el XML. Estas reglas definen, más concretamente, el nombre y el contenido de cada etiqueta así como su contexto. Esta formalización de los elementos puede utilizarse para comprobar si un documento XML es conforme (en cuyo caso, se declara "válido"). El DTD puede ser incluido en el documento XML (DTD interno) o en un documento separado (DTD externo). Tenga en cuenta que la DTD no es obligatoria.
- **Elemento**: una etiqueta XML. Un elemento siempre contiene un nombre y un valor. Opcionalmente, un elemento puede contener atributos.
- **ElementRef**: referencia XML usada por los comandos 4D XML para especificar una estructura XML. Esta referencia está compuesta por 8 caracteres codificados en formato hexadecimal, lo que significa que su longitud es de 32 caracteres en un sistema de 64 bits. Se recomienda declarar las referencias XML como Texto.
- **Padre**: en una estructura XML, elemento situado en un nivel directamente superior a otro.
- **Análisis sintáctico, analizador sintáctico**: el proceso de analizar el contenido de un objeto estructurado con el fin de extraer información útil.
- **Raíz**: un elemento ubicado en el primer nivel de una estructura XML.
- **Elemento hermano**: un elemento que se encuentra al mismo nivel que otro.
- **Estructura**: objeto XML estructurado. Este objeto puede ser un documento, una variable o un elemento.
- **Validación**: un documento XML es "validado" por el analizador sintáctico cuando está "bien formado" y cumple las especificaciones DTD.
- **Bien formado**: un documento XML es declarado “bienformado” por el analizador cuando cumple con las especificaciones genéricas XML.
- **XML**: eXtensible Markup Language. Un estándar informatizado de intercambio de datos que permite la transferencia de datos, así como de su estructura. El lenguaje XML se basa en el uso de etiquetas y una sintaxis específica, en consonancia con el lenguaje HTML. Sin embargo, a diferencia de este último, el lenguaje XML permite definir etiquetas personalizadas.
- **XSL**: eXtensible Stylesheet Language. Un lenguaje que permite la definición de hojas de estilo utilizadas para procesar y mostrar los contenidos de un documento XSL.

