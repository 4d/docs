---
id: export-sylk
title: EXPORT SYLK
slug: /commands/export-sylk
displayed_sidebar: docs
---

<!--REF #_command_.EXPORT SYLK.Syntax-->**EXPORT SYLK** ( {*tabla* ;} *doc* )<!-- END REF-->
<!--REF #_command_.EXPORT SYLK.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla de la cual exportar datos, o Tabla por defecto, si se omite |
| doc | Text | &#8594;  | Documento SYLK para recibir los datos |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.EXPORT SYLK.Summary-->El comando **EXPORT SYLK** escribe los datos de los registros de la selección actual de *tabla* en el proceso actual.<!-- END REF--> Los datos se escriben en *documento*, un documento Sylk Windows o Macintosh, en el disco.

La operación de exportación se efectúa por el formulario de salida actual. La operación de exportación escribe los campos y las variables basado en el orden de entrada del formulario de salida. Por esta razón, utilice un formulario de salida que sólo contenga los campos u objetos editables que quiera exportar. No ubique botones u otros objetos en el formulario de exportación. Los objetos de subformulario se ignoran.

Un evento On Load se envía al método del formulario por cada registro exportado. Utilice este evento para definir las variables que podría utilizar en el formulario de exportación. 

El parámetro *documento* puede dar nombre a un documento nuevo o existente. Si *documento* tiene el mismo nombre que un documento existente, el documento existente se sobrescribe. El *documento* puede incluir una ruta de acceso que contenga los nombres de los volúmenes y las carpetas. Si pasa una cadena vacía, aparece la caja de diálogo estándar de guardar archivos. Si el usuario cancela este diálogo, se cancela la operación de exportación, y la variable sistema OK toma el valor 0.

Un termómetro de progreso aparece durante la exportación. El usuario puede cancelar la operación haciendo clic en el botón Detener. Si la exportación termina con éxito, la variable sistema OK toma el valor 1\. En caso de error o si la operación se interrumpe, la variable OK toma el valor 0\. El termómetro puede ocultarse con el comando [MESSAGES OFF](messages-off.md). 

El comando utiliza por defecto el conjunto de caracteres UTF-8\. Los documentos en formato SYLK utilizan por lo general el conjunto de caracteres ISO-8859-1, puede utilizar el comando [USE CHARACTER SET](use-character-set.md) para especificar el conjunto de caracteres apropiado.

Durante la utilización de **EXPORT SYLK**, el delimitador de campos por defecto es el carácter de tabulación (código 9). El delimitador del registro por defecto es el retorno de carro (código 13) en OS X y el retorno de carro+retorno a la línea (código 13 + código 10) bajo Windows. Puede modificar estos valores asignando nuevos valores a las dos *Variables sistema* *FldDelimit* y *RecDelimit*. El usuario puede cambiar estos valores en la caja de diálogo de exportación del entorno Diseño. Tenga en cuenta que si los campos exportados contienen caracteres definidos como delimitadores de campos o de registros, estos caracteres se reemplazan automáticamente con espacios en el archivo exportado, con el fin de no perturbar el proceso de importación.

#### Ejemplo 

El siguiente ejemplo exporta datos a un documento SYLK. El método primero define el formulario de salida de manera que los datos se exporten por el formulario correcto, luego efectúa la exportación:

```4d
 FORM SET OUTPUT([Personas];"Exportar")
 EXPORT SYLK([Personas];"Nuevas _Personas.slk") // Exporta al documento "Nuevas_Personas.slk"
```

#### Variables y conjuntos del sistema 

OK toma el valor 1 si la exportación termina con éxito; de lo contrario, toma el valor 0.

#### Ver también 

[EXPORT DIF](export-dif.md)  
[EXPORT TEXT](export-text.md)  
[IMPORT SYLK](import-sylk.md)  
[USE CHARACTER SET](use-character-set.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 85 |
| Hilo seguro | &cross; |
| Modifica variables | OK |


