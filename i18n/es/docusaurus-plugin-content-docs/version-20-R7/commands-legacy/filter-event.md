---
id: filter-event
title: FILTER EVENT
slug: /commands/filter-event
displayed_sidebar: docs
---

<!--REF #_command_.FILTER EVENT.Syntax-->**FILTER EVENT**<!-- END REF-->
<!--REF #_command_.FILTER EVENT.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.FILTER EVENT.Summary-->Llame al comando **FILTER EVENT** desde el interior del método de gestión de eventos instalado utilizando el comando [ON EVENT CALL](on-event-call.md).<!-- END REF-->

Sin un método de gestión de eventos llama a **FILTER EVENT**, el evento actual no pasa a 4D.

Este comando le permite remover el evento actual (por ejemplo, clic, digitación de teclas) de la secuencia de eventos, de manera que 4D no efectúe ningún tratamiento adicional al que usted provocó en el método de gestión de eventos.

**Advertencia:** evite crear un método de gestión de eventos que sólo llame al comando **FILTER EVENT**, porque todos los eventos van a ser ignorados por 4D. En caso que tenga un método de gestión de eventos con el comando **FILTER EVENT**, digite Ctrl+Mayús+Retroceso (en Windows) o comando-Opción-Mayús-Control-Retroceso (en Macintosh). Esto convierte el proceso On Event Call en un proceso normal que no obtiene eventos.

**Caso especial:** el comando **FILTER EVENT** puede igualmente utilizarse en un método de formulario estándar cuando el formulario se visualiza utilizando los comandos [DISPLAY SELECTION](display-selection.md) o [MODIFY SELECTION](modify-selection.md). En este caso específico, el comando **FILTER EVENT** le permite filtrar los doble clics en los registros (y de esta manera ejecutar acciones diferentes a las de apertura de los registros en modo página).

Para hacer esto, coloque las siguientes líneas en el método del formulario de salida:

```4d
 If(Form event code=On Double Clicked)
    FILTER EVENT
    ... //Procesar el doble-clic
 End if
```

#### Ejemplo 

Ver el ejemplo del comando [ON EVENT CALL](on-event-call.md "ON EVENT CALL").

#### Ver también 

[ON EVENT CALL](on-event-call.md)  