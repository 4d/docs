---
id: open-security-center
title: OPEN SECURITY CENTER
slug: /commands/open-security-center
displayed_sidebar: docs
---

<!--REF #_command_.OPEN SECURITY CENTER.Syntax-->**OPEN SECURITY CENTER**<!-- END REF-->
<!--REF #_command_.OPEN SECURITY CENTER.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OPEN SECURITY CENTER.Summary-->El comando OPEN SECURITY CENTERmuestra la ventana del Centro de seguridad y mantenimiento (CSM).<!-- END REF-->Para más información, consulte la página *Centro de seguridad y mantenimiento*.   
  
Dependiendo de los privilegios de acceso del usuario actual, ciertas funciones disponibles en esta ventana podrían desactivarse.  

**Notas:** 

* Este comando funciona con el mismo principio que una llamada a [DIALOG](../commands/dialog.md) con el parámetro *\**: el CSM se muestra en una ventana y el comando devuelve inmediatamente el control al código 4D. Si el proceso actual termina, la ventana se cierra automáticamente mediante la simulación de un [CANCEL](cancel.md). Por lo que debe gestionar su visualización a través del código del proceso en ejecución.
* Este comando no se puede ejecutar en una aplicación 4D remota.

#### Ver también 

[VERIFY CURRENT DATA FILE](verify-current-data-file.md)  