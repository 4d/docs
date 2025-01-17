---
id: web-legacy-close-session
title: WEB LEGACY CLOSE SESSION
slug: /commands/web-legacy-close-session
displayed_sidebar: docs
---

<!--REF #_command_.WEB LEGACY CLOSE SESSION.Syntax-->**WEB LEGACY CLOSE SESSION** ( *idSesion* )<!-- END REF-->
<!--REF #_command_.WEB LEGACY CLOSE SESSION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| idSesion | Text | &#8594;  | UUID de sesión |

<!-- END REF-->

#### Nota de compatibilidad 

<!--REF #_command_.WEB LEGACY CLOSE SESSION.Summary-->Este comando sólo puede utilizarse con **sesiones web heredadas**, disponibles en bases convertidas a partir de versiones anteriores a la 4D v18 R6\.<!-- END REF--> Se ignora cuando se habilita el modo **sesiones web escalables** (recomendado en 4D v18 R6 y superiores). Para más información, consulte la sección *Gestión de las sesiones web (heredado)*.

#### Descripción 

El comando **WEB LEGACY CLOSE SESSION** invalida la sesión existente designada por el parámetro *idSesion*. Si la sesión no existe, el comando no hace nada.  
  
Cuando este comando se llama desde un proceso web o desde cualquier otro proceso:

* la fecha de vencimiento de la cookie está definida en 0,
* el [Método base On Web Legacy Close Session](metodo-base-on-web-legacy-close-session.md) se llama, permitiéndole guardar la información de la sesión,
* las selecciones se borran, los registros se desbloquean y las variables se reinician.

Después de la ejecución de este comando, si un cliente web envía una petición con una cookie invalida, se abre una nueva sesión con una nueva cookie y se envía.

**Nota:** en el contexto de una sesión 4D Mobile, el comando **WEB LEGACY CLOSE SESSION** cierra la sesión 4D Mobile cuyo ID se pasa en el parámetro *ID* *sesion*. Como una sesión 4D Mobile puede gestionar varios procesos, este comando solicita a todos los procesos Web relacionados con la sesión para terminar su ejecución.

#### Ver también 

*Gestión de las sesiones web (heredado)*  
[Método base On Web Legacy Close Session](metodo-base-on-web-legacy-close-session.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1208 |
| Hilo seguro | &check; |


