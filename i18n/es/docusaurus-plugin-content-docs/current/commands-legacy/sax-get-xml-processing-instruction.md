---
id: sax-get-xml-processing-instruction
title: SAX GET XML PROCESSING INSTRUCTION
slug: /commands/sax-get-xml-processing-instruction
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML PROCESSING INSTRUCTION.Syntax-->**SAX GET XML PROCESSING INSTRUCTION** ( *documento* ; *nombre* ; *valor* )<!-- END REF-->
<!--REF #_command_.SAX GET XML PROCESSING INSTRUCTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referencia del documento abierto |
| nombre | Text | &#8592; | Nombre de la instrucción |
| valor | Text | &#8592; | Valor de la instrucción |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SAX GET XML PROCESSING INSTRUCTION.Summary-->El comando SAX GET XML PROCESSING INSTRUCTION devuelve el *nombre* y el *valor* de la instrucción de proceso XML analizada en el documento XML referenciada por *documento*.<!-- END REF--> Este comando debe llamarse con el evento XML Processing Instruction. Para mayor información sobre eventos SAX, consulte la descripción del comando [SAX Get XML node](sax-get-xml-node.md "SAX Get XML node").

#### Ejemplo 

Miremos el siguiente código XML: 

```XML
<?xml version="1.0" encoding="UTF-8"?>
<!-- Edited with XML Spy v3.0.7 NT (http://www.xmlspy.com) by Myself (4D SA)-->
<?PI TextProcess?>
<!DOCTYPE RootElement SYSTEM "ParseTest.dtd">
```

La siguiente instrucción devolverá “PI” en *vNom* y “TextProcess” en *vValor*: 

```4d
 SAX GET XML PROCESSING INSTRUCTION($DocRef;vNom;vValor)
```

#### Ver también 

[SAX ADD PROCESSING INSTRUCTION](sax-add-processing-instruction.md)  
[SAX Get XML node](sax-get-xml-node.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 875 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


