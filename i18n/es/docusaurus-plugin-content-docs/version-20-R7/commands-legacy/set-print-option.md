---
id: set-print-option
title: SET PRINT OPTION
slug: /commands/set-print-option
displayed_sidebar: docs
---

<!--REF #_command_.SET PRINT OPTION.Syntax-->**SET PRINT OPTION** ( *opcion* ; *valor1* {; *valor2*} )<!-- END REF-->
<!--REF #_command_.SET PRINT OPTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| opcion | Integer | &#8594;  | Número de opción |
| valor1 | Integer, Text | &#8594;  | Valor 1 de la opción |
| valor2 | Integer, Text | &#8594;  | Valor 2 de la opción |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET PRINT OPTION.Summary-->El comando **SET PRINT OPTION** se utiliza para modificar por programación el valor de una opción de impresión.<!-- END REF--> Cada opción definida utilizando este comando se aplica a los [parámetros de impresión actuales 4D](https://developer.4d.com/docs/settings/compatibility/) siempre que no se llame otro comando que modifique los parámetros de impresión ([PRINT SETTINGS](print-settings.md), [PRINT SELECTION](print-selection.md) sin el parámetro *\>* parámetro, etc.). Si se ha abierto un trabajo de impresión (por ejemplo con [OPEN PRINTING JOB](open-printing-job.md)), la opción se define para el trabajo y no puede modificarse mientras el trabajo no haya finalizado (excepto para Orientation option, ver más adelante).

##### opciones y valores 

El parámetro *opcion* le permite indicar la opción a modificar. Puede pasar una de las constantes predefinidas del tema *Opciones de impresión*, o un código de opción PDF (utilizable con el driver PDFCreator bajo Windows únicamente).   
Pase en los parámetros *valor1* y *valor2* (opcionalmente) los nuevos valores de la *opcion* especificada. El número y naturaleza de los valores pasados depende del tipo de opción especificada.

| Constante                    | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Paper option                 | 1     | Si sólo utiliza *valor1*, que contiene el nombre del papel. Si se utilizan los dos parámetros, *valor1* contiene el ancho del papel y *valor2* contiene el alto del papel. El ancho y el alto se expresan en píxeles de pantalla. Utilice el comando [PRINT OPTION VALUES](print-option-values.md) para obtener el nombre, el alto y el ancho de todos los formatos de papel que ofrece la impresora.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Orientation option           | 2     | *valor1* únicamente: 1=Retrato, 2=Paisaje. Si se utiliza una opción de orientación diferente, [GET PRINT OPTION](get-print-option.md)devuelve 0 en *valor1*.<br/>**Versiones 64 bits**: esta opción se puede llamar desde una tarea de impresión, lo que significa que puede cambiar de vertical a horizontal, o viceversa, durante el mismo trabajo de impresión.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Scale option                 | 3     | *valor1* únicamente: valor de la escala en porcentaje. Tenga cuidado, algunas impresoras no permiten modificar la escala. Si pasa un valor no válido, la propiedad se reinicia al 100% en el momento de la impresión.<br/><br/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Number of copies option      | 4     | *valor1* únicamente: número de copias a imprimir.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Paper source option          | 5     | (Windows únicamente) *valor1* únicamente: número correspondiente al índice, en el array de bandejas devuelto por el comando [PRINT OPTION VALUES](print-option-values.md), de la bandeja de papel a utilizar. Esta opción sólo se puede utilizar en Windows.<br/><br/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Destination option           | 9     | *valor1*: código que indica el tipo de destino de la impresión: 1=Impresora, 2=Archivo (PS en Mac), 3=Archivo PDF, 5=Pantalla (opción del driver OS X).<br/>Si *valor1* es diferente de 1 o 5, *valor2* contiene un nombre de ruta para el documento resultante. Esta ruta se utilizará hasta que se especifique otra ruta. Si un archivo con el mismo nombre ya existe en el lugar de destino, será sustituido. Con [GET PRINT OPTION](get-print-option.md), si el valor actual no está en la lista predefinida, *valor1* contiene -1 y la variable sistema OK toma el valor 1\. Si ocurre un error, *valor1* y la variable sistema OK toman el valor 0\. <br/>**Nota (Windows)**: para imprimir PDF en Windows, debe llamar a [SET CURRENT PRINTER](set-current-printer.md)(Generic PDF driver) y definir el destino de la impresión en 2 (Archivo) o 3 (Archivo PDF). El ajuste 3 le permite escribir un código multiplataforma.  |
| Double sided option          | 11    | *valor1*: 0=Un solo lado o estándar, 1=Doble cara. Si *valor1=*1, *valor2* contiene la unión: 0=Izquierda (valor predeterminado), 1=Unión superior.<br/>**Nota**: esta opción sólo se puede utilizar en Windows.<br/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Spooler document name option | 12    | *valor1* únicamente: nombre del documento de impresión actual, que aparece en la lista de documentos de la cola de impresión. El nombre definido para esta instrucción se utilizará para todos los documentos de impresión de la sesión hasta que un nuevo nombre o una cadena vacía no se pase. Para utilizar o restablecer el funcionamiento normal (usando el nombre del método en el caso de un método, el nombre de la tabla para un registro, etc.), pase una cadena vacía en *valor1*.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Page range option            | 15    | *valor1*\=primera página a imprimir (valor por defecto 1) y (opcional) *valor2*\=número de la última página a imprimir (valor por defecto -1 = fin del documento).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Legacy printing layer option | 16    | (Windows únicamente) *valor1* únicamente: 1=seleccionar la antigua capa de impresión GDI para todos los trabajos de impresión subsiguientes. 0=seleccionar la capa de impresión D2D (por defecto). Este selector está destinado principalmente para permitir plug-ins de antigua generación imprimir dentro de tareas de impresión 4D en aplicaciones 4D en Windows.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Print preview option         | 18    | (sólo Windows) *valor1*: formato a utilizar para las vistas previas de impresión en Windows. Valores disponibles: kp preview automatic (por defecto): utiliza la impresora y el visor XPS si están disponibles, en caso contrario utiliza la impresora y el visor PDF si están disponibles, en caso contrario generar un error. kp preview XPS: utiliza la impresora y el visor XPS si están disponibles, en caso contrario generar un error. kp preview PDF: utiliza la impresora y el visor PDF si están disponibles; de lo contrario, se generará un error. *valor2* (sólo se puede utilizar con [GET PRINT OPTION](get-print-option.md)): formato de vista previa de impresión utilizado realmente en Windows (puede diferir del *valor1* dependiendo de la configuración). Valores disponibles: kp preview none: ningún formato disponible. kp preview XPS: impresora y visor XPS utilizados. kp preview PDF: impresora y visor PDF utilizados. |

