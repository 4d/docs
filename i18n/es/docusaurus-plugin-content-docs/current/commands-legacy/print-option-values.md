---
id: print-option-values
title: PRINT OPTION VALUES
slug: /commands/print-option-values
displayed_sidebar: docs
---

<!--REF #_command_.PRINT OPTION VALUES.Syntax-->**PRINT OPTION VALUES** ( *opcion* ; *arrayNoms* {; *info1Array* {; *info2Array*}} )<!-- END REF-->
<!--REF #_command_.PRINT OPTION VALUES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| opcion | Integer | &#8594;  | Número de opción |
| arrayNoms | Text array | &#8592; | Nombres de los valores |
| info1Array | Integer array | &#8592; | Valores (1) de la opción |
| info2Array | Integer array | &#8592; | Valores (2) de la opción |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.PRINT OPTION VALUES.Summary-->El comando **PRINT OPTION VALUES** devuelve en *arrayNoms* una lista de nombres disponibles para la *opcion* de impresión definida.<!-- END REF--> Opcionalmente, puede recuperar la información adicional para cada nombre en *info1Array* y *info2Array*. 

**Nota:** el comando **PRINT OPTION VALUES** sólo funciona con impresoras PostScript.

El parámetro *opcion* le permite especificar los valores a obtener. Debe pasar una de las siguientes constantes del tema “*Opciones de impresión*”:

* Paper option
* Paper source option

***option* \= Paper option (1)**

Si pasa Paper option en el parámetro *opcion*, el comando devolverá la siguiente información:

* en *nomsArray*, los nombres de los formatos de papel disponibles;
* en *info1Array*, las alturas de cada formato de papel;
* en *info2Array*, los largos de cada formato de papel.

**Nota:** para obtener esta información, el driver de impresión debe tener acceso a un archivo (PostScript Printer Description) válido de la impresora.

Para aplicar un formato de papel específico utilizando el comando [SET PRINT OPTION](set-print-option.md), puede pasar uno de los valores de *nomsArray*, los valores correspondientes de *info1Array* e *info2Array*.

***option* \= Paper source option (5)**

**Nota:** esta opción sólo puede ser utilizada en Windows.

Si pasa Paper source option en el parámetro *opcion*, el comando devuelve los nombres de las diferentes bandejas disponibles en *nomsArray* y sus números Windows ID internos en *info1Array* (*info2Array* permanece vacío). El orden de los valores en los arrays está definido por el driver de impresión. Para indicar una bandeja utilizando el comando [SET PRINT OPTION](set-print-option.md), debe pasar el índice del elemento que desea en el array *nomsArray* o *info1Array*.

Para mayor información sobre las diferentes opciones de impresión, consulte la descripción de los comandos [SET PRINT OPTION](set-print-option.md) y [GET PRINT OPTION](get-print-option.md).

Toda la información devuelta por estos comandos es suministrada por el sistema operativo. Consulte la documentación de su sistema para más detalles sobre opciones específicas.

#### Ver también 

[GET PRINT OPTION](get-print-option.md)  
[SET PRINT OPTION](set-print-option.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 785 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


