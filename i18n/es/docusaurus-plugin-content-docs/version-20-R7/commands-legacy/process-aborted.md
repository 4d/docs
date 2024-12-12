---
id: process-aborted
title: Process aborted
slug: /commands/process-aborted
displayed_sidebar: docs
---

<!--REF #_command_.Process aborted.Syntax-->**Process aborted**  : Boolean<!-- END REF-->
<!--REF #_command_.Process aborted.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True = el proceso va a abortarse, False = el proceso no va a ser abortado |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Process aborted.Summary-->El comando **Process aborted** devuelve **True** si el proceso en el cual se llama está a punto de ser interrumpido inesperadamente, es decir que la ejecución del comando no pudo terminar se ejecución “normal”.<!-- END REF-->

Este estado ocurrirá muy raramente. Los procesos suelen detenerse antes de que el código pueda notificar la condición de "proceso abortado". Esta condición sólo puede ocurrir en bucles compilados que no ejecutan ningún comando 4D. Para más información sobre cómo 4D maneja el cierre de procesos, por favor consulte la página [Método base On Exit](metodo-base-on-exit.md).

#### Ver también 

[Método base On Exit](metodo-base-on-exit.md)  