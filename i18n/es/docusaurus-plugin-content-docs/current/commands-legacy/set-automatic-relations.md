---
id: set-automatic-relations
title: SET AUTOMATIC RELATIONS
slug: /commands/set-automatic-relations
displayed_sidebar: docs
---

<!--REF #_command_.SET AUTOMATIC RELATIONS.Syntax-->**SET AUTOMATIC RELATIONS** ( *uno* {; *muchos*} )<!-- END REF-->
<!--REF #_command_.SET AUTOMATIC RELATIONS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| uno | Boolean | &#8594;  | Estado de todas las relaciones Muchos a Uno |
| muchos | Boolean | &#8594;  | Estado de todas las relaciones de Uno a Muchos |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET AUTOMATIC RELATIONS.Summary-->SET AUTOMATIC RELATIONS cambia temporalmente todas las relaciones manuales en relaciones automáticas para toda la base en el proceso actual.<!-- END REF--> Las relaciones permanecen automáticas a menos que se realice una llamada posterior a SET AUTOMATIC RELATIONS.

* Si *uno* es true, entonces todas las relaciones Muchos a Uno se vuelven automáticas. Si *uno* es false, todas las relaciones Muchos a Uno se vuelven manuales.
* Si *muchos* es true, entonces todas las relaciones Uno a Muchos se vuelven automáticas. Si *muchos* es false, todas las relaciones Uno a Muchos se vuelven manuales.

Este comando cambia relaciones definidas como manuales en modo Diseño a automáticas, justo antes de ejecutar operaciones que requieran que sean automáticas (tales como búsquedas relacionales y ordenaciones). Una vez termina la operación, las relaciones pueden cambiarse a manuales llamando nuevamente a **SET AUTOMATIC RELATIONS**. La relaciones definidas como automáticas en el entorno Diseño no son afectadas por este comando.

**Notas:** 

* Cuando pase [True](true.md "True") al comando **SET AUTOMATIC RELATIONS**, el modo automático se "bloquea" para todas las relaciones manuales durante la sesión. En este caso, todas las llamadas al comando [SET FIELD RELATION](set-field-relation.md) durante la misma sesión se ignoran, sin importar si estaban antes o después de **SET AUTOMATIC RELATIONS**. Para "desbloquear" el modo automático y tener en cuenta las llamadas a [SET FIELD RELATION](set-field-relation.md), pase [False](false.md "False") a **SET AUTOMATIC RELATIONS**.
* Las funcionalidades automáticas se desactivan cuando las tablas relacionadas se visualizan en un formulario listado mostrado utilizando [DISPLAY SELECTION](display-selection.md), [MODIFY SELECTION](modify-selection.md), o un subformulario. Ver *Relaciones manuales y automáticas*.

#### Ejemplo 

El siguiente ejemplo vuelve automáticas todas las relaciones Muchos a Uno y restablece a manual todas las relaciones Uno a Muchos cambiadas previamente:

```4d
 SET AUTOMATIC RELATIONS(True;False)
```

#### Ver también 

[GET AUTOMATIC RELATIONS](get-automatic-relations.md)  
[GET RELATION PROPERTIES](get-relation-properties.md)  
*Relaciones*  
[SELECTION RANGE TO ARRAY](selection-range-to-array.md)  
[SELECTION TO ARRAY](selection-to-array.md)  
[SET FIELD RELATION](set-field-relation.md)  