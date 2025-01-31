---
id: sax-add-processing-instruction
title: SAX ADD PROCESSING INSTRUCTION
slug: /commands/sax-add-processing-instruction
displayed_sidebar: docs
---

<!--REF #_command_.SAX ADD PROCESSING INSTRUCTION.Syntax-->**SAX ADD PROCESSING INSTRUCTION** ( *documento* ; *instruccion* )<!-- END REF-->
<!--REF #_command_.SAX ADD PROCESSING INSTRUCTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referencia del documento abierto |
| instruccion | Text | &#8594;  | Instrucción a insertar en el documento |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SAX ADD PROCESSING INSTRUCTION.Summary-->El comando SAX ADD PROCESSING INSTRUCTION añade en el documento XML referenciado por *documento*, una *instruccion* de procesamiento XML.<!-- END REF--> 

Una instrucción de procesamiento le permite indicar el tipo de aplicación y cuando sea necesario los parámetros adicionales que le permiten procesar una entidad externa no analizable. 

El comando da formato a los datos de la instrucción conforme con XML. Sin embargo, las instrucciones misma no son analizadas y depende del desarrollador asegúrarse de que sean válidas. 

#### Ejemplo 

El siguiente código: 

```4d
 vtInstruccion:="xml-stylesheet type="+Char(Quotes)+"text/xsl"+Char(Quotes)+
 "href="+Char(Quotes)+"style.xsl"+Char(Quotes)
 SAX ADD PROCESSING INSTRUCTION($DocRef;vtInstruccion)
```

... escribirá la siguiente línea en el documento: 

```4d
 
```

#### Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. De lo contrario toma el valor 0 y se genera un error.

#### Ver también 

[SAX GET XML PROCESSING INSTRUCTION](sax-get-xml-processing-instruction.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 857 |
| Hilo seguro | &check; |
| Modifica variables | OK |


