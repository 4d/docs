---
id: printers-list
title: PRINTERS LIST
slug: /commands/printers-list
displayed_sidebar: docs
---

<!--REF #_command_.PRINTERS LIST.Syntax-->**PRINTERS LIST** ( *arrayNoms* {; *arrayNomsAlt* {; *arrayModelos*}} )<!-- END REF-->
<!--REF #_command_.PRINTERS LIST.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| arrayNoms | Text array | &#8592; | Nombres de las impresoras |
| arrayNomsAlt | Text array | &#8592; | Windows: Ubicación de las impresoras macOS: Nombres personalizados de las impresoras |
| arrayModelos | Text array | &#8592; | Modelos de impresoras |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.PRINTERS LIST.Summary-->El comando **PRINTERS LIST** llena el (los) array(s) pasados como parámetro(s) con los nombres y opcionalmente con la ubicación o nombres personalizados y los modelos de impresión disponibles para el equipo.<!-- END REF-->

**Nota:** si las impresoras se manejan utilizando un servidor de impresión (spooler), se devuelve la ruta de acceso completa (bajo Windows) o el nombre del spooler (bajo macOS).

Pase en el parámetro *arrayNoms* el nombre de un array de texto. Después de la ejecución del comando, este array contendrá los nombres de las impresoras disponibles. Bajo macOS, este será el “sistema” fijo de nombres.

Puede pasar un segundo array opcional, *arrayNomsAlt*. El contenido de este array dependerá de la plataforma:

* Bajo Windows, para cada impresora, usted obtiene su ubicación en red (o puerto local).
* Bajo macOS, para cada impresora, usted obtiene su nombre personalizado, el cual puede se modificado por el usuario. Este nombre puede utilizarse, por ejemplo, en cajas de diálogos.

El parámetro opcional *arrayModelos* permite recuperar el modelo de cada impresora.

Utilice los comandos [SET CURRENT PRINTER](set-current-printer.md) y [Get current printer](get-current-printer.md) para modificar u obtener la impresora seleccionada en 4D. Debe pasar los nombres devueltos en el primer array (*arrayNoms*).

Bajo Windows, el nombre de una impresora puede ser modificado manualmente al nivel del sistema de operación. Por otra parte, su ubicación y su modelo están asociados a sus características físicas. Por lo tanto, puede utilizar los valores de array opcionales para verificar las características de la impresora seleccionada, generalmente, puede verificar que todos los equipos de los clientes utilizan la misma impresora.

Bajo macOS, esta verificación puede llevarse a cabo utilizando el nombre de la impresora (nombre del servidor de impresión), que es el mismo para cada equipo que está conectado.

#### Variables y conjuntos del sistema 

La variable sistema OK toma el valor 1 si el comando ha sido ejecutado correctamente; de lo contrario, toma el valor 0 y los arrays se devuelven vacíos. 

#### Ver también 

[Get current printer](get-current-printer.md)  
[SET CURRENT PRINTER](set-current-printer.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 789 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


