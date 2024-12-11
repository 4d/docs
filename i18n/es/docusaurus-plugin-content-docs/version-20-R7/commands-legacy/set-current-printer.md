---
id: set-current-printer
title: SET CURRENT PRINTER
slug: /commands/set-current-printer
displayed_sidebar: docs
---

<!--REF #_command_.SET CURRENT PRINTER.Syntax-->**SET CURRENT PRINTER** ( *nomImpr* )<!-- END REF-->
<!--REF #_command_.SET CURRENT PRINTER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomImpr | Text | &#8594;  | Nombre de la impresora a utilizar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET CURRENT PRINTER.Summary-->El comando **SET CURRENT PRINTER** designa la impresora a utilizar para imprimir con la aplicación 4D actual.<!-- END REF-->

Pase el nombre de la impresora a seleccionar en el parámetro *nomImpr*. Para obtener una lista de impresoras disponibles, utilice de antemano el comando [PRINTERS LIST](printers-list.md). Si pasa una cadena vacía en *nomImpr*, se utilizará la impresora actual definida en el sistema.

También puede designar la impresora PDF genérica automáticamente, independientemente de la plataforma, pasando la siguiente constante que se encuentra en el tema *Opciones de impresión*:

| Constante          | Valor              | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Generic PDF driver | \_4d\_pdf\_printer | **Nota:** esta funcionalidad no está disponible en las versiones 32 bits de 4D.<br/>En OS X, declara el driver predeterminado como impresora actual. Este driver no es visible y no está en la lista devuelta por el comando [PRINTERS LIST](printers-list.md). la ruta de acceso al documento PDF se debe definir utilizando el comando [SET PRINT OPTION](set-print-option.md), si no, se devuelve el error 3107.En Windows, declara el driver PDF de Windows (llamado "Microsoft Print to PDF") como impresora actual. Esta constante está disponible en Windows 10 únicamente, cuando está instalada la opción PDF. Con otras versiones de Windows, o cuando no hay ningún driver PDF disponible, el comando no hace nada y la variable *OK* toma el valor 0. |

El comando **SET CURRENT PRINTER** debe llamarse antes de [SET PRINT OPTION](set-print-option.md), de manera que las opciones disponibles correspondan a la impresora seleccionada. Por otra parte, **SET CURRENT PRINTER** debe llamarse después de *\_o\_PAGE SETUP*, de lo contrario los parámetros de la impresora se pierden.

Este comando puede utilizarse con los comandos [PRINT SELECTION](print-selection.md), [PRINT RECORD](print-record.md), [Print form](print-form.md) y [QR REPORT](qr-report.md), y se aplica a todas las impresiones de 4D, incluyendo en el modo Diseño.  
Los comandos de impresión deben llamarse obligatoriamente con el parámetro *\>* (donde sea pertinente) de manera que los parámetros especificados no se pierdan.

#### Variables y conjuntos del sistema 

Si la selección de impresora se lleva a cabo correctamente, la variable sistema OK toma el valor 1\. Si ocurre lo contrario (por ejemplo si no se encuentra la impresora designada), la variable sistema OK toma el valor 0 y la impresora actual permanece sin cambios. 

#### Ejemplo 

Creación de un documento PDF bajo Windows:

```4d
 var $pdfpath : Text
 $pdfpath:=System folder(Desktop)+"test.pdf"
 SET CURRENT PRINTER(Generic PDF driver)
 SET PRINT OPTION(Destination option;3;$pdfpath)
 ALL RECORDS([Table_1])
 PRINT SELECTION([Table_1];*)
 SET CURRENT PRINTER("")
```

#### Ver también 

[Get current printer](get-current-printer.md)  
[PRINTERS LIST](printers-list.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 787 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


