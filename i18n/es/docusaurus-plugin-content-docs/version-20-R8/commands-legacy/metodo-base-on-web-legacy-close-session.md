---
id: metodo-base-on-web-legacy-close-session
title: Metodo base On Web Legacy Close Session
slug: /commands/metodo-base-on-web-legacy-close-session
displayed_sidebar: docs
---

<!--REF #_command_.Metodo base On Web Legacy Close Session.Syntax-->**Método base On Web Legacy Close Session**<!-- END REF-->
<!--REF #_command_.Metodo base On Web Legacy Close Session.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### Nota de compatibilidad 

<!--REF #_command_.Metodo base On Web Legacy Close Session.Summary-->Este método base de datos sólo puede utilizarse con **sesiones web heredadas**, disponibles en bases de datos convertidas a partir de versiones anteriores a la 4D v18 R6\.<!-- END REF--> Nunca se llama cuando se habilita el modo de **sesiones web escalables** (recomendado en 4D v18 R6 y superiores). Para obtener más información, consulte la sección *Gestión de las sesiones web (heredado)*.

#### 

El **Método base On Web Legacy Close Session** es llamado por el servidor web de 4D cada vez que una sesión web se va a cerrar. Una sesión puede ser cerrarse en los siguientes casos:

* cuando se alcanza el número máximo de sesiones simultáneas (100 por defecto, modificable utilizando el comando [WEB SET OPTION](web-set-option.md)), y 4D necesita crear nuevas (4D automáticamente destruye el proceso de la sesión inactiva más antigua),
* cuando se alcanza el periodo máximo de inactividad del proceso de la sesión (480 minutos por defecto, modificable vía el comando [WEB SET OPTION](web-set-option.md)),
* cuando se llama al comando [WEB LEGACY CLOSE SESSION](web-legacy-close-session.md).

Cuando se llama a este método base, el contexto de la sesión (variables y selecciones generadas por el usuario) es aún valido. Esto significa que puede guardar los datos relativos a la sesión para poder usarlos posteriormente, más específicamente utilizando [QR SET DESTINATION](qr-set-destination.md).

**Nota:** en el contexto de una sesión 4D Mobile (que puede generar varios procesos), el **Método base On Web Legacy Close Session** se llama para cada proceso web cerrado, lo que permite guardar todo tipo de datos (variables, selección, etc.) generados por el proceso de sesión 4D Mobile.  
  
Un ejemplo de uso del **Método base On Web Legacy Close Session** se presenta en la sección *Gestión de las sesiones web (heredado)*.  

#### Ver también 

*Gestión de las sesiones web (heredado)*  
[WEB LEGACY CLOSE SESSION](web-legacy-close-session.md)  