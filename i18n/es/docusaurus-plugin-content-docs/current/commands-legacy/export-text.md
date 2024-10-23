---
id: export-text
title: EXPORT TEXT
slug: /commands/export-text
displayed_sidebar: docs
---

<!--REF #_command_.EXPORT TEXT.Syntax-->**EXPORT TEXT** ( {*tabla* ;} *doc* )<!-- END REF-->
<!--REF #_command_.EXPORT TEXT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla desde la cual exportar datos o Tabla por defecto, si se omite |
| doc | Text | &#8594;  | Documento texto para recibir los datos |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.EXPORT TEXT.Summary-->El comando EXPORT TEXT escribe datos de los registros de la selección actual de la *tabla* en el proceso actual.<!-- END REF--> Los datos se escriben en *documento*, un documento de texto Windows o Macintosh en el disco.

La operación de exportación se efectúa por el formulario de salida actual. La operación de exportación escribe los campos y las variables basado en el orden de entrada del formulario de salida. Por esta razón, utilice un formulario de salida que sólo contenga los campos u objetos editables que quiera exportar. No ubique botones u otros objetos en el formulario de exportación. Los objetos de subformulario se ignoran.

Un evento On Load se envía al método del formulario por cada registro exportado. Utilice este evento para definir las variables que podría utilizar en el formulario de exportación. 

El parámetro *documento* puede dar nombre a un documento nuevo o existente. Si *documento* tiene el mismo nombre que un documento existente, el documento existente se sobrescribe. El *documento* puede incluir una ruta de acceso que contenga los nombres de los volúmenes y las carpetas. Si pasa una cadena vacía, aparece la caja de diálogo estándar de guardar archivos. Si el usuario cancela este diálogo, se cancela la operación de exportación, y la variable sistema OK toma el valor 0.

Un termómetro de progreso aparece durante la exportación. El usuario puede cancelar la operación haciendo clic en el botón Detener. Si la exportación termina con éxito, la variable sistema OK toma el valor 1\. En caso de error o si la operación se interrumpe, la variable OK toma el valor 0\. El termómetro puede ocultarse con el comando [MESSAGES OFF](messages-off.md). 

El comando utiliza por defecto el conjunto de caracteres UTF-8\. Puede utilizar el comando [USE CHARACTER SET](use-character-set.md) para modificar este conjunto de caracteres.

Durante la utilización de EXPORT TEXT, el delimitador de campos por defecto es el carácter de tabulación (code 9). El delimitador de registros por defecto es el retorno de carro (code 13) bajo OS X y el retorno de carro+retorno a la línea (código 13+código 10) bajo Windows. Puede cambiar estos valores por defecto asignando nuevos valores a las *Variables sistema*: **FldDelimit** y **RecDelimit**. El usuario puede cambiar los valores por defecto en la caja de diálogo de exportación del entorno Aplicación. Tenga en cuenta que si los campos exportados contienen caracteres definidos como delimitadores de campo o de registro, estos caracteres se reemplazan automáticamente con espacios en el archivo exportado, con el fin de no perturbar el proceso de importación.

#### Ejemplo 

Este ejemplo exporta datos a un documento texto. El método primero comienza por definir el formulario de salida se manera que los datos sean exportados por el formulario correcto, cambia los delimitadores, luego efectúa la exportación:

```4d
 FORM SET OUTPUT([Personas];"Exportar")
 FldDelimit:=27 // Definir carácter delimitador de campos: Escape
 RecDelimit:=10 // Definir carácter delimitador de registros: Line Feed
 EXPORT TEXT([Personas];"Nuevas_Personas.txt") // Exportación del documento "Nuevas_Personas.txt"
```

#### Variables y conjuntos del sistema 

OK toma el valor 1 si la exportación termina con éxito; de lo contrario, toma el valor 0.

#### Ver también 

[EXPORT DIF](export-dif.md)  
[EXPORT SYLK](export-sylk.md)  
[IMPORT TEXT](import-text.md)  
[USE CHARACTER SET](use-character-set.md)  