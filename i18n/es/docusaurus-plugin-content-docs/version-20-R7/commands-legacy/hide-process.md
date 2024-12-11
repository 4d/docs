---
id: hide-process
title: HIDE PROCESS
slug: /commands/hide-process
displayed_sidebar: docs
---

<!--REF #_command_.HIDE PROCESS.Syntax-->**HIDE PROCESS** ( *proceso* )<!-- END REF-->
<!--REF #_command_.HIDE PROCESS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| proceso | Integer | &#8594;  | Número de proceso a ocultar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.HIDE PROCESS.Summary-->HIDE PROCESS oculta todas las ventanas que pertenecen a *proceso*.<!-- END REF--> Todos los elementos de interfaz de *proceso* se ocultan hasta el siguiente [SHOW PROCESS](show-process.md "SHOW PROCESS"). La barra de menús del proceso también se oculta. Esto significa que la apertura de una ventana mientras el proceso está oculto no provocará ningún cambio en la visualización en pantalla. Si el proceso ya está oculto, el comando no tiene ningún efecto.

La única excepción a esta regla es la ventana del depurador. Si la ventana del depurador se muestra cuando *proceso* es un proceso oculto, *proceso* se muestra y pasa al primer plano del proceso.  
  
Si no quiere que un *proceso* se muestre cuando es creado, HIDE PROCESS debe ser el primer comando en el método de proceso. Los procesos Usuario/Menús personalizados y los procesos de gestión de la caché no pueden ocultarse utilizando este comando. 

Aunque un proceso esté oculto, el proceso está aún en ejecución. 

#### Ejemplo 

El siguiente ejemplo oculta todas las ventanas que pertenecen al proceso actual:

```4d
 HIDE PROCESS(Current process)
```

#### Ver también 

[Process state](process-state.md)  
[SHOW PROCESS](show-process.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 324 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