Una vez fijado utilizando este comando, una opción de impresión se conservará durante toda la sesión para toda la aplicación 4D. Será utilizada por los comandos [PRINT SELECTION](print-selection.md), [PRINT RECORD](print-record.md), [Print form](print-form.md) y [QR REPORT](qr-report.md) y [WP PRINT](../WritePro/commands-legacy/wp-print.md), así como también para todas las impresiones 4D, incluyendo en modo Diseño.

**Notas:**

* Es indispensable utilizar el parámetro opcional *\>* con los comandos [PRINT SELECTION](print-selection.md), [PRINT RECORD](print-record.md) y [PAGE BREAK](page-break.md) para evitar reinicializar las opciones de impresión que fueron definidas utilizando el comando **SET PRINT OPTION**.
* El comando **SET PRINT OPTION** sólo opera con impresoras PostScript. Puede utilizar este comando con otros tipos de impresoras, tales como PCL o tinta, pero en este caso, es posible que algunas opciones no estén disponibles.

#### Ejemplo 

El valor de Orientation option puede modificarse en el mismo trabajo de impresión. Note que la opción debe haberse definido antes del comando [PAGE BREAK](page-break.md):

```4d
 ALL RECORDS([People])
 PRINT SETTINGS
 If(OK=1)
    OPEN PRINTING JOB
    SET PRINT OPTION(Orientation option;1) //portrait
    Print form([People];"Vertical_Form")
 
    SET PRINT OPTION(Orientation option;2) //landscape
    PAGE BREAK //must be called imperatively AFTER the option
    Print form([People];"Horiz_Form")
    CLOSE PRINTING JOB
 End if
```

#### Variables y conjuntos del sistema 

La variable sistema OK toma el valor 1 si el comando ha sido ejecutado correctamente; de lo contrario, toma el valor 0.

#### Gestión de errores 

Si el valor pasado por una *opción* es incorrecto o si no está disponible en la impresora, el comando devuelve un error (que puede interceptar utilizando un método de gestión de errores instalado por el comando [ON ERR CALL](on-err-call.md "ON ERR CALL")) y el valor actual de la opción permanece sin cambios. 

#### Ver también 

[GET PRINT OPTION](get-print-option.md)  
*Opciones de impresión*  
[Print form](print-form.md)  
[PRINT OPTION VALUES](print-option-values.md)  
[SET CURRENT PRINTER](set-current-printer.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 733 |
| Hilo seguro | &check; |
| Modifica variables | OK, error |
| Prohibido en el servidor ||


