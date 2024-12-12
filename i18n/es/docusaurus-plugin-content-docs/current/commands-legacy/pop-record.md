---
id: pop-record
title: POP RECORD
slug: /commands/pop-record
displayed_sidebar: docs
---

<!--REF #_command_.POP RECORD.Syntax-->**POP RECORD** {( *tabla* )}<!-- END REF-->
<!--REF #_command_.POP RECORD.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla de la cual desapilar el registro actual o Tabla por defecto, si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.POP RECORD.Summary-->POP RECORD carga el primer registro de la pila de registros de la tabla y lo vuelve el registro actual.<!-- END REF--> 

Si apila un registro, luego crea una nueva selección actual que no incluye el registro apilado, y finalmente desapila el registro, entonces el registro actual no se encuentra en la selección actual. Para que el registro apilado esté en la selección actual, utilice [ONE RECORD SELECT](one-record-select.md "ONE RECORD SELECT"). 

Si utiliza un comando que mueva el puntero del registro actual antes de guardar el registro, perderá la copia apilada en memoria.  

#### Ejemplo 

El siguiente ejemplo recupera el registro de un cliente en la pila:

```4d
 POP RECORD([Clientes]) // Desapilar el registro
```

#### Ver también 

[PUSH RECORD](push-record.md)  
*Uso de la pila de registros*  