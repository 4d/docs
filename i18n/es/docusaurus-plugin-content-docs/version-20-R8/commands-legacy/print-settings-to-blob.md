---
id: print-settings-to-blob
title: Print settings to BLOB
slug: /commands/print-settings-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.Print settings to BLOB.Syntax-->**Print settings to BLOB** ( *confImp* ) : Integer<!-- END REF-->
<!--REF #_command_.Print settings to BLOB.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| confImp | Blob | &#8592; | Configuración de impresión actual |
| Resultado | Integer | &#8592; | Código de estado: 1=Operación exitosa, 0=Sin impresora actual |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Print settings to BLOB.Summary-->El comando **Print settings to BLOB** guarda los ajustes de impresión 4D actuales en el BLOB *confImp*.<!-- END REF--> El parámetro *confImp* almacena todos los valores utilizados para la impresión:

* Parámetros de diseño tales como papel, orientación, escala...
* Parámetros de impresión tales como el número de copias, fuente del papel...

Este comando debe ser usado en conjunto con el comando [BLOB to print settings](blob-to-print-settings.md). Estos comandos le permiten guardar la configuración de impresión actual del usuario y recargarla después para que los usuarios no tengan que especificar sus parámetros cada vez que inician un trabajo de impresión. Además, permite mantener la configuración de la impresora "privada" (específica para el controlador de la impresora) no disponible como parámetros de impresión estándar. 

El BLOB generado no debe ser modificado por programación; sólo puede ser utilizado por el comando [BLOB to print settings](blob-to-print-settings.md).

El comando devuelve 1 si el BLOB se ha generado correctamente y 0 si no se selecciona ninguna impresora actual.

##### Windows / OS X 

El BLOB *confImp* se puede guardar y leer en ambas plataformas. Sin embargo, incluso si algunos ajustes de impresión son comunes, algunos otros son específicos de la plataforma y dependen de los controladores y las versiones de sistema. Si el mismo BLOB *confImp* se comparte entre ambas plataformas, es posible que pierda partes de información.  
Cuando se utiliza en un entorno heterogéneos, con el fin de restaurar la máxima configuración disponible para cada plataforma (y no sólo la parte común), se recomienda que maneje dos BLOBs *confImp*, uno para cada plataforma.

#### Ejemplo 

Usted desea almacenar la configuración de impresión actual en el disco:

```4d
 var curSettings : Blob
 PRINT SETTINGS //muestra el diálogo de configuración de impresión al usuario
 If(OK=1)
    $err:=Print settings to BLOB(curSettings)
    If($err=1)
       BLOB TO DOCUMENT(Get 4D folder+"current4Dsettings.blob";curSettings)
    Else
       ALERT("No hay ninguna impresora seleccionada")
    End if
 End if
```

#### Ver también 

  
[BLOB to print settings](blob-to-print-settings.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1433 |
| Hilo seguro | &cross; |


