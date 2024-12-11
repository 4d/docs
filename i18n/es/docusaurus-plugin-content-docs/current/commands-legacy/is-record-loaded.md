---
id: is-record-loaded
title: Is record loaded
slug: /commands/is-record-loaded
displayed_sidebar: docs
---

<!--REF #_command_.Is record loaded.Syntax-->**Is record loaded** {( *tabla* )} : Boolean<!-- END REF-->
<!--REF #_command_.Is record loaded.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla del registro a examinar o Tabla por defecto si se omite este parámetro |
| Resultado | Boolean | &#8592; | True si se carga el registro Si no False |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Is record loaded.Summary-->El comando Is record loaded devuelve True si si el registro actual de *tabla* se carga en el proceso actual.<!-- END REF-->devolverá False en modo remoto (devuelve True en modo local).

#### Ejemplo 

En lugar de utilizar las acciones automáticas “Siguiente registro” o “Registro anterior”, puede escribir los métodos de objeto para estos botones para mejorar su operación. El botón “Siguiente” muestra el comienzo de la selección si el usuario está al principio de la selección y el botón “Anterior” muestra el final de la selección cuando el usuario está al comienzo de la selección. 

```4d
  // Método de objeto del botón “Anterior” (sin acción automática)
 If(FORM Event=On Clicked)
    PREVIOUS RECORD([Grupo])
    If(Not(Is record loaded([Grupo])))
       GOTO SELECTED RECORD([Grupo];Records in selection([Grupo]))
  //Ir al último registro de la selección
    End if
 End if
 
  // Método de objeto del botón “Siguiente” (sin acción automática)
 If(FORM Event=On Clicked)
    NEXT RECORD([Grupo])
    If(Not(Is record loaded([Grupo])))
       GOTO SELECTED RECORD([Grupos];1)
  //Ir al primer registro de la selección
    End if
 End if
```


#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 669 |
| Hilo seguro | &check; |


