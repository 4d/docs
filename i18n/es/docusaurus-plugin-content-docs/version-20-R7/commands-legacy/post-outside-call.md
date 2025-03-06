---
id: post-outside-call
title: POST OUTSIDE CALL
slug: /commands/post-outside-call
displayed_sidebar: docs
---

<!--REF #_command_.POST OUTSIDE CALL.Syntax-->**POST OUTSIDE CALL** ( *proceso* )<!-- END REF-->
<!--REF #_command_.POST OUTSIDE CALL.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| proceso | Integer | &#8594;  | Número de proceso |

<!-- END REF-->

#### Compatibility Note 

<!--REF #_command_.POST OUTSIDE CALL.Summary-->This command was named **CALL PROCESS** in previous 4D releases.<!-- END REF--> 

#### Descripción 

**POST OUTSIDE CALL** llama al formulario mostrado en la ventana del primer plano de *proceso*. 

**Importante:** **POST OUTSIDE CALL** sólo funciona entre procesos que se ejecutan en el mismo equipo.

Si llama a un proceso que no existe, no pasa nada.

Si *proceso* (el proceso llamado) no está mostrando un formulario actualmente, no pasa nada. El formulario mostrado en el proceso llamado recibe un evento On Outside Call. Este evento debe haber sido seleccionado para ese formulario en la ventana **Propiedades del formulario** del entorno Diseño, y usted debe administrar el evento en el método de formulario. Si el evento no está seleccionado o si no es administrado en el método de formulario, el comando no hace nada. 

**Nota:** la recepción del evento On Outside Call en un formulario de entrada provoca el cambio del contexto de entrada del formulario. En particular, si un campo estaba siendo editado, se genera el evento On Data Change. 

El proceso llamante (el proceso en el cual el comando **POST OUTSIDE CALL** se ejecuta) no “espera”, **POST OUTSIDE CALL** tiene un efecto inmediato. Si es necesario, debe escribir un bucle de espera para tratar una eventual respuesta del proceso llamante, utilizando las variables interproceso o las variables proceso (reservadas para este propósito) que pueden ser leídas y escritas entre los dos procesos (utilizando [GET PROCESS VARIABLE](get-process-variable.md) y [SET PROCESS VARIABLE](set-process-variable.md)).

Para comunicarse entre procesos que no muestran formularios, utilice los comandos [GET PROCESS VARIABLE](get-process-variable.md) y [SET PROCESS VARIABLE](set-process-variable.md).

**Tip:** **POST OUTSIDE CALL** acepta la sintaxis alterna **POST OUTSIDE CALL**(-1). Para no volver lenta la ejecución de los métodos, 4D no rediseña las variables interproceso cada vez que son modificadas. Si pasa -1 en lugar de un número de referencia de proceso en el parámetro *proceso*, 4D no llama ningún proceso. En lugar de eso, rediseña todas las variables interproceso mostradas actualmente en todas las ventanas de todos los procesos que se ejecutan en el mismo equipo.

#### Ejemplo 

Ver el ejemplo de [On Exit Database Method](metodo-base-on-exit.md "On Exit Database Method").

#### Ver también 

[Form event code](../commands/form-event-code.md)  
[GET PROCESS VARIABLE](get-process-variable.md)  
[SET PROCESS VARIABLE](set-process-variable.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 329 |
| Hilo seguro | &cross; |
| Prohibido en el servidor ||


