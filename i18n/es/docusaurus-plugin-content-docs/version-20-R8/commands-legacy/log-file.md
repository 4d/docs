---
id: log-file
title: Log File
slug: /commands/log-file
displayed_sidebar: docs
---

<!--REF #_command_.Log File.Syntax-->**Log File**  : Text<!-- END REF-->
<!--REF #_command_.Log File.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Nombre completo del archivo historial de la base |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Log File.Summary-->El comando Log File devuelve el nombre largo (es decir la ruta de acceso completa del archivo, incluyendo su nombre) del archivo historial actual de la base abierta.<!-- END REF--> 

Si la base funciona sin un archivo historial, el comando devuelve una cadena vacía y la variable sistema OK toma el valor 0\. 

Si la base funciona con un archivo historial, la variable sistema OK toma el valor 1\. La ruta de acceso devuelta por el comando se expresa con la sintaxis de la plataforma actual.

**Advertencia:** si ejecuta este comando desde un equipo 4D Client, sólo devuelve el nombre del archivo historial, no el nombre largo. 

#### Variables y conjuntos del sistema 

* Si la base funciona sin archivo de historial, la variable sistema OK toma el valor 0; de lo contrario, toma el valor 1.
* Si por alguna razón el archivo de historial se vuelve inaccesible durante la sesión de trabajo, se genera el error 1274 y 4D Server no permitirá a los usuarios modificar o escribir datos. Cuando el archivo de historial se vuelve accesible de nuevo, es necesario hacer un backup.

#### Ver también 

[SELECT LOG FILE](select-log-file.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 928 |
| Hilo seguro | &check; |
| Modifica variables | OK |


