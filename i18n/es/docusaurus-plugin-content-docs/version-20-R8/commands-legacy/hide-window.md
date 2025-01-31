---
id: hide-window
title: HIDE WINDOW
slug: /commands/hide-window
displayed_sidebar: docs
---

<!--REF #_command_.HIDE WINDOW.Syntax-->**HIDE WINDOW** {( *ventana* )}<!-- END REF-->
<!--REF #_command_.HIDE WINDOW.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ventana | Integer | &#8594;  | Número de referencia de la ventana o Ventana del primer plano del proceso actual, si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.HIDE WINDOW.Summary-->El comando HIDE WINDOW permite ocultar la ventana cuyo número de referencia se pasa en *ventana* o, si se omite este parámetro, la ventana del primer plano del proceso actual.<!-- END REF--> Este comando permite, por ejemplo, en un proceso con varias ventanas, mostrar únicamente la ventana activa. 

La ventana desaparece de la pantalla pero permanece abierta. Puede aplicar por programación cambios soportados por las ventanas 4D. 

Para mostrar una ventana oculta por el comando HIDE WINDOW:

* Utilice el comando [SHOW WINDOW](show-window.md "SHOW WINDOW") y pase el número de referencia de la ventana.
* Utilice la página **Proceso** del Explorador de ejecución. Seleccione el proceso en el cual se manipula la ventana, luego haga clic en el botón **Mostrar**.

Para ocultar todas las ventanas de un proceso, utilice el comando [HIDE PROCESS](hide-process.md "HIDE PROCESS").

#### Ejemplo 

Este ejemplo corresponde a un método de un botón ubicado en un formulario de entrada. Este botón abre una caja de diálogo en una nueva ventana del mismo proceso. En este ejemplo, el usuario quiere ocultar las otras ventanas del proceso (un formulario de entrada y una paleta de herramientas) mientras muestra la caja de diálogo. Una vez validada la caja de diálogo, otras ventanas de proceso se muestran nuevamente.

```4d
  // Método de objeto del botón "Informacion"
 
 HIDE WINDOW(Entrada) // Ocultar la ventana de entrada
 HIDE WINDOW(Paleta) // Ocultar la paleta
 $Infos:=Open window(20;100;500;400;8) // Crear la ventana de información
 ... // Colocar aquí las instrucciones necesarias para la administración del diálogo
 CLOSE WINDOW($Infos) // Cerrar el diálogo
 SHOW WINDOW(Entrada)
 SHOW WINDOW(Paleta) // Mostrar las otras ventanas del proceso
```

#### Ver también 

[SHOW WINDOW](show-window.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 436 |
| Hilo seguro | &cross; |


