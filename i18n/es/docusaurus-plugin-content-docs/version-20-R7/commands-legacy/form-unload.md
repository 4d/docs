---
id: form-unload
title: FORM UNLOAD
slug: /commands/form-unload
displayed_sidebar: docs
---

<!--REF #_command_.FORM UNLOAD.Syntax-->**FORM UNLOAD**<!-- END REF-->
<!--REF #_command_.FORM UNLOAD.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.FORM UNLOAD.Summary-->El comando **FORM UNLOAD** libera de la memoria el formulario actual designado utilizando el comando [FORM LOAD](form-load.md).<!-- END REF-->

Llamar este comando es necesario cuando se utiliza el comando [FORM LOAD](form-load.md) fuera del contexto de impresión (en el caso de la impresión, el formulario actual se cierra de nuevo automáticamente cuando se llama el comando [CLOSE PRINTING JOB](close-printing-job.md)).

#### Ver también 

[FORM LOAD](form-load.md)  