---
id: blob-to-print-settings
title: BLOB to print settings
slug: /commands/blob-to-print-settings
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to print settings.Syntax-->**BLOB to print settings** ( *confImpr* {; *params*} ) : Integer<!-- END REF-->
<!--REF #_command_.BLOB to print settings.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| confImpr | Blob | &#8594;  | BLOB que contiene la configuración de impresión |
| params | Integer | &#8594;  | 0=Restaura valores guardados para el número de copias y rango de páginas, 1=Restablece los valores predeterminados |
| Resultado | Integer | &#8592; | Código de estado: 1=operación exitosa, 0=no hay impresora actual, -1=parámetros incorrectos, 2=impresora modificada |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.BLOB to print settings.Summary-->El comando **BLOB to print settings** reemplaza los parámetros de impresión actuales de 4D por los parámetros almacenados en el BLOB *confImpr*.<!-- END REF--> Este BLOB debe haber sido generado por el comando [Print settings to BLOB](print-settings-to-blob.md) o por el comando 4D Pack  4D Pack (ver abajo).

El parámetro *params* le permite definir cómo manejar los parámetros básicos para el "número de copias" y el "intervalo de impresión":

* Si pasa 0 u omite este parámetro, los valores almacenados en el BLOB se utilizan para la impresión.
* Si pasa 1, los valores se restablecen a los valores predeterminados: el número de copias se establece en 1 y el intervalo de páginas se establece en "todas las páginas".

Los parámetros se aplican a los [parámetros actuales de impresión 4D](https://developer.4d.com/docs/settings/compatibility/) siempre y cuando ningún comando como *\_o\_PAGE SETUP*, [SET PRINT OPTION](set-print-option.md) o [PRINT SELECTION](print-selection.md) sin el parámetro > los modifique. Los parámetros definidos se utiliza particularmente para los comandos [PRINT SELECTION](print-selection.md), [PRINT LABEL](print-label.md), [PRINT RECORD](print-record.md), [Print form](print-form.md) y [QR REPORT](qr-report.md), así como también para los comandos de impresión en los menú de 4D, incluyendo los del entorno Diseño.

Los comandos [PRINT SELECTION](print-selection.md), [PRINT LABEL](print-label.md) y [PRINT RECORD](print-record.md) deben ser llamados con el parámetro *\>* (si aplica) para que los parámetros definidos por **BLOB to print settings** se mantengan.

El comando devuelve uno de los siguientes códigos de estado:

* \-1: el BLOB es incorrecto,
* 0: ninguna impresora actual está seleccionada (en este caso, el comando no hace nada),
* 1: el BLOB se ha cargado correctamente,
* 2: el BLOB se ha cargado correctamente, pero el nombre de la impresora actual ha cambiado(\*)  
**Nota:** Code (2) siempre se devuelve si el BLOB fue creado por el comando 4D Pack , incluso si el nombre de la impresora no cambió, ya que esta información no se incluyó en los BLOBs 4D Pack.

(\*) Los parámetros dependen de la impresora actual seleccionada en el momento en que el BLOB se guardó. La aplicación de estos valores en otra impresora es soportada si ambas impresoras son del mismo modelo. Si las impresoras son diferentes, se restaurarán sólo los parámetros comunes.

##### Windows / OS X 

El BLOB *confImp* se puede guardar y leer en ambas plataformas. Sin embargo, incluso si ciertos parámetros de impresión son comunes, algunos otros son específicos de la plataforma y dependen de los controladores de impresión y de las versiones del sistema operativo. Si el mismo BLOB *confImp* se comparte entre ambas plataformas, es posible que pierda partes de información.

Cuando se utiliza en un entorno heterogéneo, con el fin de restaurar el máximo de parámetros de impresión disponibles para cada plataforma (y no sólo la parte común), se recomienda que maneje dos BLOBs *confImp*, uno para cada plataforma.

##### Compatibilidad con los comandos 4D Pack 

Los BLOBs de parámetros de impresión generados con el comando 4D Pack \[#cmd id="61955"/\] pueden ser cargados y utilizados por el comando **BLOB to print settings**. Tenga en cuenta sin embargo, que si son guardados con \[#cmd id="1433"/\], se convierten y no se abrirán más con . El comando **BLOB to print settings** permite almacenar más información que el comando . 

#### Ejemplo 

Usted desea aplicar la configuración de impresión guardada en el disco para el contexto de impresión 4D actual: 

```4d
 var curSettings : Blob
 DOCUMENT TO BLOB(Get 4D folder(Active 4D Folder)+"current4Dsettings.blob";curSettings)
  //current4Dsettings ha sido creado por Print settings to BLOB
 $err:=BLOB to print settings(curSettings;0)
 Case of
    :($err=1)
  //todo está OK
    :($err=2)
       CONFIRM("¡La impresora ha cambiado!\n\n¿Revisar los parámetros de impresión?")
       If(OK=1)
          PRINT SETTINGS
       End if
    :($err=0)
       ALERT("No hay impresora actual.")
    :($err=-1)
       ALERT("Archivo de configuración no valido.")
 End case
```

#### Ver también 

[Print settings to BLOB](print-settings-to-blob.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1434 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


