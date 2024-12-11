---
id: idle
title: IDLE
slug: /commands/idle
displayed_sidebar: docs
---

<!--REF #_command_.IDLE.Syntax-->**IDLE**<!-- END REF-->
<!--REF #_command_.IDLE.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.IDLE.Summary-->El comando IDLE está diseñado para utilizarse únicamente con el compilador.<!-- END REF--> Este comando se utiliza sólo en bases compiladas en las cuales los métodos definidos por el usuario se escriben de manera que no se hacen llamados al motor de 4D. Por ejemplo, si un método tiene un bucle For en el cual no se ejecutan comandos 4D, el bucle no puede ser interrumpido por un proceso instalado por [ON EVENT CALL](on-event-call.md "ON EVENT CALL"), y el usuario tampoco puede cambiar a otra aplicación. En este caso, debe insertar IDLE para permitir que 4D intercepte los eventos. Si no quiere interrupciones, omita IDLE.

#### Ejemplo 

En el siguiente Ejemplo, el bucle no terminaría nunca en una base compilada sin llamar a IDLE:

```4d
  // Método de proyecto Hacer algo
 ON EVENT CALL("METODO EVENTO")
 ◊vbParar:=False
 MESSAGE("Procesando..."+Char(13)+"Presione cualquier tecla para interrumpir...")
 Repeat
  // Hacer algún proceso que no involucre un comando 4D
    IDLE
 Until(◊vbParar)
 ON EVENT CALL("")
```

con:

```4d
  // Método de proyecto METODO EVENTO
 If(Undefined(KeyCode))
    KeyCode:=0
 End if
 If(KeyCode#0)
    CONFIRM("¿Está seguro de querer detener esta operación?")
    If(OK=1)
       ◊vbParar:=True
    End if
 End if
```

#### Ver también 

*Comandos del Compilador*  
[ON EVENT CALL](on-event-call.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 311 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


