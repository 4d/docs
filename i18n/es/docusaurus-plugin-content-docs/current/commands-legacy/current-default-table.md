---
id: current-default-table
title: Current default table
slug: /commands/current-default-table
displayed_sidebar: docs
---

<!--REF #_command_.Current default table.Syntax-->**Current default table**  : Pointer<!-- END REF-->
<!--REF #_command_.Current default table.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Pointer | &#8592; | Puntero hacia la tabla por defecto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Current default table.Summary-->Current default table devuelve un puntero hacia la tabla pasada a la última llamada de DEFAULT TABLE para el proceso actual.<!-- END REF-->

#### Ejemplo 

Siempre y cuando se haya definido una tabla por defecto, la siguiente línea de código asigna como título de la ventana al nombre de la tabla por defecto actual:

```4d
 SET WINDOW TITLE(Table name(Current default table))
```

#### Ver también 

[DEFAULT TABLE](default-table.md)  
[Table](table.md)  
[Table name](table-name.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 363 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


