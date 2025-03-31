---
id: display-record
title: DISPLAY RECORD
slug: /commands/display-record
displayed_sidebar: docs
---

<!--REF #_command_.DISPLAY RECORD.Syntax-->**DISPLAY RECORD** {( *tabla* )}<!-- END REF-->
<!--REF #_command_.DISPLAY RECORD.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla de la cual mostrar el registro actual o Tabla por defecto, si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DISPLAY RECORD.Summary-->El comando DISPLAY RECORD muestra el registro actual de *tabla*, utilizando el formulario de entrada actual.<!-- END REF--> El registro se muestra hasta que un evento provoque un rediseño de la ventana. Tal evento puede ser la ejecución de un comando [ADD RECORD](add-record.md "ADD RECORD"), el regreso al formulario de entrada, o a la barra de menús. DISPLAY RECORD no hace nada si no hay registro actual.

DISPLAY RECORD se utiliza con frecuencia para mostrar mensajes de progreso personalizados. También puede utilizarse para generar un presentación de diapositivas.

Si existe un método de formulario, se generará un evento On Load.

**Advertencia:** no llame DISPLAY RECORD desde un proceso de conexión Web, porque el comando será ejecutado en el equipo del servidor Web de 4D y no en el equipo del cliente del navegador Web.

#### Ejemplo 

El siguiente ejemplo muestra una serie de registros como una presentación de diapositivas:

```4d
 ALL RECORDS([Demo]) // Selección de todos los registros
 FORM SET INPUT([Demo];"Mostrar") // Designación del formulario a utilizar
 For($vlRecord;1;Records in selection([Demo])) // Bucle a través de todos los registros
    DISPLAY RECORD([Demo]) // Mostrar un registro
    DELAY PROCESS(Current process;180) // 3 segundos de pausa
    NEXT RECORD([Demo]) // Pasar al siguiente registro
 End for
```

#### Ver también 

[MESSAGE](message.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 105 |
| Hilo seguro | &cross; |


