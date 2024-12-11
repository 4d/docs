---
id: create-data-file
title: CREATE DATA FILE
slug: /commands/create-data-file
displayed_sidebar: docs
---

<!--REF #_command_.CREATE DATA FILE.Syntax-->**CREATE DATA FILE** ( *rutaAcceso* )<!-- END REF-->
<!--REF #_command_.CREATE DATA FILE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rutaAcceso | Text | &#8594;  | Nombre o ruta de acceso completa del archivo de datos a abrir |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.CREATE DATA FILE.Summary-->El comando **CREATE DATA FILE** permite crear un nuevo archivo de datos en disco y reemplazar rápidamente el archivo de datos abierto por la aplicación 4D.<!-- END REF--> 

El funcionamiento general de este comando es idéntico al del comando [OPEN DATA FILE](open-data-file.md); la única diferencia es que el nuevo archivo de datos designado por el parámetro *rutaAcceso* se crea justo después de que se abre nuevamente la estructura.

Antes de lanzar la operación, el comando verifica que la ruta de acceso no corresponda a un archivo existente.

**4D Server:** a partir de 4D v13, este comando puede ejecutarse con 4D Server. En este contexto, efectúa una llamada interna a [QUIT 4D](quit-4d.md) en el servidor (lo que produce la aparición de una caja de diálogo en cada equipo remoto, indicando que el servidor está en proceso de salir) antes de la creación del archivo designado. 

#### Ver también 

[OPEN DATA FILE](open-data-file.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 313 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


