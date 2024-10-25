---
id: first-record
title: FIRST RECORD
slug: /commands/first-record
displayed_sidebar: docs
---

<!--REF #_command_.FIRST RECORD.Syntax-->**FIRST RECORD** {( *tabla* )}<!-- END REF-->
<!--REF #_command_.FIRST RECORD.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla de la cual cargar el primer registro de la selección actual o Tabla por defecto si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.FIRST RECORD.Summary-->FIRST RECORD hace del primer registro de la selección actual de *tabla* el registro actual y carga el registro del disco.<!-- END REF--> Todos los comandos de búsqueda, selección, y ordenación también establecen como primer registro el registro actual. Si la selección actual está vacía o si el registro actual ya es el primer registro de la selección, FIRST RECORD no tiene ningún efecto. 

Este comando se utiliza con frecuencia después del comando [USE SET](use-set.md "USE SET") para iniciar un bucle en la selección de registros a partir del primer registro. Sin embargo, también puede llamarlo desde una subrutina si no está seguro de si el registro actual es realmente el primero.

#### Ejemplo 

El siguiente ejemplo carga el primer registro de la tabla \[Clientes\]:

```4d
 FIRST RECORD([Clientes])
```

#### Ver también 

[Before selection](before-selection.md)  
[End selection](end-selection.md)  
[LAST RECORD](last-record.md)  
[NEXT RECORD](next-record.md)  
[PREVIOUS RECORD](previous-record.md)  