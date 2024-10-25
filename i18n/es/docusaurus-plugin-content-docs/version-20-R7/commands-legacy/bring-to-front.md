---
id: bring-to-front
title: BRING TO FRONT
slug: /commands/bring-to-front
displayed_sidebar: docs
---

<!--REF #_command_.BRING TO FRONT.Syntax-->**BRING TO FRONT** ( *proceso* )<!-- END REF-->
<!--REF #_command_.BRING TO FRONT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| proceso | Integer | &#8594;  | Número del proceso a pasar al primer plano |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.BRING TO FRONT.Summary-->BRING TO FRONT pasa todas las ventanas que pertenecen a *process* al primer plano.<!-- END REF--> Si el proceso ya está en el primer plano, el comando no hace nada. Si el proceso está oculto, debe utilizar [SHOW PROCESS](show-process.md) para mostrar el proceso, de lo contrario BRING TO FRONT no tiene efecto.

Los procesos Principal y Diseño pueden pasarse al primer plano utilizando este comando.

**Nota:** cuando el proceso contiene varias ventanas y quiere pasar al primer plano una ventana específica, es preferible utilizar por ejemplo, el comando [SET WINDOW RECT](set-window-rect.md).

#### Ejemplo 

El siguiente ejemplo es un método que puede ser ejecutado desde un menú. Él verifica si el proceso del primer plano es el proceso *<>Clientes*. Si no, el método lo pasa al primer plano:

```4d
 If(Frontmost process(◊Clientes)
    BRING TO FRONT(◊Clientes)
 End if
```

#### Ver también 

[HIDE PROCESS](hide-process.md)  
[Process state](process-state.md)  
[SHOW PROCESS](show-process.md)  