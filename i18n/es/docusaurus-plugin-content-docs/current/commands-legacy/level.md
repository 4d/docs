---
id: level
title: Level
slug: /commands/level
displayed_sidebar: docs
---

<!--REF #_command_.Level.Syntax-->**Level**  : Integer<!-- END REF-->
<!--REF #_command_.Level.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Nivel de ruptura o del encabezado actual |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Level.Summary-->Level se utiliza para determinar el nivel de ruptura o del encabezado actual.<!-- END REF--> Devuelve el nivel de ruptura durante los eventos On Header y On Printing Break.

El nivel 0 es el último nivel a imprimir y es apropiado para la impresión de un total general. Level devuelve 1 cuando 4D imprime una ruptura en el primer campo de ordenación, 2 cuando 4D imprime una ruptura en el segundo campo ordenado, y así sucesivamente.

#### Ejemplo 

Este ejemplo es una plantilla para un método de formulario. Muestra cada evento posible mientras un informe utiliza un formulario como formulario de salida. Level se llama cuando un encabezado o una ruptura se están imprimiendo:

```4d
  // Método de formulario para un formulario de salida utilizado por un informe
 $vpFormTable:=Current form table
 Case of
  // ...
    :(FORM Event=On Header)
  // Se va a imprimir el área de encabezado
       Case of
          :(Before selection($vpFormTabla->))
  // El código para la primera ruptura del encabezado debe ir acá
          :(Level=1)
  // El código para la ruptura del encabezado nivel 1 debe ir acá
          :(Level=2)
  // El código para la ruptura del encabezado nivel 2 debe ir acá
  // ...
       End case
    :(FORM Event=On Printing Details)
  // Se va a imprimir un registro
  // El código para cada registro va acá
    :(FORM Event=On Printing Break)
  // Se va a imprimir un área de ruptura
       Case of
          :(Level=0)
  // El código para la ruptura 0 va acá
          :(Level=1)
  // El código para la ruptura 1 va acá
  // ...
       End case
    :(FORM Event=On Printing Footer)
       If(End selection($vpFormTabla->))
  // El código para el último pie de página debe ir acá
       Else
  // El código para un pie de página deber ir acá
       End if
 End case
```

#### Ver también 

[ACCUMULATE](accumulate.md)  
[BREAK LEVEL](break-level.md)  
[Form event code](../commands/form-event-code.md)  
[PRINT SELECTION](print-selection.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 101 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


