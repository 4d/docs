---
id: wa-open-url
title: WA OPEN URL
slug: /commands/wa-open-url
displayed_sidebar: docs
---

<!--REF #_command_.WA OPEN URL.Syntax-->**WA OPEN URL** ( {* ;} *objeto* ; *url* )<!-- END REF-->
<!--REF #_command_.WA OPEN URL.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o Variable (si * se omite) |
| url | Text | &#8594;  | URL a cargar en el área Web |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WA OPEN URL.Summary-->El comando **WA OPEN URL** carga en el área web designada por los parámetros *\** y *objeto* el URL pasado en el parámetro *url*.<!-- END REF-->

Si se pasa una cadena vacía en *url*, el comando WA OPEN URL no hace nada y no se genera ningún error. Para cargar una página vacía en el área web, pase la cadena "about:blank" en *url*.

Como el comando [OPEN URL](open-url.md), **WA OPEN URL** acepta varios tipos de sintaxis en el parámetro *url* para designar los archivos:

* sintaxis posix: "file:///c:/Mi%20Archivo"
* sintaxis sistema: "c:\\MiCarpeta\\MiArchivo" (Windows) o "MiDisco:MiCarpeta:MiArchivo" (Mac OS).

**Nota:** por compatibilidad, la sintaxis "file://" (uso de dos "/") se acepta en 4D pero no cumple con el RFC. Recomendamos utilizar la sintaxis "file:///" (con tres "/") que cumple con el RFC.

En Mac OS, cuando FileVault está activo, debe utilizar la sintaxis Posix. Puede transformar las rutas del sistema utilizando el comando [Convert path system to POSIX](convert-path-system-to-posix.md).

Este comando tiene el mismo efecto que la modificación del valor de la variable "URL" asociada al área. Por ejemplo, si la variable del área se llama MiWArea\_url:

```4d
 MyWArea_url:="http://www.4d.com/"
```

Es equivalente a:

```4d
 WA OPEN URL(MyWArea;"http://www.4d.com/")
```

#### Ver también 

[OPEN URL](open-url.md)  
[WA OPEN BACK URL](wa-open-back-url.md)  
[WA OPEN FORWARD URL](wa-open-forward-url.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1020 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


