---
id: set-timer
title: SET TIMER
slug: /commands/set-timer
displayed_sidebar: docs
---

<!--REF #_command_.SET TIMER.Syntax-->**SET TIMER** ( *ticCont* )<!-- END REF-->
<!--REF #_command_.SET TIMER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ticCont | Integer | &#8594;  | Número de tics |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET TIMER.Summary-->El comando SET TIMER permite activar el evento de formulario On Timer y fijar, para el proceso y formulario actual, el número de tics (1 tic = 1/60 de segundo) entre cada evento de formulario On Timer.<!-- END REF--> 

**Nota:** para mayor información sobre este evento de formulario, consulte la descripción del comando [Form event](form-event.md "Form event").

Este comando no tendrá efecto si se llama en un contexto en el que no muestra un formulario.

**Nota:** cuando el comando SET TIMER se ejecuta en el contexto de un subformulario (método de formulario del subformulario), se genera el evento On Timer en el subformulario y no al nivel del formulario padre. 

Si pasa -1 en el parámetro *tickCount*, el comando activará el evento de formulario On Timer "tan pronto como sea posible", en otras palabras, tan pronto como la aplicación 4D tome el control del administrador de eventos. Este principio permite asegurar que un formulario se muestre completamente antes de iniciar un proceso (fluidez de la aplicación).

Para desactivar por programación el disparador del evento de formulario On Timer, llame nuevamente a SET TIMER y pase 0 en *ticCont*.

#### Ejemplo 

Imaginemos que usted quiere, cuando un formulario aparece en pantalla, que el ordenador haga bip cada tres segundos. Para hacer esto, escriba el siguiente método de formulario: 

```4d
 If(Form event code=On Load)
    SET TIMER(60*3)
 End if
 
 If(Form event code=On Timer)
    BEEP
 End if
```

#### Ver también 

[Form event code](../commands/form-event-code.md)"  
[REDRAW](redraw.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 645 |
| Hilo seguro | &cross; |


